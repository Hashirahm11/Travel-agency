# Wanderlux Travels — Premium Luxury Travel Website

> **Tagline:** Journeys Crafted Beyond the Ordinary  
> **Brand Identity:** Inspired by Abercrombie & Kent, Black Tomato, and Lonely Planet.  
> **Built With:** React 19, TypeScript, Vite, Tailwind CSS 4, React Router 7, Framer Motion, Lucide Icons, react-helmet-async, react-hook-form, and Zod.

---

## 🌟 Executive Overview

Wanderlux Travels is a complete, production-ready, luxury-style travel agency website designed to international standards. Built with research-backed data, authentic travel photography, transparent pricing benchmarks in US Dollars (USD), and official immigration authority guidance, this project contains zero placeholder lorem ipsum, no fabricated customer reviews, and no artificial countdowns.

### Key Highlights
- **13 Researched Destinations**: Detailed individual pages for Paris, Santorini, Maldives, Dubai, Bali, Tokyo, Istanbul, Swiss Alps, Rome, New York, Cape Town, Hunza Valley (Gilgit-Baltistan), and Skardu (Gilgit-Baltistan). *Hunza Valley and Skardu are engineered as distinct destinations with their own data, photography, and itineraries.*
- **10 Signature Tour Packages**: Spanning Honeymoon, Family, Adventure, Luxury, Budget, and Group Tours with daily itineraries, accommodation categories, and checked pricing dates.
- **12 Comprehensive Services**: Flight routing, luxury hotel reservations, visa document audit, travel insurance, custom itineraries, chauffeured transfers, and more.
- **3 In-Depth Travel Guides**: Researched guides covering Hunza Valley seasons, Dubai luxury experiences, and Maldivian atoll logistics.
- **Authentic Local Photography**: 48 high-resolution real-world photographs locally hosted in `/public/images/` with complete attribution documented in `/public/images/CREDITS.md`.
- **Fact Verification Registry**: Documented in `/public/DATA_SOURCES.md` citing official tourism boards, government immigration portals, and meteorological services.
- **Enterprise SEO & JSON-LD**: Dynamic meta tags, Open Graph, Twitter cards, XML sitemap, and Google-compliant structured data.

---

## 🚀 1. How to Install the Project

Ensure you have **Node.js 18+** (Node 20+ or 24 recommended) and **npm** installed on your system.

```bash
# Clone or extract the project repository
cd "c:\Users\Mabroor\Desktop\Travel agency"

# Install all dependencies cleanly
npm install
```

---

## 💻 2. How to Run Locally

```bash
# Start the Vite development server
npm run dev
```

Open your browser and navigate to the local URL (typically `http://localhost:5173/`).

To verify production compilation and linting:
```bash
# Check code style and verify 0 lint errors
npm run lint

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🗺️ 3. How to Edit Destinations

All destination information is data-driven and strictly typed in:
```text
src/data/destinations.ts
```

Each destination item conforms to the `Destination` interface in `src/types/index.ts`:
```ts
{
  id: 'paris',
  slug: 'paris',
  name: 'Paris',
  country: 'France',
  region: 'Western Europe',
  heroImage: '/images/destinations/paris.jpg',
  cardImage: '/images/destinations/paris.jpg',
  shortDescription: '...',
  overview: ['Paragraph 1', 'Paragraph 2', 'Paragraph 3'],
  indicativePriceUSD: 1850,
  durationDays: 7,
  bestTimeToVisit: 'April to October',
  currency: 'Euro (EUR / €)',
  languages: ['French (official)', 'English'],
  climate: 'Temperate oceanic...',
  visaGuidance: {
    summary: 'Schengen Tourist Visa (Type C)',
    portalName: 'France-Visas Official Government Portal',
    officialPortalUrl: 'https://france-visas.gouv.fr/',
    requirementsNote: '...',
    lastVerifiedDate: 'November 2026'
  },
  attractions: [...],
  sampleItinerary: [...],
  sampleInclusions: [...],
  sampleExclusions: [...],
  galleryImages: [...],
  seasons: [...],
  faqs: [...]
}
```

To add a new destination:
1. Add an entry to `destinations` in `src/data/destinations.ts`.
2. Add its corresponding images to `/public/images/destinations/` and `/public/images/attractions/`.
3. Document image credits in `/public/images/CREDITS.md` and research sources in `/public/DATA_SOURCES.md`.
4. Add the URL to `public/sitemap.xml`.

---

## 🏷️ 4. How to Edit Packages and Prices

Packages are managed in:
```text
src/data/packages.ts
```

Pricing guidelines:
- All prices default to **USD ($)**.
- Each price represents an **indicative planning estimate** based on twin-share occupancy in 4-star to 5-star properties.
- Under `pricingDetails`, specify:
  - `basis`: (e.g. `Per person on twin-share basis`)
  - `assumedTravelers`: (e.g. `2`)
  - `accommodationCategory`: (e.g. `5-Star Ultra-Luxury Overwater Pool Villa`)
  - `departureCity`: (e.g. `Islamabad / Lahore / Karachi`)
  - `season`: (e.g. `Dry Season (November – April)`)
  - `checkedDate`: (e.g. `November 2026`)

---

## 📸 5. How to Replace Images

All images are hosted locally inside the public directory to eliminate third-party hotlinking failures:
```text
public/images/
  ├── hero/          (Homepage cross-fade slider photos)
  ├── destinations/  (Primary destination featured cards & heroes)
  ├── attractions/   (Landmark and monument detail photographs)
  ├── packages/      (Tour package hero and card visuals)
  ├── blog/          (Travel guide featured images)
  └── gallery/       (High-resolution lightbox photography)
