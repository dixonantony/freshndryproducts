/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { ContactForm } from './components/ContactForm';
import { FeaturedProducts, NotFoundPage, ProductPage, ProcessPage, ShopPage, StoryPage } from './pages/SitePages';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturedProducts />
      <section className="py-16 md:py-20 bg-[#EAF7FA]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">Discover Fresh N Dry</p>
            <h2 className="text-3xl md:text-4xl font-black text-secondary">Discover the light, crispy side of fruit.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/shop" className="bg-primary text-white px-7 py-4 rounded-full text-sm font-bold hover:bg-secondary transition-colors">Shop products</Link>
            <Link to="/process" className="border border-slate-300 text-secondary px-7 py-4 rounded-full text-sm font-bold hover:border-primary hover:text-primary transition-colors">Why freeze-dried?</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white selection:bg-primary selection:text-white">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/our-story" element={<StoryPage />} />
            <Route path="/products/:productId" element={<ProductPage />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

