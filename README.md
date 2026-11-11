# CycleWell (evo-health-hub)

CycleWell is a front-end prototype of an inclusive period-tracking and sexual-health education app. It combines a cycle tracker, health guides for girls and boys, a searchable Q&A section, a learning hub and a support chat UI.

> **Status:** UI prototype. All content and data (cycle days, stats, chat replies) are hard-coded in the components. There is no backend, persistence, authentication or real chat/AI integration yet.

## Features

| Route | Page | What it shows |
| --- | --- | --- |
| `/` | Dashboard | Overview cards (current cycle, health score, tracking progress, quick tips) and links to the boys'/girls' health guides |
| `/tracker` | Period Tracker | 28-day cycle calendar highlighting period and ovulation days, flow level and symptom selectors, cycle stats |
| `/qna` | Questions & Answers | Searchable FAQ grouped by topic (period basics, boys' health, cycle health, sexual health, symptoms & relief) |
| `/chat` | Support Chat | Chat interface; replies are a simulated demo response |
| `/learn` | Health Education | Topic cards (body, safe practices, emotional wellness, relationships) and a "Myths vs Facts" section |
| `/girls-health` | Girls' Health | Guides on menstrual hygiene, sexual health and intimate hygiene |
| `/boys-health` | Boys' Health | Guides on nightfall, masturbation and sexual health, safety and hygiene |

A responsive navigation bar (`src/components/Navigation.tsx`) links Home, Tracker, Q&A, Chat and Learn.

## Tech stack

- [Vite](https://vitejs.dev/) + React 18 + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) and [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives) in `src/components/ui`
- React Router for routing, TanStack Query provider, lucide-react icons

## Getting started

Requirements: Node.js and npm.

```sh
npm install
npm run dev
```

The dev server is configured in `vite.config.ts` to listen on port **8080**.

### Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build into `dist/` |
| `npm run build:dev` | Build using development mode |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

No test script is configured.

## Configuration

No environment variables are used.

## Project structure

```
src/
  App.tsx            # Routes
  pages/             # Dashboard, Tracker, QnA, Chat, Learn, BoysHealth, GirlsHealth, NotFound
  components/        # Navigation + shadcn/ui components
  assets/            # Images used on the dashboard and guide pages
  hooks/, lib/       # Toast/mobile hooks and utility helpers
```

## Disclaimer

The health content in this app is general educational information and is not a substitute for professional medical advice.
