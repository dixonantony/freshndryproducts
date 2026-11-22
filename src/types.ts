export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  weight: string;
  category: 'hydration' | 'fruits' | 'snacks';
  image: string;
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
