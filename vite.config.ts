import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/deckhand/',
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
  server: {
    historyApiFallback: true, // 👈 Ensures client-side routing works
  },
});
