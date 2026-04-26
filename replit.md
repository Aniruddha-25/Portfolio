# Portfolio (Aniruddha Salvankar)

Personal portfolio website built with React 19 + TypeScript + Vite.

## Tech Stack
- React 19 + TypeScript
- Vite 8 (dev server / bundler)
- Font Awesome icons, EmailJS for contact form

## Project Layout
- `index.html` — Vite entry HTML
- `src/main.tsx`, `src/App.tsx` — app entry
- `src/components/` — feature-grouped components (home, about, projects, etc.)
- `src/styles/`, `src/index.css` — global styles
- `src/assets/img/` — bundled images
- `public/` — static assets served as-is (favicon, data JSON)
- `vite.config.ts` — Vite config
- `dist/` — production build output

## Replit Setup
- The `Start application` workflow runs `npm run dev`.
- Vite is configured to listen on `0.0.0.0:5000` with `allowedHosts: true` so the Replit preview proxy can reach it.
- `vite.config.ts` uses base `'/'` by default; pass `GH_PAGES=1` when building for the original GitHub Pages deploy (`/Portfolio/`).

## Deployment
- Configured as a Replit `static` deployment.
  - Build: `npm run build`
  - Public dir: `dist`
- The original `npm run deploy` script (gh-pages) is preserved for GitHub Pages.
