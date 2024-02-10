import React from 'react'
import './about.css'
import cv from '../../assests/Aissam-cv.pdf'
function About() {
  return (
    <main id='about' className='about'>
      <h3>About Me</h3>
      <div className='container flex'>
       <div className="imgpr"></div>
       <div className="about-me">
           <div className="cards flex">
            <div className="card-about">
              <i className="fa-solid fa-business-time"></i>
              <h3>Completed</h3>
              <p>20+projects</p>
            </div>
            <div className="card-about">
              <i className="fa-solid fa-handshake-angle"></i>
              <h3>Support</h3>
              <p>24/24 online</p>
            </div>
           </div>
           <p>I am a full-stack developer, proficient in both front-end and back-end technologies.
             With expertise in building robust and responsive web applications, I enjoy bringing creative ideas to life through clean and efficient code. Passionate about staying current with the latest technologies, I strive to deliver
             innovative solutions that enhance user experiences.</p>
             <button><a href={cv} download='cv'>Download my cv <i className="fa-solid fa-download"></i></a></button>
       </div>
    </div>
    </main>
  )
}

export default About
