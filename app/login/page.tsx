export default function Login() {
  return (
    <section className="section">
      <div
        className="container"
        style={{
          maxWidth: 560
        }}
      >
        <div className="eyebrow">Account Access</div>

        <h1
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(3rem,6vw,5rem)',
            lineHeight: '.92',
            marginTop: 14
          }}
        >
          Sign in.
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
              Sign In
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}