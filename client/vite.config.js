import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // You can change this port as needed
  },
  build: {
    target: 'esnext', // Ensure compatibility with modern browsers
  },
});
