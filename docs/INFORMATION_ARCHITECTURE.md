# Information Architecture

*Odysseia Phase 2 — Sitemap, user flows, and page structure.*

## Persona Priority

| Persona | Priority | Conversion goal | Primary path |
|---------|----------|----------------|--------------|
| Large org / state actor | **High** | Polis Pro inquiry | `/ → /pro → /case-studies/[slug] → /contact` |
| Investor / donor | **High** | Grant / donation | `/ → /case-studies → /about → /donate` |
| Small org / casual user | Medium | Free-tier signup | `/ → [Get Started CTA] → pol.is` |
| Researcher | Low | Engagement, contribution | `/ → /research` |
| Hobbyist / hacker | Low | GitHub, self-host | `/ → footer GitHub link` |

## Sitemap

```
[P] polis          Product ▾          Case Studies     Press     About     [Get Started]  [Contact]
                   ├─ /pro
                   └─ /pricing

/                              Homepage (long-scroll, the pitch)
├── /pro                       Polis Pro — enterprise/government feature page
├── /pricing                   Tier comparison (Free / Pro / Self-Hosted)
├── /case-studies              Collection page (cards, filterable)
│   ├── /case-studies/vtaiwan              vTaiwan (flagship)
│   ├── /case-studies/bowling-green        Bowling Green, Kentucky
│   ├── /case-studies/demos-uk             Demos — United Kingdom
│   ├── /case-studies/aufstehen            Aufstehen — Germany
│   └── /case-studies/...                  (more as content is produced)
├── /press                     Media coverage, press mentions
├── /about                     Mission, team, CompDemocracy, history
├── /research                  Papers, algorithm deep-dive, datasets
├── /donate                    Donation page (small + large donors)
└── /contact                   Sales inquiry, general contact, demo request
```

**Total: 10 primary routes + N case study subpages.**

Footer links (not in primary nav): Privacy Policy, Terms, GitHub, Quick Start Guide, Blog (external or future).

## Navigation

### Primary nav (desktop)

```
[P logo] polis     Product ▾     Case Studies     Press     About     [Get Started]  [Contact Us]
```

- **Product ▾** — Dropdown with two items: *Polis Pro* and *Pricing*. Hovering reveals a compact dropdown panel, not a mega-menu.
- **Case Studies** — Direct link to collection page.
- **Press** — Direct link.
- **About** — Direct link.
- **[Get Started]** — Primary CTA button (polis-700 bg, white text). Links to pol.is sign-up or free-tier entry point.
- **[Contact Us]** — Secondary CTA (outline style). Links to `/contact`.

### Mobile nav

Hamburger menu. Same hierarchy, CTAs at the top of the slide-out panel for visibility.

### Footer

Four columns (matching style guide preview):
1. **Brand** — Logo, tagline, CompDemocracy description.
2. **Product** — Polis 2.0, Polis Pro, Self-Hosted, Quick Start.
3. **Community** — GitHub, Documentation, Research papers, Blog.
4. **Organization** — About, Contact, Donate, Press, Privacy.

## Page Structures

### `/` — Homepage

The homepage is a long-scroll page. "How it works" lives here, not on a separate route. The scroll tells a story: *what → how → proof → action*.

| Section | Purpose | Content sketch |
|---------|---------|---------------|
| **Hero** | Elevator pitch | Headline ("Hear everyone. Find common ground."), subhead (one-sentence description), primary CTA ("Get Started — Free"), secondary CTA ("See how it works ↓"). Stat badges (50+ countries, 2M+ participants). |
| **Social proof strip** | Credibility for state actors / investors | Horizontal logo bar: flags or wordmarks of Taiwan, UK, Finland, UNDP, Google.org, etc. Understated, not flashy. |
| **How it works** | Accessible explainer | 3-step visual sequence: (1) Participants write short statements, (2) Everyone votes — agree, disagree, or pass, (3) Polis reveals opinion groups and consensus. Each step has an illustration or animation. Keep it concrete and visual, not abstract. |
| **Feature highlights** | Product capabilities | 3 feature cards (real-time clustering, consensus surfacing, scalability). Each card: icon, heading, 2-sentence description. |
| **Case study teaser** | Proof of impact | Featured case study card (vTaiwan), with a brief pull quote and outcome stat. Link to `/case-studies`. |
| **For governments strip** | Enterprise upsell | "Trusted by national governments. Ready for yours." Compliance badges (GDPR, SOC 2), link to `/pro`. This section specifically targets the high-priority state actor persona scanning the homepage. |
| **Interactive demo** (stretch) | Engagement / wow factor | Embedded mini Polis conversation or an animated visualization of clustering in action. Phase 5 candidate, but the slot should exist in the layout now. |
| **Donate CTA strip** | Donor conversion | "Support open-source democracy." Amber donate button. Brief mission statement. |
| **Footer** | Navigation + legal | Standard 4-column footer. |

