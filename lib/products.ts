export type ProductCategory =
  | 'Live Feeders'
  | 'Bioactive Cultures'
  | 'Supplies'
  | 'Starter Kits';

export type StockStatus =
  | 'In Stock'
  | 'Low Stock'
  | 'Sold Out'
  | 'Weather Hold'
  | 'Coming Soon';

export type ProductVariant = {
  id: string;
  label: string;
  price: number;
  stockStatus?: StockStatus;
  stripePriceId?: string;
};

export type ProductOption = {
  name: string;
  values: string[];
};

export type Product = {
  id: string;
  title: string;
  slug: string;
  category: ProductCategory;
  description: string;
  isLive: boolean;
  stockStatus: StockStatus;
  variants: ProductVariant[];
  options?: ProductOption[];
  includes?: string[];
};

export const categories: ProductCategory[] = [
  'Live Feeders',
  'Bioactive Cultures',
  'Supplies',
  'Starter Kits'
];

export const products: Product[] = [
  {
    id: 'mealworms',
    title: 'Live Mealworms',
    slug: 'live-mealworms',
    category: 'Live Feeders',
    description:
      'Clean live mealworms packed for reptile, bird, amphibian, and exotic keeper feeding routines.',
    isLive: true,
    stockStatus: 'In Stock',
    options: [
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
    ],
    variants: [
      { id: 'mealworms-100', label: '100 Count', price: 0 },
      { id: 'mealworms-250', label: '250 Count', price: 0 },
      { id: 'mealworms-500', label: '500 Count', price: 0 },
      { id: 'mealworms-1000', label: '1,000 Count', price: 0 },
      { id: 'mealworms-2000', label: '2,000 Count', price: 0 }
    ]
  },
  {
    id: 'temperate-white-springtails',
    title: 'Temperate White Springtails',
    slug: 'temperate-white-springtails',
    category: 'Bioactive Cultures',
    description:
      'Temperate white springtail cultures for bioactive enclosures, cleanup crew support, and culture expansion.',
    isLive: true,
    stockStatus: 'In Stock',
    variants: [
      { id: 'springtails-starter', label: 'Starter Culture (8 oz)', price: 0 },
      { id: 'springtails-standard', label: 'Standard Culture (16 oz)', price: 0 },
      { id: 'springtails-breeder', label: 'Breeder Culture (32 oz)', price: 0 }
    ]
  },
  {
    id: 'omen-springtail-food',
    title: 'OMEN Springtail Food',
    slug: 'omen-springtail-food',
    category: 'Supplies',
    description:
      'Dry springtail culture food for maintaining active bioactive cleanup crew cultures.',
    isLive: false,
    stockStatus: 'Coming Soon',
    variants: [{ id: 'springtail-food', label: 'Standard Pack', price: 0 }]
  },
  {
    id: 'omen-leaf-litter',
    title: 'OMEN Leaf Litter',
    slug: 'omen-leaf-litter',
    category: 'Supplies',
    description:
      'Leaf litter for bioactive enclosures, microfauna support, and naturalistic habitat structure.',
    isLive: false,
    stockStatus: 'Coming Soon',
    variants: [{ id: 'leaf-litter', label: 'Standard Pack', price: 0 }]
  },
  {
    id: 'culture-charcoal',
    title: 'Culture Charcoal',
    slug: 'culture-charcoal',
    category: 'Supplies',
    description:
      'Charcoal media for springtail culture setup, maintenance, and expansion.',
    isLive: false,
    stockStatus: 'Coming Soon',
    variants: [{ id: 'culture-charcoal', label: 'Standard Pack', price: 0 }]
  },
  {
    id: 'cork-bark-packs',
    title: 'Cork Bark Packs',
    slug: 'cork-bark-packs',
    category: 'Supplies',
    description:
      'Cork bark pieces for hides, climbing structure, and bioactive enclosure design.',
    isLive: false,
    stockStatus: 'Coming Soon',
    variants: [{ id: 'cork-bark-pack', label: 'Starter Pack', price: 0 }]
  },
  {
    id: 'deli-culture-cups',
    title: 'Deli Culture Cups / Containers',
    slug: 'deli-culture-cups',
    category: 'Supplies',
    description:
      'Culture cups and containers for feeders, springtails, and small bioactive maintenance systems.',
    isLive: false,
    stockStatus: 'Coming Soon',
    variants: [{ id: 'deli-culture-cups', label: 'Container Pack', price: 0 }]
  },
  {
    id: 'springtail-starter-kit',
    title: 'Springtail Starter Kit',
    slug: 'springtail-starter-kit',
    category: 'Starter Kits',
    description:
      'A complete starter system for beginning or expanding springtail culture production.',
    isLive: true,
    stockStatus: 'Coming Soon',
    includes: [
      '16 oz springtail culture',
      'springtail food',
      'charcoal',
      'starter container',
      'care guide'
    ],
    variants: [{ id: 'springtail-starter-kit', label: 'Complete Kit', price: 0 }]
  },
  {
    id: 'mealworm-starter-kit',
    title: 'Mealworm Starter Kit',
    slug: 'mealworm-starter-kit',
    category: 'Starter Kits',
    description:
      'A beginner-friendly mealworm setup for keepers who want to start maintaining feeders at home.',
    isLive: true,
    stockStatus: 'Coming Soon',
    includes: [
      '500 mealworms',
      'starter substrate',
      'care guide',
      'moisture feeding guide'
    ],
    variants: [{ id: 'mealworm-starter-kit', label: 'Complete Kit', price: 0 }]
  }
];

export function formatPrice(cents: number) {
  if (!cents) return 'Pricing coming soon';
  return `$${(cents / 100).toFixed(2)}`;
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductPriceRange(product: Product) {
  const pricedVariants = product.variants.filter((variant) => variant.price > 0);

  if (!pricedVariants.length) return 'Pricing coming soon';

  const prices = pricedVariants.map((variant) => variant.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);

  if (min === max) return formatPrice(min);

  return `${formatPrice(min)} – ${formatPrice(max)}`;
}

export function getProductsByCategory(category: ProductCategory) {
  return products.filter((product) => product.category === category);
}