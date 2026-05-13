export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <div className="eyebrow">Contact OMEN</div>

        <h1
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(3rem,7vw,6rem)',
            lineHeight: '.92',
            marginTop: 14
          }}
        >
          Get in touch.
        </h1>

        <p
          className="muted"
          style={{
            maxWidth: 700,
            marginTop: 20
          }}
        >
          Questions about products, future availability, wholesale relationships,
          or OMEN EXOTICS in general.
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
              Send a message
            </h2>

            <form className="form">
              <input className="input" placeholder="Full name" />
              <input className="input" placeholder="Email address" />
              <input className="input" placeholder="Subject" />
              <textarea
                className="textarea"
                placeholder="Tell us what you need."
              />
              <button className="btn" type="button">
                Send Message
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
                Business
              </h3>

              <p className="muted">
                OMEN EXOTICS is building a premium supply platform for serious
                keepers, breeders, and exotic hobbyists.
              </p>
            </div>

            <div className="card">
              <h3
                style={{
                  fontFamily: 'Georgia, serif',
                  marginTop: 0
                }}
              >
                Response Times
              </h3>

              <p className="muted">
                Most inquiries should receive a response within normal business
                turnaround windows.
              </p>
            </div>

            <div className="card">
              <h3
                style={{
                  fontFamily: 'Georgia, serif',
                  marginTop: 0
                }}
              >
                Future Support
              </h3>

              <p className="muted">
                Order support, care guidance, and wholesale communication will
                be handled through dedicated systems as the platform expands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}