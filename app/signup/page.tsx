import Link from 'next/link';

export default function Signup() {
  return (
    <section className="section auth-page">
      <div className="auth-shell">
        <div className="eyebrow">Create Account</div>

        <h1>Join OMEN.</h1>

        <p>
          Create an account for future order tools, restock alerts, saved
          shipping details, and customer access.
        </p>

        <div className="auth-card">
          <form className="form">
            <input className="input" placeholder="Email address" />
            <input className="input" placeholder="Password" type="password" />

            <button className="btn" type="button">
              Create Account
            </button>
          </form>

          <Link className="text-link auth-link" href="/login">
            Already have an account? Sign In →
          </Link>
        </div>
      </div>
    </section>
  );
}