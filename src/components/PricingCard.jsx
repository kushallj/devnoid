import React from 'react';
import { Check, Clock, Layers, Zap, ArrowUpRight } from 'lucide-react';
import Button from './Button.jsx';

export default function PricingCard({ plan }) {
  const isStarter = plan.id === 'starter';

  return (
    <div className="flex flex-col justify-between bg-[#A9430A] text-white rounded-[16px] p-7 sm:p-9 shadow-lg border border-white/15 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div>
        {/* Plan Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/20">
          <h3 className="font-display text-2xl sm:text-3xl tracking-wide uppercase text-white">
            {plan.name}
          </h3>
          <span className="text-xs uppercase tracking-wider px-2.5 py-1 rounded bg-white/15 text-[#FBF5EF] font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFA45B]" />
            {plan.badge}
          </span>
        </div>

        {/* Innovative Scope & Cadence Block (Replacing numeric dollar pricing) */}
        <div className="mt-6 mb-6 p-4 rounded-xl bg-black/20 border border-white/10">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#FFA45B]" />
              <span className="text-xs uppercase tracking-wider text-[#FBF5EF]/80 font-mono">
                {plan.cadenceLabel}
              </span>
            </div>
            <span className="font-display text-2xl sm:text-3xl text-white tracking-wide">
              {plan.cadence}
            </span>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs text-[#FBF5EF]/80 font-mono">
            <span>MODEL: {plan.model}</span>
            <span className="text-[#FFA45B]">CUSTOM SCOPE</span>
          </div>
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
          className="w-full text-center uppercase tracking-wider font-semibold group flex items-center justify-center gap-2"
        >
          <span>{plan.ctaText || 'Request Scope'}</span>
          <ArrowUpRight className="w-4 h-4 text-[#A9430A] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Button>
      </div>
    </div>
  );
}
