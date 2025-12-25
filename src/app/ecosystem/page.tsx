"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

const stages = [
  { 
    title: "1. The Fertilizer Source", 
    actor: "Cows", 
    desc: "We collect raw manure from nearby sheds. This waste is rich in nitrogen and phosphorus, processed through aerobic decomposition to create organic 'Gold' for our plants." 
  },
  { 
    title: "2. The Nutrient Layer", 
    actor: "Plants & Grass", 
    desc: "Set above the aquatic pool, high-protein fodder crops like Napier grass absorb the manure nutrients, purifying the air and creating high-quality feed." 
  },
  { 
    title: "3. The Primary Consumer", 
    actor: "Goats", 
    desc: "Goats graze on the farm-grown grass. Their high-metabolism waste is collected to reinforce the composting cycle, creating a secondary nutrient stream." 
  },
  { 
    title: "4. The Aqua-Poultry Deck", 
    actor: "Hens & Fish", 
    desc: "A custom-built deck houses hens directly over the fish pond. Hen droppings fall into the water, providing organic, protein-rich nutrients for the fish population below." 
  }
];

export default function EcosystemPage() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-5xl font-extrabold mb-12"
      >
        A Masterclass in <span className="text-emerald-500">Symbiosis</span>
      </motion.h1>

      <div className="space-y-12">
        {stages.map((stage, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="flex flex-col md:flex-row gap-8 items-center border-l-8 border-l-emerald-500">
              <div className="flex-1 text-4xl font-black text-slate-200">0{i+1}</div>
              <div className="flex-[5]">
                <h3 className="text-2xl font-bold mb-2 text-slate-800">{stage.title}</h3>
                <p className="text-slate-600 leading-relaxed">{stage.desc}</p>
                <div className="mt-4 inline-block px-3 py-1 bg-slate-100 rounded-lg text-sm font-bold text-slate-500">
                  Key Actor: {stage.actor}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  );
}