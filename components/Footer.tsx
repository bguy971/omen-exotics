import Link from 'next/link';

export function Footer(){
  return <footer className="footer">
    <div className="container grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))'}}>
      <div><div className="brand">OMEN</div><p>Premium Supply for Serious Keepers.</p></div>
      <div><strong>Shop</strong><p><Link href="/shop">Live Feeders</Link></p><p><Link href="/shop">Springtails</Link></p></div>
      <div><strong>Policies</strong><p><Link href="/shipping">Shipping</Link></p><p><Link href="/live-arrival-policy">Live Arrival</Link></p></div>
      <div><strong>Business</strong><p><Link href="/wholesale">Wholesale</Link></p><p><Link href="/contact">Contact</Link></p></div>
    </div>
  </footer>
}
