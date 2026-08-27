import React from 'react';
import { WaveFlourish, CornerFlourish } from './DecorativeSVGs';

export const FooterSection = ({
  endMessage,
  groomName = "Usama Zafar",
  brideName = "Ayesha Arshad",
  lang = 'en',
  t
}) => {
  const gName = lang === 'ur' ? (t?.groomName || "اسامہ ظفر") : groomName;
  const bName = lang === 'ur' ? (t?.brideName || "عائشہ ارشد") : brideName;
  const monogram = lang === 'ur' ? "اسامہ و عائشہ" : `${gName.charAt(0)} & ${bName.charAt(0)}`;
  const message = lang === 'ur' ? (t?.footerEndMessage || "ہم آپ کی پُرتپاک شرکت کے منتظر ہیں!") : (endMessage || "We can't wait to celebrate with you!");

  return (
    <footer className="py-16 text-center border-t border-[#8a1c2d]/25 relative bg-[#f2e9d9] overflow-hidden select-none">
      {/* Corner Filigrees */}
      <CornerFlourish className="absolute top-2 left-2 w-14 h-14 text-[#a5771d] opacity-20 pointer-events-none" />
      <CornerFlourish className="absolute top-2 right-2 w-14 h-14 text-[#a5771d] opacity-20 -scale-x-100 pointer-events-none" />

      <div className="max-w-lg mx-auto px-6">
        <WaveFlourish className="w-full text-[#a5771d] mb-6" />

        <p className={`text-2xl sm:text-3xl md:text-4xl text-[#a5771d] leading-relaxed font-semibold mb-4 ${lang === 'ur' ? 'font-urdu' : 'font-cinzel'}`}>
          {message}
        </p>

        {/* Monogram */}
        <p className={`text-3xl sm:text-4xl text-[#8a1c2d] my-4 font-bold ${lang === 'ur' ? 'font-urdu' : 'font-calligraphic'}`}>
          {monogram}
        </p>

        <WaveFlourish className="w-full text-[#a5771d] mt-6 rotate-180" />

        <p className={`text-xs text-[#614d3a] mt-8 ${lang === 'ur' ? 'font-urdu' : 'font-garamond italic'}`}>
          {t?.footerCelebration || "Usama Zafar & Ayesha Arshad Wedding Celebration · Royal Elegance"}
        </p>
      </div>
    </footer>
  );
};
