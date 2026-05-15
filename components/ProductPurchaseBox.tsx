'use client';

import { useMemo, useState } from 'react';

type Product = {
  id: string;
  slug: string;
  title: string;
  is_live_product: boolean;
};

type ProductOption = {
  id: string;
  title: string;
  price: number;
};

type Props = {
  product: Product;
  options: ProductOption[];
  includes: string[];
};

function formatPrice(cents: number) {
  if (!cents) return 'Pricing coming soon';
  return `$${(cents / 100).toFixed(2)}`;
}

export function ProductPurchaseBox({ product, options, includes }: Props) {
  const [selectedOptionId, setSelectedOptionId] = useState(options[0]?.id || '');
  const [quantity, setQuantity] = useState(1);

  const selectedOption = useMemo(() => {
    return options.find((option) => option.id === selectedOptionId) || options[0];
  }, [options, selectedOptionId]);

  function addToCart() {
    if (!selectedOption) return;

    const existingCart = window.localStorage.getItem('omen-cart');
    const cart = existingCart ? JSON.parse(existingCart) : [];

    const existingItem = cart.find(
      (item: any) => item.variantId === selectedOption.id
    );

    const updatedCart = existingItem
      ? cart.map((item: any) =>
          item.variantId === selectedOption.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      : [
          ...cart,
          {
            productId: product.id,
            productTitle: product.title,
            productSlug: product.slug,
            variantId: selectedOption.id,
            variantTitle: selectedOption.title,
            price: selectedOption.price,
            quantity,
            isLive: product.is_live_product
          }
        ];

    window.localStorage.setItem('omen-cart', JSON.stringify(updatedCart));
    window.location.href = '/cart';
  }

  return (
    <div className="purchase-card">
      <div className="purchase-topline">
        <div>
          <div className="eyebrow">Select Option</div>
          <strong>{selectedOption ? formatPrice(selectedOption.price) : 'Unavailable'}</strong>
        </div>

        <span>{product.is_live_product ? 'Live Product' : 'Supply Item'}</span>
      </div>

      {options.length > 0 && (
        <div className="field-group">
          <label className="eyebrow" htmlFor="product-option">
            Size / Quantity
          </label>

          <select
            id="product-option"
            className="input"
            value={selectedOptionId}
            onChange={(event) => setSelectedOptionId(event.target.value)}
          >
            {options.map((option) => (
              <option value={option.id} key={option.id}>
                {option.title} — {formatPrice(option.price)}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="field-group">
        <label className="eyebrow" htmlFor="purchase-quantity">
          Order Quantity
        </label>

        <select
          id="purchase-quantity"
          className="input"
          value={quantity}
          onChange={(event) => setQuantity(Number(event.target.value))}
        >
          {Array.from({ length: 10 }, (_, index) => index + 1).map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
      </div>

      {includes.length > 0 && (
        <div className="includes-box">
          <div className="eyebrow">Includes</div>

          <div>
            {includes.map((item) => (
              <span key={item}>✓ {item}</span>
            ))}
          </div>
        </div>
      )}

      <button
        className="btn purchase-button"
        type="button"
        onClick={addToCart}
        disabled={!selectedOption}
      >
        Add to Cart
      </button>
    </div>
  );
}