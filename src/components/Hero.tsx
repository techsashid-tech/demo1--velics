import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  MessageCircle,
  Calendar,
  ChevronDown,
  ShieldCheck,
  HeartHandshake,
  Award
} from 'lucide-react';
import { STUDIO_INFO, HERO_SLIDES } from '../data/servicesData';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
  isDarkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices, isDarkMode }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [taglineIndex, setTaglineIndex] = useState(0);

  const taglines = [
    "Look Good, Feel Better. Because You Deserve the Best.",
    "Where Medical Precision Meets Haute Beauty.",
    "Bespoke Aesthetics, Hair Restoration & Holistic Wellness.",
    "Reveal Your Unfiltered, Luminous Glass-Skin Glow."
  ];

  // Dynamic Tagline Cycler
  useEffect(() => {
    const timer = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [taglines.length]);

  // Image Loop Slider Timer (Every 5 seconds)
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, []);

  const handleWhatsapp = () => {
    const text = encodeURIComponent(
      "Hello VELICS THE GLOW STUDIO! I would like to book a private consultation for your clinical aesthetic services in Bhubaneswar."
    );
    window.open(`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-[95vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Loop Images with Crisp High-Resolution Clarity */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{ transitionProperty: 'opacity, transform' }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center brightness-105 contrast-[1.04]"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/src/assets/images/hero_luxury_reception_interior_1791017024309.jpg';
              }}
            />
          </div>
        ))}

        {/* Minimal Non-Obtrusive Vignette Scrim so High Quality Photos remain crystal-clear and prominent */}
        <div
          className={`absolute inset-0 transition-colors duration-500 pointer-events-none ${
            isDarkMode
              ? 'bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/25 to-black/30'
              : 'bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/25 to-white/20'
          }`}
        />
        {/* Soft edge shade at bottom and top for smooth transitions */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B0B0C] dark:from-[#0B0B0C] to-transparent pointer-events-none opacity-90 dark:opacity-100" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0B0B0C]/60 dark:from-[#0B0B0C]/70 to-transparent pointer-events-none" />
      </div>

      {/* Main Hero Container with Frosted Glass Panel */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Frosted Glass Content Shield */}
        <div
          className={`w-full max-w-4xl p-6 sm:p-10 md:p-12 rounded-3xl border shadow-2xl backdrop-blur-md transition-all duration-300 ${
            isDarkMode
              ? 'bg-[#0B0B0C]/60 border-[#D4AF37]/35 shadow-black/80'
              : 'bg-white/70 border-[#D4AF37]/45 shadow-2xl'
          }`}
        >
          {/* Subtle trust tag & active slide badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border backdrop-blur-md mb-4 transition-all shadow-sm ${
              isDarkMode
                ? 'border-[#D4AF37]/40 bg-[#0B0B0C]/75 text-[#F3E5AB]'
                : 'border-[#AA820A]/50 bg-white/90 text-[#7D5A02]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px] tracking-[0.25em] uppercase font-bold">
              {HERO_SLIDES[currentSlide].badge}
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className={`text-3xl sm:text-5xl md:text-6xl font-serif-brand font-bold tracking-tight leading-[1.14] text-balance mb-3 drop-shadow-md ${
              isDarkMode ? 'text-[#F7F6F3]' : 'text-[#141416]'
            }`}
          >
            One Destination For{' '}
            <span className={`block mt-1 ${isDarkMode ? 'gold-text-gradient' : 'gold-text-gradient-light'}`}>
              Complete Beauty Transformation
            </span>
          </h1>

          {/* 4 Pillars */}
          <p
            className={`text-xs sm:text-sm md:text-base font-editorial tracking-[0.35em] uppercase font-bold mb-4 drop-shadow-sm ${
              isDarkMode ? 'text-[#D4AF37]' : 'text-[#996515]'
            }`}
          >
            Skin • Hair • Aesthetics • Wellness
          </p>

          {/* Dynamic Tagline Cycler */}
          <div className="h-10 flex items-center justify-center mb-6 max-w-2xl mx-auto px-4">
            <p
              className={`text-sm sm:text-base font-light italic transition-opacity duration-500 drop-shadow-sm ${
                isDarkMode ? 'text-[#EDEBE8]' : 'text-[#2D2A26]'
              }`}
            >
              "{taglines[taglineIndex]}"
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto justify-center mb-6">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase text-[#0B0B0C] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA820A] hover:brightness-110 shadow-lg shadow-[#D4AF37]/35 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
            <button
              onClick={handleWhatsapp}
              className={`w-full sm:w-auto px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase border transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98] shadow-md ${
                isDarkMode
                  ? 'border-[#25D366]/60 bg-[#0B0B0C]/80 text-[#F7F6F3] hover:bg-[#25D366]/20 hover:border-[#25D366]'
                  : 'border-[#25D366]/70 bg-white text-[#141416] hover:bg-[#25D366]/15 hover:border-[#25D366]'
              }`}
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Concierge</span>
            </button>
            <button
              onClick={onExploreServices}
              className={`w-full sm:w-auto px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase border transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98] shadow-md ${
                isDarkMode
                  ? 'border-[#D4AF37]/45 text-[#F7F6F3] bg-[#0B0B0C]/60 hover:border-[#D4AF37] hover:text-[#D4AF37]'
                  : 'border-[#AA820A]/50 text-[#141416] bg-white hover:border-[#AA820A] hover:text-[#AA820A]'
              }`}
            >
              <span>Explore 13 Services</span>
            </button>
          </div>

          {/* Minimal Slide Progression Indicator Dots */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Switch to hero background slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  currentSlide === idx ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-black/20 dark:bg-white/30 hover:opacity-100'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Social Proof & Trust Badges Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl mt-6">
          <div
            className={`flex flex-col items-center p-3 rounded-2xl border transition-all ${
              isDarkMode ? 'bg-[#0B0B0C]/80 border-[#D4AF37]/25 shadow-lg' : 'bg-white/95 border-[#D4AF37]/30 shadow-md'
            }`}
          >
            <ShieldCheck className="w-5 h-5 text-[#D4AF37] mb-1.5" />
            <span className={`text-xs font-bold ${isDarkMode ? 'text-[#F7F6F3]' : 'text-[#141416]'}`}>
              Safe Treatments
            </span>
            <span className={`text-[10px] ${isDarkMode ? 'text-[#A39E93]' : 'text-[#666]'}`}>US-FDA Approved Tech</span>
          </div>

          <div
            className={`flex flex-col items-center p-3 rounded-2xl border transition-all ${
              isDarkMode ? 'bg-[#0B0B0C]/80 border-[#D4AF37]/25 shadow-lg' : 'bg-white/95 border-[#D4AF37]/30 shadow-md'
            }`}
          >
            <Award className="w-5 h-5 text-[#D4AF37] mb-1.5" />
            <span className={`text-xs font-bold ${isDarkMode ? 'text-[#F7F6F3]' : 'text-[#141416]'}`}>
              Expert Care
            </span>
            <span className={`text-[10px] ${isDarkMode ? 'text-[#A39E93]' : 'text-[#666]'}`}>Certified Specialists</span>
          </div>

          <div
            className={`flex flex-col items-center p-3 rounded-2xl border transition-all ${
              isDarkMode ? 'bg-[#0B0B0C]/80 border-[#D4AF37]/25 shadow-lg' : 'bg-white/95 border-[#D4AF37]/30 shadow-md'
            }`}
          >
            <HeartHandshake className="w-5 h-5 text-[#D4AF37] mb-1.5" />
            <span className={`text-xs font-bold ${isDarkMode ? 'text-[#F7F6F3]' : 'text-[#141416]'}`}>
              100% Personalized
            </span>
            <span className={`text-[10px] ${isDarkMode ? 'text-[#A39E93]' : 'text-[#666]'}`}>Custom Care Plans</span>
          </div>

          <div
            className={`flex flex-col items-center p-3 rounded-2xl border transition-all ${
              isDarkMode ? 'bg-[#0B0B0C]/80 border-[#D4AF37]/25 shadow-lg' : 'bg-white/95 border-[#D4AF37]/30 shadow-md'
            }`}
          >
            <span className="text-sm font-bold text-[#D4AF37] mb-0.5">5.0 ★★★★★</span>
            <span className={`text-xs font-bold ${isDarkMode ? 'text-[#F7F6F3]' : 'text-[#141416]'}`}>
              Google Verified
            </span>
            <span className={`text-[10px] ${isDarkMode ? 'text-[#A39E93]' : 'text-[#666]'}`}>Sailashree Vihar Studio</span>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <button
        onClick={onExploreServices}
        className={`absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 transition-colors cursor-pointer ${
          isDarkMode ? 'text-[#A39E93] hover:text-[#D4AF37]' : 'text-[#666] hover:text-[#AA820A]'
        }`}
        aria-label="Scroll to services"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll to Explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#D4AF37]" />
      </button>
    </section>
  );
};
