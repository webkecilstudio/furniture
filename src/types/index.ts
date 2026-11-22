export type StockStatus = 'ready' | 'preorder' | 'custom';

export interface ProductDimensions {
  length: number;
  width: number;
  height: number;
  unit: string;
}

export interface ColorOption {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  subcategory: string;
  collection: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  stockStatus: StockStatus;
  stockCount?: number;
  dimensions: ProductDimensions;
  weightKg: number;
  materials: string[];
  finishOptions: string[];
  colors: ColorOption[];
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  has3D: boolean;
  hasAR: boolean;
  isFeatured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  itemCount: number;
}

export interface Collection {
  id: string;
  name: string;
  concept: string;
  description: string;
  image: string;
  tagline: string;
  characteristics: string[];
}

export interface MaterialItem {
  id: string;
  name: string;
  category: 'Kayu Alami' | 'Batu & Marmer' | 'Tekstil Premium' | 'Logam & Struktur' | 'Teknik Finishing';
  grade: string;
  origin: string;
  description: string;
  image: string;
  advantages: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Residensial' | 'Komersial' | 'Perhotelan' | 'Kantor';
  location: string;
  year: string;
  image: string;
  description: string;
  client: string;
  scope: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  project: string;
  city: string;
  rating: number;
  quote: string;
  image: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  category: 'Custom & Desain' | 'Material & Kualitas' | 'Harga & Pembayaran' | 'Pengiriman & Instalasi' | 'Garansi & Perawatan';
  question: string;
  answer: string;
}

export interface SpecialOfferItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  discount: string;
  promoCode: string;
  validUntil: string;
  image: string;
  itemsIncluded: string[];
  normalPrice: number;
  promoPrice: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedFinish?: string;
  customNote?: string;
}

export interface FilterState {
  search: string;
  category: string;
  collection: string;
  material: string;
  stockStatus: string;
  minPrice: number;
  maxPrice: number;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'name-asc' | 'rating-desc';
}

export interface CustomFurnitureForm {
  name: string;
  whatsapp: string;
  email: string;
  furnitureType: string;
  category: string;
  material: string;
  finishing: string;
  length: number;
  width: number;
  height: number;
  budgetRange: string;
  addressCity: string;
  notes: string;
  needInstallation: boolean;
}

export interface PriceEstimateInput {
  furnitureType: string;
  woodType: string;
  finishType: string;
  lengthCm: number;
  widthCm: number;
  heightCm: number;
  hasCushion: boolean;
  hasCarving: boolean;
  deliveryCity: string;
}
