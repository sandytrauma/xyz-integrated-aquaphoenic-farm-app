"use client";
import { motion } from "framer-motion";
import { Activity, Database, Repeat, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-32 pb-20 px-4 md:px-10 max-w-7xl mx-auto">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <div className="flex items-center gap-2 text-emerald-600 font-mono text-[10px] font-bold mb-2 uppercase tracking-[0.3em]">
            <Activity size={14} className="animate-pulse" /> System Node: Active
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">Bio-Circular <br />Management.</h1>
        </motion.div>
        <div className="flex gap-3">
          <Link href="/simulator" className="px-6 py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-emerald-600 transition-all shadow-xl shadow-slate-200">Open Simulator</Link>
        </div>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard label="Nitrogen Recovery" val="94.2%" trend="+0.4%" />
        <StatCard label="Biomass Yield" val="2.4t" trend="Monthly" />
        <StatCard label="Feed Independence" val="89%" trend="Target 95%" />
        <StatCard label="System Health" val="Stable" trend="Active" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-sm">
          <h3 className="text-xl font-black mb-8 flex items-center gap-2 uppercase tracking-tighter"><Repeat size={20}/> Integrated Loop Topology</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {['Cow Shed', 'Compost Bay', 'Fodder Deck', 'Goat Habitat', 'Poultry Tier', 'Damp Pool'].map((node, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-500 transition-all cursor-crosshair">
                <p className="text-[10px] font-mono text-slate-400 mb-1">NODE_0{i+1}</p>
                <p className="font-bold text-slate-800">{node}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-12">
          <h3 className="text-lg font-bold mb-8 flex items-center gap-2 font-mono uppercase tracking-widest text-emerald-400"><Database size={18}/> Registry</h3>
          <div className="space-y-6">
            <InfoItem label="Capra Hircus" desc="Optimized Boer-Beetal Goat hybrids." />
            <InfoItem label="Pennisetum" desc="High-protein Super Napier Grass." />
            <InfoItem label="Oreochromis" desc="Tilapia stock; pH buffered." />
          </div>
        </div>
      </div>
    </main>
  );
}

function StatCard({ label, val, trend }: any) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 font-mono">{label}</p>
      <div className="text-2xl font-black text-slate-900 tracking-tighter">{val}</div>
      <p className="text-[10px] text-emerald-500 font-bold font-mono">{trend}</p>
    </div>
  );
}

function InfoItem({ label, desc }: any) {
  return (
    <div className="border-b border-slate-800 pb-4">
      <p className="text-emerald-400 font-mono text-xs mb-1 uppercase tracking-tighter">{label}</p>
      <p className="text-slate-400 text-[11px] leading-relaxed">{desc}</p>
    </div>
  );
}