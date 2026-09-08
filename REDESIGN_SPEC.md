# RASSID Landing Page Redesign — Master Specification & Build Guide

> **Document Version**: 2.0 (Approved)  
> **Target Audience**: AI Agents & Frontend Engineers implementing the RASSID landing page redesign.  
> **Workspace**: `c:\Users\surface\Desktop\main\RASSID3.0\Site`

---

## 1. Executive Summary & Design Vision

The objective is to redesign the **RASSID** marketing landing page by merging the visual aesthetics and structural patterns of two high-performing design references:

1. **Synex (`synex.xyz`)**:
   - Atmospheric hero styling with **overlapping mossy mountain landscape** backgrounds.
   - Frosted glass **"Why Synex" comparison matrix** with feature checklist vs competitors.
   - **"Finance Reimagined"** large editorial typography featuring **inline pill-shaped product UI images**.
   - Elegant **3-column contact card layout** that transitions into a reflective basalt water/mountain landscape footer.
2. **Aave (`aave.com`)**:
   - Hero mobile device presentation: **3 smartphones in an overlapping fan formation** (elevated center phone + flanking angled screens).
   - **"The Full Power of DeFi"** full-width dark anchor section: centered display headline with colored accent, dual action buttons, and a massive **dark browser console showcase** showing real operational data.

### Brand Identity & Palette Guardrails
All merged components **must strictly preserve RASSID's brand identity**:
- **Canvas**: Clean near-white cool green tint (`oklch(0.985 0.004 150)` / `#F8FAF8`).
- **Dark Anchors**: Obsidian black (`oklch(0.16 0.004 160)` / `#0A0A0A`).
- **Brand Accent**: Electric Lime (`oklch(0.86 0.23 132)` / `#7FE300`) — used for positive cash flow, active sync dots, primary CTAs, and hardware glowing auras. Never used as body text on light backgrounds.
- **Light Green Accent**: Deep Green (`oklch(0.52 0.15 145)`) — WCAG AA compliant green for text/labels on light surfaces.
- **Risk Indicator**: Coral Red (`oklch(0.55 0.20 25)`) — used exclusively for overdue store debt and payment alerts.
- **Typography**: `Bricolage Grotesque` (Display headings), `Hanken Grotesk` (Body & UI), `Cairo` (Arabic RTL). All monetary figures must use tabular figures (`.tnum`).

---

## 2. Codebase Audit: Current vs Redesign State

The repository contains two parallel states:

### A. Current Production Landing Page (`src/pages/HomePage.jsx`)
- **Structure**: Flat single-column layout assembling sections in `src/components/sections/`:
  - `Hero.jsx`: Light grid, 2 phones side-by-side.
  - `Intro.jsx`: Video demonstration.
  - `Features.jsx`: Sticky scroll with 5 mobile screen tabs.
  - `Platform.jsx`: Dual-surface card + mini dashboard mockup.
  - `Stats.jsx`: Dark 4-metric banner.
  - `About.jsx`, `Testimonial.jsx`, `FAQ.jsx`, `CTA.jsx`, `Footer.jsx`.
- **Limitation**: Positions RASSID primarily as a field mobile app; does not highlight the web dashboard prominently, lacks the immersive natural landscape depth of Synex, and has a conventional SaaS structure.

### B. Experimental Redesign Branch (`src/redesign/` accessible at `/redesign`)
- An advanced prototype already exists under `src/redesign/`:
  - `RedesignPage.jsx`: Main staging page with state management for language and tactile audio.
  - `components/Hero.jsx`: Implements the minimal Aave pill header + Synex landscape image + 3-phone cluster.
  - `components/WebDashboardSection.jsx`: Implements Aave Pro dark section with browser mockup and store debt table.
  - `components/WhyRassidSection.jsx`: Implements the frosted glass comparison matrix over mountain landscape.
  - `components/Footer.jsx`: Implements the Synex 3-column contact cards + basalt rocks landscape.
  - `components/FleetCalculator.jsx`, `MobileOperationsShowcase.jsx`, `SecuritySection.jsx`, `Pricing.jsx`, `FAQ.jsx`, `ClosingCTA.jsx`.
  - `assets/`: Contains `synex_landscape.jpg`, `synex_mountain_landscape.jpg`, `synex_rocks_footer.jpg`, `cliff_left.png`, `cliff_right.png`, etc.

