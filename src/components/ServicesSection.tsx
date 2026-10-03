import React, { useState } from 'react';
import { Sparkles, Clock, Check, ArrowRight, MessageCircle, Info, X, Search } from 'lucide-react';
import { SERVICES, STUDIO_INFO } from '../data/servicesData';
import { ServiceCategory, ServiceItem } from '../types';
import { OptimizedImage } from './OptimizedImage';
import skinRejuvenationImage from '../assets/images/service_skin_rejuvenation_1791015581795.webp';

interface ServicesSectionProps {
  onBookService: (serviceTitle: string) => void;
  isDarkMode: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookService, isDarkMode }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: ServiceCategory; label: string }[] = [
    { id: 'all', label: 'All Services (13)' },
    { id: 'skincare', label: 'Skin & Laser' },
    { id: 'hair', label: 'Hair & Scalp' },
    { id: 'aesthetics', label: 'Facial Aesthetics' },
    { id: 'wellness', label: 'Wellness Drips' },
    { id: 'bridal', label: 'Bridal & Beauty' },
  ];

  const filteredServices = SERVICES.filter((s) => {
    const matchesCategory = activeCategory === 'all' || s.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleWhatsappEnquiry = (title: string) => {
    const text = encodeURIComponent(
      `Hello VELICS THE GLOW STUDIO, I would like to enquire about the "${title}" treatment at your Chandrasekharpur clinic.`
    );
    window.open(`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section
      id="services"
      className={`py-24 transition-colors duration-300 relative border-t border-b ${
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
              Curated Clinical Menu
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-serif-brand font-bold mb-4 ${
              isDarkMode ? 'text-[#F7F6F3]' : 'text-[#141416]'
            }`}
          >
            Advanced Clinical{' '}
            <span className={isDarkMode ? 'gold-text-gradient' : 'gold-text-gradient-light'}>
              & Beauty Solutions
            </span>
          </h2>
          <p
            className={`text-base font-light leading-relaxed ${
              isDarkMode ? 'text-[#A39E93]' : 'text-[#5C5850]'
            }`}
          >
            One premier destination in Chandrasekharpur for comprehensive dermatological aesthetics, trichology hair restoration, and revitalizing wellness drips.
          </p>
        </div>

        {/* Category Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-[#0B0B0C] shadow-md shadow-[#D4AF37]/25 font-bold scale-[1.03]'
                    : isDarkMode
                    ? 'bg-[#161619] text-[#C5C2BA] border border-white/5 hover:border-[#D4AF37]/40 hover:text-[#F7F6F3]'
                    : 'bg-white text-[#5C5850] border border-black/5 hover:border-[#AA820A]/50 hover:text-[#141416] shadow-sm'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
            <input
              type="text"
              placeholder="Search treatments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-9 pr-4 py-2 rounded-full text-xs focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all ${
                isDarkMode
                  ? 'bg-[#141417] border border-[#D4AF37]/30 text-[#F7F6F3] placeholder-[#777]'
                  : 'bg-white border border-[#AA820A]/30 text-[#141416] placeholder-[#888] shadow-sm'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs opacity-60 hover:opacity-100"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Services Grid with Impressive Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`group rounded-3xl border transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 shadow-lg hover:shadow-2xl ${
                isDarkMode
                  ? 'bg-[#141417] border-[#D4AF37]/20 hover:border-[#D4AF37]/60 hover:shadow-[#D4AF37]/10'
                  : 'bg-white border-[#D4AF37]/30 hover:border-[#AA820A]/70 hover:shadow-xl'
              }`}
            >
              <div>
                {/* Image Container with Zoom Effect */}
                <div className="relative h-60 overflow-hidden bg-[#1D1D22]">
                  <OptimizedImage
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    fallbackSrc={skinRejuvenationImage}
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      isDarkMode
                        ? 'bg-gradient-to-t from-[#141417] via-transparent to-black/35 opacity-90 group-hover:opacity-60'
                        : 'bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover:opacity-40'
                    }`}
                  />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0B0B0C]/85 backdrop-blur-md border border-[#D4AF37]/40 text-[10px] tracking-wider uppercase text-[#F3E5AB] font-semibold">
                    {service.categoryLabel}
                  </div>

                  {service.popular && (
                    <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#0B0B0C] text-[10px] font-bold tracking-wider uppercase shadow-md">
                      Client Favorite
                    </div>
                  )}

                  <div className="absolute bottom-3 right-4 flex items-center gap-1.5 text-[11px] text-[#F7F6F3] bg-[#0B0B0C]/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                    <Clock className="w-3 h-3 text-[#D4AF37]" />
                    <span className="font-medium">{service.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <h3
                    className={`text-xl font-serif-brand font-bold mb-2 transition-colors ${
                      isDarkMode
                        ? 'text-[#F7F6F3] group-hover:text-[#D4AF37]'
                        : 'text-[#141416] group-hover:text-[#AA820A]'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-xs font-semibold mb-3 italic ${
                      isDarkMode ? 'text-[#D4AF37]' : 'text-[#996515]'
                    }`}
                  >
                    {service.tagline}
                  </p>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-5 ${
                      isDarkMode ? 'text-[#A39E93]' : 'text-[#5C5850]'
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Key Benefits */}
                  <div className="space-y-2 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start gap-2 text-xs ${
                          isDarkMode ? 'text-[#C5C2BA]' : 'text-[#444]'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div
                className={`p-6 pt-0 border-t flex items-center gap-2 mt-auto ${
                  isDarkMode ? 'border-white/5' : 'border-black/5'
                }`}
              >
                <button
                  onClick={() => onBookService(service.title)}
                  className="flex-1 py-3 rounded-xl text-xs font-bold tracking-wider uppercase text-[#0B0B0C] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA820A] hover:brightness-110 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleWhatsappEnquiry(service.title)}
                  title="Enquire on WhatsApp"
                  className={`p-3 rounded-xl border transition-all cursor-pointer hover:scale-105 active:scale-95 ${
                    isDarkMode
                      ? 'border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/15'
                      : 'border-[#25D366]/60 text-[#25D366] bg-white hover:bg-[#25D366]/10 shadow-sm'
                  }`}
                  aria-label="Enquire on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 fill-[#25D366]/20" />
                </button>
                <button
                  onClick={() => setSelectedService(service)}
                  title="View Protocol Details"
                  className={`p-3 rounded-xl border transition-all cursor-pointer hover:scale-105 active:scale-95 ${
                    isDarkMode
                      ? 'border-white/10 text-[#C5C2BA] hover:text-[#D4AF37] hover:border-[#D4AF37]/40'
                      : 'border-black/10 text-[#666] hover:text-[#AA820A] hover:border-[#AA820A]/40 bg-white shadow-sm'
                  }`}
                  aria-label="View Details"
                >
                  <Info className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div
            className={`border rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl ${
              isDarkMode ? 'bg-[#141417] border-[#D4AF37]/45' : 'bg-white border-[#D4AF37]/60'
            }`}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-[#D4AF37]" />
            </button>

            <div className="mb-4">
              <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-bold">
                {selectedService.categoryLabel}
              </span>
              <h3
                className={`text-2xl sm:text-3xl font-serif-brand font-bold mt-1 mb-1 ${
                  isDarkMode ? 'text-[#F7F6F3]' : 'text-[#141416]'
                }`}
              >
                {selectedService.title}
              </h3>
              <p className="text-xs text-[#D4AF37] font-medium italic">{selectedService.tagline}</p>
            </div>

            <div className="mb-6 rounded-2xl overflow-hidden h-64 bg-[#1D1D22]">
              <OptimizedImage
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
                sizes="(min-width: 768px) 672px, 100vw"
                loading="eager"
                fallbackSrc={skinRejuvenationImage}
              />
            </div>

            <div className="space-y-4 mb-8">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#D4AF37] font-bold mb-2">
                  Treatment Overview
                </h4>
                <p
                  className={`text-xs sm:text-sm leading-relaxed ${
                    isDarkMode ? 'text-[#C5C2BA]' : 'text-[#444]'
                  }`}
                >
                  {selectedService.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#D4AF37] font-bold mb-2">
                  Key Benefits & Clinical Outcomes
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.benefits.map((b, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-2 text-xs p-3 rounded-xl border ${
                        isDarkMode
                          ? 'text-[#F7F6F3] bg-[#1B1B20] border-white/5'
                          : 'text-[#141416] bg-[#F7F6F2] border-black/5'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-[#888] pt-2">
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  Session Duration: <strong className={isDarkMode ? 'text-[#F7F6F3]' : 'text-[#141416]'}>{selectedService.duration}</strong>
                </span>
                <span>•</span>
                <span>Administered by certified specialists</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onBookService(title);
                }}
                className="flex-1 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase text-[#0B0B0C] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA820A] hover:brightness-110 transition-all text-center shadow-md cursor-pointer"
              >
                Book Appointment for {selectedService.title}
              </button>
              <button
                onClick={() => handleWhatsappEnquiry(selectedService.title)}
                className="px-6 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase text-[#25D366] border border-[#25D366]/60 hover:bg-[#25D366]/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
