'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function BookingSection() {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-14 sm:py-28 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="relative rounded-3xl p-6 sm:p-12 md:p-16 bg-gradient-to-b from-emerald-900/60 via-emerald-950 to-emerald-950 border border-gold-500/30 shadow-[0_0_80px_rgba(3,26,20,0.8)] overflow-hidden">
        {/* Subtle Gold Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-800/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-gold-400 uppercase tracking-[0.35em] text-xs font-semibold block mb-3">
            {t.booking.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-sand-50 font-light mb-4">
            {t.booking.title}
          </h2>
          <p className="text-sand-200/80 text-sm font-light leading-relaxed">
            {t.booking.subtitle}
          </p>
        </div>

        {submitted ? (
          <div className="relative z-10 text-center py-12 px-6 rounded-2xl bg-emerald-900/40 border border-gold-400/40 max-w-lg mx-auto">
            <CheckCircle2 className="w-12 h-12 text-gold-400 mx-auto mb-4 animate-bounce" />
            <h3 className="font-serif text-2xl text-sand-50 mb-2">{t.booking.successTitle}</h3>
            <p className="text-sand-200/80 text-sm font-light leading-relaxed mb-6">
              {t.booking.successDesc}
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs uppercase tracking-widest text-gold-400 underline hover:text-gold-300"
            >
              {t.booking.submitAnother}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative z-10 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-start">
            <div className="text-start">
              <label className="block text-xs uppercase tracking-widest text-gold-400/90 mb-2 font-medium text-start">
                {t.booking.fullName}
              </label>
              <input
                type="text"
                required
                dir="auto"
                placeholder={t.booking.fullNamePlaceholder}
                className="w-full bg-emerald-950/90 border border-gold-500/30 rounded-xl px-4 py-3.5 text-sand-100 text-sm focus:outline-none focus:border-gold-400 transition-colors text-start"
              />
            </div>

            <div className="text-start">
              <label className="block text-xs uppercase tracking-widest text-gold-400/90 mb-2 font-medium text-start">
                {t.booking.email}
              </label>
              <input
                type="email"
                required
                dir="auto"
                placeholder={t.booking.emailPlaceholder}
                className="w-full bg-emerald-950/90 border border-gold-500/30 rounded-xl px-4 py-3.5 text-sand-100 text-sm focus:outline-none focus:border-gold-400 transition-colors text-start"
              />
            </div>

            <div className="text-start">
              <label className="block text-xs uppercase tracking-widest text-gold-400/90 mb-2 font-medium text-start">
                {t.booking.destination}
              </label>
              <select dir="auto" className="w-full bg-emerald-950/90 border border-gold-500/30 rounded-xl px-4 py-3.5 text-sand-100 text-sm focus:outline-none focus:border-gold-400 transition-colors text-start">
                {t.booking.destOptions.map((opt, oIdx) => (
                  <option key={oIdx}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="text-start">
              <label className="block text-xs uppercase tracking-widest text-gold-400/90 mb-2 font-medium text-start">
                {t.booking.partySize}
              </label>
              <select dir="auto" className="w-full bg-emerald-950/90 border border-gold-500/30 rounded-xl px-4 py-3.5 text-sand-100 text-sm focus:outline-none focus:border-gold-400 transition-colors text-start">
                {t.booking.partyOptions.map((opt, oIdx) => (
                  <option key={oIdx}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2 text-start">
              <label className="block text-xs uppercase tracking-widest text-gold-400/90 mb-2 font-medium text-start">
                {t.booking.notes}
              </label>
              <textarea
                rows={3}
                dir="auto"
                placeholder={t.booking.notesPlaceholder}
                className="w-full bg-emerald-950/90 border border-gold-500/30 rounded-xl px-4 py-3.5 text-sand-100 text-sm focus:outline-none focus:border-gold-400 transition-colors resize-none text-start"
              />
            </div>

            <div className="md:col-span-2 pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-full text-xs uppercase tracking-[0.25em] font-bold text-emerald-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:shadow-[0_0_35px_rgba(229,195,101,0.5)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>{t.booking.submitBtn}</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
