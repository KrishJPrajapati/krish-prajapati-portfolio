import React from 'react'

function Footer() {
  return (
    <div className='bg-black' >
        <div className="bg-black text-white mx-30 px-6 md:px-20 py-10">
    {/* Upper Row: About Section */}
    <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-12">
        
        {/* Left: Image + CTA */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <img
            src="/path/to/profile.jpg"
            alt="Krish Prajapati"
            className="w-44 h-44 object-cover rounded-full mb-4"
        />
        <button className="border border-white px-5 py-2 rounded-md hover:bg-white hover:text-black transition">
            Say hi!
        </button>
        <p className="text-gray-400 mt-4">Got an idea? I’ll help bring it to life.</p>
        </div>

        {/* Right: Description */}
        <div className="max-w-2xl text-justify">
        <h2 className="text-yellow-400 text-xl font-semibold mb-4">The Passionate Technologist</h2>
        <p className="text-sm text-gray-300 leading-relaxed">
            Hi, I’m Krish Prajapati, a passionate and curious tech enthusiast currently pursuing my B.Tech in Computer Engineering. I specialize in full-stack web development and have hands-on experience building user-friendly, scalable web apps using React.js, Node.js, MongoDB, and more.
My journey doesn’t stop at clean code. I’m deeply fascinated by how AI can transform everyday experiences, and I’m actively exploring ways to apply machine learning to solve real-world problems. At the same time, I’ve stepped into the world of cybersecurity, learning to assess vulnerabilities and build safer digital spaces.
I love creating digital solutions that are not only functional but also meaningful — whether it’s helping users find city services with ease, empowering small businesses online, or writing logic that makes interfaces come alive.
For me, technology is a tool for impact. I’m here to keep learning, keep building, and contribute to a smarter, more secure future — one line of code at a time.
            {/* (trimmed for brevity) */}
        </p>
        </div>
    </div>

    {/* Lower Row: Footer Bottom */}
    <div className="flex flex-col md:flex-row justify-between items-center border-t border-yellow-400 pt-6 gap-4">
        {/* Left: Tagline */}
        <p className="text-sm text-gray-400">Need a developer who cares? You’ve just found one.</p>

        {/* Right: Socials */}
        <div className="flex gap-6 items-center">
        <span className="text-gray-300 text-sm">Let’s connect!</span>
        <a href="#" className="text-xl hover:text-yellow-300"><i className="fab fa-discord"></i></a>
        <a href="#" className="text-xl hover:text-yellow-300"><i className="fab fa-telegram"></i></a>
        <a href="#" className="text-xl hover:text-yellow-300"><i className="fab fa-linkedin"></i></a>
        <a href="#" className="text-xl hover:text-yellow-300"><i className="fab fa-github"></i></a>
        </div>
    </div>
    </div>

    </div>
  )
}

export default Footer