import React from 'react';
import { Leaf, Clock, Sparkles, Package } from 'lucide-react';
import { motion } from 'motion/react';
import { FEATURES } from '../constants';

const ICON_MAP: Record<string, any> = {
  Leaf,
  Clock,
  Sparkles,
  Package,
};

export const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4">Why choose freeze-dried?</p>
          <h2 className="text-3xl md:text-5xl font-black text-secondary mb-5">A lighter, crispier way to enjoy fruit.</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Compared with juicy fresh fruit or often-chewy warm-air-dried fruit, freeze-dried fruit is light, crisp, and easy to take along.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = ICON_MAP[feature.icon];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-left group border-t-2 border-primary/30 pt-6"
              >
                <div className="w-12 h-12 bg-[#EAF7FA] rounded-lg flex items-center justify-center mb-5 text-primary">
                  <Icon size={24} strokeWidth={1.7} />
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
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
