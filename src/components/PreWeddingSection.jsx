import React from 'react';
import { Sparkles, Calendar, Clock, MapPin } from 'lucide-react';
import { DecorativeDivider } from './DecorativeSVGs';

export const PreWeddingSection = ({
  mehndiDate = "2026-11-13",
  mehndiTime = "19:00",
  mehndiVenue = "Groom & Bride's Residence",
  mehndiImage = "/images/mehandi-sketch.jpg"
}) => {
  return (
    <div className="max-w-2xl mx-auto text-center py-6 sm:py-8">
      <div className="inline-flex items-center justify-center gap-2 px-4 py-1 rounded-full border border-[#a5771d]/30 bg-[#a5771d]/10 text-xs font-cinzel tracking-widest text-[#a5771d] mb-3">
        <Sparkles size={13} /> PRE-WEDDING CELEBRATION
      </div>

      <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-[#a5771d] font-semibold tracking-wide mb-2">
        Mehndi Ceremony
      </h2>
      <DecorativeDivider className="my-4" />

      {/* Date & Day Highlight */}
      <div className="my-4">
        <p className="font-cinzel text-2xl sm:text-3xl font-bold text-[#241e14] tracking-wide">
          Friday, 13 November 2026
        </p>
        <p className="font-garamond italic text-lg text-[#614d3a] mt-1">
          An evening of traditional henna, vibrant colors & heartfelt music
        </p>
      </div>

      {/* Mehndi Hand-Drawn Sketch */}
      {mehndiImage && (
        <div className="my-6 relative group max-w-lg mx-auto">
          <div className="relative rounded-2xl overflow-hidden p-2 bg-gradient-to-b from-[#dfca97] via-[#f7ecd5] to-[#c29b48] shadow-2xl border border-[#a5771d]/40 transition-transform duration-500 hover:scale-[1.01]">
            <div className="relative rounded-xl overflow-hidden bg-[#faf7f2] border border-[#a5771d]/30">
              <img
                src={mehndiImage}
                alt="Mehndi Celebration Sketch"
                className="w-full h-auto object-cover max-h-[380px] filter contrast-[1.02] brightness-[1.01] transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white/95 text-xs font-cinzel tracking-widest uppercase drop-shadow-md">
                <span className="bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm border border-[#d4af37]/40">
                  Henna & Rasm-e-Hina · 13 Nov 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Event Details Card */}
      <div className="max-w-md mx-auto p-5 rounded-2xl bg-white/70 border border-[#a5771d]/25 shadow-sm backdrop-blur-sm mt-4 text-left">
        <div className="flex items-center gap-3 text-sm text-[#241e14] font-body mb-2.5">
          <Calendar size={16} className="text-[#a5771d] shrink-0" />
          <span className="font-semibold">Friday, November 13, 2026</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-[#241e14] font-body mb-2.5">
          <Clock size={16} className="text-[#a5771d] shrink-0" />
          <span>7:00 PM Onwards</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-[#241e14] font-body">
          <MapPin size={16} className="text-[#a5771d] shrink-0" />
          <span>{mehndiVenue}</span>
        </div>
      </div>
    </div>
  );
};
