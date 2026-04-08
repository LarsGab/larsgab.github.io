# Academic Personal Website

A minimalist academic personal website built with [Astro](https://astro.build), ready for deployment to GitHub Pages.

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build

```bash
npm run build
```

The static output is generated in `dist/`.

### Preview the Build

```bash
npm run preview
```

---

## Deployment to GitHub Pages

1. **Configure `astro.config.mjs`** — replace `username` with your GitHub username and, if your repository is not named `<username>.github.io`, set `base` to your repo name:

   ```js
   export default defineConfig({
     site: 'https://your-username.github.io',
     base: '/',          // or '/your-repo-name' if needed
   });
   ```

2. **Push to GitHub** — the included GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically build and deploy on every push to `main`.

3. **Enable GitHub Pages** in your repository settings:
   - Go to **Settings → Pages**
   - Source: **GitHub Actions**

---

## Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── avatar-placeholder.svg
├── src/
│   ├── components/
│   │   ├── Header.astro       # Sticky top navigation bar
│   │   └── Footer.astro       # Site footer with social links
│   ├── layouts/
│   │   ├── BaseLayout.astro   # Root HTML shell (head, body, header, footer)
│   │   └── PageLayout.astro   # Content page wrapper with optional heading
│   ├── pages/
│   │   ├── index.astro        # Bio / Homepage
│   │   ├── publications.astro # Publication list
│   │   ├── service.astro      # Service & teaching
│   │   └── contact.astro      # Contact information
│   └── styles/
│       └── global.css         # Design tokens, reset, utility classes
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions deploy workflow
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Customisation

- **Personal info**: Update name, position, and content in each page under `src/pages/`.
- **Navigation links**: Edit the `navLinks` array in `src/components/Header.astro`.
- **Colors & typography**: Adjust CSS custom properties at the top of `src/styles/global.css`.
- **New pages**: Create a new `.astro` file in `src/pages/` and add a link in `Header.astro`.
