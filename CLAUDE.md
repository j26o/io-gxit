# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Single-page portfolio website for **GenX IT Solutions, Inc.**, targeting small to medium enterprises in Manila, Philippines. The site showcases digital transformation consulting, web/app development, cloud infrastructure, AI/automation, mobile development, and ERP implementation services.

## Tech Stack

- **Vite** (build tool)
- **React 19** (JavaScript only — no TypeScript)
- **Tailwind CSS v3** (utility-first styling)
- **Deploy target:** Firebase Hosting

## Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Start dev server (localhost:5173)
pnpm build            # Production build → dist/
pnpm preview          # Preview production build locally
```

### Firebase Hosting Deploy

```bash
pnpm build
npx firebase login
npx firebase init hosting   # Select "dist" as public dir, configure as SPA
npx firebase deploy --only hosting
```

## Architecture

Single-route SPA with no React Router. All sections render in `App.jsx` as a scrolling single page.

### Component Structure

```
src/
  App.jsx              ← Root component, assembles all sections in order
  main.jsx             ← React entry point
  index.css            ← Tailwind directives + custom utility layers
  components/
    Header.jsx         ← Sticky nav with mobile hamburger, scroll-aware bg
    Hero.jsx           ← Full-height hero with CTAs
    Services.jsx       ← 6 service cards derived from cv.pdf capabilities
    FeaturedWork.jsx   ← Client highlights + name-badge grid from profile-deck.pdf
    ERPSpotlight.jsx   ← JPP logistics ERP case study from client.pdf
    About.jsx          ← Founder story + approach + core strengths
    Contact.jsx        ← Form with client-side validation (placeholder submit)
    Footer.jsx         ← Brand, social links, copyright
```

### Key Design Decisions

- **Dark primary (#0f172a)** used for Header, Hero, ERP, and Footer sections; white logo (`gx-it-white.jpg`) on dark backgrounds
- **Light sections** (gray-50/white) for Services, Work, About, Contact; dark logo (`GX-logo.jpg`) available for light backgrounds
- **Accent color:** `#2563eb` (Tailwind blue-600)
- Colors are extended in `tailwind.config.js` as `primary`, `accent`, `accent-hover`
- Custom utility classes `.section-padding` and `.container-max` defined in `index.css`

### Content Sources

All factual content comes from PDFs in `references/`:
- `cv.pdf` → Services section capabilities, About section biography
- `profile-deck.pdf` → Featured Work client list and project descriptions
- `client.pdf` → ERP Spotlight section (JPP logistics SaaS ERP case study)

### Logos

Stored in `public/`:
- `gx-it-white.jpg` — white GX mark on dark background (used in Header + Footer)
- `GX-logo.jpg` — dark GX mark on white background (used as favicon, OG image)

### Contact Form

Client-side only with `console.log` placeholder submit. Validates name, email (format check), and message as required fields. No backend wired up.
