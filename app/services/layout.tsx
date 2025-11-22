import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Services Dev Fullstack & PMO | React Next.js Node.js",
  description: "Développement d'applications web sur-mesure (React, Next.js, Node.js) et pilotage de projets IT (PMO, Business Analyst). Fintech, Banking, Legaltech. TJM 400€. Brest, Bretagne.",
  openGraph: {
    title: "Services Dev Fullstack & PMO | Hervé De Quélen",
    description: "Développement web moderne et pilotage de projets IT. React, Next.js, Node.js. Fintech, Banking, Legaltech.",
    url: "https://hervedequelen.fr/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
