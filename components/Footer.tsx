import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container grid footer-grid">
        <div>
          <Image
            src="/logo.png"
            alt="OMEN EXOTICS"
            width={260}
            height={90}
            className="footer-logo"
          />

          <p style={{ marginTop: 16, maxWidth: 300 }}>
            Premium exotic feeder supply, cultures, and keeper-focused systems
            built for serious standards.
          </p>
        </div>

        <div>
          <strong>Shop</strong>
          <p><Link href="/shop/live-feeders">Live Feeders</Link></p>
          <p><Link href="/shop/bioactive-cultures">Bioactive Cultures</Link></p>
          <p><Link href="/shop/starter-kits">Starter Kits</Link></p>
        </div>

        <div>
          <strong>Policies</strong>
          <p><Link href="/shipping">Shipping Policy</Link></p>
          <p><Link href="/live-arrival-policy">Live Arrival Policy</Link></p>
        </div>

        <div>
          <strong>Business</strong>
          <p><Link href="/wholesale">Wholesale</Link></p>
          <p><Link href="/contact">Contact</Link></p>
          <p><Link href="/about">About OMEN</Link></p>
        </div>
      </div>

      <div className="container footer-bottom">
        © 2026 OMEN EXOTICS. Built for serious keepers.
      </div>
    </footer>
  );
}