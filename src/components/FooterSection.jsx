import React from 'react';
import { WaveFlourish, CornerFlourish } from './DecorativeSVGs';

export const FooterSection = ({
  endMessage = "We can't wait to celebrate with you!",
  groomName = "Usama Zafar",
  brideName = "Ayesha Arshad"
}) => {
  const monogram = `${groomName.charAt(0)} & ${brideName.charAt(0)}`;

  return (
    <footer className="py-16 text-center border-t border-[#8a1c2d]/25 relative bg-[#f2e9d9] overflow-hidden select-none">
      {/* Corner Filigrees */}
      <CornerFlourish className="absolute top-2 left-2 w-14 h-14 text-[#a5771d] opacity-20 pointer-events-none" />
      <CornerFlourish className="absolute top-2 right-2 w-14 h-14 text-[#a5771d] opacity-20 -scale-x-100 pointer-events-none" />

      <div className="max-w-lg mx-auto px-6">
        <WaveFlourish className="w-full text-[#a5771d] mb-6" />

        <p className="font-cinzel text-2xl sm:text-3xl md:text-4xl text-[#a5771d] leading-relaxed font-semibold mb-4">
          {endMessage}
        </p>

        {/* Monogram */}
        <p className="font-calligraphic text-3xl sm:text-4xl text-[#8a1c2d] my-4 font-bold">
          {monogram}
        </p>

        <WaveFlourish className="w-full text-[#a5771d] mt-6 rotate-180" />

        <p className="text-xs text-[#614d3a] mt-8 font-garamond italic">
          Usama Zafar & Ayesha Arshad Wedding Celebration · Royal Elegance
        </p>
      </div>
    </footer>
  );
};
