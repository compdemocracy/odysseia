# Odysseia — Project Plan

*Codename for the new public-facing pages for Polis / The Computational Democracy Project.*

## Phase 1 — Design Foundation

Codify the visual language into a living reference: color system, typography, spacing scale, component patterns, and tone-of-voice guidelines. Deliverables:

- `docs/DESIGN_SYSTEM.md` — Written specification
- `/style-guide` — Live Astro page rendering every token and component
- `src/styles/global.css` — Tailwind 4 theme configuration

## Phase 2 — Information Architecture

Map the sitemap and user journeys for each persona (hobbyist, researcher, large org / state actor, OSS contributor, investor / donor). Decide on page count, navigation structure, and CTA placement. Deliverables:

- `docs/INFORMATION_ARCHITECTURE.md` — Sitemap, user flows, annotated wireframe diagrams
- Nav component wired to real routes (even if pages are stubs)

## Phase 3 — Component Library + Layout Wireframes

Build reusable Astro components (header, footer, hero, feature cards, testimonial blocks, tier comparison, CTA blocks) with real Tailwind styling and placeholder content. Wire up all page routes. Deliverables:

- `src/components/*` — Full component library
- All page routes clickable with representative layout, even if copy is lorem ipsum

## Phase 4 — Copy and Content

Write real, persona-aware copy for every page. Craft the elevator pitch, use-case narratives, tier descriptions, "About" story, and CTAs. Some copy may go through a separate review cycle. Deliverables:

- Final copy in every page
- Tone-of-voice consistency pass

## Phase 5 — Interactive / Rich Content

Data visualizations, animated elements, embedded demos or sample Polis conversations. The "wow factor" layer. Deliverables:

- At least one interactive data visualization (e.g., opinion clustering demo)
- Any motion/animation polish

## Phase 6 — Polish and QA

Responsive audit, accessibility (a11y) pass, performance budget check, meta tags, Open Graph images, favicon set, final review. Deliverables:

- Lighthouse scores ≥ 90 across the board
- OG image set
- Production-ready `dist/`
