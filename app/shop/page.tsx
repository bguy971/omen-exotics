import Link from 'next/link';
import {
  categories,
  getProductPriceRange,
  getProductsByCategory
} from '@/lib/products';

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
          Feeders, cultures
          <br />
          & keeper supply.
        </h1>

        <p
          className="muted"
          style={{
            maxWidth: 740,
            marginTop: 18,
            marginBottom: 36
          }}
        >
          Shop by category. OMEN starts focused: live feeders, bioactive
          cultures, support supplies, and starter kits.
        </p>

        <div
          style={{
            display: 'flex',
            gap: 12,
            flexWrap: 'wrap',
            marginBottom: 54
          }}
        >
          <a className="btn secondary" href="#all">
            View All
          </a>

          {categories.map((category) => (
            <a
              className="btn secondary"
              href={`#${category.toLowerCase().replaceAll(' ', '-')}`}
              key={category}
            >
              {category}
            </a>
          ))}
        </div>

        <div id="all" className="grid" style={{ gap: 70 }}>
          {categories.map((category) => {
            const categoryProducts = getProductsByCategory(category);

            return (
              <section
                id={category.toLowerCase().replaceAll(' ', '-')}
                key={category}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 24,
                    alignItems: 'end',
                    marginBottom: 24
                  }}
                >
                  <div>
                    <div className="eyebrow">{category}</div>

                    <h2
                      style={{
                        fontFamily: 'Georgia, serif',
                        fontSize: 'clamp(2.2rem,4vw,3.5rem)',
                        lineHeight: 1,
                        margin: '10px 0 0'
                      }}
                    >
                      {category}
                    </h2>
                  </div>

                  <span
                    className="muted"
                    style={{
                      fontSize: '.85rem'
                    }}
                  >
                    {categoryProducts.length} product
                    {categoryProducts.length === 1 ? '' : 's'}
                  </span>
                </div>

                <div className="grid product-grid">
                  {categoryProducts.map((product) => (
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
                          gap: 18,
                          alignItems: 'center'
                        }}
                      >
                        <p className="price">{getProductPriceRange(product)}</p>

                        <span
                          style={{
                            color: '#b8944f',
                            fontSize: '.75rem',
                            letterSpacing: '.12em',
                            textTransform: 'uppercase',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          View Product
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}