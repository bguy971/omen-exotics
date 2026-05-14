import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getProductBySlug,
  getProductPriceRange,
  productIncludes,
  productOptions
} from '@/lib/catalog';

export default async function ProductPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) return notFound();

  const hasMultipleVariants = product.product_variants.length > 1;
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

          <div className="card" style={{ marginTop: 28 }}>
            {hasMultipleVariants ? (
              <>
                <label
                  className="eyebrow"
                  htmlFor="variant"
                  style={{ display: 'block', marginBottom: 12 }}
                >
                  Select Option
                </label>

                <select
                  id="variant"
                  className="input"
                  defaultValue={product.product_variants[0]?.id}
                >
                  {product.product_variants.map((variant) => (
                    <option value={variant.id} key={variant.id}>
                      {variant.title}
                    </option>
                  ))}
                </select>
              </>
            ) : (
              <div>
                <div className="eyebrow">Product Option</div>
                <p style={{ marginBottom: 0 }}>
                  {product.product_variants[0]?.title}
                </p>
              </div>
            )}

            {options.map((option) => (
              <div style={{ marginTop: 22 }} key={option.name}>
                <label
                  className="eyebrow"
                  htmlFor={option.name}
                  style={{ display: 'block', marginBottom: 12 }}
                >
                  {option.name}
                </label>

                <select id={option.name} className="input">
                  {option.values.map((value) => (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
            ))}

            <div style={{ marginTop: 22 }}>
              <label
                className="eyebrow"
                htmlFor="quantity"
                style={{ display: 'block', marginBottom: 12 }}
              >
                Quantity
              </label>

              <select id="quantity" className="input" defaultValue="1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
            </div>

            {includes.length > 0 && (
              <div style={{ marginTop: 26 }}>
                <div className="eyebrow">Includes</div>

                <div style={{ display: 'grid', gap: 12, marginTop: 14 }}>
                  {includes.map((item) => (
                    <div key={item}>✓ {item}</div>
                  ))}
                </div>
              </div>
            )}
          </div>

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

          <div
            style={{
              display: 'flex',
              gap: 14,
              flexWrap: 'wrap',
              marginTop: 30
            }}
          >
            <button className="btn" type="button">
              Add to Cart
            </button>

            <Link className="btn secondary" href="/shipping">
              View Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}