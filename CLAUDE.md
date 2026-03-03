# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Odysseia is the public-facing marketing website for [Polis](https://pol.is), an open-source collective decision-making platform by compdemocracy. The aesthetic is "space-age civic tech" — modern, nerdy, optimistic, and pragmatic with a scrappy nonprofit vibe.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Production build to ./dist/
npm run preview   # Preview production build locally
```

No linter or test runner is configured yet.

## Tech Stack

- **Astro 5** — static site generator (file-based routing in `src/pages/`)
- **Tailwind CSS 4** — integrated via `@tailwindcss/vite` plugin (uses Tailwind 4's `@theme` and `@layer` syntax, not a `tailwind.config.js`)
- **TypeScript** — strict mode, extends `astro/tsconfigs/strict`
- **Fonts** — Space Grotesk (display), Inter (body), JetBrains Mono (code) via Google Fonts

## Architecture

```
src/
├── pages/           # Astro file-based routes (.astro files)
├── layouts/         # HTML wrapper templates (Layout.astro is the base)
├── components/      # Reusable Astro components (not yet populated)
├── styles/
│   └── global.css   # Tailwind theme definition + base styles
└── assets/          # Static assets (not yet populated)
docs/                # Project planning and design documentation
```

## Design System

The custom Tailwind theme is defined in `src/styles/global.css` using Tailwind 4's `@theme` block. Key tokens:

- **Primary palette:** `polis-50` through `polis-950` (based on `#03a9f4`)
- **Neutrals:** slate grays for text, borders, backgrounds
- **Accent:** amber for CTAs and highlights
- **Semantic:** success, warning, error, info colors

Refer to `docs/DESIGN_SYSTEM.md` for full design principles, color usage rules, typography specs, and component patterns. The living style guide is at `src/pages/style-guide.astro`.

## Project Roadmap

See `docs/PROJECT_PLAN.md` for the 6-phase delivery plan. The project is currently in early phases (design foundation + information architecture). `docs/INFORMATION_ARCHITECTURE.md` contains the sitemap, personas, and page structures. `docs/START_HERE.md` has the project brief and background context.

## Conventions

- Light mode only (no dark mode)
- Astro components use TypeScript `Props` interfaces
- Max prose width of 70ch for readability
- Links use custom underline animation on hover (defined in global.css base layer)
- Focus rings use 2px solid polis-500
