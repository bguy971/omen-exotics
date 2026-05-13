import Link from 'next/link';
import { products, formatPrice } from '@/lib/products';

export default function Shop(){
  return <section className="section"><div className="container"><div className="eyebrow">Shop OMEN</div><h1 style={{fontFamily:'Georgia,serif',fontSize:'4rem'}}>Live Feeders & Cultures</h1><div className="grid product-grid">{products.map(p=><Link className="card" href={`/product/${p.slug}`} key={p.id}><p className="eyebrow">{p.stockStatus}</p><h3>{p.title}</h3><p className="muted">{p.description}</p><p className="price">{formatPrice(p.price)}</p></Link>)}</div></div></section>
}
