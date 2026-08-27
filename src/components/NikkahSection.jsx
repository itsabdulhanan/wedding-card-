import React from 'react';
import { Heart, Calendar, Clock, MapPin } from 'lucide-react';
import { DecorativeDivider, CrownSparkle } from './DecorativeSVGs';

export const NikkahSection = ({
  nikkahDate = "2026-11-14",
  nikkahTime = "17:00",
  nikkahVenue = "The Wedding Hall / Ceremony Venue",
  nikkahImage = "/images/nikkah-sketch.jpg",
  lang = 'en',
  t
}) => {
  return (
    <div className="max-w-2xl mx-auto text-center py-6 sm:py-8">
      <div className={`inline-flex items-center justify-center gap-2 px-4 py-1 rounded-full border border-[#a5771d]/30 bg-[#a5771d]/10 text-xs tracking-widest text-[#a5771d] mb-3 ${lang === 'ur' ? 'font-urdu' : 'font-cinzel'}`}>
        <CrownSparkle size={14} /> {t?.nikkahBadge || "SACRED CEREMONY"}
      </div>

      <h2 className={`text-3xl sm:text-4xl md:text-5xl text-[#a5771d] font-semibold tracking-wide mb-2 ${lang === 'ur' ? 'font-urdu' : 'font-cinzel'}`}>
        {t?.nikkahTitle || "The Nikkah Ceremony"}
      </h2>
      <DecorativeDivider className="my-4" />

      {/* Quranic Ayah / Blessing */}
      <div className="max-w-lg mx-auto my-3 px-4">
        <p className={`text-xl sm:text-2xl text-[#8a1c2d] ${lang === 'ur' ? 'font-urdu text-2xl font-bold' : 'font-calligraphic italic'}`}>
          {t?.nikkahAyah || "\"And We created you in pairs\""}
        </p>
        <p className={`text-xs tracking-wider text-[#614d3a] mt-1 ${lang === 'ur' ? 'font-urdu' : 'font-cinzel'}`}>
          {t?.nikkahSurah || "— Surah An-Naba [78:8]"}
        </p>
      </div>

      {/* Date & Day Highlight */}
      <div className="my-4">
        <p className={`text-2xl sm:text-3xl font-bold text-[#241e14] tracking-wide ${lang === 'ur' ? 'font-urdu' : 'font-cinzel'}`}>
          {t?.nikkahDate || "Saturday, 14 November 2026"}
        </p>
        <p className={`text-lg text-[#614d3a] mt-1 ${lang === 'ur' ? 'font-urdu' : 'font-garamond italic'}`}>
          {t?.nikkahDesc || "The auspicious solemnization of the sacred bond of marriage & exchange of vows"}
        </p>
      </div>

      {/* Nikkah Pavilion Sketch */}
      {nikkahImage && (
        <div className="my-6 relative group max-w-lg mx-auto">
          <div className="relative rounded-2xl overflow-hidden p-2 bg-gradient-to-b from-[#dfca97] via-[#f7ecd5] to-[#c29b48] shadow-2xl border border-[#a5771d]/40 transition-transform duration-500 hover:scale-[1.01]">
            <div className="relative rounded-xl overflow-hidden bg-[#faf7f2] border border-[#a5771d]/30">
              <img
                src={nikkahImage}
                alt="Nikkah Ceremony Sketch"
                className="w-full h-auto object-cover max-h-[380px] filter contrast-[1.02] brightness-[1.01] transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white/95 text-xs tracking-widest uppercase drop-shadow-md">
                <span className={`bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm border border-[#d4af37]/40 ${lang === 'ur' ? 'font-urdu' : 'font-cinzel'}`}>
                  {t?.nikkahBadgeSketch || "Nikkah Pavilion · 14 Nov 2026"}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Event Details Card */}
      <div className={`max-w-md mx-auto p-5 rounded-2xl bg-white/70 border border-[#a5771d]/25 shadow-sm backdrop-blur-sm mt-4 ${lang === 'ur' ? 'text-right' : 'text-left'}`}>
        <div className={`flex items-center gap-3 text-sm text-[#241e14] mb-2.5 ${lang === 'ur' ? 'flex-row-reverse' : ''}`}>
          <Calendar size={16} className="text-[#a5771d] shrink-0" />
          <span className={`font-semibold ${lang === 'ur' ? 'font-urdu' : ''}`}>{t?.nikkahDate || "Saturday, November 14, 2026"}</span>
        </div>
        <div className={`flex items-center gap-3 text-sm text-[#241e14] mb-2.5 ${lang === 'ur' ? 'flex-row-reverse' : ''}`}>
          <Clock size={16} className="text-[#a5771d] shrink-0" />
          <span className={lang === 'ur' ? 'font-urdu' : ''}>{t?.nikkahTime || "5:00 PM (Ijbaat-o-Qubool & Dua)"}</span>
        </div>
        <div className={`flex items-center gap-3 text-sm text-[#241e14] ${lang === 'ur' ? 'flex-row-reverse' : ''}`}>
          <MapPin size={16} className="text-[#a5771d] shrink-0" />
          <span className={lang === 'ur' ? 'font-urdu' : ''}>{t?.nikkahVenue || "Ceremony Hall & Gathering"}</span>
        </div>
      </div>
    </div>
  );
};
