export default function Cart() {
  return (
    <section className="section">
      <div className="container">
        <div className="eyebrow">Cart</div>

        <h1
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(3rem,7vw,6rem)',
            lineHeight: '.92',
            marginTop: 14
          }}
        >
          Your cart.
        </h1>

        <div
          className="grid"
          style={{
            gridTemplateColumns: '2fr 1fr',
            gap: 32,
            marginTop: 42
          }}
        >
          <div className="card">
            <div className="cart-row">
              <div>
                <strong>Live Mealworms</strong>
                <p className="muted">500 Count • Medium (0.50”) • Qty: 1</p>
              </div>
              <div>Pricing coming soon</div>
            </div>

            <div className="cart-row">
              <div>
                <strong>Temperate White Springtails</strong>
                <p className="muted">Starter Culture (8 oz) • Qty: 2</p>
              </div>
              <div>Pricing coming soon</div>
            </div>
          </div>

          <div className="card">
            <h3
              style={{
                fontFamily: 'Georgia, serif',
                marginTop: 0
              }}
            >
              Order Summary
            </h3>

            <div className="cart-row">
              <span>Subtotal</span>
              <span>Pricing coming soon</span>
            </div>

            <div className="cart-row">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>

            <label
              style={{
                display: 'flex',
                gap: 12,
                marginTop: 20,
                alignItems: 'flex-start'
              }}
            >
              <input type="checkbox" />
              <span className="muted">
                I understand live shipping policies and live arrival terms.
              </span>
            </label>

            <button
              className="btn"
              type="button"
              style={{
                width: '100%',
                marginTop: 24
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}