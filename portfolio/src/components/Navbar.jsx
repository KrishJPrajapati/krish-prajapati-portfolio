import React, { useEffect, useRef, useState } from 'react';
import ButtonLetsTalk from './ButtonLetsTalk';
import { HiMenu, HiX } from 'react-icons/hi'; // Hamburger icons

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
      className={`select-none relative overflow-hidden cursor-pointer ${className}`}
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 py-4 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-white/10 border-b text-black border-white/20'
          : 'bg-transparent text-white'
      }`}
    >
      {/* Logo */}
      <a href="#">
        <GlowText className="font-anta text-[18px]">KRISH PRAJAPATI</GlowText>
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        <ul className="flex space-x-6 font-poppins text-[16px]">
          <li><a href="#Skills"><GlowText>Skills</GlowText></a></li>
          <li><a href="#Work"><GlowText>Work</GlowText></a></li>
          <li><a href="#About"><GlowText>About</GlowText></a></li>
        </ul>
        <a href="mailto:krishjp2538@gmail.com">
          <ButtonLetsTalk />
        </a>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl focus:outline-none">
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
        {menuOpen && (
        <div className="absolute top-full left-0 w-full md:hidden px-6 py-4 flex flex-col gap-4
                        bg-white/10 backdrop-blur-md rounded-b-lg shadow-lg border-t border-white/20 z-40">
          <a href="#Skills" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300 transition">Skills</a>
          <a href="#Work" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300 transition">Work</a>
          <a href="#About" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300 transition">About</a>
          <a href="mailto:krishjp2538@gmail.com" onClick={() => setMenuOpen(false)}>
            <ButtonLetsTalk />
          </a>
  </div>
)}

    </div>
  );
}

export default Navbar;
