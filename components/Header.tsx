import Link from 'next/link';

export function Header() {
  return (
    <header className="site-header">
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span>Premium Exotic Supply</span>
          <span>Live Feeders • Cultures • Supplies</span>
          <span>Ships Mon–Wed</span>
        </div>
      </div>

      <nav className="nav">
        <div className="container nav-inner">
          <Link className="logo-link" href="/">
            <img className="header-logo" src="/logo.png" alt="OMEN EXOTICS" />
          </Link>

          <div className="nav-links">
            <Link href="/shop">Shop</Link>
            <Link href="/shop/live-feeders">Feeders</Link>
            <Link href="/shop/bioactive-cultures">Cultures</Link>
            <Link href="/shop/supplies">Supplies</Link>
            <Link href="/wholesale">Wholesale</Link>
          </div>

          <Link className="cart-link" href="/cart">
            Cart
          </Link>
        </div>
      </nav>
    </header>
  );
}