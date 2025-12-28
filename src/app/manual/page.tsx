"use client";
import { motion } from "framer-motion";
import { Clock, CheckCircle2, AlertCircle, Sunrise, Sun, Sunset, Moon } from "lucide-react";

const schedule = [
  { 
    time: "06:00 - 07:30", 
    task: "Primary Input Collection", 
    desc: "Collect raw manure from cow sheds. Transport to the aerobic decomposition bays.",
    icon: <Sunrise className="text-amber-500" />,
    priority: "High"
  },
  { 
    time: "08:00 - 09:30", 
    task: "Fodder Processing", 
    desc: "Harvest Napier grass from fodder decks. Mechanical shredding for goat consumption.",
    icon: <Sun className="text-emerald-500" />,
    priority: "Critical"
  },
  { 
    time: "10:00 - 11:30", 
    task: "Livestock Hydration & Check", 
    desc: "Inspect Goat & Hen health markers. Clear deck filters for hen droppings to reach the pond.",
    icon: <CheckCircle2 className="text-blue-500" />,
    priority: "Medium"
  },
  { 
    time: "13:00 - 14:00", 
    task: "Aquatic Ph Analysis", 
    desc: "Test fish pond water quality. Adjust floating root placement for optimal nitrogen uptake.",
    icon: <Sun className="text-sky-500" />,
    priority: "Technical"
  },
  { 
    time: "17:00 - 18:30", 
    task: "Secondary Feeding & Lockdown", 
    desc: "Final goat feeding. Secure hen coops. Monitor fish activity levels.",
    icon: <Sunset className="text-orange-500" />,
    priority: "High"
  },
];

export default function ManualPage() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
        <div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase font-mono italic">
            Operating <span className="text-emerald-500">Manual</span>
          </h1>
          <p className="text-slate-400 font-mono text-xs mt-2 uppercase tracking-[0.3em]">Protocol Version 2.4 // SECURE-ACCESS</p>
        </div>
        <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <Clock className="text-emerald-500 animate-pulse" />
          <div className="text-sm font-black font-mono">SYSTEM TIME: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
        </div>
      </div>

      

      <div className="grid lg:grid-cols-3 gap-10">
        
        {/* Left Column: Timeline */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2 font-mono uppercase tracking-widest">
            <Clock size={18} /> Daily Schedule
          </h3>
          {schedule.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col md:flex-row gap-6 p-6 bg-white rounded-[2rem] border border-slate-100 hover:border-emerald-500 transition-all shadow-sm"
            >
              <div className="md:w-32 shrink-0">
                <span className="text-xs font-black text-slate-400 font-mono tracking-tighter">{item.time}</span>
                <div className="mt-2 p-3 bg-slate-50 rounded-2xl w-fit group-hover:bg-emerald-50 transition-colors">
                  {item.icon}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-black text-slate-800 tracking-tight">{item.task}</h4>
                  <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter ${
                    item.priority === 'Critical' ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {item.priority}
                  </span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Protocols & Safety */}
        <div className="space-y-8">
          <section className="bg-slate-900 text-white rounded-[2.5rem] p-8">
            <h3 className="text-sm font-black mb-6 uppercase tracking-widest text-emerald-400 font-mono">Biosecurity Protocol</h3>
            <ul className="space-y-4">
              <ProtocolItem text="Footbaths mandatory at Goat Pen entrance." />
              <ProtocolItem text="Manual manure handling requires Level 2 PPE." />
              <ProtocolItem text="Strict zero-contact between raw dung and fish pond." />
              <ProtocolItem text="Water source isolation check every 48 hours." />
            </ul>
          </section>

          <section className="bg-emerald-50 border-2 border-emerald-100 rounded-[2.5rem] p-8">
            <div className="flex items-center gap-3 mb-4 text-emerald-700">
              <AlertCircle size={24} />
              <h3 className="font-bold">Maintenance Alert</h3>
            </div>
            <p className="text-xs text-emerald-800 leading-relaxed mb-6 italic">
              "The filtration roots of the floating plants must be pruned bi-weekly to prevent blockage of the hen-waste chutes."
            </p>
            <div className="space-y-3">
              <CheckItem label="Check Aerators" checked={true} />
              <CheckItem label="Lube Mechanical Shredder" checked={false} />
              <CheckItem label="Sterilize Hen Chutes" checked={true} />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function ProtocolItem({ text }: { text: string }) {
  return (
    <li className="flex gap-3 text-xs text-slate-400 leading-relaxed">
      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1 shrink-0" />
      {text}
    </li>
  );
}

function CheckItem({ label, checked }: { label: string, checked: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center ${checked ? 'bg-emerald-500 border-emerald-500' : 'border-emerald-300'}`}>
        {checked && <div className="w-2 h-2 bg-white rounded-full" />}
      </div>
      <span className="text-xs font-bold text-emerald-900">{label}</span>
    </div>
  );
}