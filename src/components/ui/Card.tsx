import { motion } from "framer-motion";

export const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`bg-white/70 backdrop-blur-md border border-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 ${className}`}
  >
    {children}
  </motion.div>
);