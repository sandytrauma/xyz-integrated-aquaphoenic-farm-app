import { db } from "@/db";
import { inventory } from "@/db/schema";
import { addInventoryItem, updateStock } from "./actions";
import { logout } from "../login/actions";
import { desc } from "drizzle-orm";
import { Package, PlusCircle, LogOut, TrendingUp, Layers } from "lucide-react";

export default async function AdminDashboard() {
  // Fetch items sorted by newest update first
  const items = await db.query.inventory.findMany({
    orderBy: [desc(inventory.updatedAt)]
  });

  return (
    <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      {/* HEADER & LOGOUT */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-black font-mono tracking-tighter uppercase italic">Inventory_OS</h1>
          <p className="text-[10px] text-slate-400 font-mono tracking-[0.3em] uppercase">Authenticated Admin Node</p>
        </div>
        <form action={logout}>
          <button className="flex items-center gap-2 text-[10px] font-mono font-bold text-slate-400 hover:text-red-500 transition-all border border-slate-200 px-4 py-2 rounded-xl">
            <LogOut size={14} /> TERMINATE_SESSION
          </button>
        </form>
      </div>

      {/* QUICK ADD FORM */}
      <section className="mb-12 p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <PlusCircle size={18} className="text-emerald-500" />
          <h2 className="text-xs font-black font-mono uppercase tracking-widest">Register_New_Asset</h2>
        </div>

        <form action={addInventoryItem} className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <input name="name" placeholder="Item Name" className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-emerald-500/10" required />
          <select name="cat" className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm outline-none cursor-pointer">
            <option value="Livestock">Livestock</option>
            <option value="Feed">Feed/Biomass</option>
            <option value="Aquatic">Aquatic</option>
            <option value="Waste">Waste/Compost</option>
          </select>
          <input name="qty" type="number" placeholder="Qty" className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm outline-none" required />
          <input name="unit" placeholder="Unit (kg/pcs)" className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm outline-none" required />
          <button className="bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-600 transition-all">
            Add_to_Loop
          </button>
        </form>
      </section>

      {/* INVENTORY LIST */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4 px-4 text-slate-400">
          <Layers size={14} />
          <span className="text-[10px] font-bold uppercase tracking-widest font-mono">Current_Stock_Registry</span>
        </div>

        {items.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-[2rem] border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-5">
              <div className="p-4 bg-slate-50 rounded-2xl text-slate-400">
                <Package size={24} />
              </div>
              <div>
                <span className="text-[9px] font-bold text-emerald-500 uppercase font-mono tracking-[0.2em]">{item.category}</span>
                <h3 className="text-xl font-black text-slate-900 leading-tight">{item.itemName}</h3>
                <p className="text-[10px] text-slate-400 font-mono mt-1">
                  LAST_MOD: {item.updatedAt?.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-50 p-3 rounded-[1.5rem] border border-slate-100 min-w-[240px] justify-between">
              <div className="px-4">
                <span className="block text-2xl font-black font-mono text-slate-900">{item.quantity}</span>
                <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest">{item.unit}</span>
              </div>

              <div className="flex gap-2">
                <form action={async () => { "use server"; await updateStock(item.id, -1); }}>
                  <button className="w-12 h-12 bg-white border border-slate-200 rounded-xl font-black text-slate-400 hover:text-red-500 hover:border-red-100 transition-all shadow-sm">-</button>
                </form>
                <form action={async () => { "use server"; await updateStock(item.id, 1); }}>
                  <button className="w-12 h-12 bg-white border border-slate-200 rounded-xl font-black text-slate-400 hover:text-emerald-500 hover:border-emerald-100 transition-all shadow-sm">+</button>
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}