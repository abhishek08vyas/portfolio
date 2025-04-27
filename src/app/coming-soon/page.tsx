// app/coming-soon/page.tsx
'use client';

import { HiCode, HiCloud, HiOutlineBeaker } from "react-icons/hi";
import { HiOutlineWrench } from "react-icons/hi2";
import { SiSpringboot } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Footer } from "@/components/Footer";

const ComingSoon = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative flex-1 flex items-center overflow-hidden">
        {/* Background Banner with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-300 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-indigo-300 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-200 blur-3xl"></div>
          </div>
          <div className="absolute inset-0 bg-white/40"></div>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-24 left-1/4 animate-bounce-slow opacity-20">
            <HiCode className="w-16 h-16 text-blue-600" />
          </div>
          <div className="absolute top-1/3 right-1/6 animate-bounce-slow opacity-20">
            <SiSpringboot className="w-16 h-16 text-green-600" />
          </div>
          <div className="absolute bottom-24 left-3/4 animate-pulse opacity-20">
            <HiCloud className="w-12 h-12 text-sky-500" />
          </div>
          <div className="absolute bottom-1/3 left-1/6 animate-pulse opacity-20">
            <TbBrandJavascript className="w-12 h-12 text-yellow-500" />
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center py-8">
            {/* Animated Construction Icon */}
            <div className="mx-auto mb-8 animate-pulse">
              <HiOutlineWrench className="w-32 h-32 text-blue-600 mx-auto" />
              <HiOutlineBeaker className="w-32 h-32 text-indigo-600 mx-auto -mt-24 opacity-75" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent py-2">
  Coming Soon!
</h1>
            
            <div className="relative mb-6">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
                I&apos;am working hard to bring you something amazing
              </h2>
              <div className="absolute -bottom-2 left-1/2 w-24 h-1 bg-blue-500 transform -translate-x-1/2 rounded-full"></div>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-8">
              <p className="text-gray-700 leading-relaxed mb-4 text-center">
                This page is currently under construction. I&apos;am putting the finishing
                touches on this feature and will launch it very soon. Stay tuned!
              </p>
              
              {/* Return Home Button */}
              <div className="mt-6">
                <Link href="/" className="inline-block">
                  <Button 
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md px-8 py-6 gap-3 flex items-center justify-center shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-blue-600/40"
                  >
                    <span className="text-lg">Return to Homepage</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ComingSoon;