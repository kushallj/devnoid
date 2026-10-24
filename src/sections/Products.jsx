import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteContent } from '../data/siteContent.js';

function IntegromatWorkflowGraphic() {
  return (
    <svg
      viewBox="0 0 240 180"
      className="w-full h-full text-[#A9430A]"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <rect width="240" height="180" fill="#F5E6DA" />

      {/* Grid dots background */}
      <pattern id="dotPattern" width="16" height="16" patternUnits="userSpaceOnUse">
        <circle cx="8" cy="8" r="0.8" fill="#A9430A" fillOpacity="0.18" />
      </pattern>
      <rect width="240" height="180" fill="url(#dotPattern)" />

      {/* Curved connector pipelines connecting Integromat / Make modules */}
      {/* Node 1 to Router */}
      <path
        d="M 44 90 C 65 90, 75 90, 96 90"
        stroke="#A9430A"
        strokeWidth="2"
        strokeDasharray="4 3"
      />
      {/* Router to Top Branch (Database / Webhook) */}
      <path
        d="M 116 90 C 135 90, 145 48, 184 48"
        stroke="#A9430A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Router to Middle Branch (AI Agent / Transform) */}
      <path
        d="M 116 90 C 140 90, 155 90, 184 90"
        stroke="#A9430A"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Router to Bottom Branch (API / Notification) */}
      <path
        d="M 116 90 C 135 90, 145 132, 184 132"
        stroke="#A9430A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Filter diamonds on connection branches */}
      <g transform="translate(142, 64) rotate(45)">
        <rect x="-4" y="-4" width="8" height="8" fill="#FFFFFF" stroke="#A9430A" strokeWidth="1" />
      </g>
      <g transform="translate(142, 116) rotate(45)">
        <rect x="-4" y="-4" width="8" height="8" fill="#FFFFFF" stroke="#A9430A" strokeWidth="1" />
      </g>

      {/* Flow data packets */}
      <circle cx="70" cy="90" r="2.5" fill="#A9430A" />
      <circle cx="150" cy="90" r="2.5" fill="#A9430A" />
      <circle cx="160" cy="54" r="2.5" fill="#A9430A" />
      <circle cx="160" cy="126" r="2.5" fill="#A9430A" />

      {/* Module 1: Trigger / Webhook (Integromat circular module) */}
      <g transform="translate(34, 90)">
        <circle cx="0" cy="0" r="18" fill="#FFFFFF" stroke="#A9430A" strokeWidth="1.8" />
        <circle cx="0" cy="0" r="24" stroke="#A9430A" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
        {/* Trigger lightning / play icon */}
        <path d="M -2 -7 L 4 -1 L -1 0 L 1 7 L -4 1 L 0 0 Z" fill="#A9430A" />
        <rect x="-14" y="22" width="28" height="8" rx="2" fill="#A9430A" />
        <text x="0" y="28" fill="#FFFFFF" fontSize="5" fontFamily="monospace" textAnchor="middle">WATCH</text>
      </g>

      {/* Module 2: Router Hub */}
      <g transform="translate(106, 90)">
        <circle cx="0" cy="0" r="16" fill="#A9430A" stroke="#FFFFFF" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="4" fill="#FFFFFF" />
        <path d="M -6 0 L 6 0 M 3 -4 L 7 0 L 3 4" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
        <rect x="-16" y="20" width="32" height="8" rx="2" fill="#A9430A" opacity="0.9" />
        <text x="0" y="26" fill="#FFFFFF" fontSize="5" fontFamily="monospace" textAnchor="middle">ROUTER</text>
      </g>

      {/* Module 3: Top Endpoint (Database / Cloud) */}
      <g transform="translate(198, 48)">
        <circle cx="0" cy="0" r="15" fill="#FFFFFF" stroke="#A9430A" strokeWidth="1.6" />
        <ellipse cx="0" cy="-4" rx="6" ry="2" fill="#A9430A" fillOpacity="0.2" stroke="#A9430A" strokeWidth="1" />
        <path d="M -6 -4 L -6 4 C -6 6, 6 6, 6 4 L 6 -4" stroke="#A9430A" strokeWidth="1" fill="none" />
        <text x="0" y="23" fill="#A9430A" fontSize="5" fontFamily="monospace" textAnchor="middle">SQL DB</text>
      </g>

      {/* Module 4: Middle Endpoint (AI Agent LLM node) */}
      <g transform="translate(198, 90)">
        <circle cx="0" cy="0" r="15" fill="#FFFFFF" stroke="#A9430A" strokeWidth="1.6" />
        <circle cx="0" cy="0" r="4" fill="#A9430A" />
        <circle cx="-5" cy="-5" r="1.5" fill="#A9430A" />
        <circle cx="5" cy="-5" r="1.5" fill="#A9430A" />
        <circle cx="5" cy="5" r="1.5" fill="#A9430A" />
        <line x1="0" y1="0" x2="-5" y2="-5" stroke="#A9430A" strokeWidth="0.8" />
        <line x1="0" y1="0" x2="5" y2="-5" stroke="#A9430A" strokeWidth="0.8" />
        <line x1="0" y1="0" x2="5" y2="5" stroke="#A9430A" strokeWidth="0.8" />
        <text x="0" y="23" fill="#A9430A" fontSize="5" fontFamily="monospace" textAnchor="middle">AI AGENT</text>
      </g>

      {/* Module 5: Bottom Endpoint (API / Dispatch) */}
      <g transform="translate(198, 132)">
        <circle cx="0" cy="0" r="15" fill="#FFFFFF" stroke="#A9430A" strokeWidth="1.6" />
        <rect x="-6" y="-4" width="12" height="8" rx="1" fill="#A9430A" fillOpacity="0.2" stroke="#A9430A" strokeWidth="1" />
        <path d="M -6 -4 L 0 1 L 6 -4" stroke="#A9430A" strokeWidth="1" fill="none" />
        <text x="0" y="23" fill="#A9430A" fontSize="5" fontFamily="monospace" textAnchor="middle">DISPATCH</text>
      </g>

      {/* Status indicator badge */}
      <rect x="14" y="14" width="58" height="14" rx="3" fill="#FFFFFF" stroke="#A9430A" strokeWidth="0.8" opacity="0.95" />
      <circle cx="21" cy="21" r="2" fill="#22C55E" />
      <text x="27" y="24" fill="#A9430A" fontSize="6" fontFamily="monospace" fontWeight="bold">FLOW ACTIVE</text>
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
    workflow: IntegromatWorkflowGraphic,
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
            const Graphic = graphicMap[item.graphicType] || IntegromatWorkflowGraphic;
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
