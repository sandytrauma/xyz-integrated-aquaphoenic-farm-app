"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const password = formData.get("password");
  const adminSecret = process.env.ADMIN_SECRET;

  if (password === adminSecret) {
    const cookieStore = await cookies();
    
    // Set a secure cookie that expires in 24 hours
    cookieStore.set("admin_session", adminSecret as string, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, 
      path: "/",
    });

    redirect("/admin");
  } else {
    return { error: "Invalid System Credentials" };
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
  redirect("/login");
}