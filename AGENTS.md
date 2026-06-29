# Portfolio — Agent Instructions

## Stack

- **Framework**: Next.js 16 (App Router)
- **Runtime**: React 19
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS v4 + PostCSS
- **UI Components**: shadcn/ui (New York style, baseColor: neutral)
- **Animations**: Framer Motion (scroll-driven, parallax, entrance reveals)
- **Email**: Resend API (contact form)
- **i18n**: Static dictionaries (`/dictionaries/{lang}.json`)

## File Structure

- `app/[lang]/` — Route groups for i18n (en, es)
- `components/` — Page sections
- `components/ui/` — shadcn/ui primitives only
- `lib/` — Utilities (`getDictionary.ts`, `utils.ts`)
- `dictionaries/` — JSON translation files
- `app/api/send-email/` — Resend contact API route
- `public/` — Project images (PNG screenshots)

### Sections (in order)
1. `Navigation` — Sticky, minimal, scroll-aware background
2. `Hero` — Split layout with parallax, rotating text circle, scroll indicator
3. `SelectedWork` — Asymmetric image/text layout with scroll-driven parallax on images
4. `About` — Split layout with large background text parallax
5. `Contact` — Form with social links as text
6. `Footer` — Name + year

## Conventions

### Components
- Prefer Server Components by default
- Add `"use client"` ONLY for:
  - Framer Motion animations (useScroll, useTransform)
  - React hooks (useState, useEffect, useRef)
  - Browser APIs
  - Event handlers
- Props pattern: `interface XProps { dict: any; lang?: string }`

### Styling Rules
- No `backdrop-blur` except where absolutely necessary
- No gradient text (except the hero name accent)
- No decorative background elements (orbs, grids, particles)
- No glassmorphism cards
- Images: `opacity-80` default, `opacity-100` on hover
- Cards/sections: `bg-[#12121a]`, `border-white/[0.04]`
- Buttons: solid orange for primary, text links for secondary

### Animations (Framer Motion)
- **Scroll-driven parallax**: `useScroll` + `useTransform` for elements that move at different speeds
- **Entrance reveals**: `whileInView` with `viewport={{ once: true, margin: "-100px" }}`
- **Staggered lists**: `staggerChildren` with delays
- **Easing**: `[0.16, 1, 0.3, 1]` (expo out feel)
- **Durations**: 0.6s-0.8s for entrances
- **No scale/rotate hover effects** on cards (except subtle image scale)
- **Continuous animations**: Only for rotating elements (text circle), slow and subtle

### Scroll Animation Patterns
```tsx
const ref = useRef(null);
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start end", "end start"],
});
const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
```

### Images in Projects
- Always use Next.js `<Image>` component
- `aspect-[4/3]` for project thumbnails
- `object-cover` with subtle opacity change on hover
- `group-hover:scale-105` for subtle zoom effect

### i18n
- Dictionaries loaded server-side via `getDictionary(lang)`
- Only `en` and `es` supported
- All user-facing strings from `dict`, never hardcoded
- Add new keys to BOTH dictionaries
- Project data (titles, descriptions) comes from dictionary

### API Routes
- `app/api/send-email/route.ts` handles contact form
- Uses Resend SDK. Requires `RESEND_API_KEY` in `.env.local`
- Validates `name`, `email`, `message` before sending

### shadcn/ui
- Install with `npx shadcn add <component>`
- Keep primitives in `components/ui/`, no business logic there
- Use `cn()` from `@/lib/utils` for conditional classes

## Guardrails

- **NO new animation libraries** without discussion
- **NO new languages** without updating `generateStaticParams` and dictionaries
- Prefer server components; add `"use client"` only when interactivity requires it
- Keep component props typed; avoid `any` when possible (except `dict`)
- Do not commit `.env.local` or API keys
