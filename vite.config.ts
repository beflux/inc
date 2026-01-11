import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // カスタムドメイン使用時は '/', GitHub Pages のみの場合は '/inc/'
  base: process.env.CUSTOM_DOMAIN ? '/' : '/inc/',
})
