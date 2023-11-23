import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
    open: true,
    server: {
      proxy: {
        'reservations': 'http://localhost:4000',
      },
    },
    '/graphql': {
      target: 'http://localhost:5001',
      secure: false,
      changeOrigin: true,
    },
  },
  build: {
    rollupOptions: {
      external: ['redux-thunk'], 
    },
  },
});
