# VayuCred – India's Digital MRV & Carbon Credit Platform

A premium, static website built with **pure HTML, CSS, and JavaScript** — no frameworks, no build tools, no dependencies.

## Pages

| Page | File |
|------|------|
| Home | `index.html` |
| About | `about.html` |
| Contact | `contact.html` |
| Projects | `projects.html` |
| Careers | `careers.html` |
| General Application | `careers-apply.html` |
| Privacy Policy | `privacy.html` |
| Solar Solutions | `services-solar.html` |
| EV Fleet Solutions | `services-ev.html` |
| Corporate Credits | `services-corporate.html` |
| MRV Technology | `services-mrv.html` |

## Running Locally

Simply open `index.html` in your browser, or use any static server:

```bash
# Python
python3 -m http.server 8000

# Node (npx)
npx serve .
```

## Deployment

Upload all files directly to any static hosting provider (Hostinger, Netlify, Vercel, GitHub Pages, etc). No build step required.

## Structure

```
├── css/
│   ├── global.css        # Design system, nav, footer, utilities
│   ├── home.css          # Home page styles
│   ├── about.css         # About page styles
│   ├── contact.css       # Contact page styles
│   └── projects.css      # Projects page styles
├── js/
│   ├── common.js         # Shared: nav, theme, mobile menu, scroll
│   ├── home.js           # Calculator, hero animations
│   ├── home-content.js   # Home page dynamic sections
│   ├── about.js          # About page content
│   ├── contact.js        # Form validation, FAQ accordion
│   ├── projects.js       # Project data & filtering
│   └── service-detail.js # Service pages data & renderer
├── index.html
├── about.html
├── contact.html
├── projects.html
├── careers.html
├── careers-apply.html
├── privacy.html
├── services-solar.html
├── services-ev.html
├── services-corporate.html
└── services-mrv.html
```

## Features

- 🌙 Dark/Light theme with localStorage persistence
- 📱 Responsive mobile drawer navigation
- 💰 Live earnings calculator
- 📝 Form validation (contact + job application)
- 📎 File upload with drag-and-drop
- 🎵 FAQ accordion
- ✨ Scroll reveal animations (Intersection Observer)
- 🔝 Scroll-to-top button
- 🎨 Zero dependencies — pure vanilla code
