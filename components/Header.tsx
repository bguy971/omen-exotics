import Link from 'next/link';

export function Header() {
  return (
    <header className="site-header">
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span>Premium live feeders</span>
          <span>Bioactive cultures</span>
          <span>Keeper-grade supplies</span>
        </div>
      </div>

      <div className="nav">
        <div className="container nav-inner">
          <Link className="logo-link" href="/">
            <img
              className="header-logo"
              src="/branding/omen-logo-horizontal.png"
              alt="OMEN EXOTICS"
            />
          </Link>

          <nav className="nav-links">
            <Link href="/shop">Shop</Link>
            <Link href="/shipping">Shipping</Link>
            <Link href="/live-arrival-policy">Live Arrival</Link>
            <Link href="/wholesale">Wholesale</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <Link className="cart-link" href="/cart">
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
}