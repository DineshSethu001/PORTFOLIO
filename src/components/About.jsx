import React from 'react';
import myPhoto from '../assets/img/final logo.png'; // Replace with your image path

export default function AboutMe() {
  return (
    <section id="about" className=" w-full bg-white text-gray-800 py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Profile Photo */}
        <div className="w-45 h-40 md:w-56 md:h-56 rounded overflow-hidden shadow-lg">
          <img
            src={myPhoto}
            alt="Your Name"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bio & Skills */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-base leading-relaxed mb-4">
            I'm a passionate frontend developer with a background in Computer Science. 
            I enjoy building clean, user-focused web applications and love exploring new technologies.
          </p>
          <p className="text-base leading-relaxed mb-6">
            I’m particularly interested in React.js, UI/UX design, and creating intuitive user experiences.
          </p>

          {/* Key Skills */}
          <h3 className="text-xl font-semibold mb-2">Key Skills</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Responsive Web Design</li>
            <li>Component-based Development</li>
            <li>Version Control (Git)</li>
            <li>Cross-browser Compatibility</li>
          </ul>

          {/* Tech Stack */}
          <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded">HTML</span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded">CSS</span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded">JavaScript</span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded">React</span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded">Tailwind CSS</span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded">Git</span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded">MERN</span>
          </div>
        </div>
      </div>
    </section>
  );
}