---

## 3. Section-by-Section Build Blueprint

To complete the page or promote `/redesign` to production (`/`), follow this exact layout architecture:

```
┌────────────────────────────────────────────────────────────────────────┐
│ 0. FLOATING NAVBAR (Transparent on mountain → Glass on scroll)         │
├────────────────────────────────────────────────────────────────────────┤
│ 1. HERO: Synex Mossy Mountain Landscape + Aave 3-Phone Cascade         │
├────────────────────────────────────────────────────────────────────────┤
│ 2. "THE FULL POWER OF DISTRIBUTION": Aave Pro Dark Web Dashboard Stage │
├────────────────────────────────────────────────────────────────────────┤
│ 3. "WHY RASSID": Synex Comparison Table over Mountain Panorama         │
├────────────────────────────────────────────────────────────────────────┤
│ 4. "DISTRIBUTION REIMAGINED": Large Headline with Inline UI Images     │
├────────────────────────────────────────────────────────────────────────┤
│ 5. MOBILE OPERATIONS & HARDWARE: Thermal Receipt + Field Workflows     │
├────────────────────────────────────────────────────────────────────────┤
│ 6. CRYPTOGRAPHIC TRUST & SECURITY: SHA-256 Ledger Anchor               │
├────────────────────────────────────────────────────────────────────────┤
│ 7. METRICS & PRICING: Algerian Dinar Plans & Fleet Calculator          │
├────────────────────────────────────────────────────────────────────────┤
│ 8. WHOLESALE OBJECTIONS FAQ: 2-Column Accordion                        │
├────────────────────────────────────────────────────────────────────────┤
│ 9. SYNEX 3-COLUMN CONTACT CARDS + BASALT WATER MOUNTAIN FOOTER         │
└────────────────────────────────────────────────────────────────────────┘
```

---

### Section 0: Floating Navbar

- **Component**: `src/redesign/components/Navbar.jsx`
- **Design Behavior**:
  - Starts **transparent** over the mountain landscape with light text (`#mist`).
  - Upon scrolling past 40px, smoothly transitions via backdrop filter to `bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-zinc-200/50`.
  - Left: RASSID logo (`logo.png`) + bold wordmark.
  - Center: Pill menu with anchors (`#hero`, `#console-centrale`, `#pourquoi-rassid`, `#tarifs`, `#faq`).
  - Right: Language switcher (`FR` / `عربي`), optional tactile audio toggle, and primary CTA pill (`Essai 7 jours`).

---

### Section 1: Hero — Synex Mountain Landscape + Aave 3-Phone Cascade

- **Component**: `src/redesign/components/Hero.jsx`
- **Visual Assets**:
  - Background: `src/redesign/assets/synex_landscape.jpg` (or generated concept `synex_mountain_generated_concept.jpg`).
  - Center Phone: `src/assets/Home_screen.webp` (scale 1.05, prominent drop-shadow).
  - Left Phone: `src/assets/Livraison_operation_screen.webp` (tilted -8deg, slight dim/recession).
  - Right Phone: `src/assets/Paiment_operation_screen2.webp` (tilted +8deg, slight dim/recession).
- **Layout & Typography**:
  - Eyebrow pill: Icon + `RASSID Mobile App` in neutral font.
  - H1 Display: `L'Application de Distribution.` (single confident line, `clamp(2.5rem, 5vw, 4.5rem)`).
  - Subtitle: `Gérez vos opérations terrain en temps réel avec une plateforme 100% hors-ligne.`
  - CTA Buttons: Dark pill `Démarrer l'essai` + Outline pill `En savoir plus →`.
  - The 3 phones sit in the foreground, anchored over the mossy mountain ridge base.

---

### Section 2: "The Full Power of Distribution" — Web Dashboard Showcase

- **Component**: `src/redesign/components/WebDashboardSection.jsx`
- **Visual Reference**: Aave Pro ("The Full Power of DeFi", Screenshot 6).
- **Theme**: Full Obsidian Dark (`#0A0A0A` / `#08090B`).
- **Header**:
  - Eyebrow pill: `🖥 RASSID Dashboard Pro`.
  - H2 Display: `La` <span className="text-[#7FE300] italic font-serif">puissance totale</span> `de la distribution.`
  - Subhead: `Suivez les créances, contrôlez les versements de vos livreurs et pilotez vos stocks sans ouvrir un seul fichier Excel.`
  - CTAs: Solid White pill `Accéder à la démo web` + Outline White pill `Documentation gérant`.
