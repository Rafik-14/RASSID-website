# RASSID — Gestion des Ventes Terrain & Distribution

Landing page for **RASSID**, a field sales and distribution management application designed for food distributors in Algeria. The website showcases the mobile app's capabilities — store management, delivery tracking, payment collection, and debt monitoring — through an animated, single-page marketing experience.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/license-private-lightgrey)

---

## Table of Contents

- [Overview](#overview)
- [Features Showcased](#features-showcased)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Page Sections](#page-sections)
- [Design System](#design-system)

---

## Overview

RASSID is a mobile-first application that digitizes the daily workflow of field distributors — replacing paper notebooks with a structured, auditable operation log. This repository contains the **marketing website** built to present the app to prospective users and convert them through a free trial offer.

The site is a single-page application (SPA) with smooth scroll navigation, scroll-triggered animations, and a responsive layout optimized for both desktop and mobile viewports. All content is in **French**, targeting the Algerian market with pricing in **DA (Algerian Dinar)**.

## Features Showcased

| Feature | Description |
|---|---|
| **Store Management** | Register and manage an unlimited number of retail stores from the field |
| **Delivery Operations** | Record deliveries that automatically update each store's balance |
| **Payment Collection** | Track cash and electronic payments against outstanding debts |
| **Return Handling** | Log returned merchandise with full traceability |
| **Offline-First** | All operations work without internet; data syncs when connectivity returns |
| **Integrity Chain** | Every transaction is cryptographically signed for tamper-proof auditing |
| **Bluetooth Printing** | Generate and print delivery receipts on portable thermal printers |
| **Biometric Auth** | App access secured via fingerprint or face recognition |

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| **Framework** | React | 19.x |
| **Build Tool** | Vite | 8.x |
| **CSS** | Tailwind CSS (via `@tailwindcss/vite` plugin) | 4.x |
| **Animations** | Framer Motion | 12.x |
| **Scroll Animations** | GSAP + ScrollTrigger | 3.x |
| **Smooth Scrolling** | Lenis | 1.x |
| **Icons** | Lucide React | 1.x |
| **Routing** | React Router DOM | 7.x |
| **Linting** | ESLint | 10.x |

## Project Structure

```
src/
├── animations/          # Custom animation hooks
│   ├── useLenis.js      # Lenis smooth scroll + GSAP ticker integration
│   └── useScrollReveal.js # Reusable GSAP scroll-reveal hook
├── assets/              # Images, screenshots, video
│   ├── videos/          # Demo video (imported via Vite asset pipeline)
│   └── *.png            # App screenshots (Home, Livraison, Paiement, Retour)
├── components/
│   ├── layout/          # Structural components
│   │   ├── Navbar.jsx   # Fixed navbar with scroll-aware background blur
│   │   └── Footer.jsx   # Site footer
│   ├── sections/        # Page sections (rendered top-to-bottom)
│   │   ├── Hero.jsx     # Brand wordmark + cascading phone mockups
│   │   ├── Intro.jsx    # Feature introduction with image
│   │   ├── Stats.jsx    # Key metrics (200+ stores, 15+ years, etc.)
│   │   ├── Plans.jsx    # Animated pricing cards with flip & billing toggle
│   │   ├── Testimonial.jsx # Customer quote
│   │   ├── About.jsx    # GSAP-pinned text + browser mockup with demo video
│   │   ├── FAQ.jsx      # Accordion FAQ with Framer Motion
│   │   └── CTA.jsx      # Final call-to-action with background image
│   └── ui/              # Reusable UI primitives
│       ├── Button.jsx   # Primary/secondary button with optional arrow
│       └── Logo.jsx     # SVG logo with optional wordmark
├── pages/
│   └── HomePage.jsx     # Composes all sections into the single page
├── router/
│   └── index.jsx        # React Router config (single `/` route)
├── styles/
│   ├── tailwind.css     # Tailwind v4 theme (@theme block: colors, radii, fonts)
│   └── globals.css      # Global resets and utility overrides
├── App.jsx              # Root component with Lenis + RouterProvider
└── main.jsx             # Entry point
```

## Getting Started

### Prerequisites

- **Node.js** >= 18
- **npm** >= 9

### Installation

```bash
git clone https://github.com/Rafik-14/RASSID-website.git
cd RASSID-website
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server at `http://localhost:5173` with HMR enabled.

### Build

```bash
npm run build
```

Outputs the production bundle to `dist/`.

### Preview

```bash
npm run preview
```

Serves the built `dist/` locally for final verification.

## Page Sections

The home page (`HomePage.jsx`) renders these sections in order:

1. **Navbar** — Fixed top navigation with scroll-aware background blur, mobile hamburger menu, and CTA button
2. **Hero** — Dark background with the RASSID wordmark (Inter font), feature pills, CTA button, and a cascading stack of 4 phone screenshots with tilt and shadow effects (Framer Motion entrance)
3. **Intro** — Two-column layout explaining the core value proposition with a scroll-reveal image
4. **Stats** — 4-column metric bar (15+ years experience, 200+ stores, 98% sync rate, 24/7 offline access)
5. **Plans** — Animated pricing section with 3D card flip between monthly/annual billing, IntersectionObserver-triggered card spread, and mobile vertical stack fallback
6. **Testimonial** — Centered customer quote
7. **About** — GSAP ScrollTrigger-pinned left text column with right-side browser mockup playing a looping demo video
8. **FAQ** — Animated accordion with 6 questions covering offline mode, operations, printing, security, and platforms
9. **CTA** — Full-width call-to-action with background image overlay
10. **Footer** — Site footer

## Design System

### Colors (defined in `tailwind.css` `@theme`)

| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#0A0A0A` | Primary dark background |
| `--color-lime` | `#7FE300` | Accent / brand green |
| `--color-white` | `#F0F0F0` | Primary text on dark |
| `--color-ink` | `#111111` | Primary text on light |

### Typography

- **Body & Headings**: [Inter](https://fonts.google.com/specimen/Inter) (weights 400–900) via Google Fonts
- **Default sans-serif stack**: `Inter, system-ui, sans-serif` (set in Tailwind `--font-sans`)

### Animation Libraries

- **Framer Motion** — Component entrance animations, pricing card flips, FAQ accordion
- **GSAP + ScrollTrigger** — Scroll-pinned text reveal in the About section
- **Lenis** — Smooth scrolling integrated with the GSAP ticker for buttery scroll-linked animations
