import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, NavLink } from 'react-router-dom';
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
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Freeze-drying', href: '/process' },
    { name: 'Our story', href: '/our-story' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${isScrolled ? 'shadow-sm' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-[72px] flex items-center justify-between">
        {/* Large emblem hangs below the 72px bar and overlaps the section beneath, without pushing content down */}
        <Link to="/" aria-label="Fresh N Dry Products home" className="relative self-start w-20 md:w-[104px] h-full shrink-0 hover:opacity-90 transition-opacity">
          <Logo
            className="absolute top-1 left-0"
            imgClassName="w-20 h-20 md:w-[104px] md:h-[104px] drop-shadow-lg"
          />
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) => `text-xs font-bold uppercase tracking-[0.14em] transition-colors ${isActive ? 'text-primary' : 'text-secondary hover:text-primary'}`}
            >
              {item.name}
            </NavLink>
          ))}
          <Link to="/shop" className="bg-primary text-white px-5 py-3 rounded-full text-xs font-bold uppercase tracking-[0.12em] hover:bg-secondary transition-colors">
            Shop now
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-secondary hover:text-primary transition-colors"
          >
            Home
          </Link>
          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            className="p-2 text-secondary hover:bg-slate-100 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white border-t border-slate-100"
          >
            <div className="flex flex-col px-6 py-5 gap-1">
              {menuItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) => `py-3 text-sm font-bold uppercase tracking-[0.14em] ${isActive ? 'text-primary' : 'text-secondary'}`}
                >
                  {item.name}
                </NavLink>
              ))}
              <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="mt-3 bg-primary text-white py-3 text-center rounded-full text-sm font-bold uppercase tracking-[0.12em]">Shop now</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
