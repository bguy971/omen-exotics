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
    <section className="section">
      <div className="container">
        <div className="eyebrow">Cart</div>

        <h1
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(3rem,7vw,6rem)',
            lineHeight: '.92',
            marginTop: 14
          }}
        >
          Your cart.
        </h1>

        {cart.length === 0 ? (
          <div className="card" style={{ marginTop: 42 }}>
            <h3 style={{ fontFamily: 'Georgia, serif', marginTop: 0 }}>
              Your cart is empty.
            </h3>

            <p className="muted">
              Start with live feeders, bioactive cultures, supplies, or starter kits.
            </p>

            <Link className="btn" href="/shop" style={{ marginTop: 20 }}>
              Shop OMEN
            </Link>
          </div>
        ) : (
          <div
            className="grid"
            style={{
              gridTemplateColumns: 'minmax(0, 2fr) minmax(280px, 1fr)',
              gap: 32,
              marginTop: 42
            }}
          >
            <div className="card">
              {cart.map((item) => (
                <div className="cart-row" key={item.variantId}>
                  <div>
                    <strong>{item.productTitle}</strong>

                    <p className="muted">
                      {item.variantTitle} • {formatPrice(item.price)}
                    </p>

                    <div
                      style={{
                        display: 'flex',
                        gap: 12,
                        alignItems: 'center',
                        marginTop: 12
                      }}
                    >
                      <label className="eyebrow" htmlFor={`qty-${item.variantId}`}>
                        Qty
                      </label>

                      <select
                        id={`qty-${item.variantId}`}
                        className="input"
                        value={item.quantity}
                        onChange={(event) =>
                          updateQuantity(item.variantId, Number(event.target.value))
                        }
                        style={{ maxWidth: 120 }}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                      </select>

                      <button
                        type="button"
                        className="btn secondary"
                        onClick={() => removeItem(item.variantId)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <div>{formatPrice(item.price * item.quantity)}</div>
                </div>
              ))}
            </div>

            <div className="card">
              <h3 style={{ fontFamily: 'Georgia, serif', marginTop: 0 }}>
                Order Summary
              </h3>

              <div className="cart-row">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>

              <div className="cart-row">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>

              {hasLiveProducts && (
                <label
                  style={{
                    display: 'flex',
                    gap: 12,
                    marginTop: 20,
                    alignItems: 'flex-start'
                  }}
                >
                  <input
                    type="checkbox"
                    checked={policyAccepted}
                    onChange={(event) => setPolicyAccepted(event.target.checked)}
                  />

                  <span className="muted">
                    I understand live shipping policies and live arrival terms.
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

              <p className="muted" style={{ fontSize: '.9rem', marginTop: 16 }}>
                Checkout wiring comes next. Cart storage is now active.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}