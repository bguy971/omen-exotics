export default function Page() {
  return (
    <section className="section contact-page">
      <div className="container">
        <div className="eyebrow">Contact OMEN</div>

        <h1 className="page-title">
          Get in touch.
        </h1>

        <p className="page-intro">
          Questions about products, availability, shipping, wholesale supply, or
          future OMEN EXOTICS releases.
        </p>

        <div className="contact-layout">
          <div className="contact-form-panel">
            <h2>Send a message</h2>

            <form className="form">
              <input className="input" placeholder="Full name" />
              <input className="input" placeholder="Email address" />
              <input className="input" placeholder="Subject" />
              <textarea className="textarea" placeholder="Tell us what you need." />
              <button className="btn" type="button">
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-info-stack">
            <div className="contact-info-card">
              <span>01</span>
              <h3>Product Support</h3>
              <p>
                Questions about live feeders, springtail cultures, starter kits,
                supplies, or product care.
              </p>
            </div>

            <div className="contact-info-card">
              <span>02</span>
              <h3>Wholesale</h3>
              <p>
                For pet stores, breeders, educational programs, and bulk supply
                relationships.
              </p>
            </div>

            <div className="contact-info-card">
              <span>03</span>
              <h3>Future Releases</h3>
              <p>
                Product drops, new culture lines, isopods, and future exotic
                animal availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}