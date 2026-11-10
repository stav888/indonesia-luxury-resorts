'use client';

import { Compass, Instagram, Phone, Mail, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gold-500/20 bg-emerald-950/90 pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-gold-400 flex items-center justify-center text-gold-400">
              <Compass className="w-4 h-4" />
            </div>
            <span className="font-serif text-xl tracking-[0.25em] text-sand-50 font-medium">NUSANTARA</span>
          </div>
          <p className="text-sand-200/60 text-xs leading-relaxed font-light">
            Curators of transcendent luxury sanctuaries, private atolls, and royal Javanese heritage estates throughout the Indonesian archipelago.
          </p>
        </div>

        {/* Portfolios */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Sanctuaries</h4>
          <ul className="space-y-2 text-xs text-sand-200/70 font-light">
            <li><a href="#resorts" className="hover:text-gold-400 transition-colors">Amanjiwo Heritage, Java</a></li>
            <li><a href="#resorts" className="hover:text-gold-400 transition-colors">Nihi Sumba Ocean Estate</a></li>
            <li><a href="#resorts" className="hover:text-gold-400 transition-colors">Misool Eco Atoll, Raja Ampat</a></li>
            <li><a href="#resorts" className="hover:text-gold-400 transition-colors">Bulgari Cliff Resort, Uluwatu</a></li>
            <li><a href="#resorts" className="hover:text-gold-400 transition-colors">Bawah Reserve, Anambas</a></li>
          </ul>
        </div>

        {/* Bespoke Expeditions */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Expeditions</h4>
          <ul className="space-y-2 text-xs text-sand-200/70 font-light">
            <li><a href="#experiences" className="hover:text-gold-400 transition-colors">Private Yacht Charters (Phinisi)</a></li>
            <li><a href="#experiences" className="hover:text-gold-400 transition-colors">Komodo Dragon Guided Treks</a></li>
            <li><a href="#experiences" className="hover:text-gold-400 transition-colors">Whale Shark Marine Dives</a></li>
            <li><a href="#experiences" className="hover:text-gold-400 transition-colors">Helicopter Caldera Flyovers</a></li>
          </ul>
        </div>

        {/* Global Concierge */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-4">Global Liaison</h4>
          <div className="space-y-3 text-xs text-sand-200/70 font-light">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>+62 361 848 9900 (Bali HQ)</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-gold-400" />
              <span>sanctuary@nusantara-luxe.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-gold-400" />
              <span>Strict NDA & Security Protection</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-gold-500/10 flex flex-col md:flex-row items-center justify-between text-[11px] text-sand-200/40 gap-4">
        <p>© 2026 NUSANTARA SANCTUARY LTD. All Rights Reserved. Indonesia Sovereign Hospitality.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gold-400">Privacy Charter</a>
          <a href="#" className="hover:text-gold-400">Aviation Guidelines</a>
          <a href="#" className="hover:text-gold-400">Marine Conservation Trust</a>
        </div>
      </div>
    </footer>
  );
}
