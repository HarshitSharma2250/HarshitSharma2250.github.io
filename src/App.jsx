import React from 'react'
import './App.css'
import { Link as ScrollLink } from 'react-scroll';
import {Home} from './pages/Home/Home'

import {About} from './pages/About/About'
import { Skills } from './pages/Skills/Skills';
import { Project } from './pages/Projects/Project.jsx';
import { Contact } from './pages/Contact/Contact.jsx';
import { GithubStatus } from './pages/github_status/GithubStatus.jsx';

function App() {

  return (
    <>
      <div id="home" >
      <nav className="navbar">
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">Harshit sharma</label>

      <ul className='headerlistitem'>

        <li><ScrollLink to="home" smooth={true} duration={500}>
              Home
            </ScrollLink></li>
        <li><ScrollLink to="about" smooth={true} duration={500}>
              About
            </ScrollLink></li>
        <li><ScrollLink to="skill" smooth={true} duration={800}>
              Skills
            </ScrollLink></li>
        <li><ScrollLink to="project" smooth={true} duration={1000}>
              Project
            </ScrollLink></li>
        <li><ScrollLink to="contact" smooth={true} duration={1200}>
        contact
            </ScrollLink></li>
            <li><a href="https://drive.google.com/file/d/1z8ChTbSyvC4f-n-KaxDg94hOJkz6nNFs/view?usp=sharing" target='_blank' rel='harshit resume' >resume</a></li>
      </ul>
    </nav>




<div className='introname_section' >
 <Home/>
</div>
<div className="about" >
<h2>about me</h2>
  <About/>
</div>
<div id="skill">
 <Skills/>
</div>

<div id="project">
  <Project/>
</div>



<div className="contact">
<div id="githubstatus">
  <GithubStatus/>
</div>
  <Contact/>
</div>
      </div>
    </>
  )
}

export default App





