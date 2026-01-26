# Aether AI — Autonomous Neural Systems

## Overview

Aether AI is a **GitHub-ready, production-grade React template** built for AI automation agencies, consultants, and system builders selling high-ticket AI services.

It prioritizes **clarity, performance, and credibility** while maintaining a futuristic, minimal aesthetic suitable for enterprise clients.

This repository is intended for developers who want a strong foundation—not a bloated marketing theme.

## Features

* Cinematic dark UI with subtle glow and noise
* Single-page application (SPA) architecture
* Scroll-linked and interaction-driven animations
* Modular, reusable React components
* Conversion-oriented sections (services, pricing, booking)
* Fully responsive layout

## Tech Stack

* **Framework:** React 19
* **Build Tool:** Vite
* **Styling:** Tailwind CSS v4
* **Animation:** Framer Motion
* **Icons:** Lucide React
* **Fonts:** Inter, Space Mono

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx            # Landing section
│   ├── Architecture.jsx   # System flow visualization
│   ├── Services.jsx       # Bento grid offerings
│   ├── Process.jsx        # Workflow narrative
│   ├── Pricing.jsx        # Pricing tiers
│   ├── BookingModal.jsx   # Lead capture
│   ├── ChatWidget.jsx     # Floating assistant
│   ├── ScrollProgress.jsx # Scroll indicator
│   └── Footer.jsx         # Footer
├── assets/                # Static media
├── App.jsx                # Root layout
├── index.css              # Global styles
└── main.jsx               # Entry point

```

***

## Getting Started

### Prerequisites

* Node.js 18+
* npm / yarn / pnpm

### Installation

```
git clone https://github.com/VIKESH-kapadiyaa/Aerther-ai.git
cd Aerther-ai
npm install

```

### Development

```
npm run dev

```

Application runs at `http://localhost:5173`

### Build

```
npm run build
npm run preview

```

***

## Customization

* **Branding:** Update colors and fonts in `index.css`
* **Content:** Edit section data directly inside components
* **Services & Pricing:** Modify arrays in `Services.jsx` and `Pricing.jsx`
* **Animations:** Tune motion values in Framer Motion configs

The codebase is intentionally explicit—no hidden magic.

***

## Deployment

### Vercel (recommended)

* Import the repository
* Framework preset: **Vite**
* Build command: `npm run build`
* Output directory: `dist`

### Netlify

* Build command: `npm run build`
* Publish directory: `dist`

## Performance Notes

* No canvas-heavy rendering
* Minimal layout shift
* Motion reduced on low-power devices

For SEO and analytics, integrate your preferred tools manually.

## Contributing

This project follows a **clean, opinionated structure**.

Contributions are welcome for:

* Performance improvements
* Accessibility enhancements
* Code clarity and refactors

Open an issue before major changes.

## License

MIT License

***

© 2026 Aether AI
