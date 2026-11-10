import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Destinations from '@/components/Destinations';
import Resorts from '@/components/Resorts';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/components/LanguageContext';

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-emerald-950 text-sand-50 selection:bg-gold-500 selection:text-emerald-950 transition-colors">
        <Navbar />
        <Hero />
        <Destinations />
        <Resorts />
        <BookingSection />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
