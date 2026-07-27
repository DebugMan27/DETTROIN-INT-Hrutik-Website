# School Website

## Intern Information

| Field              | Value                        |
| ------------------ | ---------------------------- |
| **Full Name**      | Hrutik Tukaram Wakale        |
| **Intern ID**      |                              |
| **Email Address**  | hrutikwakale@27gmail.com     |
| **GitHub Username**| DebugMan27                   |
| **Selected Website** | https://www.vasantvalley.org/ |
| **Live Demo Link** | https://dettroin-int-hrutik-website.vercel.app/ |

## Technologies Used

- **React** 18 — UI library
- **Vite** 5 — Build tool and dev server
- **React Router** 6 — Client-side routing
- **Tailwind CSS** 3 — Utility-first styling
- **PostCSS** — CSS processing
- **Autoprefixer** — Vendor prefix automation
- **lucide-react** — Icon library

## Project Overview

A modern, responsive marketing website for a school, built with React, Vite, and Tailwind CSS. It includes public-facing pages for home, about, academics, admissions, gallery, news, and contact, plus a custom 404 page.

## Features

- **Home** — Hero, highlights, and call-to-action sections.
- **About** — School leadership, mission, vision, and stats.
- **Academics** — Programs and curriculum overview.
- **Admissions** — Admissions process and requirements.
- **Gallery** — Photo gallery of campus life.
- **News** — School news and announcements.
- **Contact** — Contact form and location details.
- **Responsive design** — Optimized for mobile, tablet, and desktop.
- **Animations** — Scroll-based reveals and hover micro-interactions.
- **Accessible routing** — Scroll-to-top on navigation and a 404 fallback.

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server with hot module replacement.

### Production Build

```bash
npm run build
```

Outputs the optimized production bundle to `dist/`.

### Preview Production Build

```bash
npm run preview
```

Serves the built `dist/` folder locally.

## Project Structure

```
.
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── components/
    │   ├── Footer.jsx
    │   ├── Navbar.jsx
    │   ├── PageHero.jsx
    │   └── ScrollToTop.jsx
    ├── hooks/
    │   └── useScrollAnimation.js
    └── pages/
        ├── Home.jsx
        ├── About.jsx
        ├── Academics.jsx
        ├── Admissions.jsx
        ├── Gallery.jsx
        ├── News.jsx
        ├── Contact.jsx
        └── NotFound.jsx
```

## Routing

| Path          | Page          |
| ------------- | ------------- |
| `/`           | Home          |
| `/about`      | About         |
| `/academics`  | Academics     |
| `/admissions` | Admissions    |
| `/gallery`    | Gallery       |
| `/news`       | News          |
| `/contact`    | Contact       |
| `*`           | 404 Not Found |

