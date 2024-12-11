import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    watch:{
      usePolling: true,
    },
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // FastAPI 后端服务地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // 去掉 `/api` 前缀
      },
    },
  },
});
