import Link from 'next/link';
import {
  categories,
  categoryData,
  categorySlugs,
  getProductsByCategory
} from '@/lib/catalog';

export const dynamic = 'force-dynamic';

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
            marginBottom: 42
          }}
        >
          OMEN is organized by category so the shop stays clean as the catalog
          grows.
        </p>

        <div className="category-list">
          {categoryCounts.map(({ category, count }) => {
            const slug = categorySlugs[category];
            const item = categoryData[slug];

            return (
              <Link className="category-tile" href={`/shop/${slug}`} key={category}>
                <div>
                  <p className="eyebrow">
                    {count} Product{count === 1 ? '' : 's'}
                  </p>

                  <h3>{item.title}</h3>

                  <p className="muted">{item.description}</p>
                </div>

                <span className="category-arrow">→</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}