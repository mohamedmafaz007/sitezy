import './globals.css';
import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const outfit = Outfit({ subsets: ['latin'], weight: ['300','400','500','600','700','800','900'], variable: '--font-outfit', display: 'swap' });

export const metadata: Metadata = {
  title: 'SITEZY — Build Smarter. Manage Better. Deliver Faster.',
  description:
    'SITEZY transforms construction management by connecting builders and homeowners in one intelligent ecosystem. Real-time site tracking, labour, materials, budgets, and live project progress.',
  keywords: [
    'construction management software',
    'builder app',
    'construction project management',
    'client portal',
    'site management',
    'construction tech',
  ],
  openGraph: {
    title: 'SITEZY — Build Smarter. Manage Better. Deliver Faster.',
    description:
      'The future of construction management. One ecosystem, two tailored experiences for builders and homeowners.',
    type: 'website',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SITEZY — Build Smarter. Manage Better. Deliver Faster.',
    description: 'The future of construction management, built for everyone.',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-body antialiased">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
