import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteContent } from '../data/siteContent.js';
import Button from '../components/Button.jsx';

export default function Hero() {
  const { hero } = siteContent;

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative pt-12 pb-14 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24 border-b border-[#E5CDBB]/70"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Split: Left headline & copy, Right CTAs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12">
          {/* Left Block */}
          <div className="max-w-3xl">
            <h1
              id="hero-title"
              className="font-display headline-h1 text-[#A9430A] tracking-tight uppercase flex flex-col"
            >
              {hero.headline.map((line, idx) => (
                <span key={idx} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#6B5646] max-w-xl leading-relaxed">
              {hero.supportingText}
            </p>
          </div>

          {/* Right CTAs Block (stacks right-aligned or top-right as in reference) */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-3.5 shrink-0 pt-2 lg:pt-0">
            <Button
              href={hero.primaryCta.href}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-center uppercase tracking-wider font-semibold"
            >
              {hero.primaryCta.label}
            </Button>
            <Button
              href={hero.secondaryCta.href}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto text-center uppercase tracking-wider"
            >
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
