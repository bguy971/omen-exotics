import Link from 'next/link';

export function Footer() {
  return (
    <footer className="footer">
      <div
        className="container grid"
        style={{
          gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
          gap: 36
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '1.6rem',
              letterSpacing: '.18em'
            }}
          >
            OMEN
          </div>

          <p
            style={{
              marginTop: 16,
              maxWidth: 280
            }}
          >
            Premium exotic feeder supply, cultures, and keeper-focused systems
            built for serious standards.
          </p>
        </div>

        <div>
          <strong>Shop</strong>

          <p>
            <Link href="/shop">Live Feeders</Link>
          </p>

          <p>
            <Link href="/shop">Springtails</Link>
          </p>

          <p>
            <Link href="/shop">Starter Kits</Link>
          </p>
        </div>

        <div>
          <strong>Policies</strong>

          <p>
            <Link href="/shipping">Shipping Policy</Link>
          </p>

          <p>
            <Link href="/live-arrival-policy">Live Arrival Policy</Link>
          </p>
        </div>

        <div>
          <strong>Business</strong>

          <p>
            <Link href="/wholesale">Wholesale</Link>
          </p>

          <p>
            <Link href="/contact">Contact</Link>
          </p>

          <p>
            <Link href="/about">About OMEN</Link>
          </p>
        </div>
      </div>

      <div
        className="container"
        style={{
          marginTop: 44,
          paddingTop: 22,
          borderTop: '1px solid rgba(245,241,232,.08)',
          color: '#8f8777',
          fontSize: '.82rem'
        }}
      >
        © 2026 OMEN EXOTICS. Built for serious keepers.
      </div>
    </footer>
  );
}