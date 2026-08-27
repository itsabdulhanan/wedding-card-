import React from 'react';

export const HeartClipPath = () => (
  <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
    <defs>
      <clipPath id="royal-heart-clip" clipPathUnits="objectBoundingBox">
        <path d="M0.5,0.96 C0.5,0.96 0.06,0.70 0.06,0.36 C0.06,0.18 0.20,0.06 0.32,0.06 C0.42,0.06 0.48,0.14 0.5,0.24 C0.52,0.14 0.58,0.06 0.68,0.06 C0.80,0.06 0.94,0.18 0.94,0.36 C0.94,0.70 0.5,0.96 0.5,0.96 Z" />
      </clipPath>
    </defs>
  </svg>
);

export const DecorativeDivider = ({ className = "my-6" }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <div className="w-16 h-[1px] bg-[#a5771d]/40" />
    <svg className="w-2.5 h-2.5 text-[#a5771d] opacity-75" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
    <div className="w-16 h-[1px] bg-[#a5771d]/40" />
  </div>
);

export const CornerFlourish = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 5C5 5 20 10 30 25C40 40 35 55 25 60C15 65 10 55 15 45C20 35 35 30 45 35C55 40 50 55 40 60"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.6"
    />
    <path
      d="M10 2C10 2 25 8 32 20C39 32 36 42 30 46"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinecap="round"
      opacity="0.4"
    />
    <circle cx="30" cy="25" r="2.5" fill="currentColor" opacity="0.5" />
    <circle cx="25" cy="60" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="45" cy="35" r="2" fill="currentColor" opacity="0.4" />
  </svg>
);

export const PalaceIllustration = ({ className = "" }) => (
  <svg viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="100" y="250" width="600" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M350 250 V160 Q350 80 400 60 Q450 80 450 160 V250" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="400" cy="55" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <rect x="150" y="180" width="200" height="70" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M200 180 V140 Q200 110 250 100 Q300 110 300 140 V180" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="250" cy="96" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <rect x="450" y="180" width="200" height="70" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M500 180 V140 Q500 110 550 100 Q600 110 600 140 V180" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="550" cy="96" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <rect x="130" y="150" width="20" height="100" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M125 150 L140 120 L155 150" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <rect x="650" y="150" width="20" height="100" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M645 150 L660 120 L675 150" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <rect x="375" y="180" width="20" height="30" rx="10" stroke="currentColor" strokeWidth="1" fill="none" />
    <rect x="405" y="180" width="20" height="30" rx="10" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M180 250 V220 Q180 200 210 200 Q240 200 240 220 V250" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M270 250 V220 Q270 200 300 200 Q330 200 330 220 V250" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M480 250 V220 Q480 200 510 200 Q540 200 540 220 V250" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M570 250 V220 Q570 200 600 200 Q630 200 630 220 V250" stroke="currentColor" strokeWidth="1" fill="none" />
  </svg>
);

export const WaveFlourish = ({ className = "" }) => (
  <svg viewBox="0 0 400 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 20 Q50 5 100 20 Q150 35 200 20 Q250 5 300 20 Q350 35 400 20"
      stroke="currentColor"
      strokeWidth="1.2"
      opacity="0.35"
    />
    <path
      d="M0 20 Q50 10 100 20 Q150 30 200 20 Q250 10 300 20 Q350 30 400 20"
      stroke="currentColor"
      strokeWidth="0.6"
      opacity="0.25"
    />
    {[50, 100, 150, 200, 250, 300, 350].map((t) => (
      <circle
        key={t}
        cx={t}
        cy={20 + Math.sin(t * 0.03) * 8}
        r="2"
        fill="currentColor"
        opacity="0.35"
      />
    ))}
  </svg>
);

export const CrownSparkle = ({ className = "", size = 26 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={{ color: '#d4af37' }}
  >
    <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
  </svg>
);
