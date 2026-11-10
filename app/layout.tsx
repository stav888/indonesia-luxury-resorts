import type { Metadata } from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NUSANTARA SANCTUARY | Ultra-Luxury Resorts Indonesia',
  description: 'Curated collection of transcendent private island retreats, jungle sanctuaries, and overwater villas across Bali, Raja Ampat, Sumba, and Komodo.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="bg-emerald-950 text-sand-100 antialiased selection:bg-gold-500 selection:text-emerald-950">
        {children}
      </body>
    </html>
  );
}
