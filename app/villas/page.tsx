'use client';

import Navbar from '@/components/Navbar';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';
import { LanguageProvider, useLanguage } from '@/components/LanguageContext';
import { Sparkles, BedDouble, Users, Waves, ShieldCheck, ArrowRight, Star } from 'lucide-react';

function VillasContent() {
  const { t, isRTL } = useLanguage();
  const pageData = t.villasPage;

  return (
    <main className="min-h-screen bg-emerald-950 text-sand-50 selection:bg-gold-500 selection:text-emerald-950">
      <Navbar />

      {/* Villas Hero */}
      <section className="relative pt-36 pb-20 px-6 max-w-7xl mx-auto text-center border-b border-gold-500/15">
        <div className="max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-gold-400 uppercase tracking-[0.35em] text-xs font-semibold px-4 py-2 rounded-full border border-gold-500/30 bg-emerald-900/40 backdrop-blur-md mb-6">
            <Sparkles className="w-3.5 h-3.5" />
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

      {/* Villas Showcase Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {pageData.items.map((villa) => (
            <div
              key={villa.id}
              className="flex flex-col rounded-3xl overflow-hidden bg-emerald-900/20 border border-gold-500/20 hover:border-gold-400/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 group"
            >
              {/* Image Preview */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={villa.image}
                  alt={villa.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent" />
                <div className="absolute top-4 left-4 bg-emerald-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gold-400/40 text-gold-300 text-xs font-medium flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                  <span>{villa.badge}</span>
                </div>
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold block mb-1">
                    {villa.location}
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl text-sand-50 font-medium">
                    {villa.name}
                  </h2>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-8 flex flex-col flex-grow justify-between gap-6">
                <p className="text-sand-200/80 text-sm font-light leading-relaxed">
                  {villa.tagline}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-emerald-950/70 border border-gold-500/15 text-xs text-sand-200/90 font-light">
                  <div className="flex items-center gap-2">
                    <BedDouble className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span>{villa.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span>{villa.guests}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Waves className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span>{villa.pool}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span>{villa.service}</span>
                  </div>
                </div>

                {/* Amenities Badges */}
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold block mb-2">
                    {pageData.amenitiesLabel}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {villa.amenities.map((am, aIdx) => (
                      <span key={aIdx} className="text-[11px] px-3 py-1 rounded-full bg-emerald-950/90 border border-gold-500/20 text-sand-200/80">
                        {am}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & Action */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-gold-500/20">
                  <div>
                    <span className="text-[10px] text-sand-200/50 uppercase tracking-widest block">Tariff</span>
                    <span className="font-serif text-2xl text-gold-300 font-semibold">{villa.rate}</span>
                  </div>
                  <a
                    href="#booking"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-bold text-emerald-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:shadow-[0_0_25px_rgba(229,195,101,0.4)] transition-all"
                  >
                    <span>{pageData.reserveBtn}</span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BookingSection />
      <Footer />
    </main>
  );
}

export default function VillasPage() {
  return (
    <LanguageProvider>
      <VillasContent />
    </LanguageProvider>
  );
}
