import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard';

export default function Portfolio() {
  const projects = [
    {
      title: "RestoDemo",
      description: "Interface complète de gestion pour restaurants avec modules planning, réservations, pointeuse, hygiène HACCP et gestion de stock.",
      tags: ["Next.js", "React", "PostgreSQL", "TypeScript"],
      image: "/images/restodemo.jpg",
      link: "/portfolio#restodemo"
    },
    {
      title: "Divaskell",
      description: "Plateforme de gestion des bénévoles pour association culturelle bretonne avec système de matching et QR codes.",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      image: "/images/divaskell.jpg",
      link: "/portfolio#divaskell"
    },
    {
      title: "Maitrea",
      description: "Plateforme complète de gestion de projets, facturation et pointage avec dashboard multi-rôles.",
      tags: ["React", "Node.js", "SQLite", "Express"],
      image: "/images/maitrea.jpg",
      link: "/portfolio#maitrea"
    },
    {
      title: "PayAddict",
      description: "Système de calcul automatisé de provisions RH avec détection intelligente. Tests Playwright 85%+.",
      tags: ["Next.js", "TypeScript", "Playwright", "API REST"],
      image: "/images/payaddict.png",
      link: "/portfolio#payaddict"
    }
  ];

  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-2 h-12 bg-orange-500 rounded-full"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Portfolio</h1>
          </div>
          <p className="text-xl md:text-2xl text-blue-100 ml-6 mb-12">
            4 projets complets livrés en 2025
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ml-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">4</div>
              <div className="text-sm text-blue-200">Projets livrés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">85%+</div>
              <div className="text-sm text-blue-200">Test coverage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">20k+</div>
              <div className="text-sm text-blue-200">Lignes de code</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">100%</div>
              <div className="text-sm text-blue-200">Clients satisfaits</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Projets réalisés
            </h2>
            <p className="text-lg text-gray-600">
              Applications complètes développées en React/Next.js/Node.js
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Un projet similaire en tête ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Je peux créer votre application sur-mesure avec la même qualité
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Demander un devis
            </a>
            <a 
              href="/services" 
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all border border-white/30"
            >
              Voir mes services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
