import { Product, Feature, ProcessStep } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'dragon-fruit',
    name: 'Dragon Fruit',
    tagline: 'Freeze-dried Dragon Fruit',
    description: 'Freeze-dried dragon fruit with a light, crisp texture and naturally vibrant fruit flavour.',
    price: 0,
    weight: 'Pack size on request',
    category: 'fruits',
    image: '/images/dragon-fruit.png',
  },
  {
    id: 'guava',
    name: 'Guava',
    tagline: 'Freeze-dried Guava',
    description: 'Freeze-dried guava with a crisp bite and familiar tropical fruit flavour.',
    price: 0,
    weight: 'Pack size on request',
    category: 'fruits',
    image: '/images/guava.png',
  },
  {
    id: 'jackfruit',
    name: 'Jackfruit',
    tagline: 'Freeze-dried Jackfruit',
    description: 'Freeze-dried jackfruit slices with a light, crunchy texture and characteristic fruit flavour.',
    price: 0,
    weight: 'Pack size on request',
    category: 'fruits',
    image: '/images/jackfruit.png',
  },
  {
    id: 'mango',
    name: 'Mango',
    tagline: 'Freeze-dried Mango',
    description: 'Freeze-dried mango pieces with a crisp, airy texture and rich tropical flavour.',
    price: 0,
    weight: 'Pack size on request',
    category: 'fruits',
    image: '/images/mango.png',
  },
  {
    id: 'nendran-banana',
    name: 'Nendran Banana',
    tagline: 'Freeze-dried Nendran Banana',
    description: 'Freeze-dried Nendran banana slices with a light crunch and familiar banana flavour.',
    price: 0,
    weight: 'Pack size on request',
    category: 'fruits',
    image: '/images/nendran-banana.png',
  },
  {
    id: 'njali-poovan-banana',
    name: 'Njali Poovan Banana',
    tagline: 'Freeze-dried Njali Poovan Banana',
    description: 'Freeze-dried Njali Poovan banana slices with a crisp texture and delicate fruit flavour.',
    price: 0,
    weight: 'Pack size on request',
    category: 'fruits',
    image: '/images/njali-poovan-banana.png',
  },
  {
    id: 'pineapple',
    name: 'Pineapple',
    tagline: 'Freeze-dried Pineapple',
    description: 'Freeze-dried pineapple pieces with a bright, crisp crunch and tropical fruit flavour.',
    price: 0,
    weight: 'Pack size on request',
    category: 'fruits',
    image: '/images/pineapple.png',
  },
  {
    id: 'strawberry',
    name: 'Strawberry',
    tagline: 'Freeze-dried Strawberry',
    description: 'Freeze-dried strawberries with a light, crisp texture and familiar berry flavour.',
    price: 0,
    weight: 'Pack size on request',
    category: 'fruits',
    image: '/images/strawberry.png',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: 'Freeze',
    description: 'The food is frozen so that its water becomes ice.',
    icon: 'Snowflake',
  },
  {
    title: 'Create a vacuum',
    description: 'Low pressure allows ice to change directly into water vapour during primary drying.',
    icon: 'Waves',
  },
  {
    title: 'Remove remaining moisture',
    description: 'Secondary drying removes additional moisture to help make the product shelf-stable.',
    icon: 'Wind',
  },
  {
    title: 'Seal and store',
    description: 'Packaging helps protect the dried product. Follow the storage directions on each pack.',
    icon: 'Package',
  },
];

export const FEATURES: Feature[] = [
  {
    title: 'Light and crispy',
    description: 'Removing water from frozen food creates the light, crisp texture that sets freeze-dried fruit apart from juicy fresh fruit and often-chewy dried fruit.',
    icon: 'Sparkles',
  },
  {
    title: 'Familiar fruit flavour',
    description: 'Enjoy fruit in a crunchy new way. Flavour and texture vary by fruit and recipe.',
    icon: 'Leaf',
  },
  {
    title: 'Easy to take along',
    description: 'With much of the water removed, freeze-dried fruit is lightweight and easy to pack for snacks or toppings.',
    icon: 'Clock',
  },
  {
    title: 'Check each pack',
    description: 'Ingredients and nutrition differ by product. The label tells you exactly what is in your pack.',
    icon: 'Package',
  },
];
