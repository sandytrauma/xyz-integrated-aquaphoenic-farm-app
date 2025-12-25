"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Ecosystem', path: '/ecosystem' },
    { name: 'Investment', path: '/investment' },
  ];

  return (
    <nav className="fixed top-6 w-full z-50 flex justify-center px-6">
      <div className="bg-white/80 backdrop-blur-lg border border-white/20 px-8 py-3 rounded-full shadow-2xl flex gap-8 items-center">
        {links.map((link) => (
          <Link 
            key={link.path} 
            href={link.path}
            className={`text-sm font-bold transition-colors ${pathname === link.path ? 'text-emerald-500' : 'text-slate-500 hover:text-slate-900'}`}
          >
            {link.name}
          </Link>
        ))}
        <Link href="/contact" className="px-5 py-2 bg-slate-900 text-white rounded-full text-xs font-black uppercase tracking-widest hover:bg-emerald-500 transition-colors">
          Contact
        </Link>
      </div>
    </nav>
  );
};