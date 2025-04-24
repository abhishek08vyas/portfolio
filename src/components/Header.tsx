import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#hero" className="text-xl font-semibold text-primary hover:text-primary/80 transition-colors">
          AV
        </a>
        <div className="hidden md:flex gap-6">
          <a href="#about" className="text-sm text-gray-600 hover:text-primary transition-colors">About</a>
          <a href="#experience" className="text-sm text-gray-600 hover:text-primary transition-colors">Experience</a>
          <a href="#projects" className="text-sm text-gray-600 hover:text-primary transition-colors">Projects</a>
          <a href="#skills" className="text-sm text-gray-600 hover:text-primary transition-colors">Skills</a>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <GiHamburgerMenu className="h-5 w-5" />
        </Button>
      </nav>
    </header>
  );
};