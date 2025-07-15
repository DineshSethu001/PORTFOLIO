import React, { useState } from 'react';
import logo from '../assets/img/final logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle Menu function
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-[#E9DFC3] w-full shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 md:px-8 flex justify-between items-center h-16">
        <div className="left_side flex items-center space-x-4">
          <a>
            <img src={logo} alt="logo" className="w-16 h-16" />
          </a>
          <div className="header-text text-xl font-bold text-[#393E46] tracking-widest">
            Dinesh Thanigaivel
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-6 text-gray-700 text-sm font-medium">
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none flex flex-col justify-center items-center space-y-2">
            <div className="w-6 h-1 bg-gray-700"></div>
            <div className="w-6 h-1 bg-gray-700"></div>
            <div className="w-6 h-1 bg-gray-700"></div>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation (Toggle visibility) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <ul className="flex flex-col items-center gap-4">
            <li><a href="#about" className="text-gray-700 hover:text-blue-600">About</a></li>
            <li><a href="#skills" className="text-gray-700 hover:text-blue-600">Skills</a></li>
            <li><a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
