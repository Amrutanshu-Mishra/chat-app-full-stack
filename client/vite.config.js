import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // This maps '@' to your 'src' folder
    },
  },
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext', // Ensure compatibility with modern browsers
  },
});
