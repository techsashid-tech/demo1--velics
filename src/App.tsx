import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickConnectCards } from './components/QuickConnectCards';
import { ServicesSection } from './components/ServicesSection';
import { SkincareSection } from './components/SkincareSection';
import { ExperienceSection } from './components/ExperienceSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { SocialMediaBar } from './components/SocialMediaBar';
import { ToolsSection } from './components/ToolsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingConcierge } from './components/FloatingConcierge';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>(undefined);

  useEffect(() => {
    const savedTheme = localStorage.getItem('velics_theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, []);

  const handleToggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('velics_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('velics_theme', 'light');
    }
  };

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedServiceForBooking(serviceName);
    setBookingModalOpen(true);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen font-sans-clean transition-colors duration-300 ${
        isDarkMode ? 'bg-[#0B0B0C] text-[#F7F6F3]' : 'bg-[#FAF9F6] text-[#141416]'
      }`}
    >
      {/* Top Navigation Bar with Top Bar Contract & Dark/Light Toggle */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
      />

      <main>
        {/* Section 1: Hero Banner with Looping High Class Images & Live Slide Controls */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreServices={handleExploreServices}
          isDarkMode={isDarkMode}
        />

        {/* Section 2: Quick Connect 4 Cards (Screenshot 2: CALL NOW, WHATSAPP US, GET DIRECTIONS, CONSULTATION) */}
        <QuickConnectCards
          onOpenBooking={() => handleOpenBooking()}
          isDarkMode={isDarkMode}
        />

        {/* Section 3: Advanced Clinical & Beauty Solutions (All 13 Services with Impressive Photos & Modals) */}
        <ServicesSection
          onBookService={(title) => handleOpenBooking(title)}
          isDarkMode={isDarkMode}
        />

        {/* Section 4: 5-Step Skincare Ritual & Interactive Routine Generator */}
        <SkincareSection isDarkMode={isDarkMode} />

        {/* Section 5: The Velics Studio Experience Journey & Autoclave Hygiene Standard */}
        <ExperienceSection isDarkMode={isDarkMode} />

        {/* Section 6: Studio Ambiance & Clinical Suites (Screenshot 3: 3D Coverflow Gallery + 3D Light-Pass Button) */}
        <GallerySection isDarkMode={isDarkMode} />

        {/* Section 7: Verified Google Reviews & Testimonials Slider */}
        <ReviewsSection isDarkMode={isDarkMode} />

        {/* Section 8: Social Media Bar (Screenshot 1: Instagram, Facebook, X, YouTube Reel, WhatsApp, Call) */}
        <SocialMediaBar isDarkMode={isDarkMode} />

        {/* Section 9: Free Studio Interactive Skin & Beauty Tools */}
        <ToolsSection isDarkMode={isDarkMode} />

        {/* Section 10: Studio Location, Interactive Google Map & Appointment Form */}
        <LocationSection isDarkMode={isDarkMode} />
      </main>

      {/* Luxury Footer with Developer Badge for S K DAS */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        isDarkMode={isDarkMode}
      />

      {/* Floating Concierge (WhatsApp, Call, Booking, Social Drawer) */}
      <FloatingConcierge
        onOpenBooking={() => handleOpenBooking()}
        isDarkMode={isDarkMode}
      />

      {/* Global Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultService={selectedServiceForBooking}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}
