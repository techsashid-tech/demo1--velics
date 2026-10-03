import React from 'react';
import { Phone, MapPin, Instagram, Facebook, Youtube, MessageCircle, Code2 } from 'lucide-react';
import { STUDIO_INFO } from '../data/servicesData';

interface FooterProps {
  onOpenBooking: () => void;
  isDarkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, isDarkMode }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      className={`border-t pt-16 pb-12 transition-colors duration-300 ${
        isDarkMode
          ? 'bg-[#080809] border-[#D4AF37]/20 text-[#A39E93]'
          : 'bg-[#EDEAE1] border-[#D4AF37]/30 text-[#555]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col">
              <span
                className={`text-2xl font-serif-brand font-bold tracking-[0.25em] ${
                  isDarkMode ? 'text-[#F7F6F3]' : 'text-[#141416]'
                }`}
              >
                VELICS
              </span>
              <span className="text-[10px] tracking-[0.35em] text-[#D4AF37] uppercase font-bold">
                The Glow Studio
              </span>
            </div>
            <p className="text-xs leading-relaxed max-w-sm">
              One destination in Bhubaneswar for complete beauty transformation across Skin, Hair, Aesthetics, and Wellness. Experience medical-grade clinical precision enveloped in tranquil luxury.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={STUDIO_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-full border transition-all hover:scale-110 ${
                  isDarkMode
                    ? 'border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37]'
                    : 'border-black/10 hover:border-[#AA820A] hover:text-[#AA820A] bg-white'
                }`}
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={STUDIO_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-full border transition-all hover:scale-110 ${
                  isDarkMode
                    ? 'border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37]'
                    : 'border-black/10 hover:border-[#AA820A] hover:text-[#AA820A] bg-white'
                }`}
                aria-label="Facebook Profile"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={STUDIO_INFO.facebookReel}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-full border transition-all hover:scale-110 ${
                  isDarkMode
                    ? 'border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37]'
                    : 'border-black/10 hover:border-[#AA820A] hover:text-[#AA820A] bg-white'
                }`}
                aria-label="YouTube / Facebook Reel"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${STUDIO_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-full border transition-all hover:scale-110 ${
                  isDarkMode
                    ? 'border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/15'
                    : 'border-[#25D366]/60 text-[#25D366] bg-white hover:bg-[#25D366]/10'
                }`}
                aria-label="WhatsApp Chat"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold mb-4">
              Explore Studio
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => scrollTo('home')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Overview & Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  All 13 Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('skincare')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  5-Step Glow Routine
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('experience')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  The Velics Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('gallery')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  3D Perspective Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('reviews')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Client Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('tools')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Free Skin & Beauty Tools
                </button>
              </li>
            </ul>
          </div>

          {/* Featured Treatments */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold mb-4">
              Signature Treatments
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Hydrafacial MD
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Laser Hair Reduction
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Botox & Dermal Sculpting
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  PRP Follicle Therapy
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  IV Wellness Glutathione
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  High-Definition Bridal
                </button>
              </li>
            </ul>
          </div>

          {/* Studio Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold mb-4">
              Chandrasekharpur Studio
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <p>{STUDIO_INFO.shortAddress}</p>
              <p>
                <a
                  href={`tel:${STUDIO_INFO.phone}`}
                  className="text-[#D4AF37] hover:underline font-bold tabular-nums"
                >
                  {STUDIO_INFO.phoneDisplay}
                </a>
              </p>
              <p className="opacity-80">Daily: 9:00 AM – 8:00 PM</p>
              <button
                onClick={onOpenBooking}
                className="mt-2 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider text-[#0B0B0C] bg-[#D4AF37] hover:brightness-110 shadow-sm cursor-pointer"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Developer Signature */}
        <div className="pt-8 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-75">
            © 2026 VELICS THE GLOW STUDIO. All rights reserved. Registered Beauty & Aesthetic Studio in Bhubaneswar.
          </p>

          {/* S K DAS Developer Badge from source document */}
          <a
            href={`tel:${STUDIO_INFO.developerPhone}`}
            className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full border transition-all text-xs group ${
              isDarkMode
                ? 'border-[#D4AF37]/40 bg-[#141417] hover:bg-[#D4AF37]/10'
                : 'border-[#AA820A]/40 bg-white hover:bg-[#AA820A]/10 shadow-sm'
            }`}
          >
            <Code2 className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="opacity-75 font-medium">DESIGN & DEVELOPED BY</span>
            <span
              className={`font-bold transition-colors ${
                isDarkMode ? 'text-[#F7F6F3] group-hover:text-[#D4AF37]' : 'text-[#141416] group-hover:text-[#AA820A]'
              }`}
            >
              {STUDIO_INFO.developerName}
            </span>
            <span className="text-[#D4AF37] tabular-nums font-bold">
              ({STUDIO_INFO.developerPhone})
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};
