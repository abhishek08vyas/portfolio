import type { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/next";
import { Inter, Dancing_Script, Fraunces } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { SkyBackdrop } from '@/components/SkyBackdrop';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });
const dancingScript = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-signature',
  weight: ['400', '700'],
});
const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
  style: ['normal', 'italic'],
});

const SITE_URL = 'https://abhishek-vyas.vercel.app';
const SITE_TITLE = 'Abhishek Vyas | Software Engineer — AI-Enabled Systems';
const SITE_DESCRIPTION =
  "Backend & full-stack engineer, 3+ years. AI-enabled systems: RAG pipelines, event-driven architecture, observability. MASc (Memorial, 2025) · St. John's, NL.";
// Canonical OG description — docs/CONTENT_PLAN.md Section 2 (verbatim)
const OG_DESCRIPTION =
  "Backend & full-stack software engineer with 3+ years' experience building AI-enabled systems — RAG pipelines, event-driven architecture, observability. MASc, Memorial University (Apr 2025) · AZ-204 · St. John's, NL · Remote-ready.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [{ url: '/images/av2.png', sizes: '192x192' }],
  },
  openGraph: {
    type: 'profile',
    firstName: 'Abhishek',
    lastName: 'Vyas',
    siteName: 'Abhishek Vyas — Portfolio',
    locale: 'en_CA',
    url: '/',
    title: SITE_TITLE,
    description: OG_DESCRIPTION,
    // og:image is provided by src/app/opengraph-image.tsx (file-based metadata)
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: OG_DESCRIPTION,
  },
};

// Facts sourced from docs/PROFILE_SOURCE_OF_TRUTH.md only
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Abhishek Vyas',
  jobTitle: 'Software Engineer',
  url: `${SITE_URL}/`,
  sameAs: [
    'https://github.com/abhishek08vyas',
    'https://www.linkedin.com/in/abhishekvvyas/',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: "St. John's",
    addressRegion: 'NL',
    addressCountry: 'CA',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Memorial University of Newfoundland',
  },
  knowsAbout: [
    'Backend development',
    'RAG pipelines',
    'Event-driven architecture',
    'Observability',
    'Microsoft Azure',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dancingScript.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider>
          <SkyBackdrop />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[var(--text-strong)] focus:text-[var(--surface-page)] focus:px-4 focus:py-2 focus:rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:ring-offset-2"
          >
            Skip to main content
          </a>
          <Navbar />
          <div id="main-content" tabIndex={-1} className="pt-16 outline-none">{children}</div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
