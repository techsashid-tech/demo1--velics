import React, { useState, useEffect } from 'react';
import { X, Calendar, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { SERVICES, STUDIO_INFO } from '../data/servicesData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  isDarkMode: boolean;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultService,
  isDarkMode,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: defaultService || SERVICES[0].title,
    date: '',
    time: '11:00 AM',
    notes: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello VELICS THE GLOW STUDIO!%0A%0A*New Appointment Request*%0A- Name: ${formData.name}%0A- Phone: ${formData.phone}%0A- Service: ${formData.service}%0A- Date: ${formData.date}%0A- Preferred Time: ${formData.time}%0A- Special Notes: ${formData.notes || 'None'}`
    );
    window.open(`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${text}`, '_blank');
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className={`border rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl max-h-[95vh] overflow-y-auto ${
          isDarkMode ? 'bg-[#141417] border-[#D4AF37]/50' : 'bg-white border-[#D4AF37]/60'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#888] hover:text-black dark:hover:text-white rounded-full transition-colors cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6 space-y-4 animate-fadeIn">
            <CheckCircle2 className="w-14 h-14 text-[#25D366] mx-auto" />
            <h3
              className={`text-2xl font-serif-brand font-bold ${
                isDarkMode ? 'text-[#F7F6F3]' : 'text-[#141416]'
              }`}
            >
              Request Ready on WhatsApp!
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed ${isDarkMode ? 'text-[#C5C2BA]' : 'text-[#555]'}`}>
              Your appointment details have opened in WhatsApp for instant verification with our Chandrasekharpur front desk.
            </p>
            <div
              className={`p-4 rounded-2xl border text-left text-xs space-y-1.5 ${
                isDarkMode ? 'bg-[#0B0B0C] border-white/5 text-[#A39E93]' : 'bg-[#FAF9F6] border-black/5 text-[#555]'
              }`}
            >
              <div>
                Client: <strong className={isDarkMode ? 'text-[#F7F6F3]' : 'text-[#141416]'}>{formData.name}</strong>
              </div>
              <div>
                Treatment: <strong className="text-[#D4AF37]">{formData.service}</strong>
              </div>
              <div>
                Slot:{' '}
                <strong className={isDarkMode ? 'text-[#F7F6F3]' : 'text-[#141416]'}>
                  {formData.date} at {formData.time}
                </strong>
              </div>
            </div>
            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="w-full py-3 rounded-full text-xs font-bold tracking-wider uppercase text-[#0B0B0C] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA820A] cursor-pointer shadow-md"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold mb-2 ${
                  isDarkMode ? 'border-[#D4AF37]/30 bg-[#0B0B0C]' : 'border-[#AA820A]/40 bg-[#FAF9F6]'
                }`}
              >
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                <span>Velics Studio Booking</span>
              </div>
              <h3
                className={`text-2xl font-serif-brand font-bold ${
                  isDarkMode ? 'text-[#F7F6F3]' : 'text-[#141416]'
                }`}
              >
                Schedule Your Consultation
              </h3>
              <p className={`text-xs mt-1 ${isDarkMode ? 'text-[#A39E93]' : 'text-[#666]'}`}>
                Chandrasekharpur, Bhubaneswar • Open Daily 9:00 AM – 8:00 PM
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#D4AF37] font-bold mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#D4AF37] ${
                    isDarkMode
                      ? 'bg-[#0B0B0C] border border-[#D4AF37]/30 text-[#F7F6F3] placeholder-[#666]'
                      : 'bg-[#F7F6F2] border border-[#AA820A]/30 text-[#141416] placeholder-[#888]'
                  }`}
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#D4AF37] font-bold mb-1">
                  WhatsApp Contact Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#D4AF37] ${
                    isDarkMode
                      ? 'bg-[#0B0B0C] border border-[#D4AF37]/30 text-[#F7F6F3] placeholder-[#666]'
                      : 'bg-[#F7F6F2] border border-[#AA820A]/30 text-[#141416] placeholder-[#888]'
                  }`}
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#D4AF37] font-bold mb-1">
                  Selected Service *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className={`w-full rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#D4AF37] cursor-pointer ${
                    isDarkMode
                      ? 'bg-[#0B0B0C] border border-[#D4AF37]/30 text-[#F7F6F3]'
                      : 'bg-[#F7F6F2] border border-[#AA820A]/30 text-[#141416]'
                  }`}
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title} ({s.categoryLabel})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#D4AF37] font-bold mb-1">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={`w-full rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#D4AF37] cursor-pointer ${
                      isDarkMode
                        ? 'bg-[#0B0B0C] border border-[#D4AF37]/30 text-[#F7F6F3]'
                        : 'bg-[#F7F6F2] border border-[#AA820A]/30 text-[#141416]'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#D4AF37] font-bold mb-1">
                    Preferred Time *
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className={`w-full rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#D4AF37] cursor-pointer ${
                      isDarkMode
                        ? 'bg-[#0B0B0C] border border-[#D4AF37]/30 text-[#F7F6F3]'
                        : 'bg-[#F7F6F2] border border-[#AA820A]/30 text-[#141416]'
                    }`}
                  >
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="01:00 PM">01:00 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                    <option value="06:30 PM">06:30 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#D4AF37] font-bold mb-1">
                  Notes / Questions (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Skin sensitivities, specific concerns, or questions..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className={`w-full rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#D4AF37] ${
                    isDarkMode
                      ? 'bg-[#0B0B0C] border border-[#D4AF37]/30 text-[#F7F6F3] placeholder-[#666]'
                      : 'bg-[#F7F6F2] border border-[#AA820A]/30 text-[#141416] placeholder-[#888]'
                  }`}
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase text-[#0B0B0C] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA820A] hover:brightness-110 shadow-lg shadow-[#D4AF37]/25 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Confirm & Send via WhatsApp</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
