import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Maps '@' to your 'src' folder
    },
  },
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext', // Ensure compatibility with modern browsers
    chunkSizeWarningLimit: 1000, // Increase chunk size limit to 1000 KB to avoid warning
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split dependencies into separate chunks
          if (id.includes('node_modules')) {
            return id.split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
});
