import React, { useRef, useEffect, useState, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart } from 'lucide-react';
import { DecorativeDivider, HeartClipPath } from './DecorativeSVGs';

const PALETTE = {
  gradStart: "#f6dc97",
  gradMid: "#d4a84a",
  gradEnd: "#8a6620",
  speckLightRgb: "255, 240, 190",
  speckMidRgb: "212, 168, 74",
  speckDarkRgb: "120, 80, 20",
  sparkleRgb: "255, 250, 220",
  revealBg: "hsl(38, 50%, 93%)",
  titleColor: "hsl(40, 70%, 38%)",
  shadowRgb: "60, 25, 5"
};

export const ScratchCard = ({
  weddingDate = "2026-11-14",
  weddingTime = "17:00",
  revealText = "Our forever begins"
}) => {
  const canvasRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isScratching, setIsScratching] = useState(false);
  const isInteracting = useRef(false);
  const lastPoint = useRef(null);

  // Format date and time
  const formattedDate = (() => {
    try {
      const d = new Date(weddingDate + (weddingTime ? `T${weddingTime}` : 'T00:00:00'));
      if (isNaN(d.getTime())) return { day: "Saturday", fullDate: "November 14, 2026", time: "5:00 PM" };
      return {
        day: d.toLocaleDateString('en-US', { weekday: 'long' }),
        fullDate: d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        time: weddingTime ? d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }) : ""
      };
    } catch {
      return { day: "Saturday", fullDate: "November 14, 2026", time: "5:00 PM" };
    }
  })();

  // Paint the sparkling gold foil canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Rich Radial Gold Foil Gradient
    const grad = ctx.createRadialGradient(
      width * 0.4,
      height * 0.35,
      10,
      width * 0.5,
      height * 0.5,
      Math.max(width, height) * 0.75
    );
    grad.addColorStop(0, PALETTE.gradStart);
    grad.addColorStop(0.45, PALETTE.gradMid);
    grad.addColorStop(1, PALETTE.gradEnd);

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Multi-colored foil texture specks
    const speckCount = Math.floor(width * height * 0.22);
    for (let i = 0; i < speckCount; i++) {
      const rx = Math.random() * width;
      const ry = Math.random() * height;
      const rand = Math.random();
      let color;
      if (rand < 0.55) {
        color = `rgba(${PALETTE.speckLightRgb}, ${0.35 + Math.random() * 0.55})`;
      } else if (rand < 0.85) {
        color = `rgba(${PALETTE.speckMidRgb}, ${0.4 + Math.random() * 0.5})`;
      } else if (rand < 0.95) {
        color = `rgba(${PALETTE.speckDarkRgb}, ${0.4 + Math.random() * 0.4})`;
      } else {
        color = `rgba(255, 255, 255, ${0.55 + Math.random() * 0.4})`;
      }
      ctx.fillStyle = color;
      const size = Math.random() < 0.92 ? 1 : 1.5;
      ctx.fillRect(rx, ry, size, size);
    }

    // Gilded Sparkle Stars
    for (let i = 0; i < 80; i++) {
      const sx = Math.random() * width;
      const sy = Math.random() * height;
      ctx.fillStyle = `rgba(${PALETTE.sparkleRgb}, ${0.7 + Math.random() * 0.3})`;
      ctx.beginPath();
      ctx.arc(sx, sy, 1.2 + Math.random() * 0.8, 0, Math.PI * 2);
      ctx.fill();
    }

    // Soft Shadow Vignette
    const vignette = ctx.createRadialGradient(
      width / 2,
      height / 2,
      Math.min(width, height) * 0.2,
      width / 2,
      height / 2,
      Math.max(width, height) * 0.7
    );
    vignette.addColorStop(0, "rgba(0,0,0,0)");
    vignette.addColorStop(1, "rgba(0,0,0,0.35)");
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, width, height);
  }, []);

  // Calculate Scratch Coordinates
  const getCoordinates = useCallback((e) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0]?.clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0]?.clientY : e.clientY;
    if (clientX == null || clientY == null) return null;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  }, []);

  // Trigger celebration confetti
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#f6dc97', '#8a1c2d', '#ffffff']
      });
    } catch {
      // fallback
    }
  };

  // Erase Gold Foil
  const scratch = useCallback(
    (e) => {
      if (!isInteracting.current || isRevealed) return;
      if (!isScratching) setIsScratching(true);

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const pt = getCoordinates(e);
      if (!pt) return;

      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineWidth = 44;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      if (lastPoint.current) {
        ctx.beginPath();
        ctx.moveTo(lastPoint.current.x, lastPoint.current.y);
        ctx.lineTo(pt.x, pt.y);
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 22, 0, Math.PI * 2);
        ctx.fill();
      }

      lastPoint.current = pt;

      // Check percentage cleared every few moves
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let transparentPixels = 0;
      const step = 16;
      for (let i = 3; i < imgData.data.length; i += step) {
        if (imgData.data[i] < 180) transparentPixels++;
      }
      const ratio = transparentPixels / (imgData.data.length / step);

      if (ratio >= 0.38) {
        setIsRevealed(true);
        triggerConfetti();
      }
    },
    [getCoordinates, isRevealed, isScratching]
  );

  const startScratching = useCallback(
    (e) => {
      e.preventDefault();
      isInteracting.current = true;
      lastPoint.current = getCoordinates(e);
    },
    [getCoordinates]
  );

  const stopScratching = useCallback(() => {
    isInteracting.current = false;
    lastPoint.current = null;
  }, []);

  return (
    <div className="text-center py-6">
      <HeartClipPath />

      {/* Heading */}
      <div className="mb-6 transition-all duration-700">
        <h2
          className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide"
          style={{ color: PALETTE.titleColor }}
        >
          {isRevealed ? revealText : "Scratch to Reveal"}
        </h2>
        <DecorativeDivider className="my-4" />
      </div>

      {/* Heart Scratch Container */}
      <div
        className="relative mx-auto select-none touch-none cursor-pointer group"
        style={{ width: 280, height: 260 }}
      >
        {/* Heart Drop Shadow Glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none transition-all duration-500"
          style={{
            clipPath: 'url(#royal-heart-clip)',
            WebkitClipPath: 'url(#royal-heart-clip)',
            filter: 'drop-shadow(0 12px 24px rgba(60, 25, 5, 0.35))'
          }}
        />

        {/* Content Container Clipped to Heart */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            clipPath: 'url(#royal-heart-clip)',
            WebkitClipPath: 'url(#royal-heart-clip)'
          }}
        >
          {/* Revealed Secret Content underneath */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
            style={{
              backgroundColor: PALETTE.revealBg,
              backgroundImage:
                'radial-gradient(circle at center, hsla(38, 55%, 98%, 0.95), hsla(38, 45%, 88%, 0.7))'
            }}
          >
            <Heart size={22} className="text-[#8a1c2d] mb-1 animate-pulse" fill="currentColor" />
            <p className="font-cinzel text-xs uppercase tracking-[0.2em] text-[#a5771d] font-medium">
              {formattedDate.day}
            </p>
            <p className="font-cinzel text-xl sm:text-2xl font-bold text-[#241e14] my-1 leading-tight">
              {formattedDate.fullDate}
            </p>
            {formattedDate.time && (
              <p className="font-garamond italic text-sm md:text-base text-[#614d3a]">
                at {formattedDate.time}
              </p>
            )}
            <p className="font-calligraphic text-lg text-[#8a1c2d] mt-1 font-semibold">
              Save Our Date
            </p>
          </div>

          {/* Canvas Gold Foil Layer on top */}
          <canvas
            ref={canvasRef}
            className={`absolute inset-0 w-full h-full cursor-crosshair transition-opacity duration-700 ${
              isRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            onMouseDown={startScratching}
            onMouseMove={scratch}
            onMouseUp={stopScratching}
            onMouseLeave={stopScratching}
            onTouchStart={startScratching}
            onTouchMove={scratch}
            onTouchEnd={stopScratching}
          />

          {/* Hint Overlay when un-scratched */}
          {!isScratching && !isRevealed && (
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-white/95 drop-shadow-md animate-pulse">
              <Sparkles size={24} className="text-[#fff8db] mb-1" />
              <span className="font-cinzel text-xs uppercase tracking-widest font-semibold text-[#fff8db]">
                Scratch Here
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
