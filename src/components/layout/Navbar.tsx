"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Activity } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", path: "/" },
    { name: "Farm_Manual", path: "/manual" },
    { name: "Ecosystem", path: "/ecosystem" },
    { name: "Informatics", path: "/science" },
    { name: "Simulator", path: "/simulator" },
    { name: "ROI", path: "/investment" },
    { name: "Admin", path: "/admin" },
  ];

  return (
    <nav className="fixed top-4 w-full z-50 px-4">
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl md:rounded-full px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-black text-slate-900 tracking-tighter">
          <Activity size={20} className="text-emerald-500" /> <span>ECOCYCLE<span className="text-emerald-500">.OS</span></span>
        </Link>

        <div className="hidden md:flex gap-6 items-center">
          {links.map((l) => (
            <Link key={l.path} href={l.path} className={`text-xs font-bold uppercase tracking-widest transition-colors ${pathname === l.path ? "text-emerald-600" : "text-slate-400 hover:text-slate-900"}`}>
              {l.name}
            </Link>
          ))}
          <Link href="/contact" className="bg-slate-900 text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-emerald-600 transition-all">CONNECT</Link>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="md:hidden absolute top-20 left-4 right-4 bg-white rounded-3xl shadow-2xl p-8 flex flex-col gap-6 border border-slate-100">
            {links.map((l) => (
              <Link key={l.path} href={l.path} onClick={() => setIsOpen(false)} className="text-xl font-black text-slate-800">{l.name}</Link>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)} className="bg-emerald-500 text-white text-center py-4 rounded-2xl font-bold">Inquire Now</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}