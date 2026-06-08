export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice?: number;
  weight: string;
  rating: number;
  reviewsCount: number;
  category: 'energy-bars' | 'fruits' | 'vegetables' | 'snacks';
  image: string;
  color: string;
  status?: 'sold-out' | 'bestseller' | 'sale';
  discount?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}
