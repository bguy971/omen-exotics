export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <div className="eyebrow">About OMEN EXOTICS</div>

        <h1
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(3rem,7vw,6rem)',
            lineHeight: '.92',
            marginTop: 14
          }}
        >
          Built for serious
          <br />
          keepers.
        </h1>

        <p
          className="muted"
          style={{
            maxWidth: 760,
            marginTop: 20,
            fontSize: '1.08rem'
          }}
        >
          OMEN EXOTICS was built around a simple standard: exotic keepers
          deserve cleaner supply, stronger presentation, and more professional
          fulfillment than the average hobby operation.
        </p>

        <div
          className="grid"
          style={{
            gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
            marginTop: 50
          }}
        >
          <div className="card">
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                marginTop: 0
              }}
            >
              The Mission
            </h2>

            <p className="muted">
              OMEN EXOTICS exists to deliver premium live feeders, bioactive
              cultures, exotic support products, and eventually curated animal
              offerings through clean operational systems and serious standards.
            </p>
          </div>

          <div className="card">
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                marginTop: 0
              }}
            >
              The Standard
            </h2>

            <p className="muted">
              Controlled production rhythms. Redundant culture maintenance.
              Quality checks before fulfillment. Professional communication.
              Keeper-first operational decisions.
            </p>
          </div>
        </div>

        <div
          className="card"
          style={{
            marginTop: 36
          }}
        >
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              marginTop: 0,
              fontSize: '2.3rem'
            }}
          >
            Long-term vision
          </h2>

          <p className="muted">
            OMEN EXOTICS is being built as a complete premium exotic supply
            brand—not a temporary side project.
          </p>

          <div
            style={{
              display: 'grid',
              gap: 14,
              marginTop: 24
            }}
          >
            <div>✓ Premium feeder supply</div>
            <div>✓ Bioactive cultures and support products</div>
            <div>✓ Starter systems for new keepers</div>
            <div>✓ Wholesale supply relationships</div>
            <div>✓ Premium exotic animal expansion</div>
            <div>✓ Brand-driven direct-to-consumer growth</div>
          </div>
        </div>
      </div>
    </section>
  );
}