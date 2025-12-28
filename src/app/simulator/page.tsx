"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Info, HelpCircle } from "lucide-react";

export default function Simulator() {
  const [dung, setDung] = useState(250);

  const stats = [
    { label: "Biomass Growth", val: (dung * 0.42).toFixed(1) + " kg", sub: "Napier/Alfalfa Mix" },
    { label: "Goat Support", val: Math.floor(dung / 12) + " Units", sub: "Feed Carrying Capacity" },
    { label: "Hen Capacity", val: Math.floor(dung / 0.8) + " Units", sub: "Upper Deck Space" },
    { label: "Fish Yield", val: (dung * 0.18).toFixed(1) + " kg", sub: "Est. Monthly Harvest" },
  ];

  return (
    <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-4 italic">MASS-BALANCE <span className="text-emerald-500">ENGINE</span></h1>
        <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">Predicting ecological output based on input volume</p>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-4">
          <div className="p-10 bg-white rounded-[2.5rem] border-2 border-slate-900 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 block">Input: Cowdung (Kg/Day)</label>
            <input 
              type="number" value={dung} onChange={(e) => setDung(Number(e.target.value))}
              className="w-full text-5xl font-black font-mono focus:outline-none mb-6"
            />
            <input 
              type="range" min="10" max="2000" value={dung} onChange={(e) => setDung(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-200 appearance-none rounded-full accent-slate-900 cursor-pointer"
            />
          </div>
          <div className="p-6 bg-blue-50 rounded-2xl flex gap-3 items-start border border-blue-100">
            <Info className="text-blue-500 shrink-0" size={18} />
            <p className="text-[11px] text-blue-700 leading-relaxed font-medium italic">Logic: Every 12kg of manure fuels the fodder required for 1 goat over a 24-hour cycle.</p>
          </div>
        </div>

        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div key={i} layout className="p-8 bg-slate-900 text-white rounded-[2rem] flex flex-col justify-between border-b-8 border-emerald-500">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{s.label}</span>
              <div className="text-4xl font-black my-2">{s.val}</div>
              <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-tighter">{s.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}