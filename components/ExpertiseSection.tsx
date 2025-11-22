import CustomIcon from './CustomIcon';

export default function ExpertiseSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Double expertise : Technique & Pilotage
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Je combine développement fullstack moderne et pilotage de projets stratégiques.
            Une synergie rare qui transforme vos ambitions en solutions concrètes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="group-hover:scale-110 transition-transform">
                <CustomIcon name="dev" className="w-16 h-16" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900">Développement Fullstack</h3>
                <p className="text-orange-500 font-semibold">React • Next.js • Node.js</p>
              </div>
            </div>

            <p className="text-gray-700 mb-6">
              Développeur fullstack spécialisé en solutions sur mesure pour la <strong>fintech</strong> et la <strong>legaltech</strong>. 
              J'accompagne startups et PME dans la création d'applications web modernes.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg">✓</span>
                <div>
                  <strong className="text-gray-900">4 projets livrés en 2025</strong>
                  <p className="text-sm text-gray-600">RestoDemo, Divaskell, Maitrea, PayAddict</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg">✓</span>
                <div>
                  <strong className="text-gray-900">MVP en 7-14 jours</strong>
                  <p className="text-sm text-gray-600">Prototypage rapide et itératif</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg">✓</span>
                <div>
                  <strong className="text-gray-900">Tests 85%+ coverage</strong>
                  <p className="text-sm text-gray-600">Playwright E2E, qualité garantie</p>
                </div>
              </div>
            </div>

            <a 
              href="/services#dev" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-2 transition-transform"
            >
              Voir mes projets 
              <span className="ml-2">→</span>
            </a>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-cyan-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="group-hover:scale-110 transition-transform">
                <CustomIcon name="pmo" className="w-16 h-16" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900">PMO / Business Analyst</h3>
                <p className="text-orange-500 font-semibold">Expérience Banking & SI · 3 ans</p>
              </div>
            </div>

            <p className="text-gray-700 mb-6">
              Business Analyst et PMO avec 3 ans d'expérience dans le <strong>secteur bancaire</strong>. 
              Je pilote des portefeuilles de projets stratégiques et structure les process.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg">✓</span>
                <div>
                  <strong className="text-gray-900">Pilotage multi-projets</strong>
                  <p className="text-sm text-gray-600">Coordination transverse, KPIs, reporting</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg">✓</span>
                <div>
                  <strong className="text-gray-900">JIRA / Agile / Process</strong>
                  <p className="text-sm text-gray-600">Méthodologie éprouvée en production</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg">✓</span>
                <div>
                  <strong className="text-gray-900">Projets réglementaires</strong>
                  <p className="text-sm text-gray-600">Banking, compliance, transformation IT</p>
                </div>
              </div>
            </div>

            <a 
              href="/services#pmo" 
              className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-semibold group-hover:translate-x-2 transition-transform"
            >
              Voir mon expérience 
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Pourquoi cette double expertise change tout
            </h3>
            <p className="text-blue-100 text-lg mb-6">
              Un développeur qui comprend les enjeux business, les process et le pilotage de projet. 
              Résultat : <strong className="text-orange-400">des solutions qui répondent vraiment aux besoins</strong>, 
              livrées dans les temps et le budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                Parlons de votre projet
                <span>→</span>
              </a>
              <a 
                href="/services" 
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-lg transition-colors border border-white/30"
              >
                Voir tous mes services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
