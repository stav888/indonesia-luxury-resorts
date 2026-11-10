import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en">
      <body className="bg-emerald-950 text-sand-100 antialiased selection:bg-gold-500 selection:text-emerald-950">
        {children}
      </body>
    </html>
  );
}
