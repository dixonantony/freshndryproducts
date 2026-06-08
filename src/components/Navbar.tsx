import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Search, Facebook, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Shop All', href: '#shop-all' },
    { name: 'Energy Bars', href: '#energy-bars' },
    { name: 'Fruits', href: '#fruits' },
    { name: 'Our Story', href: '#our-story' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Logo className="scale-75 md:scale-90 origin-left" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            item.href.startsWith('#') ? (
              <a
                key={item.name}
                href={item.href}
                className="text-xs font-black uppercase tracking-[0.2em] text-secondary hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className="text-xs font-black uppercase tracking-[0.2em] text-secondary hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            )
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Social Media Icons */}
          <a
            href="https://facebook.freshndryproducts.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600 hover:text-primary"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://instagram.freshndryproducts.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600 hover:text-primary"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <button className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600">
            <Search size={20} />
          </button>
          <button className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600 relative">
            <ShoppingCart size={20} />
            <span className="absolute top-0 right-0 w-4 h-4 bg-accent text-white text-[10px] flex items-center justify-center rounded-full">
              0
            </span>
          </button>
          <button
            className="md:hidden p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="flex flex-col p-8 gap-6">
              {menuItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-2xl font-black uppercase tracking-widest text-secondary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-2xl font-black uppercase tracking-widest text-secondary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
