import React, { useState, useRef, useEffect } from 'react';
import { HeroDoorReveal } from './components/HeroDoorReveal';
import { WelcomeSection } from './components/WelcomeSection';
import { ScratchCard } from './components/ScratchCard';
import { SaveTheDate } from './components/SaveTheDate';
import { CountdownTimer } from './components/CountdownTimer';
import { PhotoSlideshow } from './components/PhotoSlideshow';
import { PreWeddingSection } from './components/PreWeddingSection';
import { NikkahSection } from './components/NikkahSection';
import { VenueSection } from './components/VenueSection';
import { ProgramTimeline } from './components/ProgramTimeline';
import { DressCodeSection } from './components/DressCodeSection';
import { TravelAccomSection, GiftsSection } from './components/TravelAccomSection';
import { RsvpAndWishes } from './components/RsvpAndWishes';
import { FooterSection } from './components/FooterSection';
import { FloatingMusicPlayer } from './components/FloatingMusicPlayer';
import { EditDrawer } from './components/EditDrawer';
import { translations } from './translations';

const DEFAULT_WEDDING_DATA = {
  groomName: "Usama Zafar",
  brideName: "Ayesha Arshad",
  groomSubText: "Son of Mr. & Mrs. Muhammad Zafar",
  brideSubText: "Daughter of Mr. & Mrs. Qazi Hafiz Arshad",
  groomResidence: "Tibba Shah Kot, Chichawatni",
  brideResidence: "Sahiwal",
  message: "WE'RE GETTING MARRIED",
  weddingDate: "2026-11-14",
  weddingTime: "17:00",
  mehndiTitle: "(RASM-E-HINA)",
  mehndiDate: "2026-11-13",
  mehndiTime: "19:00",
  mehndiVenue: "Groom Residence: Tibba Shah Kot, Chichawatni · Bridal Residence: Sahiwal",
  nikkahDate: "2026-11-14",
  nikkahTime: "17:00",
  walimaDate: "2026-11-15",
  walimaTime: "12:00",
  venueName: "Qasar-e-Noor",
  venueAddress: "Chichawatni, Sahiwal, Punjab, Pakistan",
  venueImage: "/images/qasar-e-noor.jpg",
  googleMapsLink: "https://maps.app.goo.gl/XFaPedhgGJrZPoGB7",
  welcomeMessage: "With hearts full of love and joy, we warmly invite you to share in the celebration of our union. Your presence would mean the world to us as we begin this beautiful journey together.",
  dressCodeWomen: "Elegant formal attire in pastel or jewel tones",
  dressCodeMen: "Suit or traditional formal wear",
  transportation: "Complimentary transportation assistance is available upon request for out-of-station guests.",
  giftMessage: "Your love, blessings, and presence are the greatest gifts we could ever ask for.",
  endMessage: "We can't wait to celebrate with you!",
  musicTrack: "veerey",
  musicEnabled: true
};

