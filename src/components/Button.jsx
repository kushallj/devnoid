import React from 'react';

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  ariaLabel,
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none whitespace-nowrap shrink-0 disabled:opacity-50 disabled:pointer-events-none rounded-[8px] active:scale-[0.98]';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 min-h-[36px]',
    md: 'text-sm px-5 py-2.5 min-h-[44px]',
    lg: 'text-base px-6 py-3 min-h-[48px]',
  };

  const variantClasses = {
    primary:
      'bg-[#A9430A] text-white hover:bg-[#84320A] focus-visible:ring-2 focus-visible:ring-[#33251D] border border-transparent shadow-sm',
    secondary:
      'bg-transparent border border-[#A9430A] text-[#A9430A] hover:bg-[#A9430A] hover:text-white focus-visible:ring-2 focus-visible:ring-[#A9430A]',
    white:
      'bg-white text-[#A9430A] hover:bg-[#FBF5EF] hover:shadow-md focus-visible:ring-2 focus-visible:ring-white border border-transparent font-semibold shadow-sm',
    outlinedWhite:
      'bg-transparent border border-white/60 text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white',
    ghost:
      'bg-transparent text-[#33251D] hover:text-[#A9430A] hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-[#33251D]',
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${variantClasses[variant] || variantClasses.primary} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
}
