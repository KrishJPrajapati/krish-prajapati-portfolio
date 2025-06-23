import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "../data/ProjectData";

function ProjectSection() {
  return (
    <div
      id="Work"
      className="scroll-mt-[100px] px-4 sm:px-6 md:px-10 lg:px-[80px] py-20"
    >
      <div className="font-montserrat font-semibold text-[32px] sm:text-[36px] md:text-[38px] mb-10">
        Project
      </div>

      {projectData.map((project, index) => (
        <div key={index}>
          <hr className="border-yellow-300 mb-10" />
          <ProjectCard
            image={project.image}
            title={project.title}
            desc={project.desc}
            tags={project.tags}
          />
        </div>
      ))}
    </div>
  );
}

export default ProjectSection;
