import React from 'react';
import { Bus, Hotel, Gift } from 'lucide-react';
import { DecorativeDivider } from './DecorativeSVGs';

export const TravelAccomSection = ({
  transportation = "Complimentary transportation assistance is available upon request for our guests."
}) => {
  return (
    <div className="max-w-2xl mx-auto py-8">
      {/* Transportation */}
      {transportation && (
        <div className="text-center">
          <Bus className="mx-auto text-[#a5771d] mb-3" size={28} />
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-[#a5771d] font-semibold tracking-wide mb-2">
            Transportation
          </h2>
          <DecorativeDivider className="my-4" />
          <p className="text-[#614d3a] font-garamond italic text-base sm:text-lg max-w-md mx-auto leading-relaxed">
            {transportation}
          </p>
        </div>
      )}
    </div>
  );
};

export const GiftsSection = ({
  giftMessage = "Your love, blessings, and presence are the greatest gifts we could ever ask for."
}) => {
  return (
    <div className="max-w-xl mx-auto text-center py-8">
      <Gift className="mx-auto text-[#a5771d] mb-3" size={28} />
      <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-[#a5771d] font-semibold tracking-wide mb-2">
        Gifts
      </h2>
      <DecorativeDivider className="my-4" />
      <p className="text-[#614d3a] font-garamond italic text-lg sm:text-xl leading-relaxed">
        "{giftMessage}"
      </p>
    </div>
  );
};
