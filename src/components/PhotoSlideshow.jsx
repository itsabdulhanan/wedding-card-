import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DecorativeDivider } from './DecorativeSVGs';

export const PhotoSlideshow = ({ images = [] }) => {
  const defaultImages = [
    '/images/slide-1.jpg',
    '/images/slide-2.jpg',
    '/images/slide-3.jpg',
    '/images/slide-4.jpg'
  ];

  const slideList = images && images.length > 0 ? images : defaultImages;
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-advance
  useEffect(() => {
    if (slideList.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideList.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slideList.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slideList.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slideList.length) % slideList.length);
  };

  // Touch Swipe Handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
  };

  return (
    <div className="py-6 select-none max-w-3xl mx-auto">
      <DecorativeDivider className="mb-8" />

      {/* Frame Container */}
      <div
        className="relative w-full h-72 sm:h-96 md:h-[450px] rounded-2xl overflow-hidden shadow-elegant border border-[#d4af37]/30 bg-black group"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Images */}
        {slideList.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Wedding moment ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 transform ${
              idx === currentIndex
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105 pointer-events-none'
            }`}
            loading="lazy"
          />
        ))}

        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all hover:bg-black/70 hover:scale-110"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all hover:bg-black/70 hover:scale-110"
          aria-label="Next Slide"
        >
          <ChevronRight size={20} />
        </button>

        {/* Indicator Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          {slideList.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-500 ${
                idx === currentIndex
                  ? 'w-6 bg-[#d4af37]'
                  : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
