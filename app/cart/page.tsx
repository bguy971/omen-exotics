export default function Cart(){
  return <section className="section"><div className="container"><div className="eyebrow">Cart</div><h1 style={{fontFamily:'Georgia,serif',fontSize:'4rem'}}>Your Cart</h1><div className="card"><p className="muted">Cart system placeholder. Next step: connect local cart state, Supabase cart_items, and Stripe Checkout.</p><div className="cart-row"><span>Live shipping policy</span><span>Required before checkout</span></div><button className="btn" type="button">Checkout</button></div></div></section>
}
