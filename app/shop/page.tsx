import Link from 'next/link';
import {
  categories,
  categoryData,
  categorySlugs,
  getProductsByCategory
} from '@/lib/catalog';

export const dynamic = 'force-dynamic';

function categoryImagePath(slug: string) {
  return `/categories/category-${slug}.jpg`;
}

export default async function Shop() {
  const categoryCounts = await Promise.all(
    categories.map(async (category) => {
      const products = await getProductsByCategory(category);
      return { category, count: products.length };
    })
  );

  return (
    <section className="section shop-landing">
      <div className="container">
        <div className="eyebrow">Shop OMEN</div>

        <h1 className="page-title">
          Shop by
          <br />
          category.
        </h1>

        <p className="page-intro">
          Fast access to live feeders, bioactive cultures, supplies, and starter
          kits. Built to stay simple now and scale cleanly as OMEN expands.
        </p>

        <div className="shop-category-grid">
          {categoryCounts.map(({ category, count }) => {
            const slug = categorySlugs[category];
            const item = categoryData[slug];

            return (
              <Link
                className={`shop-category-card shop-card-${slug}`}
                href={`/shop/${slug}`}
                style={{ backgroundImage: `url(${categoryImagePath(slug)})` }}
                key={category}
              >
                <div>
                  <p className="eyebrow">
                    {count} Product{count === 1 ? '' : 's'}
                  </p>

                  <h2>{item.title}</h2>

                  <p>{item.description}</p>
                </div>

                <span>Shop Now →</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}