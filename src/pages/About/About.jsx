import React from 'react'
import './About.css'
import mypic from '../../images/mypic.JPG'

export const About = () => {
  return (
    <div className='aboutme_page'>
   
      <div className="img">
      <img src={mypic} alt="My Picture" />
      </div>
      <div className="about_content">
<h2>i'm harshit kumar sharma</h2>
<p>Enthusiastic Front-End Developer with expertise in HTML, CSS, and JavaScript, specializing in React. Proven problem-solving skills and a keen eye for detail. Completed comprehensive training in front-end technologies and eager to contribute creativity and technical skills to innovative web projects. Excited about the prospect of working as a front-end developer and a valuable team member in an exciting tech company.​​​</p>
      </div>
    </div>
  )
}
