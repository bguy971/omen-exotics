export default function Page() {
  return (
    <section className="section policy-page">
      <div className="container">
        <div className="eyebrow">Live Arrival Policy</div>

        <h1 className="page-title">
          Clear live
          <br />
          arrival standards.
        </h1>

        <p className="page-intro">
          Live arrival success depends on proper packing, safe shipping
          conditions, and buyer availability at delivery.
        </p>

        <div className="policy-grid">
          <div className="policy-card">
            <span>01</span>
            <h2>Customer Responsibilities</h2>
            <p>
              Confirm the correct shipping address, monitor tracking, be
              available for delivery, and inspect the package immediately.
            </p>
          </div>

          <div className="policy-card">
            <span>02</span>
            <h2>Claim Requirements</h2>
            <p>
              Any live arrival issue must be reported quickly with clear photos
              or video evidence. Delayed reporting may void eligibility.
            </p>
          </div>

          <div className="policy-card">
            <span>03</span>
            <h2>Weather Exceptions</h2>
            <p>
              Guarantees may be limited during unsafe heat or cold if shipping
              proceeds at buyer request or outside recommended conditions.
            </p>
          </div>

          <div className="policy-card">
            <span>04</span>
            <h2>Resolution</h2>
            <p>
              Eligible claims may be handled through replacement, credit, or
              another appropriate resolution depending on product availability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}