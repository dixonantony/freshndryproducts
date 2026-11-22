import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Check, Mail } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { ProductGrid } from '../components/ProductGrid';
import { ProductCard } from '../components/ProductCard';
import { Process } from '../components/Process';

export const FeaturedProducts = () => (
  <section className="py-16 md:py-20">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-9">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">From our range</p>
          <h2 className="text-3xl md:text-4xl font-black text-secondary">Meet the products.</h2>
        </div>
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors">
          Browse all products <ArrowRight size={17} />
        </Link>
      </div>
      <div className="product-grid-container">
        {PRODUCTS.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  </section>
);

export const ShopPage = () => (
  <div className="pt-20">
    <header className="bg-[#EAF7FA] py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-2">Light, crispy freeze-dried food</p>
        <h1 className="text-3xl md:text-5xl font-black text-secondary mb-2">Explore the range.</h1>
        <p className="max-w-2xl text-base md:text-lg text-slate-600 leading-relaxed">
          Freeze-drying freezes food, then removes ice as vapour to create a light, crispy texture. Check each pack for ingredients and allergens.
        </p>
      </div>
    </header>
    <ProductGrid />
  </div>
);

export const ProcessPage = () => (
  <div className="pt-12">
    <Process />
  </div>
);

export const StoryPage = () => (
  <div className="pt-20">
    <section className="bg-[#EAF7FA] py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4">Our story</p>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black text-secondary leading-[1.05] mb-5">
          Nature’s Freshness.<br />
          <span className="text-primary">A Whole New Crunch.</span>
        </h1>

        <div className="space-y-3 text-base md:text-lg text-slate-600 leading-relaxed text-balance">
          <p>
            At <strong className="text-secondary">Fresh N Dry Products</strong>, we believe nature’s goodness deserves to be enjoyed in exciting new ways.
          </p>
          <p>
            Based in <strong className="text-secondary">Muringoor, Chalakudy, Kerala, India</strong>, we transform fresh fruits into delicious, light, and crispy snacks using advanced freeze-drying technology.
          </p>
          <p>
            Our process gently freezes fruits and removes moisture by turning ice directly into vapour, helping preserve their natural flavours, nutrients, and vibrant colours.
          </p>
        </div>

        <div className="mt-7 bg-white rounded-2xl px-6 py-5 md:px-10 shadow-sm border border-white">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">The result?</p>
          <p className="text-xl md:text-2xl font-black text-secondary leading-snug text-balance">
            A satisfying crunch, authentic fruity goodness, and a delightful snacking experience in every bite.
          </p>
        </div>

        <p className="mt-6 text-lg md:text-xl font-bold text-secondary">
          Fresh N Dry Products — <span className="text-primary">Freshness in Every Crunch.</span>
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to="/shop" className="inline-flex items-center gap-3 bg-primary text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-secondary transition-colors">
            Explore products <ArrowRight size={18} />
          </Link>
          <Link to="/process" className="inline-flex items-center gap-2 bg-white text-secondary px-7 py-3 rounded-full text-sm font-bold border border-white hover:border-primary transition-colors">
            How freeze-drying works
          </Link>
        </div>
      </div>
    </section>
    <section className="py-14 md:py-16">
      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
        <p className="text-slate-600 text-lg leading-relaxed">
          Have a question about a product, retail availability, or a bulk order? Our team is happy to help.
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 mt-5 text-primary font-bold hover:text-secondary transition-colors">
          Talk to our team <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  </div>
);

export const ProductPage = () => {
  const { productId } = useParams();
  const product = PRODUCTS.find((item) => item.id === productId);

  if (!product) {
    return <NotFoundPage />;
  }

  const inquirySubject = encodeURIComponent(`Product enquiry: ${product.name}`);
  const inquiryBody = encodeURIComponent(`Hello Fresh N Dry Products,\n\nI would like to know more about ${product.name}. Please share current availability and ordering details.\n\nThank you.`);

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm font-bold text-slate-500">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <span aria-hidden="true">/</span>
          <span className="text-secondary" aria-current="page">{product.name}</span>
        </nav>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start mt-8">
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
            <img src={product.image} alt={product.name} className="w-full aspect-square object-contain" />
          </div>
          <div className="py-2">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4">{product.tagline}</p>
            <h1 className="text-4xl md:text-5xl font-black text-secondary mb-5">{product.name}</h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">{product.description}</p>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-3xl font-bold text-secondary">₹{product.price.toFixed(0)}</span>
              <span className="text-sm text-slate-500">Pack size: {product.weight}</span>
            </div>
            <div className="flex flex-wrap gap-3 mb-8">
              <a href={`mailto:info@freshndryproducts.com?subject=${inquirySubject}&body=${inquiryBody}`} className="inline-flex items-center gap-2 bg-primary text-white px-7 py-4 rounded-full font-bold hover:bg-secondary transition-colors">
                <Mail size={18} /> Enquire to order
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 border border-slate-300 text-secondary px-7 py-4 rounded-full font-bold hover:border-primary hover:text-primary transition-colors">
                Ask a question
              </Link>
            </div>
            <div className="border-t border-slate-200 pt-6 space-y-3 text-sm text-slate-600">
              <p className="flex gap-2"><Check size={17} className="text-primary shrink-0" /> Freeze-dried for a light, crisp texture.</p>
              <p className="flex gap-2"><Check size={17} className="text-primary shrink-0" /> Review the pack for ingredients, allergens, and nutrition facts.</p>
              <p className="flex gap-2"><Check size={17} className="text-primary shrink-0" /> Follow the storage instructions printed on the pack.</p>
              <p className="text-xs text-slate-500 pt-2">Availability and final pricing are confirmed by our team when you enquire.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const NotFoundPage = () => (
  <section className="min-h-[65vh] flex items-center justify-center px-4 pt-28 text-center">
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4">Page not found</p>
      <h1 className="text-4xl font-black text-secondary mb-4">Let’s get you back to the good stuff.</h1>
      <Link to="/" className="inline-flex items-center gap-2 mt-4 bg-primary text-white px-7 py-4 rounded-full font-bold hover:bg-secondary transition-colors">
        Go to Home <ArrowRight size={18} />
      </Link>
    </div>
  </section>
);
