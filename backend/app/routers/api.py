from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from sqlalchemy.exc import SQLAlchemyError
from typing import List, Optional
from pydantic import BaseModel

from app.database import get_db
from app.models.post import Post, PostCreate, PostUpdate, PostResponse

router = APIRouter(prefix="/posts", tags=["posts"])

class PostListResponse(BaseModel):
    """Response model for paginated post list."""
    posts: List[PostResponse]
    total: int
    page: int
    pages: int

def get_post_or_404(db: Session, post_id: int) -> Post:
    """Get post by ID or raise 404 if not found."""
    post = db.query(Post).filter(Post.id == post_id).first()
    if post is None:
        raise HTTPException(status_code=404, detail="Post not found")
    return post

def handle_db_error(db: Session, e: Exception):
    """Handle database errors and rollback transaction."""
    db.rollback()
    raise HTTPException(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        detail=str(e)
    )

@router.get("/", response_model=PostListResponse)
async def get_posts(
    page: int = 1,
    limit: int = 10,
    search: Optional[str] = None,
    db: Session = Depends(get_db)
) -> PostListResponse:
    """
    Get paginated list of posts.

    Args:
        page: Page number (default: 1)
        limit: Number of posts per page (default: 10)
        search: Optional search term for title and content
        db: Database session

    Returns:
        PostListResponse: Paginated list of posts
    """
    try:
        query = db.query(Post)
        
        # Add search filter if provided
        if search:
            query = query.filter(
                Post.title.ilike(f"%{search}%") |
                Post.content.ilike(f"%{search}%")
            )

        # Get total count before applying pagination
        total = query.count()
        
        # Apply pagination
        posts = query.order_by(Post.created_at.desc()) \
            .offset((page - 1) * limit) \
            .limit(limit) \
            .all()

        # Calculate total pages
        pages = (total + limit - 1) // limit

        return PostListResponse(
            posts=[PostResponse.from_orm(post) for post in posts],
            total=total,
            page=page,
            pages=pages
        )
    except SQLAlchemyError as e:
        handle_db_error(db, e)

@router.post("/", response_model=PostResponse, status_code=status.HTTP_201_CREATED)
async def create_post(
    post: PostCreate,
    db: Session = Depends(get_db)
) -> PostResponse:
    """
    Create a new blog post.

    Args:
        post: PostCreate model containing title and content
        db: Database session

    Returns:
        PostResponse: Created post with id and timestamps

    Raises:
        HTTPException: If database operation fails
    """
    try:
        db_post = Post(**post.model_dump())
        db.add(db_post)
        db.commit()
        db.refresh(db_post)
        return PostResponse.from_orm(db_post)
    except SQLAlchemyError as e:
        handle_db_error(db, e)

@router.get("/{post_id}", response_model=PostResponse)
async def get_post(
    post_id: int,
    db: Session = Depends(get_db)
) -> PostResponse:
    """
    Get a single post by ID.

    Args:
        post_id: ID of the post to retrieve
        db: Database session

    Returns:
        PostResponse: Post with the specified ID

    Raises:
        HTTPException: If post is not found
    """
    try:
        post = get_post_or_404(db, post_id)
        return PostResponse.from_orm(post)
    except SQLAlchemyError as e:
        handle_db_error(db, e)

@router.put("/{post_id}", response_model=PostResponse)
async def update_post(
    post_id: int,
    post: PostUpdate,
    db: Session = Depends(get_db)
) -> PostResponse:
    """
    Update an existing post.

    Args:
        post_id: ID of the post to update
        post: PostUpdate model containing updated fields
        db: Database session

    Returns:
        PostResponse: Updated post

    Raises:
        HTTPException: If post is not found or database operation fails
    """
    try:
        db_post = get_post_or_404(db, post_id)
        post_data = post.model_dump(exclude_unset=True)
        
        # Update only specified fields
        for key, value in post_data.items():
            setattr(db_post, key, value)

        db.commit()
        db.refresh(db_post)
        return PostResponse.from_orm(db_post)
    except SQLAlchemyError as e:
        handle_db_error(db, e)

@router.delete("/{post_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_post(
    post_id: int,
    db: Session = Depends(get_db)
):
    """
    Delete a post by ID.

    Args:
        post_id: ID of the post to delete
        db: Database session

    Raises:
        HTTPException: If post is not found or database operation fails
    """
    try:
        db_post = get_post_or_404(db, post_id)
        db.delete(db_post)
        db.commit()
    except SQLAlchemyError as e:
        handle_db_error(db, e)
