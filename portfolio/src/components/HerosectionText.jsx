import ButtonLetsTalk from "./ButtonLetsTalk";
import { FaChevronDown } from "react-icons/fa"; // For down arrow

export default function HerosectionText() {
  return (
    <div className="select-none relative z-10 flex flex-col items-center justify-center h-screen text-left px-4 sm:px-10 md:px-20 text-white">
      {/* Greeting + Hero Text */}
      <div className=" sm:text-left">
        <p className="font-luxurias-caveat text-yellow-400 text-base sm:text-lg md:text-xl lg:text-3xl mb-2">
          Hi, I'm Krish
        </p>

        <p className="font-montserrat font-bold text-[18px] sm:text-2xl md:text-3xl lg:text-4xl max-w-3xl mb-4 leading-snug">
          Transforming ideas into secure, web solutions. Empowering innovation through code, AI, and trust.
        </p>

        <p className="font-luxurias-roman italic text-sm sm:text-base md:text-[16px] lg:text-lg text-gray-300 mb-6">
          ~Let’s create something meaningful - smart, secure, and scalable.
        </p>

        <a href="mailto:krishjp2538@gmail.com">
          <ButtonLetsTalk />
        </a>
      </div>

      {/* Scroll Down Arrow — Only on sm */}
      <div className="absolute bottom-8 sm:hidden animate-bounce text-yellow-400 mt-8">
        <FaChevronDown size={24} />
      </div>
    </div>
  );
}
