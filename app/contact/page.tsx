"use client";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Erreur lors de l’envoi du message 😕");
      }
    } catch (err) {
      console.error(err);
      alert("Impossible d’envoyer le message !");
    }

    setLoading(false);
  };

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contactez-moi
          </h1>
          <p className="text-xl text-neutral-100">
            Discutons de votre projet ensemble
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Parlons de votre projet
              </h2>
              <p className="text-gray-700 mb-8">
                Vous avez un projet ? Je serais ravi d'échanger avec vous pour voir comment 
                je peux vous aider.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📧</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email</h3>
                    <a href="mailto:contact@hervedequelen.fr" className="text-accent hover:text-accent-dark">
                      contact@hervedequelen.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-2xl mr-4">📍</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Localisation</h3>
                    <p className="text-gray-700">Brest, Bretagne</p>
                    <p className="text-gray-600 text-sm">Disponible en remote partout en France</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-3 rounded-lg"
                >
                  {loading ? "Envoi en cours..." : "Envoyer"}
                </button>

                {success && (
                  <p className="text-green-600 font-semibold mt-4">
                    🎉 Message envoyé avec succès !
                  </p>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
