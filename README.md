# OMEN EXOTICS Custom Ecommerce Scaffold

Stack:
- Next.js
- Supabase
- Stripe Checkout + Customer Portal
- Vercel
- Resend later

## Start

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Next setup steps

1. Create Supabase project.
2. Run `supabase/schema.sql` in Supabase SQL editor.
3. Create Stripe products/prices.
4. Add Stripe keys to `.env.local`.
5. Replace placeholder product data with Supabase queries.
6. Wire cart state to Supabase `cart_items`.
7. Finish Stripe webhook order sync.
8. Deploy to Vercel.
