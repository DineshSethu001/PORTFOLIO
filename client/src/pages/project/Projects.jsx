import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard.jsx";
import projectAsset from "./ProjectAsset.js";
import { FcIdea } from "react-icons/fc";
import { TbFileSpark } from "react-icons/tb";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Calculate Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = projectAsset.slice(indexOfFirstItem, indexOfLastItem);

  // Selected project
  const [selectedProject, setSelectedProject] = useState(currentItems[0]);

  // Whenever page changes → auto-select first project in that page
  useEffect(() => {
    setSelectedProject(currentItems[0]);
  }, [currentPage]);

  // Pagination buttons
  const totalPages = Math.ceil(projectAsset.length / itemsPerPage);
  const pages = [...Array(totalPages).keys()].map((n) => n + 1);

  return (
    <section
      id="projects"
      className="bg-[#A3B087] rounded-xl text-[#c9d1d9] h-[calc(100vh-56px)]
                 py-4 px-8 overflow-y-auto scrollbar-hide"
    >
      {/* Title */}
      <h2 className="flex items-center justify-center gap-3 text-3xl font-Poppins mb-8 text-[#f0f6fc]">
        <FcIdea /> My Projects <TbFileSpark className="text-[#4FB7B3]" />
      </h2>

      {/* Layout */}
      <div className="flex justify-center gap-12 items-center ">

        {/* Project List */}
        <div className="space-y-3 w-60">

          {currentItems.map((project, index) => (
            <div
              key={index}
              className={`px-4 py-2 rounded-lg cursor-pointer transition
                ${
                  selectedProject?.title === project.title
                    ? "bg-[#6A9457] text-[#fffca7] shadow-md"
                    : "bg-[#4C763B] text-[#FFFD8F] hover:bg-[#5b8b49]"
                }`}
              onClick={() => setSelectedProject(project)}
            >
              <p className="border-l border-r border-yellow-200 px-2 text-md">
                {project.title}
              </p>
            </div>
          ))}

          {/* Pagination Buttons */}
          <div className="flex gap-2 mt-4 justify-center">
            {pages.map((num) => (
              <button
                key={num}
                onClick={() => setCurrentPage(num)}
                className={`px-3 py-1 rounded-md border 
                ${currentPage === num ? "bg-[#6A9457]" : "bg-[#4C763B]"}`}
              >
                {num}
              </button>
            ))}
          </div>

        </div>

        {/* Project Card */}
        <div className=" flex-1 flex justify-center items-start">
          {selectedProject && (
            <div className="w-full max-w-xl">
              <ProjectCard project={selectedProject} />
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Projects;
