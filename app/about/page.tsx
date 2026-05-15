export default function Page() {
  return (
    <section className="section brand-page">
      <div className="container">
        <div className="eyebrow">About OMEN EXOTICS</div>

        <h1 className="page-title">
          Built for serious
          <br />
          keepers.
        </h1>

        <p className="page-intro">
          OMEN EXOTICS is being built as a premium exotic supply brand focused on
          healthy feeders, bioactive cultures, clean systems, and professional
          fulfillment.
        </p>

        <div className="brand-split">
          <img
            className="brand-image-panel"
            src="/about/about-hero.jpg"
            alt="OMEN EXOTICS controlled feeder and bioactive production"
          />

          <div className="brand-copy-panel">
            <div className="eyebrow">The Standard</div>

            <h2>Not random inventory. Controlled production.</h2>

            <p>
              The goal is simple: provide serious keepers with reliable products,
              clear policies, strong presentation, and supply systems that scale
              beyond hobby-level inconsistency.
            </p>

            <div className="standard-list">
              <div>✓ Premium feeder supply</div>
              <div>✓ Bioactive cultures and support products</div>
              <div>✓ Starter systems for new keepers</div>
              <div>✓ Wholesale supply relationships</div>
              <div>✓ Future exotic animal expansion</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}