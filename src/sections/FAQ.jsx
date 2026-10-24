import React from 'react';
import { siteContent } from '../data/siteContent.js';
import SectionHeading from '../components/SectionHeading.jsx';
import FAQAccordion from '../components/FAQAccordion.jsx';

export default function FAQ() {
  const { faq } = siteContent;

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="py-16 sm:py-20 lg:py-24 border-t border-[#E5CDBB]/70"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <SectionHeading
            title={faq.title}
            description="Everything you need to know about our sprints, technical stack, architecture, and working model."
            align="center"
          />
        </div>

        {/* Accordion component with 1st row open by default */}
        <FAQAccordion items={faq.items} />
      </div>
    </section>
  );
}
