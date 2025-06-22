import ProjectCard from "./ProjectCard"
import projectData from "../data/ProjectData"
function ProjectSection() {
  return (
    <div className="my-30 px-[80px]">
        <div className="font-montserrat font-semibold text-[38px]">
            Project
        </div>
        {projectData.map((project, index) => (
        <>
        <hr className="text-[rgb(253,202,34)]"/>
        <ProjectCard
          key={index}
          image={project.image}
          title={project.title}
          description={project.description}
          tags={project.tags}
        /></>
      ))}
        <ProjectCard/>
    </div>
  )
}

export default ProjectSection