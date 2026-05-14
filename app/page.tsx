import Link from 'next/link';
import { getFeaturedProducts, getProductPriceRange } from '@/lib/catalog';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const featured = await getFeaturedProducts();

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="eyebrow">Premium Supply for Serious Keepers</div>

          <h1>
            Premium Feeders.
            <br />
            Cultures.
            <br />
            Exotic Supply.
          </h1>

          <p>
            Controlled live feeder production, professionally maintained cultures,
            and premium exotic supply built for serious keepers who expect
            reliability, presentation, and clean operational standards.
          </p>

          <div className="hero-actions">
            <Link className="btn" href="/shop">
              Shop Feeders
            </Link>

            <Link className="btn secondary" href="/about">
              Explore OMEN
            </Link>
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="container trust-grid">
          <div className="trust-item">Professionally Maintained Colonies</div>
          <div className="trust-item">Live Arrival Support</div>
          <div className="trust-item">Secure Checkout</div>
          <div className="trust-item">Ships Mon–Wed</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">Shop by Category</div>

          <div
            className="grid"
            style={{
              gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
              marginTop: 28
            }}
          >
            <Link className="card" href="/shop/live-feeders">
              <h3>Live Feeders</h3>
              <p className="muted">
                Professionally packed feeder insects for reptile, amphibian,
                bird, and exotic keeper systems.
              </p>
            </Link>

            <Link className="card" href="/shop/bioactive-cultures">
              <h3>Bioactive Cultures</h3>
              <p className="muted">
                Bioactive cleanup crew cultures built for expansion, enclosure
                support, and serious keeper setups.
              </p>
            </Link>

            <Link className="card" href="/shop/supplies">
              <h3>Supplies</h3>
              <p className="muted">
                Culture food, maintenance essentials, and operational products
                built around clean bioactive support.
              </p>
            </Link>

            <Link className="card" href="/shop/starter-kits">
              <h3>Starter Kits</h3>
              <p className="muted">
                Curated entry-point kits designed to make getting started simple
                without sacrificing quality.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{
          background:
            'linear-gradient(135deg, rgba(140,107,47,.08), transparent 40%), #141414'
        }}
      >
        <div
          className="container grid"
          style={{
            gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
            alignItems: 'center',
            gap: 48
          }}
        >
          <div>
            <div className="eyebrow">The OMEN Standard</div>

            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(2.6rem,6vw,5rem)',
                lineHeight: '.95',
                marginTop: 14
              }}
            >
              Controlled supply.
              <br />
              Clean systems.
              <br />
              Serious standards.
            </h2>
          </div>

          <div className="card">
            <p className="muted">
              OMEN EXOTICS is built around production discipline—not random
              inventory flipping.
            </p>

            <div
              style={{
                display: 'grid',
                gap: 16,
                marginTop: 26
              }}
            >
              <div>✓ Weekly colony production rhythm</div>
              <div>✓ Redundant culture maintenance</div>
              <div>✓ Pre-shipment quality checks</div>
              <div>✓ Live-order shipping controls</div>
              <div>✓ Keeper-focused support standards</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">Featured Products</div>

          <div className="grid product-grid" style={{ marginTop: 28 }}>
            {featured.map((product) => (
              <Link
                className="card"
                href={`/product/${product.slug}`}
                key={product.id}
              >
                <p className="eyebrow">{product.category}</p>

                <h3>{product.title}</h3>

                <p className="muted">{product.description}</p>

                <p className="price">{getProductPriceRange(product)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{
          background:
            'radial-gradient(circle at top right, rgba(140,107,47,.18), transparent 28rem), #111111'
        }}
      >
        <div className="container">
          <div className="eyebrow">Get First Access</div>

          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(2.5rem,6vw,4.8rem)',
              lineHeight: '.95',
              marginTop: 14
            }}
          >
            Restocks.
            <br />
            Species drops.
            <br />
            New releases.
          </h2>

          <p
            className="muted"
            style={{
              maxWidth: 640,
              marginTop: 18
            }}
          >
            Build your relationship with OMEN early. Get product drops, future
            species availability, and premium release notifications.
          </p>

          <form className="form" style={{ marginTop: 28 }}>
            <input className="input" placeholder="Email address" />
            <button className="btn" type="button">
              Join the List
            </button>
          </form>
        </div>
      </section>
    </>
  );
}