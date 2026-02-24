# Kambros LLC — Project Explanation

## What Is This Project?

A **corporate landing page** for **Kambros LLC**, a company providing procurement services and logistics for industrial sectors (marine, mining, power generation, etc.). It is a single-page marketing website — no backend, no database, no authentication.

---

## Technology Stack

| Technology | Role |
|---|---|
| **Next.js 16** | React framework — routing, rendering, image optimization |
| **React 19** | UI component model |
| **TypeScript** | Type safety across all `.tsx` files |
| **Tailwind CSS 4.0** | Utility-first CSS (newest version, uses `@import 'tailwindcss'`) |
| **Radix UI** | Headless, accessible UI primitives (accordion, dialog, etc.) |
| **Lucide React** | Icon library |
| **Vercel Analytics** | Tracks page visits when deployed to Vercel |

---

## Folder Structure

```
project/
├── app/                        ← Next.js App Router
│   ├── page.tsx                ← The homepage (only page)
│   ├── layout.tsx              ← Root layout: fonts, metadata, analytics
│   └── globals.css             ← Design tokens (colors, fonts) + Tailwind setup
│
├── components/                 ← Every visual section of the page
│   ├── navbar.tsx              ← Sticky top navigation (desktop + mobile)
│   ├── hero.tsx                ← Full-screen hero banner with background image
│   ├── about.tsx               ← "About Us" section with 4 stats cards
│   ├── industries.tsx          ← 5 industry cards (Marine, Mining, etc.)
│   ├── services.tsx            ← Procurement + Warehousing sections with images
│   ├── cta.tsx                 ← Call-to-action banner
│   ├── footer.tsx              ← Contact details for 2 offices + copyright
│   ├── theme-provider.tsx      ← Dark/light mode provider (next-themes)
│   └── ui/                     ← 57 reusable Shadcn/ui components
│
├── lib/
│   └── utils.ts                ← `cn()` helper for merging Tailwind classes
│
├── hooks/                      ← Custom React hooks (mobile detection, toasts)
│
├── public/
│   ├── images/                 ← hero.jpg, procurement.jpg, warehouse.jpg
│   ├── icon.svg                ← Browser tab icon (SVG)
│   ├── icon-light-32x32.png   ← Favicon for light mode
│   ├── icon-dark-32x32.png    ← Favicon for dark mode
│   ├── apple-icon.png          ← iOS home screen icon
│   └── manifest.json           ← PWA manifest file
│
└── styles/                     ← Additional style files
```

---

## How the Page Is Assembled

`app/page.tsx` stacks components vertically in order:

```tsx
<main>
  <Navbar />       // fixed top bar — always visible while scrolling
  <Hero />         // full-screen banner with CTA buttons
  <About />        // company background + 4 animated stat cards
  <Industries />   // 5 industry sector cards
  <Services />     // procurement & warehousing detail sections
  <CTA />          // "Ready to streamline your supply chain?" prompt
  <Footer />       // addresses, phone numbers, copyright
</main>
```

Each component is fully self-contained — its own data, styles, and markup.

---

## Design System (Colors & Fonts)

`globals.css` defines **CSS custom properties** (design tokens):

```css
:root {
  --primary:    oklch(0.30 0.08 250);  /* Deep navy blue — used for navbar/footer */
  --accent:     oklch(0.55 0.15 200);  /* Teal/cyan — used for highlights & icons */
  --background: oklch(0.985 0.002 240); /* Near-white page background */
}
```

These map to Tailwind classes via `@theme inline`, enabling classes like:
- `bg-primary` → navy background
- `text-accent` → teal text
- `border-border` → subtle gray border

**Two fonts** loaded from Google Fonts:
- **Inter** → body text (`font-sans`)
- **Space Grotesk** → headings (applied inline via `style={{ fontFamily: "var(--font-heading)" }}`)

---

## The `ui/` Components (Shadcn/ui)

The `components/ui/` folder contains **57 pre-built components** from [Shadcn/ui](https://ui.shadcn.com):
- `Button`, `Card`, `Dialog`, `Separator`, `Accordion`, `Tabs`, `Toast`, etc.
- These are **copied into your project** (not installed as a package) — you own and can edit them.
- Only a handful are used in this landing page (`Separator` in footer, `Button` imported in navbar).

---

## Key Code Patterns

### 1. Static data arrays
Data is defined as arrays at the top of each file, keeping JSX clean:
```tsx
const stats = [
  { icon: Clock, value: "40+", label: "Years of Experience" },
  { icon: Globe, value: "2",   label: "Global Offices" },
]
// Rendered with .map()
{stats.map((stat) => <StatCard key={stat.label} {...stat} />)}
```

### 2. Hash-based navigation
Nav links use `#id` anchors (`#services`, `#contact`). Sections have matching `id` attributes. Clicking a link scrolls to that section.

### 3. Responsive navbar
- **Desktop**: horizontal links + phone numbers, hidden on small screens (`md:flex`)
- **Mobile**: hamburger button toggles a dropdown menu via React `useState`

### 4. Next.js `<Image>` component
All 3 photos use `fill` mode — the image fills its parent container:
```tsx
<div className="relative aspect-[4/3] overflow-hidden rounded-lg">
  <Image src="/images/hero.jpg" alt="..." fill className="object-cover" />
</div>
```
The parent needs `position: relative` and a defined size.

### 5. Next.js `<Link>` component
Internal navigation uses `<Link>` (optimized by Next.js). External `tel:` links use standard `<a>` tags.

---

## What's NOT in the Project

| Feature | Status |
|---|---|
| Contact form | ❌ Not implemented — nav links just scroll to the footer phone numbers |
| Multiple pages / routing | ❌ Single page only |
| CMS or database | ❌ All content is hardcoded |
| Authentication | ❌ Not needed |
| Dark mode toggle | ⚠️ Infrastructure exists (theme-provider, `.dark` CSS) but no UI button |
| Smooth scrolling | ⚠️ Not configured in CSS (can be added with `scroll-behavior: smooth`) |

---

## How to Run

```bash
npm install       # Install dependencies
npm run dev       # Start dev server → http://localhost:3000
npm run build     # Build for production
npm run lint      # Run ESLint
```

## Deployment

Configured for **Vercel** — `@vercel/analytics` is imported in `layout.tsx` and activates automatically on Vercel's platform.
