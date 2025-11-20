'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  tech: string;
  status: string;
  image: string;
}

const projectDetails: Record<string, { description: string; features: string[] }> = {
  restodemo: {
    description: 'Interface moderne de gestion restaurants',
    features: ['Planning equipe', 'Reservations', 'Pointeuse', 'Suivi HACCP']
  },
  maitrea: {
    description: 'Plateforme gestion projets et facturation',
    features: ['Multi-projets', 'Dashboard', 'Facturation', 'Suivi temps']
  },
  payaddict: {
    description: 'Systeme provisions RH avec tests auto',
    features: ['Detection auto', 'Tests Playwright', 'Gestion RH', 'Alertes']
  },
  divaskell: {
    description: 'Gestion benevoles association bretonne',
    features: ['QR codes', 'Planning', 'Presences', 'Interface simple']
  }
};

export default function PortfolioClient({ projects }: { projects: Project[] }) {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Portfolio</h1>
          <p className="text-xl text-neutral-100">Mes realisations 2025 - 4 projets complets</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const details = projectDetails[project.id];
              return (
                <div
                  key={project.id}
                  className="h-[450px] cursor-pointer"
                  onMouseEnter={() => setFlippedCard(project.id)}
                  onMouseLeave={() => setFlippedCard(null)}
                >
                  <div
                    className="relative w-full h-full transition-transform duration-700"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: flippedCard === project.id ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    }}
                  >
                    <div
                      className="absolute inset-0 bg-white rounded-lg shadow-lg p-6 border border-gray-200"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-xl">
                          {project.title.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                          <p className="text-xs font-semibold text-accent">{project.status}</p>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4 text-sm">{details.description}</p>

                      <div className="mb-4">
                        <p className="text-xs font-semibold text-gray-500 mb-2">Technologies :</p>
                        <p className="text-sm text-gray-600">{project.tech}</p>
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-gray-500 mb-2">Fonctionnalites :</p>
                        <ul className="space-y-1">
                          {details.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600">
                              <span className="text-accent mr-2 mt-0.5">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="absolute bottom-4 right-4 text-gray-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    <div
                      className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-lg shadow-xl overflow-hidden"
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                    >
                      <div className="relative w-full h-full">
                        <Image src={project.image} alt={project.title} fill className="object-contain p-4" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <p className="text-white font-bold text-lg">{project.title}</p>
                        <p className="text-gray-300 text-sm">{project.tech}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Un projet en tete ?</h2>
          <p className="text-xl text-gray-700 mb-8">Discutons de votre besoin</p>
          <a href="/contact" className="inline-block bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors">
            Contactez-moi
          </a>
        </div>
      </section>
    </div>
  );
}
