import React from 'react'
import'./footer.css'
function Footer() {
  return (
    <footer className='container'>
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
          <div>
             <h4>© AISSAM SEGHIR <br />
               ALL RIGHT RESERVED
             </h4>
          </div>
    </footer>
  )
}

export default Footer
