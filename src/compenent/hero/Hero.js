import React from 'react'
import './hero.css'
import cv from '../../assests/Aissam-cv.pdf'
function Hero() {
  return (
    <section className='hero container flex'>
      <div className="hero-info">
        <h3>Aissam Seghir</h3>
        <h4>Full-Stack Developer</h4>
        <p>I'm a full-stack developer based in Morocco, where I specialize in creating comprehensive solutions that span both the front-end and back-end realms.
        </p>
        <button><a href={cv} download='cv'>Download my cv <i className="fa-solid fa-download"></i></a></button>
      </div>
      <div  style={{display:'flex',alignItems:'center'}}>
          <div className="rs-social">
            <a target='_blank' href="https://www.instagram.com/issamseghir_7?igsh=MWt4enFieDhmYWQ4Yg==">
               <i className="fa-brands fa-instagram"></i>
            </a>
            <a target='_blank' href="https://github.com/AissamSeghir">
               <i className="fa-brands fa-github"></i>
            </a>
            <a href="#">
               <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <div className="img-profil"></div>
      </div>
    </section>
  )
}

export default Hero
