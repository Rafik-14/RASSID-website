# Design

## Theme

Bright editorial product on a light canvas, punctuated by deliberate full-dark anchor sections where the brand lime ignites. The light surface carries the marketing voice (airy, confident, legible); the dark moments carry the product proof (the app UI is itself dark+lime). The contrast between the two IS the brand. This is a *committed* color strategy with art-direction per section, not a flat monochrome.

Physical scene: an operations owner reviewing the day's numbers — bright morning light on a clean ledger page, the phone (dark app) sitting on top of it. Light paper, dark device, green for money in.

## Color

OKLCH throughout. Lime and obsidian are preserved brand equity (#7FE300 / #0A0A0A).

### Light canvas (default surface — ~70% of the page)
- `--paper`        oklch(0.985 0.004 150)  — near-white, faintest cool-green tint (NOT warm cream). Body background.
- `--paper-2`      oklch(0.965 0.006 150)  — alternating light section / card surface.
- `--paper-3`      oklch(0.93 0.008 150)   — hairline wells, insets.
- `--line`         oklch(0.88 0.01 150)    — borders/dividers on light.
- `--ink`          oklch(0.20 0.012 160)   — primary text on light (~15:1 on paper).
- `--ink-2`        oklch(0.44 0.012 160)   — secondary text on light (≥4.6:1 on paper; never lighter for body).
- `--ink-3`        oklch(0.58 0.012 160)   — captions/labels on light (large/medium only).

### Dark anchors (~30% — hero device frame, stats band, about, CTA, footer)
- `--obsidian`     oklch(0.16 0.004 160)   — primary dark bg (#0A0A0A family).
- `--obsidian-2`   oklch(0.20 0.005 160)   — raised dark surface.
- `--obsidian-3`   oklch(0.255 0.006 160)  — dark cards.
- `--hairline`     oklch(1 0 0 / 0.10)     — borders on dark.
- `--mist`         oklch(0.97 0.005 160)   — primary text on dark.
- `--mist-2`       oklch(0.97 0.005 160 / 0.70) — secondary text on dark.

### Signal color (lime + meaning)
- `--lime`         oklch(0.86 0.23 132)    — #7FE300. Fills (with dark ink on top), marks, underlines, glow, ALL emphasis on dark. Never body text on light.
- `--lime-deep`    oklch(0.52 0.15 145)    — legible green for accent text/links/eyebrows ON LIGHT (≥4.5:1 on paper).
- `--lime-soft`    oklch(0.86 0.23 132 / 0.14) — lime wash/tint behind marks.
- `--coral`        oklch(0.66 0.19 25)     — "debt / owed / overdue" data accent (mirrors the app's red). Used sparingly, always with a label.

Contrast rule of thumb enforced: lime text only on obsidian; on light, green emphasis uses `--lime-deep`; the lime button is always `--lime` fill + `--ink` text.

## Typography

- **Display — Bricolage Grotesque** (Google Fonts, opsz 12–96, wght 400–800). Big editorial statements, headings. Characterful contemporary grotesque; carries "designed, confident" without the banned editorial-serif cliché. Letter-spacing −0.02 to −0.03em at display sizes; `text-wrap: balance`.
- **Body / UI — Hanken Grotesk** (Google Fonts, wght 400–700). Clean neutral workhorse, high legibility, `font-feature-settings: "tnum" 1, "ss01" 1` for tabular figures on amounts/stats.
- **Arabic — Cairo** (kept). Applied via `[dir="rtl"]`. Display headings in RTL fall back to Cairo heavy weights.
- Scale: fluid `clamp()`, ratio ≥1.25. Display ceiling ≤ 6rem. Light-on-dark text gets +0.05 line-height.

## Layout

- Max width 80rem (`max-w-7xl`) content; generous fluid vertical rhythm via `clamp()`, varied (tight groupings, large section gaps).
- Asymmetric editorial compositions over centered-everything. Break the grid for the hero and feature showcase.
- Dark anchors are full-bleed bands; light sections breathe with whitespace.
- Responsive grids: `repeat(auto-fit, minmax(...))` where appropriate; flex-wrap for 1D.
- Semantic z-index scale (see globals): nav < sticky < overlay < modal < toast.

## Components

- **Button**: pill, three contexts — `primary` (lime fill + ink text), `dark` (obsidian fill + mist text, for light sections), `outline-light` / `outline-dark`. Arrow optional, springy active press.
- **Device frame**: clean phone/browser frame holding the real dark app screenshots/video; subtle lime glow grounding it.
- **Ledger marks**: lime underline/marker behind key words; coral/lime status chips with label+icon.
- **Pricing card**: light editorial cards; the recommended plan is a dark+lime card that pops on the light grid (no 3D-flip gimmick by default; keep billing toggle + content).

## Motion

- One orchestrated hero load (staggered, ease-out-expo), not fade-up-on-everything. Each section's reveal fits its content; stagger within lists only.
- Lenis smooth scroll + GSAP kept. Reveals enhance already-visible content (no visibility gating).
- Materials beyond transform/opacity allowed where they earn it: lime glow, soft device shadow, subtle marker-draw on underlines.
- `prefers-reduced-motion`: crossfade/instant everywhere; no parallax/scrub.

## Accessibility

WCAG 2.1 AA. Contrast verified per token above. Lime never as light-bg body text. RTL-complete. Reduced-motion complete. Color always paired with text/icon for status.
