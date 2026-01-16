// app/dashboard/page.tsx
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import AdminClient from "./AdminClient";

export default async function DashboardPage() {
  const session = await auth()
  
  if (!session?.user) {
    console.log("No session found, redirecting to login")
    redirect("/login")
  }
  
  const userRole = session.user.role
  
  if (!userRole || !["admin", "staff"].includes(userRole)) {
    console.log("Unauthorized role, redirecting")
    redirect("/unauthorized")
  }

  return <AdminClient session={session} />
}