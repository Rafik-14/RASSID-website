# RASSID — Complete Website Redesign & Visual Generation Brief

> **Purpose**: A comprehensive product, brand, and layout reference built from scratch to guide design agents and image generation models in generating accurate, high-fidelity mockups of the redesigned RASSID website.

---

## 1. Executive Summary & Value Proposition

### What is RASSID?
**RASSID** is the complete commercial distribution operating system built specifically for food and wholesale distribution businesses in Algeria. It replaces paper notebooks and disorganized spreadsheets with a synchronized, tamper-evident ledger.

### The Unified Dual-Engine Solution
RASSID is an inseparable two-part system:
1. **Field Execution (Mobile App)**: For delivery reps (*vendeurs / livreurs*) on route (*tournée*). Works 100% offline, logs transactions at the shop counter, prints Bluetooth receipts, and seals every entry cryptographically.
2. **Executive Control (Web Dashboard)**: For owners, directors, and operations managers at their desk. Provides real-time visibility into company-wide debt (*créances*), cash collections, multi-rep route progress, van inventory, and financial reconciliation.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           THE RASSID ECOSYSTEM                          │
├──────────────────────────────────┬──────────────────────────────────────┤
│       ON THE ROAD / FIELD        │           IN THE OFFICE              │
│       RASSID Mobile App          │        RASSID Web Dashboard          │
│  (Drivers, Reps, Delivery Vans)  │    (Owners, Managers, Accountants)   │
├──────────────────────────────────┼──────────────────────────────────────┤
│ • 100% Offline operation         │ • Real-time receivables & cash pulse │
│ • Store deliveries & cash intake │ • Multi-rep route & custody tracking │
│ • Instant Bluetooth receipts     │ • Aging debt analysis & limits       │
│ • Returns & credit notes         │ • Multi-depot & van stock inventory  │
│ • Biometric & cryptographic seal │ • Daily expense approvals & audits   │
└──────────────────────────────────┴──────────────────────────────────────┘
                                    ▲
                                    │ Instant Two-Way Sync
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                Unified Supabase + Local SQLCipher Ledger                │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Brand Identity & Visual Rules

### Color Palette (Tokens & Roles)
* **Brand Lime (`#7FE300` / `oklch(0.86 0.23 132)`)**:
  * The signature energetic accent. Represents positive money flow, cash collected, active sync status, primary CTA buttons, and glowing halos behind hardware.
  * *Rule*: Used as background fills with dark text, status dots, or glowing outlines. Never used as body text on light backgrounds.
* **Deep Green (`oklch(0.52 0.15 145)`)**:
  * High-contrast, legible green used for eyebrow labels, tags, and accent text on light backgrounds (WCAG AA compliant).
* **Obsidian (`#0A0A0A` / `oklch(0.16 0.004 160)`)**:
  * Deep dark background representing high-tech reliability. Used for device mockups, dark anchor sections, console chrome, and high-impact proof bands.
* **Paper Canvas (`#F8FAF8` / `oklch(0.985 0.004 150)`)**:
  * Default site background. A clean, modern, near-white surface with a faint cool-green tint. Evokes a pristine ledger page.
* **Coral Red (`oklch(0.55 0.20 25)`)**:
  * Represents overdue debt (*en retard*), critical payment alerts, and balance risk. Always accompanied by a clear label or icon.

### Typography
* **Headings & Display**: Bold, structured, modern grotesque (e.g., *Bricolage Grotesque* or heavy grotesque sans) with tight letter-spacing (`-0.025em`).
* **Body & UI**: Clean, neutral, high-legibility sans (*Hanken Grotesk* or *Inter*).
* **Monetary Figures**: Always rendered with tabular figures (`tnum`, lining numbers) in whole Algerian Dinars with clean digit separation: e.g., `1 240 000 DA`.
* **Arabic (RTL)**: Native *Cairo* typography, mirrored layouts.

### Aesthetic Atmosphere
* **Operational, precise, confident, physical.**
* Avoid generic SaaS clichés: no abstract 3D floating spheres, no purple gradients, no empty feature cards with generic icons.
* The visual hero is always **the real software** (realistic dashboard tables, charts, and mobile UI screens) shown inside clean device frames with subtle lime illumination.

---

## 3. The Two Surfaces: Feature Reference

### Surface A: RASSID Mobile App (The Field)
* **Offline-First Resilience**: Reps work in basements and remote markets with no network; operations save instantly to local encrypted SQLite.
* **Four Core Field Operations**:
  1. **Livraison (Delivery)**: Adding merchandise to a store account; updates debt immediately.
  2. **Paiement (Collection)**: Collecting cash or check against outstanding debts.
  3. **Retour (Returns)**: Recording returned/damaged items with photographic proof.
  4. **Avoir (Credit Note)**: Commercial discounts and price adjustments.
