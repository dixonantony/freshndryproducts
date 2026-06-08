import React from 'react';
import { Leaf, Zap, Clock, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { FEATURES } from '../constants';

const ICON_MAP: Record<string, any> = {
  Leaf,
  Zap,
  Clock,
  Sparkles,
};

export const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="section-title text-secondary">Fuel Your <span className="text-primary">Lifestyle.</span></h2>
          <p className="text-xl text-slate-500 font-medium">
            We use advanced freeze-drying technology to bring you the best of nature, 
            without any compromises on taste or nutrition.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-12">
          {FEATURES.map((feature, index) => {
            const Icon = ICON_MAP[feature.icon];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-24 h-24 bg-slate-50 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 text-primary shadow-sm group-hover:shadow-xl group-hover:shadow-primary/20">
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-black text-secondary mb-4 uppercase tracking-tight">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
