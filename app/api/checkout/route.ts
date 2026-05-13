import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2025-07-30.basil' as any });

export async function POST(req: Request) {
  try {
    const { lineItems } = await req.json();
    if (!Array.isArray(lineItems) || lineItems.length === 0) {
      return NextResponse.json({ error: 'Missing line items' }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: lineItems,
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/account?checkout=success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cart?checkout=cancelled`,
      shipping_address_collection: { allowed_countries: ['US'] },
      billing_address_collection: 'auto'
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    return NextResponse.json({ error: 'Checkout failed' }, { status: 500 });
  }
}
