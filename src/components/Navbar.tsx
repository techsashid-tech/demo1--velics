import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Phone, Calendar } from 'lucide-react';
import { STUDIO_INFO } from '../data/servicesData';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, isDarkMode, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'services', 'skincare', 'experience', 'gallery', 'reviews', 'tools', 'location'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveNav(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#home', id: 'home' },
    { name: 'Services (13)', href: '#services', id: 'services' },
    { name: 'Skincare', href: '#skincare', id: 'skincare' },
    { name: 'Rituals', href: '#experience', id: 'experience' },
    { name: '3D Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'Tools', href: '#tools', id: 'tools' },
    { name: 'Location', href: '#location', id: 'location' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDarkMode
            ? 'bg-[#0B0B0C]/90 backdrop-blur-md border-b border-[#D4AF37]/25 py-3 shadow-2xl'
            : 'bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#D4AF37]/30 py-3 shadow-md'
          : isDarkMode
          ? 'bg-gradient-to-b from-[#0B0B0C]/85 to-transparent py-4 sm:py-5'
          : 'bg-gradient-to-b from-[#FAF9F6]/95 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex flex-col group cursor-pointer focus-visible:outline-none"
            aria-label="VELICS The Glow Studio Home"
          >
            <span
              className={`text-xl sm:text-2xl font-serif-brand font-bold tracking-[0.25em] transition-colors ${
                isDarkMode ? 'text-[#F7F6F3] group-hover:text-[#D4AF37]' : 'text-[#141416] group-hover:text-[#AA820A]'
              }`}
            >
              VELICS
            </span>
            <span className="text-[9px] tracking-[0.35em] text-[#D4AF37] uppercase font-sans-clean font-medium">
              The Glow Studio
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs uppercase tracking-[0.15em] font-medium transition-all relative py-1 ${
                  activeNav === link.id
                    ? isDarkMode
                      ? 'text-[#D4AF37] font-semibold'
                      : 'text-[#AA820A] font-semibold'
                    : isDarkMode
                    ? 'text-[#C5C2BA] hover:text-[#F7F6F3]'
                    : 'text-[#5C5850] hover:text-[#141416]'
                }`}
              >
                {link.name}
                {activeNav === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37] rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions + Theme Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className={`p-2 rounded-full border transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                isDarkMode
                  ? 'border-[#D4AF37]/35 text-[#D4AF37] hover:bg-[#D4AF37]/15'
                  : 'border-[#AA820A]/40 text-[#AA820A] bg-white hover:bg-[#AA820A]/10 shadow-sm'
              }`}
              title={isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-[#AA820A]" />}
            </button>

            {/* Studio Call Link */}
            <a
              href={`tel:${STUDIO_INFO.phone}`}
              aria-label="Call studio"
              className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium transition-colors ${
                isDarkMode ? 'text-[#C5C2BA] hover:text-[#D4AF37]' : 'text-[#5C5850] hover:text-[#AA820A]'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="tabular-nums font-semibold">{STUDIO_INFO.phoneDisplay}</span>
            </a>

            {/* Book Appointment CTA */}
            <button
              onClick={() => onOpenBooking()}
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0B0B0C] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA820A] hover:brightness-110 shadow-md shadow-[#D4AF37]/25 transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`xl:hidden p-2 rounded-lg transition-colors cursor-pointer ${
                isDarkMode ? 'text-[#C5C2BA] hover:text-[#D4AF37]' : 'text-[#5C5850] hover:text-[#AA820A]'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className={`xl:hidden px-6 py-6 border-b transition-all animate-fadeIn ${
            isDarkMode
              ? 'bg-[#0B0B0C]/98 backdrop-blur-xl border-[#D4AF37]/25'
              : 'bg-[#FAF9F6]/98 backdrop-blur-xl border-[#D4AF37]/35 shadow-xl'
          }`}
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs uppercase tracking-[0.2em] py-2 transition-colors flex items-center justify-between ${
                  activeNav === link.id
                    ? 'text-[#D4AF37] font-semibold'
                    : isDarkMode
                    ? 'text-[#C5C2BA] hover:text-[#F7F6F3]'
                    : 'text-[#5C5850] hover:text-[#141416]'
                }`}
              >
                <span>{link.name}</span>
                {activeNav === link.id && <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />}
              </a>
            ))}

            <div className={`pt-4 border-t flex flex-col gap-3 mt-2 ${isDarkMode ? 'border-white/10' : 'border-black/10'}`}>
              <a
                href={`tel:${STUDIO_INFO.phone}`}
                className={`flex items-center gap-2 text-xs font-semibold ${
                  isDarkMode ? 'text-[#C5C2BA] hover:text-[#D4AF37]' : 'text-[#5C5850] hover:text-[#AA820A]'
                }`}
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Direct Studio Call: {STUDIO_INFO.phoneDisplay}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-full text-xs font-semibold tracking-widest uppercase text-[#0B0B0C] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA820A] text-center shadow-md shadow-[#D4AF37]/20"
              >
                Book Your Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
