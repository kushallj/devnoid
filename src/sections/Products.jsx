import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteContent } from '../data/siteContent.js';

function WaveformGraphic() {
  return (
    <svg
      viewBox="0 0 240 180"
      className="w-full h-full text-[#A9430A]"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <rect width="240" height="180" fill="#F5E6DA" />
      {/* Dynamic Sound Waveform bars */}
      {[
        15, 25, 45, 75, 110, 140, 85, 40, 60, 95, 130, 160, 120, 80, 50, 30,
        70, 115, 150, 100, 60, 35, 20
      ].map((height, i) => {
        const x = 20 + i * 9;
        const y1 = 90 - height / 2;
        const y2 = 90 + height / 2;
        return (
          <line
            key={i}
            x1={x}
            y1={y1}
            x2={x}
            y2={y2}
            strokeWidth="3.2"
            strokeLinecap="round"
            opacity={0.35 + (height / 160) * 0.65}
          />
        );
      })}
    </svg>
  );
}

function RadarGraphic() {
  return (
    <svg
      viewBox="0 0 240 180"
      className="w-full h-full text-[#A9430A]"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <rect width="240" height="180" fill="#F5E6DA" />
      {/* Concentric radar rings */}
      <circle cx="120" cy="120" r="100" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      <circle cx="120" cy="120" r="75" strokeWidth="1.2" opacity="0.6" />
      <circle cx="120" cy="120" r="50" strokeWidth="1.2" opacity="0.8" />
      <circle cx="120" cy="120" r="25" strokeWidth="1.5" />
      <circle cx="120" cy="120" r="4" fill="currentColor" />
      {/* Scan angles */}
      <line x1="20" y1="120" x2="220" y2="120" strokeWidth="0.8" opacity="0.5" />
      <line x1="120" y1="20" x2="120" y2="120" strokeWidth="0.8" opacity="0.5" />
      <line x1="120" y1="120" x2="190" y2="50" strokeWidth="1.5" opacity="0.85" />
      <circle cx="165" cy="75" r="3" fill="currentColor" />
      <circle cx="95" cy="85" r="2.5" fill="currentColor" />
    </svg>
  );
}

function TopographyGraphic() {
  return (
    <svg
      viewBox="0 0 240 180"
      className="w-full h-full text-[#A9430A]"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <rect width="240" height="180" fill="#F5E6DA" />
      {/* Topographic 3D perspective lines */}
      {[25, 45, 65, 85, 105, 125, 145].map((y, i) => (
        <path
          key={i}
          d={`M15 ${y + 15} Q 60 ${y - 12 + (i % 2) * 8}, 120 ${y + 5} T 225 ${y + 10}`}
          strokeWidth="1.2"
          opacity={0.3 + (i / 7) * 0.7}
        />
      ))}
      {/* Cross grid lines */}
      <line x1="60" y1="25" x2="40" y2="160" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.4" />
      <line x1="120" y1="20" x2="120" y2="160" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
      <line x1="180" y1="25" x2="200" y2="160" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.4" />
    </svg>
  );
}

export default function Products() {
  const { products } = siteContent;

  const graphicMap = {
    waveform: WaveformGraphic,
    radar: RadarGraphic,
    topography: TopographyGraphic,
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="py-16 sm:py-20 lg:py-24 border-t border-[#E5CDBB]/70"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with title on left and link on right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A9430A] block mb-2">
              Portfolio
            </span>
            <h2
              id="projects-title"
              className="font-display headline-h2 tracking-tight text-[#A9430A] uppercase"
            >
              {products.title}
            </h2>
            <p className="mt-3 text-base text-[#6B5646] max-w-xl">
              {products.description}
            </p>
          </div>

          <a
            href={products.link.href}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#A9430A] hover:text-[#84320A] transition-colors group shrink-0"
          >
            <span>{products.link.label}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* 3 product tiles side by side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {products.items.map((item) => {
            const Graphic = graphicMap[item.graphicType] || WaveformGraphic;
            return (
              <div
                key={item.id}
                className="group flex flex-col bg-white border border-[#E5CDBB] rounded-[16px] overflow-hidden transition-all duration-200 hover:border-[#A9430A] hover:shadow-md"
              >
                {/* 4:3 Visual Tile */}
                <div className="relative aspect-4/3 overflow-hidden bg-[#F5E6DA] border-b border-[#E5CDBB] flex items-center justify-center">
                  <Graphic />
                  <div className="absolute inset-0 bg-transparent group-hover:bg-[#A9430A]/5 transition-colors" />
                </div>

                {/* Caption / Metadata below visual */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-display text-2xl tracking-wide text-[#33251D] group-hover:text-[#A9430A] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#6B5646] mt-1 font-medium">
                      {item.category}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#E5CDBB]/50 flex items-center justify-between text-xs text-[#6B5646]">
                    <span>// PLACEHOLDER product</span>
                    <span className="font-medium text-[#A9430A]">Explore &rarr;</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
