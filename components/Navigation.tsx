'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary">
              Hervé de Quelen
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/a-propos" className="text-gray-700 hover:text-primary font-medium">
              À propos
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-primary font-medium">
              Portfolio
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary font-medium">
              Services
            </Link>
            <Link href="/contact" className="bg-accent hover:bg-accent-dark text-white px-6 py-2 rounded-lg font-semibold">
              Contact
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link href="/a-propos" className="block py-2 text-gray-700 hover:text-primary">
              À propos
            </Link>
            <Link href="/portfolio" className="block py-2 text-gray-700 hover:text-primary">
              Portfolio
            </Link>
            <Link href="/services" className="block py-2 text-gray-700 hover:text-primary">
              Services
            </Link>
            <Link href="/contact" className="block py-2 text-accent hover:text-accent-dark font-semibold">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
