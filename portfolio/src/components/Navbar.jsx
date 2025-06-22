import React, { useEffect, useState } from 'react';
import ButtonLetsTalk from './ButtonLetsTalk';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > window.innerHeight * 0.8); // toggle near end of hero
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
      <div className="font-anta text-[18px] cursor-pointer">
        KRISH PRAJAPATI
      </div>

      {/* Right Side: Menu + Button */}
      <div className="flex items-center space-x-8">
        <ul className="flex space-x-6 font-poppins text-[16px] cursor-pointer">
          <li>Skills</li>
          <li>Work</li>
          <li>About</li>
        </ul>
        <ButtonLetsTalk />
      </div>
    </div>
  );
}

export default Navbar;
