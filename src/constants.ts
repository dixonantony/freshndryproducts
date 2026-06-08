import { Product, Feature, ProcessStep } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Green Apple',
    tagline: 'Fresh N Dry Hydration Booster',
    description: 'Vitamin Enriched, 6 Pack Sachet. 100% Natural Freeze Dried Product. No Added Sugar, No Preservatives.',
    price: 258.00,
    originalPrice: 774.00,
    weight: '96g (6 x 16g)',
    rating: 4.7,
    reviewsCount: 3,
    category: 'energy-bars',
    image: '/images/greenApple.png',
    color: '#76A03F',
    status: 'sale',
    discount: 'Save 67%',
  },
  {
    id: '2',
    name: 'Blueberry Bites',
    tagline: 'Fresh Fruit Bites',
    description: '100% Natural Freeze Dried Fruits. No Added Sugar, No MSG GMO, No Preservatives. 100% Vegan & Gluten Free.',
    price: 399.00,
    weight: '25g',
    rating: 5.0,
    reviewsCount: 3,
    category: 'fruits',
    image: '/images/bluberry.png',
    color: '#2D3E50',
    status: 'sold-out',
  },
  {
    id: '3',
    name: 'Gourmet Cheese',
    tagline: '100% Natural Freeze Dried Corn',
    description: '50% EXTRA CORN FREE!* Not Fried, Low GMO, Gourmet Flavor, 100% Natural & Gluten Free. Goodness of Fresh Corn Kernels.',
    price: 276.00,
    weight: '20g',
    rating: 4.7,
    reviewsCount: 6,
    category: 'snacks',
    image: '/images/corn.png',
    color: '#E6B325',
    status: 'bestseller',
  },
  {
    id: '4',
    name: 'Jackfruit Slices',
    tagline: 'Fresh Fruit Slices',
    description: '100% Natural Freeze Dried Product. No Added Sugar, No Preservatives. 100% Vegan & Gluten Free.',
    price: 233.00,
    originalPrice: 699.00,
    weight: '16g',
    rating: 4.7,
    reviewsCount: 7,
    category: 'fruits',
    image: '/images/jackFruit.png',
    color: '#F1C40F',
    status: 'sale',
    discount: 'Save 67%',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: 'Fresh and Selected Farm Corn',
    description: 'We source only the finest, sun-ripened corn directly from our partner farms.',
    icon: 'Sprout',
  },
  {
    title: 'Washed and Flavored',
    description: 'Every piece is thoroughly cleaned and lightly seasoned with natural gourmet flavors.',
    icon: 'Waves',
  },
  {
    title: 'Freeze Dried (only H2O is removed)',
    description: 'Our advanced technology removes moisture while locking in 98% of nutrients and flavor.',
    icon: 'Snowflake',
  },
  {
    title: 'Perfectly seasoned and packed crispy',
    description: 'The final product is packed in premium, airtight pouches to ensure maximum crispiness.',
    icon: 'Package',
  },
];

export const FEATURES: Feature[] = [
  {
    title: 'High Fiber',
    description: 'Packed with dietary fiber to keep you full and energized.',
    icon: 'Zap',
  },
  {
    title: 'Clean Ingredients',
    description: 'No hidden nasties. Just pure, wholesome ingredients.',
    icon: 'Leaf',
  },
  {
    title: 'Has Nuts & Seeds',
    description: 'Rich in healthy fats and proteins from premium nuts and seeds.',
    icon: 'Sparkles',
  },
  {
    title: 'Energy in Every Bite',
    description: 'The perfect fuel for your busy lifestyle.',
    icon: 'Clock',
  },
];