```

To replace an image:
1. Save your photograph (JPEG or WebP, recommended 1200px width, under 300KB) into the corresponding folder in `/public/images/`.
2. Update the filename in `src/data/destinations.ts`, `src/data/packages.ts`, or `src/data/blog.ts`.
3. Add the attribution, photographer name, source URL, and license in `/public/images/CREDITS.md`.

*The website includes a resilient `<SafeImage />` component with an elegant animated fallback to prevent broken layout states.*

---

## 📞 6. How to Update Contact Details

The entire business profile is centralized in one configuration file:
```text
src/data/site.ts
```

```ts
export const siteConfig: SiteConfig = {
  brandName: 'Wanderlux Travels',
  tagline: 'Journeys Crafted Beyond the Ordinary',
  canonicalUrl: 'https://wanderluxtravels.com',

  // Set to TRUE when real company details are available
  isContactConfigured: false, 
  
  email: 'REPLACE_WITH_REAL_EMAIL',
  phone: 'REPLACE_WITH_REAL_PHONE',
  whatsapp: 'REPLACE_WITH_REAL_WHATSAPP',
  address: 'REPLACE_WITH_VERIFIED_ADDRESS',
  businessHours: 'Monday – Saturday: 09:30 AM – 06:30 PM (PKT)',
  defaultDepartureCity: 'Islamabad / Lahore / Karachi',
  defaultNationality: 'Pakistani Passport Holder (Editable in site.ts)',
  
  currency: {
    code: 'USD',
    symbol: '$',
  },
  socials: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
  },
};
```

When you update `isContactConfigured: true` and insert your verified telephone, email, and office address, all header, footer, and contact desk banners automatically switch to active display mode.

---

## 📨 7. How to Connect a Real Enquiry Form Backend

The booking consultation forms (`src/components/ui/EnquiryForm.tsx`) use `react-hook-form` and `zod` with built-in client-side validation, honeypot spam traps, loading states, and demonstration notifications.

To wire this to a live backend service:

### Option A: Formspree
1. Create an endpoint at [Formspree.io](https://formspree.io/).
2. In `src/components/ui/EnquiryForm.tsx`, replace the simulated `setTimeout` in `onSubmit` with:
   ```ts
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(data)
   });
   ```

### Option B: Custom Node / Serverless API
Send `data` via POST to your API route (e.g. `/api/inquire`), which dispatches an email via Resend, SendGrid, or AWS SES.

---

## 📍 8. How to Configure Google Maps and WhatsApp

### WhatsApp Floating & Direct Buttons
1. In `src/data/site.ts`, set `isContactConfigured: true` and specify `whatsapp: '+923001234567'`.
2. The WhatsApp buttons throughout the site use standard international URI formatting: `https://wa.me/923001234567`.

### Google Maps
1. Obtain an Google Maps Embed API iframe or key from [Google Cloud Console](https://console.cloud.google.com/).
2. In `src/pages/Contact.tsx`, replace the location placeholder card with:
   ```tsx
   <iframe
     src="https://www.google.com/maps/embed?pb=YOUR_VERIFIED_EMBED_CODE"
     width="100%"
     height="320"
     style={{ border: 0 }}
     allowFullScreen
     loading="lazy"
     referrerPolicy="no-referrer-when-downgrade"
     className="rounded-3xl shadow-sm"
   />
   ```

---

## ☁️ 9. How to Deploy to Vercel or Netlify

### Deploying to Vercel
1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Log into [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import the repository.
4. Framework Preset: **Vite**
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

*Ensure a `vercel.json` rewrite rule is added if deploying with deep route refreshing:*
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Deploying to Netlify
1. Log into [Netlify](https://netlify.com/) and choose **"Import an existing project"**.
2. Build Command: `npm run build`
3. Publish Directory: `dist`
4. Add a `public/_redirects` file with the rule:
   ```text
   /*    /index.html   200
   ```
5. Click **Deploy Site**.

---

## 📋 Compliance & Fact Verification
- **Image Registry**: [`/public/images/CREDITS.md`](file:///c:/Users/Mabroor/Desktop/Travel%20agency/public/images/CREDITS.md)
- **Data & Fact Registry**: [`/public/DATA_SOURCES.md`](file:///c:/Users/Mabroor/Desktop/Travel%20agency/public/DATA_SOURCES.md)

---
© 2026 Wanderlux Travels. All rights reserved.
