import React from 'react';
import Header from './components/Header.jsx';
import Hero from './sections/Hero.jsx';
import Highlights from './sections/Highlights.jsx';
import CollaborationPhoto from './sections/CollaborationPhoto.jsx';
import Services from './sections/Services.jsx';
import Process from './sections/Process.jsx';
import Products from './sections/Products.jsx';
import Pricing from './sections/Pricing.jsx';
import Testimonials from './sections/Testimonials.jsx';
import FAQ from './sections/FAQ.jsx';
import Footer from './components/Footer.jsx';

/**
 * Devnoid Landing Page
 * Full section sequence matching reference visual source of truth:
 * 1. Header / navigation
 * 2. Hero (headline, supporting copy, CTAs)
 * 3. Two orange highlight panels
 * 4. Futuristic neural architecture showcase
 * 5. Services intro + service card grid (6 cards including AI Agents)
 * 6. Development process (large orange panel with timeline)
 * 7. Product showcase (3 line-art tiles)
 * 8. Flexible engagement plans (innovative delivery models)
 * 9. Testimonials (6 cards)
 * 10. FAQ accordion (5 rows, first open by default)
 * 11. Footer with oversized Devnoid wordmark
 */
export default function App() {
  return (
    /* Continuous burnt-orange outer frame at all breakpoints */
    <div className="min-h-screen w-full bg-[#A9430A] p-2 sm:p-3 lg:p-4">
      {/* Inner cream canvas */}
      <div className="w-full bg-[#FBF5EF] rounded-[6px] sm:rounded-[10px] overflow-hidden shadow-2xl flex flex-col border border-[#A9430A]/20">
        {/* 1. Header / navigation */}
        <Header />

        {/* Semantic main content wrapper */}
        <main id="main-content" className="flex-1 w-full focus:outline-none">
          {/* 2. Hero */}
          <Hero />

          {/* 3. Two orange highlight panels */}
          <Highlights />

          {/* 4. Wide collaboration photograph */}
          <CollaborationPhoto />

          {/* 5. Services intro + card grid */}
          <Services />

          {/* 6. Development process */}
          <Process />

          {/* 7. Product showcase */}
          <Products />

          {/* 8. Pricing */}
          <Pricing />

          {/* 9. Testimonials */}
          <Testimonials />

          {/* 10. FAQ accordion */}
          <FAQ />
        </main>

        {/* 11. Footer with oversized wordmark */}
        <Footer />
      </div>
    </div>
  );
}
