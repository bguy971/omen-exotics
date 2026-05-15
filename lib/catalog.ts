export type ProductVariant = {
  id: string;
  title: string;
  price: number;
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  status: string;
  is_live_product: boolean;
  featured: boolean;
  variants: ProductVariant[];
};

export const categories = [
  'Live Feeders',
  'Bioactive Cultures',
  'Supplies',
  'Starter Kits'
];

export const categorySlugs: Record<string, string> = {
  'Live Feeders': 'live-feeders',
  'Bioactive Cultures': 'bioactive-cultures',
  Supplies: 'supplies',
  'Starter Kits': 'starter-kits'
};

export const categoryData: Record<
  string,
  {
    title: string;
    heading: string;
    description: string;
  }
> = {
  'live-feeders': {
    title: 'Live Feeders',
    heading: 'Premium live feeders.',
    description:
      'Professionally maintained feeder inventory built for reptile keepers, breeders, and long-term feeding programs.'
  },

  'bioactive-cultures': {
    title: 'Bioactive Cultures',
    heading: 'Bioactive cultures.',
    description:
      'Healthy springtail cultures and future cleanup crew support products for serious enclosure builds.'
  },

  supplies: {
    title: 'Supplies',
    heading: 'Keeper support supplies.',
    description:
      'Add-on products, maintenance support, private-label consumables, and practical habitat essentials.'
  },

  'starter-kits': {
    title: 'Starter Kits',
    heading: 'Ready-to-start systems.',
    description:
      'Turnkey options for keepers starting new feeder, bioactive, or habitat support systems.'
  }
};

const catalog: Product[] = [
  {
    id: 'mealworms',
    slug: 'live-mealworms',
    title: 'Live Mealworms',
    category: 'Live Feeders',
    description:
      'Healthy feeder mealworms maintained under controlled conditions for reptiles, amphibians, birds, and invertebrates.',
    status: 'Available',
    is_live_product: true,
    featured: true,
    variants: [
      { id: 'mw-100-small', title: '100 Count • Small', price: 799 },
      { id: 'mw-250-medium', title: '250 Count • Medium', price: 1499 },
      { id: 'mw-500-large', title: '500 Count • Large', price: 2499 },
      { id: 'mw-1000-giant', title: '1000 Count • Giant', price: 4499 }
    ]
  },

  {
    id: 'temperate-whites',
    slug: 'temperate-white-springtails',
    title: 'Temperate White Springtails',
    category: 'Bioactive Cultures',
    description:
      'Established temperate white springtail cultures ideal for bioactive enclosures, cleanup crews, and colony expansion.',
    status: 'Available',
    is_live_product: true,
    featured: true,
    variants: [
      { id: 'sw-starter', title: 'Starter Culture', price: 1499 },
      { id: 'sw-established', title: 'Established Culture', price: 2499 }
    ]
  },

  {
    id: 'springtail-food',
    slug: 'springtail-food',
    title: 'OMEN Springtail Food',
    category: 'Supplies',
    description:
      'Private-label springtail support food formulated for easy keeper use and clean culture maintenance.',
    status: 'Available',
    is_live_product: false,
    featured: true,
    variants: [
      { id: 'sf-small', title: 'Small Pack', price: 799 },
      { id: 'sf-large', title: 'Large Pack', price: 1499 }
    ]
  },

  {
    id: 'starter-kit',
    slug: 'bioactive-starter-kit',
    title: 'Bioactive Starter Kit',
    category: 'Starter Kits',
    description:
      'A streamlined starter package built to help new keepers begin a basic bioactive support setup.',
    status: 'Coming Soon',
    is_live_product: false,
    featured: true,
    variants: [{ id: 'bk-1', title: 'Starter Kit', price: 5999 }]
  }
];

export const productOptions: Record<string, ProductVariant[]> = Object.fromEntries(
  catalog.map((product) => [product.slug, product.variants])
);

export const productIncludes: Record<string, string[]> = {
  'temperate-white-springtails': [
    'Established culture media',
    'Live springtail population',
    'Care guidance'
  ],

  'bioactive-starter-kit': [
    'Culture starter components',
    'Basic support consumables',
    'Setup guidance'
  ]
};

export async function getFeaturedProducts() {
  return catalog.filter((product) => product.featured);
}

export async function getProductsByCategory(category: string) {
  return catalog.filter((product) => product.category === category);
}

export async function getProductBySlug(slug: string) {
  return catalog.find((product) => product.slug === slug);
}

export function getProductPriceRange(product: Product) {
  if (!product.variants?.length) return 'Pricing coming soon';

  const prices = product.variants.map((variant) => variant.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);

  if (min === max) {
    return `$${(min / 100).toFixed(2)}`;
  }

  return `$${(min / 100).toFixed(2)}–$${(max / 100).toFixed(2)}`;
}