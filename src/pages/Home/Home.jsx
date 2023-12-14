import React from 'react'
import './Home.css'
import 'typeface-ubuntu';
import HarshitSharma_resume from "../../images/HarshitSharma_resume.pdf"

export const Home = () => {
  return (
    <div className='introname_content'>

      <p className='hiibox' >
        Hi
        <img className='hii_IconImage' src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif" alt="hii image" />
     
       ,  my name is
        </p>

      
      <p className="myname">Harshit kumar sharma</p>
      <br />
      <p className='doveloper'>front end doveloper</p>
      <button className='resume_btn'>
        <a download="HarshitSharma-resume.pdf" href={HarshitSharma_resume }
         >resume</a>
      </button>

      <div className='socialmedia_icons'>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
    </div>
    </div>
  )
}
