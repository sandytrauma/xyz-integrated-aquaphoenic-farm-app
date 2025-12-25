import { motion } from 'framer-motion';

export const MetricCard = ({ label, value, trend }: { label: string, value: string, trend: string }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50"
  >
    <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-2">{label}</p>
    <h4 className="text-4xl font-bold text-slate-900 mb-2">{value}</h4>
    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">
      {trend}
    </span>
  </motion.div>
);