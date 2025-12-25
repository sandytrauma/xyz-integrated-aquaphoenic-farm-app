"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Beef, Fish, Bird, Sprout, Info } from 'lucide-react';

export const FarmSimulator = () => {
  const [cowCount, setCowCount] = useState(5);
  
  // Logic Ratios (Estimated for simulation)
  const metrics = {
    manure: cowCount * 12, // kg per day
    grass: cowCount * 0.5, // acres supported
    goats: Math.floor(cowCount * 4.5), // Goats supported by grass
    hens: Math.floor(cowCount * 15), // Hens supported on the deck
    fish: Math.floor(cowCount * 120), // Fish harvest capacity (grams/day)
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-8 bg-white/40 backdrop-blur-xl rounded-[3rem] border border-white shadow-2xl">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Input Side */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-2">Cycle Simulator</h2>
            <p className="text-slate-500">Adjust the cow population to see how the nutrient energy cascades through the system.</p>
          </div>

          <div className="p-8 bg-emerald-50 rounded-3xl border border-emerald-100">
            <div className="flex justify-between items-end mb-6">
              <label className="font-bold text-emerald-900 flex items-center gap-2">
                <Beef className="text-emerald-600" size={20} /> Input: Cow Population
              </label>
              <span className="text-4xl font-black text-emerald-600">{cowCount}</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="50" 
              value={cowCount} 
              onChange={(e) => setCowCount(parseInt(e.target.value))}
              className="w-full h-3 bg-emerald-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
            <div className="flex justify-between mt-2 text-xs font-bold text-emerald-400 uppercase tracking-widest">
              <span>Small Scale</span>
              <span>Industrial Scale</span>
            </div>
          </div>
          
          <div className="flex gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100 items-start">
            <Info className="text-blue-500 shrink-0" size={20} />
            <p className="text-xs text-blue-700 leading-relaxed">
              Calculations are based on average organic metabolic rates. Manure fuels grass growth, which dictates the carrying capacity of the goat and hen sub-ecosystems.
            </p>
          </div>
        </div>

        {/* Output Side */}
        <div className="grid grid-cols-2 gap-4">
          <ResultTile 
            icon={<Sprout />} 
            value={`${metrics.grass} ac`} 
            label="Lush Fodder" 
            color="bg-emerald-500" 
            delay={0.1}
          />
          <ResultTile 
            icon={<Beef />} 
            value={metrics.goats} 
            label="Goats Raised" 
            color="bg-orange-500" 
            delay={0.2}
          />
          <ResultTile 
            icon={<Bird />} 
            value={metrics.hens} 
            label="Deck Hens" 
            color="bg-yellow-500" 
            delay={0.3}
          />
          <ResultTile 
            icon={<Fish />} 
            value={`${(metrics.fish / 1000).toFixed(1)}kg`} 
            label="Daily Fish Yield" 
            color="bg-sky-500" 
            delay={0.4}
          />
        </div>
      </div>
    </div>
  );
};

const ResultTile = ({ icon, value, label, color, delay }: any) => (
  <motion.div 
    key={value} // Forces animation re-trigger on value change
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ type: "spring", stiffness: 300, damping: 20, delay }}
    className="p-6 bg-white rounded-[2rem] shadow-lg shadow-slate-200/50 border border-slate-50 flex flex-col items-center text-center group hover:border-slate-200 transition-all"
  >
    <div className={`w-12 h-12 rounded-2xl ${color} text-white flex items-center justify-center mb-4 shadow-lg group-hover:rotate-12 transition-transform`}>
      {icon}
    </div>
    <div className="text-2xl font-black text-slate-900">{value}</div>
    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-tighter">{label}</div>
  </motion.div>
);