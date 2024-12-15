import { defineConfig } from 'vite'
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? '/notes/' : '/',
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    }
  },
  server: {
    open: true,
  },
})
