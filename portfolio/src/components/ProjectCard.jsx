import React from "react";

function ProjectCard({ image, title, desc, tags }) {
  return (
    <div className="flex flex-col md:flex-row md:gap-20 py-10">
      {/* Image Section */}
      <div className="w-full  md:max-w-[400px]">
        <img
          src={image}
          alt={title}
          className="rounded-lg grayscale hover:grayscale-0 transition duration-300 w-full h-auto object-cover"
        />
      </div>

      {/* Text + Tags Section */}
      <div className="flex flex-col justify-between min-h-[300px] max-w-xl gap-4">
        {/* Title */}
        <div className="text-2xl font-montserrat font-bold">{title}</div>

        {/* Description */}
        <div className="text-[14px] leading-relaxed font-semibold font-montserrat text-justify">{desc}</div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {Array.isArray(tags) &&
            tags.map((tech, index) => (
              <span
                key={index}
                className="bg-black text-yellow-300 px-4 py-1 rounded-full text-sm font-semibold"
              >
                {tech}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
