"use client";

import Link from "next/link";
import { Utensils, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  // Prevent flicker while session loads
  if (status === "loading") {
    return (
      <header className="h-16 border-b bg-background flex items-center">
        <div className="container mx-auto px-4 md:px-6 flex justify-between">
          <div className="h-5 w-24 bg-muted animate-pulse rounded" />
          <div className="h-5 w-20 bg-muted animate-pulse rounded" />
        </div>
      </header>
    );
  }

  const isAuthenticated = !!session;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">

        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-primary"
        >
          <Utensils className="h-6 w-6" />
          <span>TableTop</span>
        </Link>

        <nav className="flex items-center gap-4 md:gap-6">
          <Link href="/menu" className="text-sm font-medium hover:text-primary">
            Menu
          </Link>

          {isAuthenticated ? (
            <>
              <Link
                href="/dashboard"
                className="text-sm font-medium hover:text-primary"
              >
                Dashboard
              </Link>

              <h2 className="text-sm font-medium">@{session.user?.name}</h2>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => signOut({ callbackUrl: "/" })}
                className="gap-2"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </>
          ) : (
            <Link href="/login">
              <Button variant="ghost" size="sm" className="gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Login</span>
              </Button>
            </Link>
          )}
        </nav>

      </div>
    </header>
  );
}
