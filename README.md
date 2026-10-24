# Devnoid — Digital Product & AI Systems Development Agency

Devnoid is a production-ready, single-page landing site for a software and autonomous AI engineering agency, built with React, Vite, Tailwind CSS, Bebas Neue display typography, and Inter UI/body typography.

Built with high visual fidelity:
- Continuous burnt-orange (`#A9430A`) outer frame surrounding a warm cream (`#FBF5EF`) canvas.
- Alternating saturated burnt-orange sections (Highlight panels, Development Process panel, Engagement Plans, Active FAQ row, and Footer).
- Futuristic technological neural architecture core visual (no human figures, pure technological geometry).
- Bebas Neue headline scale with fluid `clamp()` sizing and zero layout shift.
- Full section sequence: Header, Hero, Highlights, Futuristic Architecture Matrix, Services (6-card grid including AI Agents), Process Timeline, Product Showcase, Engagement Plans, Testimonials, FAQ Accordion, and Footer with oversized full-width Devnoid wordmark.

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
All text content, navigation links, services, engagement plans, testimonials, FAQs, and contact links are centralized in:
- **`src/data/siteContent.js`**

Where text is editable for your specific offerings, placeholder copy is documented with `// PLACEHOLDER – review before launch`.

### 2. Services Grid
The services grid includes 6 core capabilities:
1. Web Development
2. Mobile App Development
3. SaaS Product Development
4. Custom Software Solutions
5. Backend & API Development
6. AI Agents (Autonomous agent architectures & multi-agent orchestration)

### 3. Engagement Plans (Innovative Delivery Models)
Dollar pricing has been replaced with delivery cadence and scope models:
- **Starter Plan**: Rapid MVP Sprint (2–3 weeks turnaround, milestone-driven delivery, custom scope).
- **Growth Plan**: Dedicated Pod (Continuous sprint cadence, full-cycle squad, distributed architecture).

---

## Deploying to Vercel

1. Push this repository to GitHub or GitLab (`github.com/kushallj/devnoid`).
2. In the Vercel dashboard, click **"Add New Project"** and import the repository.
3. Configure project settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Click **Deploy**.
