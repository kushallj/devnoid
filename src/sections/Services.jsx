import React from 'react';
import { siteContent } from '../data/siteContent.js';
import SectionHeading from '../components/SectionHeading.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import Button from '../components/Button.jsx';

export default function Services() {
  const { services } = siteContent;

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Intro Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <SectionHeading
            title={services.title}
            description={services.description}
            align="center"
          />

          {/* Outlined CTA beneath intro */}
          <div className="mt-6 flex justify-center">
            <Button
              href="#services-grid"
              variant="secondary"
              size="sm"
              className="uppercase tracking-wider text-xs"
            >
              {services.cta.label}
            </Button>
          </div>
        </div>

        {/* 3-column Grid on desktop with 5 cards: cards 4 and 5 on row 2 left-aligned */}
        <div
          id="services-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          {services.items.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
