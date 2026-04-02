# FEES - Mobile FEES Business Platform

## Stack
- Next.js 16.2.x, React 19, TypeScript
- TailwindCSS v4, Motion (framer-motion), Radix UI
- Zustand for client state, Zod for validation
- No database — localStorage + print/PDF export

## Build & Run
```bash
npm run dev        # local development
npm run build      # production build
npm run lint       # ESLint check
```

## Deploy
Auto-deploys from main via Render.com

## Key Conventions
- Audience system: "facility" vs "patient" (useAudience hook)
- Route groups: (marketing) for public pages, (docs) for clinical tools
- Form data persists to localStorage via useState + useEffect
- PDF export via window.print() with @media print CSS
- Images in public/images/, audio in public/audio/
- Mobile-first responsive design
- Color palette: deep teal primary, warm amber accent
