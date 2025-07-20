import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import Typewriter from 'typewriter-effect';


export default function Footer() {
  return (
    <footer className="bg-[#393E46]  w-full py-6 mt-auto">
      <div className="container mx-auto flex flex-col gap-6 px-4 md:px-8">

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-12 text-sm tracking-wider">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#blog" className="hover:underline">Blog</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>

        {/* Main Footer Section */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">

          {/* Left: Copyright */}
          <p className="text-xl text-center md:text-left">
            <Typewriter 
     
              options={{
                strings: [
                  '© 2025 <span class="text-purple-600  px-1 rounded">D-code</span>. All rights reserved.',
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed:50,
                pauseFor:7000
              }}
            />



          </p>

          {/* Right: Subscription + Socials */}
          <div className="flex flex-col items-center md:items-end gap-4">

            {/* Subscription Form */}
            <form className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>

            {/* Social Icons */}
            <div className="flex gap-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:your@email.com" title="Email" aria-label="Email">
                <MdAlternateEmail size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
