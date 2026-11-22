import React from 'react';
import { motion } from 'motion/react';
import { Waves, Snowflake, Package, ArrowRight, Info, Wind } from 'lucide-react';
import { PROCESS_STEPS } from '../constants';

const ICON_MAP: Record<string, any> = {
  Waves,
  Snowflake,
  Package,
  Wind,
};

export const Process = () => {
  return (
    <section className="py-8 md:py-14 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right opacity-30" />
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">Why it feels different</p>
          <h1 className="text-3xl md:text-5xl font-black text-secondary mb-4">
            How <span className="text-primary">freeze-drying</span> works
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Freeze-drying removes water from food by sublimation (freezing it first and then turning the ice directly into vapor without melting it into liquid). This creates a light, crisp texture that is different from fresh or warm-air-dried food.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = ICON_MAP[step.icon];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-28 h-28 rounded-[3rem] bg-slate-50 shadow-sm flex items-center justify-center mb-6 md:mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-slate-100 group-hover:shadow-2xl group-hover:shadow-primary/20">
                  <Icon size={48} strokeWidth={1.5} />
                </div>
                
                <div className="relative">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl font-black text-slate-100 z-0 select-none">
                    0{index + 1}
                  </span>
                  <div className="relative z-10">
                    <h3 className="text-xl font-black text-secondary mb-4 leading-tight uppercase tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-14 -right-4 text-slate-200 z-0">
                    <ArrowRight size={32} strokeWidth={1} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-secondary text-center mb-8">Freeze-dried vs. other fruit</h2>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="border-t-2 border-slate-200 pt-5">
              <h3 className="font-bold text-secondary mb-2">Fresh fruit</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Juicy and familiar, with its natural water still in the fruit.</p>
            </div>
            <div className="border-t-2 border-slate-200 pt-5">
              <h3 className="font-bold text-secondary mb-2">Warm-air-dried fruit</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Warm air removes moisture; many fruits become soft or chewy.</p>
            </div>
            <div className="border-t-2 border-primary pt-5">
              <h3 className="font-bold text-secondary mb-2">Freeze-Dried Fruit</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Fresh fruit is frozen, and the ice is gently removed under low pressure, creating a light, crispy texture while preserving its natural flavour.</p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-5 text-center">Texture and flavour depend on the fruit and how it is processed. Follow the storage directions on each pack.</p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto border-t border-slate-200 pt-7 flex flex-col md:flex-row gap-4 md:gap-8 md:items-start">
          <Info size={20} className="text-primary shrink-0" />
          <div>
            <h2 className="text-lg font-bold text-secondary mb-2">Storage and nutrition are product-specific.</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Freeze-drying removes moisture, but it does not make every product nutritionally identical or guarantee a particular shelf life. Check each pack for ingredients, allergens, nutrition facts, and storage instructions.
            </p>
            <a
              href="https://extension.sdstate.edu/freeze-drying-foods"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-4 text-sm font-bold text-primary hover:text-secondary transition-colors"
            >
              Source: SDSU Extension, “Freeze Drying Foods” (2025)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
