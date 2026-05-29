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
  "Michał Kubik - backend-leaning fullstack engineer who builds systems that hold up. Six+ years across NestJS, Go, AWS and more. Open to senior backend and fullstack roles.";

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
      "Backend-leaning fullstack engineer who builds systems that hold up. Six+ years across NestJS, Go and AWS. Open to senior backend and fullstack roles.",
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
      "Backend-leaning fullstack engineer who builds systems that hold up. Open to senior backend and fullstack roles.",
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
    "Backend-leaning fullstack engineer who builds systems that hold up, with over six years across NestJS, Go, AWS and more.",
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
    "Distributed Systems",
    "System Design",
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
