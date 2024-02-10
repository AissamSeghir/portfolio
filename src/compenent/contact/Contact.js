import React from 'react'
import './contact.css'
import Lottie from 'react-lottie';
import emailanimatin from '../../animation/animationemail.json'
import { useForm, ValidationError } from '@formspree/react';
function Contact() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: emailanimatin,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    const [state, handleSubmit] = useForm("xnqepnll");
  return (
    <div id='contact' className="contact">
      <h3>Contact Me</h3>
      <div className='container flex'>
       <form onSubmit={handleSubmit}>
          <div className="contact-form">
             <label htmlFor="name">Name</label>
             <input type="text" name='name' id='name' placeholder='Your Name'/>
             <ValidationError 
               prefix="Name" 
               field="name"
               errors={state.errors}
             />
          </div>
          <div className="contact-form">
             <label htmlFor="email">Email</label>
             <input type="text" name='email' id='email' placeholder='Your Email' required/>
             <ValidationError 
               prefix="Email" 
               field="email"
               errors={state.errors}
             />
          </div>
          <div className="contact-form">
             <label htmlFor="message">Message</label>
             <textarea name="message" id="message" cols="30" rows="10"></textarea>
             <ValidationError 
               prefix="Message" 
               field="message"
               errors={state.errors}
             />
          </div>
          <button type='submit' disabled={state.submitting}>
            {state.submitting?'submitting...' : 'submit'} 
            <i className="fa-solid fa-paper-plane"></i>
          </button>
          {state.succeeded && <h4>Your message has been successfully</h4>}
       </form>
       <div className="animationem">
           <Lottie 
	            options={defaultOptions}
                height={300}
                width={300}
           />
       </div>
    </div>
    </div>
  )
}

export default Contact