- **Browser Frame Showcase**:
  - Dark macOS chrome bar with 3 window controls and centered URL `app.rassid.com/dashboard`.
  - 4 KPI cards: Total Receivables (`14 850 000 DA` in lime), Cash Today (`420 000 DA`), Active Stores (`184`), Overdue Stores (`12` in coral red).
  - Split chart: Deliveries vs Collections comparison.
  - Store debt ledger table with real Algerian stores, debt balances, and status badges (`À jour` in green, `En retard` in coral).
  - Sub-cards below: 3 cards highlighting specific modules (Grand Livre, Stocks Camions, Clôture de Caisse).

---

### Section 3: "Why RASSID" — Synex Comparison Matrix

- **Component**: `src/redesign/components/WhyRassidSection.jsx`
- **Visual Reference**: Synex "Why Synex" (Screenshot 2).
- **Background**: `src/redesign/assets/synex_mountain_landscape.jpg` with dark gradient overlay.
- **Header**:
  - Pill: `POURQUOI RASSID` with green pulse dot.
  - H2: `Conçu pour la distribution moderne. / Pas pour les carnets d'hier.`
  - Subhead: `Connectez vos livreurs, vos stocks mobiles et votre comptabilité — tous synchronisés dans un grand livre infalsifiable.`
- **Frosted Glass Table Card**:
  - Card with `backdrop-blur-2xl bg-black/50 border border-white/15 rounded-3xl`.
  - 3-column layout:
    1. **Capacités Fondamentales**: 5 core features (Offline 100%, Chaîne SHA-256, Reçus Bluetooth, Clôture en 5 min, Plafond de dette).
    2. **RASSID Column (Center)**: Elevated pale lime card (`#E8F5D8`) with dark checkmarks for every row and `0 DZD perdu` guarantee at bottom.
    3. **Autres / Carnets papier Column**: Gray pill tags (`Non - Ratures`, `Non - 2h de saisie le soir`, etc.) with `-15% à -25% perte de marge`.
  - Bottom summary bar with field benchmark.

---

### Section 4: "Distribution Reimagined" — Editorial Headline with Inline Images

- **Visual Reference**: Synex "Finance Reimagined" (Screenshot 3).
- **Layout Structure**:
  - Large display heading with pill-shaped product UI crops embedded directly inside the sentences:
  ```jsx
  <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900 text-center leading-tight">
    Prenez le contrôle{' '}
    <span className="inline-block align-middle mx-2 w-28 h-12 rounded-full overflow-hidden border-2 border-zinc-200 shadow-md">
      <img src={synexPillBranch} className="w-full h-full object-cover" />
    </span>{' '}
    de vos créances.
    <br />
    Opérez à un niveau{' '}
    <span className="text-zinc-400">supérieur</span>{' '}
    <span className="inline-block align-middle mx-2 w-28 h-12 rounded-full overflow-hidden border-2 border-zinc-200 shadow-md">
      <img src={synexPillFlowers} className="w-full h-full object-cover" />
    </span>
  </h2>
  ```
- **Description & Action**:
  - Explanatory paragraph on how RASSID unifies field and office.
  - Paired CTAs: `Demander l'accès` + `Lancer la démo →`.

---

### Section 5: Mobile Operations, Bluetooth Hardware & Security

- **Components**: `MobileOperationsShowcase.jsx`, `SecuritySection.jsx`, `FieldProof.jsx`.
- **Key Modules**:
  - **4 Core Field Operations**: Livraison, Paiement, Retour, Avoir.
  - **Tactile Bluetooth Thermal Receipt**: Perforated jagged receipt mockup with thermal monospace typography (`JetBrains Mono`), client running balance, and cryptographic QR/hash stamp.
  - **SHA-256 Ledger Anchor**: Visual block chain demonstrating that no transaction can be deleted or forged.

---

### Section 6: Pricing, ROI Calculator & FAQ

- **Components**: `Pricing.jsx`, `FleetCalculator.jsx`, `FAQ.jsx`.
- **Pricing Details**:
  - Currency: Algerian Dinar (DA) with zero centimes.
  - Tiers: 1 Month (`4 900 DA`), 3 Months (`13 900 DA`), 6 Months (`26 900 DA`), Annual (`39 900 DA` with `-32%` discount).
  - 7-day free trial on all plans.
