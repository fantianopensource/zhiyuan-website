import axios, { AxiosError } from 'axios';
import { API_ENDPOINTS } from '@constants/api';
import type { Post, PostCreate, PostUpdate, PostListResponse } from '@/types/post';

/**
 * Get posts list with pagination
 */
export const getPosts = async (page: number = 1, limit: number = 10, search?: string): Promise<PostListResponse> => {
  try {
    const response = await axios.get<PostListResponse>(API_ENDPOINTS.POSTS.LIST, {
      params: { page, limit, search }
    });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Error fetching posts:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
        request: error.request,
      });
    }
    throw error;
  }
};

/**
 * Get single post by ID
 */
export const getPostById = async (id: number): Promise<Post> => {
  try {
    const response = await axios.get<Post>(API_ENDPOINTS.POSTS.DETAIL(id));
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(`Error fetching post ${id}:`, {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
        request: error.request,
      });
    }
    throw error;
  }
};

/**
 * Create new post
 */
export const createPost = async (post: PostCreate): Promise<Post> => {
  try {
    const response = await axios.post<Post>(API_ENDPOINTS.POSTS.LIST, post);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Error creating post:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
        request: error.request,
      });
    }
    throw error;
  }
};

/**
 * Update existing post
 */
export const updatePost = async (id: number, post: PostUpdate): Promise<Post> => {
  try {
    const response = await axios.put<Post>(API_ENDPOINTS.POSTS.DETAIL(id), post);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(`Error updating post ${id}:`, {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
        request: error.request,
      });
    }
    throw error;
  }
};

/**
 * Delete post
 */
export const deletePost = async (id: number): Promise<void> => {
  try {
    await axios.delete(API_ENDPOINTS.POSTS.DETAIL(id));
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(`Error deleting post ${id}:`, {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
        request: error.request,
      });
    }
    throw error;
  }
};
