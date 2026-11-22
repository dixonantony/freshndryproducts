import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#EAF7FA] pt-24 pb-12 md:pt-28 md:pb-16">
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{ backgroundImage: 'radial-gradient(#79c6d8 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="grid md:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-12 items-center"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4">Freeze-dried fruit & snacks · Muringoor, Kerala</p>
            <h1 className="text-4xl sm:text-5xl md:text-[44px] lg:text-[53px] font-black leading-[0.98] text-secondary mb-4">Fruit, made<br /><span className="text-primary">light and crispy.</span></h1>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6 max-w-xl">
              Freeze-drying removes water from food through sublimation, a process where food is first frozen and the ice turns directly into vapour without melting. This creates a light, crispy texture while helping preserve nutrients and natural flavours. Enjoy your favourite fruits and snacks in a whole new way!
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/shop" className="inline-flex items-center gap-3 bg-primary text-white px-7 py-3 rounded-full font-bold hover:bg-secondary transition-colors">
                Shop products <ArrowRight size={18} />
              </Link>
              <Link to="/process" className="inline-flex items-center gap-2 bg-white/80 text-secondary px-7 py-3 rounded-full font-bold border border-white hover:border-primary transition-colors">
                Why freeze-dried?
              </Link>
            </div>
          </div>
          <div className="relative max-w-[720px] w-full mx-auto">
            <div className="absolute -inset-3 bg-white/70 rounded-2xl rotate-2" />
            <img
              src="/images/FreshBanner.jpeg"
              alt="Fresh N Dry Products freeze-dried fruit and snacks banner"
              className="relative w-full aspect-[1.8/1] object-cover rounded-xl shadow-xl"
            />
            <p className="absolute bottom-4 left-4 bg-white/95 px-4 py-2 rounded-md text-xs font-bold uppercase tracking-[0.12em] text-secondary">Freeze-dried fruit · snacks · hydration</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
