import Link from 'next/link';
import { products, formatPrice } from '@/lib/products';

export default function Home(){
  const featured = products.slice(0,4);
  return <>
    <section className="hero">
      <div className="container">
        <div className="eyebrow">Premium Supply for Serious Keepers</div>
        <h1>Premium Feeders. Cultures. Exotic Supply.</h1>
        <p>Controlled live feeder production, professionally maintained cultures, and keeper-focused supply built for serious exotic systems.</p>
        <div className="hero-actions">
          <Link className="btn" href="/shop">Shop Feeders</Link>
          <Link className="btn secondary" href="/about">Explore OMEN</Link>
        </div>
      </div>
    </section>
    <section className="trust"><div className="container trust-grid"><div className="trust-item">Professionally Maintained</div><div className="trust-item">Secure Checkout</div><div className="trust-item">Live Arrival Support</div><div className="trust-item">Ships Mon–Wed</div></div></section>
    <section className="section"><div className="container"><div className="eyebrow">Shop by Category</div><div className="grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',marginTop:24}}>{['Live Feeders','Springtails','Supplies','Starter Kits'].map(c=><Link className="card" href="/shop" key={c}><h3>{c}</h3><p className="muted">Premium {c.toLowerCase()} built around clean supply and serious keeper standards.</p></Link>)}</div></div></section>
    <section className="section" style={{background:'#151515'}}><div className="container grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',alignItems:'center'}}><div><div className="eyebrow">The OMEN Standard</div><h2 style={{fontFamily:'Georgia,serif',fontSize:'3rem'}}>Controlled supply. Clean systems. Serious standards.</h2></div><p className="muted">OMEN EXOTICS is built around weekly production rhythm, redundant culture systems, quality control before fulfillment, and shipping policies designed for live goods.</p></div></section>
    <section className="section"><div className="container"><div className="eyebrow">Featured Products</div><div className="grid product-grid" style={{marginTop:24}}>{featured.map(p=><Link className="card" href={`/product/${p.slug}`} key={p.id}><p className="eyebrow">{p.category}</p><h3>{p.title}</h3><p className="muted">{p.description}</p><p className="price">{formatPrice(p.price)}</p></Link>)}</div></div></section>
    <section className="section" style={{background:'#151515'}}><div className="container"><div className="eyebrow">Get First Access</div><h2 style={{fontFamily:'Georgia,serif',fontSize:'3rem'}}>Restocks. Species drops. New releases.</h2><form className="form"><input className="input" placeholder="Email address"/><button className="btn" type="button">Join the List</button></form></div></section>
  </>
}
