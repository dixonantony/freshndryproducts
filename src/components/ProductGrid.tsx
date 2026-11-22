import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { PRODUCTS } from '../constants';
import { motion } from 'motion/react';
import { Product } from '../types';

export const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState<Product['category'] | 'all'>('all');

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'fruits', label: 'Fruit' },
    { id: 'snacks', label: 'Snacks' },
    { id: 'hydration', label: 'Hydration' },
  ];

  return (
    <section id="products" className="pt-6 md:pt-8 pb-10 md:pb-14 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-5 mb-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-2">Shop freeze-dried products</h2>
            <p className="text-slate-600 leading-relaxed">Discover fruit and snacks with a light, crispy texture. Select a pack to see its details and ask about ordering.</p>
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter products by category">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                aria-pressed={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id as Product['category'] | 'all')}
                className={`px-4 py-2 border rounded-full text-sm font-bold transition-colors ${
                  activeCategory === cat.id 
                    ? 'bg-secondary border-secondary text-white' 
                    : 'bg-white border-slate-200 text-slate-600 hover:border-primary hover:text-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="product-grid-container"
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
