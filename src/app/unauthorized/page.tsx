"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldAlert, ArrowLeft } from "lucide-react";

export default function UnauthorizedPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center px-4">
      <ShieldAlert className="h-16 w-16 text-destructive mb-4" />

      <h1 className="text-4xl font-bold mb-2">
        Access Denied
      </h1>

      <p className="text-muted-foreground max-w-md mb-6">
        You don’t have permission to access this page.
        If you believe this is a mistake, please contact an administrator.
      </p>

      <div className="flex gap-3">
        <Link href="/">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <Link href="/login">
          <Button>
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
}
