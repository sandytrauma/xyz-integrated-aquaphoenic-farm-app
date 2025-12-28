import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core";

export const inventory = pgTable("inventory", {
  id: serial("id").primaryKey(),
  itemName: text("item_name").notNull(),
  quantity: integer("quantity").notNull().default(0),
  category: text("category").notNull(), // e.g., 'Livestock', 'Feed', 'Waste'
  unit: text("unit").notNull(), // e.g., 'heads', 'kg', 'liters'
  updatedAt: timestamp("updated_at").defaultNow(),
});