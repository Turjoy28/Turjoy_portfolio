# Turjoy Portfolio

Personal portfolio of **Saif Saruwar Turjoy**, built with **React** and **Vite**.

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Project structure

```
├── index.html                 # Vite HTML entry
├── public/                    # Static files, served as-is
│   ├── cv/Dev_Turjoy.pdf
│   ├── images/                # Profile & project screenshots
│   └── favicon.svg
└── src/
    ├── main.jsx               # React entry point
    ├── App.jsx                # Root component
    ├── components/            # Reusable UI (Navbar, BarAnimation, SectionHeading)
    ├── sections/              # Page sections (Home, Services, Resume, Portfolio, Contact)
    ├── data/                  # All site content (edit text/projects here)
    ├── hooks/                 # useActiveSection (scroll-spy), useContactForm
    ├── services/              # EmailJS integration
    ├── config/                # EmailJS credentials (overridable via .env)
    ├── utils/                 # Asset path helper, form validators
    └── styles/global.css      # Reset, CSS variables, shared utilities
```

## Editing content

- **Projects** → `src/data/projects.js` (put screenshots in `public/images/`)
- **Services** → `src/data/services.js`
- **Resume tabs** → `src/data/resume.js`
- **Bio, social links, contact info** → `src/data/profile.js`

## Contact form

The form sends email through [EmailJS](https://www.emailjs.com/). To use different
credentials, copy `.env.example` to `.env` and update the values.

## Libraries

- [React](https://react.dev/) + [Vite](https://vite.dev/)
- [@fortawesome/react-fontawesome](https://docs.fontawesome.com/web/use-with/react) for icons
- [@emailjs/browser](https://www.npmjs.com/package/@emailjs/browser) for the contact form
