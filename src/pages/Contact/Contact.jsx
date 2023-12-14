import React from 'react'
import './Contact.css'
export const Contact = () => {
  return (
    <>
    <div className='contactme'>
<h1>Contact Me</h1>

  <h2 className="getintouch">
    Get In Touch
  </h2>

  
    <div className="contactlinks">
      <p className='mediaicon'><i className="fa fa-envelope"></i></p>
      <p><a href="#">sharma.harshit295@gmail.com</a></p>
    </div>

    <div className="contactlinks">
      <p className='mediaicon'><i className="fa fa-phone"></i></p>
      <p><a href="#">9756362706</a></p>
    </div>

    <div className="contactlinks">
      <p className='mediaicon'><i className="fab fa-linkedin"></i></p>
      <p><a href="https://www.linkedin.com/in/harshit-sharma-552038236/">harshit sharma</a></p>
    </div>
    
    <div className="contactlinks">
      <p className='mediaicon'>
        <i className="fab fa-github"></i></p>
      <p>
        <a href="https://github.com/HarshitSharma2250">Harshit Sharma</a>
        </p>
    </div>
  </div>
    <div className="footer">
    Thank You for visiting my PortFolio
    <i id='footericon' className="fa fa-thumbs-up"></i>
    </div>
  </>
  )
}
