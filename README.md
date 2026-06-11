# Solidarite Congo Design System

Design system Next.js + Tailwind CSS pour garder une identite commune sur les prochaines interfaces Solidarite Congo x Couleur Cafe.

## Stack

- Next.js 15, compatible Node 18
- React 19
- Tailwind CSS 4
- pnpm
- TypeScript

## Demarrer

```bash
pnpm install
pnpm dev
```

Ouvrir `http://localhost:3000/design-system`.

## Scripts

```bash
pnpm dev
pnpm typecheck
pnpm build
pnpm start
```

## Utiliser le design system

Les composants et tokens sont exportes depuis :

```ts
import { Badge, Button, Card, SectionHeading, SlashMark, Swatch } from "@/design-system";
```

Les couleurs sont exposees dans `src/app/globals.css` comme variables CSS et classes Tailwind :

```tsx
<div className="bg-sc-blue-950 text-sc-yellow-500" />
```

Composants disponibles :

- `Button`
- `Badge`
- `Card`
- `SectionHeading`
- `SlashMark`
- `Swatch`

Tokens disponibles :

- `brandColors`
- `typographyTokens`
- `spacingTokens`

## Direction visuelle

- Bleu nuit comme base.
- Jaune signal pour les titres et appels a l'action.
- Rouge, orange et cyan pour l'urgence et le rythme.
- Typographie massive type affiche/festival.
- Ombres dures, texture fine, rubans bleus.

# solidarity_congo
