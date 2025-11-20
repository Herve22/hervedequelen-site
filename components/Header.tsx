import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-primary hover:text-primary-light transition-colors">
            Hervé De Quélen
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/a-propos" className="text-neutral-700 hover:text-primary transition-colors">
              À propos
            </Link>
            <Link href="/portfolio" className="text-neutral-700 hover:text-primary transition-colors">
              Portfolio
            </Link>
            <Link href="/services" className="text-neutral-700 hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/contact" className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent-dark transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
