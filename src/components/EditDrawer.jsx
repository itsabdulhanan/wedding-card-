import React, { useState } from 'react';
import { Sliders, X, RotateCcw, Check, Music2, Calendar, MapPin, Heart } from 'lucide-react';

export const EditDrawer = ({ data, setData, defaultData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const presets = [
    {
      label: "Usama & Ayesha (Official)",
      groomName: "Usama",
      brideName: "Ayesha",
      groomSubText: "Son of Mr. & Mrs. Muhammad Zafar",
      brideSubText: "Daughter of Mr. & Mrs. Qazi Hafiz Arshad",
      weddingDate: "2026-11-14",
      weddingTime: "17:00",
      venueName: "Qasar-e-Noor",
      venueAddress: "Chichawatni, Sahiwal, Punjab, Pakistan",
      googleMapsLink: "https://maps.app.goo.gl/XFaPedhgGJrZPoGB7",
      message: "WE'RE GETTING MARRIED"
    },
    {
      label: "Fazil & Zoya (Demo)",
      groomName: "Fazil",
      brideName: "Zoya",
      groomSubText: "Son of Mr. & Mrs. Khan",
      brideSubText: "Daughter of Mr. & Mrs. Ahmed",
      weddingDate: "2026-11-14",
      weddingTime: "17:00",
      venueName: "Qasar-e-Noor",
      venueAddress: "Chichawatni, Sahiwal, Punjab, Pakistan",
      googleMapsLink: "https://maps.app.goo.gl/XFaPedhgGJrZPoGB7",
      message: "WE'RE GETTING MARRIED"
    },
    {
      label: "Sam & Sofía (Classic)",
      groomName: "Sam",
      brideName: "Sofía",
      groomSubText: "",
      brideSubText: "",
      weddingDate: "2026-11-14",
      weddingTime: "17:00",
      venueName: "Qasar-e-Noor",
      venueAddress: "Chichawatni, Sahiwal, Punjab, Pakistan",
      googleMapsLink: "https://maps.app.goo.gl/XFaPedhgGJrZPoGB7",
      message: "WE'RE GETTING MARRIED"
    }
  ];

  const applyPreset = (preset) => {
    setData((prev) => ({
      ...prev,
      ...preset
    }));
  };

  const handleReset = () => {
    setData(defaultData);
  };

  return (
    <>
      {/* Floating Customize Toggle Button (Top Left) */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/85 text-[#241e14] border border-[#a5771d]/40 shadow-lg backdrop-blur-md text-xs font-cinzel tracking-wider font-semibold hover:bg-white transition-all hover:scale-105 active:scale-95"
          title="Customize Invitation Details"
        >
          <Sliders size={14} className="text-[#a5771d]" />
          <span>Customize</span>
        </button>
      </div>

      {/* Slide-over Drawer / Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div
            className="w-full max-w-md h-full bg-[#fdfbf7] border-l border-[#a5771d]/30 shadow-2xl p-6 overflow-y-auto flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#a5771d]/20 mb-6">
                <div>
                  <h3 className="font-cinzel text-xl font-bold text-[#a5771d]">
                    Customize Invitation
                  </h3>
                  <p className="text-xs text-[#614d3a] font-garamond italic">
                    Edit names, dates & details in real-time
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Preset Buttons */}
              <div className="mb-6">
                <label className="block text-[11px] font-cinzel uppercase tracking-widest text-[#241e14] font-semibold mb-2">
                  Quick Name Presets:
                </label>
                <div className="flex flex-wrap gap-2">
                  {presets.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => applyPreset(p)}
                      className="px-2.5 py-1 rounded-lg border border-[#a5771d]/30 bg-white text-[11px] font-cinzel text-[#a5771d] hover:bg-[#a5771d]/10 transition-colors"
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4 text-xs font-cinzel">
                {/* Groom Name */}
                <div>
                  <label className="block uppercase tracking-wider text-gray-700 font-semibold mb-1">
                    Groom Name
                  </label>
                  <input
                    type="text"
                    value={data.groomName}
                    onChange={(e) => setData({ ...data, groomName: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white font-sans text-sm focus:outline-none focus:ring-1 focus:ring-[#a5771d]"
                  />
                </div>

                {/* Groom Subtext */}
                <div>
                  <label className="block uppercase tracking-wider text-gray-700 font-semibold mb-1">
                    Groom Subtext (Optional)
                  </label>
                  <input
                    type="text"
                    value={data.groomSubText || ''}
                    onChange={(e) => setData({ ...data, groomSubText: e.target.value })}
                    placeholder="e.g. Son of Mr. & Mrs. Muhammad Zafar"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white font-sans text-sm focus:outline-none focus:ring-1 focus:ring-[#a5771d]"
                  />
                </div>

                {/* Bride Name */}
                <div>
                  <label className="block uppercase tracking-wider text-gray-700 font-semibold mb-1">
                    Bride Name
                  </label>
                  <input
                    type="text"
                    value={data.brideName}
                    onChange={(e) => setData({ ...data, brideName: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white font-sans text-sm focus:outline-none focus:ring-1 focus:ring-[#a5771d]"
                  />
                </div>

                {/* Bride Subtext */}
                <div>
                  <label className="block uppercase tracking-wider text-gray-700 font-semibold mb-1">
                    Bride Subtext (Optional)
                  </label>
                  <input
                    type="text"
                    value={data.brideSubText || ''}
                    onChange={(e) => setData({ ...data, brideSubText: e.target.value })}
                    placeholder="e.g. Daughter of Mr. & Mrs. Qazi Hafiz Arshad"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white font-sans text-sm focus:outline-none focus:ring-1 focus:ring-[#a5771d]"
                  />
                </div>

                {/* Wedding Date & Time */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block uppercase tracking-wider text-gray-700 font-semibold mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      value={data.weddingDate}
                      onChange={(e) => setData({ ...data, weddingDate: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white font-sans text-sm focus:outline-none focus:ring-1 focus:ring-[#a5771d]"
                    />
                  </div>
                  <div>
                    <label className="block uppercase tracking-wider text-gray-700 font-semibold mb-1">
                      Time
                    </label>
                    <input
                      type="time"
                      value={data.weddingTime}
                      onChange={(e) => setData({ ...data, weddingTime: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white font-sans text-sm focus:outline-none focus:ring-1 focus:ring-[#a5771d]"
                    />
                  </div>
                </div>

                {/* Venue Name */}
                <div>
                  <label className="block uppercase tracking-wider text-gray-700 font-semibold mb-1">
                    Venue Name
                  </label>
                  <input
                    type="text"
                    value={data.venueName}
                    onChange={(e) => setData({ ...data, venueName: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white font-sans text-sm focus:outline-none focus:ring-1 focus:ring-[#a5771d]"
                  />
                </div>

                {/* Venue Address */}
                <div>
                  <label className="block uppercase tracking-wider text-gray-700 font-semibold mb-1">
                    Venue Address
                  </label>
                  <input
                    type="text"
                    value={data.venueAddress}
                    onChange={(e) => setData({ ...data, venueAddress: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white font-sans text-sm focus:outline-none focus:ring-1 focus:ring-[#a5771d]"
                  />
                </div>

                {/* Google Maps Link */}
                <div>
                  <label className="block uppercase tracking-wider text-gray-700 font-semibold mb-1">
                    Google Maps URL
                  </label>
                  <input
                    type="url"
                    value={data.googleMapsLink || ''}
                    onChange={(e) => setData({ ...data, googleMapsLink: e.target.value })}
                    placeholder="https://maps.app.goo.gl/..."
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white font-sans text-sm focus:outline-none focus:ring-1 focus:ring-[#a5771d]"
                  />
                </div>

                {/* Music Track */}
                <div>
                  <label className="block uppercase tracking-wider text-gray-700 font-semibold mb-1">
                    Background Wedding Music
                  </label>
                  <select
                    value={data.musicTrack || 'veerey'}
                    onChange={(e) => setData({ ...data, musicTrack: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white font-sans text-sm focus:outline-none focus:ring-1 focus:ring-[#a5771d]"
                  >
                    <option value="veerey">Veerey Di Wedding (Mika Singh)</option>
                    <option value="track1">Royal Wedding Celebration</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Footer actions */}
            <div className="pt-6 border-t border-gray-200 flex gap-3 mt-6">
              <button
                type="button"
                onClick={handleReset}
                className="flex-1 py-2.5 rounded-xl border border-gray-300 text-gray-700 font-cinzel text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-gray-100"
              >
                <RotateCcw size={14} /> Reset
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex-1 py-2.5 rounded-xl bg-[#a5771d] text-white font-cinzel text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md hover:bg-[#8e6517]"
              >
                <Check size={14} /> Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
