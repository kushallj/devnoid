import React from 'react';
import { Github, Twitter, Linkedin, Dribbble, Mail, Phone, MapPin } from 'lucide-react';
import { siteContent } from '../data/siteContent.js';

const socialIcons = {
  GitHub: Github,
  Twitter: Twitter,
  LinkedIn: Linkedin,
  Dribbble: Dribbble,
};

export default function Footer() {
  const { footer, brand } = siteContent;
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="w-full bg-[#A9430A] text-white pt-16 sm:pt-20 pb-8 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 4-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-white/20">
          {/* Brand Column (spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-[2px] bg-white" />
              <span className="font-display text-3xl sm:text-4xl tracking-wide text-white">
                {brand.name}
              </span>
            </div>
            <p className="text-sm text-[#FBF5EF]/85 leading-relaxed max-w-sm">
              {footer.blurb}
            </p>
            <p className="text-xs text-[#FBF5EF]/60 italic">
              // PLACEHOLDER – review before launch
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {footer.socials.map((social) => {
                const Icon = socialIcons[social.name] || Github;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.label}
                    aria-disabled="true"
                    onClick={(e) => {
                      if (social.href === '#') e.preventDefault();
                    }}
                    className="w-9 h-9 rounded-[8px] bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Menu Column */}
          <div>
            <h4 className="font-display text-lg tracking-wider text-white uppercase mb-4">
              Menu
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FBF5EF]/85">
              {footer.columns.menu.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-display text-lg tracking-wider text-white uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FBF5EF]/85">
              {footer.columns.services.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-display text-lg tracking-wider text-white uppercase mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-[#FBF5EF]/85">
              {footer.columns.contact.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  {idx === 0 && <Mail className="w-4 h-4 shrink-0 text-white/70" />}
                  {idx === 1 && <Phone className="w-4 h-4 shrink-0 text-white/70" />}
                  {idx === 2 && <MapPin className="w-4 h-4 shrink-0 text-white/70" />}
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors break-all"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-[#FBF5EF]/60 italic">
              // PLACEHOLDER – contact info for review
            </p>
          </div>
        </div>

        {/* Giant DevLix Wordmark spanning width */}
        <div className="w-full select-none overflow-hidden text-center pt-8 pb-4">
          <p
            className="font-display uppercase tracking-tight text-white leading-[0.8] transition-transform duration-300"
            style={{
              fontSize: 'clamp(3.8rem, 23vw, 21rem)',
              margin: 0,
              padding: 0,
            }}
          >
            {footer.wordmark}
          </p>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#FBF5EF]/75">
          <p>&copy; {currentYear} {brand.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-white transition-colors">
              Back to Top &uarr;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
