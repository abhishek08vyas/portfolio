import type { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/next";
import { Inter, Dancing_Script } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const dancingScript = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-signature',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Abhishek Vyas | Software Engineer — AI-Enabled Systems',
  description: "Backend & full-stack engineer, 3+ years. AI-enabled systems: RAG pipelines, event-driven architecture, observability. MASc (Memorial, 2025) · St. John's, NL.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dancingScript.variable}>
      <head>        
        <link rel="icon" href="/images/av2.png" sizes="192x192" />
      </head>
      <body className={`${inter.className}`}>
        <Navbar />
        <div className="pt-16">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}