// Header.tsx 
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "./ui/button";
import Link from 'next/link';
import Image from 'next/image';

export const Header = () => { 
  return ( 
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b"> 
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between"> 
        <div className="flex items-center">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity pl-0 md:pl-1">
            <Image 
              src="/images/av2.png" 
              alt="Abhishek Vyas" 
              width={32}
              height={32}
              className="h-8 w-auto"
              priority
            />
            <div className="ml-3 signature-container">
              <span className="font-signature text-2xl text-primary signature-static">Abhishek Vyas</span>
              <span className="font-signature text-2xl text-primary signature-animated">Abhishek Vyas</span>
            </div>
          </Link>
        </div>
        <div className="hidden md:flex gap-6"> 
          <Link href="/#skills-experience" className="text-sm text-gray-600 hover:text-primary transition-colors font-bold">
            Skills And Experience
          </Link> 
          <Link href="/#projects" className="text-sm text-gray-600 hover:text-primary transition-colors font-bold">
            Projects
          </Link> 
        </div> 
        <Button variant="ghost" size="icon" className="md:hidden"> 
          <GiHamburgerMenu className="h-5 w-5" /> 
        </Button> 
      </nav> 
    </header> 
  ); 
};