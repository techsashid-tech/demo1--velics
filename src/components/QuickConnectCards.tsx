import React from 'react';
import { Phone, MessageCircle, Navigation, HeartHandshake } from 'lucide-react';
import { STUDIO_INFO } from '../data/servicesData';

interface QuickConnectCardsProps {
  onOpenBooking: () => void;
  isDarkMode: boolean;
}

export const QuickConnectCards: React.FC<QuickConnectCardsProps> = ({ onOpenBooking, isDarkMode }) => {
  const handleWhatsapp = () => {
    const text = encodeURIComponent(
      "Hello VELICS THE GLOW STUDIO! I would like to inquire about treatments and availability."
    );
    window.open(`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: CALL NOW (Crimson Burgundy from Screenshot 2) */}
        <a
          href={`tel:${STUDIO_INFO.phone}`}
          className="group p-5 rounded-2xl bg-[#9E2A3B] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
        >
          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 text-white group-hover:scale-110 transition-transform">
            <Phone className="w-5 h-5 fill-white/20 stroke-white" />
          </div>
          <div>
            <span className="text-[11px] font-bold tracking-widest uppercase block text-white/90">
              CALL NOW
            </span>
            <span className="text-base font-bold text-white tracking-wide tabular-nums">
              {STUDIO_INFO.phoneDisplay}
            </span>
          </div>
        </a>

        {/* Card 2: WHATSAPP US (Forest/Vibrant Green from Screenshot 2) */}
        <button
          onClick={handleWhatsapp}
          className="group p-5 rounded-2xl bg-[#3D8B55] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between text-left cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 text-white group-hover:scale-110 transition-transform">
            <MessageCircle className="w-5 h-5 fill-white/20 stroke-white" />
          </div>
          <div>
            <span className="text-[11px] font-bold tracking-widest uppercase block text-white/90">
              WHATSAPP US
            </span>
            <span className="text-base font-bold text-white tracking-wide">
              Instant Reply & Consultation
            </span>
          </div>
        </button>

        {/* Card 3: GET DIRECTIONS (Royal Blue / Indigo from Screenshot 2) */}
        <a
          href={STUDIO_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-5 rounded-2xl bg-[#3B4CCA] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
        >
          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 text-white group-hover:scale-110 transition-transform">
            <Navigation className="w-5 h-5 fill-white/20 stroke-white" />
          </div>
          <div>
            <span className="text-[11px] font-bold tracking-widest uppercase block text-white/90">
              GET DIRECTIONS
            </span>
            <span className="text-base font-bold text-white tracking-wide">
              Google Maps Pin
            </span>
          </div>
        </a>

        {/* Card 4: CONSULTATION (Warm Terracotta Amber from Screenshot 2) */}
        <button
          onClick={onOpenBooking}
          className="group p-5 rounded-2xl bg-[#C45525] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between text-left cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 text-white group-hover:scale-110 transition-transform">
            <HeartHandshake className="w-5 h-5 stroke-white" />
          </div>
          <div>
            <span className="text-[11px] font-bold tracking-widest uppercase block text-white/90">
              CONSULTATION
            </span>
            <span className="text-base font-bold text-white tracking-wide">
              Free Aesthetic Guidance
            </span>
          </div>
        </button>
      </div>
    </section>
  );
};
