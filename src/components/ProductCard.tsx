import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.status && (
            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm ${
              product.status === 'sale' ? 'bg-red-500 text-white' :
              product.status === 'sold-out' ? 'bg-slate-800 text-white' :
              product.status === 'bestseller' ? 'bg-accent text-white' :
              'bg-white/90 text-slate-600'
            }`}>
              {product.status.replace('-', ' ')}
            </span>
          )}
          {product.discount && (
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
              {product.discount}
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-primary hover:text-white transition-colors">
            <Heart size={18} />
          </button>
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-primary hover:text-white transition-colors">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={12} 
                className={`${i < Math.floor(product.rating || 0) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-200'}`} 
              />
            ))}
            <span className="text-[10px] text-slate-400 ml-1">({product.reviewsCount || 0})</span>
          </div>
          {product.weight && (
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              {product.weight}
            </span>
          )}
        </div>
        
        <div className="mb-1">
          <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1">
            {product.tagline}
          </span>
          <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </div>
        
        <p className="text-sm text-slate-500 mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-secondary">
              ₹{product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-slate-400 line-through">
                ₹{product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button 
            disabled={product.status === 'sold-out'}
            className={`text-sm font-bold transition-colors underline underline-offset-4 ${
              product.status === 'sold-out' ? 'text-slate-300 cursor-not-allowed' : 'text-primary hover:text-secondary'
            }`}
          >
            {product.status === 'sold-out' ? 'Sold Out' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};
