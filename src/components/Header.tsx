import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <img 
            src="/images/av2.png" 
            alt="Abhishek Vyas" 
            className="h-8"
          />
        </a>
        <div className="hidden md:flex gap-6">
          <a href="/#skills-experience" className="text-sm text-gray-600 hover:text-primary transition-colors font-bold">Skills And Experience</a>
          <a href="/#projects" className="text-sm text-gray-600 hover:text-primary transition-colors font-bold">Projects</a>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <GiHamburgerMenu className="h-5 w-5" />
        </Button>
      </nav>
    </header>
  );
};