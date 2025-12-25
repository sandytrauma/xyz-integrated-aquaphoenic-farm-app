import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StepProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
}

export const CycleStep = ({ icon: Icon, title, desc, color }: StepProps) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    className="flex flex-col items-center text-center p-4"
  >
    <div className={`p-4 rounded-full ${color} text-white mb-4 shadow-lg`}>
      <Icon size={32} />
    </div>
    <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{desc}</p>
  </motion.div>
);