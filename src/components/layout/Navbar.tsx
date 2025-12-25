"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/" },
    { name: "Cycle", path: "/ecosystem" },
    { name: "Simulator", path: "/simulator" },
    { name: "Investment", path: "/investment" },
  ];

  return (
    <nav className="fixed top-4 w-full z-50 px-4">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl md:rounded-full px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-black text-emerald-600">
          <Leaf size={24} /> <span className="hidden xs:block">ECOCYCLE</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((l) => (
            <Link key={l.path} href={l.path} className={`text-sm font-bold transition-colors ${pathname === l.path ? "text-emerald-600" : "text-slate-500 hover:text-slate-900"}`}>
              {l.name}
            </Link>
          ))}
          <Link href="/contact" className="bg-slate-900 text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-emerald-600 transition-all">Contact</Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-4 right-4 bg-white rounded-3xl shadow-2xl p-6 flex flex-col gap-4 border border-slate-100"
          >
            {links.map((l) => (
              <Link key={l.path} href={l.path} onClick={() => setIsOpen(false)} className="text-lg font-bold text-slate-700 border-b border-slate-50 pb-2">{l.name}</Link>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)} className="bg-emerald-500 text-white text-center py-4 rounded-2xl font-bold">Get Started</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}