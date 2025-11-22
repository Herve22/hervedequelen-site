'use client';

import { useState } from 'react';
import CustomIcon from '@/components/CustomIcon';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Erreur lors de l\'envoi du message 😕');
      }
    } catch (err) {
      console.error(err);
      alert('Impossible d\'envoyer le message !');
    }

    setLoading(false);
  };

  return (
    <div className="bg-gray-50">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-2 h-12 bg-orange-500 rounded-full"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Contact</h1>
          </div>
          <p className="text-xl md:text-2xl text-blue-100 ml-6">
            Discutons de votre projet ensemble
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Parlons de votre projet
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Vous avez un projet de développement ou besoin d'un PMO pour piloter vos projets IT ? 
                Je serais ravi d'échanger avec vous pour voir comment je peux vous aider.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md">
                  <div className="text-3xl">📧</div>
                  <div>
                    <h3 className="font-bold text-blue-900 mb-1">Email</h3>
                    <a 
                      href="mailto:contact@hervedequelen.fr" 
                      className="text-orange-600 hover:text-orange-700 font-semibold"
                    >
                      contact@hervedequelen.fr
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h3 className="font-bold text-blue-900 mb-1">Localisation</h3>
                    <p className="text-gray-700">Brest, Bretagne</p>
                    <p className="text-sm text-gray-600">Remote partout en France</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md">
                  <div className="text-3xl">💼</div>
                  <div>
                    <h3 className="font-bold text-blue-900 mb-1">Disponibilité</h3>
                    <p className="text-gray-700">Disponible pour missions</p>
                    <p className="text-sm text-gray-600">TJM : 400€ (missions longues)</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-100">
                <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <CustomIcon name="zap" className="w-6 h-6" />
                  Délais de réponse
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Première réponse sous 24h</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Devis détaillé sous 48h</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Premier échange gratuit</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Envoyez-moi un message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="votre@email.fr"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                      placeholder="Décrivez votre projet..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Envoi en cours...' : 'Envoyer le message →'}
                  </button>

                  {success && (
                    <div className="bg-green-50 border-2 border-green-200 text-green-800 font-semibold p-4 rounded-lg text-center">
                      <span className="text-2xl mr-2">🎉</span>
                      Message envoyé avec succès ! Je vous réponds sous 24h.
                    </div>
                  )}
                </form>
              </div>

              <p className="text-sm text-gray-500 mt-4 text-center">
                Vos données sont utilisées uniquement pour vous répondre et ne sont jamais partagées.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Questions fréquentes
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border-2 border-blue-100">
              <h3 className="font-bold text-blue-900 mb-2">Quel est votre TJM ?</h3>
              <p className="text-gray-700">400€/jour pour les missions longues (1 mois+). Tarifs projet disponibles sur demande.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border-2 border-blue-100">
              <h3 className="font-bold text-blue-900 mb-2">Quels types de projets acceptez-vous ?</h3>
              <p className="text-gray-700">Développement fullstack (React/Next.js/Node.js) et missions PMO/Business Analyst. Fintech, legaltech, CHR, associatif.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border-2 border-blue-100">
              <h3 className="font-bold text-blue-900 mb-2">Travaillez-vous en remote ?</h3>
              <p className="text-gray-700">Oui, 100% remote possible partout en France. Déplacements ponctuels à Brest et région OK.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border-2 border-blue-100">
              <h3 className="font-bold text-blue-900 mb-2">Quel est le délai pour un MVP ?</h3>
              <p className="text-gray-700">Entre 7 et 14 jours selon la complexité. Je livre vite et bien grâce à ma stack moderne.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à démarrer ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Premier échange gratuit pour discuter de votre projet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:contact@hervedequelen.fr" 
              className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              M'envoyer un email
            </a>
            <a 
              href="/services" 
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all border border-white/30"
            >
              Voir mes services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
