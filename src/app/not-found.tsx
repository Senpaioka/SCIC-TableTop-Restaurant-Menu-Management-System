// app/not-found.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
      <p className="text-xl text-muted-foreground mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/">
        <Button variant="outline" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Go Back Home
        </Button>
      </Link>
    </div>
  );
}
