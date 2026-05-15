import Link from 'next/link';
import { getFeaturedProducts, getProductPriceRange } from '@/lib/catalog';

function productImagePath(slug: string) {
  return `/products/${slug}/main.jpg`;
}

export const dynamic = 'force-dynamic';

const categoryCards = [
  {
    title: 'Live Feeders',
    href: '/shop/live-feeders',
    kicker: 'Mealworms',
    className: 'cat-feeders',
    image: '/categories/category-live-feeders.jpg'
  },
  {
    title: 'Springtail Cultures',
    href: '/shop/bioactive-cultures',
    kicker: 'Temperate Whites',
    className: 'cat-springtails',
    image: '/categories/category-springtails.jpg'
  },
  {
    title: 'Isopods',
    href: '/shop/isopods',
    kicker: 'Coming Soon',
    className: 'cat-isopods',
    image: '/categories/category-isopods.jpg'
  },
  {
    title: 'Supplies',
    href: '/shop/supplies',
    kicker: 'Food • Litter • Charcoal',
    className: 'cat-supplies',
    image: '/categories/category-supplies.jpg'
  }
];

export default async function Home() {
  const featured = await getFeaturedProducts();

  return (
    <>
      <section className="hero storefront-hero">
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="eyebrow">Premium Quality. Built for serious keepers.</div>

            <h1>
              Premium Feeders,
              <br />
              Bioactive Cultures
              <br />
              & Exotic Supply
            </h1>

            <p>
              Healthy live feeders, professionally maintained cultures, and
              keeper-focused supplies packed with clean presentation and serious
              standards.
            </p>

            <div className="hero-actions">
              <Link className="btn" href="/shop/live-feeders">
                Shop Feeders
              </Link>

              <Link className="btn secondary" href="/shop/bioactive-cultures">
                Shop Bioactive
              </Link>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-orb" />
            <img
              className="hero-specimen specimen-gecko"
              src="/hero/hero-gecko.jpg"
              alt="Premium exotic reptile from OMEN EXOTICS"
            />
            <img
              className="hero-specimen specimen-mealworms"
              src="/hero/hero-mealworms.jpg"
              alt="Premium live mealworms from OMEN EXOTICS"
            />
          </div>
        </div>
      </section>

      <section className="quick-shop-section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <div className="eyebrow">Shop by Category</div>
              <h2>Find what you need fast.</h2>
            </div>

            <Link className="text-link" href="/shop">
              View All →
            </Link>
          </div>

          <div className="category-card-grid">
            {categoryCards.map((card) => (
              <Link
                className={`category-image-card ${card.className}`}
                href={card.href}
                style={{ backgroundImage: `url(${card.image})` }}
                key={card.title}
              >
                <span>{card.kicker}</span>
                <strong>{card.title}</strong>
                <em>Shop Now →</em>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-strip section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <div className="eyebrow">Featured Products</div>
              <h2>Top picks for your collection.</h2>
            </div>

            <Link className="text-link" href="/shop">
              View All Products →
            </Link>
          </div>

          <div className="grid product-grid premium-product-grid">
            {featured.map((product) => (
              <Link
                className="product-card"
                href={`/product/${product.slug}`}
                key={product.id}
              >
                <div
                  className="product-image"
                  style={{ backgroundImage: `url(${productImagePath(product.slug)})` }}
                >
                  <span>{product.category}</span>
                </div>

                <div className="product-card-body">
                  <p className="eyebrow">{product.status}</p>
                  <h3>{product.title}</h3>
                  <p className="muted">{product.description}</p>

                  <div className="product-card-footer">
                    <p className="price">{getProductPriceRange(product)}</p>
                    <span>Add / View →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="trust premium-trust">
        <div className="container trust-grid">
          <div className="trust-item">
            <strong>Healthy Cultures</strong>
            <span>Grown and maintained with care.</span>
          </div>
          <div className="trust-item">
            <strong>Fast Shipping</strong>
            <span>Carefully packed live orders.</span>
          </div>
          <div className="trust-item">
            <strong>Secure Packaging</strong>
            <span>Built around live arrival success.</span>
          </div>
          <div className="trust-item">
            <strong>Keeper Quality</strong>
            <span>Products built for serious setups.</span>
          </div>
        </div>
      </section>

      <section className="starter-kit-panel section">
        <div className="container starter-kit-card">
          <div>
            <div className="eyebrow">Perfect for new setups</div>
            <h2>Bioactive starter kits.</h2>
            <p>
              Everything needed to begin building a clean, active bioactive
              environment with curated cultures and support supplies.
            </p>

            <Link className="btn" href="/shop/starter-kits">
              Shop Kits →
            </Link>
          </div>

          <img
            className="kit-visual"
            src="/hero/starter-kit.jpg"
            alt="OMEN EXOTICS bioactive starter kit"
          />
        </div>
      </section>
    </>
  );
}