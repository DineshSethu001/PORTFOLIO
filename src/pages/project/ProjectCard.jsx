import React from "react";
import { ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative rounded-2xl outline-none border-none shadow-md hover:shadow-lg transition-all duration-300 bg-white overflow-hidden">
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-2xl"
      />

      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-gray-600 text-sm mt-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((t, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs"
            >
              {t.name ? (
                <span className="flex items-center gap-1">
                  <t.icon className={`${t.color} text-sm`} /> {t.name}
                </span>
              ) : (
                t
              )}
            </span>
          ))}
        </div>

        {/* Source Code (GitHub Theme) */}
        {project.code && (
          <a
            href={project.code}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block bg-[#24292f] text-white px-3 py-1 rounded-md text-sm 
                       transition hover:bg-[#1b1f23]"
          >
            Source Code
          </a>
        )}
      </div>

      {/* Live Demo (Netlify Theme) */}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-3 right-3 bg-gradient-to-r from-[#00c7b7] to-[#00aaff] 
                     text-white px-3 py-1 rounded-md text-sm flex items-center gap-1
                     shadow-md transition hover:opacity-90"
        >
          Live Demo <ExternalLink className="h-4 w-4" />
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
