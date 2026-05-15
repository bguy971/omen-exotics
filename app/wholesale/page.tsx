export default function Page() {
  return (
    <section className="section wholesale-page">
      <div className="container">
        <div className="eyebrow">Wholesale Supply</div>

        <h1 className="page-title">
          Bulk supply
          <br />
          partnerships.
        </h1>

        <p className="page-intro">
          OMEN EXOTICS is building wholesale relationships for pet stores,
          breeders, educational organizations, and qualifying supply partners.
        </p>

        <div className="contact-layout">
          <div className="contact-form-panel">
            <h2>Wholesale inquiry</h2>

            <form className="form">
              <input className="input" placeholder="Business name" />
              <input className="input" placeholder="Contact name" />
              <input className="input" placeholder="Email address" />
              <input className="input" placeholder="Phone number" />
              <input className="input" placeholder="Location" />
              <input className="input" placeholder="Products of interest" />
              <textarea
                className="textarea"
                placeholder="Estimated volume / additional notes"
              />
              <button className="btn" type="button">
                Submit Inquiry
              </button>
            </form>
          </div>

          <div className="contact-info-stack">
            <div className="contact-info-card">
              <span>01</span>
              <h3>Intended Supply</h3>
              <p>
                Mealworms, springtail cultures, bioactive support products, and
                future specialty supply.
              </p>
            </div>

            <div className="contact-info-card">
              <span>02</span>
              <h3>Who This Fits</h3>
              <p>
                Pet stores, reptile-focused businesses, breeders, educational
                facilities, and qualified partners.
              </p>
            </div>

            <div className="contact-info-card">
              <span>03</span>
              <h3>Growth Vision</h3>
              <p>
                OMEN is being built for scalable direct and wholesale supply,
                not hobby-level inconsistency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}