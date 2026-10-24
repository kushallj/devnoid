import React from 'react';
import { siteContent } from '../data/siteContent.js';

export default function Process() {
  const { process } = siteContent;

  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large burnt orange container */}
        <div className="bg-[#A9430A] text-white rounded-[20px] p-8 sm:p-12 lg:p-16 shadow-xl border border-white/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Heading and copy */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <span className="text-xs font-semibold uppercase tracking-widest text-white/80 block mb-2">
                Our Methodology
              </span>
              <h2
                id="process-title"
                className="font-display headline-h2 tracking-tight text-white uppercase"
              >
                {process.title}
              </h2>
              <p className="mt-5 text-base sm:text-lg text-[#FBF5EF]/90 leading-relaxed">
                {process.description}
              </p>
              <p className="mt-3 text-xs text-[#FBF5EF]/60 italic">
                // PLACEHOLDER – review before launch
              </p>
            </div>

            {/* Right Column: Stacked timeline blocks */}
            <div className="lg:col-span-7 relative">
              {/* Vertical connecting line */}
              <div
                className="absolute left-3.5 top-6 bottom-6 w-0.5 bg-white/30 hidden sm:block pointer-events-none"
                aria-hidden="true"
              />

              <div className="space-y-5 sm:space-y-6">
                {process.steps.map((item, idx) => (
                  <div
                    key={item.step}
                    className="relative flex items-start gap-4 sm:gap-6 group"
                  >
                    {/* Node Dot on connector */}
                    <div
                      className="hidden sm:flex w-7 h-7 rounded-full bg-white text-[#A9430A] font-display text-xs items-center justify-center shrink-0 mt-3.5 shadow-sm ring-4 ring-[#A9430A] z-10 transition-transform duration-200 group-hover:scale-110"
                      aria-hidden="true"
                    >
                      {item.step}
                    </div>

                    {/* Translucent Step Card */}
                    <div className="flex-1 bg-white/10 hover:bg-white/15 border border-white/15 rounded-[12px] p-5 sm:p-6 transition-all duration-200 group-hover:border-white/30">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="sm:hidden font-display text-sm tracking-wider text-white/80">
                          {item.step}.
                        </span>
                        <h3 className="font-display text-2xl sm:text-3xl tracking-wide text-white">
                          <span className="hidden sm:inline">{item.step}. </span>
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm text-[#FBF5EF]/90 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
