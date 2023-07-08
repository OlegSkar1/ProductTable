import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), checker({ typescript: true, overlay: false })],
  server: {
    open: true,
    hmr: {
      overlay: false,
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
