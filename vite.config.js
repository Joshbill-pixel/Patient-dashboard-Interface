import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Patient-dashboard-Interface/',
  server: {
    proxy: {
      '/api': {
        target: 'https://fedskillstest.coalitiontechnologies.workers.dev',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    port: 5174
  }
})
