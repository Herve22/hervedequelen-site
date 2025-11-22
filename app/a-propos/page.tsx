import Image from 'next/image';
import CustomIcon from '@/components/CustomIcon';

export default function APropos() {
  const timeline = [
    {
      year: '2014-2021',
      title: 'Business Analyst Banking',
      description: 'Analyse fonctionnelle et pilotage de projets dans le secteur bancaire. JIRA, Agile, spécifications, coordination équipes.'
    },
    {
      year: '2021-2024',
      title: 'Transition vers le dev',
      description: 'Retour aux fondamentaux du code. Formation intensive React, Next.js, Node.js. Premiers projets fullstack.'
    },
    {
      year: '2025',
      title: 'Freelance Fullstack & PMO',
      description: '4 projets complets livrés. Tests Playwright 85%+. Double expertise technique et business valorisée.'
    }
  ];

  return (
    <div className="bg-gray-50">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-2 h-12 bg-orange-500 rounded-full"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">À propos</h1>
          </div>
          <p className="text-xl md:text-2xl text-blue-100 ml-6">
            De l'analyse fonctionnelle au code : un parcours unique
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Un profil rare : Business Analyst devenu développeur
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Après <strong>11 ans d'expérience en IT</strong> dont 3 ans comme Business Analyst et PMO dans le <strong>secteur bancaire</strong>, j'ai décidé de revenir à ma passion première : le développement.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Cette double casquette m'offre un <strong>avantage unique</strong> : je comprends vos enjeux métier avant même d'écrire une ligne de code. Je ne me contente pas de développer ce qu'on me demande, je traduis vos besoins fonctionnels en solutions techniques qui répondent vraiment à vos problématiques.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                En 2025, j'ai livré <strong>4 projets complets</strong> avec des stacks modernes (React, Next.js, Node.js) et une exigence qualité forte : tests automatisés Playwright avec <strong>couverture 85%+</strong>.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border-2 border-blue-100">
                  <div className="text-3xl font-bold text-blue-900">11+</div>
                  <div className="text-sm text-gray-600">ans expérience IT</div>
                </div>
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-4 border-2 border-cyan-100">
                  <div className="text-3xl font-bold text-cyan-900">3 ans</div>
                  <div className="text-sm text-gray-600">BA/PMO Banking</div>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-4 border-2 border-orange-200">
                  <div className="text-3xl font-bold text-orange-900">4</div>
                  <div className="text-sm text-gray-600">projets 2025</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-20 blur-xl"></div>
                <div className="relative w-80 h-96 md:w-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/images/herve-apropos.webp"
                    alt="Hervé De Quélen"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Mon parcours
            </h2>
            <p className="text-lg text-gray-600">
              Une évolution naturelle du business vers la technique
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-8 border-l-4 border-blue-200">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-sm font-bold text-orange-600 mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Double expertise
            </h2>
            <p className="text-lg text-gray-600">
              Le meilleur des deux mondes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-blue-500">
              <div className="flex items-center gap-4 mb-6">
                <CustomIcon name="pmo" className="w-12 h-12" />
                <h3 className="text-2xl font-bold text-blue-900">Business Analyst / PMO</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold mt-1">▸</span>
                  <span>Recueil et analyse des besoins métier</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold mt-1">▸</span>
                  <span>Rédaction de spécifications fonctionnelles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold mt-1">▸</span>
                  <span>Gestion Agile (JIRA, Confluence)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold mt-1">▸</span>
                  <span>Pilotage de projets IT (Banking, SI)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold mt-1">▸</span>
                  <span>Animation de comités de pilotage</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-purple-500">
              <div className="flex items-center gap-4 mb-6">
                <CustomIcon name="dev" className="w-12 h-12" />
                <h3 className="text-2xl font-bold text-blue-900">Développement Fullstack</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold mt-1">▸</span>
                  <span>React / Next.js / Node.js / TypeScript</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold mt-1">▸</span>
                  <span>API REST / PostgreSQL / Prisma ORM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold mt-1">▸</span>
                  <span>Tests E2E Playwright (85%+ coverage)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold mt-1">▸</span>
                  <span>Architecture moderne et scalable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold mt-1">▸</span>
                  <span>Déploiement VPS / PM2 / Nginx</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Secteurs d'expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🏦</div>
              <h3 className="font-bold text-blue-900 mb-2">Fintech & Banking</h3>
              <p className="text-sm text-gray-600">Provisions RH, SI bancaire</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">⚖️</div>
              <h3 className="font-bold text-purple-900 mb-2">Legaltech</h3>
              <p className="text-sm text-gray-600">Cabinets d'avocats, gestion dossiers</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🍽️</div>
              <h3 className="font-bold text-orange-900 mb-2">CHR</h3>
              <p className="text-sm text-gray-600">Gestion restaurants, réservations</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">👥</div>
              <h3 className="font-bold text-cyan-900 mb-2">RH & Associatif</h3>
              <p className="text-sm text-gray-600">Bénévoles, projets, facturation</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Mes valeurs
            </h2>
            <p className="text-lg text-gray-600">
              Ce qui guide mon travail au quotidien
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="flex justify-center mb-4">
                <CustomIcon name="target" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Écoute</h3>
              <p className="text-gray-700">
                Je prends le temps de comprendre vos vrais besoins, pas juste la demande de surface
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="flex justify-center mb-4">
                <CustomIcon name="zap" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Pragmatisme</h3>
              <p className="text-gray-700">
                Des solutions concrètes qui répondent à vos contraintes budget et délais
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="flex justify-center mb-4">
                <CustomIcon name="check" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Qualité</h3>
              <p className="text-gray-700">
                Code propre, testé à 85%+, documenté. Livraison fiable dans les temps
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Envie de travailler ensemble ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Discutons de votre projet autour d'un café (virtuel ou réel)
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Prendre contact
          </a>
        </div>
      </section>
    </div>
  );
}
