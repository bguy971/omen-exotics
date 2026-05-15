import './globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'OMEN EXOTICS | Premium Feeders, Bioactive Cultures & Exotic Supply',
  description:
    'OMEN EXOTICS supplies premium live feeders, bioactive cultures, keeper supplies, and future exotic releases for serious keepers.',
  openGraph: {
    title: 'OMEN EXOTICS',
    description:
      'Premium live feeders, bioactive cultures, keeper supplies, and exotic supply.',
    images: ['/og-image.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OMEN EXOTICS',
    description:
      'Premium live feeders, bioactive cultures, keeper supplies, and exotic supply.',
    images: ['/og-image.jpg']
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/branding/apple-touch-icon.png'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const siteComingSoon = false;

  return (
    <html lang="en">
      <body>
        <Header />

        <main className={siteComingSoon ? 'site-blurred' : ''}>{children}</main>

        <Footer />

        {siteComingSoon && (
          <div className="coming-soon-overlay">
            <div className="coming-soon-card">
              <div className="eyebrow">OMEN EXOTICS</div>

              <h1>Site Coming Soon</h1>

              <p>
                OMEN EXOTICS is building a premium supply platform for live
                feeders, springtail cultures, bioactive supplies, and serious
                exotic keepers.
              </p>

              <p className="coming-soon-small">
                Follow the buildout. Product drops, care resources, and launch
                updates are coming soon.
              </p>
            </div>
          </div>
        )}
      </body>
    </html>
  );
}