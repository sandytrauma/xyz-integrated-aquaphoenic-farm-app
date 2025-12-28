import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import { Metadata } from "next";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: '--font-mono' });

export const metadata: Metadata = {
  title: "EcoCycle OS | Integrated Circular Farming",
  description: "Advanced management system for Cow-Goat-Hen-Fish ecosystems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} scroll-smooth`}>
      <body className="bg-slate-50 text-slate-900 antialiased font-sans">
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_#f0fdf4,_transparent_50%),_radial-gradient(circle_at_bottom_left,_#f0f9ff,_transparent_50%)]" />
        <Navbar />
        {children}
        <footer className="py-12 border-t border-slate-200 text-center text-slate-400 text-[10px] font-mono uppercase tracking-widest">
          System Authentication: Verified Circular Loop © 2025 | website built and managed by <Link href="https://kumarsandeepportfolio.vercel.app/" target="blank">SandyTrauma</Link>
        </footer>
      </body>
    </html>
  );
}