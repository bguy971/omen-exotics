export default function Account() {
  return (
    <section className="section">
      <div className="container">
        <div className="eyebrow">Customer Account</div>

        <h1
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(3rem,7vw,6rem)',
            lineHeight: '.92',
            marginTop: 14
          }}
        >
          Your OMEN account.
        </h1>

        <div
          className="grid"
          style={{
            gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
            gap: 28,
            marginTop: 42
          }}
        >
          <div className="card">
            <h3 style={{ fontFamily: 'Georgia, serif', marginTop: 0 }}>
              Orders
            </h3>

            <p className="muted">
              Track order history, shipment status, and fulfillment records.
            </p>
          </div>

          <div className="card">
            <h3 style={{ fontFamily: 'Georgia, serif', marginTop: 0 }}>
              Addresses
            </h3>

            <p className="muted">
              Save preferred shipping destinations for faster checkout.
            </p>
          </div>

          <div className="card">
            <h3 style={{ fontFamily: 'Georgia, serif', marginTop: 0 }}>
              Subscriptions
            </h3>

            <p className="muted">
              Manage recurring feeder shipments and future subscription products.
            </p>
          </div>

          <div className="card">
            <h3 style={{ fontFamily: 'Georgia, serif', marginTop: 0 }}>
              Account Settings
            </h3>

            <p className="muted">
              Profile details, communication preferences, and future customer
              controls.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}