# SijanBro — Personal Portfolio

A responsive, single-page portfolio built with React and Vite to showcase projects, skills, and contact information.

This repository contains the source for a lightweight, mobile-first portfolio site with client-side routing and simple UI components.

## Highlights

- React (Vite) application with client-side routing (React Router)
- Tailwind CSS + Sass for styling and layout
- Responsive layout with dedicated components: `NavBar`, `Home`, `About`, `Projects`, `Resume`, `Contact`, and `Footer`
- Small-device improvements (toasts, mobile navigation) and a decorative star background

## Tech stack

- React 19
- Vite (dev/build tooling)
- Tailwind CSS, Sass
- react-router-dom, react-icons, react-toastify, react-typed

## Scripts

Install dependencies and run locally:

```bash
npm install
npm run dev    # start development server (Vite)
npm run build  # build production bundle
npm run preview # locally preview production build
```

## Project structure (important files)

- `public/` — static assets (images used in `Home` and other pages)
- `src/` — application source
  - `main.jsx` — entry, Router setup
  - `App.jsx` — top-level routes and layout
  - `components/` — UI components and pages (NavBar, Home, About, Projects, Resume, Contact, Footer)
  - `index.css`, `star-background.scss` — global styles and background

## Customize

- Replace images in `public/imgs` and update personal text in `src/components/*` (Home, About, Resume).
- Update social links in `Home` and `Footer` to point to your profiles.
- Tune Tailwind or SCSS variables to adapt theme colors and spacing.

## Deployment

Build the site and deploy the generated `dist` directory to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages).

## License

MIT — change or add a LICENSE file if you need a different license.

---

If you want, I can also: tidy package.json scripts, add a production-ready metadata (Open Graph/SEO), or create a quick deploy config for Netlify/Vercel.
