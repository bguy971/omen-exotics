export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <div className="eyebrow">Wholesale Supply</div>

        <h1
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(3rem,7vw,6rem)',
            lineHeight: '.92',
            marginTop: 14
          }}
        >
          Bulk supply
          <br />
          partnerships.
        </h1>

        <p
          className="muted"
          style={{
            maxWidth: 760,
            marginTop: 20
          }}
        >
          OMEN EXOTICS is building wholesale supply relationships for stores,
          breeders, educational organizations, and other qualifying operations.
        </p>

        <div
          className="grid"
          style={{
            gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))',
            gap: 36,
            marginTop: 44
          }}
        >
          <div className="card">
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                marginTop: 0
              }}
            >
              Wholesale Inquiry
            </h2>

            <form className="form">
              <input className="input" placeholder="Business name" />
              <input className="input" placeholder="Contact name" />
              <input className="input" placeholder="Email address" />
              <input className="input" placeholder="Phone number" />
              <input className="input" placeholder="Location" />
              <input
                className="input"
                placeholder="Products of interest"
              />
              <textarea
                className="textarea"
                placeholder="Estimated volume / additional notes"
              />
              <button className="btn" type="button">
                Submit Inquiry
              </button>
            </form>
          </div>

          <div
            className="grid"
            style={{
              gap: 24
            }}
          >
            <div className="card">
              <h3
                style={{
                  fontFamily: 'Georgia, serif',
                  marginTop: 0
                }}
              >
                Intended Supply
              </h3>

              <div
                style={{
                  display: 'grid',
                  gap: 12
                }}
              >
                <div>✓ Mealworms</div>
                <div>✓ Springtail cultures</div>
                <div>✓ Bioactive support products</div>
                <div>✓ Future specialty supply</div>
              </div>
            </div>

            <div className="card">
              <h3
                style={{
                  fontFamily: 'Georgia, serif',
                  marginTop: 0
                }}
              >
                Who This Fits
              </h3>

              <p className="muted">
                Pet stores, breeders, educational facilities, reptile-focused
                businesses, and qualified supply partners.
              </p>
            </div>

            <div className="card">
              <h3
                style={{
                  fontFamily: 'Georgia, serif',
                  marginTop: 0
                }}
              >
                Growth Vision
              </h3>

              <p className="muted">
                OMEN is being built for scalable direct and wholesale supply—not
                hobby-level inconsistency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}