### `/pro` — Polis Pro

Target audience: government procurement officers, enterprise decision-makers, institutional partners. This is the page you send when a state actor asks "tell me more."

| Section | Content |
|---------|---------|
| **Hero** | "Polis Pro — Deliberation infrastructure for governments and institutions." Subhead emphasizing support, compliance, scale. CTA: "Request a demo." |
| **Feature grid** | Expanded feature list (everything in Free, plus: advanced analytics, data export, custom branding, SSO/SAML, GDPR tools, moderation dashboard, dedicated account management, SLA). |
| **Compliance & trust** | Badges + brief explanations: GDPR, data residency options, SOC 2 (in progress), accessibility (WCAG), open-source auditability. |
| **Case study excerpts** | 2–3 mini case study cards (government deployments specifically). |
| **Pricing teaser** | "Custom pricing based on your needs." Link to `/pricing` for tier comparison, link to `/contact` for a quote. |

### `/pricing` — Tier Comparison

Three tiers side by side (as sketched in the style guide):

| | Polis 2.0 (Free) | Polis Pro | Self-Hosted |
|---|---|---|---|
| **Price** | $0 | Custom | Free / AGPL |
| **Target** | Individuals, classrooms, small orgs | Governments, enterprises, large-scale | DIY, open-source contributors |
| **CTA** | Start free | Contact sales | View on GitHub |
| **Features** | Core features list | Core + advanced list | Full source, no support |

Below the comparison: FAQ section addressing common questions (data ownership, migration, compliance, etc.).

### `/case-studies` — Collection

Grid of case study cards. Each card: country flag/icon, title, one-sentence summary, participant count badge, link to detail page.

Filterable by: region, scale, sector (government, civil society, political movement, education).

### `/case-studies/[slug]` — Individual Case Study

Consistent template across all case studies:

| Section | Content |
|---------|---------|
| **Header** | Title, country/region, year, participant count, sector tag |
| **Context** | What was the situation? Why was deliberation needed? |
| **Process** | How was Polis deployed? Who facilitated? What was the timeline? |
| **Results** | Key findings, consensus statements, policy outcomes |
| **Data / Visualization** | Opinion group map, key statistics (if available) |
| **Quote** | Pull quote from participant or organizer |
| **Related** | Links to 2–3 other case studies |

Known case studies to build out:

1. **vTaiwan** (2014–ongoing) — Taiwan. Flagship. 200K+ participants. National legislation on ride-sharing, telemedicine, online alcohol sales. Originated from Sunflower Movement.
2. **Bowling Green, KY** — USA. Local consensus-building. ~2,000 of 65,000 residents (3% participation rate).
3. **Demos** (2020) — UK. First nationally representative Polis sample. Data-driven political campaigning attitudes.
4. **Aufstehen** — Germany. Most participants ever in a single Polis conversation. Political platform formation.
5. *(Additional case studies to be sourced from CompDemocracy team — Finland, UNDP, Singapore, others.)*

### `/press` — Media Coverage

Structured as a reverse-chronological list with optional filtering by year. Each entry: publication logo/name, article title, date, one-line excerpt, external link.

Known coverage (non-exhaustive, needs updating):

- **Wired** (2022) — Polis as influence on Twitter's Community Notes
- **The Economist** — Op-ed on open-source ML tools for deliberation (Darshana Narayanan)
- **Chatham House** (2023) — vTaiwan + OpenAI Democratic Inputs to AI collaboration
- **Arxiv** (2023) — "Opportunities and Risks of LLMs for Scalable Deliberation with Polis"
- *(Full list to be sourced from CompDemocracy team, replacing the outdated compdemocracy.org/Media-coverage/.)*

### `/about` — About

| Section | Content |
|---------|---------|
| **Mission** | The Computational Democracy Project's mission and vision. |
| **Story** | Origin story: Occupy Wall Street, Arab Spring → "what if technology could help groups find common ground?" Founded by Colin Megill, Christopher Small, Michael Bjorkegren. |
| **How we're funded** | Grants, donors, transparency. Particularly relevant for investor/donor persona. |
| **Team** | Key team members with photos and brief bios. |
| **Partners** | Logos/names of partner organizations. |

