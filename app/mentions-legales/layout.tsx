import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mentions Légales | Hervé De Quélen",
  description: "Mentions légales du site hervedequelen.fr. Éditeur : Hervé De Quélen, auto-entrepreneur. SIRET 791 544 661 00055. Brest, France.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function MentionsLegalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
