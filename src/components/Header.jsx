import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteContent } from '../data/siteContent.js';
import Button from './Button.jsx';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navigation, brand } = siteContent;

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#A9430A] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      <header className="relative w-full bg-[#FBF5EF] border-b border-[#E5CDBB] z-30 transition-colors">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-6">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#hero"
            className="flex items-center gap-2 group text-decoration-none focus-visible:rounded"
            aria-label={`${brand.name} Home`}
          >
            <span className="w-3 h-3 rounded-[2px] bg-[#A9430A] transition-transform duration-200 group-hover:scale-110" />
            <span className="font-display text-3xl sm:text-4xl tracking-wide text-[#A9430A] leading-none pt-0.5">
              {brand.name}
            </span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#33251D]"
            aria-label="Main Navigation"
          >
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#6B5646] hover:text-[#A9430A] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#A9430A] hover:after:w-full after:transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: CTA Action & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <Button
              href="#pricing"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex text-xs uppercase tracking-wider"
            >
              Start Project
            </Button>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-[#33251D] hover:text-[#A9430A] hover:bg-[#F5E6DA] focus-visible:ring-2 focus-visible:ring-[#A9430A] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="md:hidden border-b border-[#E5CDBB] bg-[#FBF5EF] px-5 pt-4 pb-8 shadow-xl transition-all"
          >
            <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-md text-base font-medium text-[#33251D] hover:text-[#A9430A] hover:bg-[#F5E6DA] transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-[#E5CDBB]/70 flex flex-col gap-2">
                <Button
                  href="#pricing"
                  variant="primary"
                  className="w-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Start Your Project
                </Button>
                <Button
                  href="#process"
                  variant="secondary"
                  className="w-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Plan The Work
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
