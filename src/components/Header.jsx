import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import logo from '../assets/img/final logo.png';
import { Link ,NavLink} from 'react-router-dom';

// Navigation Links
const navItems = [
  { label: 'Home', to:'/' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
{ label: "Blog", href: "https://blog-app-mern-phi.vercel.app" }
];

// Reusable NavLinks component
const NavLinks = ({ className = '' }) => (
  <ul className={`gap-6 text-gray-700 text-sm font-medium ${className}`}>
   {/* {navItems.map((item) => (
  <NavLink key={item.to} to={item.to}>
    <li className="hover:text-blue-600">
      {item.label}
    </li>
  </NavLink>
))} */}

{navItems.map((item, index) =>
  item.href ? (
    <a
      key={index}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {item.label}
    </a>
  ) : (
    <Link key={index} to={item.to}>
      {item.label}
    </Link>
  )
)}


  </ul>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
    <header className="bg-[#E9DFC3] w-full shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 md:px-8 flex justify-between items-center h-16">
        {/* Logo + Name */}
        <div className="flex items-center space-x-4">
          <a href="/">
            <img src={logo} alt="logo" className="w-16 h-16" />
          </a>
          <div className="text-xl font-bold text-[#393E46] tracking-widest">
            <Typewriter
              options={{
                strings: ['Dinesh Thanigaivel'],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 75,
                pauseFor: 5000,
              }}
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavLinks className="flex" />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="space-y-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-6 h-1 bg-gray-700"></div>
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <NavLinks className="flex flex-col items-center gap-4" />
        </div>
      )}
    </header>
    </>
  );
}
