import DevisProvisionsForm from '@/components/DevisProvisionsForm'
import DevisExplication from '@/components/DevisExplication'

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

        {/* Formulaire */}
        <DevisProvisionsForm />

        {/* Trust badges */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              <span>Données non conservées</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span>Devis instantané</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
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
