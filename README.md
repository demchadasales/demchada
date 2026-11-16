# DEMCHADA®

An original, fictional product-concept site (10 devices, homepage, nav, search, cart) built with
React, Vite, Tailwind CSS and React Router. Not affiliated with any real brand — see the footer
disclaimer on the site itself.

## Run it on StackBlitz

1. Go to https://stackblitz.com/ and choose **"Import Project"** → **"Upload folder"** (or create
   a blank Vite + React project and drag these files in, overwriting the defaults).
2. Alternatively, go to **stackblitz.com/fork/vite** and replace the generated files with the
   contents of this zip, keeping the same folder structure.
3. StackBlitz auto-installs `package.json` dependencies and starts the dev server — no local setup
   needed.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Project structure

```
src/
  components/
    devices/     → SVG illustrations for each product category (phone, laptop, tablet, etc.)
    layout/       → Nav, Footer, SearchOverlay, CartDrawer (global chrome)
    home/        → ProductShowcase (homepage section template)
    ui/          → Button, ColorPicker, ConfigPicker, BuyPanel, SpecTable, FeatureGrid, GalleryStrip
  context/        → CartContext (localStorage-backed cart state)
  data/           → products.js — single source of truth for all 10 products
  hooks/          → useReveal — IntersectionObserver-based scroll animations
  pages/
    Home.jsx
    products/     → Pulse, Air, Studio, SlatePro, Slate, Loop, Buds, Vista, Stream, Orb
                     (each has its own unique hero layout and section order)
```

## What's implemented

- Sticky nav with hover mega-menu + mobile slide-in menu
- Full-screen search overlay (client-side filtering across all products)
- Shopping bag drawer with quantity controls, persisted to `localStorage`
- 10 product pages, each with a distinct hero treatment:
  - **Pulse** — dark split hero, live color-synced phone art
  - **Air** — centered airy hero + "2.1 lbs" stat callout
  - **Studio** — cinematic full-bleed hero + interactive chip-tier comparison
  - **Slate Pro** — diagonal color-wash hero + latency bar comparison
  - **Slate** — color-grid hero (click a swatch to preview)
  - **Loop** — sensors arranged in "orbit" around the watch face
  - **Buds** — exploded hero + interactive Buds/Buds Pro tabs
  - **Vista** — immersive hero + passthrough/digital mode toggle
  - **Stream** — compact hero + fictional "universal search" app grid
  - **Orb** — pulsing rings hero + animated room-sensing radar sweep
- Scroll-triggered fade/scale-in animations (IntersectionObserver, no library)
- Every product add-to-bag flows into the same cart, with live subtotal

## Notes

- All product photography is replaced with original SVG/CSS illustrations — no real product
  images or trademarked assets are used anywhere in the project.
- The cart/checkout is a demonstration only; no real payment processing is wired up.
