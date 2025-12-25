import { motion } from 'framer-motion';
import { ArrowRight, Beef, Sprout, Cat, Bird, Fish } from 'lucide-react';
import React from 'react';

const steps = [
  { icon: <Beef />, label: "Cows", sub: "Waste Source", color: "from-amber-500 to-orange-600" },
  { icon: <Sprout />, label: "Plants", sub: "Nutrient Absorption", color: "from-emerald-400 to-teal-600" },
  { icon: <Cat />, label: "Goats", sub: "Primary Grazers", color: "from-orange-400 to-red-500" },
  { icon: <Bird />, label: "Hens", sub: "Top-Deck Feeders", color: "from-yellow-400 to-amber-500" },
  { icon: <Fish />, label: "Fish", sub: "Aquatic Harvesters", color: "from-sky-400 to-blue-600" },
];

export const CycleFlow = () => (
  <div className="flex flex-wrap justify-center items-center gap-4 py-12">
    {steps.map((step, i) => (
      <React.Fragment key={i}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="flex flex-col items-center group"
        >
          <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
            {step.icon}
          </div>
          <p className="mt-4 font-bold text-slate-800">{step.label}</p>
          <p className="text-[10px] uppercase text-slate-400 font-bold">{step.sub}</p>
        </motion.div>
        {i < steps.length - 1 && (
          <ArrowRight className="text-slate-200 hidden lg:block" size={20} />
        )}
      </React.Fragment>
    ))}
  </div>
);