### `/research` — Research

Target audience: researchers, data scientists, technically curious visitors. This page can be dense and detailed.

| Section | Content |
|---------|---------|
| **Algorithm overview** | How PCA + k-means clustering works on the vote matrix. Diagrams. |
| **Papers** | Links to published papers and preprints with abstracts. |
| **Datasets** | Links to available public datasets. |
| **Interactive visualization** (stretch) | Explorable opinion space visualization. Phase 5 candidate. |
| **Contribute** | How researchers can contribute, access data, collaborate. |

### `/donate` — Donate

Two tracks on one page:

| Track | Content |
|-------|---------|
| **Small donors** | Mission pitch. Stripe/payment button. "Your $25 keeps Polis free for a classroom." Suggested amounts: $25, $50, $100, custom. |
| **Large donors / grants** | "Partner with us." Brief impact summary. CTA: "Let's talk" → routes to `/contact` with a "donation inquiry" flag. |

### `/contact` — Contact

Simple contact form with a topic selector:
- General inquiry
- Polis Pro demo request
- Partnership / grant inquiry
- Press inquiry
- Technical support

Alternatively, direct email links for each topic if a form is overkill for v1.

## User Flow Diagrams

### Flow 1: Large org / state actor (HIGH priority)

```
LAND on /
  │
  ├─ See credibility signals (social proof strip, stat badges)
  ├─ Scroll to "For governments" section
  │     └─ Click "Learn about Polis Pro" → /pro
  │           ├─ Review features, compliance info
  │           ├─ Click case study excerpt → /case-studies/vtaiwan
  │           └─ Click "Request a demo" → /contact (demo request)
  │
  └─ OR: Click "Case Studies" in nav → /case-studies
        └─ Filter by "Government" → click relevant case → /case-studies/[slug]
              └─ Click "Contact us about Pro" → /contact
```

**Key metric:** Time from landing to `/contact` form submission (target: < 3 minutes of browsing).

### Flow 2: Investor / donor (HIGH priority)

```
LAND on /
  │
  ├─ Overall impression: modern, capable, impressive (the "Linear vibes" factor)
  ├─ Click "Case Studies" → /case-studies
  │     └─ Browse 2–3 case studies → sense of impact and scale
  │
  ├─ Click "About" → /about
  │     └─ Read mission, funding model, team
  │
  ├─ Click "Press" → /press
  │     └─ See breadth of coverage
  │
  └─ Click "Donate" (footer) or scroll to donate CTA strip on /
        └─ /donate
              ├─ Small donor: click payment button
              └─ Large donor: click "Let's talk" → /contact (grant inquiry)
```

**Key metric:** Donate page visits per session, time on site (longer = more impressed).

### Flow 3: Small org / casual user (MEDIUM priority)

```
LAND on /
  │
  ├─ Read hero: "Hear everyone. Find common ground."
  ├─ Scroll through "How it works" — understand in 30 seconds
  │
  └─ Click [Get Started] (nav or hero CTA)
        └─ → pol.is (external, free tier signup / conversation creation)
```

**Key metric:** Click-through rate on "Get Started" CTA. Should be achievable in < 60 seconds from landing.

### Flow 4: Researcher (LOW priority)

```
ARRIVE via paper citation, colleague link, or Google search
  │
  └─ Click "Research" in nav → /research
        ├─ Read algorithm overview
        ├─ Download papers
        ├─ Access datasets
        └─ Find contribution pathways
```

### Flow 5: Hobbyist / hacker (LOW priority)

```
ARRIVE via GitHub, Hacker News, word of mouth
  │
  └─ Find GitHub link (footer or /pricing under Self-Hosted)
        └─ → github.com/compdemocracy/polis
```

## Open Items for Phase 3

- **Interactive demo slot:** Reserve space on homepage. Actual implementation is Phase 5, but the layout should account for it now.
- **Blog:** Not in v1 scope. Future addition. External link in footer if an existing blog exists.
- **Quick Start Guide:** Likely an external link to existing docs (compdemocracy.org or GitHub wiki) rather than a page we build.
- **Search:** Not needed at this page count. Revisit if the site grows.
- **Internationalization:** Not in scope for v1, but the Astro architecture supports it natively if needed later.
- **Case study content:** Need to source full content for all case studies from CompDemocracy team. The IA template is ready; the prose is the bottleneck.
- **Press page content:** Need updated media coverage list from CompDemocracy team.
