import React from 'react';
import { Sparkles, Compass, Search, Sliders, Coffee, SunMedium, ShieldAlert } from 'lucide-react';
import { STUDIO_INFO } from '../data/servicesData';

interface ExperienceSectionProps {
  isDarkMode: boolean;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ isDarkMode }) => {
  const journeySteps = [
    {
      step: '01',
      title: 'Discovery & Consultation',
      desc: 'Your transformation begins with an unhurried, warm conversation in our Bhubaneswar consultation suite. We discuss your aesthetic desires, lifestyle, and past skincare history.',
      icon: Compass
    },
    {
      step: '02',
      title: 'Clinical Diagnostics',
      desc: 'We examine your skin moisture barrier, pore depth, elasticity, or scalp follicular density using precision diagnostic tools to ensure absolute medical accuracy.',
      icon: Search
    },
    {
      step: '03',
      title: 'Bespoke Personalization',
      desc: 'No generic packages. Every laser energy level, hydra peel concentration, or PRP protocol is individually calibrated to your unique skin type and comfort threshold.',
      icon: Sliders
    },
    {
      step: '04',
      title: 'Sanctuary Relaxation',
      desc: 'Unwind in our serene, acoustically isolated private treatment rooms. Enjoy warm herbal infusions, calming ambient music, and gentle aesthetic care.',
      icon: Coffee
    },
    {
      step: '05',
      title: 'The Signature Glow',
      desc: 'Step out into Chandrasekharpur with renewed luminosity, restored confidence, and a comprehensive homecare roadmap to sustain your radiant results.',
      icon: SunMedium
    }
  ];

  return (
    <section
      id="experience"
      className={`py-24 transition-colors duration-300 relative border-t border-b ${
        isDarkMode
          ? 'bg-[#0E0E10] border-[#D4AF37]/15'
          : 'bg-[#F4F1EA] border-[#D4AF37]/25'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quote Spotlight */}
        <div
          className={`max-w-4xl mx-auto mb-20 text-center p-8 sm:p-12 rounded-3xl border shadow-xl ${
            isDarkMode
              ? 'bg-gradient-to-r from-[#141417] via-[#1A1A1E] to-[#141417] border-[#D4AF37]/30'
              : 'bg-white border-[#D4AF37]/45'
          }`}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold block mb-3">
            Our Guiding Philosophy
          </span>
          <blockquote
            className={`text-2xl sm:text-3xl md:text-4xl font-serif-brand font-medium italic leading-snug ${
              isDarkMode ? 'text-[#F7F6F3]' : 'text-[#141416]'
            }`}
          >
            "{STUDIO_INFO.motto}"
          </blockquote>
          <div className="mt-4 text-xs text-[#D4AF37] tracking-widest uppercase font-semibold">
            VELICS THE GLOW STUDIO • CHANDRASEKHARPUR, BHUBANESWAR
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border mb-4 ${
              isDarkMode
                ? 'border-[#D4AF37]/30 bg-[#161619] text-[#D4AF37]'
                : 'border-[#AA820A]/40 bg-white text-[#996515] shadow-sm'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px] tracking-[0.25em] uppercase font-semibold">
              The Client Journey
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-serif-brand font-bold mb-4 ${
              isDarkMode ? 'text-[#F7F6F3]' : 'text-[#141416]'
            }`}
          >
            The Velics{' '}
            <span className={isDarkMode ? 'gold-text-gradient' : 'gold-text-gradient-light'}>
              Studio Experience
            </span>
          </h2>
          <p
            className={`text-base font-light leading-relaxed ${
              isDarkMode ? 'text-[#A39E93]' : 'text-[#5C5850]'
            }`}
          >
            From the moment you enter our studio on Tulasi Vihar Road to your final post-treatment mirror reveal, every detail is crafted for your utmost comfort and privacy.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative mb-16">
          {journeySteps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className={`rounded-3xl p-6 border transition-all duration-300 relative group flex flex-col justify-between hover:-translate-y-1 shadow-md ${
                  isDarkMode
                    ? 'bg-[#141417] border-[#D4AF37]/20 hover:border-[#D4AF37]/60'
                    : 'bg-white border-[#D4AF37]/30 hover:border-[#AA820A]/70 shadow-lg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-serif-brand font-bold text-[#D4AF37] transition-colors">
                      {item.step}
                    </span>
                    <div
                      className={`p-2.5 rounded-2xl transition-colors ${
                        isDarkMode
                          ? 'bg-[#1C1C22] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B0B0C]'
                          : 'bg-[#FAF9F6] text-[#AA820A] group-hover:bg-[#AA820A] group-hover:text-white border border-[#D4AF37]/20'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3
                    className={`text-base font-serif-brand font-bold mb-2 ${
                      isDarkMode ? 'text-[#F7F6F3]' : 'text-[#141416]'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-xs leading-relaxed ${
                      isDarkMode ? 'text-[#A39E93]' : 'text-[#5C5850]'
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-black/5 dark:border-white/5 text-[10px] text-[#D4AF37] font-semibold uppercase tracking-wider">
                  Phase {item.step} of 05
                </div>
              </div>
            );
          })}
        </div>

        {/* Clinical Safety Standards Bar */}
        <div
          className={`p-6 sm:p-7 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg ${
            isDarkMode ? 'bg-[#121214] border-white/10' : 'bg-white border-[#D4AF37]/40'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37] shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h4
                className={`text-sm font-bold ${
                  isDarkMode ? 'text-[#F7F6F3]' : 'text-[#141416]'
                }`}
              >
                Medical-Grade Autoclave Sterilization & Single-Use Consumables
              </h4>
              <p className={`text-xs mt-0.5 ${isDarkMode ? 'text-[#A39E93]' : 'text-[#666]'}`}>
                Every needle, hydra tip, and treatment drape is 100% sterile and unsealed in your presence.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#D4AF37] uppercase tracking-wider shrink-0 bg-[#D4AF37]/10 px-4 py-2 rounded-full border border-[#D4AF37]/30">
            <span>Zero Compromise on Hygiene</span>
          </div>
        </div>
      </div>
    </section>
  );
};
