"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { BeefIcon, Sprout, MessageSquareHeartIcon, Bird, Fish, RefreshCw, Handshake, Leaf, Zap, BarChart2 } from 'lucide-react';

// 1. Define strict types for the arrow directions to fix the TS(7053) error
type Direction = 'right' | 'down' | 'none';

interface FlowNodeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  arrowDirection?: Direction;
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const InfographicFlow = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-8 md:p-12 bg-white/70 backdrop-blur-xl rounded-[3rem] border border-white shadow-2xl">
      <motion.div 
  variants={fadeIn}
  initial="initial"
  animate="animate"
  transition={{ duration: 0.6, ease: "easeOut" }} // Define transition here to avoid the error
  className="text-center mb-16"
>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter">
          THE <span className="text-emerald-500">ECOCYCLE</span> FLOW
        </h2>
        <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
          A closed-loop informatics display showcasing waste-to-protein efficiency.
        </p>
      </motion.div>

      <div className="relative flex flex-col items-center py-10">
        {/* Central Spinning Hub */}
        <motion.div 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
          className="absolute z-10 p-6 bg-slate-900 text-emerald-400 rounded-full shadow-2xl top-[45%] md:top-[48%]"
        >
          <RefreshCw size={48} className="animate-spin" style={{ animationDuration: '8s' }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 w-full">
          <FlowNode 
            icon={<BeefIcon size={30} />} 
            title="1. Manure Collection" 
            description="Organic waste collected from cattle nodes." 
            delay={0.4}
            arrowDirection="right"
          />
          <FlowNode 
            icon={<Sprout size={30} />} 
            title="2. Fodder Growth" 
            description="Nitrogen-rich compost fuels Napier grass beds." 
            delay={0.6}
            arrowDirection="right"
          />
          <FlowNode 
            icon={<MessageSquareHeartIcon size={30} />} 
            title="3. Goat Metabolism" 
            description="High-protein biomass converted to livestock growth." 
            delay={0.8}
            arrowDirection="down"
          />
          
          <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center my-10">
            <motion.div 
              {...fadeIn} 
              transition={{ delay: 1.0 }} 
              className="p-8 bg-slate-900 rounded-[2rem] border border-emerald-500/30 flex flex-col md:flex-row items-center justify-around gap-6 text-emerald-400 font-mono"
            >
              <div className="flex items-center gap-2 text-xl tracking-tighter">
                <Leaf size={24} /> 98% RECOVERY
              </div>
              <div className="flex items-center gap-2 text-xl tracking-tighter">
                <Zap size={24} /> 0% SYNTHETIC INPUT
              </div>
            </motion.div>
          </div>

          <FlowNode 
            icon={<Bird size={30} />} 
            title="4. Avian Integration" 
            description="Deck-based poultry adds secondary nitrogen loop." 
            delay={1.2}
            arrowDirection="right"
          />
          <FlowNode 
            icon={<Fish size={30} />} 
            title="5. Aquatic Harvest" 
            description="Fish consume filtered avian waste in damp pools." 
            delay={1.4}
            arrowDirection="right"
          />
          <FlowNode 
            icon={<Handshake size={30} />} 
            title="6. Market Yield" 
            description="Final organic protein output for ecosystem economy." 
            delay={1.6}
            arrowDirection="none"
          />
        </div>
      </div>

      {/* Metrics Footer */}
      <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricBox val="1:4.2" label="INPUT RATIO" delay={1.8} />
        <MetricBox val="7.2 pH" label="WATER BUFFER" delay={2.0} />
        <MetricBox val="24%" label="PROTEIN CEILING" delay={2.2} />
        <MetricBox val="ZERO" label="WASTE EXIT" delay={2.4} />
      </div>
    </div>
  );
};

// Helper: FlowNode with Type Safety
const FlowNode = ({ icon, title, description, delay, arrowDirection = 'none' }: FlowNodeProps) => {
  // Explicitly type the mapping object to match the Direction type
  const arrowClass: Record<Direction, string> = {
    right: "after:absolute after:top-1/2 after:right-[-3rem] after:-translate-y-1/2 after:w-12 after:h-1 after:bg-emerald-200 after:rounded-full after:hidden lg:after:block after:content-['']",
    down: "after:absolute after:left-1/2 after:bottom-[-3rem] after:-translate-x-1/2 after:w-1 after:h-12 after:bg-emerald-200 after:rounded-full after:hidden lg:after:block after:content-['']",
    none: ""
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ delay, type: "spring", stiffness: 100 }}
      className={`relative p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:border-emerald-500 transition-colors z-20 ${arrowClass[arrowDirection]}`}
    >
      <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
        {icon}
      </div>
      <h3 className="text-lg font-black text-slate-900 mb-2 font-mono uppercase tracking-tighter">{title}</h3>
      <p className="text-xs text-slate-500 leading-relaxed font-medium">{description}</p>
    </motion.div>
  );
};

// Helper: MetricBox
const MetricBox = ({ val, label, delay }: { val: string, label: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ delay }}
    className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center"
  >
    <div className="text-2xl font-black text-slate-900 font-mono italic">{val}</div>
    <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mt-1">{label}</div>
  </motion.div>
);

export default InfographicFlow;