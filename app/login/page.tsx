import Link from 'next/link';

export default function Login() {
  return (
    <section className="section auth-page">
      <div className="auth-shell">
        <div className="eyebrow">Account Access</div>

        <h1>Sign in.</h1>

        <p>
          Access your OMEN account, future order history, saved addresses, and
          account tools.
        </p>

        <div className="auth-card">
          <form className="form">
            <input className="input" placeholder="Email address" />
            <input className="input" placeholder="Password" type="password" />

            <button className="btn" type="button">
              Sign In
            </button>
          </form>

          <Link className="text-link auth-link" href="/signup">
            Create Account →
          </Link>
        </div>
      </div>
    </section>
  );
}