import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "À propos - Business Analyst devenu Dev Fullstack | 11 ans d'XP",
  description: "Mon parcours : 11 ans d'XP IT dont 3 ans Business Analyst dans le secteur bancaire. Transition vers le développement fullstack. Double expertise technique et métier. Brest, Bretagne.",
  openGraph: {
    title: "À propos - Mon parcours | Hervé De Quélen",
    description: "Business Analyst devenu développeur fullstack. 11 ans d'XP IT, 3 ans en Banking. Double expertise unique.",
    url: "https://hervedequelen.fr/a-propos",
  },
};

export default function AProposLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
