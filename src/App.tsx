/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProductGrid } from './components/ProductGrid';
import { Process } from './components/Process';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { ContactForm } from './components/ContactForm';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Process />
      <ProductGrid />
      <Newsletter />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white selection:bg-primary selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

