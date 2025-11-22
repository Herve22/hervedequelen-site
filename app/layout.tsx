import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://hervedequelen.fr'),
  title: {
    default: "Hervé De Quélen - Développeur Fullstack & PMO | React Next.js Node.js",
    template: "%s | Hervé De Quélen"
  },
  description: "Développeur Fullstack & PMO spécialisé Fintech, Banking, Legaltech. 11 ans d'XP IT dont 3 ans Business Analyst. React, Next.js, Node.js, TypeScript. TJM 400€. Brest, Bretagne.",
  keywords: ["développeur fullstack", "react", "next.js", "node.js", "typescript", "pmo", "business analyst", "fintech", "banking", "brest", "bretagne", "freelance"],
  authors: [{ name: "Hervé De Quélen" }],
  creator: "Hervé De Quélen",
  publisher: "Hervé De Quélen",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://hervedequelen.fr",
    siteName: "Hervé De Quélen - Développeur Fullstack & PMO",
    title: "Hervé De Quélen - Développeur Fullstack & PMO",
    description: "Développeur Fullstack & PMO spécialisé Fintech, Banking, Legaltech. 11 ans d'XP IT. React, Next.js, Node.js. Brest, Bretagne.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hervé De Quélen - Développeur Fullstack & PMO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hervé De Quélen - Développeur Fullstack & PMO",
    description: "Développeur Fullstack & PMO spécialisé Fintech, Banking, Legaltech. React, Next.js, Node.js.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://hervedequelen.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="canonical" href="https://hervedequelen.fr" />
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
