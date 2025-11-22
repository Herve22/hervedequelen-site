export default function PolitiqueConfidentialite() {
  return (
    <div className="bg-gray-50">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-2 h-12 bg-orange-500 rounded-full"></div>
            <h1 className="text-4xl md:text-5xl font-bold">Politique de confidentialité</h1>
          </div>
          <p className="text-xl text-blue-100 ml-6">Protection de vos données personnelles</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                La protection de vos données personnelles est une priorité pour Hervé De Quélen. 
                Cette politique explique comment vos données sont collectées, utilisées et protégées.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Données collectées</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Lorsque vous utilisez le formulaire de contact, nous collectons :
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold mt-1">•</span>
                  <span>Votre nom</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold mt-1">•</span>
                  <span>Votre adresse email</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold mt-1">•</span>
                  <span>Le message que vous nous adressez</span>
                </li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Utilisation des données</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vos données sont utilisées uniquement pour :
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <span>Répondre à vos demandes de contact</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <span>Vous fournir les informations demandées</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <span>Établir un devis ou une proposition commerciale</span>
                </li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Conservation des données</h2>
              <p className="text-gray-700 leading-relaxed">
                Vos données sont conservées pendant la durée nécessaire à la gestion de votre 
                demande, puis archivées conformément aux obligations légales.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Partage des données</h2>
              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                <p className="text-gray-700 leading-relaxed font-semibold">
                  Vos données personnelles ne sont jamais vendues, louées ou partagées avec des tiers 
                  à des fins commerciales.
                </p>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Vos droits RGPD</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-2">Droit d'accès</h3>
                  <p className="text-sm text-gray-600">Obtenir une copie de vos données</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-2">Droit de rectification</h3>
                  <p className="text-sm text-gray-600">Corriger vos données inexactes</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-2">Droit à l'effacement</h3>
                  <p className="text-sm text-gray-600">Demander la suppression de vos données</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-2">Droit d'opposition</h3>
                  <p className="text-sm text-gray-600">Vous opposer au traitement</p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Exercer vos droits</h2>
              <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
                <p className="text-gray-700 leading-relaxed mb-2">
                  Pour exercer l'un de ces droits, contactez-nous à :
                </p>
                <p className="text-lg">
                  <a href="mailto:contact@hervedequelen.fr" className="text-orange-600 hover:text-orange-700 font-bold">
                    contact@hervedequelen.fr
                  </a>
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Nous nous engageons à répondre dans un délai maximum de 30 jours.
                </p>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Sécurité</h2>
              <p className="text-gray-700 leading-relaxed">
                Nous mettons en œuvre toutes les mesures techniques et organisationnelles 
                nécessaires pour protéger vos données contre tout accès, modification, 
                divulgation ou destruction non autorisés.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                Ce site n'utilise pas de cookies de suivi, d'analyse ou de publicité. 
                Aucune donnée de navigation n'est collectée.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Contact</h2>
              <p className="text-gray-700 leading-relaxed">
                Pour toute question concernant cette politique de confidentialité :<br />
                Email : <a href="mailto:contact@hervedequelen.fr" className="text-orange-600 hover:text-orange-700 font-semibold">contact@hervedequelen.fr</a>
              </p>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                Dernière mise à jour : 22 novembre 2025
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
