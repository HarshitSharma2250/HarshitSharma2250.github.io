import React from 'react'
import './Skills.css'



const techStack = [
  { name: "HTML5", badge: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" },
  { name: "CSS3", badge: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" },
  { name: "JavaScript", badge: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" },
  { name: "React", badge: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" },
  { name: "Chakra UI", badge: "https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white" },
  { name: "Tailwind CSS", badge: "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" },
  { name: "Redux", badge: "https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" },
  { name: "Vite", badge: "https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" },
  { name: "Node.js", badge: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" },
  { name: "MongoDB", badge: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" },
  { name: "Express.js", badge: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" },
  { name: "Postman", badge: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" },
  { name: "Nodemon", badge: "https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD" },
  { name: "Mongoose", badge: "https://img.shields.io/badge/Mongoose-%23880000.svg?&style=for-the-badge&logo=mongoose&logoColor=white" },
  { name: "Chart.js", badge: "https://img.shields.io/badge/Chart.js-F5788D.svg?style=for-the-badge&logo=chartdotjs&logoColor=white" },
  { name: "Python", badge: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" },
  { name: "Render", badge: "https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white" },
  { name: "JWT", badge: "https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" },
  { name: "Git", badge: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" },
  { name: "GitHub", badge: "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" },
  { name: "Canva", badge: "https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white" },
  { name: "NPM", badge: "https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" },
  { name: "Netlify", badge: "https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7" },
  { name: "Vercel", badge: "https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" },
];

export const Skills = () => {
  return (
    <div className='myskills'>
      <h1 className='titleskill'>
        skills
      </h1>
      <div className="serv-content">
        <div className="card">
          <div className="boxskill">
          <i className="fas fa-code"></i>
          <div className='aboutskilltype'>Mern-Stack</div>
          <div className="img-container">
          {
            techStack.map((ele,index)=>(
              <div className="box" key={index}>
                <img src={ele.badge} alt={ele.name} title={ele.name} />
              </div>
            ))
          }
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
