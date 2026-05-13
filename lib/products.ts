export type Product = {
  id: string;
  title: string;
  slug: string;
  category: string;
  price: number;
  description: string;
  isLive: boolean;
  stockStatus: 'In Stock' | 'Low Stock' | 'Sold Out' | 'Weather Hold' | 'Coming Soon';
  stripePriceId?: string;
};

export const products: Product[] = [
  { id:'mw-100', title:'100 Count Mealworms', slug:'100-count-mealworms', category:'Live Feeders', price:499, description:'Clean live mealworms packed for reptile, bird, and feeder use.', isLive:true, stockStatus:'In Stock' },
  { id:'mw-250', title:'250 Count Mealworms', slug:'250-count-mealworms', category:'Live Feeders', price:899, description:'A practical feeder count for regular keepers.', isLive:true, stockStatus:'In Stock' },
  { id:'mw-500', title:'500 Count Mealworms', slug:'500-count-mealworms', category:'Live Feeders', price:1499, description:'Higher-volume feeder supply for serious keepers.', isLive:true, stockStatus:'Low Stock' },
  { id:'mw-1000', title:'1000 Count Mealworms', slug:'1000-count-mealworms', category:'Live Feeders', price:2499, description:'Bulk mealworm supply for established feeding routines.', isLive:true, stockStatus:'In Stock' },
  { id:'st-culture', title:'Temperate White Springtail Culture', slug:'temperate-white-springtail-culture', category:'Springtails', price:1499, description:'Starter springtail culture for bioactive enclosures and culture expansion.', isLive:true, stockStatus:'In Stock' },
  { id:'st-bulk', title:'Bulk Springtail Culture', slug:'bulk-springtail-culture', category:'Springtails', price:2499, description:'Larger culture volume for bioactive keepers and breeders.', isLive:true, stockStatus:'Coming Soon' },
  { id:'st-food', title:'Springtail Culture Food', slug:'springtail-culture-food', category:'Supplies', price:799, description:'Dry culture food for maintaining active springtail colonies.', isLive:false, stockStatus:'In Stock' },
  { id:'kit-springtail', title:'Springtail Starter Kit', slug:'springtail-starter-kit', category:'Starter Kits', price:2499, description:'Culture + food + starter care instructions.', isLive:true, stockStatus:'In Stock' }
];

export function formatPrice(cents:number){ return `$${(cents/100).toFixed(2)}` }
export function getProduct(slug:string){ return products.find(p=>p.slug===slug) }
