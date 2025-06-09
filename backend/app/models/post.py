from sqlalchemy import Column, Integer, String, Text, DateTime, func
from pydantic import BaseModel
from typing import Optional
from app.database import Base

class Post(Base):
    """SQLAlchemy model for blog posts."""
    __tablename__ = "posts"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), index=True)
    content = Column(Text)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

class PostCreate(BaseModel):
    """Pydantic model for creating new posts."""
    title: str
    content: str

class PostUpdate(BaseModel):
    """Pydantic model for updating posts."""
    title: Optional[str] = None
    content: Optional[str] = None

from datetime import datetime

class PostResponse(BaseModel):
    """Pydantic model for post response."""
    id: int
    title: str
    content: str
    created_at: datetime
    updated_at: datetime | None = None

    model_config = {
        "from_attributes": True
    }
