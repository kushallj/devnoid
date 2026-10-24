import React from 'react';
import { siteContent } from '../data/siteContent.js';

function ConcentricRingsGraphic() {
  return (
    <svg
      viewBox="0 0 160 160"
      className="w-24 h-24 sm:w-28 sm:h-28 text-[#FBF5EF] shrink-0"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <circle cx="80" cy="80" r="70" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
      <circle cx="80" cy="80" r="54" strokeWidth="1.2" opacity="0.8" />
      <circle cx="80" cy="80" r="38" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
      <circle cx="80" cy="80" r="22" strokeWidth="1.5" />
      <circle cx="80" cy="80" r="6" fill="currentColor" />
      {/* Dynamic orbital cross lines */}
      <line x1="10" y1="80" x2="150" y2="80" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.5" />
      <line x1="80" y1="10" x2="80" y2="150" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.5" />
      <circle cx="118" cy="80" r="3" fill="currentColor" />
      <circle cx="52" cy="52" r="2.5" fill="currentColor" />
      <circle cx="108" cy="108" r="2" fill="currentColor" />
    </svg>
  );
}

function OrbitalSphereGraphic() {
  return (
    <svg
      viewBox="0 0 160 160"
      className="w-24 h-24 sm:w-28 sm:h-28 text-[#FBF5EF] shrink-0"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <circle cx="80" cy="80" r="68" strokeWidth="1.2" opacity="0.85" />
      <ellipse cx="80" cy="80" rx="68" ry="26" strokeWidth="1" opacity="0.7" />
      <ellipse cx="80" cy="80" rx="26" ry="68" strokeWidth="1" opacity="0.7" />
      <line x1="80" y1="12" x2="80" y2="148" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
      <line x1="12" y1="80" x2="148" y2="80" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
      {/* Orbital nodes */}
      <circle cx="80" cy="80" r="4" fill="currentColor" />
      <circle cx="120" cy="65" r="3" fill="currentColor" />
      <circle cx="48" cy="98" r="3" fill="currentColor" />
      <circle cx="95" cy="130" r="2" fill="currentColor" />
      <circle cx="65" cy="30" r="2.5" fill="currentColor" />
    </svg>
  );
}

export default function Highlights() {
  const { highlights } = siteContent;

  return (
    <section
      aria-label="Key Highlights"
      className="py-6 sm:py-8 lg:py-10"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {highlights.map((panel, idx) => (
            <div
              key={panel.id || idx}
              className="bg-[#A9430A] text-[#FBF5EF] rounded-[16px] p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-center gap-6 shadow-md border border-white/10"
            >
              {panel.iconType === 'concentricRings' ? (
                <ConcentricRingsGraphic />
              ) : (
                <OrbitalSphereGraphic />
              )}
              <div className="text-center sm:text-left">
                <h3 className="font-display text-2xl sm:text-3xl tracking-wide uppercase text-white mb-2">
                  {panel.title}
                </h3>
                <p className="text-sm text-[#FBF5EF]/90 leading-relaxed max-w-sm">
                  {panel.description}
                </p>
                <p className="mt-2 text-xs text-[#FBF5EF]/60 italic">
                  // PLACEHOLDER – review before launch
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
