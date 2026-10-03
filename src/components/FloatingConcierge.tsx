import React, { useState } from 'react';
import { MessageCircle, Phone, Calendar, Instagram, Facebook, Youtube, X } from 'lucide-react';
import { STUDIO_INFO } from '../data/servicesData';

interface FloatingConciergeProps {
  onOpenBooking: () => void;
  isDarkMode: boolean;
}

export const FloatingConcierge: React.FC<FloatingConciergeProps> = ({ onOpenBooking, isDarkMode }) => {
  const [isSocialMenuOpen, setIsSocialMenuOpen] = useState(false);

  const handleWhatsapp = () => {
    const text = encodeURIComponent(
      "Hello VELICS THE GLOW STUDIO! I would like to enquire about your treatments and consultations."
    );
    window.open(`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-5 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Quick Social & Action Popout Drawer */}
      {isSocialMenuOpen && (
        <div
          className={`flex flex-col gap-2 p-3 rounded-2xl border shadow-2xl backdrop-blur-xl animate-fadeIn mb-1 ${
            isDarkMode
              ? 'bg-[#141417]/95 border-[#D4AF37]/40 shadow-black'
              : 'bg-white/95 border-[#D4AF37]/50 shadow-xl'
          }`}
        >
          <div className="flex items-center justify-between pb-1 border-b border-black/10 dark:border-white/10 px-1">
            <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">
              Instant Connect
            </span>
            <button
              onClick={() => setIsSocialMenuOpen(false)}
              className="p-1 text-xs opacity-60 hover:opacity-100"
              aria-label="Close social menu"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <a
            href={STUDIO_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#833AB4] to-[#F77737] hover:scale-105 transition-transform"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>Instagram</span>
          </a>

          <a
            href={STUDIO_INFO.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-[#1877F2] hover:scale-105 transition-transform"
          >
            <Facebook className="w-3.5 h-3.5 fill-white stroke-none" />
            <span>Facebook</span>
          </a>

          <a
            href={STUDIO_INFO.facebookReel}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-[#C4302B] hover:scale-105 transition-transform"
          >
            <Youtube className="w-3.5 h-3.5 fill-white stroke-none" />
            <span>YouTube Reel</span>
          </a>
        </div>
      )}

      {/* Social Drawer Toggle */}
      <button
        onClick={() => setIsSocialMenuOpen(!isSocialMenuOpen)}
        aria-label="Toggle Social Channels"
        className={`p-3 rounded-full border transition-all hover:scale-110 shadow-lg cursor-pointer ${
          isSocialMenuOpen
            ? 'bg-[#D4AF37] text-[#0B0B0C] border-[#D4AF37]'
            : isDarkMode
            ? 'bg-[#141417]/90 border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37]/15'
            : 'bg-white/90 border-[#AA820A]/40 text-[#AA820A] hover:bg-[#AA820A]/10 shadow-md'
        }`}
        title="Social Media Channels"
      >
        <span className="text-xs font-bold uppercase tracking-wider px-1">★ Socials</span>
      </button>

      {/* Phone Call button */}
      <a
        href={`tel:${STUDIO_INFO.phone}`}
        aria-label="Direct Studio Phone Call"
        className={`p-3.5 rounded-full border transition-all hover:scale-110 shadow-xl backdrop-blur-md ${
          isDarkMode
            ? 'bg-[#141417]/95 border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0B0C]'
            : 'bg-white border-[#AA820A]/50 text-[#AA820A] hover:bg-[#AA820A] hover:text-white shadow-lg'
        }`}
        title={`Call ${STUDIO_INFO.phoneDisplay}`}
      >
        <Phone className="w-4 h-4" />
      </a>

      {/* Appointment shortcut button */}
      <button
        onClick={onOpenBooking}
        aria-label="Quick Booking"
        className={`p-3.5 rounded-full border transition-all hover:scale-110 shadow-xl backdrop-blur-md cursor-pointer ${
          isDarkMode
            ? 'bg-[#141417]/95 border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0B0C]'
            : 'bg-white border-[#AA820A]/50 text-[#AA820A] hover:bg-[#AA820A] hover:text-white shadow-lg'
        }`}
        title="Book Appointment"
      >
        <Calendar className="w-4 h-4" />
      </button>

      {/* WhatsApp Button with pulse ring */}
      <div className="relative group">
        <div className="absolute -inset-1 rounded-full bg-[#25D366]/40 blur-sm animate-pulse" />
        <button
          onClick={handleWhatsapp}
          aria-label="Chat with Velics Studio Concierge on WhatsApp"
          className="relative p-4 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba5a] transition-all hover:scale-110 flex items-center justify-center cursor-pointer active:scale-95"
          title="WhatsApp Concierge"
        >
          <MessageCircle className="w-6 h-6 fill-white stroke-none" />
        </button>
      </div>
    </div>
  );
};
