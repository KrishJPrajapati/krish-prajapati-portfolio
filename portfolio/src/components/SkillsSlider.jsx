import React, { useEffect, useRef } from 'react';

const skills = [
  { name: 'React.js', photo: '/skills/react.svg' },
  { name: 'Express.js', photo: '/skills/express.svg' },
  { name: 'Figma', photo: '/skills/figma.svg' },
  { name: 'Javascript', photo: '/skills/js.svg' },
  { name: 'Python', photo: '/skills/python.svg' },
  { name: 'Tailwind', photo: '/skills/tailwind.svg' },
  { name: 'SQL', photo: '/skills/sql.svg' },
  { name: 'ML', photo: '/skills/artificial.svg' },
  { name: 'Google Cloud', photo: '/skills/gcp.svg' },
  // { name: 'BurpSuite', photo: '/skills/burpsuite.png' },
  // { name: 'Wireshark', photo: '/skills/wireshark.svg' },
  { name: 'GitHub', photo: '/skills/github.svg' },
  { name: 'Linux', photo: '/skills/linux.svg' },
];

export default function SkillsSlider() {
  const trackRef = useRef(null);
  const x = useRef(0);
  const speedRef = useRef(0.8); 

  useEffect(() => {
    const animate = () => {
      if (trackRef.current) {
        x.current -= speedRef.current;
        const width = trackRef.current.scrollWidth / 2;
        if (Math.abs(x.current) >= width) {
          x.current = 0;
        }
        trackRef.current.style.transform = `translateX(${x.current}px)`;
      }
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div
    id='Skills'
      className="bg-black scroll-mt-[100px] pt-[100px] py-10 overflow-hidden text-white"
      onMouseEnter={() => (speedRef.current = 0.5)} 
      onMouseLeave={() => (speedRef.current = 0.8)} 
      // onLoad={() => (speedRef.current = 0.8)} 
    >
      <div ref={trackRef} className="flex w-max gap-10">
        {[...skills, ...skills].map((skill, i) => (
          <div key={i} className="flex items-center gap-10">
            <img
              src={skill.photo}
              alt={skill.name}
              className="w-16 h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
            <span className="font-semibold font-poppins md:text-3xl">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
