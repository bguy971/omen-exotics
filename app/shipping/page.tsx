export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <div className="eyebrow">Shipping Policy</div>

        <h1
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(3rem,7vw,6rem)',
            lineHeight: '.92',
            marginTop: 14
          }}
        >
          Shipping built
          <br />
          around live success.
        </h1>

        <div
          className="grid"
          style={{
            marginTop: 42,
            gap: 28
          }}
        >
          <div className="card">
            <h2 style={{ fontFamily: 'Georgia, serif', marginTop: 0 }}>
              Shipping Schedule
            </h2>

            <p className="muted">
              Live orders ship Monday through Wednesday to reduce weekend transit
              delays and maximize arrival success.
            </p>

            <p className="muted">
              Orders placed later in the week may be held until the next safe
              shipping window.
            </p>
          </div>

          <div className="card">
            <h2 style={{ fontFamily: 'Georgia, serif', marginTop: 0 }}>
              Weather Holds
            </h2>

            <p className="muted">
              OMEN EXOTICS may delay live shipments during unsafe heat or cold
              conditions.
            </p>

            <p className="muted">
              Protecting live inventory matters more than forcing an avoidable
              shipment.
            </p>
          </div>

          <div className="card">
            <h2 style={{ fontFamily: 'Georgia, serif', marginTop: 0 }}>
              Packaging Standards
            </h2>

            <p className="muted">
              Live products are packed according to species requirements with
              airflow, containment, and transit stability in mind.
            </p>
          </div>

          <div className="card">
            <h2 style={{ fontFamily: 'Georgia, serif', marginTop: 0 }}>
              Tracking
            </h2>

            <p className="muted">
              Tracking information will be provided when your order ships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}