import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import projectAsset from "./ProjectAsset.js";
import { FcIdea } from "react-icons/fc";
import { TbFileSpark } from "react-icons/tb";



const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#0d1117] rounded-2xl text-[#c9d1d9] min-h-screen py-12 px-6"
    >
        <h2 className="flex items-center justify-center gap-3 text-3xl font-Poppins text-center mb-12 text-[#f0f6fc]">
      <FcIdea />
      My Projects
      <TbFileSpark className="text-[#4FB7B3]" />
    </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectAsset.map((project, index) => (
          <div
            key={index}
            className="bg-[#161b22] border border-[#30363d] rounded-lg shadow-sm hover:shadow-md transition duration-200"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;