import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  categoryData,
  getProductPriceRange,
  getProductsByCategory
} from '@/lib/catalog';

export const dynamic = 'force-dynamic';

export function generateStaticParams() {
  return Object.keys(categoryData).map((category) => ({
    category
  }));
}

export default async function CategoryPage({
  params
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const data = categoryData[category];

  if (!data) {
    return notFound();
  }

  const products = await getProductsByCategory(data.title);

  return (
    <section className="section">
      <div className="container">
        <Link
          href="/shop"
          className="eyebrow"
          style={{
            display: 'inline-block',
            marginBottom: 18
          }}
        >
          ← Back to Shop
        </Link>

        <div className="eyebrow">{data.title}</div>

        <h1
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(3rem,7vw,6rem)',
            lineHeight: '.92',
            marginTop: 12
          }}
        >
          {data.heading}
        </h1>

        <p
          className="muted"
          style={{
            maxWidth: 760,
            marginTop: 18,
            marginBottom: 48
          }}
        >
          {data.description}
        </p>

        {products.length === 0 ? (
          <div className="card">
            <h3>Coming Soon</h3>
            <p className="muted">
              Products for this category are being prepared.
            </p>
          </div>
        ) : (
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

                <p className="eyebrow">{product.status}</p>

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
        )}
      </div>
    </section>
  );
}