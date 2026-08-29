# AGENTS.md — Om Dhuri Portfolio

> This file is the **single source of truth** for any AI agent or human developer working on this project.  
> Read it fully before making any changes.

---

## Project Overview

**Om Dhuri's personal portfolio website** — a creative developer who is a 3rd-year Computer Engineering student based in India. The portfolio is editorial, minimal, and non-traditional. It prioritises craft, precision, and feeling over feature count.

**Live dev server:** `npm run dev` → http://localhost:5173/  
**Build:** `npm run build`

---

## Tech Stack

| Tool | Version | Role |
|---|---|---|
| React | 19 | UI framework |
| TypeScript | 5.9 | Type safety |
| Vite | 7 | Dev server + bundler |
| Tailwind CSS | 4.x | Utility-first styling |
| `clsx` + `tailwind-merge` | — | Conditional classnames (`src/utils/cn.ts`) |

> ⚠️ This project uses **Tailwind CSS v4**, which uses `@import "tailwindcss"` and `@theme {}` blocks in `src/index.css` — NOT `tailwind.config.js`. Arbitrary values and theme tokens differ from v3.

---

## Design System

### Color Palette

| Token | Hex | Tailwind Class | Usage |
|---|---|---|---|
| `ink` | `#0a0a0a` | `text-ink`, `bg-ink` | Primary text, dark elements |
| `canvas` | `#f2f2f2` | `text-canvas`, `bg-canvas` | Page background |
| `accent` | `#FF7500` | `text-accent`, `bg-accent` | Brand orange, CTAs, dots |
| `blue` | `#2447F4` | `text-[#2447F4]` | Section numbering only |

### Typography

- **Font:** `Inter` (loaded from Google Fonts in `index.html`)
- **Font feature settings:** `"cv11", "ss01"` for ligatures
- **Letter spacing:** Generous on labels (`tracking-[0.26em]`), tight on headings (`tracking-[-0.03em]`)
- **Headings:** `font-bold` or `font-extrabold`, use `clamp()` for fluid sizing
- **Labels/caps:** `text-[11px]`, `font-semibold`, `uppercase`, `tracking-[0.26em]`

### Shadows

All shadows are defined inline (no custom config). Standard patterns used across the codebase:

```
Shadow type         | Class
--------------------|------------------------------------------------------------
Card lift           | shadow-[0_12px_30px_rgba(0,0,0,0.06)]
Pill button         | shadow-[0_14px_44px_-20px_rgba(0,0,0,0.45)]
Inset soft surface  | shadow-[inset_0_2px_10px_rgba(0,0,0,0.03)]
Small raise         | shadow-[0_4px_14px_rgba(0,0,0,0.05)]
```

### Section Header Convention

Every section starts with `<SectionHeader num="01" label="About" />`.  
Numbers render in `#2447F4` blue. Labels render in `text-neutral-500 uppercase`.  
See [`src/components/SectionHeader.tsx`](src/components/SectionHeader.tsx).

### Scroll Reveal

Elements animate in on scroll using `.reveal` + `.is-visible` classes.  
Hook: `src/hooks/useScrollReveal.ts`.  
Usage: add `className="reveal"` and optionally `data-delay="120"` (ms).

---

## File Structure

```
src/
  components/
    Navbar.tsx          ✅ Sticky header, mobile drawer, "LET'S CONNECT" CTA
    Hero.tsx            ✅ Full-viewport hero, orbiting orbs, portrait, name block
    Marquee.tsx         ✅ Auto-scrolling tech ticker below hero
    About.tsx           ✅ Asymmetric layout, pull-quote, stats panel
    Projects.tsx        ✅ 2-col grid, ProjectVisual, dark/light card variants
    Contact.tsx         ✅ CTA + footer with socials (GitHub, LinkedIn, X/Twitter)
    SectionHeader.tsx   ✅ Reusable section label (blue number + label + line)
    Icons.tsx           ✅ All inline SVG icons (no icon library dependency)
  hooks/
    useScrollReveal.ts  ✅ IntersectionObserver-based reveal hook
  utils/
    cn.ts               ✅ clsx + tailwind-merge helper
  App.tsx               ✅ Root, wires all sections together
  index.css             ✅ Tailwind v4 setup, theme tokens, custom animations
public/
  images/
    portrait2.png       ✅ Portrait photo used in Hero
    favicon.png         ✅ Favicon (circular badge, accent border)
index.html              ✅ Meta tags, font import, favicon
```

---

## Personal Details (already baked into code)

| Field | Value |
|---|---|
| Name | Om Dhuri |
| Email | `omdhuri.dev@gmail.com` |
| GitHub | `https://github.com/omdhuri` |
| LinkedIn | `https://www.linkedin.com/in/om-dhuri/` |
| Twitter/X | `https://x.com/omdhuri_` |
| Location | India |
| Status | 3rd-year Computer Engineering student |

---

## Key Conventions & Rules

### DO ✅
- Use `reveal` + `data-delay` for all scroll-animated elements
- Use `text-neutral-500` for muted/secondary copy
- Use `text-ink` for primary text
- Use `text-accent` for brand orange highlights
- Use `text-[#2447F4]` only for section numbers
- Keep components flat — no nested subdirectories unless absolutely necessary
- All icons live in `Icons.tsx` — add new icons there, never install icon libraries

### DON'T ❌
- Don't install Framer Motion, GSAP, or other animation libraries (CSS/keyframes only)
- Don't use Tailwind v3 config (`tailwind.config.js`) — this project uses v4
- Don't add dark mode — the theme is fixed light (`#f2f2f2` canvas)
- Don't add `transition: transform` on elements that also have CSS `animation` on `transform` — this suppresses keyframe animations (known bug we hit)
- Don't add placeholder external links — use real URLs or `href="#"` temporarily
- Don't use `font-display` or `font-label` — not configured. Use standard Tailwind font utilities

### Orb Animation (Hero)
The orbiting background spheres work via a CSS pivot technique:
- `.orbit-track-1/2` — invisible container sized to the soft-ring disc, rotates with `orbit-cw` keyframe
- `.orbit-sphere` — sphere positioned at `top: 0; left: 50%; transform: translate(-50%, -50%)` (on the rim)
- `.orb-counter-1/2` — counter-rotates at the same speed to keep the specular highlight fixed
- Animations use `!important` to bypass OS `prefers-reduced-motion` (intentional — pure decoration)

---

## What Is Pending

- [ ] Replace dummy projects in `Projects.tsx` with real project data from Om
- [ ] Add a Resume PDF to `public/` and link it in the Contact section
- [ ] Polish pass: verify mobile responsiveness on all new sections
- [ ] SEO: update meta description and og:image in `index.html`
