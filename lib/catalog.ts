import { supabase } from './supabase';

export type ProductCategory =
  | 'Live Feeders'
  | 'Bioactive Cultures'
  | 'Supplies'
  | 'Starter Kits';

export type CatalogVariant = {
  id: string;
  title: string;
  sku: string | null;
  price: number;
  inventory_quantity: number;
  stock_status: string;
  stripe_price_id: string | null;
  is_subscription_eligible: boolean;
};

export type CatalogProduct = {
  id: string;
  title: string;
  slug: string;
  subtitle: string | null;
  description: string | null;
  category: ProductCategory;
  status: string;
  is_live_product: boolean;
  requires_policy_acknowledgment: boolean;
  shipping_profile: string;
  featured: boolean;
  product_variants: CatalogVariant[];
};

export const categories: ProductCategory[] = [
  'Live Feeders',
  'Bioactive Cultures',
  'Supplies',
  'Starter Kits'
];

export const categorySlugs: Record<ProductCategory, string> = {
  'Live Feeders': 'live-feeders',
  'Bioactive Cultures': 'bioactive-cultures',
  Supplies: 'supplies',
  'Starter Kits': 'starter-kits'
};

export const categoryData: Record<
  string,
  {
    title: ProductCategory;
    heading: string;
    description: string;
  }
> = {
  'live-feeders': {
    title: 'Live Feeders',
    heading: 'Live Feeders',
    description:
      'Live feeder products packed around clean supply, keeper convenience, and professional fulfillment standards.'
  },
  'bioactive-cultures': {
    title: 'Bioactive Cultures',
    heading: 'Bioactive Cultures',
    description:
      'Springtails and future cleanup crew cultures for bioactive enclosures, colony expansion, and keeper systems.'
  },
  supplies: {
    title: 'Supplies',
    heading: 'Supplies',
    description:
      'Support products for feeder care, culture maintenance, and bioactive enclosure setup.'
  },
  'starter-kits': {
    title: 'Starter Kits',
    heading: 'Starter Kits',
    description:
      'Curated starter systems that bundle live products, supplies, and care guidance into cleaner entry points.'
  }
};

export const productOptions: Record<
  string,
  {
    name: string;
    values: string[];
  }[]
> = {
  'live-mealworms': [
    {
      name: 'Feeder Size',
      values: [
        'Small (0.25”) — hatchlings / tiny feeders',
        'Medium (0.50”) — standard feeder size',
        'Large (0.75”) — popular general-purpose size',
        'XL (1.00”) — heavier feeder option',
        'Giant (1.25”+) — premium large feeders'
      ]
    }
  ]
};

export const productIncludes: Record<string, string[]> = {
  'springtail-starter-kit': [
    '16 oz springtail culture',
    'springtail food',
    'charcoal',
    'starter container',
    'care guide'
  ],
  'mealworm-starter-kit': [
    '500 mealworms',
    'starter substrate',
    'care guide',
    'moisture feeding guide'
  ]
};

export function formatPrice(cents: number) {
  if (!cents) return 'Pricing coming soon';
  return `$${(cents / 100).toFixed(2)}`;
}

export function getProductPriceRange(product: CatalogProduct) {
  const pricedVariants = product.product_variants.filter(
    (variant) => variant.price > 0
  );

  if (!pricedVariants.length) return 'Pricing coming soon';

  const prices = pricedVariants.map((variant) => variant.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);

  if (min === max) return formatPrice(min);

  return `${formatPrice(min)} – ${formatPrice(max)}`;
}

export async function getProducts() {
  const { data, error } = await supabase
    .from('products')
    .select(
      `
      *,
      product_variants (*)
    `
    )
    .eq('status', 'active')
    .order('created_at', { ascending: true });

  if (error) {
    console.error(error);
    return [];
  }

  return (data || []) as CatalogProduct[];
}

export async function getFeaturedProducts() {
  const { data, error } = await supabase
    .from('products')
    .select(
      `
      *,
      product_variants (*)
    `
    )
    .eq('status', 'active')
    .eq('featured', true)
    .order('created_at', { ascending: true })
    .limit(4);

  if (error) {
    console.error(error);
    return [];
  }

  return (data || []) as CatalogProduct[];
}

export async function getProductsByCategory(category: ProductCategory) {
  const { data, error } = await supabase
    .from('products')
    .select(
      `
      *,
      product_variants (*)
    `
    )
    .eq('status', 'active')
    .eq('category', category)
    .order('created_at', { ascending: true });

  if (error) {
    console.error(error);
    return [];
  }

  return (data || []) as CatalogProduct[];
}

export async function getProductBySlug(slug: string) {
  const { data, error } = await supabase
    .from('products')
    .select(
      `
      *,
      product_variants (*)
    `
    )
    .eq('status', 'active')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data as CatalogProduct;
}