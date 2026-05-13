import './globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'OMEN EXOTICS | Coming Soon',
  description:
    'OMEN EXOTICS is building a premium exotic supply platform for serious keepers.'
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