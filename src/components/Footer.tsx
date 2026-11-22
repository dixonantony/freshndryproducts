import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div className="max-w-xs">
            <Link to="/" className="flex justify-center mb-5 hover:opacity-90 transition-opacity" aria-label="Fresh N Dry Products home">
              <Logo imgClassName="w-28 h-28 md:w-32 md:h-32 drop-shadow-lg" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Freeze-dried fruit, snacks, and hydration products from Muringoor, Chalakudy, Kerala, India.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.12em] mb-5">Explore</h2>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><Link to="/shop" className="hover:text-white transition-colors">Shop all</Link></li>
              <li><Link to="/process" className="hover:text-white transition-colors">How it works</Link></li>
              <li><Link to="/our-story" className="hover:text-white transition-colors">Our story</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Bulk and product enquiries</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.12em] mb-5">Product information</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Ingredients, nutritional information, allergen details, and storage instructions may vary by product. Please check the product label for complete information.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.12em] mb-5">Contact</h2>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>Fresh N Dry Products<br />Muringoor, Chalakudy, Kerala, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+919037644041" className="hover:text-white transition-colors">+91 9037644041</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:info@freshndryproducts.com" className="hover:text-white transition-colors">info@freshndryproducts.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-7 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} Fresh N Dry Products.</p>
          <Link to="/contact" className="hover:text-white transition-colors">Questions? Contact our team</Link>
        </div>
      </div>
    </footer>
  );
};
