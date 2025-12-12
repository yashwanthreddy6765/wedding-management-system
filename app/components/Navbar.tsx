'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-pink-600 to-purple-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center text-white font-bold text-2xl">
              <span className="text-3xl mr-2">✨</span>
              WedHub
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-white hover:bg-pink-700 px-3 py-2 rounded-md text-sm font-medium transition">
                Home
              </Link>
              <Link href="/dashboard" className="text-white hover:bg-pink-700 px-3 py-2 rounded-md text-sm font-medium transition">
                Dashboard
              </Link>
              <Link href="/guests" className="text-white hover:bg-pink-700 px-3 py-2 rounded-md text-sm font-medium transition">
                Guests
              </Link>
              <Link href="/budget" className="text-white hover:bg-pink-700 px-3 py-2 rounded-md text-sm font-medium transition">
                Budget
              </Link>
              <Link href="/gallery" className="text-white hover:bg-pink-700 px-3 py-2 rounded-md text-sm font-medium transition">
                Gallery
              </Link>
              <Link href="/calendar" className="text-white hover:bg-pink-700 px-3 py-2 rounded-md text-sm font-medium transition">
                Calendar
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-pink-700 transition"
            >
              <span className="text-2xl">{isOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-pink-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-white hover:bg-pink-800 block px-3 py-2 rounded-md text-base font-medium transition">
              Home
            </Link>
            <Link href="/dashboard" className="text-white hover:bg-pink-800 block px-3 py-2 rounded-md text-base font-medium transition">
              Dashboard
            </Link>
            <Link href="/guests" className="text-white hover:bg-pink-800 block px-3 py-2 rounded-md text-base font-medium transition">
              Guests
            </Link>
            <Link href="/budget" className="text-white hover:bg-pink-800 block px-3 py-2 rounded-md text-base font-medium transition">
              Budget
            </Link>
            <Link href="/gallery" className="text-white hover:bg-pink-800 block px-3 py-2 rounded-md text-base font-medium transition">
              Gallery
            </Link>
            <Link href="/calendar" className="text-white hover:bg-pink-800 block px-3 py-2 rounded-md text-base font-medium transition">
              Calendar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
