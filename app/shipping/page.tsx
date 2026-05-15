export default function Page() {
  return (
    <section className="section policy-page">
      <div className="container">
        <div className="eyebrow">Shipping Policy</div>

        <h1 className="page-title">
          Shipping built
          <br />
          around live success.
        </h1>

        <p className="page-intro">
          Live orders require careful timing, safe weather windows, and clean
          packing standards.
        </p>

        <div className="policy-grid">
          <div className="policy-card">
            <span>01</span>
            <h2>Shipping Schedule</h2>
            <p>
              Live orders ship Monday through Wednesday to reduce weekend transit
              delays and maximize arrival success.
            </p>
          </div>

          <div className="policy-card">
            <span>02</span>
            <h2>Weather Holds</h2>
            <p>
              OMEN EXOTICS may delay live shipments during unsafe heat or cold.
              Protecting live inventory comes before forcing avoidable shipments.
            </p>
          </div>

          <div className="policy-card">
            <span>03</span>
            <h2>Packaging Standards</h2>
            <p>
              Live products are packed with airflow, containment, insulation when
              needed, and transit stability in mind.
            </p>
          </div>

          <div className="policy-card">
            <span>04</span>
            <h2>Tracking</h2>
            <p>
              Tracking information will be provided when your order ships. Buyers
              should monitor delivery and avoid leaving live packages outside.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}