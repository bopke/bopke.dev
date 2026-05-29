import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// The site's only typeface. 400 (+ italic) and 600 are the weights in use.
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
});

const SITE_URL = "https://bopke.dev";
const TITLE = "Michał Kubik - Fullstack Engineer";
const DESCRIPTION =
  "Michał Kubik - fullstack engineer with 6+ years building APIs and data systems, recently in HIPAA healthcare and fintech. NestJS, TypeScript, Node.js, React, AWS. Open to backend and fullstack roles, remote or around Łódź, Poland.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: "Michał Kubik" }],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: { url: "/favicon.svg", type: "image/svg+xml" },
    apple: "/apple-icon",
  },
  openGraph: {
    type: "website",
    title: TITLE,
    description:
      "Fullstack engineer with 6+ years building APIs and data systems, recently in HIPAA healthcare and fintech. NestJS, TypeScript, Node.js, React, AWS. Open to backend and fullstack roles.",
    url: "/",
    siteName: "Bopke.dev",
    locale: "en_US",
    images: [
      {
        url: "/assets/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Michał Kubik - Fullstack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Fullstack engineer building APIs and data systems, recently in HIPAA healthcare and fintech. Open to backend and fullstack roles.",
    images: ["/assets/og-cover.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1c1c21",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Michał Kubik",
  url: "https://bopke.dev/",
  image: "https://bopke.dev/assets/og-cover.png",
  jobTitle: "Fullstack Engineer",
  description:
    "Fullstack engineer with 6+ years building APIs and data systems, recently in HIPAA healthcare and fintech.",
  email: "contact@bopke.dev",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Łódź",
    addressCountry: "PL",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Technical University of Łódź",
  },
  knowsLanguage: ["pl", "en"],
  knowsAbout: [
    "Node.js",
    "NestJS",
    "TypeScript",
    "Go",
    "Python",
    "AWS",
    "PostgreSQL",
    "Backend Development",
    "Database Optimization",
    "System Reliability",
  ],
  sameAs: [
    "https://github.com/bopke",
    "https://www.linkedin.com/in/micha%C5%82-kubik-420170161/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-accent="azure"
      data-bg="charcoal"
      className={ibmPlexMono.variable}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
