import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Volume1, Play, Pause, SkipForward, SkipBack, Music } from 'lucide-react';

export const WEDDING_TRACKS = [
  {
    id: 'veerey',
    title: 'Veerey Di Wedding',
    subtitle: 'Mika Singh • Bollywood Special',
    src: '/music/veerey.mp3'
  },
  {
    id: 'track1',
    title: 'Royal Wedding Celebration',
    subtitle: 'Special Celebration Song',
    src: '/music/track1.mp3'
  }
];

export const resolveTrack = (trackId) => {
  if (!trackId) return WEDDING_TRACKS[0];
  const found = WEDDING_TRACKS.find(
    (t) => t.id === trackId || t.src === trackId || t.title.toLowerCase().includes(String(trackId).toLowerCase())
  );
  return found || WEDDING_TRACKS[0];
};

export const FloatingMusicPlayer = ({
  autoPlay = false,
  selectedTrack = 'veerey',
  onTrackChange,
  audioRef: externalAudioRef
}) => {
  const internalAudioRef = useRef(null);
  const audioRef = externalAudioRef || internalAudioRef;

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.85);
  const [showControls, setShowControls] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const activeTrack = resolveTrack(selectedTrack);
  const currentTrackIndex = WEDDING_TRACKS.findIndex((t) => t.id === activeTrack.id);

  // Sync volume with audio element
  useEffect(() => {
    const audio = audioRef?.current;
    if (audio) {
      audio.volume = volume;
    }
  }, [volume, audioRef]);

  // Handle track source update
  useEffect(() => {
    const audio = audioRef?.current;
    if (!audio) return;

    const currentSource = audio.currentSrc || audio.src;
    if (!currentSource.endsWith(activeTrack.src)) {
      const wasPlaying = !audio.paused;
      audio.src = activeTrack.src;
      audio.load();
      if (wasPlaying || isPlaying) {
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.warn("Playback prevented after track change:", err);
        });
      }
    }
  }, [activeTrack.src, isPlaying, audioRef]);

  // Toggle play/pause
  const toggleSound = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const audio = audioRef?.current;
    if (!audio) return;

    if (audio.paused) {
      audio.muted = false;
      audio.volume = volume || 0.85;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsMuted(false);
          })
          .catch((e) => {
            console.warn("Audio play error:", e);
          });
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  // Toggle Mute
  const toggleMute = (e) => {
    if (e) e.stopPropagation();
    const audio = audioRef?.current;
    if (!audio) return;
    const nextMuteState = !audio.muted;
    audio.muted = nextMuteState;
    setIsMuted(nextMuteState);
  };

  // Synchronize when autoPlay changes from parent
  useEffect(() => {
    const audio = audioRef?.current;
    if (!audio) return;

    if (autoPlay && audio.paused) {
      audio.muted = false;
      audio.play().then(() => {
        setIsPlaying(true);
        setIsMuted(false);
      }).catch((e) => {
        console.warn("Autoplay prevented by browser:", e);
      });
    }
  }, [autoPlay, audioRef]);

  // First user interaction auto-unlock listener
  useEffect(() => {
    const handleFirstGesture = () => {
      if (hasInteracted) return;
      setHasInteracted(true);

      const audio = audioRef?.current;
      if (audio && autoPlay && audio.paused) {
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {});
      }
    };

    window.addEventListener('click', handleFirstGesture, { passive: true, once: true });
    window.addEventListener('touchstart', handleFirstGesture, { passive: true, once: true });

    return () => {
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
    };
  }, [autoPlay, hasInteracted, audioRef]);

  return (
    <>
      {/* Audio element */}
      <audio
        ref={audioRef}
        src={activeTrack.src}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onVolumeChange={(e) => {
          setIsMuted(e.currentTarget.muted);
          setVolume(e.currentTarget.volume);
        }}
        onError={(e) => {
          console.warn("Audio element error:", e);
        }}
      />

      {/* Floating Glassmorphic Audio Controller (Top Right) */}
      <div 
        className="fixed top-4 right-4 z-50 flex items-center gap-2 group"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        {/* Expanded Controls Popup */}
        <div
          className={`flex items-center gap-2 bg-[#1c0f0a]/95 text-[#f5e6c8] border border-[#d4af37]/40 shadow-2xl backdrop-blur-md px-3 py-1.5 rounded-full transition-all duration-300 ${
            showControls ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-3 pointer-events-none md:opacity-0'
          }`}
        >
          {/* Track Info */}
          <div className="flex flex-col text-left max-w-[130px] sm:max-w-[170px] overflow-hidden whitespace-nowrap">
            <span className="font-cinzel text-[10px] font-semibold text-[#d4af37] truncate">
              {activeTrack.title}
            </span>
            <span className="font-garamond italic text-[9px] text-[#f5e6c8]/80 truncate">
              {activeTrack.subtitle}
            </span>
          </div>

          {/* Divider */}
          <div className="h-4 w-[1px] bg-[#d4af37]/30" />

          {/* Mute Toggle */}
          <button
            onClick={toggleMute}
            className="p-1 rounded-full text-[#d4af37] hover:bg-[#d4af37]/20 transition-colors"
            title={isMuted ? "Unmute" : "Mute"}
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX size={13} /> : volume > 0.5 ? <Volume2 size={13} /> : <Volume1 size={13} />}
          </button>

          {/* Mini Volume Slider */}
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={(e) => {
              const val = parseFloat(e.target.value);
              setVolume(val);
              if (audioRef?.current) {
                audioRef.current.volume = val;
                audioRef.current.muted = val === 0;
              }
            }}
            className="w-14 h-1 accent-[#d4af37] bg-white/20 rounded-lg cursor-pointer appearance-none"
            title="Volume Slider"
          />
        </div>

        {/* Main Floating Audio Pill / Toggle Button */}
        <button
          onClick={toggleSound}
          className={`relative flex items-center gap-2 px-3.5 py-2 rounded-full border shadow-xl backdrop-blur-md transition-all duration-300 select-none ${
            isPlaying && !isMuted
              ? 'bg-[#1c0f0a]/90 border-[#d4af37] text-[#d4af37] ring-2 ring-[#d4af37]/40 shadow-[0_0_18px_rgba(212,175,55,0.4)] hover:scale-105'
              : 'bg-white/90 border-[#a5771d]/30 text-[#4a3f35] hover:bg-white hover:text-[#1c0f0a] hover:scale-105'
          }`}
          title={isPlaying ? `Pause Song (${activeTrack.title})` : `Play Song (${activeTrack.title})`}
          aria-label={isPlaying ? "Pause Music" : "Play Music"}
        >
          {isPlaying && !isMuted ? (
            <>
              {/* Animated Equalizer Waves */}
              <div className="flex items-center gap-[2.5px] h-3.5">
                <span className="w-[3px] bg-[#d4af37] rounded-full animate-bounce [animation-delay:0ms] h-full" />
                <span className="w-[3px] bg-[#d4af37] rounded-full animate-bounce [animation-delay:150ms] h-2/3" />
                <span className="w-[3px] bg-[#d4af37] rounded-full animate-bounce [animation-delay:300ms] h-4/5" />
                <span className="w-[3px] bg-[#d4af37] rounded-full animate-bounce [animation-delay:450ms] h-1/2" />
              </div>
              <span className="font-cinzel text-xs tracking-wider uppercase hidden sm:inline text-[#f5e6c8]">
                Playing
              </span>
              <Volume2 size={16} className="text-[#d4af37] animate-pulse" />
            </>
          ) : (
            <>
              <VolumeX size={16} className="opacity-75 text-gray-600" />
              <span className="font-cinzel text-xs tracking-wider uppercase hidden sm:inline text-gray-700 font-medium">
                Play Music
              </span>
            </>
          )}
        </button>
      </div>
    </>
  );
};
