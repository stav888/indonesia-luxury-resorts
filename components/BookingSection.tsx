'use client';

import { useState } from 'react';
import { Calendar, Users, Send, CheckCircle2 } from 'lucide-react';

export default function BookingSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-28 px-6 max-w-5xl mx-auto">
      <div className="relative rounded-3xl p-8 md:p-16 bg-gradient-to-b from-emerald-900/60 via-emerald-950 to-emerald-950 border border-gold-500/30 shadow-[0_0_80px_rgba(3,26,20,0.8)] overflow-hidden">
        {/* Subtle Gold Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-800/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center max-w-2xl mx-auto mb-12">
          <span className="text-gold-400 uppercase tracking-[0.35em] text-xs font-semibold block mb-3">
            Bespoke Concierge
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-sand-50 font-light mb-4">
            Curate Your Archipelago Voyage
          </h2>
          <p className="text-sand-200/80 text-sm font-light leading-relaxed">
            From private charter hydroplanes to dedicated island buyouts, our senior curators orchestrate every facet of your Indonesian sanctuary sojourn.
          </p>
        </div>

        {submitted ? (
          <div className="relative z-10 text-center py-12 px-6 rounded-2xl bg-emerald-900/40 border border-gold-400/40 max-w-lg mx-auto">
            <CheckCircle2 className="w-12 h-12 text-gold-400 mx-auto mb-4 animate-bounce" />
            <h3 className="font-serif text-2xl text-sand-50 mb-2">Inquiry Received with Honour</h3>
            <p className="text-sand-200/80 text-sm font-light leading-relaxed mb-6">
              Your dedicated private island liaison will contact you within 4 hours with an unlisted itinerary proposal.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs uppercase tracking-widest text-gold-400 underline hover:text-gold-300"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative z-10 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-gold-400/90 mb-2 font-medium">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Lord / Lady / Excellency..."
                className="w-full bg-emerald-950/90 border border-gold-500/30 rounded-xl px-4 py-3.5 text-sand-100 text-sm focus:outline-none focus:border-gold-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gold-400/90 mb-2 font-medium">
                Private Email / Concierge Desk
              </label>
              <input
                type="email"
                required
                placeholder="liaison@familyoffice.com"
                className="w-full bg-emerald-950/90 border border-gold-500/30 rounded-xl px-4 py-3.5 text-sand-100 text-sm focus:outline-none focus:border-gold-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gold-400/90 mb-2 font-medium">
                Desired Destination
              </label>
              <select className="w-full bg-emerald-950/90 border border-gold-500/30 rounded-xl px-4 py-3.5 text-sand-100 text-sm focus:outline-none focus:border-gold-400 transition-colors">
                <option>Raja Ampat Private Atolls</option>
                <option>Nihi Sumba Wilderness Estate</option>
                <option>Uluwatu Cliff Top Sanctuary, Bali</option>
                <option>Amanjiwo Borobudur Sanctuary</option>
                <option>Private Island Buyout (All Exclusive)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gold-400/90 mb-2 font-medium">
                Estimated Party Size
              </label>
              <select className="w-full bg-emerald-950/90 border border-gold-500/30 rounded-xl px-4 py-3.5 text-sand-100 text-sm focus:outline-none focus:border-gold-400 transition-colors">
                <option>Couples Haven (2 Guests)</option>
                <option>Intimate Family (3–5 Guests)</option>
                <option>Private Villa Compound (6–12 Guests)</option>
                <option>Full Island Seclusion (15+ Guests)</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs uppercase tracking-widest text-gold-400/90 mb-2 font-medium">
                Special Requests / Private Jet & Yacht Logistics
              </label>
              <textarea
                rows={3}
                placeholder="E.g., Seaplane transfer from Denpasar, kosher/halal/michelin chef requirement, helicopter pad clearance..."
                className="w-full bg-emerald-950/90 border border-gold-500/30 rounded-xl px-4 py-3.5 text-sand-100 text-sm focus:outline-none focus:border-gold-400 transition-colors resize-none"
              />
            </div>

            <div className="md:col-span-2 pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-full text-xs uppercase tracking-[0.25em] font-bold text-emerald-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:shadow-[0_0_35px_rgba(229,195,101,0.5)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Dispatch Confidential Request</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
