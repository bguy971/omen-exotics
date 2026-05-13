import { notFound } from 'next/navigation';
import { getProduct, formatPrice } from '@/lib/products';

export default function ProductPage({ params }: { params:{ slug:string } }){
  const product = getProduct(params.slug);
  if(!product) return notFound();
  return <section className="section"><div className="container grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))',gap:40}}>
    <div className="card" style={{minHeight:420,display:'grid',placeItems:'center'}}><span className="muted">Product image placeholder</span></div>
    <div>
      <div className="eyebrow">{product.category} • {product.stockStatus}</div>
      <h1 style={{fontFamily:'Georgia,serif',fontSize:'4rem',lineHeight:1}}>{product.title}</h1>
      <p className="price" style={{fontSize:'1.5rem'}}>{formatPrice(product.price)}</p>
      <p className="muted">{product.description}</p>
      {product.isLive && <div className="card" style={{margin:'24px 0'}}><strong>Live Product Notice</strong><p className="muted">Live orders ship Monday–Wednesday only. Orders may be held during unsafe temperatures.</p><label><input type="checkbox"/> I understand OMEN EXOTICS shipping and live arrival policies.</label></div>}
      <button className="btn" type="button">Add to Cart</button>
      <div style={{marginTop:36}}><h2>The OMEN Standard</h2><p className="muted">Packed with care, checked before fulfillment, and supported by clear live arrival policies.</p></div>
    </div>
  </div></section>
}
