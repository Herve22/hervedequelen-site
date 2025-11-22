import Hero from "@/components/Hero";
import ExpertiseSection from "@/components/ExpertiseSection";
import ProjectCard from "@/components/ProjectCard";
import CustomIcon from "@/components/CustomIcon";

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
      tags: ["React", "Node.js", "Playwright"],
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
      <ExpertiseSection />
      
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-full mb-4 font-semibold">
              <span>✨</span>
              Portfolio 2025
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Projets récents livrés
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              4 applications complètes développées en React/Next.js/Node.js avec tests automatisés
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <a 
              href="/portfolio" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg group"
            >
              Voir tous les projets en détail
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Ce qui me différencie
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une approche unique qui combine expertise technique et vision business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2 border-t-4 border-blue-500 group">
              <div className="mb-4 group-hover:scale-110 transition-transform flex justify-center">
                <CustomIcon name="target" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Compréhension métier</h3>
              <p className="text-gray-600">
                <strong>11 ans d'XP IT</strong> dont 3 ans en analyse fonctionnelle bancaire. 
                Je comprends vos contraintes métier, pas juste la technique.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2 border-t-4 border-purple-500 group">
              <div className="mb-4 group-hover:scale-110 transition-transform flex justify-center">
                <CustomIcon name="zap" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Livraison rapide</h3>
              <p className="text-gray-600">
                <strong>MVP en 7-14 jours.</strong> Stack moderne maîtrisée (React, Next.js, Node.js). 
                Du prototype à la prod rapidement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2 border-t-4 border-green-500 group">
              <div className="mb-4 group-hover:scale-110 transition-transform flex justify-center">
                <CustomIcon name="check" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Qualité & tests</h3>
              <p className="text-gray-600">
                <strong>Tests automatisés Playwright</strong> avec couverture 85%+. 
                Moins de bugs, plus de confiance, maintenance facilitée.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2 border-t-4 border-cyan-500 group">
              <div className="mb-4 group-hover:scale-110 transition-transform flex justify-center">
                <CustomIcon name="pmo" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Pilotage projet</h3>
              <p className="text-gray-600">
                <strong>Expérience Banking & SI</strong> (3 ans). Je structure, pilote et livre vos projets IT 
                dans les temps et le budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">💬</div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Prêt à transformer votre projet en réalité ?
              </h2>
              <p className="text-blue-100 text-lg mb-2">
                Que ce soit pour du <strong className="text-orange-400">développement fullstack</strong> ou 
                du <strong className="text-cyan-400">pilotage de projet</strong>,
              </p>
              <p className="text-blue-100 text-lg mb-8">
                je vous accompagne de l'idée à la livraison.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                <div className="text-3xl font-bold text-orange-400 mb-1">400€</div>
                <div className="text-sm text-blue-200">TJM missions longues</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                <div className="text-3xl font-bold text-cyan-400 mb-1">7-14j</div>
                <div className="text-sm text-blue-200">Livraison MVP</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                <div className="text-3xl font-bold text-green-400 mb-1">Brest</div>
                <div className="text-sm text-blue-200">Bretagne & Remote</div>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="/contact" 
                className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-10 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-lg"
              >
                Discutons de votre projet →
              </a>
              <p className="text-blue-200 text-sm mt-4">
                Réponse sous 24h · Premier échange gratuit
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
