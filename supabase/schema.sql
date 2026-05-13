create table if not exists profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  first_name text,
  last_name text,
  email text,
  phone text,
  default_shipping_address_id uuid,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists addresses (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  first_name text,
  last_name text,
  address_1 text,
  address_2 text,
  city text,
  state text,
  zip text,
  country text default 'US',
  phone text,
  is_default boolean default false,
  created_at timestamptz default now()
);

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  subtitle text,
  description text,
  category text,
  status text default 'active',
  is_live_product boolean default false,
  requires_policy_acknowledgment boolean default false,
  shipping_profile text default 'standard',
  featured boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists product_variants (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references products(id) on delete cascade,
  title text not null,
  sku text unique,
  price integer not null,
  stripe_price_id text,
  inventory_quantity integer default 0,
  stock_status text default 'In Stock',
  weight numeric,
  is_subscription_eligible boolean default false,
  created_at timestamptz default now()
);

create table if not exists collections (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  description text,
  sort_order integer default 0
);

create table if not exists product_collections (
  product_id uuid references products(id) on delete cascade,
  collection_id uuid references collections(id) on delete cascade,
  primary key (product_id, collection_id)
);

create table if not exists cart_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  session_id text,
  product_id uuid references products(id) on delete cascade,
  variant_id uuid references product_variants(id) on delete cascade,
  quantity integer not null default 1,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  stripe_checkout_session_id text,
  stripe_payment_intent_id text,
  status text default 'pending',
  subtotal integer,
  shipping integer,
  tax integer,
  total integer,
  customer_email text,
  shipping_address jsonb,
  created_at timestamptz default now()
);

create table if not exists order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references orders(id) on delete cascade,
  product_id uuid references products(id) on delete set null,
  variant_id uuid references product_variants(id) on delete set null,
  title text,
  variant_title text,
  quantity integer,
  price integer,
  created_at timestamptz default now()
);

create table if not exists subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  stripe_subscription_id text unique,
  stripe_customer_id text,
  status text,
  product_id uuid references products(id) on delete set null,
  variant_id uuid references product_variants(id) on delete set null,
  interval text,
  current_period_start timestamptz,
  current_period_end timestamptz,
  created_at timestamptz default now()
);

create table if not exists wholesale_inquiries (
  id uuid primary key default gen_random_uuid(),
  business_name text,
  contact_name text,
  email text,
  phone text,
  location text,
  products_interested text,
  estimated_volume text,
  notes text,
  created_at timestamptz default now()
);
