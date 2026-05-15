import Link from 'next/link';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container grid footer-grid">
        <div>
          <Link className="logo-link" href="/">
            <img className="footer-logo" src="/logo.png" alt="OMEN EXOTICS" />
          </Link>

          <p>
            Premium feeders, bioactive cultures, isopods, starter kits, and
            exotic supply for serious keepers.
          </p>
        </div>

        <div>
          <strong>Shop</strong>
          <p>
            <Link href="/shop/live-feeders">Live Feeders</Link>
          </p>
          <p>
            <Link href="/shop/bioactive-cultures">Bioactive Cultures</Link>
          </p>
          <p>
            <Link href="/shop/supplies">Supplies</Link>
          </p>
          <p>
            <Link href="/shop/starter-kits">Starter Kits</Link>
          </p>
        </div>

        <div>
          <strong>Support</strong>
          <p>
            <Link href="/shipping">Shipping Policy</Link>
          </p>
          <p>
            <Link href="/live-arrival-policy">Live Arrival Policy</Link>
          </p>
          <p>
            <Link href="/contact">Contact</Link>
          </p>
          <p>
            <Link href="/wholesale">Wholesale</Link>
          </p>
        </div>

        <div>
          <strong>OMEN EXOTICS</strong>
          <p>
            Built around clean systems, healthy stock, careful packing, and
            premium presentation.
          </p>
          <p className="footer-mini">
            Follow product drops, culture updates, and future exotic releases.
          </p>
        </div>
      </div>

      <div className="container footer-bottom">
        © {new Date().getFullYear()} OMEN EXOTICS. All rights reserved.
      </div>
    </footer>
  );
}