import { FarmSimulator } from '@/components/simulator/FarmSimulator';
import { motion } from 'framer-motion';

export default function SimulatorPage() {
  return (
    <main className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6">
            Efficiency <span className="text-emerald-500">Calculator</span>
          </h1>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto">
            Experience the power of a zero-waste loop. See how one input stream 
            creates a multiplying effect across three different livestock categories.
          </p>
        </div>

        <FarmSimulator />

        <section className="mt-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Why This Matters</h3>
            <p className="text-slate-600 leading-relaxed">
              In a traditional farm, the waste from {5} cows would be a disposal liability. 
              In our system, as shown above, those same cows provide the foundational energy 
              to sustain a high-density protein factory.
            </p>
            <div className="flex gap-4">
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 flex-1">
                <p className="text-emerald-600 font-black text-2xl">0%</p>
                <p className="text-xs text-slate-400 font-bold uppercase">Chemical Feed</p>
              </div>
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 flex-1">
                <p className="text-sky-600 font-black text-2xl">100%</p>
                <p className="text-xs text-slate-400 font-bold uppercase">Organic Cycle</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden">
            <h4 className="text-xl font-bold mb-4 relative z-10">System Observation</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 relative z-10">
              The interaction between the Hen Deck and the Fish Pond is particularly vital. 
              The phosphorus levels in the hen waste stimulate natural phytoplankton growth 
              in the pond, which provides additional "free" nutrition for the fish.
            </p>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl" />
          </div>
        </section>
      </div>
    </main>
  );
}