import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

// This ensures your DATABASE_URL is loaded from .env.local or .env
dotenv.config({ path: ".env" }); 

export default defineConfig({
  // Fixed the dot: changed .src to ./src
  schema: "./src/db/schema.ts", 
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});