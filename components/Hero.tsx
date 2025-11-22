import Image from 'next/image';
import CustomIcon from './CustomIcon';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">Disponible pour missions</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Dev Fullstack
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                & PMO
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-4 font-medium">
              Je traduis vos enjeux métier en applications qui fonctionnent
            </p>

            <p className="text-lg text-blue-200 mb-8">
              <span className="font-semibold text-white">React • Next.js • Node.js</span>
              <br />
              Fintech · Banking · Legaltech
              <br />
              <span className="text-orange-400">Expérience Banking & SI</span> · 11 ans d'expérience
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-orange-400">11+</div>
                <div className="text-xs md:text-sm text-blue-200">ans XP</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">400€</div>
                <div className="text-xs md:text-sm text-blue-200">TJM</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-green-400">7-14j</div>
                <div className="text-xs md:text-sm text-blue-200">MVP</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/contact" 
                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center"
              >
                <span className="inline-flex items-center gap-2">
                  Discutons de votre projet
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </a>
              <a 
                href="/services" 
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all text-center border border-white/30 backdrop-blur-sm"
              >
                Voir mon expertise
              </a>
            </div>
          </div>

          <div className="flex justify-center relative">
            <div className="relative">
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <Image
                  src="/images/herve-hero.jpg"
                  alt="Hervé De Quélen - Développeur Fullstack & PMO"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="absolute -left-4 top-1/4 bg-gradient-to-br from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform">
                <div className="text-xs font-semibold opacity-80">DÉVELOPPEUR</div>
                <div className="text-lg font-bold">Fullstack</div>
              </div>

              <div className="absolute -right-4 bottom-1/4 bg-gradient-to-br from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform">
                <div className="text-xs font-semibold opacity-80">PILOTAGE</div>
                <div className="text-lg font-bold">PMO / BA</div>
              </div>

              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full shadow-2xl flex items-center gap-2">
                <CustomIcon name="building" className="w-5 h-5" />
                <div className="text-sm font-bold">Banking & SI</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
        </svg>
      </div>
    </section>
  );
}
