import ButtonLetsTalk from "./ButtonLetsTalk";

export default function HerosectionText() {
    return (
        <div className="select-none relative z-10 flex flex-col items-center justify-center h-screen text-left px-50 text-white">
            {/* Greeting Text */}
            <div>
                    <p className="font-luxurias-caveat text-yellow-400 text-xl md:text-3xl mb-2">
                    Hi, I'm Krish
                    </p>

                    {/* Main Hero Text */}
                    <p className="font-montserrat font-bold text-2xl md:text-4xl max-w-3xl mb-4 leading-snug">
                        Transforming ideas into secure,  web solutions. Empowering innovation through code, AI, and  trust.
                    </p>

                    {/* Sub Text */}
                    <p className="font-luxurias-roman italic text-base md:text-lg text-gray-300 mb-6">
                        ~Let’s create something meaningful - smart, secure, and scalable.
                    </p>

                    {/* Button */}
                    <ButtonLetsTalk />
            </div>
        </div>
    );
}
