import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact - Devis Gratuit Dev Fullstack & PMO | TJM 400€",
  description: "Contactez-moi pour votre projet de développement web ou pilotage IT. Réponse sous 24h. Premier échange gratuit. TJM 400€. Brest, Bretagne, Remote France.",
  openGraph: {
    title: "Contact - Demander un devis | Hervé De Quélen",
    description: "Discutons de votre projet. Réponse sous 24h, premier échange gratuit. TJM 400€.",
    url: "https://hervedequelen.fr/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
