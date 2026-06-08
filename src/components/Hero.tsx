import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 md:pt-40 overflow-hidden bg-[#E0F2FE]">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 rounded-l-full -mr-20 blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent/10 rounded-r-full -ml-20 blur-3xl opacity-30" />
      
      {/* Fruit Pattern Overlay (Simulated) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0ea5e9 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Full Width Banner Image */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full mb-12 relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-4">
            <img
              src="/images/FreshBanner.png"
              alt="Fresh N Dry Products"
              className="w-full h-auto object-contain rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
          </div>
          
          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -left-6 w-20 h-20 bg-white p-2 rounded-2xl shadow-xl z-20 hidden md:block"
          >
            <img src="/images/bluberry.png" className="w-full h-full object-cover rounded-xl" alt="Blueberry" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -right-6 w-24 h-24 bg-white p-2 rounded-2xl shadow-xl z-20 hidden md:block"
          >
            <img src="/images/mango.png" className="w-full h-full object-cover rounded-xl" alt="Mango" />
          </motion.div>
        </motion.div>

        {/* Content Below Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/50 mb-6">
            <Sparkles size={16} className="text-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
              100% Natural Goodness
            </span>
          </div>
          
          <h1 className="text-5xl md:text-[80px] font-black leading-[0.9] mb-6 text-secondary tracking-tighter uppercase">
            Nature's Goodness <br />
            <span className="text-primary">Freeze-Dried Fresh!</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium italic">
            Fresh, Flavorful and 100% Natural! Experience the crunch of real fruit
            preserved at the peak of freshness.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-primary text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20 hover:bg-secondary hover:shadow-secondary/20 transition-all duration-300 flex items-center gap-3 group">
              Shop Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
