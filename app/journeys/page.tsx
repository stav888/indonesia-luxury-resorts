'use client';

import Navbar from '@/components/Navbar';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';
import { LanguageProvider, useLanguage } from '@/components/LanguageContext';
import { Compass, Clock, DollarSign, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

function JourneysContent() {
  const { t, isRTL } = useLanguage();
  const pageData = t.journeysPage;

  return (
    <main className="min-h-screen bg-emerald-950 text-sand-50 selection:bg-gold-500 selection:text-emerald-950">
      <Navbar />

      {/* Journeys Hero */}
      <section className="relative pt-36 pb-20 px-6 max-w-7xl mx-auto text-center border-b border-gold-500/15">
        <div className="max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-gold-400 uppercase tracking-[0.35em] text-xs font-semibold px-4 py-2 rounded-full border border-gold-500/30 bg-emerald-900/40 backdrop-blur-md mb-6">
            <Compass className="w-3.5 h-3.5" />
            {pageData.badge}
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-sand-50 font-light mb-6 tracking-tight">
            {pageData.title}
          </h1>
          <p className="text-sand-200/80 text-base md:text-lg font-light leading-relaxed">
            {pageData.subtitle}
          </p>
        </div>
      </section>

      {/* Expeditions List */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-20">
        {pageData.items.map((journey, idx) => (
          <div
            key={journey.id}
            className={`flex flex-col lg:flex-row gap-12 items-center p-8 md:p-12 rounded-3xl bg-emerald-900/20 border border-gold-500/20 hover:border-gold-400/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image Preview */}
            <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden relative group h-[420px]">
              <img
                src={journey.image}
                alt={journey.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-emerald-950/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-gold-400/40 text-gold-300 text-xs font-semibold uppercase tracking-wider">
                {journey.badge}
              </div>
            </div>

            {/* Details Side */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-medium block mb-2">
                  {journey.location}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-sand-50 font-medium mb-3">
                  {journey.title}
                </h2>
                <p className="text-sand-200/80 text-sm md:text-base font-light leading-relaxed">
                  {journey.description}
                </p>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-emerald-950/70 border border-gold-500/15">
                <div className="flex items-center gap-3 text-xs">
                  <Clock className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <div>
                    <span className="text-sand-200/50 block text-[10px] uppercase tracking-wider">{pageData.durationLabel}</span>
                    <span className="text-sand-100 font-medium">{journey.duration}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <DollarSign className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <div>
                    <span className="text-sand-200/50 block text-[10px] uppercase tracking-wider">{pageData.priceLabel}</span>
                    <span className="text-gold-300 font-semibold">{journey.price}</span>
                  </div>
                </div>
              </div>

              {/* Highlights & Inclusions */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{pageData.highlightsLabel}</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {journey.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="text-xs text-sand-200/80 flex items-start gap-2">
                        <span className="text-gold-400 mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-sand-200/60 font-semibold mb-2">
                    {pageData.inclusionsLabel}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {journey.inclusions.map((inc, iIdx) => (
                      <span key={iIdx} className="text-[11px] px-3 py-1 rounded-full bg-emerald-950/80 border border-gold-500/20 text-sand-200/90">
                        {inc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href="#booking"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-bold text-emerald-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:shadow-[0_0_30px_rgba(229,195,101,0.4)] transition-all"
                >
                  <span>{pageData.bookBtn}</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      <BookingSection />
      <Footer />
    </main>
  );
}

export default function JourneysPage() {
  return (
    <LanguageProvider>
      <JourneysContent />
    </LanguageProvider>
  );
}
