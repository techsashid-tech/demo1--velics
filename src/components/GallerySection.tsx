import React, { useState, useEffect } from 'react';
import { Sparkles, ChevronLeft, ChevronRight, Image as ImageIcon, ExternalLink, Maximize2, X } from 'lucide-react';
import { GALLERY_ITEMS, STUDIO_INFO } from '../data/servicesData';
import { GalleryItem } from '../types';
import { OptimizedImage } from './OptimizedImage';
import glowTransformationImage from '../assets/images/gallery_glow_transformation_1791015597410.webp';

interface GallerySectionProps {
  isDarkMode: boolean;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ isDarkMode }) => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [selectedModalImage, setSelectedModalImage] = useState<GalleryItem | null>(null);

  const totalItems = GALLERY_ITEMS.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalItems);
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getPositionClass = (index: number) => {
    const diff = (index - activeIndex + totalItems) % totalItems;

    if (diff === 0) {
      // Center Active Card
      return {
        style: {
          transform: 'translateX(0%) translateZ(80px) rotateY(0deg) scale(1)',
          zIndex: 30,
          opacity: 1,
        },
        isCenter: true,
      };
    } else if (diff === 1 || diff === -(totalItems - 1)) {
      // First Right Card
      return {
        style: {
          transform: 'translateX(85%) translateZ(-40px) rotateY(-28deg) scale(0.85)',
          zIndex: 20,
          opacity: 0.85,
        },
        isCenter: false,
      };
    } else if (diff === 2 || diff === -(totalItems - 2)) {
      // Far Right Card
      return {
        style: {
          transform: 'translateX(160%) translateZ(-120px) rotateY(-40deg) scale(0.7)',
          zIndex: 10,
          opacity: 0.5,
        },
        isCenter: false,
      };
    } else if (diff === totalItems - 1 || diff === -1) {
      // First Left Card
      return {
        style: {
          transform: 'translateX(-85%) translateZ(-40px) rotateY(28deg) scale(0.85)',
          zIndex: 20,
          opacity: 0.85,
        },
        isCenter: false,
      };
    } else if (diff === totalItems - 2 || diff === -2) {
      // Far Left Card
      return {
        style: {
          transform: 'translateX(-160%) translateZ(-120px) rotateY(40deg) scale(0.7)',
          zIndex: 10,
          opacity: 0.5,
        },
        isCenter: false,
      };
    } else {
      // Hidden other cards
      return {
        style: {
          transform: 'translateX(0%) translateZ(-200px) scale(0.5)',
          zIndex: 0,
          opacity: 0,
          pointerEvents: 'none' as const,
        },
        isCenter: false,
      };
    }
  };

  return (
    <section
      id="gallery"
      className={`py-24 transition-colors duration-300 relative overflow-hidden ${
        isDarkMode ? 'bg-[#0B0B0C]' : 'bg-[#FAF9F6]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border mb-4 ${
              isDarkMode
                ? 'border-[#D4AF37]/30 bg-[#141416] text-[#D4AF37]'
                : 'border-[#AA820A]/40 bg-white text-[#996515] shadow-sm'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px] tracking-[0.25em] uppercase font-semibold">
              Visual Tour & Transformation Suite
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-serif-brand font-bold mb-4 ${
              isDarkMode ? 'text-[#F7F6F3]' : 'text-[#141416]'
            }`}
          >
            Studio Ambiance &{' '}
            <span className={isDarkMode ? 'gold-text-gradient' : 'gold-text-gradient-light'}>
              Clinical Suites
            </span>
          </h2>
          <p
            className={`text-base font-light leading-relaxed ${
              isDarkMode ? 'text-[#A39E93]' : 'text-[#5C5850]'
            }`}
          >
            Explore our state-of-the-art aesthetic suites, trichology stations, and serene luxury lounge on Tulasi Vihar Road, Chandrasekharpur.
          </p>
        </div>

        {/* 3D Coverflow Container (Matching User's Reference Screenshot 3) */}
        <div className="relative w-full max-w-5xl mx-auto my-6 sm:my-10 h-[460px] sm:h-[520px] flex items-center justify-center perspective-coverflow">
          <div className="relative w-full h-full flex items-center justify-center">
            {GALLERY_ITEMS.map((item, index) => {
              const { style, isCenter } = getPositionClass(index);

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (!isCenter) {
                      setActiveIndex(index);
                    } else {
                      setSelectedModalImage(item);
                    }
                  }}
                  style={style}
                  className={`absolute w-[260px] sm:w-[320px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ease-out cursor-pointer select-none ${
                    isDarkMode
                      ? 'bg-[#141417] border border-[#D4AF37]/35 shadow-black/80'
                      : 'bg-white border border-[#D4AF37]/45 shadow-2xl'
                  }`}
                >
                  {/* Photo area */}
                  <div className="relative h-[280px] sm:h-[340px] overflow-hidden bg-black">
                    <OptimizedImage
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                      sizes="(min-width: 640px) 420px, 85vw"
                      fallbackSrc={glowTransformationImage}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                    {isCenter && (
                      <div className="absolute top-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-md text-[#D4AF37] hover:scale-110 transition-transform">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    )}

                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0B0B0C]/80 backdrop-blur-md border border-[#D4AF37]/30 text-[10px] uppercase tracking-wider text-[#F3E5AB] font-semibold">
                      {item.category}
                    </div>
                  </div>

                  {/* Card bottom text area (matching Screenshot 3 label format) */}
                  <div className="p-4 sm:p-5 text-center">
                    <h3
                      className={`text-base sm:text-lg font-serif-brand font-bold line-clamp-1 ${
                        isDarkMode ? 'text-[#F7F6F3]' : 'text-[#141416]'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <span className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-semibold block mt-1">
                      GALLERY HIGHLIGHT
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Controls: Circular Left / Right Chevrons & 3D Animated Button with Light Pass Effect */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 mt-4 sm:mt-8">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Gallery Image"
            className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all cursor-pointer hover:scale-110 active:scale-95 shadow-md ${
              isDarkMode
                ? 'border-[#D4AF37]/40 bg-[#141417] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0B0C]'
                : 'border-[#AA820A]/40 bg-white text-[#AA820A] hover:bg-[#AA820A] hover:text-white'
            }`}
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* STYLISH 3D ANIMATED BUTTON WITH LIGHT PASS EFFECT (Requested by user & shown in Screenshot 3) */}
          <a
            href={STUDIO_INFO.officialGalleryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden px-8 sm:px-10 py-4 rounded-2xl text-xs sm:text-sm font-bold tracking-widest uppercase text-white bg-gradient-to-r from-[#A67C1E] via-[#C99E32] to-[#8C6212] shadow-xl shadow-[#C99E32]/30 border border-[#F3E5AB]/40 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2.5 cursor-pointer"
            style={{
              boxShadow: '0 8px 24px rgba(184, 134, 11, 0.35), inset 0 1px 2px rgba(255, 255, 255, 0.4), inset 0 -2px 4px rgba(0, 0, 0, 0.4)'
            }}
          >
            {/* Continuous Light Pass / Sheen Effect */}
            <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] animate-light-pass pointer-events-none" />

            <ImageIcon className="w-4 h-4 text-[#FBF5D4] shrink-0" />
            <span className="drop-shadow-sm">VIEW OFFICIAL PHOTO GALLERY</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#FBF5D4] shrink-0" />
          </a>

          {/* Next Button */}
          <button
            onClick={handleNext}
            aria-label="Next Gallery Image"
            className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all cursor-pointer hover:scale-110 active:scale-95 shadow-md ${
              isDarkMode
                ? 'border-[#D4AF37]/40 bg-[#141417] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0B0C]'
                : 'border-[#AA820A]/40 bg-white text-[#AA820A] hover:bg-[#AA820A] hover:text-white'
            }`}
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Thumbnail Pagination Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {GALLERY_ITEMS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Jump to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                activeIndex === idx ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-white/20 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      {selectedModalImage && (
        <div
          onClick={() => setSelectedModalImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative max-w-4xl w-full border rounded-3xl overflow-hidden shadow-2xl cursor-default ${
              isDarkMode ? 'bg-[#141417] border-[#D4AF37]/50' : 'bg-white border-[#D4AF37]/60'
            }`}
          >
            <button
              onClick={() => setSelectedModalImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
              <OptimizedImage
                src={selectedModalImage.url}
                alt={selectedModalImage.title}
                className="max-h-[75vh] w-auto object-contain"
                sizes="(min-width: 1024px) 1024px, 100vw"
                loading="eager"
                fallbackSrc={glowTransformationImage}
              />
            </div>

            <div
              className={`p-6 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                isDarkMode ? 'bg-[#141417] border-white/10' : 'bg-white border-black/10'
              }`}
            >
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
                  {selectedModalImage.category}
                </span>
                <h3
                  className={`text-xl font-serif-brand font-bold mt-0.5 ${
                    isDarkMode ? 'text-[#F7F6F3]' : 'text-[#141416]'
                  }`}
                >
                  {selectedModalImage.title}
                </h3>
                {selectedModalImage.description && (
                  <p className="text-xs text-[#888] mt-1">{selectedModalImage.description}</p>
                )}
              </div>

              <a
                href={STUDIO_INFO.officialGalleryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0B0B0C] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA820A] flex items-center gap-1.5 shadow-md hover:brightness-110 whitespace-nowrap"
              >
                <span>View Google 360° Studio</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
