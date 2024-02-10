import React from 'react'
import './skils.css'
function Skils() {
  return (
    <div id='skils' className='skils'>
        <h3 id="titlesk">Skils</h3>
       <div className="container">
           <div className="card-sk">
               <h3>Front-end developer</h3>
               <div className="skil-sh">
                  <div className="skil-inf">
                    <h4>HTML</h4>
                    <i className="fa-brands fa-html5"></i>
                  </div>
                  <div className="skil-inf">
                    <h4>CSS</h4>
                    <i className="fa-brands fa-css3-alt"></i>
                  </div>
               </div>
               <div className="skil-sh">
                  <div className="skil-inf">
                    <h4>Bootstrap</h4>
                    <i className="fa-brands fa-bootstrap"></i>
                  </div>
                  <div className="skil-inf">
                    <h4>Tailwindcss</h4>
                    <i className="fa-brands fa-css3-alt"></i>
                  </div>
               </div>
               <div className="skil-sh">
                  <div className="skil-inf">
                    <h4>JavaScript</h4>
                    <i className="fa-brands fa-js"></i>
                  </div>
                  <div className="skil-inf">
                    <h4>ReactJS</h4>
                    <i className="fa-brands fa-react"></i>
                  </div>
               </div>
           </div>
           <div className="card-sk">
              <h3>Back-end developer</h3>
              <div className="skil-sh">
                  <div className="skil-inf">
                    <h4>PHP</h4>
                    <i className="fa-brands fa-php"></i>
                  </div>
                  <div className="skil-inf">
                    <h4>MySQL</h4>
                    <i className="fa-solid fa-database"></i>
                  </div>
               </div>
              <div className="skil-sh">
                  <div className="skil-inf">
                    <h4>Laravel</h4>
                    <i className="fa-brands fa-laravel"></i>
                  </div>
                  <div className="skil-inf">
                    <h4>MongoDB</h4>
                    <i className="fa-solid fa-code"></i>
                  </div>
               </div>
              <div className="skil-sh">
                  <div className="skil-inf">
                    <h4>SQL</h4>
                    <i className="fa-solid fa-server"></i>
                  </div>
               </div>
           </div>
       </div>
    </div>
  )
}

export default Skils
