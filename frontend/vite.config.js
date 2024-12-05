import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // 使 Vite 服务监听所有的网络接口
    port: 5173         // 确保端口设置正确
  }
})
