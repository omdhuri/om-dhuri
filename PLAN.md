# Plan.md — Om Dhuri Portfolio

> Living roadmap for the portfolio. Update this file as sections are completed or revised.  
> Last updated: 2026-08-29

---

## Vision

Build a **non-traditional creative developer portfolio** for Om Dhuri — a 3rd-year CS student from India.

**Core principle:** Be authentic. Don't pretend to have "18+ clients" or "3+ years of professional experience." Instead, lead with the quality of thinking, the polish of execution, and the ambition of someone building towards something great.

**Mood:** Editorial · Clean · Confident · Craft-first  
**Inspired by:** Linear.app, Stripe, creative studio sites  
**Anti-patterns avoided:**
- No generic 3-column card grid for projects
- No dark/light toggle
- No fake stats

---

## Section Status

| # | Section | Status | Notes |
|---|---|---|---|
| — | Navbar | ✅ Done | Sticky, blur-on-scroll, mobile drawer |
| 0 | Hero | ✅ Done | Portrait, orbiting orbs, name block, socials |
| — | Marquee | ✅ Done | Tech stack ticker |
| 01 | About | ✅ Done | Needs real bio polish when Om is ready |
| 02 | Projects | ✅ Done (dummy) | Real projects to be filled in |
| 03 | Contact | ✅ Done | Email + GitHub + LinkedIn + X |
| — | Footer | ✅ Done | Inside Contact.tsx |

---

## Current Hero State

- Portrait photo: `/public/images/portrait2.png`
- Orbiting background orbs: two spheres at different speeds (55s / 75s) offset by 155°
- Social links in hero (bottom bar): GitHub, LinkedIn, X/Twitter
- Focus list (right side): Web Development, Creative Development, Side Projects
- "Based in India" rotating badge (bottom right, xl+ screens only)
- Scroll indicator (bottom left, xl+ screens only)

---

## What Needs To Happen Next

### 🔴 High Priority

1. **Real Projects** — Replace dummy data in `Projects.tsx` with actual side projects. For each project, provide:
   - Title
   - 1-line description
   - Tags (tech used)
   - Live URL (or `null`)
   - GitHub URL (or `null`)

2. **Resume PDF** — Add to `public/resume.pdf` and hook up a download button in Contact section.

3. **About Copy Polish** — The current bio is a placeholder. Om to review and personalise.

### 🟡 Medium Priority

4. **SEO Pass** — `index.html` needs:
   - `<meta name="description">` — personalised description
   - `<meta property="og:image">` — share thumbnail
   - `<meta property="og:url">` — final deployed URL

5. **Mobile Audit** — Test all new sections (About, Projects, Contact) on 375px and 430px viewports.

6. **Favicon** — Current favicon is at `/public/images/favicon.png`. Confirm it looks good on all platforms.

### 🟢 Future / Nice-to-Have

7. **Skills Section** — Originally planned but deprioritised. Options discussed:
   - Option A: Interactive category bubbles (Frontend / Backend / Tools / Design)
   - Option B: Proficiency rings consistent with the orb aesthetic
   - *Recommendation: Add this between Projects and Contact when time permits.*

8. **Experience / Journey** — Since Om has no work history, options:
   - A "My Journey" timeline (milestones as a student, not jobs)
   - Education block (college, course highlights, hackathons)
   - *Add only if it adds value — don't pad the page.*

9. **Project Detail Pages** — Once real projects are in, consider `/projects/[slug]` pages for case studies.

10. **Deployment** — Deploy to Vercel or Netlify. Update `og:url` after.

---

## Design Tokens Quick Reference

```
#0a0a0a  — ink (text, dark bg)
#f2f2f2  — canvas (page bg)
#FF7500  — accent orange (brand, CTAs, dots)
#2447F4  — section numbering only
```

---

## Key Files to Know

| File | Purpose |
|---|---|
| `src/index.css` | Theme tokens, animations (Tailwind v4 `@theme`) |
| `src/components/SectionHeader.tsx` | `01 — About` headers across all sections |
| `src/components/Icons.tsx` | All SVG icons. Add new ones here. |
| `src/hooks/useScrollReveal.ts` | Scroll-in animations via IntersectionObserver |
| `AGENTS.md` | Full context doc for AI agents and developers |
