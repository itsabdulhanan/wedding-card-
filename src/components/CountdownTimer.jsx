import React, { useState, useEffect } from 'react';
import { DecorativeDivider } from './DecorativeSVGs';

export const CountdownTimer = ({
  weddingDate = "2026-11-14",
  weddingTime = "17:00",
  customTitle,
  lang = 'en',
  t
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const target = new Date(`${weddingDate}T${weddingTime || '00:00'}:00`).getTime();
    if (isNaN(target)) return;

    const updateCountdown = () => {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsFinished(true);
        return false;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor(diff / (1000 * 60));
      const seconds = Math.floor(diff / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds
      });
      return true;
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [weddingDate, weddingTime]);

  const units = [
    { label: t?.days || "DAYS", value: timeLeft.days },
    { label: t?.hours || "HOURS", value: timeLeft.hours },
    { label: t?.minutes || "MINUTES", value: timeLeft.minutes },
    { label: t?.seconds || "SECONDS", value: timeLeft.seconds }
  ];

  return (
    <div className="text-center py-8 relative select-none">
      <h2 className={`text-3xl sm:text-4xl md:text-5xl text-[#a5771d] font-semibold tracking-wide mb-2 ${lang === 'ur' ? 'font-urdu' : 'font-cinzel'}`}>
        {customTitle || t?.countdownTitle || "Counting Down to Forever"}
      </h2>
      <DecorativeDivider className="my-4" />

      {/* Countdown Cards Grid (2x2 on mobile, 4 in a row on tablet/desktop) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-5 max-w-4xl mx-auto mt-6 px-2">
        {units.map((unit, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="w-full py-3.5 sm:py-4 md:py-5 px-2 mb-2 rounded-2xl border border-[#a5771d]/30 bg-gradient-to-b from-[#fdfbf7]/90 to-[#f3ebd9]/90 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center min-h-[4.5rem] sm:min-h-[5.5rem] md:min-h-[6.5rem]">
              <span className={`text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#241e14] tracking-tight block whitespace-nowrap ${lang === 'ur' ? 'font-urdu' : 'font-cinzel'}`}>
                {unit.value.toLocaleString()}
              </span>
            </div>
            <span className={`text-[11px] sm:text-xs md:text-sm text-[#614d3a] uppercase tracking-[0.2em] font-semibold ${lang === 'ur' ? 'font-urdu' : 'font-cinzel'}`}>
              {unit.label}
            </span>
          </div>
        ))}
      </div>

      {isFinished && (
        <div className={`mt-6 text-xl text-[#a5771d] font-bold ${lang === 'ur' ? 'font-urdu' : 'font-cinzel'}`}>
          {lang === 'ur' ? "🎉 آج شادی کی مبارک اور شاندار تقریب کا دن ہے! 🎉" : "🎉 Today is the Grand Wedding Celebration! 🎉"}
        </div>
      )}
    </div>
  );
};
