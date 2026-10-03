import React from 'react';
import { Phone, MessageCircle, Instagram, Facebook, Youtube } from 'lucide-react';
import { STUDIO_INFO } from '../data/servicesData';

interface SocialMediaBarProps {
  isDarkMode: boolean;
}

export const SocialMediaBar: React.FC<SocialMediaBarProps> = ({ isDarkMode }) => {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`p-6 sm:p-8 rounded-3xl border transition-all shadow-xl ${
            isDarkMode
              ? 'bg-[#121215] border-[#D4AF37]/25'
              : 'bg-white border-[#D4AF37]/35 shadow-lg'
          }`}
        >
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block mb-1">
              Connect & Engage
            </span>
            <h3
              className={`text-xl sm:text-2xl font-serif-brand font-bold ${
                isDarkMode ? 'text-[#F7F6F3]' : 'text-[#141416]'
              }`}
            >
              Follow Our Official Channels & Daily Glow Reels
            </h3>
            <p className={`text-xs mt-1 ${isDarkMode ? 'text-[#A39E93]' : 'text-[#666]'}`}>
              Watch real client transformations, behind-the-scenes clinical suites, and live skincare tips.
            </p>
          </div>

          {/* Social Pills Container matching Screenshot 1 */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            {/* 1. INSTAGRAM */}
            <a
              href={STUDIO_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-white text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-95"
            >
              <Instagram className="w-4 h-4" />
              <span>INSTAGRAM</span>
            </a>

            {/* 2. FACEBOOK */}
            <a
              href={STUDIO_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-white text-xs font-bold uppercase tracking-wider bg-[#1877F2] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-95"
            >
              <Facebook className="w-4 h-4 fill-white stroke-none" />
              <span>FACEBOOK</span>
            </a>

            {/* 3. X (TWITTER) */}
            <a
              href={STUDIO_INFO.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-white text-xs font-bold uppercase tracking-wider bg-[#1A1F2C] border border-white/20 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-95"
            >
              {/* X Icon SVG */}
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>X (TWITTER)</span>
            </a>

            {/* 4. YOUTUBE (with requested Reel URL) */}
            <a
              href={STUDIO_INFO.facebookReel}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-white text-xs font-bold uppercase tracking-wider bg-[#C4302B] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-95"
              title="Watch Featured Transformation Reel"
            >
              <Youtube className="w-4 h-4 fill-white stroke-none" />
              <span>YOUTUBE / REEL</span>
            </a>

            {/* 5. WhatsApp Chat */}
            <a
              href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent("Hello VELICS THE GLOW STUDIO!")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-white text-xs font-bold uppercase tracking-wider bg-[#25D366] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white stroke-none" />
              <span>WhatsApp Chat</span>
            </a>

            {/* 6. Call Store */}
            <a
              href={`tel:${STUDIO_INFO.phone}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-white text-xs font-bold uppercase tracking-wider bg-[#9E2A3B] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-95"
            >
              <Phone className="w-4 h-4 fill-white stroke-none" />
              <span>Call Store</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
