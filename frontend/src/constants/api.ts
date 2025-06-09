export const API_ENDPOINTS = {
  POSTS: {
    LIST: '/api/posts',
    DETAIL: (id: string | number) => `/api/posts/${id}`,
  },
} as const; 