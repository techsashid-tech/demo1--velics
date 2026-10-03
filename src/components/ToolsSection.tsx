import React, { useState } from 'react';
import { Sparkles, ClipboardCheck, Sparkle, Smile, CalendarClock, X, Check, ArrowRight, MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../data/servicesData';

type ActiveTool = 'quiz' | 'face' | 'checklist' | 'prep' | null;

interface ToolsSectionProps {
  isDarkMode: boolean;
}

export const ToolsSection: React.FC<ToolsSectionProps> = ({ isDarkMode }) => {
  const [activeTool, setActiveTool] = useState<ActiveTool>(null);

  // Quiz state
  const [qMidday, setQMidday] = useState('tzone');
  const [qPores, setQPores] = useState('visible');
  const [qReactivity, setQReactivity] = useState('occasional');
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Face guide state
  const [faceShape, setFaceShape] = useState<'oval' | 'round' | 'square' | 'heart' | 'diamond'>('oval');

  // Checklist state
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    water: true,
    spf: true,
    cleanse: false,
    serum: false,
    sleep: false,
  });

  const checklistItems = [
    { id: 'water', label: 'Drank 2.5L+ structured water for cellular hydration' },
    { id: 'spf', label: 'Applied broad-spectrum SPF 50+ 20 mins before sun exposure' },
    { id: 'cleanse', label: 'Completed evening double cleanse to dissolve sunscreen & pollution' },
    { id: 'serum', label: 'Applied active antioxidant or peptide serum on damp skin' },
    { id: 'sleep', label: '7+ hours of beauty restorative sleep on a silk/satin pillow' },
  ];

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / checklistItems.length) * 100);

  const toggleChecklist = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getQuizDiagnosis = () => {
    if (qMidday === 'tight') {
      return {
        type: 'Lipid-Depleted / Dry Skin Barrier',
        summary: 'Your skin barrier requires lipid replenishment and deep moisture encapsulation.',
        treatment: 'Hydrafacial MD + IV Hydration Drip'
      };
    }
    if (qMidday === 'shiny') {
      return {
        type: 'Hyper-Sebaceous / Acne-Prone Skin',
        summary: 'Your pores are overproducing sebum while needing non-comedogenic balancing.',
        treatment: 'Laser Carbon Peel + Advanced Skin Rejuvenation'
      };
    }
    if (qReactivity === 'frequent') {
      return {
        type: 'Reactive / Sensitive Acid Mantle',
        summary: 'Gentle calming botanicals and restorative ceramides are essential.',
        treatment: 'Gentle Hydrafacial Sensitive Protocol'
      };
    }
    return {
      type: 'Combination Balance Profile',
      summary: 'You require targeted T-zone pore refinement alongside cheek barrier hydration.',
      treatment: 'Hydrafacial MD + Glutathione Therapy'
    };
  };

  const diagnosis = getQuizDiagnosis();

  const handleWhatsappQuiz = () => {
    const text = encodeURIComponent(
      `Hello VELICS THE GLOW STUDIO, my skin quiz result was "${diagnosis.type}". I would like to book the recommended "${diagnosis.treatment}".`
    );
    window.open(`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section
      id="tools"
      className={`py-24 transition-colors duration-300 relative ${
        isDarkMode ? 'bg-[#0B0B0C]' : 'bg-[#FAF9F6]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border mb-4 ${
              isDarkMode
                ? 'border-[#D4AF37]/30 bg-[#141416] text-[#D4AF37]'
                : 'border-[#AA820A]/40 bg-white text-[#996515] shadow-sm'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px] tracking-[0.25em] uppercase font-semibold">
              Interactive Utilities
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-serif-brand font-bold mb-4 ${
              isDarkMode ? 'text-[#F7F6F3]' : 'text-[#141416]'
            }`}
          >
            Free Studio{' '}
            <span className={isDarkMode ? 'gold-text-gradient' : 'gold-text-gradient-light'}>
              Beauty Tools
            </span>
          </h2>
          <p
            className={`text-base font-light leading-relaxed ${
              isDarkMode ? 'text-[#A39E93]' : 'text-[#5C5850]'
            }`}
          >
            Assess your skin profile, explore facial harmony proportions, and track your daily radiance rituals with our complimentary aesthetic calculators.
          </p>
        </div>

        {/* 4 Tool Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Tool 1 */}
          <div
            className={`p-6 rounded-3xl border transition-all flex flex-col justify-between group hover:-translate-y-1.5 shadow-md ${
              isDarkMode
                ? 'bg-[#141417] border-[#D4AF37]/20 hover:border-[#D4AF37]/60'
                : 'bg-white border-[#D4AF37]/30 hover:border-[#AA820A]/70 shadow-lg'
            }`}
          >
            <div>
              <div
                className={`p-3 rounded-2xl w-fit mb-4 transition-colors ${
                  isDarkMode
                    ? 'bg-[#1C1C22] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B0B0C]'
                    : 'bg-[#FAF9F6] text-[#AA820A] group-hover:bg-[#AA820A] group-hover:text-white border border-[#D4AF37]/30'
                }`}
              >
                <ClipboardCheck className="w-5 h-5" />
              </div>
              <h3
                className={`text-lg font-serif-brand font-bold mb-2 ${
                  isDarkMode ? 'text-[#F7F6F3]' : 'text-[#141416]'
                }`}
              >
                Skin Type Quiz
              </h3>
              <p className={`text-xs leading-relaxed mb-6 ${isDarkMode ? 'text-[#A39E93]' : 'text-[#666]'}`}>
                A 60-second diagnostic evaluating your moisture barrier, pore dynamics, and optimal clinic rituals.
              </p>
            </div>
            <button
              onClick={() => {
                setActiveTool('quiz');
                setQuizSubmitted(false);
              }}
              className="w-full py-3 rounded-2xl border border-[#D4AF37]/50 text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0B0C] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
            >
              <span>Take Quiz</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Tool 2 */}
          <div
            className={`p-6 rounded-3xl border transition-all flex flex-col justify-between group hover:-translate-y-1.5 shadow-md ${
              isDarkMode
                ? 'bg-[#141417] border-[#D4AF37]/20 hover:border-[#D4AF37]/60'
                : 'bg-white border-[#D4AF37]/30 hover:border-[#AA820A]/70 shadow-lg'
            }`}
          >
            <div>
              <div
                className={`p-3 rounded-2xl w-fit mb-4 transition-colors ${
                  isDarkMode
                    ? 'bg-[#1C1C22] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B0B0C]'
                    : 'bg-[#FAF9F6] text-[#AA820A] group-hover:bg-[#AA820A] group-hover:text-white border border-[#D4AF37]/30'
                }`}
              >
                <Smile className="w-5 h-5" />
              </div>
              <h3
                className={`text-lg font-serif-brand font-bold mb-2 ${
                  isDarkMode ? 'text-[#F7F6F3]' : 'text-[#141416]'
                }`}
              >
                Face Harmony Guide
              </h3>
              <p className={`text-xs leading-relaxed mb-6 ${isDarkMode ? 'text-[#A39E93]' : 'text-[#666]'}`}>
                Discover contouring, brow framing, and filler sculpting suggestions for your specific bone structure.
              </p>
            </div>
            <button
              onClick={() => setActiveTool('face')}
              className="w-full py-3 rounded-2xl border border-[#D4AF37]/50 text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0B0C] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
            >
              <span>Explore Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Tool 3 */}
          <div
            className={`p-6 rounded-3xl border transition-all flex flex-col justify-between group hover:-translate-y-1.5 shadow-md ${
              isDarkMode
                ? 'bg-[#141417] border-[#D4AF37]/20 hover:border-[#D4AF37]/60'
                : 'bg-white border-[#D4AF37]/30 hover:border-[#AA820A]/70 shadow-lg'
            }`}
          >
            <div>
              <div
                className={`p-3 rounded-2xl w-fit mb-4 transition-colors ${
                  isDarkMode
                    ? 'bg-[#1C1C22] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B0B0C]'
                    : 'bg-[#FAF9F6] text-[#AA820A] group-hover:bg-[#AA820A] group-hover:text-white border border-[#D4AF37]/30'
                }`}
              >
                <Sparkle className="w-5 h-5" />
              </div>
              <h3
                className={`text-lg font-serif-brand font-bold mb-2 ${
                  isDarkMode ? 'text-[#F7F6F3]' : 'text-[#141416]'
                }`}
              >
                Self-Care Tracker
              </h3>
              <p className={`text-xs leading-relaxed mb-6 ${isDarkMode ? 'text-[#A39E93]' : 'text-[#666]'}`}>
                An interactive daily tracker for water intake, SPF compliance, and barrier protection habits.
              </p>
            </div>
            <button
              onClick={() => setActiveTool('checklist')}
              className="w-full py-3 rounded-2xl border border-[#D4AF37]/50 text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0B0C] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
            >
              <span>Launch Tracker</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Tool 4 */}
          <div
            className={`p-6 rounded-3xl border transition-all flex flex-col justify-between group hover:-translate-y-1.5 shadow-md ${
              isDarkMode
                ? 'bg-[#141417] border-[#D4AF37]/20 hover:border-[#D4AF37]/60'
                : 'bg-white border-[#D4AF37]/30 hover:border-[#AA820A]/70 shadow-lg'
            }`}
          >
            <div>
              <div
                className={`p-3 rounded-2xl w-fit mb-4 transition-colors ${
                  isDarkMode
                    ? 'bg-[#1C1C22] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B0B0C]'
                    : 'bg-[#FAF9F6] text-[#AA820A] group-hover:bg-[#AA820A] group-hover:text-white border border-[#D4AF37]/30'
                }`}
              >
                <CalendarClock className="w-5 h-5" />
              </div>
              <h3
                className={`text-lg font-serif-brand font-bold mb-2 ${
                  isDarkMode ? 'text-[#F7F6F3]' : 'text-[#141416]'
                }`}
              >
                Appointment Prep
              </h3>
              <p className={`text-xs leading-relaxed mb-6 ${isDarkMode ? 'text-[#A39E93]' : 'text-[#666]'}`}>
                Pre-session clinical instructions for Laser, Hydrafacial, PRP, and Botox to maximize results.
              </p>
            </div>
            <button
              onClick={() => setActiveTool('prep')}
              className="w-full py-3 rounded-2xl border border-[#D4AF37]/50 text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0B0C] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
            >
              <span>View Prep Tips</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Tool Modal Dialog */}
      {activeTool && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div
            className={`border rounded-3xl max-w-xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl ${
              isDarkMode ? 'bg-[#141417] border-[#D4AF37]/45' : 'bg-white border-[#D4AF37]/60'
            }`}
          >
            <button
              onClick={() => setActiveTool(null)}
              className="absolute top-4 right-4 p-2 text-[#888] hover:text-black dark:hover:text-white rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* QUIZ MODAL */}
            {activeTool === 'quiz' && (
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
                  Diagnostic Quiz
                </span>
                <h3
                  className={`text-2xl font-serif-brand font-bold mt-1 mb-4 ${
                    isDarkMode ? 'text-[#F7F6F3]' : 'text-[#141416]'
                  }`}
                >
                  Skin Barrier Diagnostic
                </h3>
                {!quizSubmitted ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold mb-1.5 text-[#888]">
                        1. How does your skin feel around 2:00 PM?
                      </label>
                      <select
                        value={qMidday}
                        onChange={(e) => setQMidday(e.target.value)}
                        className={`w-full rounded-xl px-3.5 py-3 text-xs focus:outline-none ${
                          isDarkMode
                            ? 'bg-[#0B0B0C] border border-[#D4AF37]/30 text-[#F7F6F3]'
                            : 'bg-[#F7F6F2] border border-[#AA820A]/30 text-[#141416]'
                        }`}
                      >
                        <option value="tight">Tight, dry, or looks visibly flaky</option>
                        <option value="shiny">Excessively oily across forehead and cheeks</option>
                        <option value="tzone">Oily on nose and forehead, normal elsewhere</option>
                        <option value="balanced">Comfortable, supple, and balanced</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold mb-1.5 text-[#888]">
                        2. How would you describe your pore visibility?
                      </label>
                      <select
                        value={qPores}
                        onChange={(e) => setQPores(e.target.value)}
                        className={`w-full rounded-xl px-3.5 py-3 text-xs focus:outline-none ${
                          isDarkMode
                            ? 'bg-[#0B0B0C] border border-[#D4AF37]/30 text-[#F7F6F3]'
                            : 'bg-[#F7F6F2] border border-[#AA820A]/30 text-[#141416]'
                        }`}
                      >
                        <option value="invisible">Barely noticeable or very fine</option>
                        <option value="visible">Visible around the nose, chin, and central forehead</option>
                        <option value="enlarged">Enlarged and prone to persistent blackheads</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold mb-1.5 text-[#888]">
                        3. How often do you experience flushing or stinging?
                      </label>
                      <select
                        value={qReactivity}
                        onChange={(e) => setQReactivity(e.target.value)}
                        className={`w-full rounded-xl px-3.5 py-3 text-xs focus:outline-none ${
                          isDarkMode
                            ? 'bg-[#0B0B0C] border border-[#D4AF37]/30 text-[#F7F6F3]'
                            : 'bg-[#F7F6F2] border border-[#AA820A]/30 text-[#141416]'
                        }`}
                      >
                        <option value="rarely">Rarely or never</option>
                        <option value="occasional">Occasionally with new active products or extreme sun</option>
                        <option value="frequent">Frequently stings or turns red easily</option>
                      </select>
                    </div>
                    <button
                      onClick={() => setQuizSubmitted(true)}
                      className="w-full py-3.5 rounded-full text-xs font-bold tracking-wider uppercase text-[#0B0B0C] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA820A] hover:brightness-110 mt-4 transition-all cursor-pointer shadow-md"
                    >
                      Calculate Skin Assessment
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4 animate-fadeIn">
                    <div
                      className={`p-4 rounded-2xl border ${
                        isDarkMode ? 'bg-[#1B1B20] border-[#D4AF37]/30' : 'bg-[#FAF9F6] border-[#D4AF37]/50'
                      }`}
                    >
                      <span className="text-[10px] tracking-widest uppercase text-[#D4AF37] font-bold">
                        Assessment Result
                      </span>
                      <h4
                        className={`text-lg font-serif-brand font-bold mt-1 ${
                          isDarkMode ? 'text-[#F7F6F3]' : 'text-[#141416]'
                        }`}
                      >
                        {diagnosis.type}
                      </h4>
                      <p className={`text-xs mt-2 leading-relaxed ${isDarkMode ? 'text-[#C5C2BA]' : 'text-[#555]'}`}>
                        {diagnosis.summary}
                      </p>
                    </div>
                    <div
                      className={`p-4 rounded-2xl border ${
                        isDarkMode ? 'bg-[#0B0B0C] border-white/10' : 'bg-white border-black/10'
                      }`}
                    >
                      <span className="text-[10px] tracking-widest uppercase font-bold block mb-1 text-[#888]">
                        Recommended Treatment at Velics Studio:
                      </span>
                      <p className="text-sm font-bold text-[#D4AF37]">
                        {diagnosis.treatment}
                      </p>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={handleWhatsappQuiz}
                        className="flex-1 py-3 rounded-full text-xs font-bold tracking-wider uppercase text-[#0B0B0C] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA820A] flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Book Recommended Session</span>
                      </button>
                      <button
                        onClick={() => setQuizSubmitted(false)}
                        className={`px-4 py-3 rounded-full text-xs border cursor-pointer ${
                          isDarkMode ? 'border-white/10 text-[#C5C2BA]' : 'border-black/15 text-[#555]'
                        }`}
                      >
                        Retake
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* FACE GUIDE MODAL */}
            {activeTool === 'face' && (
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
                  Aesthetic Symmetry
                </span>
                <h3
                  className={`text-2xl font-serif-brand font-bold mt-1 mb-4 ${
                    isDarkMode ? 'text-[#F7F6F3]' : 'text-[#141416]'
                  }`}
                >
                  Facial Harmony Proportions
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {(['oval', 'round', 'square', 'heart', 'diamond'] as const).map((shape) => (
                    <button
                      key={shape}
                      onClick={() => setFaceShape(shape)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                        faceShape === shape
                          ? 'bg-[#D4AF37] text-[#0B0B0C]'
                          : isDarkMode
                          ? 'bg-[#1C1C22] text-[#C5C2BA] border border-white/5'
                          : 'bg-[#F0EEEA] text-[#555] border border-black/5'
                      }`}
                    >
                      {shape}
                    </button>
                  ))}
                </div>
                <div
                  className={`space-y-4 p-5 rounded-2xl border ${
                    isDarkMode ? 'bg-[#0B0B0C] border-[#D4AF37]/30' : 'bg-[#FAF9F6] border-[#D4AF37]/40'
                  }`}
                >
                  <h4 className="text-base font-serif-brand font-bold text-[#D4AF37] capitalize">
                    {faceShape} Structure Profile
                  </h4>
                  {faceShape === 'oval' && (
                    <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-[#C5C2BA]' : 'text-[#444]'}`}>
                      Naturally balanced proportions. Soft curved jawlines harmonize with winged eyelash extensions and subtle cheekbone dermal contouring.
                    </p>
                  )}
                  {faceShape === 'round' && (
                    <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-[#C5C2BA]' : 'text-[#444]'}`}>
                      Equal width and length with soft curves. Benefited by vertical cheek sculpting, cat-eye lash mapping, and high-arch brow micro-shading.
                    </p>
                  )}
                  {faceShape === 'square' && (
                    <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-[#C5C2BA]' : 'text-[#444]'}`}>
                      Defined angular jawline. Masseter botox slimming combined with soft curved lashes creates exquisite feminine harmony.
                    </p>
                  )}
                  {faceShape === 'heart' && (
                    <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-[#C5C2BA]' : 'text-[#444]'}`}>
                      Wider forehead tapering into a delicate chin. Subtle chin filler projection balances the profile alongside natural doll-eye lashes.
                    </p>
                  )}
                  {faceShape === 'diamond' && (
                    <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-[#C5C2BA]' : 'text-[#444]'}`}>
                      Prominent high cheekbones with narrower forehead and jaw. Temple volumization and medium volume lash fans emphasize natural symmetry.
                    </p>
                  )}
                </div>
                <button
                  onClick={() => setActiveTool(null)}
                  className="w-full mt-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase text-[#0B0B0C] bg-[#D4AF37] cursor-pointer"
                >
                  Close Guide
                </button>
              </div>
            )}

            {/* CHECKLIST TRACKER MODAL */}
            {activeTool === 'checklist' && (
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
                  Daily Tracker
                </span>
                <h3
                  className={`text-2xl font-serif-brand font-bold mt-1 mb-2 ${
                    isDarkMode ? 'text-[#F7F6F3]' : 'text-[#141416]'
                  }`}
                >
                  Daily Glow Habits Tracker
                </h3>
                <p className={`text-xs mb-4 ${isDarkMode ? 'text-[#A39E93]' : 'text-[#666]'}`}>
                  Check off your radiance actions today to build healthy skin momentum.
                </p>

                {/* Progress bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs text-[#D4AF37] font-bold mb-1">
                    <span>Daily Progress</span>
                    <span>{progressPercent}% Complete</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-black/20 dark:bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] transition-all duration-300"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-2.5 mb-6">
                  {checklistItems.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => toggleChecklist(item.id)}
                      className={`p-3.5 rounded-2xl border flex items-center gap-3 cursor-pointer transition-colors ${
                        checkedItems[item.id]
                          ? isDarkMode
                            ? 'bg-[#1B1B20] border-[#D4AF37]/50 text-[#F7F6F3]'
                            : 'bg-white border-[#D4AF37]/60 text-[#141416] shadow-sm'
                          : isDarkMode
                          ? 'bg-[#0B0B0C] border-white/10 text-[#888]'
                          : 'bg-[#F7F6F2] border-black/10 text-[#888]'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                          checkedItems[item.id]
                            ? 'bg-[#D4AF37] border-[#D4AF37] text-[#0B0B0C]'
                            : 'border-black/20 dark:border-white/20'
                        }`}
                      >
                        {checkedItems[item.id] && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span className="text-xs select-none font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>

                {progressPercent === 100 && (
                  <div className="p-3.5 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-center mb-4 text-xs text-[#D4AF37] font-bold">
                    ✨ Perfect 100%! Your skin barrier thanks you for your dedication today.
                  </div>
                )}

                <button
                  onClick={() => setActiveTool(null)}
                  className="w-full py-3 rounded-full text-xs font-bold tracking-wider uppercase text-[#0B0B0C] bg-[#D4AF37] cursor-pointer"
                >
                  Save & Close
                </button>
              </div>
            )}

            {/* PREP GUIDE MODAL */}
            {activeTool === 'prep' && (
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
                  Clinical Protocol
                </span>
                <h3
                  className={`text-2xl font-serif-brand font-bold mt-1 mb-4 ${
                    isDarkMode ? 'text-[#F7F6F3]' : 'text-[#141416]'
                  }`}
                >
                  Pre-Appointment Instructions
                </h3>
                <div className="space-y-4">
                  <div
                    className={`p-4 rounded-2xl border ${
                      isDarkMode ? 'bg-[#0B0B0C] border-white/10' : 'bg-[#FAF9F6] border-black/10'
                    }`}
                  >
                    <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1">
                      For Laser Hair Reduction
                    </h4>
                    <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-[#C5C2BA]' : 'text-[#444]'}`}>
                      Shave the treatment area 24 hours prior with a clean razor. Avoid waxing, threading, or plucking 3 weeks prior so the hair follicle root remains intact.
                    </p>
                  </div>

                  <div
                    className={`p-4 rounded-2xl border ${
                      isDarkMode ? 'bg-[#0B0B0C] border-white/10' : 'bg-[#FAF9F6] border-black/10'
                    }`}
                  >
                    <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1">
                      For Hydrafacial & Peels
                    </h4>
                    <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-[#C5C2BA]' : 'text-[#444]'}`}>
                      Discontinue strong active retinoids, AHA/BHA exfoliants, and tanning beds 48–72 hours prior to ensure zero barrier sensitization.
                    </p>
                  </div>

                  <div
                    className={`p-4 rounded-2xl border ${
                      isDarkMode ? 'bg-[#0B0B0C] border-white/10' : 'bg-[#FAF9F6] border-black/10'
                    }`}
                  >
                    <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1">
                      For PRP & IV Wellness Drips
                    </h4>
                    <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-[#C5C2BA]' : 'text-[#444]'}`}>
                      Drink at least 1 liter of fresh water 2 hours before your appointment to facilitate effortless vein access and concentrated plasma quality.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveTool(null)}
                  className="w-full mt-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase text-[#0B0B0C] bg-[#D4AF37] cursor-pointer"
                >
                  Understood
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
