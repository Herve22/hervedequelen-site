'use client'

import { useState } from 'react'
import tarifsConfig from '@/config/provisions-tarifs.json'

type Step = 1 | 2 | 3 | 4 | 5

export default function DevisProvisionsForm() {
  const [step, setStep] = useState<Step>(1)
  const [formData, setFormData] = useState({
    effectif: '',
    provisions: [] as string[],
    options: [] as string[],
    hebergement: '',
    maintenance: '',
  })
  const [showResult, setShowResult] = useState(false)
  const [showContact, setShowContact] = useState(false)

  const handleCheckbox = (field: 'provisions' | 'options', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(v => v !== value)
        : [...prev[field], value]
    }))
  }

  const calculateDevis = () => {
    let jours = 0
    if (formData.effectif === 'petit') jours += tarifsConfig.base.petit.jours
    else if (formData.effectif === 'moyen') jours += tarifsConfig.base.moyen.jours
    else if (formData.effectif === 'grand') jours += tarifsConfig.base.grand.jours

    formData.provisions.forEach(p => {
      const prov = tarifsConfig.provisions[p as keyof typeof tarifsConfig.provisions]
      if (prov) jours += prov.jours
    })
    formData.options.forEach(o => {
      const opt = tarifsConfig.options[o as keyof typeof tarifsConfig.options]
      if (opt) jours += opt.jours
    })

    const prixDev = Math.max(jours * tarifsConfig.tjm, tarifsConfig.minimum)
    const prixHebergement = formData.hebergement === 'freelance' ? tarifsConfig.hebergement.freelance.prix_annuel : 0
    const prixMaintenance = formData.maintenance === 'freelance' ? tarifsConfig.maintenance.freelance.prix_annuel : 0

    return { jours, prixDev, prixHebergement, prixMaintenance }
  }

  const nextStep = () => setStep(prev => Math.min(prev + 1, 5) as Step)
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1) as Step)
  const devis = calculateDevis()

  if (showResult) {
    return (
      <div className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Votre estimation</h2>
        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-center py-3 border-b border-gray-700">
            <span className="text-gray-300">Développement ({devis.jours} jours)</span>
            <span className="text-xl font-bold text-emerald-400">{devis.prixDev.toLocaleString('fr-FR')} €</span>
          </div>
          {devis.prixHebergement > 0 && (
            <div className="flex justify-between items-center py-3 border-b border-gray-700">
              <span className="text-gray-300">Hébergement /an</span>
              <span className="text-xl font-bold text-emerald-400">{devis.prixHebergement} €/an</span>
            </div>
          )}
          {devis.prixMaintenance > 0 && (
            <div className="flex justify-between items-center py-3 border-b border-gray-700">
              <span className="text-gray-300">Maintenance /an</span>
              <span className="text-xl font-bold text-emerald-400">{devis.prixMaintenance} €/an</span>
            </div>
          )}
        </div>
        <p className="text-sm text-gray-400 text-center mb-6">Cette estimation est indicative.</p>
        {!showContact ? (
          <div className="space-y-3">
            <button onClick={() => setShowContact(true)} className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition">💾 Sauvegarder mon devis</button>
            <a href={tarifsConfig.calendly_url} target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg text-center transition">📅 Prendre RDV (15 min)</a>
            <button onClick={() => { setShowResult(false); setStep(1) }} className="w-full py-3 text-gray-400 hover:text-white transition">← Modifier mon devis</button>
          </div>
        ) : (
          <div className="space-y-4">
            <input type="email" placeholder="Votre email" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none" />
            <input type="tel" placeholder="Téléphone (optionnel)" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none" />
            <textarea placeholder="Message (optionnel)" rows={3} className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none resize-none" />
            <button className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition">Envoyer ma demande</button>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
      <div className="flex gap-2 mb-8">
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className={`h-2 flex-1 rounded-full transition-colors ${i <= step ? 'bg-emerald-500' : 'bg-gray-700'}`} />
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-white">Combien de salariés ?</h2>
          <div className="space-y-3">
            {Object.entries(tarifsConfig.base).map(([key, value]) => (
              <label key={key} className={`flex items-center p-4 rounded-lg border cursor-pointer transition ${formData.effectif === key ? 'border-emerald-500 bg-emerald-500/10' : 'border-gray-700 hover:border-gray-600'}`}>
                <input type="radio" name="effectif" value={key} checked={formData.effectif === key} onChange={e => setFormData(prev => ({ ...prev, effectif: e.target.value }))} className="sr-only" />
                <span className="text-white">{value.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-white">Types de provisions ?</h2>
          <div className="space-y-3">
            {Object.entries(tarifsConfig.provisions).map(([key, value]) => (
              <label key={key} className={`flex items-center p-4 rounded-lg border cursor-pointer transition ${formData.provisions.includes(key) ? 'border-emerald-500 bg-emerald-500/10' : 'border-gray-700 hover:border-gray-600'}`}>
                <input type="checkbox" checked={formData.provisions.includes(key)} onChange={() => handleCheckbox('provisions', key)} className="sr-only" />
                <span className="text-white">{value.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-white">Options supplémentaires ?</h2>
          <div className="space-y-3">
            {Object.entries(tarifsConfig.options).map(([key, value]) => (
              <label key={key} className={`flex items-center p-4 rounded-lg border cursor-pointer transition ${formData.options.includes(key) ? 'border-emerald-500 bg-emerald-500/10' : 'border-gray-700 hover:border-gray-600'}`}>
                <input type="checkbox" checked={formData.options.includes(key)} onChange={() => handleCheckbox('options', key)} className="sr-only" />
                <span className="text-white">{value.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-white">Hébergement ?</h2>
          <div className="space-y-3">
            {Object.entries(tarifsConfig.hebergement).map(([key, value]) => (
              <label key={key} className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition ${formData.hebergement === key ? 'border-emerald-500 bg-emerald-500/10' : 'border-gray-700 hover:border-gray-600'}`}>
                <input type="radio" name="hebergement" value={key} checked={formData.hebergement === key} onChange={e => setFormData(prev => ({ ...prev, hebergement: e.target.value }))} className="sr-only" />
                <span className="text-white">{value.label}</span>
                <span className="text-emerald-400 font-semibold">{value.prix_annuel === 0 ? 'Gratuit' : `${value.prix_annuel} €/an`}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-white">Maintenance ?</h2>
          <div className="space-y-3">
            {Object.entries(tarifsConfig.maintenance).map(([key, value]) => (
              <label key={key} className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition ${formData.maintenance === key ? 'border-emerald-500 bg-emerald-500/10' : 'border-gray-700 hover:border-gray-600'}`}>
                <input type="radio" name="maintenance" value={key} checked={formData.maintenance === key} onChange={e => setFormData(prev => ({ ...prev, maintenance: e.target.value }))} className="sr-only" />
                <span className="text-white">{value.label}</span>
                <span className="text-emerald-400 font-semibold">{value.prix_annuel === 0 ? 'Gratuit' : `${value.prix_annuel} €/an`}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-between mt-8">
        {step > 1 ? <button onClick={prevStep} className="px-6 py-2 text-gray-400 hover:text-white transition">← Retour</button> : <div />}
        {step < 5 ? (
          <button onClick={nextStep} disabled={step === 1 && !formData.effectif} className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition">Suivant →</button>
        ) : (
          <button onClick={() => setShowResult(true)} disabled={!formData.hebergement || !formData.maintenance} className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition">Voir mon devis</button>
        )}
      </div>
    </div>
  )
}
