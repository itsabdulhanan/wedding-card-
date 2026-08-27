import React from 'react';
import { Sparkles } from 'lucide-react';
import { DecorativeDivider } from './DecorativeSVGs';

export const DressCodeSection = ({
  dressCodeWomen = "Elegant formal attire in pastel or jewel tones",
  dressCodeMen = "Suit or traditional formal wear"
}) => {
  return (
    <div className="max-w-2xl mx-auto text-center py-8">
      <Sparkles className="mx-auto text-[#a5771d] mb-3" size={28} />
      <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-[#a5771d] font-semibold tracking-wide mb-2">
        Dress Code
      </h2>
      <DecorativeDivider className="my-4" />

      {/* Dress Code Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto mt-6">
        {/* Women */}
        <div className="p-6 rounded-2xl bg-white/70 border border-[#a5771d]/25 shadow-sm backdrop-blur-sm transition-transform hover:-translate-y-1">
          <h3 className="font-cinzel text-lg font-bold text-[#a5771d] tracking-wide mb-2">
            Women
          </h3>
          <div className="w-10 h-[1px] bg-[#a5771d]/30 mx-auto mb-3" />
          <p className="text-[#614d3a] font-garamond italic text-base leading-relaxed">
            {dressCodeWomen}
          </p>
        </div>

        {/* Men */}
        <div className="p-6 rounded-2xl bg-white/70 border border-[#a5771d]/25 shadow-sm backdrop-blur-sm transition-transform hover:-translate-y-1">
          <h3 className="font-cinzel text-lg font-bold text-[#a5771d] tracking-wide mb-2">
            Men
          </h3>
          <div className="w-10 h-[1px] bg-[#a5771d]/30 mx-auto mb-3" />
          <p className="text-[#614d3a] font-garamond italic text-base leading-relaxed">
            {dressCodeMen}
          </p>
        </div>
      </div>
    </div>
  );
};
