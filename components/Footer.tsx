'use client';

import { Compass, Phone, Mail, Shield } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-gold-500/20 bg-emerald-950/90 pt-16 sm:pt-20 pb-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-16 text-start">
        {/* Brand */}
        <div className="space-y-4 sm:col-span-2 md:col-span-1 text-start">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-gold-400 flex items-center justify-center text-gold-400">
              <Compass className="w-4 h-4" />
            </div>
            <span className="font-serif text-xl tracking-[0.25em] text-sand-50 font-medium">NUSANTARA</span>
          </div>
          <p className="text-sand-200/60 text-xs leading-relaxed font-light text-start">
            {t.footer.tagline}
          </p>
        </div>

        {/* Portfolios */}
        <div className="text-start">
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4 text-start">{t.footer.sanctuariesTitle}</h4>
          <ul className="space-y-2 text-xs text-sand-200/70 font-light text-start">
            <li><a href="/#resorts" className="hover:text-gold-400 transition-colors">Amanjiwo Heritage, Java</a></li>
            <li><a href="/#resorts" className="hover:text-gold-400 transition-colors">Nihi Sumba Ocean Estate</a></li>
            <li><a href="/#resorts" className="hover:text-gold-400 transition-colors">Misool Eco Atoll, Raja Ampat</a></li>
            <li><a href="/villas" className="hover:text-gold-400 transition-colors">The Cliff Pavilion, Uluwatu</a></li>
            <li><a href="/villas" className="hover:text-gold-400 transition-colors">Overwater Karst Estate</a></li>
          </ul>
        </div>

        {/* Bespoke Expeditions */}
        <div className="text-start">
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4 text-start">{t.footer.expeditionsTitle}</h4>
          <ul className="space-y-2 text-xs text-sand-200/70 font-light text-start">
            <li><a href="/journeys" className="hover:text-gold-400 transition-colors">Private Yacht Charters (Phinisi)</a></li>
            <li><a href="/journeys" className="hover:text-gold-400 transition-colors">Komodo Dragon Guided Treks</a></li>
            <li><a href="/journeys" className="hover:text-gold-400 transition-colors">Whale Shark Marine Dives</a></li>
            <li><a href="/journeys" className="hover:text-gold-400 transition-colors">Helicopter Caldera Flyovers</a></li>
          </ul>
        </div>

        {/* Global Concierge */}
        <div className="text-start">
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4 text-start">{t.footer.liaisonTitle}</h4>
          <div className="space-y-3 text-xs text-sand-200/70 font-light text-start">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
              <bdi className="font-sans">+62 361 848 9900 (Bali HQ)</bdi>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
              <span>sanctuary@nusantara-luxe.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
              <span>Strict NDA & Security Protection</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-gold-500/10 flex flex-col md:flex-row items-center justify-between text-[11px] text-sand-200/40 gap-4">
        <p>{t.footer.rights}</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gold-400">{t.footer.privacy}</a>
          <a href="#" className="hover:text-gold-400">{t.footer.aviation}</a>
          <a href="#" className="hover:text-gold-400">{t.footer.conservation}</a>
        </div>
      </div>
    </footer>
  );
}
