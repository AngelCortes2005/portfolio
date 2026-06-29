---
name: portfolio-i18n
description: >
  Trigger: adding translations, new languages, i18n keys, or modifying dictionary files.
  Use this skill when working with internationalization.
trigger:
  - "i18n"
  - "translation"
  - "dictionary"
  - "language"
  - "locale"
  - "es"
  - "en"
---

## Portfolio i18n Patterns

### Supported Languages

- `en` — English
- `es` — Spanish

### Adding New Text

1. Add the key to BOTH dictionaries:
   - `dictionaries/en.json`
   - `dictionaries/es.json`

2. Use in components via `dict` prop:

```tsx
interface Props {
  dict: any;
}

export default function MyComponent({ dict }: Props) {
  return <h1>{dict.mySection.title}</h1>;
}
```

### Dictionary Structure

```json
{
  "hero": {
    "title": "Hello",
    "subtitle": "Welcome"
  },
  "contact": {
    "form": {
      "name": "Name",
      "email": "Email",
      "message": "Message",
      "send": "Send"
    }
  }
}
```

### Server-Side Loading

```tsx
import { getDictionary, Locale } from "@/lib/getDictionary";

export default async function Page({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang);
  return <MyComponent dict={dict} />;
}
```

### Language Toggle

The `LanguageToggle` component handles switching between `en` and `es`.

### Adding a New Language

1. Add to `dictionaries/{lang}.json`
2. Update `generateStaticParams()` in `app/[lang]/layout.tsx`
3. Update `lib/getDictionary.ts` type definitions
4. Update middleware if needed

⚠️ Do NOT add languages without updating all required files.
