import DevisProvisionsForm from '@/components/DevisProvisionsForm'
import DevisExplication from '@/components/DevisExplication'
import { ProvisionIcon } from '@/components/ProvisionIcon'

export const metadata = {
  title: 'Devis Application Provisions RH | Hervé de Quelen',
  description: 'Obtenez un devis instantané pour votre application de calcul de provisions RH sur mesure. Congés payés, RTT, 13ème mois, primes...',
}

export default function DevisProvisionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Calcul de <span className="text-emerald-400">Provisions RH</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Application sur mesure pour automatiser le calcul de vos provisions de paie. 
            Obtenez une estimation instantanée.
          </p>
        </div>

        {/* Layout 3 colonnes */}
        <div className="grid lg:grid-cols-[1fr_2fr_1fr] gap-8 items-start">
          
          {/* Colonne gauche - Trust */}
          <div className="hidden lg:flex flex-col gap-6 pt-20">
            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
              <div className="mb-3"><ProvisionIcon name="lock" size={40} /></div>
              <h3 className="text-white font-semibold mb-2">Données non conservées</h3>
              <p className="text-gray-400 text-sm">Aucune donnée n&apos;est stockée. Testez librement.</p>
            </div>
            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
              <div className="mb-3"><ProvisionIcon name="flash" size={40} /></div>
              <h3 className="text-white font-semibold mb-2">Devis instantané</h3>
              <p className="text-gray-400 text-sm">Résultat immédiat, sans attente.</p>
            </div>
            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
              <div className="mb-3"><ProvisionIcon name="target" size={40} /></div>
              <h3 className="text-white font-semibold mb-2">Sans engagement</h3>
              <p className="text-gray-400 text-sm">Estimation gratuite, vous décidez ensuite.</p>
            </div>
          </div>

          {/* Colonne centrale - Formulaire */}
          <div>
            <DevisProvisionsForm />
          </div>

          {/* Colonne droite - Visions */}
          <div className="hidden lg:flex flex-col gap-6 pt-20">
            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
              <div className="mb-3"><ProvisionIcon name="bar-chart" size={40} /></div>
              <h3 className="text-white font-semibold mb-2">Vision par service</h3>
              <p className="text-gray-400 text-sm">Consolidation automatique par département.</p>
            </div>
            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
              <div className="mb-3"><ProvisionIcon name="user" size={40} /></div>
              <h3 className="text-white font-semibold mb-2">Vision par collaborateur</h3>
              <p className="text-gray-400 text-sm">Détail individuel des provisions.</p>
            </div>
            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
              <div className="mb-3"><ProvisionIcon name="trend" size={40} /></div>
              <h3 className="text-white font-semibold mb-2">Vision dans le temps</h3>
              <p className="text-gray-400 text-sm">Évolution mensuelle, trimestrielle, annuelle.</p>
            </div>
          </div>

        </div>

        {/* Trust badges mobile */}
        <div className="mt-12 lg:hidden">
          <div className="flex flex-wrap justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <ProvisionIcon name="lock" size={24} />
              <span>Données non conservées</span>
            </div>
            <div className="flex items-center gap-2">
              <ProvisionIcon name="flash" size={24} />
              <span>Devis instantané</span>
            </div>
            <div className="flex items-center gap-2">
              <ProvisionIcon name="target" size={24} />
              <span>Sans engagement</span>
            </div>
          </div>
        </div>

        {/* Section explication */}
        <DevisExplication />

      </div>
    </main>
  )
}
