import React, { useState } from 'react'
import './header.css'
function Header() {
  let [action,setAction]=useState(false)
  return (
    <header className='container'>
      <nav className='flex'>
        <div className='logo'>
            <img src={require('../../assests/aissam-high.png')} alt=''/>
        </div>
        <div className='menu'>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#skils'>Skils</a></li>
                <li><a href='#project'>Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </div>
        <i onClick={()=>{setAction(true)}} className="fa-solid fa-bars"></i>
      </nav>
      {action&& (
      <div className="fixed">
          <div className="model">
              <i onClick={()=>{setAction(false)}} className="fa-solid fa-x"></i>
              <ul>
                <li><a onClick={()=>{setAction(false)}} href='#' ><span><i className="fa-solid fa-house"></i></span> Home</a></li>
                <li><a onClick={()=>{setAction(false)}} href='#about'><span><i className="fa-solid fa-address-card"></i></span> About</a></li>
                <li><a onClick={()=>{setAction(false)}} href='#skils'><span><i className="fa-solid fa-bolt"></i></span> Skils</a></li>
                <li><a onClick={()=>{setAction(false)}} href='#project'><span><i className="fa-solid fa-business-time"></i></span> Projects</a></li>
                <li><a onClick={()=>{setAction(false)}} href='#contact'><span><i className="fa-solid fa-envelope"></i></span> Contact</a></li>
            </ul>
          </div>
      </div>)}
    </header>
  )
}

export default Header
