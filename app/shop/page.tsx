import Link from 'next/link';
import {
  categories,
  categoryData,
  categorySlugs,
  getProductsByCategory
} from '@/lib/catalog';

export default async function Shop() {
  const categoryCounts = await Promise.all(
    categories.map(async (category) => {
      const products = await getProductsByCategory(category);
      return {
        category,
        count: products.length
      };
    })
  );

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
          {categoryCounts.map(({ category, count }) => {
            const slug = categorySlugs[category];
            const item = categoryData[slug];

            return (
              <Link className="card" href={`/shop/${slug}`} key={category}>
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

                <p className="eyebrow">
                  {count} Product{count === 1 ? '' : 's'}
                </p>

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