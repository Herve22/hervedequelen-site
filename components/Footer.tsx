export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-orange-500 rounded-full"></div>
              Hervé De Quélen
            </h3>
            <p className="text-blue-200 mb-2">Développeur Fullstack & PMO</p>
            <p className="text-blue-300 text-sm mb-4">React · Next.js · Node.js</p>
            <div className="flex items-center gap-2 text-blue-200 text-sm">
              <span>📍</span>
              <span>Brest, Bretagne</span>
            </div>
            <p className="text-blue-300 text-xs mt-1 ml-6">Remote partout en France</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-100">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-blue-200 hover:text-orange-400 transition-colors">Accueil</a></li>
              <li><a href="/services" className="text-blue-200 hover:text-orange-400 transition-colors">Services</a></li>
              <li><a href="/portfolio" className="text-blue-200 hover:text-orange-400 transition-colors">Portfolio</a></li>
              <li><a href="/a-propos" className="text-blue-200 hover:text-orange-400 transition-colors">À propos</a></li>
              <li><a href="/contact" className="text-blue-200 hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-100">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contact@hervedequelen.fr" className="text-blue-200 hover:text-orange-400 transition-colors flex items-center gap-2">
                  <span>📧</span>
                  <span className="text-sm">contact@hervedequelen.fr</span>
                </a>
              </li>
              <li className="text-blue-200 text-sm flex items-center gap-2">
                <span>💼</span>
                <span>TJM : 400€</span>
              </li>
              <li className="text-blue-300 text-xs">SIRET : 791 544 661 00055</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-100">Réseaux</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://www.linkedin.com/in/herv%C3%A9-de-quelen/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-orange-400 transition-colors flex items-center gap-2">
                  <span>🔗</span>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://www.malt.fr/profile/hervedequelen" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-orange-400 transition-colors flex items-center gap-2">
                  <span>💼</span>
                  <span>Malt</span>
                </a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-blue-800">
              <h4 className="text-sm font-semibold text-blue-100 mb-2">Expertises</h4>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-blue-800/50 px-2 py-1 rounded-full text-blue-200">Fintech</span>
                <span className="text-xs bg-blue-800/50 px-2 py-1 rounded-full text-blue-200">Banking</span>
                <span className="text-xs bg-blue-800/50 px-2 py-1 rounded-full text-blue-200">Legaltech</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-300 text-sm text-center md:text-left">&copy; 2025 Hervé De Quélen. Tous droits réservés.</p>
            <div className="flex gap-6 text-sm">
              <a href="/mentions-legales" className="text-blue-300 hover:text-orange-400 transition-colors">Mentions légales</a>
              <a href="/politique-confidentialite" className="text-blue-300 hover:text-orange-400 transition-colors">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
