# OMTECH INNOVATORS - Developer Portfolio

> The official portfolio website of Joseph Omokwale, freelance web developer and designer at OMTECH INNOVATORS - featuring live projects, skills, an animated particle network background, and a working contact form.

**Live Site:** [omtech-portfolio.vercel.app](https://omtech-portfolio.vercel.app)
**GitHub:** [github.com/CARNAGE-TECH/omtech-portfolio](https://github.com/CARNAGE-TECH/omtech-portfolio)

---

## Overview

This portfolio was designed and built from scratch to represent OMTECH INNOVATORS professionally online. It features a custom canvas-based particle network animation in the background, smooth scroll-triggered entrance animations on every section, a fully working EmailJS contact form, WhatsApp and Instagram integration, and a mobile-first responsive layout.

---

## Sections

### Hero
- Specific headline for websites and apps built for growing brands
- "Available for freelance work" badge
- CTA buttons linking to projects and contact sections
- Direct GitHub link

### About
- Personal bio and developer background
- Tech stack badge display
- Key stats: years of experience, role, passion, location

### Projects
- Five featured project cards: LUMINA, Phoenix, FitTrack, OMTECH Chat, WeatherNow
- Live demo and GitHub links per project
- Tech stack tags per project
- Color-coded accent bars

### Skills
- Grouped by category: Languages, Frameworks & Libraries, APIs & Tools, Dev Tools
- Icon-based skill group cards

### Contact
- Fully working contact form via **EmailJS** (sends directly to inbox)
- WhatsApp direct message link
- Instagram profile link
- Email and location display

### Footer
- OMTECH INNOVATORS branding
- Copyright notice
- GitHub profile link

---

## Special Features

### Particle Network Background
- Custom built with HTML5 Canvas - no third-party particle library
- Floating particles connected by dynamic lines
- Interactive: particles connect to your mouse cursor on hover
- Fully responsive and performance optimized
- Runs at 60fps with no impact on scroll performance

### Scroll Animations
- Every section animates in as it enters the viewport
- Powered by Framer Motion's `whileInView` with `viewport={{ once: true }}`
- Smooth fade-up entrance on all content blocks

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React | Frontend framework |
| Framer Motion | Scroll animations and transitions |
| React Icons | Icon library |
| EmailJS | Contact form without a backend |
| HTML5 Canvas | Custom particle network animation |
| CSS (inline styles) | Responsive styling |
| Vercel | Deployment |

---

## Getting Started

### Prerequisites
- Node.js v16+
- npm
- Free EmailJS account at [emailjs.com](https://emailjs.com)

### Installation

```bash
git clone https://github.com/CARNAGE-TECH/omtech-portfolio.git
cd omtech-portfolio
npm install
npm start
```

### EmailJS Configuration
In `src/components/Contact.jsx` replace:
```js
const SERVICE_ID = 'your_service_id';
const TEMPLATE_ID = 'your_template_id';
const PUBLIC_KEY = 'your_public_key';
```

---

## Project Structure

```text
src/
|-- assets/
|   `-- logo.jpeg                # OMTECH INNOVATORS brand logo
|-- components/
|   |-- Particles.jsx            # Custom canvas particle network
|   |-- Navbar.jsx               # Sticky navbar with mobile hamburger menu
|   |-- Hero.jsx                 # Landing hero section
|   |-- About.jsx                # Bio, stats, and tech badges
|   |-- Projects.jsx             # Portfolio project cards
|   |-- Skills.jsx               # Skills grouped by category
|   |-- Contact.jsx              # EmailJS contact form + social links
|   `-- Footer.jsx               # Branded footer
`-- App.js                       # Root component and layout
```

---

## Roadmap

- [ ] Blog section for tech articles
- [ ] Individual case study pages per project
- [ ] Client testimonials section
- [ ] CV/Resume download button
- [ ] Light mode toggle

---

## Contact

**Joseph Omokwale**

Location: Edo State, Nigeria
Email: omtechinnovators@gmail.com
WhatsApp: [+234 807 638 4453](https://wa.me/2348076384453)
Instagram: [@omtechinnovators](https://instagram.com/omtechinnovators)
Website: [omtech-portfolio.vercel.app](https://omtech-portfolio.vercel.app)

---

## License
MIT License
