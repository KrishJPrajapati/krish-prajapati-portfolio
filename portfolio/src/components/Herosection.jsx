import React from 'react';
import HerosectionText from './HerosectionText';

function Herosection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover grayscale"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional overlay for contrast */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Hero Text */}
      <div className="relative z-20">
        <HerosectionText />
      </div>
    </div>
  );
}

export default Herosection;
