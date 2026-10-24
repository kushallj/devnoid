import React, { useState } from 'react';
import { Plus, Minus, ChevronDown } from 'lucide-react';

export default function FAQAccordion({ items }) {
  // First item open by default as in reference
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="w-full max-w-[760px] mx-auto space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const panelId = `faq-panel-${idx}`;
        const headerId = `faq-header-${idx}`;

        return (
          <div
            key={item.id || idx}
            className={`rounded-[10px] overflow-hidden transition-all duration-200 border ${
              isOpen
                ? 'bg-[#A9430A] text-white border-[#A9430A] shadow-md'
                : 'bg-white text-[#33251D] border-[#E5CDBB] hover:border-[#A9430A]/50'
            }`}
          >
            <h3>
              <button
                id={headerId}
                type="button"
                className={`w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer transition-colors focus-visible:outline-2 ${
                  isOpen ? 'focus-visible:outline-white' : 'focus-visible:outline-[#A9430A]'
                }`}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(idx)}
              >
                <span className="font-medium text-base sm:text-lg leading-snug">
                  {item.question}
                </span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen
                      ? 'bg-white/20 text-white rotate-180'
                      : 'bg-[#F5E6DA] text-[#A9430A]'
                  }`}
                  aria-hidden="true"
                >
                  {isOpen ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </span>
              </button>
            </h3>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={headerId}
                className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base leading-relaxed animate-in fade-in duration-200"
              >
                <div
                  className={`border-t pt-4 ${
                    isOpen ? 'border-white/20 text-[#FBF5EF]' : 'border-[#E5CDBB] text-[#6B5646]'
                  }`}
                >
                  {item.answer}
                  <p className="mt-3 text-xs italic opacity-75">
                    // PLACEHOLDER – review before launch
                  </p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
