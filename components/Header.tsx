import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="site-header">
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span>Live orders ship Mon–Wed</span>
          <span>Premium Supply for Serious Keepers</span>
          <span>OMEN EXOTICS</span>
        </div>
      </div>

      <div className="nav">
        <div className="container nav-inner">
          <Link href="/" className="logo-link">
            <Image
              src="/logo.png"
              alt="OMEN EXOTICS"
              width={260}
              height={90}
              priority
              className="header-logo"
            />
          </Link>

          <nav className="nav-links">
            <Link href="/shop">Shop</Link>
            <Link href="/shipping">Shipping</Link>
            <Link href="/wholesale">Wholesale</Link>
            <Link href="/about">About</Link>
            <Link href="/account">Account</Link>
          </nav>

          <Link href="/cart" className="cart-link">
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
}