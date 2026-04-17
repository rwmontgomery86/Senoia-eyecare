# Senoia Eyecare

Boutique optometry practice website — Senoia, Georgia (Est. 2018).
Hybrid Next.js site: editorial homepage + dedicated deep routes. Currently in **mockup / pre-launch** phase.
Voice: quiet-luxury, editorial, unhurried. Short sentences, em-dashes for rhythm, no marketing hype.

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript** (strict)
- **Tailwind 3.4** with a small custom theme — see [tailwind.config.ts](tailwind.config.ts)
- **`motion` 12** (Framer Motion successor) — always import from `motion/react`, never `framer-motion`
- **`next/font/google`** for Tenor Sans, Inter, Cormorant Garamond — wired in [app/layout.tsx](app/layout.tsx)
- `@/*` path alias resolves to project root

No state-management lib, no component library, no CSS-in-JS runtime. Don't add one without asking.

## Directory layout

```
app/
  layout.tsx                 fonts, metadata, <Nav />, <Footer />, <Grain />
  page.tsx                   homepage, composes homepage-only sections
  globals.css                base styles, custom classes, reduced-motion
  sitemap.ts / robots.ts     generated from site config + data arrays
  care/
    page.tsx                 services index
    [slug]/page.tsx          service detail (generateStaticParams)
  doctors/
    page.tsx                 doctors index
    [slug]/page.tsx          doctor bio
  team/page.tsx              support staff listing
  visit/page.tsx             address, hours, parking
  journal/
    page.tsx                 post index (sorted by publishedAt desc)
    [slug]/page.tsx          post detail
  privacy/page.tsx           legal
  accessibility/page.tsx     legal
components/
  Nav.tsx                    sticky header (mounted in layout)
  sections/                  homepage sections; BookingCTA reused on deep pages
  ui/                        reusable primitives
data/
  types.ts                   shared types
  site.ts                    single source of truth: url, bookingUrl, phone, email, address, hours, social
  services.ts, doctors.ts, team.ts, journal.ts, testimonials.ts, brands.ts
public/assets/               logo.png; future real images
```

`components/sections/*` are composed page pieces. `components/ui/*` are shared primitives. `<Nav />` and `<Footer />` render once in `app/layout.tsx`; do not re-mount them on page routes. Pages pull content from `data/*.ts` — **never hardcode copy inside a page file** if the same concept already has a data file (services, doctors, team, journal, testimonials, brands, site config).

## Design tokens

Never hardcode these hex values — always go through the Tailwind token.

| Token | Value | Use |
| --- | --- | --- |
| `cream` | `#F5F0E8` | default page bg |
| `cream-deep` | `#EDE6D9` | alternate light sections |
| `charcoal` | `#2A2826` | default text |
| `charcoal-deep` | `#1A1918` | dark sections |
| `gold` | `#A8884D` | rules, eyebrows, accents, focus ring |
| `gold-light` | `#C4A668` | hover states, highlights |

**Fonts** (CSS variables set in [app/layout.tsx](app/layout.tsx:6))

- `font-display` — Tenor Sans (400). Headlines. Pair with `uppercase tracking-wide2`.
- `font-body` — Inter (300 / 400 / 500). Body copy, UI, eyebrow labels.
- `font-accent` — Cormorant Garamond italic (400 / 500). Pull-quotes, serial numbers, testimonial prose.

**Tracking**: `tracking-eyebrow` (0.3em) for small-caps eyebrow labels. `tracking-wide2` (0.18em) for headlines.

**Easing**: `ease-expo` = `cubic-bezier(0.16, 1, 0.3, 1)`. Default for every hover and enter transition — don't introduce a new curve.

**Named animations** (in [tailwind.config.ts](tailwind.config.ts:47))
- `animate-marquee` — 40s linear loop (brand strip)
- `animate-drawOn` — 2.4s SVG stroke draw (use via `.draw-path` class)
- `animate-scrollHint` — pulsing down-arrow

## UI primitives — when to use each

