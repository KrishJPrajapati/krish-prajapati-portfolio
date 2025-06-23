import React from "react";

function ProjectCard({ image, title, desc, tags }) {
  return (
    <div className="flex flex-col lg:flex-row gap-10 py-10">
      {/* Image Section */}
      <div className="w-full lg:w-[400px] flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover rounded-lg grayscale hover:grayscale-0 transition duration-300"
        />
      </div>

      {/* Text + Tags Section */}
      <div className="flex flex-col justify-between gap-4 w-full">
        {/* Title */}
        <div className="text-[22px] sm:text-[24px] md:text-[26px] font-montserrat font-bold">
          {title}
        </div>

        {/* Description */}
        <div className="text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed font-semibold font-montserrat text-justify text-gray-300">
          {desc}
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {tags?.map((tech, index) => (
            <span
              key={index}
              className="bg-black text-yellow-300 px-4 py-1 rounded-full text-[12px] sm:text-[13px] md:text-[14px] font-semibold"
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
