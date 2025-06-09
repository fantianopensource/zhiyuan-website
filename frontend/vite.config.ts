import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path aliases configuration
const pathAlias = {
  '@': path.resolve(__dirname, 'src'),
  '@components': path.resolve(__dirname, 'src/components'),
  '@pages': path.resolve(__dirname, 'src/pages'),
  '@assets': path.resolve(__dirname, 'src/assets'),
  '@types': path.resolve(__dirname, 'src/types'),
  '@constants': path.resolve(__dirname, 'src/constants'),
  '@services': path.resolve(__dirname, 'src/services'),
} as const;

// Proxy configuration
const proxyConfig = {
  '/api': {
    target: process.env.VITE_API_BASE_URL || 'http://localhost:8000',
    changeOrigin: true,
    secure: false,
  },
};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    resolve: {
      alias: pathAlias,
    },
    server: {
      port: 3000,
      proxy: proxyConfig,
    },
    define: {
      'import.meta.env': env,
    },
    build: {
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
            mui: ['@mui/material'],
          },
        },
      },
    },
  };
});
