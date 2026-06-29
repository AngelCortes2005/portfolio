---
name: portfolio-animations
description: >
  Trigger: adding animations, Framer Motion transitions, GSAP timelines, scroll reveals, or visual effects.
  Use this skill when working with animations in the portfolio project.
trigger:
  - "animation"
  - "framer motion"
  - "gsap"
  - "scroll reveal"
  - "transition"
  - "motion"
---

## Portfolio Animation Patterns

### Framer Motion

Use for page entrances, hover effects, and scroll-triggered reveals:

```tsx
"use client";
import { motion } from "framer-motion";

// Page entrance
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.5 }}
>
  Content
</motion.div>

// Scroll reveal
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

### GSAP

Use for complex timeline animations (SplitText, Lightning, etc.):

```tsx
"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function MyComponent() {
  useGSAP(() => {
    gsap.to(".element", {
      opacity: 1,
      duration: 1,
      stagger: 0.1,
    });
  }, []);

  return <div className="element opacity-0">...</div>;
}
```

### Animation Guidelines

- Keep durations between 0.3s–0.8s for UI feedback
- Use `delay` sparingly; prefer `stagger` for sequences
- Respect `prefers-reduced-motion` when possible
- Dark theme: use subtle glows and purple/indigo accents
- Always mark components with animations as `"use client"`

### Existing Animation Components

- `SplitText` — Text splitting animation with GSAP
- `Lightning` — Canvas lightning effect
- `LogoLoop` — Infinite logo scroll
- `CircularText` — Rotating circular text
