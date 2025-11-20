'use client';

import { useEffect, useRef, useState } from 'react';

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '10+', label: 'Années XP' },
    { value: '85%+', label: 'Tests coverage' },
    { value: '7-14j', label: 'MVP livré' },
    { value: '400€', label: 'TJM' }
  ];

  const services = [
    {
      icon: "🚀",
      title: "Prototypage rapide",
      description: "MVP fonctionnel en 7-14 jours",
      popular: true,
      details: [
        "Analyse de vos besoins en 1-2 jours",
        "Maquettes et validation rapide",
        "Développement itératif",
        "Livraison d'un prototype fonctionnel",
        "Base solide pour évolution future"
      ]
    },
    {
      icon: "💻",
      title: "Développement fullstack",
      description: "Applications web complètes et modernes",
      popular: true,
      details: [
        "Frontend React / Next.js",
        "Backend Node.js / API REST",
        "Base de données PostgreSQL / SQLite",
        "Interface responsive mobile-first",
        "Déploiement et mise en production"
      ]
    },
    {
      icon: "🎯",
      title: "Business Analysis",
      description: "De l'idée au cahier des charges",
      popular: false,
      details: [
        "Recueil et analyse des besoins",
        "Rédaction de spécifications fonctionnelles",
        "Définition de l'architecture",
        "Estimation et planning",
        "Suivi de projet Agile"
      ]
    },
    {
      icon: "✅",
      title: "Tests & Qualité",
      description: "Code testé et maintenable",
      popular: false,
      details: [
        "Tests E2E avec Playwright",
        "Couverture de tests 85%+",
        "Code review et refactoring",
        "Documentation technique",
        "Maintenance et évolutions"
      ]
    },
    {
      icon: "🏦",
      title: "Solutions Fintech",
      description: "Expertise bancaire et finance",
      popular: false,
      details: [
        "Applications de gestion financière",
        "Tableaux de bord analytics",
        "Conformité réglementaire",
        "Intégrations API bancaires",
        "Sécurité renforcée"
      ]
    },
    {
      icon: "⚖️",
      title: "Solutions métier",
      description: "Applications sur-mesure",
      popular: false,
      details: [
        "Gestion cabinets (avocats, compta...)",
        "Outils RH et paie",
        "Gestion restaurant / CHR",
        "CRM et facturation",
        "Solutions associatives"
      ]
    }
  ];

  return (
    <div className="bg-gray-50">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-2 h-12 bg-orange-500 rounded-full"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Mes services</h1>
          </div>
          <p className="text-xl md:text-2xl text-blue-100 ml-6 mb-12">
            Du conseil à la livraison, je vous accompagne sur toute la chaîne de valeur
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ml-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-400 animate-pulse">{stat.value}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                data-index={index}
                className={`relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg 
                  hover:shadow-2xl hover:-translate-y-2 hover:bg-white/90 
                  transition-all duration-500 ease-out cursor-pointer group
                  ${visibleCards.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {service.popular && (
                  <div className="absolute -top-3 right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Populaire
                  </div>
                )}
                
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 font-semibold">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-700 text-sm flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="/contact" 
                  className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors group-hover:translate-x-1"
                >
                  Demander un devis 
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Ma stack technique
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-900 mb-4 text-lg">Frontend</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• React / Next.js</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Responsive design</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-900 mb-4 text-lg">Backend</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Node.js / Express</li>
                <li>• API REST</li>
                <li>• PostgreSQL / SQLite</li>
                <li>• Prisma ORM</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-blue-900 mb-4 text-lg">DevOps & Tests</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Playwright (tests E2E)</li>
                <li>• Git / GitHub</li>
                <li>• PM2 / Nginx</li>
                <li>• Déploiement VPS</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Comment je travaille
          </h2>
          
          <div className="space-y-6">
            {[
              { num: 1, title: "Échange initial", desc: "Nous discutons de votre projet, vos besoins et vos objectifs. Je vous pose les bonnes questions pour comprendre vos enjeux métier." },
              { num: 2, title: "Proposition & Devis", desc: "Je vous propose une solution adaptée avec estimation détaillée, planning et stack technique recommandée." },
              { num: 3, title: "Développement itératif", desc: "Je développe par sprints courts avec des démos régulières. Vous validez au fur et à mesure, pas de mauvaise surprise." },
              { num: 4, title: "Livraison & Formation", desc: "Je livre votre application avec documentation technique et formation utilisateur. Support post-livraison inclus." }
            ].map((step) => (
              <div key={step.num} className="flex items-start group">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Discutons de vos besoins et je vous propose une solution adaptée
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Demander un devis
          </a>
        </div>
      </section>
    </div>
  );
}
