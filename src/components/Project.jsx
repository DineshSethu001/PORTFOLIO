import React from 'react';
import {projects} from '../assets/assets.js'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



export default function Projects() {

  useEffect(() => {
    AOS.init({
      duration: 1000,  // animation duration in ms
      once: false       // whether animation should happen only once
    });
  }, []);

  return (
    <section id="projects" className="w-full  text-gray-900 py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
 {projects.map((project, index) => (
  <div
    key={index}
    className="bg-white rounded-lg shadow hover:shadow-lg transition"
    data-aos={index % 2 === 0 ? 'fade-up-right' : 'zoom-out'}
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover rounded-t-lg"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-sm mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 text-xs mb-4">
        {project.techStack.map((tech, idx) => (
          <span
            key={idx}
            className="bg-blue-100 text-blue-800 px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 font-medium hover:underline"
      >
        View Project →
      </a>
    </div>
  </div>
))}

        </div>
      </div>
    </section>
  );
}
