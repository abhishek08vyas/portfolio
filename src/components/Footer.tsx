import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Abhishek Vyas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
