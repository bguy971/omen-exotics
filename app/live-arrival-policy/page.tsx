export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <div className="eyebrow">Live Arrival Policy</div>

        <h1
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(3rem,7vw,6rem)',
            lineHeight: '.92',
            marginTop: 14
          }}
        >
          Clear live
          <br />
          arrival standards.
        </h1>

        <p
          className="muted"
          style={{
            maxWidth: 760,
            marginTop: 20
          }}
        >
          Live products require shared responsibility between seller and buyer.
        </p>

        <div
          className="grid"
          style={{
            gap: 28,
            marginTop: 42
          }}
        >
          <div className="card">
            <h2 style={{ fontFamily: 'Georgia, serif', marginTop: 0 }}>
              Customer Responsibilities
            </h2>

            <div
              style={{
                display: 'grid',
                gap: 14
              }}
            >
              <div>✓ Ensure correct shipping address</div>
              <div>✓ Be available for delivery</div>
              <div>✓ Do not leave package sitting outside</div>
              <div>✓ Inspect order immediately</div>
            </div>
          </div>

          <div className="card">
            <h2 style={{ fontFamily: 'Georgia, serif', marginTop: 0 }}>
              Claim Requirements
            </h2>

            <p className="muted">
              Any live arrival issue must be documented quickly with clear photos
              or video evidence.
            </p>

            <p className="muted">
              Delayed reporting may void eligibility.
            </p>
          </div>

          <div className="card">
            <h2 style={{ fontFamily: 'Georgia, serif', marginTop: 0 }}>
              Weather Exceptions
            </h2>

            <p className="muted">
              Guarantees may be limited or adjusted during extreme weather
              conditions if shipping proceeds at buyer request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}