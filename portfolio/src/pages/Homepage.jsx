import React from 'react'
import Navbar from '../components/Navbar'
import Herosection from '../components/Herosection'
import SkillsSlider from '../components/SkillsSlider'
import ServiceSection from '../components/ServiceSection'
import ProjectSection from '../components/ProjectSection'
import Footer from '../components/Footer'

function Homepage() {
  return (
    <div>
        <Herosection/>
        <SkillsSlider/>
        <ServiceSection/>
        <ProjectSection/>
        <Footer/>
    </div>
  )
}

export default Homepage