import { Box, Container, useTheme } from '@mui/material';
import type { ReactNode } from 'react';
import { Header } from './Header';

export interface LayoutProps {
  children: ReactNode;
}

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100%',
  },
  main: {
    flex: 1,
    width: '100%',
    py: 3, // Add vertical padding
  },
} as const;

export const Layout = ({ children }: LayoutProps) => {
  const theme = useTheme();

  return (
    <Box
      component="div"
      sx={{
        ...styles.root,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Header />
      <Container 
        component="main" 
        maxWidth="lg" 
        sx={styles.main}
      >
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
