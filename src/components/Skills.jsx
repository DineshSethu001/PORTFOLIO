import React from 'react';
import {skillsWithColors}  from '../assets/assets'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Skills() {

    useEffect(() => {
      AOS.init({
        duration: 1000,  // animation duration in ms
        once: false       // whether animation should happen only once
      });
    }, []);
  

  return (
    <section id="skills" className="skill w-full text-gray-800 py-12 px-4 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">My Skills</h2>
        <p className="mb-8 text-sm md:text-base">
          Here are some of the technologies and tools I work with:
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {skillsWithColors.map((skill, index) => (
            <span
              key={index}
              data-aos={index % 2 === 0 ? 'fade-up-right' : 'fade-up-left'}
              className={`px-4 py-2 rounded shadow-sm transition hover:scale-105 ${skill.color}`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
