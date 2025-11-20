export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-xl font-bold mb-4">Hervé De Quélen</h3>
            <p className="text-neutral-200">
              Développeur Fullstack · Ex-Business Analyst
            </p>
            <p className="text-neutral-200 mt-2">
              Fintech · Banking · Solutions métier
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-neutral-200">
              <li>
                <a href="mailto:contact@hervedequelen.fr" className="hover:text-accent">
                  contact@hervedequelen.fr
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/herv%C3%A9-de-quelen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.malt.fr/profile/hervedequelen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  Malt
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <p className="text-neutral-200">
              Développement d’applications métier<br />
              Accompagnement technique<br />
              Prototypage rapide
            </p>
          </div>

        </div>

        <div className="border-t border-neutral-600 mt-8 pt-8 text-center text-neutral-300">
          <p>&copy; 2025 Hervé De Quélen. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
