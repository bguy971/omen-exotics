import Link from 'next/link';
import { products, formatPrice } from '@/lib/products';

export default function Shop() {
  return (
    <section className="section">
      <div className="container">
        <div className="eyebrow">Shop OMEN</div>

        <h1
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(3rem,7vw,6rem)',
            lineHeight: '.92',
            marginTop: 12
          }}
        >
          Live Feeders
          <br />
          & Premium Cultures
        </h1>

        <p
          className="muted"
          style={{
            maxWidth: 720,
            marginTop: 18,
            marginBottom: 42
          }}
        >
          Professionally maintained feeder supply, bioactive cultures, and
          keeper-focused support products built around clean production systems.
        </p>

        <div
          style={{
            display: 'flex',
            gap: 12,
            flexWrap: 'wrap',
            marginBottom: 42
          }}
        >
          <button className="btn secondary" type="button">
            Live Feeders
          </button>

          <button className="btn secondary" type="button">
            Springtails
          </button>

          <button className="btn secondary" type="button">
            Supplies
          </button>

          <button className="btn secondary" type="button">
            Starter Kits
          </button>
        </div>

        <div className="grid product-grid">
          {products.map((product) => (
            <Link
              className="card"
              href={`/product/${product.slug}`}
              key={product.id}
            >
              <div
                style={{
                  height: 220,
                  border: '1px solid rgba(245,241,232,.06)',
                  background:
                    'radial-gradient(circle at top right, rgba(140,107,47,.10), transparent 10rem), #111111',
                  display: 'grid',
                  placeItems: 'center',
                  marginBottom: 22
                }}
              >
                <span className="muted" style={{ fontSize: '.8rem' }}>
                  Product Image
                </span>
              </div>

              <p className="eyebrow">{product.stockStatus}</p>

              <h3>{product.title}</h3>

              <p className="muted">{product.description}</p>

              <div
                style={{
                  marginTop: 20,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <p className="price">{formatPrice(product.price)}</p>

                <span
                  style={{
                    color: '#b8944f',
                    fontSize: '.75rem',
                    letterSpacing: '.12em',
                    textTransform: 'uppercase'
                  }}
                >
                  View Product
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}