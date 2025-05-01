import type { Metadata } from 'next';
import { Inter, Dancing_Script } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const dancingScript = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-signature',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Abhishek Vyas - Developer & Freelancer',
  description: 'Java Full Stack Developer with 3+ years of experience',
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
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}