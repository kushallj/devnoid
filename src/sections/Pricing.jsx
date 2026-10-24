import React from 'react';
import { siteContent } from '../data/siteContent.js';
import SectionHeading from '../components/SectionHeading.jsx';
import PricingCard from '../components/PricingCard.jsx';

export default function Pricing() {
  const { plans } = siteContent;

  return (
    <section
      id="plans"
      aria-labelledby="plans-title"
      className="py-16 sm:py-20 lg:py-24 border-t border-[#E5CDBB]/70"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <SectionHeading
            title={plans.title}
            description={plans.description}
            align="center"
          />
        </div>

        {/* Exactly two equal-height burnt-orange plans side by side on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 max-w-4xl mx-auto items-stretch">
          {plans.items.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
