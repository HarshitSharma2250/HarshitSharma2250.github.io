import React from 'react'
import './About.css'
import mypic from '../../images/MYPIC.jpg'

export const About = () => {
  return (
    <div className='aboutme_page'>
   
      <div className="img">
      <img src={mypic} alt="My Picture" />
      </div>
      <div className="about_content">
<h2>i'm harshit kumar sharma</h2>
<p>Passionate MERN Stack Developer with expertise in building dynamic, responsive, and scalable web applications. Proficient in React, Node.js, Express, and MongoDB, with a strong foundation in front-end and back-end development. Skilled in state management with Redux Toolkit, API integration, and optimizing performance for seamless user experiences. A problem solver with a keen eye for detail, always eager to learn and contribute to innovative web solutions.​​​</p>
      </div>
    </div>
  )
}
