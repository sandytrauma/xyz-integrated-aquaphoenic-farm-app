"use client";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Waves, Zap } from "lucide-react";
import Link from "next/link";
import { CycleFlow } from "@/components/sections/CycleFlow";

export default function HomePage() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs uppercase tracking-widest mb-8"
          >
            <Zap size={14} /> The Future of Agriculture
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-tighter mb-8 bg-gradient-to-b from-slate-900 to-slate-600 bg-clip-text text-transparent"
          >
            Waste is just <br /> <span className="text-emerald-500">hidden energy.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            We've engineered a self-sustaining ecosystem where cow waste fuels plant growth, 
            goats nourish the soil, and hens sustain our aquatic life.
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/ecosystem" className="px-8 py-4 bg-emerald-500 text-white rounded-2xl font-bold shadow-xl shadow-emerald-200 hover:bg-emerald-600 transition-all flex items-center gap-2">
              Explore the Cycle <ArrowRight size={18} />
            </Link>
            <Link href="/investment" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all">
              View Business Plan
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {[
          { icon: <Leaf className="text-emerald-500" />, title: "100% Organic", desc: "No chemical fertilizers used." },
          { icon: <Waves className="text-sky-500" />, title: "Water Efficient", desc: "Closed-loop aquaponic system." },
          { icon: <Zap className="text-amber-500" />, title: "Zero Waste", desc: "Every byproduct is an input." },
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-white"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-slate-500">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      <section className="py-20 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-emerald-400">The Biological Engine</h2>
          <CycleFlow />
        </div>
      </section>
    </main>
  );
}