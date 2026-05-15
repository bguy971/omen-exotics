import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getProductBySlug,
  getProductPriceRange,
  productIncludes,
  productOptions
} from '@/lib/catalog';
import { ProductPurchaseBox } from '@/components/ProductPurchaseBox';

function productImagePath(slug: string, fileName = 'main.jpg') {
  return `/products/${slug}/${fileName}`;
}

export const dynamic = 'force-dynamic';

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
    <section className="section product-page">
      <div className="container product-detail-grid">
        <div className="product-gallery">
          <div
            className="product-main-image"
            style={{ backgroundImage: `url(${productImagePath(product.slug)})` }}
          >
            <span>{product.category}</span>
          </div>

          <div className="product-thumb-row">
            {['thumb-1.jpg', 'thumb-2.jpg', 'thumb-3.jpg'].map((fileName) => (
              <div
                key={fileName}
                style={{ backgroundImage: `url(${productImagePath(product.slug, fileName)})` }}
              />
            ))}
          </div>
        </div>

        <div className="product-info-panel">
          <div className="eyebrow">
            {product.category} • {product.status}
          </div>

          <h1 className="product-title">{product.title}</h1>

          <p className="product-price">{getProductPriceRange(product)}</p>

          <p className="product-description">{product.description}</p>

          <div className="product-trust-row">
            <span>Healthy Stock</span>
            <span>Secure Packing</span>
            <span>Ships Mon–Wed</span>
          </div>

          <ProductPurchaseBox product={product} options={options} includes={includes} />

          {product.is_live_product && (
            <div className="live-notice-card">
              <strong>Live Product Notice</strong>

              <p>
                Live products ship Monday through Wednesday to reduce transit
                risk and avoid weekend delays. Orders may be held during unsafe
                weather conditions.
              </p>

              <label>
                <input type="checkbox" />
                <span>
                  I understand OMEN EXOTICS live shipping and arrival policies.
                </span>
              </label>
            </div>
          )}

          <div className="product-standard-card">
            <h2>The OMEN Standard</h2>

            <p>
              Every live product is handled with keeper-first standards,
              controlled colony maintenance, and professional fulfillment
              practices.
            </p>

            <div className="standard-list">
              <div>✓ Quality checked before fulfillment</div>
              <div>✓ Controlled colony maintenance</div>
              <div>✓ Shipping risk protocols</div>
              <div>✓ Premium direct-to-customer presentation</div>
            </div>

            <Link className="btn secondary" href="/shipping">
              View Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}