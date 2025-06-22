import React, { useRef, useState } from 'react';

function ButtonLetsTalk() {
  const btnRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btnRef.current.style.setProperty('--x', `${x}px`);
    btnRef.current.style.setProperty('--y', `${y}px`);
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group overflow-hidden px-6 py-2 text-white border-2 border-white rounded-[12px] font-luxurias-roman bg-black transition duration-300"
    >
      <span className="relative z-10 pointer-events-none">Let's Talk</span>

      {/* Glow effect div */}
      <div
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(50px circle at var(--x, 50%) var(--y, 50%), rgba(253,202,34,0.45), transparent 90%)`,
        }}
      />
    </button>
  );
}

export default ButtonLetsTalk;
