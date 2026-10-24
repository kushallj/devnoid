import React from 'react';
import { siteContent } from '../data/siteContent.js';
import SectionHeading from '../components/SectionHeading.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';

export default function Testimonials() {
  const { testimonials } = siteContent;

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="py-16 sm:py-20 lg:py-24 border-t border-[#E5CDBB]/70"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <SectionHeading
            title={testimonials.title}
            description="Real feedback from founder and engineering teams who scaled their digital platforms with DevLix."
            align="center"
          />
        </div>

        {/* 6 cards in 3 columns desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {testimonials.items.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
