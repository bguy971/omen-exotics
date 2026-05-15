import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  categoryData,
  getProductPriceRange,
  getProductsByCategory
} from '@/lib/catalog';

export const dynamic = 'force-dynamic';

export function generateStaticParams() {
  return Object.keys(categoryData).map((category) => ({ category }));
}

export default async function CategoryPage({
  params
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const data = categoryData[category];

  if (!data) return notFound();

  const products = await getProductsByCategory(data.title);

  return (
    <section className="section category-page">
      <div className="container">
        <Link href="/shop" className="eyebrow back-link">
          ← Back to Shop
        </Link>

        <div className="category-hero-panel">
          <div>
            <div className="eyebrow">{data.title}</div>

            <h1 className="page-title">{data.heading}</h1>

            <p className="page-intro">{data.description}</p>
          </div>
        </div>

        {products.length === 0 ? (
          <div className="card empty-category-card">
            <h3>Coming Soon</h3>
            <p className="muted">
              Products for this category are being prepared.
            </p>
          </div>
        ) : (
          <div className="grid product-grid premium-product-grid">
            {products.map((product) => (
              <Link
                className="product-card"
                href={`/product/${product.slug}`}
                key={product.id}
              >
                <div className="product-image">
                  <span>{product.category}</span>
                </div>

                <div className="product-card-body">
                  <p className="eyebrow">{product.status}</p>

                  <h3>{product.title}</h3>

                  <p className="muted">{product.description}</p>

                  <div className="product-card-footer">
                    <p className="price">{getProductPriceRange(product)}</p>
                    <span>View Product →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}