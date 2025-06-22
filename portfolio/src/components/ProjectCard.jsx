import React from "react";

function ProjectCard({ image, title, desc, tags }) {
  return (
    <div className="flex flex-col md:flex-row gap-8 py-10">
      {/* Image Section */}
      <div className="max-w-[400px]">
        <img
          src={image}
          alt={title}
          className="rounded-lg grayscale hover:grayscale-0 transition duration-300 w-full"
        />
      </div>

      {/* Text + Tags */}
      <div className="flex flex-col justify-center max-w-xl">
        <div className="text-2xl font-bold mb-3">{title}</div>
        <div className="text-gray-300 mb-4">{desc}</div>
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
