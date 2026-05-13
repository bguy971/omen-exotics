import Link from 'next/link';
import { categories, getProductsByCategory } from '@/lib/products';

const categoryCopy = {
  'Live Feeders': {
    slug: 'live-feeders',
    title: 'Live Feeders',
    description:
      'Live mealworms and future feeder insects packed for reptile, bird, amphibian, and exotic keeper routines.'
  },
  'Bioactive Cultures': {
    slug: 'bioactive-cultures',
    title: 'Bioactive Cultures',
    description:
      'Springtails and future culture-based cleanup crew products for bioactive enclosures and culture expansion.'
  },
  Supplies: {
    slug: 'supplies',
    title: 'Supplies',
    description:
      'High-margin support products including food, leaf litter, charcoal, cork, and culture containers.'
  },
  'Starter Kits': {
    slug: 'starter-kits',
    title: 'Starter Kits',
    description:
      'Curated starter systems for keepers who want a cleaner, simpler way to launch feeder or culture setups.'
  }
};

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
          Choose your
          <br />
          supply category.
        </h1>

        <p
          className="muted"
          style={{
            maxWidth: 760,
            marginTop: 18,
            marginBottom: 48
          }}
        >
          OMEN is organized by category so the shop stays clean as the product
          catalog grows.
        </p>

        <div
          className="grid"
          style={{
            gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))'
          }}
        >
          {categories.map((category) => {
            const item = categoryCopy[category];
            const count = getProductsByCategory(category).length;

            return (
              <Link
                className="card"
                href={`/shop/${item.slug}`}
                key={category}
              >
                <div
                  style={{
                    height: 230,
                    border: '1px solid rgba(245,241,232,.06)',
                    background:
                      'radial-gradient(circle at top right, rgba(140,107,47,.14), transparent 11rem), #111111',
                    display: 'grid',
                    placeItems: 'center',
                    marginBottom: 24
                  }}
                >
                  <span className="muted" style={{ fontSize: '.8rem' }}>
                    Category Image
                  </span>
                </div>

                <p className="eyebrow">{count} Products</p>

                <h3>{item.title}</h3>

                <p className="muted">{item.description}</p>

                <span
                  style={{
                    display: 'inline-block',
                    marginTop: 22,
                    color: '#b8944f',
                    fontSize: '.75rem',
                    letterSpacing: '.12em',
                    textTransform: 'uppercase'
                  }}
                >
                  Explore Category
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}