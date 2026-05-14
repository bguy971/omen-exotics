import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getProductBySlug,
  getProductPriceRange,
  productIncludes,
  productOptions
} from '@/lib/catalog';
import { ProductPurchaseBox } from '@/components/ProductPurchaseBox';

export default async function ProductPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) return notFound();

  const options = productOptions[product.slug] || [];
  const includes = productIncludes[product.slug] || [];

  return (
    <section className="section">
      <div
        className="container grid"
        style={{
          gridTemplateColumns: 'repeat(auto-fit,minmax(360px,1fr))',
          gap: 56,
          alignItems: 'start'
        }}
      >
        <div>
          <div
            className="card"
            style={{
              minHeight: 560,
              display: 'grid',
              placeItems: 'center',
              background:
                'radial-gradient(circle at top right, rgba(140,107,47,.14), transparent 14rem), #111111'
            }}
          >
            <span className="muted">Premium Product Photography</span>
          </div>
        </div>

        <div>
          <div className="eyebrow">
            {product.category} • {product.status}
          </div>

          <h1
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(3rem,6vw,5.4rem)',
              lineHeight: '.92',
              marginTop: 14,
              marginBottom: 14
            }}
          >
            {product.title}
          </h1>

          <p className="price" style={{ fontSize: '2rem', marginBottom: 20 }}>
            {getProductPriceRange(product)}
          </p>

          <p className="muted" style={{ fontSize: '1.05rem', maxWidth: 640 }}>
            {product.description}
          </p>

          <ProductPurchaseBox product={product} options={options} includes={includes} />

          {product.is_live_product && (
            <div className="card" style={{ marginTop: 24 }}>
              <strong style={{ display: 'block', marginBottom: 12 }}>
                Live Product Notice
              </strong>

              <p className="muted">
                Live products ship Monday through Wednesday to reduce transit
                risk and avoid weekend delays.
              </p>

              <p className="muted">
                Orders may be delayed during unsafe weather conditions to protect
                live arrival success.
              </p>

              <label
                style={{
                  display: 'flex',
                  gap: 12,
                  marginTop: 20,
                  alignItems: 'flex-start'
                }}
              >
                <input type="checkbox" />
                <span className="muted">
                  I understand OMEN EXOTICS live shipping and arrival policies.
                </span>
              </label>
            </div>
          )}

          <div className="card" style={{ marginTop: 40 }}>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '2rem',
                marginTop: 0
              }}
            >
              The OMEN Standard
            </h2>

            <p className="muted">
              Every live product is handled with keeper-first standards,
              structured production controls, and professional fulfillment
              practices.
            </p>

            <div style={{ display: 'grid', gap: 12, marginTop: 22 }}>
              <div>✓ Quality checked before fulfillment</div>
              <div>✓ Controlled colony maintenance</div>
              <div>✓ Shipping risk protocols</div>
              <div>✓ Premium direct-to-customer presentation</div>
            </div>

            <Link className="btn secondary" href="/shipping" style={{ marginTop: 24 }}>
              View Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}