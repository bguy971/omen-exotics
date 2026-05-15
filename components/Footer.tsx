import Link from 'next/link';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid footer-grid">
          <div>
            <img
              className="footer-logo"
              src="/branding/omen-logo-horizontal.png"
              alt="OMEN EXOTICS"
            />

            <p>
              Premium feeders, bioactive cultures, and keeper-focused exotic
              supply.
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
              <Link href="/shop/isopods">Isopods</Link>
            </p>
            <p>
              <Link href="/shop/supplies">Supplies</Link>
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
              Built for serious keepers who care about clean supply, reliable
              fulfillment, and professional standards.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} OMEN EXOTICS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}