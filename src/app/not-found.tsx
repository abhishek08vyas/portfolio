'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { commonStyles } from "@/lib/theme-utils";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-[var(--text-strong)] mb-4">404</h1>
        <p className="text-xl text-[var(--text-body)] mb-4">Oops! Page not found</p>
        <div className="mt-6">
          <Button
            asChild
            className={`${commonStyles.button.primary} px-8 py-6 gap-3 inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2`}
          >
            <Link href="/">
              <span className="text-lg">Return to Homepage</span>
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