- **`EyebrowLabel`** ([components/ui/EyebrowLabel.tsx](components/ui/EyebrowLabel.tsx)) — small-caps label above every section headline. Prop `tone`: `gold` (default), `cream` (over dark sections), `charcoal` (subtle).
- **`GoldRule`** ([components/ui/GoldRule.tsx](components/ui/GoldRule.tsx)) — 1px gold rule, animates `scaleX` on viewport enter. Sits above `EyebrowLabel` at section tops. Sections use `<GoldRule width="6rem" />`; default is `8rem`. Pass `vertical` for sidebar dividers.
- **`WordReveal`** ([components/ui/WordReveal.tsx](components/ui/WordReveal.tsx)) — headline primitive; splits on spaces and slides each word up with stagger. Use `inView={true}` (default) for below-the-fold sections. Use `inView={false}` **only** for the hero, so the headline reveals on mount.
- **`GlassesMotif`** ([components/ui/GlassesMotif.tsx](components/ui/GlassesMotif.tsx)) — the brand SVG (flourish + two lenses + bridge + temples). Pass `animated` for hero / featured placements; static elsewhere (footer divider).
- **`Placeholder`** ([components/ui/Placeholder.tsx](components/ui/Placeholder.tsx)) — stub image box. Props: `variant` (`portrait` / `landscape` / `square` / `tall` / `wide` / `free`), `caption`, `tone` (`light` / `dark`). **Transitional** — replace each instance with `next/image` as real photography arrives; delete the component once nothing references it.
- **`Grain`** ([components/ui/Grain.tsx](components/ui/Grain.tsx)) — full-viewport noise overlay. Mounted **once** in [app/layout.tsx](app/layout.tsx). Never mount again.
- **`PageHeader`** ([components/ui/PageHeader.tsx](components/ui/PageHeader.tsx)) — standard header for every non-home route: `GoldRule` + `EyebrowLabel` + `WordReveal` title + optional `description`. Replaces `<Hero />` on deep pages.
- **`PageBack`** ([components/ui/PageBack.tsx](components/ui/PageBack.tsx)) — small "← Back to X" affordance at the top of detail routes (`/care/[slug]`, `/doctors/[slug]`, `/journal/[slug]`).

## Section recipe

Every homepage section follows the same rhythm. New sections should too unless you have a reason not to — and if you do, flag it. Canonical reference: [components/sections/Philosophy.tsx](components/sections/Philosophy.tsx).

```tsx
"use client";

import { motion } from "motion/react";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GoldRule from "@/components/ui/GoldRule";
import WordReveal from "@/components/ui/WordReveal";

export default function MySection() {
  return (
    <section
      id="my-section"
      className="relative bg-cream px-6 py-32 md:px-10 md:py-40 lg:px-14 lg:py-48"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-4">
          <GoldRule width="6rem" />
          <EyebrowLabel>Section eyebrow</EyebrowLabel>
          <WordReveal
            as="h2"
            text="Headline in display serif."
            className="mt-2 font-display text-charcoal uppercase leading-[1.05] text-4xl md:text-5xl lg:text-6xl tracking-wide2"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14"
        >
          <p className="font-body text-base font-light leading-relaxed text-charcoal/80 md:text-lg">
            Body copy in Inter light, charcoal/80.
          </p>
          {/* optional accent quote: font-accent text-xl italic text-gold */}
        </motion.div>
      </div>
    </section>
  );
}
```

**Spacing rules**
- Container: `max-w-[1280px]` for content; `max-w-[1440px]` for edge-to-edge layouts.
- Horizontal padding on the `<section>`: `px-6 md:px-10 lg:px-14`.
- Vertical padding on the `<section>`: `py-32 md:py-40 lg:py-48` (standard), up to `py-56` for feature sections.
- Alternate light (`bg-cream` / `bg-cream-deep`) and dark (`bg-charcoal-deep`) sections for rhythm.

