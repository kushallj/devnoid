import React from 'react';

export default function SectionHeading({
  title,
  description,
  align = 'center',
  theme = 'dark',
  className = '',
  eyebrow,
}) {
  const isCenter = align === 'center';
  const isLight = theme === 'light';

  return (
    <div
      className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {eyebrow && (
        <p
          className={`text-xs font-semibold tracking-wider uppercase mb-2 ${
            isLight ? 'text-white/80' : 'text-[#A9430A]'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display headline-h2 tracking-wide uppercase ${
          isLight ? 'text-white' : 'text-[#A9430A]'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed max-w-2xl ${
            isCenter ? 'mx-auto' : ''
          } ${isLight ? 'text-[#FBF5EF]/90' : 'text-[#6B5646]'}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
