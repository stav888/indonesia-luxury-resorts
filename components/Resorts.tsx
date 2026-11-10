'use client';

import { Star, ShieldCheck, Waves, Sparkles } from 'lucide-react';

const resorts = [
  {
    name: 'Amanjiwo Heritage Sanctuary',
    location: 'Borobudur, Central Java',
    tagline: 'Colonnaded temple suites facing sunrise over 9th-century stupas',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    rate: 'From $1,850 / night',
    features: ['Private Plunge Pool', 'Javanese Spa Rituals', 'Dedicated Butler', 'Sunrise Stupa Access'],
  },
  {
    name: 'Nihi Sumba Ocean Haven',
    location: 'Sumba Coastline',
    tagline: 'Voted #1 Hotel in the World — Treehouse villas overlooking Occy’s Left',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    rate: 'From $2,400 / night',
    features: ['Equestrian Center', 'Nihioka Spa Safari', 'Private Surfing Wave', 'Organic Farm Dining'],
  },
  {
    name: 'Misool Eco Private Atoll',
    location: 'Batbitim Island, Raja Ampat',
    tagline: 'Pristine overwater villa compound surrounded by an exclusive 300,000-acre marine reserve',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
    rate: 'From $3,100 / night',
    features: ['Coral Reef Nursery', 'Overwater Hammocks', 'Marine Biologist Guides', 'Zero Carbon Footprint'],
  },
];

export default function Resorts() {
  return (
    <section id="resorts" className="py-28 bg-emerald-900/20 border-y border-gold-500/15">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gold-400 uppercase tracking-[0.35em] text-xs font-semibold block mb-3">
            Ultra-Exclusive Portfolios
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-sand-50 font-light mb-6">
            Signature Sanctuaries
          </h2>
          <p className="text-sand-200/80 text-sm md:text-base leading-relaxed font-light">
            Architectural marvels engineered into raw topography, delivering privacy, bespoke gastronomy, and restorative seclusion beyond comparison.
          </p>
        </div>

        <div className="space-y-16">
          {resorts.map((resort, idx) => (
            <div
              key={idx}
              className={`flex flex-col lg:flex-row gap-10 items-center p-8 md:p-12 rounded-3xl bg-emerald-950/80 border border-gold-500/20 hover:border-gold-400/50 transition-all duration-500 ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden relative group h-[380px] md:h-[440px]">
                <img
                  src={resort.image}
                  alt={resort.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-1 bg-emerald-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-gold-400/30 text-gold-400 text-xs font-medium">
                  <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                  <span>Ultra-Luxe Gold Tier</span>
                </div>
              </div>

              {/* Text Details Side */}
              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold block mb-2">
                    {resort.location}
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl text-sand-50 font-medium mb-3">
                    {resort.name}
                  </h3>
                  <p className="text-sand-200/80 text-sm md:text-base font-light leading-relaxed">
                    {resort.tagline}
                  </p>
                </div>

                {/* Feature Tags */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {resort.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-sand-200/90 font-light">
                      <Sparkles className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Pricing & Booking */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-gold-500/20">
                  <div>
                    <span className="text-[11px] text-sand-200/60 uppercase tracking-widest block">Tariff Guarantee</span>
                    <span className="font-serif text-2xl text-gold-300 font-semibold">{resort.rate}</span>
                  </div>
                  <a
                    href="#booking"
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-bold text-emerald-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:shadow-[0_0_25px_rgba(229,195,101,0.4)] transition-all"
                  >
                    Reserve Villa
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
