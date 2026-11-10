'use client';

import { useState } from 'react';
import { Compass, Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-emerald-950/70 border-b border-gold-500/15">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-gold-400 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-emerald-950 transition-colors">
            <Compass className="w-5 h-5 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl tracking-[0.25em] text-sand-50 font-medium">NUSANTARA</span>
            <span className="text-[10px] tracking-[0.4em] text-gold-400 uppercase -mt-1 font-sans">
              {language === 'he' ? 'נוסנטארה • אינדונזיה' : 'SANCTUARY • INDONESIA'}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.25em] text-sand-200">
          <a href="#destinations" className="hover:text-gold-400 transition-colors">{t.nav.destinations}</a>
          <a href="#resorts" className="hover:text-gold-400 transition-colors">{t.nav.sanctuaries}</a>
          <a href="#experiences" className="hover:text-gold-400 transition-colors">{t.nav.journeys}</a>
          <a href="#villas" className="hover:text-gold-400 transition-colors">{t.nav.villas}</a>
        </nav>

        {/* Controls: Language switcher & CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher Pill */}
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-gold-500/30 bg-emerald-900/40 hover:bg-gold-500/15 text-gold-300 text-xs tracking-wider transition-all"
            title={language === 'en' ? 'החלף לעברית' : 'Switch to English'}
          >
            <Globe className="w-3.5 h-3.5 text-gold-400" />
            <span className="font-medium">{language === 'en' ? 'עברית' : 'English'}</span>
          </button>

          {/* CTA */}
          <a
            href="#booking"
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-medium text-emerald-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:shadow-[0_0_30px_rgba(229,195,101,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>{t.nav.inquire}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold-500/40 text-gold-400 text-xs"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'עברית' : 'EN'}</span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gold-400 p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-emerald-950/95 border-b border-gold-500/20 px-6 py-8 flex flex-col gap-6 text-sm tracking-[0.2em] uppercase">
          <a href="#destinations" onClick={() => setIsOpen(false)} className="text-sand-100 hover:text-gold-400">{t.nav.destinations}</a>
          <a href="#resorts" onClick={() => setIsOpen(false)} className="text-sand-100 hover:text-gold-400">{t.nav.sanctuaries}</a>
          <a href="#experiences" onClick={() => setIsOpen(false)} className="text-sand-100 hover:text-gold-400">{t.nav.journeys}</a>
          <a href="#villas" onClick={() => setIsOpen(false)} className="text-sand-100 hover:text-gold-400">{t.nav.villas}</a>
          <a
            href="#booking"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-3 rounded-full bg-gold-400 text-emerald-950 font-bold"
          >
            {t.nav.inquire}
          </a>
        </div>
      )}
    </header>
  );
}
