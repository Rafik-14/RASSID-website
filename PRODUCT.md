# Product

## Register

brand

## Users

Food-distribution operators in Algeria — wholesalers and their field reps who spend their days on tournée (delivery rounds), moving merchandise to retail shops (épiceries) and collecting cash against running debts. They are not "tech people." Today they track everything in paper notebooks: who owes what, what was delivered, what came back. Their context is mobile, often offline, frequently mid-transaction at a shop counter. The visitor evaluating RASSID is usually the owner or operations lead deciding whether to move the whole team off paper.

## Product Purpose

RASSID is a mobile app that digitizes the daily workflow of field distribution — store management, deliveries, payment collection, returns/credits, and above all **debt (créances) tracking** — replacing the paper notebook with a structured, offline-first, tamper-evident operation log. Every transaction is signed into an integrity chain, receipts print over Bluetooth thermal printers, access is biometric. The marketing site's job is to convince a skeptical, practical operator that this is more trustworthy and faster than paper, and to convert them into a free 7-day trial.

Success = the operator believes "this is serious software built for *my* work, not generic SaaS," and starts the trial.

## Brand Personality

Grounded, exact, confident. Three words: **operational, trustworthy, plainspoken.** The voice is that of a tool that respects the user's time and handles their money carefully — never hype, never abstract "digital transformation" talk. It should feel like the difference between a sloppy notebook and a clean ledger: legible, precise, and a little bit proud of that precision. Money and trust are the emotional core (debt owed, cash collected, nothing lost).

## Anti-references

- Generic dark-purple/navy "fintech SaaS" landing pages with a hero-metric template (big gradient number, three supporting stats).
- Crowded feature-card grids (icon + heading + text repeated eight times).
- Abstract 3D blob / mesh-gradient hero with no real product in sight.
- Over-animated "everything fades up on scroll" pages where motion is decoration, not meaning.
- Cream/sand "warm editorial" minimalism that reads as every other 2026 AI landing page.
- Anything that hides the actual app behind marketing abstraction — the real product UI is the strongest asset and must be shown.

## Design Principles

1. **Show the ledger, not the pitch.** The real dark+lime app UI is the hero asset. Frame it, don't replace it with abstraction. Proof over promise.
2. **Legibility is the brand.** This product exists because paper is hard to read and audit. The site must out-legible the notebook: high contrast, clear hierarchy, tabular figures for every amount.
3. **Money is the through-line.** Deliveries add debt, payments reduce it. Lime = collected/positive, coral = owed/overdue. Let the color carry meaning, not decoration.
4. **Light canvas, dark proof.** A bright, confident editorial surface that frames dark product moments — the contrast is the identity, and it keeps the committed lime+dark equity intact.
5. **Bilingual by construction.** Every layout works mirrored. FR and AR (RTL) are equal first-class citizens, never an afterthought toggle.

## Accessibility & Inclusion

- Target WCAG 2.1 AA. Body text ≥4.5:1, large/bold text ≥3:1. Lime (#7FE300) is never used as text on light backgrounds (it fails contrast) — only as a fill behind dark ink, as a mark/underline, or as text on dark surfaces. A deep-green token carries legible green emphasis on light.
- Full RTL support for Arabic via `dir`; Cairo for Arabic script, with mirrored layouts.
- `prefers-reduced-motion` honored on every animation (crossfade/instant fallback). Content is visible by default; reveals enhance, never gate.
- Color is never the only signal (debt status pairs color with label/icon).
