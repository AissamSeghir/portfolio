import React from 'react'
import Header from './compenent/header/Header'
import Hero from './compenent/hero/Hero'
import About from './compenent/about/About'
import Skils from './compenent/skils/Skils'
import Project from './compenent/project/Project'
import Contact from './compenent/contact/Contact'
import Footer from './compenent/footer/Footer'
import ParticlesBg from './compenent/ParticleBackground'

function App() {
  return (
    <div>
      <ParticlesBg/>
      <Header/>
      <Hero/>
      <About/>
      <Skils/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
