import { Box, Typography, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ 
      display: 'grid', 
      gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
      gap: 4,
      maxWidth: '1200px',
      mx: 'auto',
      alignItems: 'stretch'
    }}>
      <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h3" gutterBottom>
          Welcome to My Personal Website
        </Typography>
        <Typography variant="h6" paragraph sx={{ flexGrow: 1 }}>
          I'm a passionate developer and this is my personal space to share my thoughts and projects.
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => navigate('/blog')}
          sx={{ mt: 2, alignSelf: 'flex-start' }}
        >
          Read My Blog
        </Button>
      </Paper>
      
      <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ 
          height: { xs: 200, sm: 250, md: 300 },
          overflow: 'hidden', 
          position: 'relative', 
          bgcolor: '#f5f5f5' 
        }}>
          <Box
            component="img"
            src="https://picsum.photos/seed/home-hero/1200/600"
            alt="Technology"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://picsum.photos/1200/600?random=${Date.now()}`;
              target.onerror = () => {
                target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgODAwIDQwMCI+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2Y1ZjVmNSIvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIGZpbGw9IiNjY2MiPk5vIEltYWdlIEF2YWlsYWJsZTwvdGV4dD4KPC9zdmc+';
              };
            }}
          />
        </Box>
        <Box sx={{ p: 3, flexGrow: 1 }}>
          <Typography variant="h3" gutterBottom>
            Latest Project
          </Typography>
          <Typography variant="h6" paragraph>
            Check out my latest project that showcases modern web development practices and technologies.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Home;
