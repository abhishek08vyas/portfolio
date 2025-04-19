import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Link from 'next/link';

// Define the fonts
const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata = {
  title: 'My Portfolio',
  description: 'Professional portfolio website showcasing my projects and skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="flex flex-col min-h-screen">
        <header className="shadow-sm border-b border-gray-200 dark:border-gray-800">
          <nav className="container mx-auto p-x-4 py-4 flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">Portfolio</div>
            <ul className="flex space-x-6">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><Link href="/projects" className="hover:text-primary">Projects</Link></li>
              <li><Link href="/about" className="hover:text-primary">About</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </nav>
        </header>
        
        {children}
        
        <footer className="border-t border-gray-200 dark:border-gray-800 py-8 mt-auto">
          <div className="container mx-auto p-x-4 text-center">
            <p className="text-foreground/70">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}