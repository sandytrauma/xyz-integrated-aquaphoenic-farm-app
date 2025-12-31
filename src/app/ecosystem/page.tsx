"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import InfographicFlow from "@/components/infographicflow/InfographicFlow";
import { ArrowDown, Droplets, Wind, Zap, Activity } from "lucide-react";

const stages = [
  { 
    title: "1. The Fertilizer Source", 
    actor: "Bovine Unit (Cows)", 
    output: "Nitrogen / Phosphorus",
    desc: "The cycle begins with high-volume organic waste. Cow manure serves as the 'crude oil' of our system, containing the raw chemical energy required to jumpstart the biological engine.",
    metric: "15kg/Day Output"
  },
  { 
    title: "2. The Nutrient Layer", 
    actor: "C4 Fodder Crops", 
    output: "Oxygen / Biomass",
    desc: "Napier grass acts as a biological filter. By absorbing the decomposed manure, these plants sequester carbon and convert nitrates into high-protein leaf matter.",
    metric: "4.2x Yield Increase"
  },
  { 
    title: "3. The Primary Consumer", 
    actor: "Capra (Goats)", 
    output: "Lean Protein / Secondary Manure",
    desc: "Goats process the farm-grown fodder with 90% feed efficiency. Their waste is fine-grained and rich in potassium, reinforcing the soil for the next planting cycle.",
    metric: "85% Feed Independence"
  },
  { 
    title: "4. The Aqua-Poultry Deck", 
    actor: "Avian & Aquatic", 
    output: "Omega-3 / Omega-6",
    desc: "A vertical integration where poultry decks sit above Tilapia ponds. The direct nutrient transfer eliminates transportation waste and feeds the aquatic ecosystem naturally.",
    metric: "Zero-Waste Transfer"
  }
];

export default function EcosystemPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-emerald-50 rounded-full blur-[120px] -z-10 opacity-60" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-50 rounded-full blur-[120px] -z-10 opacity-60" />

      <section className="pt-32 pb-16 px-6 max-w-6xl mx-auto">
        <header className="mb-20 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-emerald-600 font-mono text-xs font-bold mb-4 uppercase tracking-[0.4em]"
          >
            <Activity size={16} /> Biological Operating System
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none text-slate-900"
          >
            A Masterclass in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
              Symbiosis.
            </span>
          </motion.h1>
          <p className="text-slate-500 text-lg max-w-2xl font-medium leading-relaxed">
            Our ecosystem mimics natural forest floors, where waste does not exist. 
            By layering biology, we achieve industrial-scale yields with zero chemical inputs.
          </p>
        </header>

        

        <div className="grid grid-cols-1 gap-12 relative">
          {/* Vertical Connecting Line for Desktop */}
          <div className="hidden md:block absolute left-[43px] top-10 bottom-10 w-1 bg-gradient-to-b from-emerald-200 via-slate-200 to-blue-200 rounded-full" />

          {stages.map((stage, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-0 md:pl-24"
            >
              {/* Timeline Marker */}
              <div className="hidden md:flex absolute left-0 top-0 w-20 h-20 bg-white border-4 border-slate-50 shadow-xl rounded-[2rem] items-center justify-center z-10">
                <span className="text-2xl font-black text-emerald-500 font-mono">0{i+1}</span>
              </div>

              <Card className="group p-8 md:p-12 hover:shadow-2xl hover:shadow-emerald-100 transition-all duration-500 border-none bg-white/80 backdrop-blur-md rounded-[3rem]">
                <div className="flex flex-col lg:flex-row gap-10">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest rounded-full">
                        {stage.output}
                      </span>
                      <span className="text-slate-300 font-mono text-[10px]">VERIFIED_LOOP</span>
                    </div>
                    
                    <h3 className="text-3xl font-black mb-4 text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors">
                      {stage.title}
                    </h3>
                    
                    <p className="text-slate-500 text-base leading-relaxed mb-8">
                      {stage.desc}
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Key Actor</p>
                        <p className="font-bold text-slate-800">{stage.actor}</p>
                      </div>
                      <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                        <p className="text-[10px] font-bold text-emerald-400 uppercase mb-1">Metric</p>
                        <p className="font-bold text-emerald-700">{stage.metric}</p>
                      </div>
                    </div>
                  </div>

                  {/* Iconography for each stage */}
                  <div className="w-full lg:w-48 h-48 bg-slate-50 rounded-[2.5rem] flex items-center justify-center text-slate-200 group-hover:text-emerald-400 group-hover:bg-emerald-50 transition-all duration-500 border border-dashed border-slate-200">
                    {i === 0 && <Wind size={64} />}
                    {i === 1 && <Droplets size={64} />}
                    {i === 2 && <Zap size={64} />}
                    {i === 3 && <Activity size={64} />}
                  </div>
                </div>
              </Card>
              
              {/* Arrow transition */}
              {i < stages.length - 1 && (
                <div className="flex justify-center md:justify-start md:ml-6 my-6 text-slate-300">
                  <ArrowDown size={32} className="animate-bounce" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Full Width Visualizer Section */}
      <section className="bg-slate-900 py-32 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Mass-Balance Flow</h2>
            <p className="text-slate-400 max-w-xl mx-auto font-mono text-sm">
              The real-time conversion rates of our biological units. 
              Waste is just energy in the wrong place.
            </p>
          </div>
          <InfographicFlow />
        </div>
      </section>

      <section className="py-20 text-center">
        <h3 className="text-slate-400 font-mono text-[10px] uppercase tracking-[0.5em] mb-4">Final System Audit</h3>
        <div className="flex justify-center gap-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
           <div className="text-2xl font-black">98% Nitrogen Recovery</div>
           <div className="text-2xl font-black">0% Chemical Runoff</div>
        </div>
      </section>
    </main>
  );
}