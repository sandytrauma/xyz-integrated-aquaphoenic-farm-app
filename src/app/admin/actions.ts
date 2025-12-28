"use server";
import { db } from "@/db";
import { inventory } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";

// Action to Register New Items
export async function addInventoryItem(formData: FormData) {
  const name = formData.get("name") as string;
  const qty = parseInt(formData.get("qty") as string);
  const cat = formData.get("cat") as string;
  const unit = formData.get("unit") as string;

  await db.insert(inventory).values({
    itemName: name,
    quantity: qty,
    category: cat,
    unit: unit,
  });

  revalidatePath("/admin");
}

// Action to Increment/Decrement Stock
export async function updateStock(id: number, adjustment: number) {
  await db.update(inventory)
    .set({ 
      quantity: sql`${inventory.quantity} + ${adjustment}`,
      updatedAt: new Date() 
    })
    .where(eq(inventory.id, id));
  
  revalidatePath("/admin");
}