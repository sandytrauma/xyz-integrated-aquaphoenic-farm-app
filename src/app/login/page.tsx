"use client";
import { useState } from "react";
import { login } from "./actions";
import { Lock, ShieldAlert, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    const result = await login(formData);
    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="p-4 bg-slate-900 text-emerald-400 rounded-2xl mb-4">
            <Lock size={28} />
          </div>
          <h1 className="text-2xl font-black font-mono uppercase tracking-tighter">Admin_Access</h1>
          <p className="text-slate-400 text-xs font-mono uppercase tracking-widest mt-1">EcoCycle Authorization</p>
        </div>

        <form action={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <input 
              name="password"
              type="password" 
              placeholder="Enter System Secret"
              required
              className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all font-mono"
            />
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-500 text-xs font-bold font-mono bg-red-50 p-3 rounded-xl border border-red-100">
              <ShieldAlert size={14} /> {error}
            </div>
          )}

          <button 
            disabled={loading}
            className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all disabled:opacity-50"
          >
            {loading ? "Authenticating..." : "Establish Connection"} <ArrowRight size={18} />
          </button>
        </form>
      </motion.div>
    </main>
  );
}