import React, { useRef, useState, useEffect } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { CrownSparkle } from './DecorativeSVGs';

export const HeroDoorReveal = ({
  data,
  onOpenInvitation,
  isOpen,
  setIsOpen
}) => {
  const videoRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [showNames, setShowNames] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const groomName = data.groomName || "Usama";
  const brideName = data.brideName || "Ayesha";
  const message = data.message || "WE'RE GETTING MARRIED";
  const groomSubText = data.groomSubText || "";
  const brideSubText = data.brideSubText || "";

  // Trigger video playback on user interaction
  const handleOpen = async () => {
    if (hasStarted) return;
    setHasStarted(true);
    setIsOpen(true);
    if (onOpenInvitation) onOpenInvitation();

    const vid = videoRef.current;
    if (vid) {
      try {
        vid.muted = true;
        vid.playsInline = true;
        await vid.play();
      } catch (err) {
        console.warn("Video autoplay blocked, showing content:", err);
        setShowNames(true);
      }
    }
  };

  useEffect(() => {
    if (!hasStarted) return;
    // Show names after door sequence opens (~5.5 seconds)
    const timer = setTimeout(() => {
      setShowNames(true);
    }, 5500);

    return () => clearTimeout(timer);
  }, [hasStarted]);

  return (
    <section
      id="hero-reveal"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-[#0f0f0f] select-none"
      onClick={handleOpen}
    >
      {/* 3D Royal Door Video */}
      <video
        ref={videoRef}
        src="/videos/royal-elegance-royal.mp4"
        poster="/images/royal-gate.png"
        playsInline
        muted
        preload="auto"
        controls={false}
        disablePictureInPicture
        onContextMenu={(e) => e.preventDefault()}
        onLoadedData={() => setIsVideoLoaded(true)}
        className="absolute inset-0 h-full w-full object-cover cursor-pointer z-0 transition-opacity duration-700"
      />

      {/* Tap to Open Prompt (when unopened) */}
      {!hasStarted && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all duration-700 cursor-pointer">
          <div className="relative flex flex-col items-center gap-4 p-8 rounded-2xl bg-black/60 border border-[#d4af37]/40 shadow-2xl backdrop-blur-md animate-pulse-glow max-w-xs mx-4 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f6dc97] to-[#8a6620] p-[2px] shadow-gold">
              <div className="w-full h-full rounded-full bg-[#1c0f0a] flex items-center justify-center">
                <CrownSparkle size={28} />
              </div>
            </div>
            <div>
              <p className="font-cinzel text-base tracking-[0.25em] text-[#d4af37] font-semibold uppercase">
                Royal Invitation
              </p>
              <p className="font-garamond italic text-sm text-[#f5e6c8]/80 mt-1">
                Tap anywhere to open
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#d4af37]/50 bg-[#d4af37]/10 text-xs font-cinzel tracking-widest text-[#d4af37]">
              <Sparkles size={12} /> TAP TO OPEN
            </div>
          </div>
        </div>
      )}

      {/* Dark Vignette Overlay for Text Legibility */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 z-10 ${
          showNames ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0.7) 100%)'
        }}
      />

      {/* Couple Names & Title Overlay */}
      <div
        className={`relative z-20 flex w-full flex-col items-center justify-center px-6 text-center pointer-events-none transition-all duration-1000 transform ${
          showNames
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Crown Icon */}
        <div className="mb-3 transition-transform duration-700 hover:scale-110">
          <CrownSparkle size={32} className="mx-auto drop-shadow-[0_2px_12px_rgba(212,175,55,0.8)]" />
        </div>

        {/* Message */}
        <p
          className="mb-3 font-cinzel text-xs md:text-sm tracking-[0.4em] uppercase text-[#d4af37]"
          style={{ textShadow: '0 2px 14px rgba(0,0,0,0.85)' }}
        >
          {message}
        </p>

        {/* Mini Gold Divider */}
        <div className="my-3 flex items-center justify-center gap-3">
          <div className="h-[1px] w-16 bg-[#d4af37]/60 shadow-gold" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]" />
          <div className="h-[1px] w-16 bg-[#d4af37]/60 shadow-gold" />
        </div>

        {/* Groom Name */}
        <div className="my-1">
          <h1
            className="font-cinzel text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none text-[#d4af37] font-normal tracking-wide"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.9), 0 0 30px rgba(212,175,55,0.3)' }}
          >
            {groomName}
          </h1>
          {groomSubText && (
            <p className="font-garamond italic text-[18px] sm:text-[20px] md:text-[22px] text-[#f5e6c8] max-w-lg mx-auto mt-2 drop-shadow-md tracking-wide">
              {groomSubText}
            </p>
          )}
        </div>

        {/* Ampersand */}
        <p
          className="my-2 font-cinzel text-3xl md:text-5xl text-[#d4af37]/85 font-light"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}
        >
          &
        </p>

        {/* Bride Name */}
        <div className="my-1">
          <h1
            className="font-cinzel text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none text-[#d4af37] font-normal tracking-wide"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.9), 0 0 30px rgba(212,175,55,0.3)' }}
          >
            {brideName}
          </h1>
          {brideSubText && (
            <p className="font-garamond italic text-[18px] sm:text-[20px] md:text-[22px] text-[#f5e6c8] max-w-lg mx-auto mt-2 drop-shadow-md tracking-wide">
              {brideSubText}
            </p>
          )}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      {showNames && (
        <div className="absolute inset-x-0 bottom-8 z-20 flex flex-col items-center gap-1.5 pointer-events-none animate-scroll-bounce">
          <span
            className="text-[11px] uppercase font-cinzel tracking-[0.25em] text-[#d4af37]/80"
            style={{ textShadow: '0 1px 6px rgba(0,0,0,0.8)' }}
          >
            Scroll
          </span>
          <ChevronDown size={22} className="text-[#d4af37]" />
        </div>
      )}
    </section>
  );
};
