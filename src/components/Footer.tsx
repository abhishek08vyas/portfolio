// Footer.tsx
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#142240] text-white pt-12 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section - Branding */}
          <div className="flex flex-col space-y-3">
            <h2 className="text-xl font-bold">Abhishek Vyas</h2>
            <p className="text-sm text-gray-400">
              Help you create experiences where aesthetics
              & functionality seamlessly come together.
            </p>
            <div className="flex space-x-4 mt-2">
              <Link href= {process.env.NEXT_PUBLIC_LINKEDIN_LINK ?? '#'} aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5 text-gray-400 hover:text-blue-500 transition-colors" />
              </Link>
              <Link href={process.env.NEXT_PUBLIC_GITHUB_LINK ?? '#'} aria-label="GitHub">
                <FaGithub className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          {/* Center Section - Navigation Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium mb-4">General</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
                </li>
                <li>
                  <Link href="/#projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link>
                </li>
                <li>
                  {/* Use direct Link to coming-soon instead of onClick handler */}
                  <Link href="/coming-soon" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">The Website</h3>
              <ul className="space-y-2">
                <li>
                  {/* Use direct Link to coming-soon instead of onClick handler */}
                  <Link href="/coming-soon" className="text-gray-400 hover:text-white transition-colors">
                    Bucket List
                  </Link>
                </li>
                <li>
                  {/* Use direct Link to coming-soon instead of onClick handler */}
                  <Link href="/coming-soon" className="text-gray-400 hover:text-white transition-colors">
                    Book a call
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section - Contact */}
          <div>
            <p className="text-sm text-gray-400 mb-4">
              Feel free to reach out to me for any 
              inquiries or collaboration opportunities.
            </p>
            <a 
              href="mailto:abhishekvvyas@gmail.com" 
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <LuMail className="w-5 h-5" />
              <span>comingsoon.here</span>
            </a>
          </div>
        </div>
        
        {/* Copyright Line */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500">
            Copyright © {currentYear} Abhishek Vyas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};