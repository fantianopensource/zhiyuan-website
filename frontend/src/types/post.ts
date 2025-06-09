export interface Post {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string | null;
}

export interface PostCreate {
  title: string;
  content: string;
}

export interface PostUpdate {
  title?: string;
  content?: string;
}

export interface PostListResponse {
  posts: Post[];
  total: number;
  page: number;
  pages: number;
}

export interface PostParams {
  page?: number;
  limit?: number;
  search?: string;
}
