import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Politique de Confidentialité RGPD | Hervé De Quélen",
  description: "Politique de confidentialité et protection des données personnelles. Conformité RGPD. Contact : contact@hervedequelen.fr",
  robots: {
    index: false,
    follow: true,
  },
};

export default function PolitiqueConfidentialiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
