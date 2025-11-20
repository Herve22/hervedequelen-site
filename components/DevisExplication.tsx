'use client'

export default function DevisExplication() {
  return (
    <section id="details" className="max-w-4xl mx-auto mt-16 px-4">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        Ce que nous développons pour vous
      </h2>
      
      <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700">
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          <strong className="text-emerald-400">Application sur mesure</strong> de calcul automatisé 
          des provisions de paie : congés payés, RTT, 13ème mois, primes, indemnités de fin de contrat.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-white font-semibold mb-3">✅ Inclus dans le développement</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• Interface de saisie intuitive</li>
              <li>• Calculs automatiques selon vos règles</li>
              <li>• Export Excel / PDF</li>
              <li>• Historique des calculs</li>
              <li>• Documentation utilisateur</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">📊 Visions et analyses</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• <strong className="text-white">Par service</strong> : provisions consolidées par département</li>
              <li>• <strong className="text-white">Par collaborateur</strong> : détail individuel des provisions</li>
              <li>• <strong className="text-white">Dans le temps</strong> : évolution mensuelle, trimestrielle, annuelle</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-700">
          <h3 className="text-white font-semibold mb-3">🎯 Bénéfices</h3>
          <div className="grid md:grid-cols-3 gap-4 text-gray-400">
            <div>• Gain de temps : 5h/mois minimum</div>
            <div>• Zéro erreur de calcul</div>
            <div>• Conformité assurée</div>
            <div>• Traçabilité complète</div>
            <div>• Évolutif selon vos besoins</div>
            <div>• Pilotage en temps réel</div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-400 mb-4">
            <strong className="text-white">3 ans d&apos;expérience</strong> en secteur bancaire français • Stack moderne : React, Node.js, PostgreSQL
          </p>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="text-emerald-400 hover:text-emerald-300 font-semibold"
          >
            ↑ Estimer mon projet
          </a>
        </div>
      </div>
    </section>
  )
}
