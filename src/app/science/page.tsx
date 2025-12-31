"use client";
import { motion } from "framer-motion";
import { Beaker, Zap, Droplets, FlaskConical, Microscope, Thermometer, TestTube } from "lucide-react";

export default function SciencePage() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 border-b-4 border-slate-900 pb-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-emerald-500 font-mono text-sm font-black mb-4 uppercase tracking-widest">
            <Microscope size={18} /> Laboratory Analysis v4.0
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-4 font-mono tracking-tighter leading-none">
            BIOCHEMICAL <br />
            <span className="text-emerald-500 italic">INFORMATICS</span>
          </h1>
          <p className="text-slate-500 font-medium leading-relaxed">
            Quantitative data on nutrient conversion, mass-balance ratios, and 
            micro-biological interactions within the EcoCycle closed-loop system.
          </p>
        </div>
        <div className="bg-slate-900 text-white p-6 rounded-2xl font-mono text-xs space-y-2 w-full md:w-auto">
          <div className="flex justify-between gap-8"><span>AMMONIA_CAP:</span><span className="text-emerald-400">0.02ppm</span></div>
          <div className="flex justify-between gap-8"><span>NITROGEN_RECOVERY:</span><span className="text-emerald-400">94.2%</span></div>
          <div className="flex justify-between gap-8"><span>PH_STABILITY:</span><span className="text-emerald-400">OPTIMAL</span></div>
        </div>
      </div>

      

      {/* Science Core Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <ScienceCard 
          icon={<Beaker />} 
          title="The Nitrogen Logic" 
          val="$NH_3 \rightarrow NO_3^-$" 
          formula="Ammonification & Nitrification"
          desc="Hen waste (Uric Acid) is broken down by Nitrosomonas bacteria into Nitrites, then by Nitrobacter into Nitrates for plant uptake." 
        />
        <ScienceCard 
          icon={<Zap />} 
          title="Thermodynamics" 
          val="1:4.2 Mass Gain" 
          formula="Input-to-Biomass Ratio"
          desc="For every 1 unit of processed cow manure (Dry Matter), our Napier beds produce 4.2 units of fresh fodder through solar energy conversion." 
        />
        <ScienceCard 
          icon={<Droplets />} 
          title="Aquatic Equilibrium" 
          val="pH 6.8 - 7.4" 
          formula="Acid-Base Buffering"
          desc="Roots of floating plants (Macrophytes) absorb excess organic acids, preventing water acidification and protecting fish respiratory health." 
        />
      </div>

      {/* Detailed Technical Table */}
      <div className="bg-white border-4 border-slate-900 rounded-[3rem] overflow-hidden shadow-[16px_16px_0px_#10b981]">
        <div className="bg-slate-900 p-8 text-white flex justify-between items-center">
          <h2 className="text-2xl font-black flex items-center gap-4 font-mono">
            <FlaskConical className="text-emerald-500" /> COMPONENT_SPECIFICATIONS
          </h2>
          <span className="text-[10px] font-mono text-emerald-500 animate-pulse">SENSORS_ACTIVE</span>
        </div>

        

        <div className="overflow-x-auto p-8">
          <table className="w-full text-left font-mono text-sm border-collapse">
            <thead>
              <tr className="text-slate-400 border-b border-slate-100">
                <th className="pb-4 font-black uppercase tracking-tighter">Biological Node</th>
                <th className="pb-4 font-black uppercase tracking-tighter">Nutrient Profile</th>
                <th className="pb-4 font-black uppercase tracking-tighter">Enzymatic Role</th>
                <th className="pb-4 font-black uppercase tracking-tighter text-right">Yield Impact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <Row component="Cattle Solids" info="High Cellulose / Carbon" role="Substrate Foundation" impact="+320% Soil Health" />
              <Row component="Capra Output" info="Phosphorus-Heavy (P2O5)" role="Cellular Energy (ATP)" impact="Fast Root Growth" />
              <Row component="Avian Droppings" info="Uric Nitrogen (Quick Release)" role="Primary Fertilizer" impact="Rapid Fodder Surge" />
              <Row component="Pond Biofilm" info="Proteobacteria / Algae" role="Waste Processing" impact="Water Purification" />
            </tbody>
          </table>
        </div>
      </div>

      {/* Student Resource Section */}
      <div className="mt-20 grid md:grid-cols-2 gap-12">
        <div className="p-10 bg-emerald-50 rounded-[3rem] border-2 border-emerald-200">
          <div className="flex items-center gap-4 mb-6">
            <TestTube className="text-emerald-600" />
            <h3 className="text-xl font-black text-slate-900">Education Module: C:N Ratio</h3>
          </div>
          <p className="text-sm text-emerald-800 leading-relaxed mb-6 font-medium">
            Students should note the <strong>Carbon-to-Nitrogen (C:N) ratio</strong>. For aerobic composting, we target 30:1. 
            Cattle manure provides the Carbon (Energy), while poultry waste provides the Nitrogen (Protein Synthesis).
          </p>
          <div className="text-[10px] font-mono font-bold text-emerald-600 bg-white p-4 rounded-2xl border border-emerald-100 uppercase tracking-widest">
            Key Study Task: Calculate the total Phosphorus runoff of a standard 50-hen deck.
          </div>
        </div>

        <div className="p-10 bg-slate-50 rounded-[3rem] border-2 border-slate-200">
          <div className="flex items-center gap-4 mb-6">
            <Thermometer className="text-slate-600" />
            <h3 className="text-xl font-black text-slate-900">Thermal Efficiency</h3>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            Our Napier decks create a micro-climate that is 3°C cooler than the ambient farm temperature. 
            This reduces <strong>Transpiration Stress</strong> in the plants and <strong>Heat Stress</strong> in the livestock.
          </p>
          <div className="flex gap-2">
            <span className="w-full h-2 bg-blue-200 rounded-full" />
            <span className="w-1/2 h-2 bg-emerald-300 rounded-full" />
          </div>
        </div>
      </div>
    </main>
  );
}

function ScienceCard({ icon, title, val, formula, desc }: any) {
  return (
    <div className="p-8 bg-white border-2 border-slate-100 rounded-[2.5rem] relative overflow-hidden group hover:border-emerald-500 transition-all duration-500 shadow-sm hover:shadow-xl">
      <div className="relative z-10">
        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-emerald-500 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all">
          {icon}
        </div>
        <div className="text-[10px] font-mono font-bold text-slate-400 mb-1 uppercase tracking-widest">{title}</div>
        <div className="text-3xl font-black mb-2 tracking-tighter text-slate-900">{val}</div>
        <div className="text-[10px] font-bold text-emerald-600 mb-4 font-mono">{formula}</div>
        <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function Row({ component, info, role, impact }: any) {
  return (
    <tr className="hover:bg-slate-50 transition-colors group">
      <td className="py-6 pr-4">
        <div className="font-black text-slate-900">{component}</div>
        <div className="text-[9px] text-slate-400 uppercase font-mono tracking-tighter">Biological_Asset</div>
      </td>
      <td className="py-6 text-emerald-600 font-bold">{info}</td>
      <td className="py-6 text-slate-500">{role}</td>
      <td className="py-6 text-right">
        <span className="inline-block px-3 py-1 bg-slate-900 text-white text-[10px] font-black rounded-lg">
          {impact}
        </span>
      </td>
    </tr>
  );
}