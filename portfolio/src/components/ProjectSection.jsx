import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "../data/ProjectData";

function ProjectSection() {
  return (
    <div className="my-30 px-[80px]">
      <div className="font-montserrat font-semibold text-[38px] mb-10">
        Project
      </div>

      {projectData.map((project, index) => (
        <div key={index}>
          <hr className="text-[rgb(253,202,34)] mb-10" />
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
