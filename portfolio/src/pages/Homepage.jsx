import React from 'react'
import Navbar from '../components/Navbar'
import Herosection from '../components/Herosection'
import SkillsSlider from '../components/SkillsSlider'
import ServiceSection from '../components/ServiceSection'

function Homepage() {
  return (
    <div>
        <Herosection/>
        <SkillsSlider/>
        <ServiceSection/>
    </div>
  )
}

export default Homepage