**Motion defaults**
- Any file using `motion` needs `"use client"` at the top.
- Enter animation: `opacity 0 → 1` with small `y` offset (20–30px), `duration: 1.1`, `ease: [0.16, 1, 0.3, 1]`, `viewport: { once: true, amount: 0.3 }`.
- Stagger children by `0.08s`; delay secondary columns by `0.2–0.3s`.

## Accessibility

- Focus rings are **gold, 2px, 3px offset** globally (see [app/globals.css](app/globals.css)). Don't override per-element.
- Reduced-motion is handled globally — `prefers-reduced-motion: reduce` collapses durations and forces SVG paths to their end state. Don't bypass it.
- Decorative SVGs: `aria-hidden`. Buttons and links: visible text or explicit `aria-label`.
- Smooth scroll is on globally. The homepage still uses hash anchors internally (`#philosophy`, `#services`, etc.) for within-page jumps; deep-page nav uses real routes.

## Content & copy conventions

- **Voice**: unhurried, specific, sensory. Em dashes for rhythm.
- **Headlines**: sentence case with a terminal period. *"A complete practice."*
- **Ordinals**: `01`, `02`, …, `N° 014` — `font-accent` italic, `text-gold`.
- **Phone**: `(770) 555 — 0199` (em dash, spaced).
- **Hours / addresses**: single source of truth is [data/site.ts](data/site.ts); never hardcode elsewhere.

## Current state (mockup phase — prune as items ship)

- **Placeholder copy that still needs real content**:
  - Doctor names and bios in [data/doctors.ts](data/doctors.ts) (`Dr. [Name One]`, `Dr. [Name Two]`, bracketed placeholder paragraphs in `bioBody`).
  - Team member names and roles in [data/team.ts](data/team.ts) — all four entries are bracketed placeholders.
  - Both journal posts in [data/journal.ts](data/journal.ts) — bodies are bracketed drafts to be rewritten.
  - Parking paragraph in [app/visit/page.tsx](app/visit/page.tsx) — bracketed placeholder.
  - [app/privacy/page.tsx](app/privacy/page.tsx) and [app/accessibility/page.tsx](app/accessibility/page.tsx) — policy bodies are bracketed drafts; need real drafts with counsel before launch.
- **Stub images**: every image except the logo is a `<Placeholder>`. Real photography still needed for hero background, featured frame (16:9), doctor portraits (3:4, used on both homepage and `/doctors/[slug]`), lookbook tiles, booking CTA background, visit map, and journal post heroes.
- **Stub links still pointing to `href="#"`**: `Discover this frame` in [FeaturedFrame.tsx](components/sections/FeaturedFrame.tsx) and `View the full lookbook` in [Lookbook.tsx](components/sections/Lookbook.tsx). No eyewear or lookbook route exists yet — keep stubs until one does.
- **Production URL**: [data/site.ts](data/site.ts) hardcodes `https://senoiaeyecare.com` in `site.url`. Confirm or change before launch; `sitemap.ts` and `robots.ts` depend on it.
- **Instagram**: [data/site.ts](data/site.ts) `social.instagram.url` points to generic `https://instagram.com`; swap for the real handle URL when confirmed.
- **Booking**: external Eyefinity scheduler, wired in [data/site.ts](data/site.ts) `bookingUrl`. All `Book an exam` / `Book online` CTAs read from there and open in a new tab. No in-site booking form.

## Don't

- Don't import from `framer-motion`; use `motion/react`.
- Don't hardcode colors or fonts — go through the Tailwind token.
- Don't introduce a new easing curve; use `ease-expo`.
- Don't add new CSS frameworks, component libraries, or state-management libs.
- Don't add CMS hookups, auth, or an in-site booking form without planning first.
- Don't hardcode phone, email, address, hours, booking URL, or site URL in a page — read from [data/site.ts](data/site.ts).
- Don't hardcode content that already has a data file (services, doctors, team, journal, testimonials, brands) inside a page.
- Don't mount `<Nav />`, `<Footer />`, or `<Grain />` on a page — they're in the root layout.
- Don't treat `href="#"` as real — they're stubs for eyewear/lookbook routes that don't exist.
