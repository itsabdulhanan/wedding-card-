import React from 'react';
import { Clock } from 'lucide-react';
import { DecorativeDivider } from './DecorativeSVGs';

export const ProgramTimeline = ({ items = [], lang = 'en', t }) => {
  const defaultItems = [
    { name: "(RASM-E-HINA)", timeText: "7:00 PM", description: "Traditional henna & celebrations · Groom Residence (Tibba Shah Kot, Chichawatni) & Bridal Residence (Sahiwal)" },
    { name: "The Sacred Nikkah", timeText: "12:00 PM", description: "12:00 PM – 4:00 PM: Solemnization of marriage, vows & heartfelt prayers at Gardenia Banquet Marriage Hall" },
    { name: "Walima Reception Welcome", timeText: "12:00 PM", description: "12:00 PM – 4:00 PM: Guest arrival & photography at Qasar-e-Noor, Chichawatni" },
    { name: "Grand Royal Feast", timeText: "1:30 PM", description: "Royal lunch feast & celebratory greetings at Qasar-e-Noor" }
  ];

  const programList = items && items.length > 0 ? items : (t?.timelineEvents || defaultItems);

  return (
    <div className="max-w-xl mx-auto py-8">
      <div className="text-center mb-8">
        <Clock className="mx-auto text-[#a5771d] mb-3" size={28} />
        <h2 className={`text-3xl sm:text-4xl md:text-5xl text-[#a5771d] font-semibold tracking-wide mb-2 ${lang === 'ur' ? 'font-urdu' : 'font-cinzel'}`}>
          {t?.timelineTitle || "Program Timeline"}
        </h2>
        <DecorativeDivider className="my-4" />
      </div>

      {/* Timeline items */}
      <div className={`space-y-6 relative ${lang === 'ur' ? 'pr-4 sm:pr-8 text-right' : 'pl-4 sm:pl-8 text-left'}`}>
        {programList.map((item, idx) => {
          const time = item.timeText || item.dateTime;
          return (
            <div key={idx} className={`flex gap-4 sm:gap-6 relative group ${lang === 'ur' ? 'flex-row-reverse' : ''}`}>
              {/* Connector line and gold dot */}
              <div className="flex flex-col items-center pt-1.5">
                <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#f6dc97] to-[#a5771d] shadow-gold border border-white/60 group-hover:scale-125 transition-transform" />
                {idx < programList.length - 1 && (
                  <div className="w-[2px] flex-1 bg-gradient-to-b from-[#a5771d]/50 to-[#a5771d]/20 my-1" />
                )}
              </div>

              {/* Text details */}
              <div className="pb-6 flex-1">
                <p className={`text-[#a5771d] font-semibold text-lg sm:text-xl leading-tight ${lang === 'ur' ? 'font-urdu' : 'font-cinzel'}`}>
                  {item.name}
                </p>
                {time && (
                  <p className={`text-sm font-semibold text-[#241e14] mt-1 tracking-wide ${lang === 'ur' ? 'font-urdu' : ''}`}>
                    {time}
                  </p>
                )}
                {item.description && (
                  <p className={`text-sm text-[#614d3a] mt-1.5 leading-relaxed ${lang === 'ur' ? 'font-urdu' : 'font-garamond italic'}`}>
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
