import React from 'react';
import { motion } from 'motion/react';
import { Send, Sparkles } from 'lucide-react';

export const Newsletter = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative bg-secondary rounded-[4rem] p-12 md:p-24 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full -mr-48 -mt-48 blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full -ml-48 -mb-48 blur-3xl opacity-50" />

          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/10 mb-8">
                <Sparkles size={16} className="text-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                  Join the Fresh N Dry Club
                </span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-none tracking-tighter">
                Get 15% Off Your <br />
                <span className="text-primary">First Order!</span>
              </h2>
              <p className="text-white/70 text-xl mb-10 leading-relaxed font-medium">
                Join our community and be the first to know about new products, 
                healthy recipes, and exclusive offers.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-8 py-5 rounded-full bg-white/10 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:bg-white/20 transition-all font-bold"
                />
                <button className="px-10 py-5 rounded-full bg-primary text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-secondary transition-all flex items-center justify-center gap-3 group shadow-xl shadow-primary/20">
                  Subscribe
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
              <p className="text-white/30 text-[10px] mt-6 font-bold uppercase tracking-widest">
                *By subscribing, you agree to our Privacy Policy.
              </p>
            </div>

            <div className="hidden md:block relative">
              <motion.div
                animate={{ rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=800" 
                  alt="Fresh N Dry Newsletter" 
                  className="rounded-[3rem] shadow-2xl border-8 border-white/10"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent rounded-full flex flex-col items-center justify-center text-secondary font-black text-3xl rotate-12 shadow-2xl border-4 border-white">
                <span className="text-sm uppercase tracking-widest leading-none">Save</span>
                <span>15%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
