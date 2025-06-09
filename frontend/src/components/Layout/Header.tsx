import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import ReactLogo from '../../assets/react.svg';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/blog', label: 'Blog' },
] as const;

const styles = {
  logo: {
    marginRight: 2,
    '&:hover': {
      animation: 'spin 4s linear infinite',
    },
    '@keyframes spin': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
  },
  navButton: {
    mx: 1,
    '&.MuiButton-root': {
      color: 'primary.main',
      '&:hover': {
        backgroundColor: 'action.hover',
      },
      '&.Mui-disabled': {
        color: 'text.secondary',
      },
    },
  },
} as const;

export const Header = () => {
  const location = useLocation();

  return (
    <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Box 
            component="img"
            src={ReactLogo}
            alt="React Logo"
            loading="lazy"
            width={40}
            height={40}
            sx={styles.logo}
          />
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1, 
              display: { xs: 'none', sm: 'block' },
              color: 'text.primary',
            }}
          >
            Zhiyuan Website
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {navItems.map(({ path, label }) => (
            <Button 
              key={path}
              component={RouterLink} 
              to={path}
              disabled={location.pathname === path}
              sx={styles.navButton}
            >
              {label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
