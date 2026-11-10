'use client';

import { MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const destinationImages = [
  'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
];

export default function Destinations() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="destinations" className="py-28 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-gold-500/20 pb-8">
        <div>
          <span className="text-gold-400 uppercase tracking-[0.3em] text-xs font-semibold block mb-3">
            {t.destinations.tag}
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-sand-50 font-light">
            {t.destinations.title}
          </h2>
        </div>
        <p className="text-sand-200/70 max-w-md text-sm leading-relaxed font-light">
          {t.destinations.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.destinations.items.map((dest, i) => (
          <div
            key={i}
            className="group relative rounded-2xl overflow-hidden bg-emerald-900/30 border border-gold-500/20 hover:border-gold-400/60 transition-all duration-500 flex flex-col h-[460px] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
          >
            {/* Image */}
            <div className="absolute inset-0 z-0">
              <img
                src={destinationImages[i]}
                alt={dest.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/60 to-transparent" />
            </div>

            {/* Tag */}
            <div className="relative z-10 p-6 flex justify-between items-start">
              <span className="text-[10px] tracking-[0.25em] uppercase text-emerald-950 bg-gold-400 font-bold px-3 py-1 rounded-full">
                {dest.tag}
              </span>
            </div>

            {/* Content Bottom */}
            <div className="relative z-10 mt-auto p-6 flex flex-col gap-2">
              <div className="flex items-center gap-1.5 text-gold-300 text-xs">
                <MapPin className="w-3.5 h-3.5" />
                <span>{isRTL ? 'אינדונזיה' : 'Indonesia'}</span>
              </div>
              <h3 className="font-serif text-2xl text-sand-50 font-medium group-hover:text-gold-300 transition-colors">
                {dest.title}
              </h3>
              <p className="text-sand-200/80 text-xs leading-relaxed font-light mb-2">
                {dest.desc}
              </p>
              <div className="flex items-center gap-2 text-gold-400 text-xs uppercase tracking-widest font-semibold pt-2 border-t border-gold-500/15">
                <span>{t.destinations.discover}</span>
                <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isRTL ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
