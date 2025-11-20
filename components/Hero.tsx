import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Je traduis vos enjeux métier en applications qui fonctionnent
            </h1>
            <p className="text-xl text-blue-100 mb-4">
              Développeur Fullstack · Ex-Business Analyst
            </p>
            <p className="text-lg text-blue-200 mb-8">
              React • Next.js • Node.js
              <br />
              Fintech · Banking · Solutions métier
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/contact" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors text-center"
              >
                Discutons de votre projet
              </a>
              <a 
                href="/portfolio" 
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-lg transition-colors text-center border border-white/30"
              >
                Voir mes réalisations
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <Image
                src="/images/herve-hero.jpg"
                alt="Hervé De Quélen - Développeur Fullstack"
                fill
                className="rounded-2xl shadow-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
