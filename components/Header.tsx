import Link from 'next/link';

export function Header(){
  return <header className="nav">
    <div className="container nav-inner">
      <Link href="/" className="brand">OMEN EXOTICS</Link>
      <nav className="nav-links">
        <Link href="/shop">Shop</Link>
        <Link href="/shipping">Shipping</Link>
        <Link href="/wholesale">Wholesale</Link>
        <Link href="/about">About</Link>
        <Link href="/account">Account</Link>
        <Link href="/cart">Cart</Link>
      </nav>
    </div>
  </header>
}
