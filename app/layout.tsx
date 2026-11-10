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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-emerald-950 text-sand-100 antialiased selection:bg-gold-500 selection:text-emerald-950">
        {children}
      </body>
    </html>
  );
}
