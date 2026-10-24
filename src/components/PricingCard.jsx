import React from 'react';
import { Check } from 'lucide-react';
import Button from './Button.jsx';

export default function PricingCard({ plan }) {
  return (
    <div className="flex flex-col justify-between bg-[#A9430A] text-white rounded-[16px] p-7 sm:p-9 shadow-lg border border-white/15 transition-transform duration-200 hover:-translate-y-1">
      <div>
        {/* Plan Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/20">
          <h3 className="font-display text-2xl sm:text-3xl tracking-wide uppercase text-white">
            {plan.name}
          </h3>
          <span className="text-xs uppercase tracking-wider px-2 py-0.5 rounded bg-white/15 text-[#FBF5EF] font-medium">
            Sprint Delivery
          </span>
        </div>

        {/* Price in Bebas Neue */}
        <div className="mt-6 mb-3 flex items-baseline gap-1">
          <span className="font-display text-5xl sm:text-6xl tracking-tight text-white">
            {plan.price}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-[#FBF5EF]/90 leading-relaxed mb-6">
          {plan.description}
        </p>

        {/* Divider */}
        <div className="h-px w-full bg-white/20 mb-6" />

        {/* Feature List */}
        <div className="space-y-3.5 mb-8">
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3 text-sm text-[#FBF5EF]">
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-white stroke-[2.5]" aria-hidden="true" />
              </div>
              <span className="leading-snug">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Full width white button at bottom */}
      <div className="mt-auto pt-4">
        <Button
          href="#contact"
          variant="white"
          size="lg"
          className="w-full text-center uppercase tracking-wider font-semibold"
        >
          {plan.ctaText || 'Get Started'}
        </Button>
      </div>
    </div>
  );
}
