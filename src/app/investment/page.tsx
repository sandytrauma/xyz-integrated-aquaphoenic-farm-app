"use client";
import { motion } from "framer-motion";
import { MetricCard } from "@/components/ui/MetricCard";

export default function InvestmentPage() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <header className="mb-20">
        <h1 className="text-5xl font-black mb-6">Financial <span className="text-sky-500">Logic</span></h1>
        <p className="text-slate-500 text-xl max-w-2xl">Traditional farming loses 40% of its budget to external feed and fertilizers. Our model reduces this to near zero.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <MetricCard label="Operating Margin" value="68%" trend="+22% vs Industry" />
        <MetricCard label="Waste Recovery" value="98.5%" trend="Near Zero Waste" />
        <MetricCard label="Break Even" value="18mo" trend="Fast ROI" />
      </div>

      <section className="grid lg:grid-cols-2 gap-12 items-center bg-white p-12 rounded-[3rem] shadow-2xl shadow-slate-200">
        <div>
          <h2 className="text-3xl font-bold mb-6">The Market Opportunity</h2>
          <p className="text-slate-600 mb-4 italic">"The global organic meat and aquaculture market is growing at 12.4% CAGR. Consumers are demanding traceability."</p>
          <div className="space-y-4">
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} className="h-full bg-emerald-500" />
            </div>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Sustainability Rating: Excellent</p>
          </div>
        </div>
        <div className="bg-sky-50 p-8 rounded-3xl border border-sky-100">
          <h4 className="font-bold text-sky-900 mb-4">Revenue Streams</h4>
          <ul className="space-y-3">
            {['Organic Goat Meat & Dairy', 'Freshwater Tilapia / Catfish', 'Premium Free-Range Eggs', 'Surplus Organic Compost Sales'].map((s, i) => (
              <li key={i} className="flex gap-2 items-center text-sky-700">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-400" /> {s}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}