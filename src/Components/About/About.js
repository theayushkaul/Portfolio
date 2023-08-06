import React from 'react'
import Skills from './Skills'
function About({state}) {

  return (
      <div className={state ? "text-center py-12 bg-gray-900":"hidden"} style={{width: "100%"}}>
      <div className='glass-box'>
        <h1 className='text-4xl text-left font-bold'>About Me</h1>
        <div className='text-sm md:text-xl text-left pt-10 varela'>
          Hi there! I'm Ayush, a web developer proficient in HTML, CSS, and JavaScript. I have a strong passion for React.js and love building websites with it. I'm also a beginner in Node.js and Express.js, and I'm excited to explore more in that area.
          Currently, I'm pursuing my B.Tech in Computer Science (3rd year) and always eager to learn and grow in the field of technology. I may have zero professional experience, but I believe my hardworking nature and fast learning abilities will help me excel in my career.
          Apart from coding, I enjoy watching movies and staying updated with the latest tech trends and developments. I'm always eager to expand my knowledge and skills in the tech world.
          Thank you for visiting my portfolio. Feel free to explore my projects and don't hesitate to get in touch if you'd like to collaborate or have any questions.
        </div>
        <div className="text-3xl pt-10 pb-10 font-bold text-left">My Skills</div>
        <Skills />
      </div>
    </div>
  )
}

export default About
