"use client";
import { motion } from "framer-motion";
import { Beaker, Zap, Droplets, FlaskConical } from "lucide-react";

export default function SciencePage() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-4 font-mono tracking-tighter">TECHNICAL <span className="text-emerald-500">INFORMATICS</span></h1>
        <p className="text-slate-400 uppercase text-[10px] font-bold tracking-[0.4em]">Biochemical Conversion Metrics</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <ScienceCard icon={<Beaker />} title="N-Cycle" val="Ammonia → Nitrate" desc="Bacteria in the damp pool filter convert hen waste into liquid fertilizer." />
        <ScienceCard icon={<Zap />} title="Efficiency" val="1:4.2 Ratio" desc="1kg of cow manure input yields 4.2kg of fresh green fodder." />
        <ScienceCard icon={<Droplets />} title="Hydration" val="pH 7.2 Buffer" desc="Fish pond alkalinity is naturally stabilized by the floating root systems." />
      </div>

      <div className="bg-white border-2 border-slate-900 rounded-[3rem] p-8 md:p-16 shadow-[12px_12px_0px_rgba(16,185,129,0.2)]">
        <h2 className="text-3xl font-black mb-8 flex items-center gap-4">
          <FlaskConical className="text-emerald-500" /> Subject Specifications
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-sm">
            <thead className="border-b-2 border-slate-900">
              <tr>
                <th className="pb-4 uppercase tracking-tighter">Component</th>
                <th className="pb-4 uppercase tracking-tighter">Informatics</th>
                <th className="pb-4 uppercase tracking-tighter">Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <Row component="Cowdung" info="High Nitrogen (N)" role="Primary Fuel" />
              <Row component="Goat Waste" info="Solid P-K Balance" role="Secondary Compost" />
              <Row component="Hen Droppings" info="Protein/Phosphorus" role="Direct Fish Feed" />
              <Row component="Napier Grass" info="24% Dry Matter" role="Nutrient Sink" />
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

function ScienceCard({ icon, title, val, desc }: any) {
  return (
    <div className="p-8 bg-slate-900 text-white rounded-3xl relative overflow-hidden group">
      <div className="relative z-10">
        <div className="text-emerald-400 mb-4">{icon}</div>
        <div className="text-xs font-mono text-slate-500 mb-1 uppercase">{title}</div>
        <div className="text-2xl font-black mb-4 tracking-tighter">{val}</div>
        <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
      </div>
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all" />
    </div>
  );
}

function Row({ component, info, role }: any) {
  return (
    <tr className="hover:bg-slate-50 transition-colors">
      <td className="py-6 font-black text-slate-900">{component}</td>
      <td className="py-6 text-emerald-600">{info}</td>
      <td className="py-6 text-slate-500">{role}</td>
    </tr>
  );
}