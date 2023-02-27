import React from 'react'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import TechnicalSkills from './components/TechnicalSkills'

const App = () => {
  return (
    <div className='welcome'>
      <Navbar />
      <HeroSection />
      <Education />
      <Experience />
      <Projects />
      <TechnicalSkills />
      <Footer />
    </div>
  )
}

export default App


