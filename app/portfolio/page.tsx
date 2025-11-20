'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      name: 'RestoDemo',
      status: 'Production',
      statusColor: 'text-green-500',
      description: 'Interface moderne de gestion pour restaurants : planning, réservations, pointeuse, hygiène, stock.',
      technologies: ['Next.js', 'React', 'PostgreSQL'],
      features: ['Planning équipes', 'Réservations', 'Gestion stock', 'Suivi hygiène'],
      image: '/images/restodemo.jpg',
      link: 'https://resto.hervedequelen.fr'
    },
    {
      name: 'Maitrea',
      status: 'Production',
      statusColor: 'text-green-500',
      description: 'Plateforme complète de gestion de projets, facturation et pointage avec dashboard multi-rôles.',
      technologies: ['React', 'Node.js', 'SQLite'],
      features: ['Multi-projets', 'Dashboard', 'Facturation', 'Suivi temps'],
      image: '/images/maitrea.jpg',
      link: '#'
    },
    {
      name: 'PayAddict',
      status: 'Production',
      statusColor: 'text-green-500',
      description: 'Système de provisions RH avec détection automatique et tests Playwright (85%+ couverture).',
      technologies: ['React', 'Node.js', 'Playwright', 'Tests E2E'],
      features: ['Calcul provisions', 'Détection auto', 'Tests E2E', 'Rapports'],
      image: '/images/payaddict.png',
      link: '#'
    },
    {
      name: 'Divaskell',
      status: 'Production',
      statusColor: 'text-green-500',
      description: 'Gestion de bénévoles pour association culturelle bretonne avec QR codes.',
      technologies: ['Node.js', 'SQLite', 'Bootstrap'],
      features: ['Inscription créneaux', 'QR codes', 'Dashboard admin', 'Notifications'],
      image: '/images/divaskell.jpg',
      link: '#'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [projects.length]);

  const goToSlide = (index: number) => setCurrentIndex(index);

  const project = projects[currentIndex];

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-2 h-12 bg-orange-500 rounded-full"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Portfolio</h1>
          </div>
          <p className="text-xl md:text-2xl text-blue-100 ml-6">
            Mes réalisations 2025 - 4 projets complets
          </p>
          
          <div className="flex gap-8 mt-8 ml-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">4</div>
              <div className="text-sm text-blue-200">Projets</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">85%+</div>
              <div className="text-sm text-blue-200">Tests</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">React</div>
              <div className="text-sm text-blue-200">Stack</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="relative">
          <div className="bg-white shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-96 md:h-[650px] bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
              </div>
              
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">{project.name}</h3>
                  <span className={`text-lg font-semibold ${project.statusColor}`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-8 text-lg md:text-xl lg:text-2xl leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-8">
                  <p className="text-base font-semibold text-gray-500 mb-4">Technologies :</p>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-blue-100 text-blue-800 px-5 py-2 rounded-full text-base md:text-lg font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <p className="text-base font-semibold text-gray-500 mb-4">Fonctionnalités :</p>
                  <ul className="grid grid-cols-2 gap-3">
                    {project.features.map((feature) => (
                      <li key={feature} className="text-gray-600 text-base md:text-lg flex items-center">
                        <span className="text-orange-500 mr-2 text-xl">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.link !== '#' && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg w-fit">
                    Voir le projet →
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-orange-500 w-12' : 'bg-gray-300 hover:bg-gray-400 w-4'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
