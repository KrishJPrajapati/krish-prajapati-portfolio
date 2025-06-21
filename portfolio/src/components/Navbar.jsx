import React from 'react';
import ButtonLetsTalk from './ButtonLetsTalk';

function Navbar() {
  return (
    <div className="bg-black flex justify-between items-center px-10 py-4">
      {/* Left Side: Name */}
      <div className="font-anta text-white text-[18px] cursor-pointer">
        KRISH PRAJAPATI
      </div>

      {/* Right Side: Menu + Button */}
      <div className="flex items-center space-x-8">
        <ul className="flex space-x-6 text-white font-poppins text-[16px] cursor-pointer">
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
