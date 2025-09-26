import React, { useEffect } from "react";
import { projects } from "../assets/assets.js";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section id="projects" className="flex ">
      <h2>Projects</h2>

      {projects.map((project, index) => (
        <div key={index} data-aos={index % 2 === 0 ? "fade-up-right" : "zoom-out"}>
          <img src={project.image} alt={project.title} />

          <h3>{project.title}</h3>
          <p>{project.description}</p>

          <div>
            {project.techStack.map((tech, idx) => (
              <span key={idx}>{tech}</span>
            ))}
          </div>

          <a href={project.link} target="_blank" rel="noreferrer">
            View Project →
          </a>
        </div>
      ))}
    </section>
  );
}
