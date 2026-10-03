import React, { useState, useEffect } from 'react';
import { Sparkles, Star, MapPin, ExternalLink, ChevronLeft, ChevronRight, Quote, CheckCircle } from 'lucide-react';
import { REVIEWS_DATA } from '../data/reviewsData';
import { STUDIO_INFO } from '../data/servicesData';

interface ReviewsSectionProps {
  isDarkMode: boolean;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ isDarkMode }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const totalReviews = REVIEWS_DATA.length;

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalReviews);
    }, 5500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalReviews]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalReviews);
  };

  const activeReview = REVIEWS_DATA[currentSlide];

  return (
    <section
      id="reviews"
      className={`py-24 transition-colors duration-300 relative border-t border-b overflow-hidden ${
        isDarkMode
          ? 'bg-[#0E0E10] border-[#D4AF37]/15'
          : 'bg-[#F4F1EA] border-[#D4AF37]/25'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border mb-4 ${
              isDarkMode
                ? 'border-[#D4AF37]/30 bg-[#161619] text-[#D4AF37]'
                : 'border-[#AA820A]/40 bg-white text-[#996515] shadow-sm'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px] tracking-[0.25em] uppercase font-semibold">
              Verified Client Stories
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-serif-brand font-bold mb-4 ${
              isDarkMode ? 'text-[#F7F6F3]' : 'text-[#141416]'
            }`}
          >
            Loved & Trusted Across{' '}
            <span className={isDarkMode ? 'gold-text-gradient' : 'gold-text-gradient-light'}>
              Bhubaneswar
            </span>
          </h2>
          <p
            className={`text-base font-light leading-relaxed ${
              isDarkMode ? 'text-[#A39E93]' : 'text-[#5C5850]'
            }`}
          >
            Read what our clients say about their bespoke skin, hair, and aesthetic transformations at Velics The Glow Studio.
          </p>
        </div>

        {/* Rating Summary Banner Card */}
        <div
          className={`max-w-xl mx-auto mb-14 p-6 sm:p-7 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl ${
            isDarkMode
              ? 'bg-[#141417] border-[#D4AF37]/30 shadow-[#D4AF37]/5'
              : 'bg-white border-[#D4AF37]/40 shadow-lg'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="text-5xl font-serif-brand font-bold text-[#D4AF37]">
              5.0
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#D4AF37] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                ))}
              </div>
              <span className={`text-xs font-medium ${isDarkMode ? 'text-[#A39E93]' : 'text-[#666]'}`}>
                100% Recommended on Google Reviews (Bhubaneswar)
              </span>
            </div>
          </div>
          <a
            href={STUDIO_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full border border-[#D4AF37]/50 text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0B0C] transition-all flex items-center gap-1.5 whitespace-nowrap shadow-sm"
          >
            <span>Google Reviews</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* INTERACTIVE TESTIMONIAL SLIDER */}
        <div
          className="relative max-w-4xl mx-auto mb-10"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div
            className={`p-8 sm:p-12 rounded-3xl border relative transition-all duration-500 shadow-2xl ${
              isDarkMode
                ? 'bg-[#141417] border-[#D4AF37]/35 shadow-black/60'
                : 'bg-white border-[#D4AF37]/45 shadow-xl'
            }`}
          >
            {/* Top quote icon */}
            <div className="absolute top-6 right-8 text-[#D4AF37]/20 pointer-events-none">
              <Quote className="w-16 h-16" />
            </div>

            <div className="relative z-10">
              {/* Rating & Result Tag */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  {[...Array(activeReview.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                  <span className="text-xs font-bold ml-2 text-[#D4AF37]">5.0 Star Experience</span>
                </div>

                {activeReview.treatmentResult && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[11px] font-semibold text-[#D4AF37]">
                    <CheckCircle className="w-3 h-3 text-[#25D366]" />
                    <span>{activeReview.treatmentResult}</span>
                  </div>
                )}
              </div>

              {/* Review Text */}
              <blockquote
                className={`text-base sm:text-xl font-editorial italic leading-relaxed mb-8 min-h-[90px] ${
                  isDarkMode ? 'text-[#F7F6F3]' : 'text-[#1F1E1B]'
                }`}
              >
                "{activeReview.text}"
              </blockquote>

              {/* Reviewer Details */}
              <div
                className={`pt-6 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  isDarkMode ? 'border-white/10' : 'border-black/10'
                }`}
              >
                <div>
                  <h4
                    className={`text-lg font-serif-brand font-bold ${
                      isDarkMode ? 'text-[#F7F6F3]' : 'text-[#141416]'
                    }`}
                  >
                    {activeReview.name}
                  </h4>
                  <div className="flex items-center gap-2 text-xs mt-1">
                    <span className="flex items-center gap-1 text-[#888]">
                      <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {activeReview.location}
                    </span>
                    <span className="text-[#D4AF37]">•</span>
                    <span className="text-[#D4AF37] font-semibold">{activeReview.service}</span>
                  </div>
                </div>

                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#25D366] bg-[#25D366]/10 px-3 py-1 rounded-full border border-[#25D366]/20 self-start sm:self-auto">
                  {activeReview.date}
                </span>
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-between mt-6 px-2">
            <div className="flex items-center gap-2">
              {REVIEWS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentSlide === idx ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-black/20 dark:bg-white/20 hover:opacity-100'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous Review"
                className={`p-3 rounded-full border transition-all cursor-pointer hover:scale-110 active:scale-95 shadow-sm ${
                  isDarkMode
                    ? 'border-[#D4AF37]/40 bg-[#141417] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0B0C]'
                    : 'border-[#AA820A]/40 bg-white text-[#AA820A] hover:bg-[#AA820A] hover:text-white'
                }`}
              >
                <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Review"
                className={`p-3 rounded-full border transition-all cursor-pointer hover:scale-110 active:scale-95 shadow-sm ${
                  isDarkMode
                    ? 'border-[#D4AF37]/40 bg-[#141417] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0B0C]'
                    : 'border-[#AA820A]/40 bg-white text-[#AA820A] hover:bg-[#AA820A] hover:text-white'
                }`}
              >
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* Action Link to Leave Review */}
        <div className="text-center mt-6">
          <a
            href={STUDIO_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase text-[#D4AF37] border border-[#D4AF37]/50 hover:bg-[#D4AF37] hover:text-[#0B0B0C] transition-all shadow-md cursor-pointer"
          >
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Leave a Review on Google Maps</span>
          </a>
        </div>
      </div>
    </section>
  );
};
