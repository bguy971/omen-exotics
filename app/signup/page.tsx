export default function Signup() {
  return (
    <section className="section">
      <div
        className="container"
        style={{
          maxWidth: 560
        }}
      >
        <div className="eyebrow">Create Account</div>

        <h1
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(3rem,6vw,5rem)',
            lineHeight: '.92',
            marginTop: 14
          }}
        >
          Join OMEN.
        </h1>

        <div
          className="card"
          style={{
            marginTop: 36
          }}
        >
          <form className="form">
            <input className="input" placeholder="Email address" />
            <input
              className="input"
              placeholder="Password"
              type="password"
            />

            <button className="btn" type="button">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}