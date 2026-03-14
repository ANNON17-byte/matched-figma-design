
A production-quality Next.js 14 application built as a Frontend Internship assignment for **SyncUp**. The project implements two pages — a **Home Page** (social feed) and a **Job Dashboard** — pixel-matched to provided Figma designs.

## Live Demo

https://matched-figma-design.vercel.app/dashboard

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS 3.4 |
| Icons | Lucide React |
| Charts | Recharts |
| Linting | ESLint (next/core-web-vitals) |

---

## Features

- **Two fully implemented pages** matching the Figma designs
- **Reusable component library** — Button, Avatar, Card, Badge, ProgressBar, SearchInput, ToggleSwitch
- **Shared layout system** — Navbar, Sidebar with active route highlighting, PageLayout wrapper
- **Interactive charts** — Line chart with custom tooltip (Recharts) and SVG mini bar charts
- **Job application table** with status badges and filter toggles
- **Responsive design** — adapts across mobile, tablet, and desktop breakpoints
- **TypeScript strict mode** — zero type errors
- **ESLint clean** — zero warnings or errors
- **Semantic HTML** with ARIA labels for accessibility

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                # Root layout (Inter font, metadata)
│   ├── page.tsx                  # Home Page
│   ├── dashboard/
│   │   └── page.tsx              # Job Dashboard Page
│   └── globals.css               # Tailwind base + scrollbar styles
│
├── components/
│   ├── ui/                       # Reusable primitives
│   │   ├── Avatar.tsx            # Sized avatar with initials fallback
│   │   ├── Badge.tsx             # Status badges (success/warning/danger/info/neutral)
│   │   ├── Button.tsx            # 4 variants x 3 sizes
│   │   ├── Card.tsx              # Surface container with shadow + padding tokens
│   │   ├── ProgressBar.tsx       # Accessible progress bar
│   │   ├── SearchInput.tsx       # Search field with icon
│   │   └── ToggleSwitch.tsx      # Animated toggle switch
│   │
│   ├── layout/                   # Shell components
│   │   ├── Navbar.tsx            # Top bar (search, messages, notifications, avatar)
│   │   ├── Sidebar.tsx           # Fixed dark sidebar with route-aware active state
│   │   └── PageLayout.tsx        # Composes Sidebar + Navbar + content area
│   │
│   └── sections/                 # Page-specific section components
│       ├── home/
│       │   ├── ProfileSidebar.tsx
│       │   ├── CreatePost.tsx
│       │   ├── PostCard.tsx
│       │   ├── PostFeed.tsx
│       │   ├── SosmedStories.tsx
│       │   ├── HirePromo.tsx
│       │   ├── Suggestions.tsx
│       │   └── RightPanel.tsx
│       └── dashboard/
│           ├── WelcomeHeader.tsx
│           ├── StatsCards.tsx
│           ├── VacancyStats.tsx
│           ├── JobApplicationTable.tsx
│           └── RecommendedJobs.tsx
│
├── constants/
│   ├── mockData.ts               # All mock data matching Figma
│   └── navigation.ts             # Nav item definitions
│
├── lib/
│   └── utils.ts                  # cn() class merger, formatCompactNumber()
│
└── types/
    └── index.ts                  # Shared TypeScript interfaces
```

---

## Design Tokens

All design values are extracted from the Figma designs and centralized in `tailwind.config.ts`:

| Token | Value | Usage |
|-------|-------|-------|
| `primary` | `#5B2EFF` | Brand purple (10-shade scale) |
| `navy` | `#1E1B4B` | Sidebar and dark surfaces (10-shade scale) |
| `background` | `#F4F2EE` | Page background |
| `surface` | `#FFFFFF` | Card backgrounds |
| `success` | `#10B981` | Positive status |
| `warning` | `#F59E0B` | Pending status |
| `danger` | `#EF4444` | Error / rejected status |
| Font scale | 10px – 32px | 10 sizes matching Figma type scale |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/<your-username>/syncup.git
cd syncup
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Routes

| Route | Page |
|-------|------|
| `/` | Home Page (social feed) |
| `/dashboard` | Job Dashboard |

### Type Checking

```bash
npx tsc --noEmit
```

### Linting

```bash
npm run lint
```

---

## Responsive Breakpoints

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Default | < 640px | Single column, sidebars hidden |
| `sm` | 640px | Stats cards 2-column grid |
| `md` | 768px | Navbar adapts |
| `lg` | 1024px | Home page 3-column layout, sidebars visible |
| `xl` | 1280px | Dashboard 2-column layout, recommended jobs sidebar visible |

---

## Deployment (Vercel)

1. Push the repository to GitHub.

2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.

3. Vercel auto-detects Next.js. No configuration needed.

4. Click **Deploy**.

Alternatively, deploy via CLI:

```bash
npm i -g vercel
vercel
```

---

## Performance Considerations

- **Server Components by default** — only components requiring hooks (`usePathname`, `useState`) are marked `"use client"`
- **Next.js Image component** used throughout for automatic optimization
- **Recharts lazy rendering** via `ResponsiveContainer` — chart renders only at visible size
- **No unnecessary re-renders** — static sections are server-rendered, interactive toggles are isolated client components
- **Tailwind CSS purging** — unused styles stripped in production build
- **Inter font via `next/font/google`** — self-hosted, no layout shift

---

## Built With

- [Next.js 14](https://nextjs.org/) — React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) — Type safety with strict mode
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- [Lucide React](https://lucide.dev/) — Icon library
- [Recharts](https://recharts.org/) — Composable chart library

---

