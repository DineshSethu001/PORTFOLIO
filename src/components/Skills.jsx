import React, { useEffect } from 'react';
import { skillsWithColors } from '../assets/assets';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';


export default function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      offset: 80,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <section
      id="skills"
      className="w-full text-gray-800 py-16 px-4 md:px-12 bg-gradient-to-b from-[#f6f5ee] to-[#e9dfc3]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4 tracking-wide">
          <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-500 text-transparent bg-clip-text">
            My <span className="text-[#393e46]">Skills</span>
          </span>
        </h2>
        <p className="mb-10 text-base md:text-lg text-gray-600 font-semibold">
          <Typewriter
            options={{
              strings: "Technologies and tools I specialize in for crafting high-quality, performant applications.",
              autoStart: true
            }} />

        </p>

        <div
          className="flex flex-wrap justify-center items-center gap-4 md:gap-6"
          data-aos="zoom-in-up"
        >


          {skillsWithColors.map((skill, idx) => (
            <div
              key={idx}
              data-aos={idx % 3 === 0 ? 'fade-up-right' : idx % 3 === 1 ? 'fade-up' : 'fade-up-left'}
              className={`relative px-5 py-3 rounded-2xl shadow-lg hover:shadow-2xl transition-all border 
                cursor-pointer min-w-[120px] flex items-center gap-2 
                hover:-translate-y-2 hover:scale-105 duration-300
                group`}

            >

              <span
                className={`px-3 py-1 rounded-full ${skill.color}`}

              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
