import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Set base to '/Portfolio/' for GitHub Pages
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
})