- **ROI Calculator**: Interactive slider for number of delivery vans showing hours saved and recoverable debt per month.
- **FAQ**: 6 critical wholesale operator questions (offline reliability, printer models, data privacy, setup assistance).

---

### Section 7: Synex Contact Cards & Basalt Mountain Footer

- **Component**: `src/redesign/components/Footer.jsx`
- **Visual Reference**: Synex Footer (Screenshot 4).
- **Structure**:
  - **3-Column Top Split**:
    1. *Left*: `On aimerait vous entendre.` / `Nous sommes toujours ouverts aux nouveaux partenaires et distributeurs.`
    2. *Middle Card*: `Écrivez-nous` → `contact@rassid.com` with red arrow pill button.
    3. *Right Card*: `Réservez un appel` → `Planifier un échange` with red arrow pill button.
  - **Basalt Rocks & Water Panorama**:
    - Image `src/redesign/assets/synex_rocks_footer.jpg` spans the lower horizon.
  - **Footer Bar**:
    - Embedded over the bottom water scene: RASSID logo, system status badge (`Tous les systèmes opérationnels`), Wilaya coverage, social links, and copyright.

---

## 4. Asset Inventory & File Map

| Asset File | Resolution / Type | Role in Redesign |
| :--- | :--- | :--- |
| `src/redesign/assets/synex_landscape.jpg` | 3840×1600 JPG | Hero full-bleed mountain ridge background |
| `src/redesign/assets/synex_mountain_landscape.jpg` | 3840×2160 JPG | "Why RASSID" comparison matrix background |
| `src/redesign/assets/synex_rocks_footer.jpg` | 3840×1400 JPG | Footer basalt rocks and reflective water backdrop |
| `src/redesign/assets/synex_pill_branch.jpg` | 600×240 JPG | Inline pill image 1 in "Distribution Reimagined" |
| `src/redesign/assets/synex_pill_flowers.jpg` | 600×240 JPG | Inline pill image 2 in "Distribution Reimagined" |
| `src/assets/Home_screen.webp` | 1170×2532 WebP | RASSID mobile app home dashboard (center phone) |
| `src/assets/Livraison_operation_screen.webp` | 1170×2532 WebP | RASSID delivery operation screen (left phone) |
| `src/assets/Paiment_operation_screen2.webp` | 1170×2532 WebP | RASSID payment collection screen (right phone) |
| `src/redesign/assets/dashboard_browser_mockup_concept.jpg` | 16:9 JPG | High-resolution Web Dashboard reference concept |
| `src/redesign/assets/aave_mobile_mockup_concept.jpg` | 16:9 JPG | 3-phone cascade reference concept |
| `add_assets/Screenshot 2026-09-07 160942.png` | PNG | Synex original hero screenshot |
| `add_assets/Screenshot 2026-09-07 161052.png` | PNG | Synex original "Why Synex" screenshot |
| `add_assets/Screenshot 2026-09-07 161115.png` | PNG | Synex original "Finance Reimagined" screenshot |
| `add_assets/Screenshot 2026-09-07 161138.png` | PNG | Synex original footer contact screenshot |
| `add_assets/Screenshot 2026-09-07 161200.png` | PNG | Aave original savings app 3-phone hero screenshot |
| `add_assets/Screenshot 2026-09-07 161211.png` | PNG | Aave original "The Full Power of DeFi" screenshot |

---

## 5. How to Activate the Redesign in Production

When ready to make this the primary landing page:

1. **Route Activation**:
   In `src/router/index.jsx`, swap `<HomePage />` to load the new redesigned page:
   ```javascript
   import RedesignPage from '../redesign/RedesignPage';

   export const router = createBrowserRouter([
     { path: '/', element: <RedesignPage /> },
     // Keep legacy page under /legacy if needed for reference
     { path: '/legacy', element: <HomePage /> },
   ]);
   ```

2. **Run Quality Assurance Checks**:
   ```bash
   npm run lint
   npm run build
   ```

3. **Verify Responsiveness & RTL**:
   - Test on mobile (375px–430px): 3 phones collapse gracefully into a clean stacked or centered cascade.
   - Switch language to Arabic (`عربي`): ensure document `dir="rtl"` sets Cairo typography and mirrors directional arrows.
