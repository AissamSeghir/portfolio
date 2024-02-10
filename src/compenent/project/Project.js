import React from 'react'
import { data } from "../../data";
import './project.css'
function Project() {
  let showpr = data.map((e,i)=>{
       return(
        <div key={i} className="project-card">
           <img src={e.img} alt=''/>
           <div className="description">
               <h3>{e.title}</h3>
               <p>{e.desc}</p>
               <h4><a target='_blank' rel="noreferrer" href={e.link}>Demo <i className="fa-solid fa-link"></i></a></h4>
           </div>
       </div>
       )
  })
  return (
    <section id='project' className='project'>
        <h3>Projects</h3>
        <div className="container">
             {showpr}
        </div>
      
    </section>
  )
}

export default Project
