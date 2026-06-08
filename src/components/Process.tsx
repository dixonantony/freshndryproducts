import React from 'react';
import { motion } from 'motion/react';
import { Sprout, Waves, Snowflake, Package, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../constants';

const ICON_MAP: Record<string, any> = {
  Sprout,
  Waves,
  Snowflake,
  Package,
};

export const Process = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="section-title text-secondary">
            THE <span className="text-primary">FRESH N DRY</span> STYLE
          </h2>
          <p className="text-xl text-slate-500 font-medium">
            Our unique process ensures that every bite is as fresh as the day it was picked, 
            with a crunch that's out of this world.
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
                <div className="w-28 h-28 rounded-[3rem] bg-slate-50 shadow-sm flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-slate-100 group-hover:shadow-2xl group-hover:shadow-primary/20">
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
      </div>
    </section>
  );
};
