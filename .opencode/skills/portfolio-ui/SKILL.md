---
name: portfolio-ui
description: >
  Trigger: adding new UI components, shadcn/ui components, buttons, cards, forms, or layout elements.
  Use this skill when creating or modifying UI components.
trigger:
  - "shadcn"
  - "component"
  - "button"
  - "card"
  - "form"
  - "ui"
  - "tailwind"
---

## Portfolio UI Patterns

### shadcn/ui Components

Install new components with:
```bash
npx shadcn add <component>
```

Keep primitives in `components/ui/`. Do not add business logic there.

### Button Pattern

```tsx
import { Button } from "@/components/ui/button";

<Button variant="default" size="default">
  Click me
</Button>
```

Variants: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
Sizes: `default`, `sm`, `lg`, `icon`, `icon-sm`, `icon-lg`

### Card Pattern

```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content
  </CardContent>
</Card>
```

### Styling Rules

- Use `bg-black` as base background
- Dark mode is default (`className="dark"` on `<html>`)
- Gradient accents: purple/indigo (`#7c3aed`, `#6366f1`) for scrollbar
- Blue (`bg-blue-600`) for primary CTAs
- Custom scrollbar is defined in `globals.css`
- Use `cn()` from `@/lib/utils` for conditional classes

### Section Props Pattern

```tsx
interface SectionProps {
  dict: any;
  lang?: string;
}

export default function MySection({ dict, lang = "en" }: SectionProps) {
  return <section>...</section>;
}
```

### Server vs Client Components

- Prefer Server Components by default
- Add `"use client"` ONLY when:
  - Using Framer Motion / GSAP
  - Using React hooks (useState, useEffect)
  - Using browser APIs (window, document)
  - Using event handlers (onClick, onChange)
