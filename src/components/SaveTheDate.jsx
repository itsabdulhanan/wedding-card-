import React, { useState } from 'react';
import { Calendar, Check, Download, ExternalLink } from 'lucide-react';

export const SaveTheDate = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedStatus, setCopiedStatus] = useState(false);

  const groom = data.groomName || "Usama Zafar";
  const bride = data.brideName || "Ayesha Arshad";
  const title = `Wedding of ${groom} & ${bride}`;
  const venue = [data.venueName, data.venueAddress].filter(Boolean).join(", ") || "Qasar-e-Noor, Chichawatni";
  const dateStr = data.weddingDate || "2026-11-14";
  const timeStr = data.weddingTime || "17:00";

  // Parse start & end times
  const startDate = new Date(`${dateStr}T${timeStr}:00`);
  const endDate = new Date(startDate.getTime() + 4 * 60 * 60 * 1000); // 4 hours

  const formatIsoForCalendar = (d) => {
    return d.toISOString().replace(/-|:|\.\d\d\d/g, '');
  };

  const startIso = isNaN(startDate.getTime()) ? "20260615T170000Z" : formatIsoForCalendar(startDate);
  const endIso = isNaN(endDate.getTime()) ? "20260615T210000Z" : formatIsoForCalendar(endDate);

  const handleCalendar = (type) => {
    const details = `Celebrate the special wedding ceremony of ${groom} & ${bride}!`;
    const encodedTitle = encodeURIComponent(title);
    const encodedVenue = encodeURIComponent(venue);
    const encodedDetails = encodeURIComponent(details);

    if (type === 'google') {
      const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodedTitle}&dates=${startIso}/${endIso}&details=${encodedDetails}&location=${encodedVenue}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    } else if (type === 'outlook') {
      const url = `https://outlook.office.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=${encodedTitle}&startdt=${startDate.toISOString()}&enddt=${endDate.toISOString()}&body=${encodedDetails}&location=${encodedVenue}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    } else if (type === 'yahoo') {
      const url = `https://calendar.yahoo.com/?v=60&title=${encodedTitle}&st=${startIso}&et=${endIso}&desc=${encodedDetails}&in_loc=${encodedVenue}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    } else if (type === 'ics') {
      const icsData = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Zareqia//Royal Elegance Invitation//EN',
        'BEGIN:VEVENT',
        `SUMMARY:${title}`,
        `DESCRIPTION:${details}`,
        `LOCATION:${venue}`,
        `DTSTART:${startIso}`,
        `DTEND:${endIso}`,
        'STATUS:CONFIRMED',
        'END:VEVENT',
        'END:VCALENDAR'
      ].join('\r\n');

      const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute('download', `${groom}_and_${bride}_Wedding.ics`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    setCopiedStatus(true);
    setTimeout(() => {
      setCopiedStatus(false);
      setIsOpen(false);
    }, 2000);
  };

  return (
    <div className="mt-8 flex flex-col items-center relative z-20">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group inline-flex items-center gap-2.5 rounded-full px-7 py-3 text-xs md:text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300 shadow-xl hover:scale-105 active:scale-95"
        style={{
          background: 'linear-gradient(135deg, #a5771d 0%, #d4af37 100%)',
          color: '#fff',
          boxShadow: '0 10px 28px -6px rgba(165, 119, 29, 0.45)'
        }}
        aria-expanded={isOpen}
      >
        {copiedStatus ? (
          <>
            <Check size={16} className="text-white animate-bounce" />
            <span>Date Added!</span>
          </>
        ) : (
          <>
            <Calendar size={16} className="text-white" />
            <span>Save the Date</span>
          </>
        )}
      </button>

      {/* Calendar Provider Dropdown */}
      {isOpen && (
        <div className="absolute top-14 mt-2 w-64 rounded-xl bg-white/95 border border-[#a5771d]/30 shadow-2xl p-2.5 backdrop-blur-md z-50 text-left animate-fadeIn">
          <div className="px-3 py-1.5 border-b border-gray-100 text-[11px] font-cinzel text-gray-500 uppercase tracking-wider">
            Choose Your Calendar
          </div>
          <div className="py-1">
            <button
              onClick={() => handleCalendar('google')}
              className="w-full flex items-center justify-between px-3 py-2 text-xs text-gray-800 hover:bg-[#d4af37]/15 rounded-lg transition-colors"
            >
              <span>Google Calendar</span>
              <ExternalLink size={12} className="text-gray-400" />
            </button>
            <button
              onClick={() => handleCalendar('outlook')}
              className="w-full flex items-center justify-between px-3 py-2 text-xs text-gray-800 hover:bg-[#d4af37]/15 rounded-lg transition-colors"
            >
              <span>Outlook / Office 365</span>
              <ExternalLink size={12} className="text-gray-400" />
            </button>
            <button
              onClick={() => handleCalendar('yahoo')}
              className="w-full flex items-center justify-between px-3 py-2 text-xs text-gray-800 hover:bg-[#d4af37]/15 rounded-lg transition-colors"
            >
              <span>Yahoo Calendar</span>
              <ExternalLink size={12} className="text-gray-400" />
            </button>
            <button
              onClick={() => handleCalendar('ics')}
              className="w-full flex items-center justify-between px-3 py-2 text-xs text-gray-800 hover:bg-[#d4af37]/15 rounded-lg transition-colors font-medium text-[#a5771d]"
            >
              <span>Apple / Download .ics</span>
              <Download size={12} className="text-[#a5771d]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
