import React from 'react'
import './Home.css'
import 'typeface-ubuntu';
import HarshitSharma_resume from "../../images/HarshitSharmaMernDoveloper.pdf"

export const Home = () => {
  return (
    <div className='introname_content'>

      <p className='hiibox' >
        Hi
        <img className='hii_IconImage' src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif" alt="hii image" />
     
       ,  my name is
        </p>

      
      <p className="myname">Harshit kumar sharma</p>
      <div className='wrapper'>
        <p className='static-content'>I'm a</p>
     <ul className='doveloper'>
<li><span> Mern Stack Doveloper </span></li>
     </ul>
      
      </div>
      <button className='resume_btn'>
        <a download="HarshitSharmaMernDoveloper" href={HarshitSharma_resume }
         >resume</a>
      </button>

      <div className='socialmedia_icons'>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://github.com/HarshitSharma2250" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
    </div>
    </div>
  )
}
