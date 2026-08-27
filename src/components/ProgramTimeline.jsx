import React from 'react';
import { Clock } from 'lucide-react';
import { DecorativeDivider } from './DecorativeSVGs';

export const ProgramTimeline = ({ items = [] }) => {
  const defaultItems = [
    { name: "Mehndi Ceremony", dateTime: "2026-11-13T19:00", description: "Traditional henna, vibrant celebrations & folk songs" },
    { name: "The Sacred Nikkah", dateTime: "2026-11-14T17:00", description: "Solemnization of marriage, vows & heartfelt prayers" },
    { name: "Walima Reception Welcome", dateTime: "2026-11-15T12:00", description: "12:00 PM – 4:00 PM: Guest arrival & photography at Qasar-e-Noor" },
    { name: "Grand Royal Feast", dateTime: "2026-11-15T13:30", description: "Royal lunch feast & celebratory greetings at Qasar-e-Noor" }
  ];

  const programList = items && items.length > 0 ? items : defaultItems;

  const formatTime = (isoString) => {
    try {
      const d = new Date(isoString);
      if (isNaN(d.getTime())) return isoString;
      return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    } catch {
      return isoString;
    }
  };

  return (
    <div className="max-w-xl mx-auto py-8">
      <div className="text-center mb-8">
        <Clock className="mx-auto text-[#a5771d] mb-3" size={28} />
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-[#a5771d] font-semibold tracking-wide mb-2">
          Program Timeline
        </h2>
        <DecorativeDivider className="my-4" />
      </div>

      {/* Timeline items */}
      <div className="space-y-6 relative pl-4 sm:pl-8">
        {programList.map((item, idx) => {
          const time = formatTime(item.dateTime);
          return (
            <div key={idx} className="flex gap-4 sm:gap-6 relative group">
              {/* Connector line and gold dot */}
              <div className="flex flex-col items-center pt-1.5">
                <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#f6dc97] to-[#a5771d] shadow-gold border border-white/60 group-hover:scale-125 transition-transform" />
                {idx < programList.length - 1 && (
                  <div className="w-[2px] flex-1 bg-gradient-to-b from-[#a5771d]/50 to-[#a5771d]/20 my-1" />
                )}
              </div>

              {/* Text details */}
              <div className="pb-6 flex-1">
                <p className="text-[#a5771d] font-cinzel font-semibold text-lg sm:text-xl leading-tight">
                  {item.name}
                </p>
                {time && (
                  <p className="text-sm font-semibold text-[#241e14] mt-1 font-body tracking-wide">
                    {time}
                  </p>
                )}
                {item.description && (
                  <p className="text-sm text-[#614d3a] mt-1.5 font-garamond italic leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
