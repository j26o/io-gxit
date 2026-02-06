# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Single-page portfolio website for **GenX IT Solutions, Inc.**, targeting small to medium enterprises in Manila, Philippines. The site showcases digital transformation consulting, web/app development, cloud infrastructure, AI/automation, mobile development, and ERP implementation services.

## Tech Stack

- **Vite** (build tool)
- **React 19** (JavaScript only — no TypeScript)
- **Tailwind CSS v3** (utility-first styling)
- **Firebase** — Hosting, Firestore, Authentication, Cloud Functions v2
- **react-router-dom** — Client-side routing (`/` and `/admin`)

## Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Start dev server (localhost:5173)
pnpm build            # Production build → dist/
pnpm preview          # Preview production build locally
```

### Firebase Deploy

```bash
pnpm build
firebase deploy                  # Deploys hosting + functions + firestore rules
firebase deploy --only hosting   # Hosting only
firebase deploy --only functions # Cloud Functions only
```

## Architecture

SPA with two routes via react-router-dom:
- `/` — Main portfolio page (all sections as a scrolling single page)
- `/admin` — Auth-gated admin page for viewing contact submissions

### Component Structure

```
src/
  App.jsx              ← Routes: HomePage (/) and Admin (/admin)
  main.jsx             ← React entry point, wraps App in BrowserRouter
  index.css            ← Tailwind directives + custom utility layers
  firebase.js          ← Firebase SDK init (Firestore, Auth, GoogleAuthProvider)
  components/
    Header.jsx         ← Sticky nav with mobile hamburger, scroll-aware bg, dark mode toggle
    Hero.jsx           ← Full-height hero with animated SVG beams background
    BackgroundBeams.jsx← Animated SVG beam paths with gradient strokes
    Services.jsx       ← 6 service cards derived from cv.pdf capabilities
    FeaturedWork.jsx   ← Client highlights + name-badge grid from profile-deck.pdf
    ERPSpotlight.jsx   ← JPP logistics ERP case study from client.pdf
    About.jsx          ← Founder story + approach + core strengths
    Contact.jsx        ← Form with Firestore submission (addDoc to 'contacts' collection)
    Footer.jsx         ← Brand, social links, copyright
  pages/
    Admin.jsx          ← Google auth, admin allowlist, real-time submissions table
```

### Cloud Functions

```
functions/
  index.js             ← onDocumentCreated trigger on contacts/{docId} → email via Nodemailer
  package.json         ← firebase-admin, firebase-functions, nodemailer
  .env                 ← SMTP credentials (git-ignored)
```

### Firebase Configuration

- `firebase.json` — Hosting (dist/), Functions (functions/), Firestore rules
- `firestore.rules` — Public create on `contacts`, read restricted to admin allowlist
- `.env.local` — Client-side Firebase config (VITE_FIREBASE_* keys, git-ignored)
- Firestore database name: `gxit` (not the default)

### Key Design Decisions

- **Dark primary (#0f172a)** used for Header, Hero, ERP, and Footer sections; white logo (`gx-it-white.jpg`) on dark backgrounds
- **Light sections** (gray-50/white) for Services, Work, About, Contact; dark logo (`GX-logo.jpg`) available for light backgrounds
- **Accent color:** `#2563eb` (Tailwind blue-600)
- Colors are extended in `tailwind.config.js` as `primary`, `accent`, `accent-hover`
- Custom utility classes `.section-padding` and `.container-max` defined in `index.css`
- **Dark mode** toggle in Header; theme persisted to localStorage, initialized via inline script in index.html
- **Hero background** uses animated SVG beams (BackgroundBeams.jsx) — pure SVG animations, no extra dependencies
- **Admin allowlist** hardcoded: `roland@gxit.io`, `roland.baldovino@gmail.com`
- **Firestore security rules** enforce admin access server-side (not just client check)
- **Admin page** is standalone (no Header/Footer), has its own "Back to site" link

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

Submits to Firestore `contacts` collection via `addDoc` with `serverTimestamp()`. Validates name, email (format check), and message as required fields. Shows submitting/error states. Cloud Function triggers on new documents to send email notification via Nodemailer.
