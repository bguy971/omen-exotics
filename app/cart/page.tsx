'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

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

function formatPrice(cents: number) {
  if (!cents) return 'Pricing coming soon';
  return `$${(cents / 100).toFixed(2)}`;
}

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [policyAccepted, setPolicyAccepted] = useState(false);

  useEffect(() => {
    const storedCart = window.localStorage.getItem('omen-cart');
    setCart(storedCart ? JSON.parse(storedCart) : []);
  }, []);

  const hasLiveProducts = cart.some((item) => item.isLive);

  const subtotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  function saveCart(updatedCart: CartItem[]) {
    setCart(updatedCart);
    window.localStorage.setItem('omen-cart', JSON.stringify(updatedCart));
  }

  function updateQuantity(variantId: string, quantity: number) {
    const updatedCart = cart.map((item) =>
      item.variantId === variantId ? { ...item, quantity } : item
    );

    saveCart(updatedCart);
  }

  function removeItem(variantId: string) {
    const updatedCart = cart.filter((item) => item.variantId !== variantId);
    saveCart(updatedCart);
  }

  return (
    <section className="section cart-page">
      <div className="container">
        <div className="eyebrow">OMEN Checkout</div>

        <h1 className="page-title">
          Your cart.
        </h1>

        <p className="page-intro">
          Review your live feeders, cultures, supplies, and starter kits before
          checkout.
        </p>

        {cart.length === 0 ? (
          <div className="empty-cart-panel">
            <div>
              <div className="eyebrow">Cart Empty</div>

              <h2>No products selected.</h2>

              <p>
                Start with live feeders, bioactive cultures, supplies, or starter
                kits.
              </p>

              <Link className="btn" href="/shop">
                Shop OMEN
              </Link>
            </div>
          </div>
        ) : (
          <div className="premium-cart-layout">
            <div className="cart-items-panel">
              {cart.map((item) => (
                <div className="premium-cart-row" key={item.variantId}>
                  <div className="cart-product-thumb" />

                  <div className="cart-product-main">
                    <Link href={`/product/${item.productSlug}`}>
                      <strong>{item.productTitle}</strong>
                    </Link>

                    <p>{item.variantTitle}</p>

                    <div className="cart-controls">
                      <label className="eyebrow" htmlFor={`qty-${item.variantId}`}>
                        Qty
                      </label>

                      <select
                        id={`qty-${item.variantId}`}
                        className="input small-input"
                        value={item.quantity}
                        onChange={(event) =>
                          updateQuantity(item.variantId, Number(event.target.value))
                        }
                      >
                        {quantityOptions.map((value) => (
                          <option value={value} key={value}>
                            {value}
                          </option>
                        ))}
                      </select>

                      <button
                        type="button"
                        className="cart-remove-button"
                        onClick={() => removeItem(item.variantId)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="cart-line-price">
                    <span>{formatPrice(item.price * item.quantity)}</span>
                    <small>{formatPrice(item.price)} each</small>
                  </div>
                </div>
              ))}
            </div>

            <aside className="order-summary-panel">
              <div className="eyebrow">Order Summary</div>

              <h2>Ready to ship.</h2>

              <div className="summary-line">
                <span>Subtotal</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>

              <div className="summary-line">
                <span>Shipping</span>
                <strong>Calculated at checkout</strong>
              </div>

              <div className="summary-line">
                <span>Live order status</span>
                <strong>{hasLiveProducts ? 'Policy required' : 'Not required'}</strong>
              </div>

              {hasLiveProducts && (
                <label className="policy-check premium-policy-check">
                  <input
                    type="checkbox"
                    checked={policyAccepted}
                    onChange={(event) => setPolicyAccepted(event.target.checked)}
                  />

                  <span>
                    I understand live shipping policies, weather holds, and live
                    arrival terms.
                  </span>
                </label>
              )}

              <button
                className="btn"
                type="button"
                disabled={hasLiveProducts && !policyAccepted}
                style={{
                  width: '100%',
                  marginTop: 24,
                  opacity: hasLiveProducts && !policyAccepted ? 0.55 : 1
                }}
              >
                Checkout
              </button>

              <p className="summary-note">
                Checkout wiring comes later. Cart storage is active.
              </p>

              <Link href="/shipping" className="text-link summary-link">
                View Shipping Policy →
              </Link>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}