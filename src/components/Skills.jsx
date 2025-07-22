import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skillData = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express.js', 'MongoDB'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma'],
};

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 900, offset: 80, once: false });
  }, []);

  return (
    <section
      id="skills"
      className="w-full text-gray-800 py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#f6f5ee] to-[#e9dfc3]"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 sm:mb-6 tracking-wide">
          <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-500 text-transparent bg-clip-text">
            My <span className="text-[#393e46]">Tech Stack</span>
          </span>
        </h2>
        <p className="mb-10 sm:mb-12 text-sm sm:text-base md:text-lg text-gray-600 font-medium">
          These are the technologies I use to build fast, responsive, and
          scalable web applications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-left">
          {Object.entries(skillData).map(([category, skills], idx) => (
            <div key={category} data-aos="fade-up" data-aos-delay={idx * 100}>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-[#393e46] underline underline-offset-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {skills.map((skill, i) => (
                  <li
                    key={i}
                    className="bg-white text-gray-700 px-3 py-2 rounded-lg shadow hover:shadow-md hover:scale-105 transform transition-all duration-300 text-sm sm:text-base"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