* **Countertop Speed**: Barcode scanning for fast catalog selection, GPS geofencing to confirm visits.
* **Hardware Integration**: Instant Bluetooth thermal printing of receipts and delivery slips directly at the counter.
* **Cryptographic Tamper-Proofing**: Every transaction forms a chained SHA-256 hash.

### Surface B: RASSID Web Dashboard (The Office)
* **Aperçu (Executive Pulse)**:
  * Company-wide receivables (*Créances totales*).
  * Cash collected today across all reps (*Encaissé aujourd'hui*).
  * Active retail stores and overdue store counter (*Magasins en retard*).
  * Delivery vs. Collection volume trends.
* **Store Ledger (*Grand Livre des Magasins*)**:
  * Master directory of épiceries / supérettes.
  * Real-time running balance per client, aging debt analysis, and credit limits.
* **Tournée & Team Oversight**:
  * Live monitoring of all active reps on route.
  * Evening cash custody reconciliation (*remise en caisse / versements*).
* **Inventory & Multi-Depot Stocks**:
  * Central depot stock levels vs. van stock inventory.
  * Van replenishment workflows and low-stock alerts.
* **Expense Management (*Dépenses terrain*)**:
  * Tracking rep daily expenses (fuel, truck maintenance, meals) with approval policies.

---

## 4. Website Section Architecture & Visual Mockup Blueprints

Use these blueprints to generate section screenshots:

### Section 1: Hero — The Complete Unified System
* **Concept**: Position RASSID immediately as a two-part ecosystem (Web + Mobile), leaving zero doubt that both tools work as one.
* **Visual Composition**:
  * Left: High-impact headline, subhead, primary CTAs (*"Démarrer l'essai gratuit"* in lime, *"Explorer la plateforme"* in outline), and live feature pills (*Synchronisé en direct*, *100% Hors-ligne*, *Chaîne d'intégrité*).
  * Right: A dynamic multi-device composite. A floating sleek laptop/browser showing the dark **RASSID Web Console** with KPI cards and charts, flanked by a smartphone in the foreground displaying the **RASSID Mobile App** (store delivery screen) with an electric lime back-glow.
* **Key Copy**:
  * *Kicker*: Le système complet de gestion commerciale terrain & bureau
  * *Headline*: Chaque dinar dû, noté sur le terrain, tracé au bureau.
  * *Subtext*: Vos représentants enregistrent livraisons et encaissements sur mobile, même hors ligne. La direction pilote créances, stocks et tournées en temps réel sur le tableau de bord web.

---

### Section 2: The Operational Workflow (Field ⇄ Office)
* **Concept**: Illustrate the seamless real-time loop between the delivery van and the back office.
* **Visual Composition**:
  * A 3-step interactive horizontal or split comparison:
    1. **Sur le terrain (L'App)**: Rep delivers goods at an épicerie, collects partial cash, and prints a thermal receipt.
    2. **Synchronisation transparente**: Instant offline-to-cloud sync as soon as a connection is detected.
    3. **Au bureau (Le Dashboard)**: Store debt updates instantly on the management screen, and cash is flagged for evening custody deposit.
* **Key Copy**:
  * *Headline*: Deux interfaces. Une seule vérité opérationnelle.
  * *Subtext*: Zéro double saisie, zéro carnet papier égaré, zéro incertitude en fin de journée.

---

### Section 3: Field Mobile App Deep Dive
* **Concept**: Focus exclusively on the speed, ergonomics, and resilience needed by reps on route.
* **Visual Composition**:
  * Clean, dark smartphone frames highlighting the 4 operation types:
    * *Livraison* (Delivery with article selection & quantities)
    * *Paiement* (Cash settlement with updated debt calculation)
    * *Retour* (Product returns with photo proof)
    * *Avoir* (Credit note and discount adjustments)
  * Hardware visual callouts: Pocket Bluetooth thermal printer ejecting a receipt, offline badge indicator.
* **Key Copy**:
  * *Headline*: L'outil de tournée taillé pour la rapidité du terrain.
  * *Subtext*: Navigation à une main, mode hors ligne absolu, et reçus imprimés en 3 secondes devant le commerçant.

---

### Section 4: Web Dashboard Deep Dive
* **Concept**: Showcase executive power, financial clarity, and control for business owners and managers.
* **Visual Composition**:
  * An expansive, detailed desktop UI screenshot inside a crisp browser frame:
    * **KPI Header**: Total Debt (`14 850 000 DA`), Cash Today (`420 000 DA`), Active Clients (`184`), Overdue Stores (`12`).
    * **Analytics Chart**: Daily comparison bars between Deliveries (grey) and Collections (lime).
    * **Live Store Table**: Columns for Store Name, Wilaya/Zone, Current Balance, Last Visit, and Debt Status badges (*À jour* in lime, *En retard* in coral).
    * **Team & Van Stock Widget**: Overview of rep routes and pending cash reconciliations.
* **Key Copy**:
  * *Headline*: Tout votre négoce sur grand écran.
  * *Subtext*: Identifiez instantanément les créances à risque, contrôlez les versements de vos livreurs et gérez vos stocks sans ouvrir un seul fichier Excel.

---

### Section 5: Trust, Integrity & Ledger Security
* **Concept**: Address the skepticism of Algerian business owners regarding theft, fraud, and data loss.
* **Visual Composition**:
  * A dark, high-contrast anchor section with technical wireframe diagrams:
    * **Chaîne d'intégrité SHA-256**: Visual representation of tamper-evident block hashes.
    * **Biométrie & Sécurité**: Fingerprint authentication on mobile.
    * **Sauvegarde Cloud & Continuité**: Local encryption + encrypted cloud backups.
* **Key Copy**:
  * *Headline*: Vos créances et votre argent scellés par la technologie.
  * *Subtext*: Aucune transaction ne peut être modifiée ou supprimée en cachette. Chaque opération est signée, datée et traçable à vie.

---

### Section 6: Numbers & Field Proof
* **Concept**: Build credibility through concrete metrics and field reality.
* **Visual Composition**:
  * 4 big tabular statistics with lime highlights, followed by an authentic quote card:
    * **3+ Années** d'optimisation sur le terrain algérien
    * **100%** Disponibilité hors-ligne garantie
    * **0 Dinar Perdu** grâce au scellement cryptographique
    * **98%** Gain de temps sur la réconciliation de fin de journée
  * *Quote*: « Plus de carnets perdus ni de comptes approximatifs. RASSID nous donne une clarté totale sur ce que chaque magasin nous doit. » — Distributeur Agroalimentaire, Blida / Alger.

---

### Section 7: Clear & Transparent Pricing
* **Concept**: Straightforward pricing tiers in Algerian Dinar with a 7-day free trial.
* **Visual Composition**:
  * Monthly / Annual toggle (`-32%` on annual).
  * 3 standard cards on light paper + 1 featured Annual card in Obsidian with lime border:
    * **1 Mois**: `4 900 DA / mois` — Essai 7 jours inclus, accès complet App + Web.
    * **3 Mois**: `13 900 DA / 3 mois` — Économisez 800 DA, support prioritaire.
    * **6 Mois**: `26 900 DA / 6 mois` — Économisez 2 500 DA, formation équipe.
    * **Formule Annuelle (Star)**: `39 900 DA / an` (ancien prix `58 800 DA`) — 2 mois offerts, accès illimité équipe, rapports complets, support 24/7.

---

### Section 8: FAQ & Final Conversion CTA
* **Concept**: Overcome remaining objections and drive trial signups.
* **Visual Composition**:
  * Accordion questions answering:
    * *Faut-il internet pour travailler ?* (Non, 100% autonome hors ligne).
    * *Le tableau de bord web est-il inclus ?* (Oui, le forfait couvre l'application mobile et la console de direction).
    * *Quelles imprimantes sont compatibles ?* (Toutes imprimantes thermiques Bluetooth 58mm/80mm courantes).
    * *Comment démarrer l'essai ?* (7 jours gratuits immédiats, sans engagement).
  * High-contrast closing CTA box with lime action button and device silhouettes.

---

## 5. Image Generation Prompt Guidelines (For Models)

When prompting image generation models (Midjourney, Flux, Ideogram, Imagen) for screenshots, adhere to these guidelines:

### Essential Keywords & Style Anchor
* `Modern SaaS product landing page UI design`
* `Clean, minimal, editorial design style`
* `High-contrast palette: crisp cool off-white background with deep obsidian dark UI cards, electric lime green (#7FE300) accents, and subtle coral red debt indicators`
* `Crisp typography with tabular monetary figures in Algerian Dinar (DA)`
* `Realistic software mockup: dark mode mobile app and dark mode web analytics dashboard displayed side-by-side with subtle lime glow`
* `Zero abstract floating spheres, zero generic purple fintech gradients, high legibility, clean layout`

### Prompt Blueprint Example (Hero Section)
```text
Clean, modern B2B SaaS landing page hero section for "RASSID", a commercial distribution management platform. Crisp light cool-gray background with subtle grid lines. On the left: bold modern grotesque typography reading "Chaque dinar dû, noté sur le terrain, tracé au bureau", electric lime green CTA pill button, small live-status badges. On the right: a realistic product mockup featuring both a dark-mode web management dashboard in a sleek browser frame showing debt metrics, and a modern smartphone in the foreground showing an offline mobile delivery ledger screen. Electric lime green (#7FE300) accent glows behind the devices. Highly detailed UI, 8k resolution, photorealistic screen render, UI/UX showcase, Figma style --ar 16:9
```
