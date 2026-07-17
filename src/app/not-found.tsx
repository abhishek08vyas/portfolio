'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <div className="mt-6">
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md px-8 py-6 gap-3 inline-flex items-center justify-center shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-blue-600/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D5176] focus-visible:ring-offset-2"
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
