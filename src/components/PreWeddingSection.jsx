import React from 'react';
import { Sparkles, Calendar, Clock, MapPin, Home } from 'lucide-react';
import { DecorativeDivider } from './DecorativeSVGs';

export const PreWeddingSection = ({
  mehndiTitle = "(RASM-E-HINA)",
  mehndiDate = "2026-11-13",
  mehndiTime = "19:00",
  mehndiVenue = "Groom & Bridal Residences",
  groomResidence = "Tibba Shah Kot, Chichawatni",
  brideResidence = "Sahiwal",
  mehndiImage = "/images/mehandi-sketch.jpg",
  lang = 'en',
  t
}) => {
  const gRes = lang === 'ur' ? (t?.groomResidence || "ٹبہ شاہ کوٹ، چیچہ وطنی") : (groomResidence || "Tibba Shah Kot, Chichawatni");
  const bRes = lang === 'ur' ? (t?.brideResidence || "ساہیوال") : (brideResidence || "Sahiwal");

  return (
    <div className="max-w-2xl mx-auto text-center py-6 sm:py-8">
      <div className={`inline-flex items-center justify-center gap-2 px-4 py-1 rounded-full border border-[#a5771d]/30 bg-[#a5771d]/10 text-xs tracking-widest text-[#a5771d] mb-3 ${lang === 'ur' ? 'font-urdu' : 'font-cinzel'}`}>
        <Sparkles size={13} /> {t?.rasmEHinaBadge || "RASM-E-HINA"}
      </div>

      <h2 className={`text-3xl sm:text-4xl md:text-5xl text-[#a5771d] font-semibold tracking-wide mb-2 ${lang === 'ur' ? 'font-urdu' : 'font-cinzel'}`}>
        {t?.rasmEHinaTitle || "(RASM-E-HINA)"}
      </h2>
      <DecorativeDivider className="my-4" />

      {/* Date & Day Highlight */}
      <div className="my-4">
        <p className={`text-2xl sm:text-3xl font-bold text-[#241e14] tracking-wide ${lang === 'ur' ? 'font-urdu' : 'font-cinzel'}`}>
          {t?.rasmEHinaDate || "Friday, 13 November 2026"}
        </p>
        <p className={`text-lg text-[#614d3a] mt-1 ${lang === 'ur' ? 'font-urdu' : 'font-garamond italic'}`}>
          {t?.rasmEHinaDesc || "An evening of traditional henna, vibrant colors & joyous celebration"}
        </p>
      </div>

      {/* Mehndi Hand-Drawn Sketch */}
      {mehndiImage && (
        <div className="my-6 relative group max-w-lg mx-auto">
          <div className="relative rounded-2xl overflow-hidden p-2 bg-gradient-to-b from-[#dfca97] via-[#f7ecd5] to-[#c29b48] shadow-2xl border border-[#a5771d]/40 transition-transform duration-500 hover:scale-[1.01]">
            <div className="relative rounded-xl overflow-hidden bg-[#faf7f2] border border-[#a5771d]/30">
              <img
                src={mehndiImage}
                alt="RASM-E-HINA Celebration Sketch"
                className="w-full h-auto object-cover max-h-[380px] filter contrast-[1.02] brightness-[1.01] transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white/95 text-xs tracking-widest uppercase drop-shadow-md">
                <span className={`bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm border border-[#d4af37]/40 ${lang === 'ur' ? 'font-urdu' : 'font-cinzel'}`}>
                  {t?.rasmEHinaBadgeSketch || "(RASM-E-HINA) · 13 Nov 2026"}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Event Details Card with Groom & Bridal Residences */}
      <div className={`max-w-md mx-auto p-5 rounded-2xl bg-white/70 border border-[#a5771d]/25 shadow-sm backdrop-blur-sm mt-4 space-y-3 ${lang === 'ur' ? 'text-right' : 'text-left'}`}>
        <div className={`flex items-center gap-3 text-sm text-[#241e14] ${lang === 'ur' ? 'flex-row-reverse' : ''}`}>
          <Calendar size={16} className="text-[#a5771d] shrink-0" />
          <span className={`font-semibold ${lang === 'ur' ? 'font-urdu' : ''}`}>{t?.rasmEHinaDate || "Friday, November 13, 2026"}</span>
        </div>
        <div className={`flex items-center gap-3 text-sm text-[#241e14] ${lang === 'ur' ? 'flex-row-reverse' : ''}`}>
          <Clock size={16} className="text-[#a5771d] shrink-0" />
          <span className={lang === 'ur' ? 'font-urdu' : ''}>{t?.rasmEHinaTime || "7:00 PM Onwards"}</span>
        </div>

        <div className="pt-2 border-t border-[#a5771d]/20 space-y-2">
          {/* Groom Residence */}
          <div className={`flex items-start gap-3 text-sm text-[#241e14] ${lang === 'ur' ? 'flex-row-reverse' : ''}`}>
            <Home size={16} className="text-[#a5771d] shrink-0 mt-0.5" />
            <div>
              <span className={`font-semibold text-xs uppercase tracking-wider text-[#a5771d] block ${lang === 'ur' ? 'font-urdu' : 'font-cinzel'}`}>
                {t?.groomResidenceLabel || "Groom Residence"}
              </span>
              <span className={lang === 'ur' ? 'font-urdu' : ''}>{gRes}</span>
            </div>
          </div>

          {/* Bridal Residence */}
          <div className={`flex items-start gap-3 text-sm text-[#241e14] ${lang === 'ur' ? 'flex-row-reverse' : ''}`}>
            <MapPin size={16} className="text-[#a5771d] shrink-0 mt-0.5" />
            <div>
              <span className={`font-semibold text-xs uppercase tracking-wider text-[#a5771d] block ${lang === 'ur' ? 'font-urdu' : 'font-cinzel'}`}>
                {t?.brideResidenceLabel || "Bridal Residence"}
              </span>
              <span className={lang === 'ur' ? 'font-urdu' : ''}>{bRes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

