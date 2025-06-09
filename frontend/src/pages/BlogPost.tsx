import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, CircularProgress, Container, Typography, Button } from '@mui/material';
import { format } from 'date-fns';
import { getPostById } from '@/services/postService';
import type { Post } from '@/types/post';

export function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) {
        setError('Post ID is required');
        setLoading(false);
        return;
      }

      try {
        const data = await getPostById(Number(id));
        setPost(data);
      } catch (err) {
        setError('Failed to load post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error || !post) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box textAlign="center">
          <Typography variant="h5" color="error" gutterBottom>
            {error || 'Post not found'}
          </Typography>
          <Button 
            variant="contained" 
            onClick={() => navigate('/blog')}
            sx={{ mt: 2 }}
          >
            Back to Blog
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <article>
        <Typography variant="h3" component="h1" gutterBottom>
          {post.title}
        </Typography>
        
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {format(new Date(post.created_at), 'MMMM d, yyyy')}
        </Typography>

        <Typography 
          variant="body1" 
          sx={{ 
            mt: 4,
            whiteSpace: 'pre-wrap',
            lineHeight: 1.8
          }}
        >
          {post.content}
        </Typography>
      </article>
    </Container>
  );
}

export default BlogPost;
