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
    { value: '11+', label: 'Années XP' },
    { value: '85%+', label: 'Tests coverage' },
    { value: '7-14j', label: 'MVP livré' },
    { value: '400€', label: 'TJM' }
  ];

  const devProjects = [
    {
      icon: "🍽️",
      title: "RestoDemo",
      category: "Gestion restaurant",
      description: "Interface complète de gestion pour restaurant",
      tech: ["React", "Next.js", "PostgreSQL"],
      features: [
        "Gestion commandes en temps réel",
        "Suivi des tables et réservations",
        "Interface serveur & cuisine",
        "Statistiques et rapports"
      ]
    },
    {
      icon: "🤝",
      title: "Divaskell",
      category: "Gestion bénévolat",
      description: "Plateforme de gestion des bénévoles",
      tech: ["Next.js", "TypeScript", "Prisma"],
      features: [
        "Gestion des missions et plannings",
        "Suivi des bénévoles",
        "Système de matching",
        "Tableau de bord associatif"
      ]
    },
    {
      icon: "📊",
      title: "Maitrea",
      category: "Gestion projets",
      description: "Plateforme de pilotage de projets",
      tech: ["React", "Node.js", "PostgreSQL"],
      features: [
        "Suivi multi-projets",
        "Gestion des tâches et deadlines",
        "Collaboration équipe",
        "Reporting et KPIs"
      ]
    },
    {
      icon: "💰",
      title: "PayAddict",
      category: "Provisions RH",
      description: "Système de calcul de provisions RH",
      tech: ["Next.js", "TypeScript", "API REST"],
      features: [
        "Calculs automatisés de provisions",
        "Tableaux de bord DRH",
        "Export comptable",
        "Conformité réglementaire"
      ]
    }
  ];

  const pmoCompetences = [
    {
      icon: "🎯",
      title: "Pilotage stratégique",
      description: "Coordination de portefeuilles de projets pour aligner objectifs métiers et IT",
      details: [
        "Suivi multi-projets et priorisation",
        "Animation comités de pilotage",
        "Gestion des risques et dépendances",
        "Reporting direction"
      ]
    },
    {
      icon: "📈",
      title: "KPIs & Reporting",
      description: "Analyse de données et transformation en plans d'actions",
      details: [
        "Définition et suivi des KPIs",
        "Tableaux de bord décisionnels",
        "Analyse des écarts",
        "Préparation des comités"
      ]
    },
    {
      icon: "⚙️",
      title: "Process & Outils",
      description: "Mise en place et optimisation des processus méthodologiques",
      details: [
        "Maîtrise JIRA / Confluence",
        "Méthodologies Agile",
        "Cadrage et documentation",
        "Standards et best practices"
      ]
    },
    {
      icon: "👥",
      title: "Animation transverse",
      description: "Communication fluide entre équipes métier et IT",
      details: [
        "Facilitation ateliers",
        "Coordination multi-équipes",
        "Gestion des parties prenantes",
        "Recueil et analyse des besoins"
      ]
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* HEADER */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-2 h-12 bg-orange-500 rounded-full"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Expertise & Services</h1>
          </div>
          <p className="text-xl md:text-2xl text-blue-100 ml-6 mb-12">
            Développeur Fullstack & PMO - Double expertise technique et pilotage
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

      {/* SECTION DÉVELOPPEMENT FULLSTACK */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-2 h-12 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Développement Fullstack
            </h2>
          </div>
          <p className="text-xl text-gray-700 ml-6 mb-12 max-w-4xl">
            Développeur fullstack spécialisé en solutions sur mesure pour la fintech et la legaltech. 
            J'accompagne startups et PME dans la création d'applications web modernes avec React, Next.js et Node.js.
          </p>

          <div className="ml-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-8">Projets réalisés</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {devProjects.map((project, index) => (
                <div
                  key={index}
                  ref={(el) => { cardRefs.current[index] = el; }}
                  data-index={index}
                  className={`relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg 
                    hover:shadow-2xl hover:-translate-y-2 
                    transition-all duration-500 ease-out group
                    ${visibleCards.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-blue-900">{project.title}</h4>
                      <p className="text-sm text-orange-500 font-semibold">{project.category}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-start">
                        <span className="text-orange-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Stack technique */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-blue-900 mb-8">Stack technique</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-blue-900 mb-4 text-lg">Frontend</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• React / Next.js</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS</li>
                    <li>• Responsive design</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-blue-900 mb-4 text-lg">Backend</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Node.js / Express</li>
                    <li>• API REST</li>
                    <li>• PostgreSQL / SQLite</li>
                    <li>• Prisma ORM</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-blue-900 mb-4 text-lg">DevOps & Tests</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Playwright (tests E2E)</li>
                    <li>• Git / GitHub</li>
                    <li>• PM2 / Nginx</li>
                    <li>• Déploiement VPS</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a 
                href="/contact" 
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Discuter d'un projet dev
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION PMO / BUSINESS ANALYST */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-2 h-12 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              PMO / Business Analyst
            </h2>
          </div>
          <p className="text-xl text-gray-700 ml-6 mb-12 max-w-4xl">
            Business Analyst et PMO avec 3 ans d'expérience dans le secteur bancaire. 
            Je pilote des portefeuilles de projets stratégiques, structure les process et anime les équipes transverses.
          </p>

          <div className="ml-6">
            {/* Compétences PMO */}
            <h3 className="text-2xl font-bold text-blue-900 mb-8">Compétences clés</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {pmoCompetences.map((comp, index) => (
                <div
                  key={index}
                  ref={(el) => { cardRefs.current[index + 10] = el; }}
                  data-index={index + 10}
                  className={`bg-white rounded-2xl p-8 border border-gray-100 shadow-lg 
                    hover:shadow-2xl hover:-translate-y-2 
                    transition-all duration-500 ease-out
                    ${visibleCards.has(index + 10) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">{comp.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-blue-900">{comp.title}</h4>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{comp.description}</p>
                  
                  <ul className="space-y-2">
                    {comp.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-start">
                        <span className="text-cyan-500 mr-2">✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a 
                href="/contact" 
                className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Besoin d'un PMO ?
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
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

      {/* CTA FINAL */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Que ce soit pour du développement ou du pilotage de projet, discutons de vos besoins
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
