import React, { useRef, useState, useEffect } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { CrownSparkle } from './DecorativeSVGs';

export const HeroDoorReveal = ({
  data,
  onOpenInvitation,
  isOpen,
  setIsOpen,
  lang = 'en',
  t
}) => {
  const videoRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [showNames, setShowNames] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const groomName = lang === 'ur' ? (t?.groomName || "اسامہ ظفر") : (data.groomName || "Usama Zafar");
  const brideName = lang === 'ur' ? (t?.brideName || "عائشہ ارشد") : (data.brideName || "Ayesha Arshad");
  const message = lang === 'ur' ? (t?.wereGettingMarried || "شادی خانہ آبادی") : (data.message || "WE'RE GETTING MARRIED");
  const groomSubText = lang === 'ur' ? (t?.groomSubText || "فرزندِ ارجمند: مسٹر اور مسز محمد ظفر") : (data.groomSubText || "Son of Mr. & Mrs. Muhammad Zafar");
  const brideSubText = lang === 'ur' ? (t?.brideSubText || "دخترِ نیک اختر: مسٹر اور مسز قاضی حافظ ارشد") : (data.brideSubText || "Daughter of Mr. & Mrs. Qazi Hafiz Arshad");

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
              <p className={`text-base tracking-[0.25em] text-[#d4af37] font-semibold uppercase ${lang === 'ur' ? 'font-urdu' : 'font-cinzel'}`}>
                {t?.royalInvitation || "Royal Invitation"}
              </p>
              <p className={`text-sm text-[#f5e6c8]/80 mt-1 ${lang === 'ur' ? 'font-urdu' : 'font-garamond italic'}`}>
                {t?.tapAnywhere || "Tap anywhere to open"}
              </p>
            </div>
            <div className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#d4af37]/50 bg-[#d4af37]/10 text-xs tracking-widest text-[#d4af37] ${lang === 'ur' ? 'font-urdu' : 'font-cinzel'}`}>
              <Sparkles size={12} /> {t?.tapToOpen || "TAP TO OPEN"}
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
            'radial-gradient(ellipse at center 40%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.72) 100%), linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.3) 35%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.85) 100%)'
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
          <CrownSparkle size={34} className="mx-auto" />
        </div>

        {/* Message ("WE'RE GETTING MARRIED") - Royal High Contrast Badge / Styling */}
        <div className="mb-3 inline-flex items-center justify-center px-5 py-1.5 rounded-full bg-black/45 border border-[#d4af37]/45 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.7)]">
          <p
            className={`text-xs sm:text-sm uppercase font-semibold text-[#FFF8E7] ${
              lang === 'ur'
                ? 'font-urdu tracking-normal text-sm sm:text-base'
                : 'font-cinzel tracking-[0.35em] sm:tracking-[0.45em]'
            }`}
            style={{
              textShadow:
                '0 2px 8px rgba(0,0,0,0.95), 0 0 15px rgba(254,232,179,0.5)'
            }}
          >
            {message}
          </p>
        </div>

        {/* Mini Gold Divider */}
        <div className="my-2.5 flex items-center justify-center gap-3">
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#f6dc97]/90 to-transparent shadow-gold" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#f6dc97] shadow-gold" />
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#f6dc97]/90 to-transparent shadow-gold" />
        </div>

        {/* Groom Name: Bold Letters Italian Style */}
        <div className="my-2">
          <h1
            className={`leading-tight text-[#FCE39E] tracking-wide ${lang === 'ur' ? 'font-urdu text-5xl sm:text-7xl md:text-8xl font-bold' : 'font-garamond italic font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl'}`}
            style={{ textShadow: '0 4px 24px rgba(0,0,0,0.95), 0 0 35px rgba(212,175,55,0.45)' }}
          >
            {groomName}
          </h1>
          {groomSubText && (
            <p
              className={`text-[#FFF8E7] max-w-xl mx-auto mt-2 drop-shadow-md tracking-wide leading-snug ${lang === 'ur' ? 'font-urdu text-[18px]' : 'font-garamond italic text-[20px]'}`}
              style={{
                fontSize: lang === 'ur' ? '18px' : '20px',
                textShadow: '0 2px 10px rgba(0,0,0,0.9)'
              }}
            >
              {groomSubText}
            </p>
          )}
        </div>

        {/* Ampersand */}
        <p
          className={`my-1 text-3xl md:text-5xl text-[#FCE39E] ${lang === 'ur' ? 'font-urdu' : 'font-garamond italic font-bold'}`}
          style={{ textShadow: '0 2px 14px rgba(0,0,0,0.95), 0 0 20px rgba(212,175,55,0.4)' }}
        >
          {lang === 'ur' ? 'اور' : '&'}
        </p>

        {/* Bride Name: Bold Letters Italian Style */}
        <div className="my-2">
          <h1
            className={`leading-tight text-[#FCE39E] tracking-wide ${lang === 'ur' ? 'font-urdu text-5xl sm:text-7xl md:text-8xl font-bold' : 'font-garamond italic font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl'}`}
            style={{ textShadow: '0 4px 24px rgba(0,0,0,0.95), 0 0 35px rgba(212,175,55,0.45)' }}
          >
            {brideName}
          </h1>
          {brideSubText && (
            <p
              className={`text-[#FFF8E7] max-w-xl mx-auto mt-2 drop-shadow-md tracking-wide leading-snug ${lang === 'ur' ? 'font-urdu text-[18px]' : 'font-garamond italic text-[20px]'}`}
              style={{
                fontSize: lang === 'ur' ? '18px' : '20px',
                textShadow: '0 2px 10px rgba(0,0,0,0.9)'
              }}
            >
              {brideSubText}
            </p>
          )}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      {showNames && (
        <div className="absolute inset-x-0 bottom-8 z-20 flex flex-col items-center gap-1.5 pointer-events-none animate-scroll-bounce">
          <span
            className={`text-[12px] uppercase tracking-[0.25em] font-semibold text-[#FFF8E7] ${lang === 'ur' ? 'font-urdu' : 'font-cinzel'}`}
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.95)' }}
          >
            {t?.scroll || "Scroll"}
          </span>
          <ChevronDown size={22} className="text-[#FCE39E] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]" />
        </div>
      )}
    </section>
  );
};
