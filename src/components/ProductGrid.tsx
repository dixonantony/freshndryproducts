import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { PRODUCTS } from '../constants';
import { motion } from 'motion/react';

export const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'energy-bars' | 'fruits' | 'snacks'>('all');

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'energy-bars', label: 'Energy Bars' },
    { id: 'fruits', label: 'Fruits' },
    { id: 'snacks', label: 'Healthy Snacks' },
  ];

  return (
    <section id="shop-all" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-xl">
            <h2 className="section-title text-secondary">Our <span className="text-primary">Collections</span></h2>
            <p className="text-slate-600">
              Explore our range of premium freeze-dried products. 
              Perfect for snacking, baking, or adding to your favorite meals.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat.id 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'bg-white text-slate-500 hover:bg-slate-100'
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

        <div className="mt-16 text-center">
          <button className="px-10 py-4 rounded-full font-bold border-2 border-slate-200 hover:border-primary hover:text-primary transition-all">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};
