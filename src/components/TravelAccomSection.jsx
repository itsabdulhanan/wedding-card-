import React from 'react';
import { Bus, Hotel, Gift } from 'lucide-react';
import { DecorativeDivider } from './DecorativeSVGs';

export const TravelAccomSection = ({
  transportation,
  lang = 'en',
  t
}) => {
  const transText = lang === 'ur' ? (t?.transportation || transportation) : (transportation || "Complimentary transportation assistance is available upon request for out-of-station guests.");

  return (
    <div className="max-w-2xl mx-auto py-8">
      {/* Transportation */}
      <div className="text-center">
        <Bus className="mx-auto text-[#a5771d] mb-3" size={28} />
        <h2 className={`text-3xl sm:text-4xl md:text-5xl text-[#a5771d] font-semibold tracking-wide mb-2 ${lang === 'ur' ? 'font-urdu' : 'font-cinzel'}`}>
          {t?.transportationTitle || "Transportation"}
        </h2>
        <DecorativeDivider className="my-4" />
        <p className={`text-[#614d3a] text-base sm:text-lg max-w-md mx-auto leading-relaxed ${lang === 'ur' ? 'font-urdu' : 'font-garamond italic'}`}>
          {transText}
        </p>
      </div>
    </div>
  );
};

export const GiftsSection = ({
  giftMessage,
  lang = 'en',
  t
}) => {
  const gText = lang === 'ur' ? (t?.giftsText || giftMessage) : (giftMessage || "Your love, blessings, and presence are the greatest gifts we could ever ask for.");

  return (
    <div className="max-w-xl mx-auto text-center py-8">
      <Gift className="mx-auto text-[#a5771d] mb-3" size={28} />
      <h2 className={`text-3xl sm:text-4xl md:text-5xl text-[#a5771d] font-semibold tracking-wide mb-2 ${lang === 'ur' ? 'font-urdu' : 'font-cinzel'}`}>
        {t?.giftsTitle || "Gifts & Blessings"}
      </h2>
      <DecorativeDivider className="my-4" />
      <p className={`text-[#614d3a] text-lg sm:text-xl leading-relaxed ${lang === 'ur' ? 'font-urdu' : 'font-garamond italic'}`}>
        "{gText}"
      </p>
    </div>
  );
};
