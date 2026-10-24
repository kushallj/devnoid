import React, { useState } from 'react';
import { siteContent } from '../data/siteContent.js';

export default function CollaborationPhoto() {
  const { collaborationPhoto } = siteContent;
  const [hasError, setHasError] = useState(false);

  return (
    <section aria-label="Team Collaboration" className="py-6 sm:py-8 lg:py-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[20px] overflow-hidden bg-[#F5E6DA] border border-[#E5CDBB] shadow-md group">
          {/* Viewfinder corner brackets matching the reference photo */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-white/80 z-10 pointer-events-none" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-white/80 z-10 pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-white/80 z-10 pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-white/80 z-10 pointer-events-none" />

          {/* Warm sepia / orange overlay for tonal consistency */}
          <div className="absolute inset-0 bg-[#A9430A]/10 mix-blend-multiply pointer-events-none z-10" />

          {/* Team Photograph with proper aspect ratio and responsive crop */}
          {!hasError ? (
            <img
              src={collaborationPhoto.src}
              alt={collaborationPhoto.alt}
              onError={() => setHasError(true)}
              className="w-full h-auto aspect-4/3 sm:aspect-16/7 object-cover object-[center_35%] filter contrast-[1.05] sepia-[0.25] transition-transform duration-500 group-hover:scale-[1.02]"
              width="1200"
              height="525"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          ) : (
            /* Warm-toned CSS Fallback container per design guidelines */
            <div className="w-full aspect-4/3 sm:aspect-16/7 bg-gradient-to-br from-[#A9430A] to-[#84320A] flex flex-col items-center justify-center text-white p-8 text-center">
              <span className="font-display text-3xl sm:text-4xl uppercase tracking-wider mb-2">
                DevLix Engineering Squad
              </span>
              <p className="text-sm text-[#FBF5EF]/80 max-w-md">
                Replace with team photo · /public/images/collaboration.jpg
              </p>
            </div>
          )}

          {/* Subtle caption badge at bottom */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded bg-black/40 backdrop-blur-xs text-[11px] text-[#FBF5EF] tracking-wider uppercase">
            {collaborationPhoto.captionNote}
          </div>
        </div>
      </div>
    </section>
  );
}
