import React from 'react';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="flex flex-col justify-between bg-[#F5E6DA]/70 border border-[#E5CDBB] rounded-[12px] p-6 sm:p-7 transition-all duration-200 hover:border-[#A9430A]/60 hover:bg-[#F5E6DA]">
      {/* Quote */}
      <p className="text-sm sm:text-base text-[#33251D] leading-relaxed italic mb-6">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Attribution with avatar */}
      <div className="flex items-center gap-3 pt-4 border-t border-[#E5CDBB]/60 mt-auto">
        <div
          className="w-10 h-10 rounded-full bg-[#A9430A] text-[#FBF5EF] flex items-center justify-center font-display text-base tracking-wider shrink-0 shadow-xs"
          aria-hidden="true"
        >
          {testimonial.initials}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-[#33251D] truncate">
            {testimonial.name}
          </p>
          <p className="text-xs text-[#6B5646] truncate">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}
