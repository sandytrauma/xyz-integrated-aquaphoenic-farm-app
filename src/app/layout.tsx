import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 antialiased text-slate-900`}>
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_#f0fdf4,_transparent_50%),_radial-gradient(circle_at_bottom_left,_#f0f9ff,_transparent_50%)]" />
        <Navbar />
        {children}
        <footer className="py-10 border-t border-slate-200 text-center text-slate-400 text-xs">
          © 2025 EcoCycle Farm System • Built for a Sustainable Future
        </footer>
      </body>
    </html>
  );
}
