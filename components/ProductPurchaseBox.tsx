'use client';

import { useState } from 'react';
import type { CatalogProduct } from '@/lib/catalog';

type Props = {
  product: CatalogProduct;
  options: {
    name: string;
    values: string[];
  }[];
  includes: string[];
};

type CartItem = {
  productId: string;
  productTitle: string;
  productSlug: string;
  variantId: string;
  variantTitle: string;
  price: number;
  quantity: number;
  isLive: boolean;
};

const quantityOptions = Array.from({ length: 10 }, (_, index) => index + 1);

export function ProductPurchaseBox({ product, options, includes }: Props) {
  const [variantId, setVariantId] = useState(product.product_variants[0]?.id || '');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const selectedVariant = product.product_variants.find(
    (variant) => variant.id === variantId
  );

  function addToCart() {
    if (!selectedVariant) return;

    const existingCart = window.localStorage.getItem('omen-cart');
    const cart: CartItem[] = existingCart ? JSON.parse(existingCart) : [];

    const existingItem = cart.find(
      (item) =>
        item.productId === product.id && item.variantId === selectedVariant.id
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        productId: product.id,
        productTitle: product.title,
        productSlug: product.slug,
        variantId: selectedVariant.id,
        variantTitle: selectedVariant.title,
        price: selectedVariant.price,
        quantity,
        isLive: product.is_live_product
      });
    }

    window.localStorage.setItem('omen-cart', JSON.stringify(cart));
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <>
      <div className="card purchase-card" style={{ marginTop: 28 }}>
        {product.product_variants.length > 1 ? (
          <>
            <label className="eyebrow" htmlFor="variant">
              Select Option
            </label>

            <select
              id="variant"
              className="input"
              value={variantId}
              onChange={(event) => setVariantId(event.target.value)}
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
            <p style={{ marginBottom: 0 }}>{product.product_variants[0]?.title}</p>
          </div>
        )}

        {options.map((option) => (
          <div className="field-group" key={option.name}>
            <label className="eyebrow" htmlFor={option.name}>
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

        <div className="field-group">
          <label className="eyebrow" htmlFor="quantity">
            Quantity
          </label>

          <select
            id="quantity"
            className="input"
            value={quantity}
            onChange={(event) => setQuantity(Number(event.target.value))}
          >
            {quantityOptions.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
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

      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 30 }}>
        <button className="btn" type="button" onClick={addToCart}>
          {added ? 'Added to Cart' : 'Add to Cart'}
        </button>

        <a className="btn secondary" href="/cart">
          View Cart
        </a>
      </div>
    </>
  );
}