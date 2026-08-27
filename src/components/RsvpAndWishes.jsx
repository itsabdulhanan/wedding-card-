import React, { useState, useEffect } from 'react';
import { Mail, CheckCircle, Send, Heart, User, Users } from 'lucide-react';
import { DecorativeDivider, CornerFlourish } from './DecorativeSVGs';
import confetti from 'canvas-confetti';

export const RsvpAndWishes = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes',
    guestCount: '1',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [wishes, setWishes] = useState([]);

  // Load existing wishes from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('wedding_wishes_usama_ayesha');
      if (stored) {
        setWishes(JSON.parse(stored));
      } else {
        // Initial sample wishes
        const initial = [
          {
            name: "Hamza & Zara",
            message: "Heartiest congratulations to Usama and Ayesha! May Allah bless your union with eternal love, joy, and peace.",
            time: "Yesterday"
          },
          {
            name: "Uncle Tariq & Family",
            message: "Wishing you both a lifetime of happiness and beautiful memories together. Looking forward to celebrating!",
            time: "2 days ago"
          }
        ];
        setWishes(initial);
      }
    } catch {
      // fallback
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    const newWish = {
      name: formData.name,
      message: formData.message || (formData.attending === 'yes' ? "Looking forward to celebrating with you!" : "Warmest wishes to the happy couple!"),
      time: "Just now",
      attending: formData.attending,
      guestCount: formData.guestCount
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    try {
      localStorage.setItem('wedding_wishes_usama_ayesha', JSON.stringify(updated));
    } catch {
      // ignore
    }

    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#d4af37', '#8a1c2d', '#f6dc97']
      });
    } catch {}
  };

  return (
    <div className="max-w-2xl mx-auto py-8 relative">
      {/* Corner Ornaments */}
      <CornerFlourish className="absolute bottom-2 left-2 w-16 h-16 text-[#a5771d] opacity-20 -scale-y-100 pointer-events-none" />
      <CornerFlourish className="absolute bottom-2 right-2 w-16 h-16 text-[#a5771d] opacity-20 -scale-x-100 -scale-y-100 pointer-events-none" />

      <div className="text-center mb-8">
        <Mail className="mx-auto text-[#a5771d] mb-3" size={28} />
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-[#a5771d] font-semibold tracking-wide mb-2">
          RSVP & Wishes
        </h2>
        <DecorativeDivider className="my-4" />
      </div>

      {/* RSVP Form / Success Card */}
      {isSubmitted ? (
        <div className="p-8 rounded-2xl bg-white/85 border border-[#a5771d]/30 shadow-elegant text-center backdrop-blur-md animate-fadeIn max-w-md mx-auto">
          <CheckCircle size={44} className="text-[#a5771d] mx-auto mb-3 animate-bounce" />
          <h3 className="font-cinzel text-2xl font-bold text-[#241e14] mb-2">
            RSVP Received!
          </h3>
          <p className="text-[#614d3a] font-garamond italic text-base">
            Thank you for your response and heartfelt blessings. The couple will receive your message.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: '', email: '', attending: 'yes', guestCount: '1', message: '' });
            }}
            className="mt-6 inline-flex items-center gap-1.5 px-5 py-2 rounded-full border border-[#a5771d]/40 text-xs font-cinzel tracking-wider text-[#a5771d] hover:bg-[#d4af37]/10 transition-colors"
          >
            Submit Another Message
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto space-y-4 p-6 sm:p-8 rounded-2xl bg-white/75 border border-[#a5771d]/25 shadow-elegant backdrop-blur-md"
        >
          {/* Name */}
          <div>
            <label className="block text-xs font-cinzel uppercase tracking-widest text-[#241e14] font-semibold mb-1.5">
              Your Name *
            </label>
            <div className="relative">
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your full name"
                className="w-full px-4 py-2.5 rounded-xl border border-[#a5771d]/30 bg-white/90 text-sm text-[#241e14] focus:outline-none focus:ring-2 focus:ring-[#a5771d]/50"
              />
              <User size={16} className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-cinzel uppercase tracking-widest text-[#241e14] font-semibold mb-1.5">
              Email *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 rounded-xl border border-[#a5771d]/30 bg-white/90 text-sm text-[#241e14] focus:outline-none focus:ring-2 focus:ring-[#a5771d]/50"
            />
          </div>

          {/* Attending Radio */}
          <div>
            <label className="block text-xs font-cinzel uppercase tracking-widest text-[#241e14] font-semibold mb-2">
              Will you be attending? *
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label
                className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border cursor-pointer text-xs font-cinzel transition-all ${
                  formData.attending === 'yes'
                    ? 'border-[#a5771d] bg-[#a5771d]/15 text-[#a5771d] font-bold shadow-sm'
                    : 'border-gray-200 bg-white/60 text-gray-600'
                }`}
              >
                <input
                  type="radio"
                  name="attending"
                  value="yes"
                  checked={formData.attending === 'yes'}
                  onChange={() => setFormData({ ...formData, attending: 'yes' })}
                  className="hidden"
                />
                <span>Joyfully Accept</span>
              </label>

              <label
                className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border cursor-pointer text-xs font-cinzel transition-all ${
                  formData.attending === 'no'
                    ? 'border-[#8a1c2d] bg-[#8a1c2d]/15 text-[#8a1c2d] font-bold shadow-sm'
                    : 'border-gray-200 bg-white/60 text-gray-600'
                }`}
              >
                <input
                  type="radio"
                  name="attending"
                  value="no"
                  checked={formData.attending === 'no'}
                  onChange={() => setFormData({ ...formData, attending: 'no' })}
                  className="hidden"
                />
                <span>Regretfully Decline</span>
              </label>
            </div>
          </div>

          {/* Guests Count (if attending) */}
          {formData.attending === 'yes' && (
            <div>
              <label className="block text-xs font-cinzel uppercase tracking-widest text-[#241e14] font-semibold mb-1.5">
                Number of Guests
              </label>
              <div className="relative">
                <select
                  value={formData.guestCount}
                  onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#a5771d]/30 bg-white/90 text-sm text-[#241e14] focus:outline-none focus:ring-2 focus:ring-[#a5771d]/50"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5+ Guests</option>
                </select>
                <Users size={16} className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
              </div>
            </div>
          )}

          {/* Message / Wishes */}
          <div>
            <label className="block text-xs font-cinzel uppercase tracking-widest text-[#241e14] font-semibold mb-1.5">
              Your Wishes & Blessings
            </label>
            <textarea
              rows="3"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Write your wishes for Usama & Ayesha..."
              className="w-full px-4 py-2.5 rounded-xl border border-[#a5771d]/30 bg-white/90 text-sm text-[#241e14] focus:outline-none focus:ring-2 focus:ring-[#a5771d]/50 resize-none font-garamond italic text-base"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300 shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
            style={{
              background: 'linear-gradient(135deg, #a5771d 0%, #d4af37 100%)',
              color: '#fff',
              boxShadow: '0 8px 24px -6px rgba(165, 119, 29, 0.45)'
            }}
          >
            <Send size={15} />
            <span>Send RSVP & Wishes</span>
          </button>
        </form>
      )}

      {/* Guest Wishes Wall */}
      {wishes.length > 0 && (
        <div className="mt-12 max-w-lg mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Heart size={16} className="text-[#8a1c2d]" fill="currentColor" />
            <h4 className="font-cinzel text-base uppercase tracking-widest text-[#a5771d] font-bold">
              Guest Blessings Wall
            </h4>
          </div>

          <div className="space-y-3">
            {wishes.slice(0, 6).map((w, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/60 border border-[#a5771d]/20 backdrop-blur-sm transition-all hover:bg-white/80"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-cinzel text-sm font-bold text-[#241e14]">
                    {w.name}
                  </span>
                  <span className="text-[10px] text-gray-500">{w.time}</span>
                </div>
                <p className="text-sm font-garamond italic text-[#614d3a] leading-relaxed">
                  "{w.message}"
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
