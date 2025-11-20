import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hervé De Quélen - Développeur Fullstack | Ex-Business Analyst",
  description: "Développeur Fullstack spécialisé Fintech & Banking. 10 ans d'expérience IT. React, Next.js, Node.js. Prototypage rapide et solutions métier.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
