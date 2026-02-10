# Odysseia Design System

*Version 0.1 — Phase 1 draft, subject to iteration.*

## Guiding Principles

1. **Clarity over cleverness.** Polis helps people find common ground. The design should do the same: immediately legible, never ambiguous.
2. **Substance over polish.** We're a scrappy nonprofit that ships real technology used by real governments. The site should feel *built*, not *decorated*.
3. **Warmth without softness.** Light mode, generous whitespace, inviting typography — but with enough technical edge to signal that serious engineering lives here.
4. **Space Age Civic Tech.** Retro-futurist optimism meets democratic idealism. Think NASA mission control meets a Scandinavian design studio meets a town hall.

## Mood

| We are | We are not |
|--------|------------|
| Modern, capable, smart | Slick, corporate, VC-polished |
| Scrappy, pragmatic, nerdy | Underfunded-looking, amateurish |
| Warm, inviting, public-good | Bureaucratic, stodgy, nonprofit-template |
| Technically rigorous | Intimidating, exclusionary |
| Optimistic, civic-minded | Naïve, preachy, self-congratulatory |

## Color

### Primary — Polis Blue

Our core identity color. Derived from `#03a9f4` (Material Design Light Blue 500), extended into a full scale. This blue is slightly cyan-leaning — bright, optimistic, technical without being cold.

| Token | Hex | Usage |
|-------|-----|-------|
| `polis-50` | `#e1f5fe` | Tinted backgrounds, hover states |
| `polis-100` | `#b3e5fc` | Light accents, selected states |
| `polis-200` | `#81d4fa` | Borders, dividers |
| `polis-300` | `#4fc3f7` | Secondary buttons, tags |
| `polis-400` | `#29b6f6` | Active states |
| `polis-500` | `#03a9f4` | **Primary brand color**, buttons, links |
| `polis-600` | `#039be5` | Hover states on primary |
| `polis-700` | `#0288d1` | Active/pressed states |
| `polis-800` | `#0277bd` | Dark accents |
| `polis-900` | `#01579b` | Headings, high-contrast text on light bg |
| `polis-950` | `#0a3152` | Near-black for maximum contrast |

### Neutral — Slate

Cool-toned grays that harmonize with the blue primary. Used for body text, backgrounds, borders.

| Token | Hex | Usage |
|-------|-----|-------|
| `slate-50` | `#f8fafc` | Page background (alternate sections) |
| `slate-100` | `#f1f5f9` | Card backgrounds |
| `slate-200` | `#e2e8f0` | Borders, dividers |
| `slate-300` | `#cbd5e1` | Disabled states |
| `slate-400` | `#94a3b8` | Placeholder text |
| `slate-500` | `#64748b` | Secondary text |
| `slate-600` | `#475569` | Body text |
| `slate-700` | `#334155` | Emphasized body text |
| `slate-800` | `#1e293b` | Headings |
| `slate-900` | `#0f172a` | Maximum-contrast text |
| `slate-950` | `#020617` | Near-black |

### Accent — Amber

A warm counterpoint to the cool blue/slate palette. Used sparingly for CTAs that must pop (e.g., "Donate Now"), warnings, and highlights.

| Token | Hex | Usage |
|-------|-----|-------|
| `amber-400` | `#fbbf24` | Highlight, badges |
| `amber-500` | `#f59e0b` | Accent CTA buttons |
| `amber-600` | `#d97706` | Hover on accent CTA |

### Semantic

| Token | Hex | Purpose |
|-------|-----|---------|
| `success` | `#16a34a` | Confirmations, positive indicators |
| `warning` | `#f59e0b` | Caution states |
| `error` | `#dc2626` | Errors, destructive actions |
| `info` | `#03a9f4` | Informational (aliases polis-500) |

### Usage Rules

