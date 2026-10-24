# DevLix — Digital Product & Software Development Agency

DevLix is a production-ready, single-page landing site for a high-end software development agency, engineered with React, Vite, Tailwind CSS, Bebas Neue display typography, and Inter UI/body typography.

Built with high visual fidelity to the brand design language:
- Continuous burnt-orange (`#A9430A`) outer frame surrounding a warm cream (`#FBF5EF`) canvas.
- Alternating saturated burnt-orange sections (Highlight panels, Development Process panel, Pricing cards, Active FAQ row, and Footer).
- Bebas Neue headline scale with fluid `clamp()` sizing and zero layout shift.
- Full section sequence: Header, Hero, Highlights, Team Photograph, Services (3+2 card grid), Process Timeline, Product Showcase, Pricing, Testimonials, FAQ Accordion, and Footer with oversized full-width wordmark.

---

## Getting Started

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Starts the local development server on `http://localhost:3000`.

### Production Build
```bash
npm run build
```
Compiles assets to the production-ready `dist/` directory.

### Preview Build
```bash
npm run preview
```
Spins up a local server to test the production build output.

---

## Content & Asset Customization

### 1. Editing Site Copy & Metadata
All text content, navigation links, services, pricing plans, testimonials, FAQs, and contact links are centralized in a single configuration file:
- **`src/data/siteContent.js`**

Where text in the initial reference was compressed or unreadable, editable placeholder copy is clearly documented with `// PLACEHOLDER – review before launch`. Simply update the strings in `siteContent.js` before going to production.

### 2. Replacing Placeholder Images
- **Collaboration Team Photo**:
  - Located at `/public/images/collaboration.jpg`.
  - Recommended aspect ratio: `16:7` (desktop) or `4:3` (mobile), warm orange/amber grade with centered face focus.
- **Product Showcase Graphics**:
  - Located in `src/sections/Products.jsx`.
  - Currently rendered using clean, scalable vector SVG line-art (Waveform, Radar, Topography).
  - Can be swapped with live product screenshots by replacing the graphic components with `<img>` tags pointing to assets in `/public/images/`.
- **Favicon**:
  - Located at `/public/favicon.svg`.

---

## Deploying to Vercel

1. Push this repository to GitHub or GitLab.
2. In the Vercel dashboard, click **"Add New Project"** and import the repository.
3. Configure project settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Click **Deploy**. Vercel will build and serve the static application globally on its high-speed Edge Network.
