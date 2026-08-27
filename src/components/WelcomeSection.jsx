import React from 'react';

export const WelcomeSection = ({ welcomeMessage, lang = 'en', t }) => {
  const defaultText =
    "With hearts full of love and joy, we warmly invite you to share in the celebration of our union. Your presence would mean the world to us as we begin this beautiful journey together.";

  const textToDisplay = lang === 'ur' ? (t?.welcomeText || welcomeMessage) : (welcomeMessage || defaultText);

  return (
    <section
      className="relative px-6 py-20 md:py-28 overflow-hidden select-none"
      style={{
        background:
          'linear-gradient(to bottom, #2E0E09 0%, #5A2A1E 45%, #C6B49A 78%, #F2E9D9 100%)'
      }}
    >
      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Top Gold Divider */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[#d4af37]" />
          <svg className="w-3.5 h-3.5 text-[#d4af37]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
          <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-[#d4af37]" />
        </div>

        {/* Welcome Text */}
        <p
          className={`text-2xl sm:text-3xl md:text-4xl leading-relaxed text-[#f7ecd5] tracking-wide px-4 ${
            lang === 'ur' ? 'font-urdu leading-[2.2]' : 'font-calligraphic sm:text-4xl md:text-5xl italic font-normal'
          }`}
          style={{
            textShadow: '0 2px 16px rgba(0,0,0,0.6)',
            lineHeight: lang === 'ur' ? '2.2' : '1.8'
          }}
        >
          "{textToDisplay}"
        </p>

        {/* Bottom Velvet Divider */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[#8a1c2d]" />
          <svg className="w-3.5 h-3.5 text-[#8a1c2d]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-[#8a1c2d]" />
        </div>
      </div>
    </section>
  );
};
