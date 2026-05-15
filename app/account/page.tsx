import Link from 'next/link';

export default function Account() {
  return (
    <section className="section account-page">
      <div className="container">
        <div className="eyebrow">Customer Account</div>

        <h1 className="page-title">Your OMEN account.</h1>

        <p className="page-intro">
          Manage orders, saved information, subscriptions, and future customer
          tools as the OMEN platform expands.
        </p>

        <div className="account-grid">
          <Link className="account-card" href="/account">
            <span>01</span>
            <h2>Orders</h2>
            <p>Track order history, shipment status, and fulfillment records.</p>
          </Link>

          <Link className="account-card" href="/account">
            <span>02</span>
            <h2>Addresses</h2>
            <p>Save preferred shipping destinations for faster checkout.</p>
          </Link>

          <Link className="account-card" href="/account">
            <span>03</span>
            <h2>Subscriptions</h2>
            <p>Manage future recurring feeder shipments and supply plans.</p>
          </Link>

          <Link className="account-card" href="/account">
            <span>04</span>
            <h2>Settings</h2>
            <p>Profile details, preferences, and future account controls.</p>
          </Link>
        </div>
      </div>
    </section>
  );
}