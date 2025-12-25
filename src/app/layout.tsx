import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inteegrated Aquaponic Farm | Circular Bio-Harmony",
  description: "An integrated ecosystem where goats, hens, and fish thrive in a perfect, waste-free biological cycle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,#ecfdf5_0%,#ffffff_100%)]" />
        <Navbar />
        {children}
        <footer className="py-12 border-t border-slate-200 text-center text-slate-500 text-sm">
          © 2025 EcoCycle Integrated Farms. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
