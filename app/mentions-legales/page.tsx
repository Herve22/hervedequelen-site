export default function MentionsLegales() {
  return (
    <div className="bg-gray-50">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-2 h-12 bg-orange-500 rounded-full"></div>
            <h1 className="text-4xl md:text-5xl font-bold">Mentions légales</h1>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Éditeur du site</h2>
              <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-100">
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-blue-900">Hervé De Quélen</strong><br />
                  Entrepreneur individuel<br />
                  <br />
                  <strong>SIREN :</strong> 791 544 661<br />
                  <strong>SIRET :</strong> 791 544 661 00055<br />
                  <strong>Numéro de TVA :</strong> FR81791544661<br />
                  <strong>Code APE :</strong> 6201Z (Programmation informatique)<br />
                  <br />
                  <strong>Adresse :</strong><br />
                  10 rue Lamartine<br />
                  29470 Plougastel-Daoulas<br />
                  France<br />
                  <br />
                  <strong>Email :</strong> <a href="mailto:contact@hervedequelen.fr" className="text-orange-600 hover:text-orange-700 font-semibold">contact@hervedequelen.fr</a>
                </p>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Hébergement</h2>
              <p className="text-gray-700 leading-relaxed">
                Ce site est hébergé sur un serveur VPS.<br />
                Localisation : France
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Propriété intellectuelle</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                L'ensemble du contenu de ce site (textes, images, vidéos) est la propriété 
                exclusive d'Hervé De Quélen, sauf mention contraire.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Toute reproduction, distribution, modification, adaptation, retransmission ou 
                publication de ces différents éléments est strictement interdite sans l'accord 
                exprès par écrit d'Hervé De Quélen.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Données personnelles</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous 
                disposez d'un droit d'accès, de rectification et de suppression des données vous 
                concernant.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Pour exercer ce droit, contactez-nous à : <a href="mailto:contact@hervedequelen.fr" className="text-orange-600 hover:text-orange-700 font-semibold">contact@hervedequelen.fr</a>
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                Ce site n'utilise pas de cookies de suivi ou de publicité.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Responsabilité</h2>
              <p className="text-gray-700 leading-relaxed">
                Hervé De Quélen ne saurait être tenu responsable des erreurs, d'une absence de 
                disponibilité des informations et/ou de la présence de virus sur son site.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Liens hypertextes</h2>
              <p className="text-gray-700 leading-relaxed">
                Le site peut contenir des liens vers d'autres sites. Hervé De Quélen n'exerce 
                aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Loi applicable</h2>
              <p className="text-gray-700 leading-relaxed">
                Les présentes mentions légales sont régies par la loi française. Tout litige 
                relatif à l'utilisation de ce site sera soumis à la compétence exclusive des 
                tribunaux français.
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
