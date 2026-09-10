# Brownview Landscaping — demo site

Fictional Sydney landscaping company. Demonstration website.

Next.js (static export) + Tailwind. Fonts: Bricolage Grotesque (display) +
Karla (body), self-hosted, no external requests.

## Pages
- `/` Home — hero, intro, services, why us, projects, before/after, process,
  stats, testimonials, service areas, CTA band, FAQ
- `/services/` All services with what's included, process, full FAQ
- `/projects/` Filterable portfolio with before/after comparison sliders
- `/about/` Story, values, stats, service areas
- `/contact/` Enquiry form, details, hours, map
- `/quote/` Full quote request form with photo upload

## Editing content
Everything is in `content/site.ts` — copy, services, projects, FAQs,
testimonials, stats, service areas, contact details.

## Adding photos
Every image slot lives in `content/site.ts`. Drop files into `/public/photos/`
then set the `src`, e.g. `src: "/photos/hero.jpg"`. Empty `src` shows a
labelled placeholder, so the site never looks broken mid-way.

Search terms that work well on unsplash.com / pexels.com:
- hero: "landscaped garden australia", "modern garden design"
- intro: "landscaper planting", "sandstone paving detail"
- services: "garden design plan", "landscape construction", "paved patio",
  "retaining wall sandstone", "new turf lawn", "timber deck pergola"
- projects: shoot before/after pairs, or use two different garden photos
- about: "landscaping team", "landscaper portrait"

## Logo
`components/Logo.tsx` currently renders a wordmark placeholder. Replace the
markup with the real logo file when supplied.

## Forms
Both forms open the visitor's mail app until a Web3Forms key is set.
Get a free key at web3forms.com and paste it into `formAccessKey`
in `content/site.ts` to receive enquiries by email instead.

Note: file uploads on the quote form require a form service that supports
attachments — the field is present but only transmits with a service configured.

## Run locally
    npm install
    npm run dev

## Deploy
Push to GitHub, import into Vercel, deploy. Free hosting.
