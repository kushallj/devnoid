import React from 'react';
import {
  Code,
  Smartphone,
  Layers,
  Cpu,
  Database,
  ArrowUpRight,
} from 'lucide-react';

const iconMap = {
  code: Code,
  smartphone: Smartphone,
  layers: Layers,
  cpu: Cpu,
  database: Database,
};

export default function ServiceCard({ service }) {
  const IconComponent = iconMap[service.icon] || Code;

  return (
    <div className="group flex flex-col justify-between bg-white border border-[#E5CDBB] rounded-[12px] p-6 sm:p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#A9430A] hover:shadow-md">
      <div>
        {/* Top bar with orange icon and subtle arrow */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-[8px] bg-[#A9430A] flex items-center justify-center text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
            <IconComponent className="w-5 h-5 text-white" aria-hidden="true" />
          </div>
          <ArrowUpRight
            className="w-4 h-4 text-[#C9B5A6] group-hover:text-[#A9430A] transition-colors"
            aria-hidden="true"
          />
        </div>

        {/* Title */}
        <h3 className="font-display text-2xl sm:text-[28px] tracking-wide text-[#33251D] group-hover:text-[#A9430A] transition-colors mb-2.5">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#6B5646] leading-relaxed mb-6">
          {service.description}
        </p>
      </div>

      {/* Tag pills at the bottom */}
      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E5CDBB]/50 mt-auto">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block px-2.5 py-1 text-xs font-medium rounded-[4px] bg-[#F5E6DA] text-[#6B5646]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
