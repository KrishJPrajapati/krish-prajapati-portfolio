import ButtonSayHi from './ButtonSayHi';
import { FaTelegram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <div id='About' className='bg-black scroll-mt-[100px] select-none'>
      <div className="bg-black text-white mx-4 sm:mx-10 md:mx-30 px-4 sm:px-6 md:px-20 py-10">
        
        {/* Upper Row: About Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-30 mb-12">
          
          {/* Left: Image + CTA */}
          <div className="flex flex-col items-center gap-4 md:items-start text-center md:text-left">
            <img
              src="/krish.png"
              alt="Krish Prajapati"
              className="w-40 h-40 sm:w-44 sm:h-44 grayscale hover:grayscale-0 object-cover rounded-full mb-4"
            />
            <a href="mailto:krishjp2538@gmail.com?subject=Hi" >
            <ButtonSayHi />
            </a>
            <p className="text-gray-400 mt-4 text-center sm:text-left">
              Got an idea? I’ll help bring it to life.
            </p>
          </div>

          {/* Right: Description */}
          <div className="max-w-2xl text-justify px-2 sm:px-0">
            <h2 className="text-[rgb(253,202,34)] text-xl sm:text-base md:text-xl lg:text-3xl font-anta font-semibold mb-4">
              The Passionate Technologist
            </h2>
            <p className="text-l text-gray-300 font-luxurias-roman leading-relaxed text-justify">
              Hi, I’m Krish Prajapati, a passionate and curious tech enthusiast currently pursuing my B.Tech in Computer Engineering. I specialize in full-stack web development and have hands-on experience building user-friendly, scalable web apps using React.js, Node.js, MongoDB, and more.
              My journey doesn’t stop at clean code. I’m deeply fascinated by how AI can transform everyday experiences, and I’m actively exploring ways to apply machine learning to solve real-world problems. At the same time, I’ve stepped into the world of cybersecurity, learning to assess vulnerabilities and build safer digital spaces.
              I love creating digital solutions that are not only functional but also meaningful — whether it’s helping users find city services with ease, empowering small businesses online, or writing logic that makes interfaces come alive.
              For me, technology is a tool for impact. I’m here to keep learning, keep building, and contribute to a smarter, more secure future — one line of code at a time.
            </p>
          </div>
        </div>

        {/* Lower Row: Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-[rgb(253,202,34)] pt-6 gap-4">
          
          {/* Left: Tagline */}
          <p className="text-sm text-gray-400 text-center md:text-left">
            Need a developer who cares? You’ve just found one.
          </p>

          {/* Right: Socials */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <div className="flex gap-4 text-3xl text-white">
              <a href="https://t.me/krish_prajapati1"><FaTelegram className="hover:text-[rgb(253,202,34)] transition" /></a>
              <a href="https://www.linkedin.com/in/krish-prajapati2538/"><FaLinkedin className="hover:text-[rgb(253,202,34)] transition" /></a>
              <a href="https://x.com/krishjp2538?t=GYSeyHaOlY0zaHiVkHPnyw&s=09"><FaTwitter className="hover:text-[rgb(253,202,34)] transition" /></a>
              <a href="https://github.com/KrishJPrajapati"><FaGithub className="hover:text-[rgb(253,202,34)] transition" /></a>
            </div>
            <span className="text-gray-300 text-sm">Let’s connect!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