- **Page background:** `white` (primary) or `slate-50` (alternating sections).
- **Body text:** `slate-700` on white, `slate-600` for secondary.
- **Headings:** `slate-900` or `polis-900` for accent headings.
- **Links:** `polis-500`, underlined on hover, `polis-700` when visited.
- **Primary buttons:** `polis-700` bg, white text. Hover: `polis-800`. (Not polis-500 — that's only ~2.9:1 contrast with white, below WCAG AA. polis-700 gives ~4.6:1.)
- **Accent/donate buttons:** `amber-500` bg, `slate-900` text. Use sparingly.
- **Never use pure black** (`#000`) for text; always use `slate-800` or `slate-900`.

## Typography

### Font Stack

| Role | Family | Source | Rationale |
|------|--------|--------|-----------|
| **Display / Headings** | Space Grotesk | Google Fonts | Geometric sans-serif with a retro-futurist feel. The name alone is on-brand. Distinctive without being decorative. |
| **Body** | Inter | Google Fonts | The workhorse. Designed for screens, excellent legibility at all sizes, massive language support. |
| **Monospace** | JetBrains Mono | Google Fonts | For code snippets, data, technical callouts. Ligatures add polish. |

### Type Scale

Based on a 1.250 ratio (major third), anchored at 1rem = 16px.

| Name | Size | Weight | Line Height | Use |
|------|------|--------|-------------|-----|
| `display` | 3.75rem (60px) | 700 | 1.1 | Hero headlines |
| `h1` | 3rem (48px) | 700 | 1.15 | Page titles |
| `h2` | 2.25rem (36px) | 600 | 1.2 | Section headings |
| `h3` | 1.5rem (24px) | 600 | 1.3 | Subsection headings |
| `h4` | 1.25rem (20px) | 600 | 1.4 | Card titles, labels |
| `body` | 1rem (16px) | 400 | 1.6 | Default paragraph text |
| `body-lg` | 1.125rem (18px) | 400 | 1.6 | Lead paragraphs, intros |
| `small` | 0.875rem (14px) | 400 | 1.5 | Captions, footnotes |
| `xs` | 0.75rem (12px) | 500 | 1.5 | Badges, tags, fine print |

### Rules

- Headings: Space Grotesk, `slate-900`. Sentence case (not Title Case, not ALL CAPS).
- Body: Inter, `slate-700`. Max line length ~70ch for readability.
- Monospace: JetBrains Mono, used inside `<code>` and data tables.
- **No italic headings.** Italics are reserved for emphasis within body text, foreign terms, and publication titles.
- Letter-spacing: -0.02em on display/h1 sizes for tighter headlines. Default elsewhere.

## Spacing

Tailwind's default spacing scale (multiples of 0.25rem / 4px). Key waypoints:

| Token | Value | Typical use |
|-------|-------|-------------|
| `1` | 0.25rem | Tight inline gaps |
| `2` | 0.5rem | Icon-to-label gap |
| `3` | 0.75rem | Compact padding |
| `4` | 1rem | Standard padding, card gutters |
| `6` | 1.5rem | Comfortable padding |
| `8` | 2rem | Section inner padding |
| `12` | 3rem | Between components |
| `16` | 4rem | Section vertical padding |
| `24` | 6rem | Major section breaks |
| `32` | 8rem | Hero top/bottom padding |

### Layout

- **Max content width:** 72rem (1152px). Utility: `max-w-6xl`.
- **Wide content:** 80rem (1280px) for full-bleed feature sections. Utility: `max-w-7xl`.
- **Narrow content:** 48rem (768px) for text-heavy pages (blog, docs). Utility: `max-w-3xl`.
- **Horizontal padding (container):** `px-6` (mobile), `px-8` (tablet+).

## Border Radius

| Token | Value | Use |
|-------|-------|-----|
| `sm` | 0.25rem | Tags, badges |
| `md` | 0.5rem | Buttons, inputs |
| `lg` | 0.75rem | Cards |
| `xl` | 1rem | Feature panels, hero elements |
| `full` | 9999px | Avatars, pills |

## Shadows

Subtle, cool-toned. No heavy drop shadows.

| Name | Value | Use |
|------|-------|-----|
| `sm` | `0 1px 2px rgba(15,23,42,0.05)` | Cards at rest |
| `md` | `0 4px 6px -1px rgba(15,23,42,0.07), 0 2px 4px -2px rgba(15,23,42,0.05)` | Cards on hover, dropdowns |
| `lg` | `0 10px 15px -3px rgba(15,23,42,0.08), 0 4px 6px -4px rgba(15,23,42,0.04)` | Modals, elevated panels |

## Tone of Voice

### Character

We write like a brilliant friend who works in civic tech — articulate, occasionally nerdy, never condescending. We respect every audience member's intelligence. We are allowed to be excited about what we do.

### Do

- Lead with *why it matters*, not what it does.
- Use active voice: "Polis finds consensus" not "Consensus is found by Polis."
- Be concrete: "Used by the government of Taiwan to shape national policy" not "Used by governments worldwide."
- Embrace technical language when the audience warrants it — but always provide an on-ramp for newcomers.
- Use first-person plural ("we") when speaking as The Computational Democracy Project.

### Don't

- Don't use hollow superlatives ("revolutionary", "game-changing", "world-class").
- Don't hedge excessively ("we believe that perhaps Polis might help..."). We *know* it works. We have the receipts.
- Don't patronize. Never write "simply" or "just" before an instruction.
- Don't mimic VC pitch-deck language ("disrupt", "synergy", "leverage", "unlock").
- Don't be self-deprecating about being a nonprofit. We are proud and effective.

### Sample Registers

**Hero headline (general audience):**
> Hear everyone. Find common ground.

**Subhead (slightly more detail):**
> Polis is an open-source platform that uses machine learning to surface consensus among thousands of participants — in real time.

**Researcher hook:**
> Under the hood: dimensionality reduction on a sparse vote matrix, real-time PCA, and opinion group clustering. Dive into the math.

**Enterprise/government reassurance:**
> Deployed by national governments, reviewed by privacy regulators, and backed by years of peer-reviewed research.

## Component Patterns (Preview)

These will be fully realized in Phase 3. Initial sketches:

- **Hero Section:** Full-width, generous padding (py-32), centered headline (display size) + subhead (body-lg) + primary CTA button. Optional subtle background pattern or gradient wash.
- **Feature Card:** Rounded-lg, shadow-sm, white bg. Icon/illustration top, h4 title, body description. Hover lifts to shadow-md.
- **Stat Block:** Large number (display, polis-500) + label (small, slate-500). Used for social proof ("50+ countries", "2M+ participants").
- **Tier Comparison:** Three-column layout at desktop, stacked on mobile. Each tier is a card with name, price, feature list, CTA.
- **Testimonial Block:** Quote in body-lg italic, attribution with name/title/org, optional photo or flag icon.
- **CTA Strip:** Full-width colored band (polis-500 bg or polis-50 bg), centered text + button.
