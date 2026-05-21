# Money Hunter — Web3 & Finance Community

Komunitas belajar Web3, crypto, dan finance global. Bergabung dengan 2,000+ learners sejak 2022.

![Money Hunter](./public/og-image.png)

## Live Website

[moneyhunter.xyz](https://moneyhunter.xyz)

## Join Our Community

| Platform | Link | Description |
|---|---|---|
| Telegram | [t.me/moneyhunteridn](https://t.me/moneyhunteridn) | Daily discussions & updates |
| Discord | [discord.gg/PcrwafBjAA](https://discord.gg/PcrwafBjAA) | Structured community |
| Instagram | [@moneyhunteridn](https://instagram.com/moneyhunteridn) | Educational content |
| X (Twitter) | [@moneyhunteridn](https://x.com/moneyhunteridn) | Latest news & insights |

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router, Turbopack) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 + tw-animate-css |
| Components | [shadcn/ui](https://ui.shadcn.com/) (Radix primitives) |
| Charts | [Recharts](https://recharts.org/) |
| Icons | [Lucide React](https://lucide.dev/) + [React Icons FA6](https://react-icons.github.io/react-icons/) |
| Font | Plus Jakarta Sans + Geist Mono |
| Market Data | CoinGecko API (free) |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/moneyhunteridn/moneyhunter-web.git
cd moneyhunter-web

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Development server with Turbopack |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
moneyhunter-web/
├── app/
│   ├── education/
│   │   └── page.tsx         # Education hub (4 modules)
│   ├── rules/
│   │   └── page.tsx         # Community guidelines & security tips
│   ├── globals.css          # Global styles + animations
│   ├── layout.tsx           # Root layout, metadata, SEO, JSON-LD
│   ├── loading.tsx          # Global loading spinner
│   ├── not-found.tsx        # 404 page
│   ├── page.tsx             # Homepage
│   ├── robots.ts            # robots.txt generation
│   └── sitemap.ts           # sitemap.xml generation
├── components/
│   ├── ui/                  # shadcn/ui primitives (Accordion, Badge, Button)
│   ├── education-card.tsx   # Card linking to external resources
│   ├── fade-in-section.tsx  # IntersectionObserver scroll animation
│   ├── footer.tsx           # Site footer
│   ├── investment-calculator.tsx  # Compound interest calculator + chart
│   ├── language-provider.tsx      # EN/ID context + localStorage persistence
│   ├── language-toggle.tsx        # EN↔ID toggle button
│   ├── market-ticker.tsx          # Live crypto price marquee (CoinGecko)
│   ├── navbar.tsx           # Fixed header + mobile menu
│   ├── scroll-to-top.tsx    # Floating scroll-to-top button
│   ├── theme-provider.tsx   # Light/dark/system theme context
│   └── theme-toggle.tsx     # Theme dropdown
├── lib/
│   └── utils.ts             # cn() utility (clsx + tailwind-merge)
└── public/
    ├── favicon/             # Full favicon set (ico, svg, png, apple-touch)
    ├── manifest.json        # Web app manifest
    ├── og-image.png         # Social media preview image
    └── robots.txt           # Static fallback
```

## Pages

| Route | Description |
|---|---|
| `/` | Hero, live market ticker, community features, investment calculator, FAQ |
| `/education` | Curated learning path: Stocks, Crypto, Blockchain, Investment Mindset |
| `/rules` | Community guidelines + Web3 security tips |

## License

© Money Hunter. All rights reserved.
