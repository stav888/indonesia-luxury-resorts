'use client';

import { useEffect, useRef } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    import('gsap').then(({ default: gsap }) => {
      if (!titleRef.current || !subtitleRef.current || !ctaRef.current) return;
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3 }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1.2 },
          '-=0.6'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.5'
        );
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background with Dark Luxe Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2400&q=85"
          alt="Luxury Resort Bali Indonesia"
          className="w-full h-full object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/70 to-emerald-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-emerald-950/50 to-emerald-950" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <p
          ref={subtitleRef}
          className="inline-flex items-center gap-2 text-gold-400 uppercase tracking-[0.4em] text-xs font-semibold px-4 py-2 rounded-full border border-gold-500/30 bg-emerald-900/40 backdrop-blur-md mb-8"
        >
          <Sparkles className="w-3.5 h-3.5" />
          {t.hero.eyebrow}
        </p>

        {/* Hero Title */}
        <h1
          ref={titleRef}
          className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-sand-50 font-light leading-[1.08] mb-8"
        >
          {t.hero.titleLine1} <br />
          <span className="italic font-normal bg-gradient-to-r from-gold-300 via-gold-400 to-amber-200 bg-clip-text text-transparent">
            {t.hero.titleLine2}
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-sand-200/90 text-base md:text-lg font-light leading-relaxed mb-12">
          {t.hero.description}
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="#resorts"
            className="w-full sm:w-auto px-10 py-4 rounded-full text-xs uppercase tracking-[0.25em] font-bold text-emerald-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:shadow-[0_0_40px_rgba(229,195,101,0.5)] transition-all duration-300 transform hover:-translate-y-1"
          >
            {t.hero.exploreBtn}
          </a>
          <a
            href="/journeys"
            className="w-full sm:w-auto px-10 py-4 rounded-full text-xs uppercase tracking-[0.25em] font-medium text-sand-100 border border-gold-400/40 hover:border-gold-300 hover:bg-gold-500/10 backdrop-blur-sm transition-all duration-300"
          >
            {t.hero.expeditionsBtn}
          </a>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gold-400/70 text-[10px] tracking-[0.3em] uppercase">
        <span>{t.hero.scrollText}</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-gold-400" />
      </div>
    </section>
  );
}
