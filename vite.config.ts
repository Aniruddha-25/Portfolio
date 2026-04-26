import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Use '/Portfolio/' base for GitHub Pages builds (set GH_PAGES=1).
// Otherwise serve from root, which works for the Replit dev server and
// the Replit static deployment.
export default defineConfig(() => ({
  base: process.env.GH_PAGES === '1' ? '/Portfolio/' : '/',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true as const,
  },
  preview: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true as const,
  },
}))
