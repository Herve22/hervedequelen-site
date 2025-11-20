import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const projects = [
    {
      title: "RestoDemo",
      description: "Interface moderne de gestion pour restaurants : planning, réservations, pointeuse, hygiène, stock.",
      tags: ["Next.js", "React", "PostgreSQL"],
      image: "/images/restodemo.jpg",
      link: "/portfolio#restodemo"
    },
    {
      title: "Maitrea",
      description: "Plateforme complète de gestion de projets, facturation et pointage avec dashboard multi-rôles.",
      tags: ["React", "Node.js", "SQLite"],
      image: "/images/maitrea.jpg",
      link: "/portfolio#maitrea"
    },
    {
      title: "PayAddict",
      description: "Système de provisions RH avec détection automatique et tests Playwright (85%+ couverture).",
      tags: ["React", "Node.js", "Playwright", "Tests E2E"],
      image: "/images/payaddict.png",
      link: "/portfolio#payaddict"
    },
    {
      title: "Divaskell",
      description: "Gestion de bénévoles pour association culturelle bretonne avec QR codes.",
      tags: ["Node.js", "SQLite", "Bootstrap"],
      image: "/images/divaskell.jpg",
      link: "/portfolio#divaskell"
    }
  ];

  return (
    <>
      <Hero />
      
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Mes réalisations 2025
            </h2>
            <p className="text-lg text-gray-600">
              4 projets complets livrés en React/Next.js/Node.js
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Pourquoi travailler avec moi ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Compréhension métier</h3>
              <p className="text-gray-600">
                10 ans d'expérience IT dont 3 ans en analyse fonctionnelle. Je comprends vos contraintes métier, pas juste la technique.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Prototypage rapide</h3>
              <p className="text-gray-600">
                MVP fonctionnel en 7-14 jours. Stack moderne maîtrisée (React, Next.js, Node.js).
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Qualité & tests</h3>
              <p className="text-gray-600">
                Tests automatisés Playwright avec couverture 85%+. Moins de bugs, plus de confiance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