export default function App() {
  const [data, setData] = useState(DEFAULT_WEDDING_DATA);
  const [isOpen, setIsOpen] = useState(false);
  const [autoPlayMusic, setAutoPlayMusic] = useState(false);
  const [lang, setLang] = useState('en'); // 'en' | 'ur'
  const audioRef = useRef(null);

  const t = translations[lang] || translations.en;

  // When user opens the invitation on Hero, start music
  const handleOpenInvitation = () => {
    setAutoPlayMusic(true);
    const audio = audioRef.current;
    if (audio) {
      audio.muted = false;
      audio.play().catch((err) => console.log("Audio play prevented:", err));
    }
  };

  return (
    <div className={`min-h-screen bg-[#fdfbf7] text-[#241e14] bg-damask selection:bg-[#d4af37]/30 selection:text-[#d4af37] relative transition-all duration-300 ${lang === 'ur' ? 'font-urdu' : ''}`}>
      {/* Floating Audio Controller + Language Switcher Toggle */}
      <FloatingMusicPlayer
        autoPlay={autoPlayMusic}
        selectedTrack={data.musicTrack}
        onTrackChange={(newTrack) => setData((prev) => ({ ...prev, musicTrack: newTrack }))}
        audioRef={audioRef}
        lang={lang}
        onLanguageChange={setLang}
        t={t}
      />

      {/* Floating Customizer Drawer */}
      <EditDrawer
        data={data}
        setData={setData}
        defaultData={DEFAULT_WEDDING_DATA}
      />

      {/* 1. Hero 3D Royal Door Reveal Section */}
      <HeroDoorReveal
        data={data}
        onOpenInvitation={handleOpenInvitation}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        lang={lang}
        t={t}
      />

      {/* 2. Welcome Section with Luxury Velvet-to-Cream Gradient */}
      <WelcomeSection
        welcomeMessage={data.welcomeMessage}
        lang={lang}
        t={t}
      />

      {/* Main Content Container with Elegant Spacing & Ornaments */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 space-y-12 sm:space-y-16 py-12">
        {/* 3. Interactive Gold Foil Scratch Card + Save the Date */}
        <section className="bg-white/60 rounded-3xl p-6 sm:p-10 border border-[#a5771d]/20 shadow-sm backdrop-blur-sm">
          <ScratchCard
            weddingDate={data.weddingDate}
            weddingTime={data.weddingTime}
            revealText={lang === 'ur' ? t?.ourForeverBegins : "Our forever begins"}
            lang={lang}
            t={t}
          />
          <SaveTheDate data={data} lang={lang} t={t} />
        </section>

        {/* 4. Photo Slideshow Gallery (3 Exclusive Cartoon Illustrations) */}
        <section className="bg-white/60 rounded-3xl p-6 sm:p-10 border border-[#a5771d]/20 shadow-sm backdrop-blur-sm">
          <PhotoSlideshow lang={lang} t={t} />
        </section>

        {/* 5. Live Countdown Timer */}
        <section className="bg-white/60 rounded-3xl p-6 sm:p-10 border border-[#a5771d]/20 shadow-sm backdrop-blur-sm">
          <CountdownTimer
            weddingDate={data.weddingDate}
            weddingTime={data.weddingTime}
            customTitle={t?.countdownTitle}
            lang={lang}
            t={t}
          />
        </section>

        {/* 6. Pre-Wedding Celebration: (RASM-E-HINA) Ceremony (Friday, 13 Nov 2026) */}
        <section className="bg-white/60 rounded-3xl p-6 sm:p-10 border border-[#a5771d]/20 shadow-sm backdrop-blur-sm">
          <PreWeddingSection
            mehndiTitle={data.mehndiTitle}
            mehndiDate={data.mehndiDate}
            mehndiTime={data.mehndiTime}
            mehndiVenue={data.mehndiVenue}
            groomResidence={data.groomResidence}
            brideResidence={data.brideResidence}
            mehndiImage="/images/mehandi-sketch.jpg"
            lang={lang}
            t={t}
          />
        </section>

        {/* 7. Sacred Ceremony: The Nikkah (Saturday, 14 Nov 2026) */}
        <section className="bg-white/60 rounded-3xl p-6 sm:p-10 border border-[#a5771d]/20 shadow-sm backdrop-blur-sm">
          <NikkahSection
            nikkahDate={data.nikkahDate}
            nikkahTime={data.nikkahTime}
            nikkahImage="/images/nikkah-sketch.jpg"
            lang={lang}
            t={t}
          />
        </section>

        {/* 8. Grand Celebration: Walima Reception (Sunday, 15 Nov 2026 at Qasar-e-Noor) */}
        <section className="bg-white/60 rounded-3xl p-6 sm:p-10 border border-[#a5771d]/20 shadow-sm backdrop-blur-sm">
          <VenueSection
            venueName={data.venueName}
            venueAddress={data.venueAddress}
            googleMapsLink={data.googleMapsLink}
            venueImage={data.venueImage}
            walimaDate={data.walimaDate}
            walimaTime={data.walimaTime}
            lang={lang}
            t={t}
          />
        </section>

        {/* 9. Program Timeline */}
        <section className="bg-white/60 rounded-3xl p-6 sm:p-10 border border-[#a5771d]/20 shadow-sm backdrop-blur-sm">
          <ProgramTimeline lang={lang} t={t} />
        </section>

        {/* 10. Dress Code */}
        <section className="bg-white/60 rounded-3xl p-6 sm:p-10 border border-[#a5771d]/20 shadow-sm backdrop-blur-sm">
          <DressCodeSection
            dressCodeWomen={data.dressCodeWomen}
            dressCodeMen={data.dressCodeMen}
            lang={lang}
            t={t}
          />
        </section>

        {/* 11. Transportation */}
        <section className="bg-white/60 rounded-3xl p-6 sm:p-10 border border-[#a5771d]/20 shadow-sm backdrop-blur-sm">
          <TravelAccomSection
            transportation={data.transportation}
            lang={lang}
            t={t}
          />
        </section>

        {/* 12. Gift Blessings */}
        <section className="bg-white/60 rounded-3xl p-6 sm:p-10 border border-[#a5771d]/20 shadow-sm backdrop-blur-sm">
          <GiftsSection giftMessage={data.giftMessage} lang={lang} t={t} />
        </section>

        {/* 13. RSVP & Live Wishes Wall */}
        <section className="bg-white/60 rounded-3xl p-6 sm:p-10 border border-[#a5771d]/20 shadow-sm backdrop-blur-sm">
          <RsvpAndWishes lang={lang} t={t} />
        </section>
      </main>

      {/* 14. Footer with Monogram & End Message */}
      <FooterSection
        endMessage={data.endMessage}
        groomName={data.groomName}
        brideName={data.brideName}
        lang={lang}
        t={t}
      />
    </div>
  );
}

