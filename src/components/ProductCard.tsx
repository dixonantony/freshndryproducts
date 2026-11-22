import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="group relative bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
    >
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <Link to={`/products/${product.id}`} aria-label={`View ${product.name}`} className="block h-full p-5">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-500"
          />
        </Link>
      </div>

      <div className="p-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-primary mb-2">{product.tagline}</p>
        <Link to={`/products/${product.id}`} className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">
          {product.name}
        </Link>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3">{product.description}</p>
        
        <div className="flex items-end justify-between gap-3 mt-5 pt-4 border-t border-slate-100">
          <div>
            <span className="block text-xs text-slate-500 mb-1">{product.weight}</span>
            {product.price > 0 ? (
              <span className="text-lg font-bold text-secondary">₹{product.price.toFixed(0)}</span>
            ) : (
              <span className="text-sm font-bold text-secondary">Enquire for price</span>
            )}
          </div>
          <Link to={`/products/${product.id}`} className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:text-secondary transition-colors">
            Details <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};
