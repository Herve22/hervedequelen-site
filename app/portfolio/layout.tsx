import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Portfolio - 4 Projets Fullstack 2025 | React Next.js Node.js",
  description: "Découvrez mes 4 projets complets livrés en 2025 : RestoDemo, Divaskell, Maitrea, PayAddict. React, Next.js, Node.js, TypeScript, PostgreSQL. Tests Playwright 85%+.",
  openGraph: {
    title: "Portfolio - 4 Projets Fullstack | Hervé De Quélen",
    description: "4 projets complets : RestoDemo, Divaskell, Maitrea, PayAddict. Stack moderne, tests automatisés 85%+.",
    url: "https://hervedequelen.fr/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
