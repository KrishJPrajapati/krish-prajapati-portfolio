import React, { useEffect, useRef, useState } from 'react';
import ButtonLetsTalk from './ButtonLetsTalk';

function GlowText({ children, className }) {
  const textRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = textRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    textRef.current.style.setProperty('--x', `${x}px`);
    textRef.current.style.setProperty('--y', `${y}px`);
  };

  return (
    <div
      ref={textRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className={`select-none relative overflow-hidden cursor-auto ${className}`}
    >
      <span className="relative z-10 pointer-events-none">{children}</span>
      <div
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(50px circle at var(--x, 50%) var(--y, 50%), rgba(253,202,34,1), transparent 30%)`,
        }}
      />
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-10 py-4 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-white/10 border-b text-black border-white/20'
          : 'bg-transparent text-white'
      }`}
    >
      {/* Left Side: Name */}
      <GlowText className="font-anta text-[18px]">KRISH PRAJAPATI</GlowText>

      {/* Right Side: Menu + Button */}
      <div className="flex items-center space-x-8">
        <ul className="flex space-x-6 font-poppins text-[16px]">
          <li><GlowText>Skills</GlowText></li>
          <li><GlowText>Work</GlowText></li>
          <li><GlowText>About</GlowText></li>
        </ul>
        <ButtonLetsTalk />
      </div>
    </div>
  );
}

export default Navbar;
