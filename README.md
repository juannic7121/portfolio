# Portfolio

A structured personal portfolio inspired by [usman.codcrafters.org](https://usman.codcrafters.org/) — Next.js App Router, TypeScript, and Tailwind CSS.

## Quick start

This project needs **Node 20+**. If `npm run dev` fails with `Unexpected token ?`, your shell is using Snap’s old Node 10 — put the local Node first:

```bash
export PATH="$HOME/.local/node/bin:$PATH"
node -v   # should show v22.x
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize content

Almost everything is data-driven. Edit these first:

| File | What it controls |
|------|------------------|
| `src/data/site.ts` | Name, brand, hero copy, nav, contact, socials |
| `src/data/services.ts` | Service lines |
| `src/data/websites.ts` | Featured website heroes + descriptions |
| `src/data/skills.ts` | Skills and categories |
| `src/data/experience.ts` | Work history + education |
| `src/data/projects.ts` | Featured projects |
| `src/data/case-studies.ts` | Case studies |
| `src/data/process.ts` | Delivery process |
| `src/data/testimonials.ts` | Client quotes |
| `src/data/opportunities.ts` | Hire-me roles |
| `src/data/faq.ts` | FAQ |

Replace assets:

- `public/images/juan-portrait.jpg` → your photo (jpg/png/webp)
- `public/websites/*-hero.png` → website hero captures

Update the image path in `src/components/sections/Hero.tsx` if you switch formats.

## Code structure

```
src/
  app/                 # Next.js routes + global styles
  components/
    layout/            # Header, Footer
    sections/          # One component per page section
    ui/                # Shared primitives (Button, Container, Reveal…)
  data/                # Content only — edit here for most updates
  types/               # Shared TypeScript models
  lib/                 # Utilities
public/
  images/              # Portrait and brand imagery
  apps/                # App screenshots
```

Section order on the homepage matches the reference portfolio:

Hero → About → Services → Featured Apps → Skills → Experience → Projects → Case Studies → Process → Testimonials → Opportunities → FAQ → Contact

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint
