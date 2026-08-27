import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, ExternalLink, Calendar, Clock, Utensils } from 'lucide-react';
import { DecorativeDivider, CrownSparkle } from './DecorativeSVGs';

export const VenueSection = ({
  venueName = "Qasar-e-Noor",
  venueAddress = "Chichawatni, Sahiwal, Punjab, Pakistan",
  googleMapsLink = "https://maps.app.goo.gl/XFaPedhgGJrZPoGB7",
  venueImage = "/images/qasar-e-noor.jpg",
  walimaDate = "2026-11-15",
  walimaTime = "12:00",
  lang = 'en',
  t
}) => {
  const [copied, setCopied] = useState(false);
  const vName = lang === 'ur' ? (t?.walimaVenueName || venueName) : venueName;
  const vAddress = lang === 'ur' ? (t?.walimaVenueAddress || venueAddress) : venueAddress;
  const fullAddress = [vName, vAddress].filter(Boolean).join(", ");
  
  // Google Map Embed URL
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent("Qasar-e-noor Marriage hall & Restaurant Chichawatni Sahiwal")}&t=m&z=15&output=embed`;
  const externalMapUrl = googleMapsLink || `https://maps.app.goo.gl/XFaPedhgGJrZPoGB7`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto text-center py-6 sm:py-8">
      <div className={`inline-flex items-center justify-center gap-2 px-4 py-1 rounded-full border border-[#a5771d]/30 bg-[#a5771d]/10 text-xs tracking-widest text-[#a5771d] mb-3 ${lang === 'ur' ? 'font-urdu' : 'font-cinzel'}`}>
        <CrownSparkle size={14} /> {t?.walimaBadge || "GRAND CELEBRATION"}
      </div>

      <h2 className={`text-3xl sm:text-4xl md:text-5xl text-[#a5771d] font-semibold tracking-wide mb-2 ${lang === 'ur' ? 'font-urdu' : 'font-cinzel'}`}>
        {t?.walimaTitle || "Walima Reception"}
      </h2>
      <DecorativeDivider className="my-4" />

      {/* Date & Day Highlight */}
      <div className="my-4">
        <p className={`text-2xl sm:text-3xl font-bold text-[#241e14] tracking-wide ${lang === 'ur' ? 'font-urdu' : 'font-cinzel'}`}>
          {t?.walimaDate || "Sunday, 15 November 2026"}
        </p>
        <p className={`text-lg text-[#614d3a] mt-1 ${lang === 'ur' ? 'font-urdu' : 'font-garamond italic'}`}>
          {t?.walimaDesc || "Join us for a grand royal lunch & reception celebration"}
        </p>
      </div>

      {/* Venue Names & Details */}
      <div className="text-center mb-6">
        <div className={`inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#a5771d] font-semibold mb-1 ${lang === 'ur' ? 'font-urdu' : 'font-cinzel'}`}>
          <MapPin size={14} /> {t?.venueLocation || "Venue Location"}
        </div>
        <p className={`text-2xl sm:text-3xl font-bold text-[#241e14] mb-1 tracking-wide ${lang === 'ur' ? 'font-urdu' : 'font-cinzel'}`}>
          {vName}
        </p>
        <p className={`text-[#614d3a] text-lg sm:text-xl max-w-md mx-auto leading-relaxed ${lang === 'ur' ? 'font-urdu' : 'font-garamond italic'}`}>
          {vAddress}
        </p>
      </div>

      {/* Architectural Sketch Image */}
      {venueImage && (
        <div className="mb-8 relative group max-w-lg mx-auto">
          <div className="relative rounded-2xl overflow-hidden p-2 bg-gradient-to-b from-[#dfca97] via-[#f7ecd5] to-[#c29b48] shadow-2xl border border-[#a5771d]/40 transition-transform duration-500 hover:scale-[1.01]">
            <div className="relative rounded-xl overflow-hidden bg-[#faf7f2] border border-[#a5771d]/30">
              <img
                src={venueImage}
                alt={venueName}
                className="w-full h-auto object-cover max-h-[360px] filter contrast-[1.02] brightness-[1.02] transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white/95 text-xs tracking-widest uppercase drop-shadow-md">
                <span className={`bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm border border-[#d4af37]/40 ${lang === 'ur' ? 'font-urdu' : 'font-cinzel'}`}>
                  {t?.walimaBadgeSketch || `Architectural View · ${venueName}`}
                </span>
                <span className={`bg-[#8a1c2d]/80 px-3 py-1 rounded-full backdrop-blur-sm border border-[#d4af37]/40 ${lang === 'ur' ? 'font-urdu' : ''}`}>
                  {lang === 'ur' ? '15 نومبر 2026' : '15 Nov 2026'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Event Details Card */}
      <div className={`max-w-md mx-auto p-5 rounded-2xl bg-white/70 border border-[#a5771d]/25 shadow-sm backdrop-blur-sm mb-6 ${lang === 'ur' ? 'text-right' : 'text-left'}`}>
        <div className={`flex items-center gap-3 text-sm text-[#241e14] mb-2.5 ${lang === 'ur' ? 'flex-row-reverse' : ''}`}>
          <Calendar size={16} className="text-[#a5771d] shrink-0" />
          <span className={`font-semibold ${lang === 'ur' ? 'font-urdu' : ''}`}>{t?.walimaDate || "Sunday, November 15, 2026"}</span>
        </div>
        <div className={`flex items-center gap-3 text-sm text-[#241e14] mb-2.5 ${lang === 'ur' ? 'flex-row-reverse' : ''}`}>
          <Clock size={16} className="text-[#a5771d] shrink-0" />
          <span className={lang === 'ur' ? 'font-urdu' : ''}>{t?.walimaTime || "12:00 PM to 4:00 PM (Reception & Welcome)"}</span>
        </div>
        <div className={`flex items-center gap-3 text-sm text-[#241e14] ${lang === 'ur' ? 'flex-row-reverse' : ''}`}>
          <Utensils size={16} className="text-[#a5771d] shrink-0" />
          <span className={lang === 'ur' ? 'font-urdu' : ''}>{t?.walimaFeast || "1:30 PM (Grand Royal Feast)"}</span>
        </div>
      </div>

      {/* Embedded Google Map */}
      <div className="rounded-2xl overflow-hidden shadow-elegant border border-[#a5771d]/30 mb-6 bg-[#f5e6c8]/30">
        <iframe
          src={embedUrl}
          width="100%"
          height="320"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Venue Map"
          className="filter contrast-[1.05]"
        />
      </div>

      {/* Actions: View on Google Maps + Copy Address */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href={externalMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 rounded-full px-7 py-3 text-xs md:text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 text-white ${lang === 'ur' ? 'font-urdu' : 'font-cinzel'}`}
          style={{
            background: 'linear-gradient(135deg, #a5771d 0%, #d4af37 100%)',
            boxShadow: '0 10px 28px -6px rgba(165, 119, 29, 0.45)'
          }}
        >
          <Navigation size={15} />
          <span>{t?.openGoogleMaps || "Open in Google Maps"}</span>
          <ExternalLink size={13} className="opacity-80" />
        </a>

        <button
          type="button"
          onClick={handleCopyAddress}
          className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs md:text-sm font-semibold uppercase tracking-[0.15em] transition-all duration-300 border border-[#a5771d]/40 bg-white/80 hover:bg-white text-[#a5771d] shadow-md hover:scale-105 active:scale-95 ${lang === 'ur' ? 'font-urdu' : 'font-cinzel'}`}
        >
          {copied ? (
            <>
              <Check size={15} className="text-green-600 animate-bounce" />
              <span>{t?.addressCopied || "Address Copied!"}</span>
            </>
          ) : (
            <>
              <Copy size={15} />
              <span>{t?.copyAddress || "Copy Address"}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

