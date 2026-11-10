import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Destinations from '@/components/Destinations';
import Resorts from '@/components/Resorts';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-emerald-950 text-sand-50 selection:bg-gold-500 selection:text-emerald-950">
      <Navbar />
      <Hero />
      <Destinations />
      <Resorts />
      <BookingSection />
      <Footer />
    </main>
  );
}
