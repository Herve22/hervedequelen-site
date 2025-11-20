import Image from 'next/image';

export default function APropos() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            De l'analyse fonctionnelle au code
          </h1>
          <p className="text-xl text-neutral-100">
            Un parcours unique : Business Analyst devenu développeur fullstack
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Mon parcours</h2>
              <p className="text-lg text-gray-700 mb-4">
                Après plus de 10 ans d'expérience en IT, dont 3 ans comme Business Analyst dans le secteur bancaire (Crédit Mutuel Arkéa, Arkéa Financement Service), je suis revenu à ma passion première : le développement.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Cette double casquette BA/Développeur me donne un atout unique : je comprends vos enjeux métier avant de coder. Je traduis vos besoins fonctionnels en solutions techniques concrètes et efficaces.
              </p>
              <p className="text-lg text-gray-700">
                En 2025, j'ai livré 5 projets complets avec des stacks modernes (React, Next.js, Node.js) et une exigence qualité forte (tests automatisés Playwright avec couverture 85%+).
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-80 h-96 md:w-96 md:h-[500px]">
                <Image
                  src="/images/herve-apropos.webp"
                  alt="Hervé De Quélen"
                  fill
                  className="rounded-lg shadow-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Mes expertises
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                📊 Analyse fonctionnelle
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Recueil et analyse des besoins</li>
                <li>• Rédaction de spécifications</li>
                <li>• Gestion Agile (JIRA, Confluence)</li>
                <li>• Architecture SI décisionnel</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                💻 Développement
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• React / Next.js / Node.js</li>
                <li>• TypeScript / JavaScript</li>
                <li>• API REST / PostgreSQL</li>
                <li>• Tests E2E (Playwright)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                🏦 Secteurs d'expertise
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Fintech & Banking</li>
                <li>• Legaltech (cabinets d'avocats)</li>
                <li>• CHR (restauration)</li>
                <li>• RH & Gestion</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                ⚡ Méthodes
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Prototypage rapide (7-14j)</li>
                <li>• Tests automatisés (85%+)</li>
                <li>• Déploiement continu</li>
                <li>• Collaboration remote</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Mes valeurs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6">
              <div className="text-4xl mb-4">👂</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Écoute</h3>
              <p className="text-gray-700">
                Je prends le temps de comprendre vos vrais besoins
              </p>
            </div>

            <div className="p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pragmatisme</h3>
              <p className="text-gray-700">
                Des solutions concrètes qui répondent à vos contraintes
              </p>
            </div>

            <div className="p-6">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Qualité</h3>
              <p className="text-gray-700">
                Code propre, testé, documenté. Livraison fiable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
