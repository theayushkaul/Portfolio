import React from 'react'
import Bootstrap from '../../assets/techStack/Bootstrap.svg'
import Cpp from '../../assets/techStack/C++.svg'
import Css from '../../assets/techStack/css3.svg'
import Figma from '../../assets/techStack/figma.svg'
import Git from '../../assets/techStack/Git.svg'
import Github from '../../assets/techStack/Github.svg'
import HTML5 from '../../assets/techStack/html5.svg'
import JS from '../../assets/techStack/Js.svg'
import MaterialUI from '../../assets/techStack/MaterialUI.svg'
import MongoDB from '../../assets/techStack/MongoDB.svg'
import MySQL from '../../assets/techStack/MySQL.svg'
import NodeJS from '../../assets/techStack/Nodejs.svg'
import ReactJS from '../../assets/techStack/Reactjs.svg'
import TailWind from '../../assets/techStack/tailwind.svg'
import Python from '../../assets/techStack/python.svg'
import Express from '../../assets/techStack/expressjs.png'
import "./Skills.css"
export default function Skills() {
  return (
    <div>
      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto pb-6">
        <div className="skill-box mx-5 my-2 flex">
          <div style={{flex:"1"}}>
            <div className='circle-background hover-effect'>
              <img src={HTML5} className="tech-stackIcon" alt='' />
            </div>
          </div>
          <div style={{flex:"8"}}>
            <div className="flex justify-between">
              <span className="title">HTML</span>
              <span className="tooltip">90%</span>
            </div>
            <div className="skill-bar">
              <span className="skill-per ninty"></span>
            </div>
          </div>
        </div>
        <div className="skill-box mx-5 my-2 flex">
          <div style={{flex:"1"}}>
            <div className='circle-background hover-effect'>
              <img src={Css} className="tech-stackIcon" alt='' />
            </div>
          </div>
          <div style={{flex:"8"}}>
            <div className="flex justify-between">
              <span className="title">CSS</span>
              <span className="tooltip">90%</span>
            </div>
            <div className="skill-bar">
              <span className="skill-per ninty"></span>
            </div>
          </div>
        </div>
        <div className="skill-box mx-5 my-2 flex">
          <div style={{flex:"1"}}>
            <div className='circle-background hover-effect'>
              <img src={JS} className="tech-stackIcon" alt='' />
            </div>
          </div>
          <div style={{flex:"8"}}>
            <div className="flex justify-between">
              <span className="title">JAVASCRIPT</span>
              <span className="tooltip">70%</span>
            </div>
            <div className="skill-bar">
              <span className="skill-per seventy"></span>
            </div>
          </div>
        </div>
        <div className="skill-box mx-5 my-2 flex">
          <div style={{flex:"1"}}>
            <div className='circle-background hover-effect'>
              <img src={TailWind} className="tech-stackIcon" alt='' />
            </div>
          </div>
          <div style={{flex:"8"}}>
            <div className="flex justify-between">
              <span className="title">TAILWIND</span>
              <span className="tooltip">70%</span>
            </div>
            <div className="skill-bar">
              <span className="skill-per seventy"></span>
            </div>
          </div>
        </div>
        <div className="skill-box mx-5 my-2 flex">
          <div style={{flex:"1"}}>
            <div className='circle-background hover-effect'>
              <img src={Bootstrap} className="tech-stackIcon" alt='' />
            </div>
          </div>
          <div style={{flex:"8"}}>
            <div className="flex justify-between">
              <span className="title">BOOTSTRAP</span>
              <span className="tooltip">70%</span>
            </div>
            <div className="skill-bar">
              <span className="skill-per seventy"></span>
            </div>
          </div>
        </div>
        <div className="skill-box mx-5 my-2 flex">
          <div style={{flex:"1"}}>
            <div className='circle-background hover-effect'>
              <img src={MaterialUI} className="tech-stackIcon" alt='' />
            </div>
          </div>
          <div style={{flex:"8"}}>
            <div className="flex justify-between">
              <span className="title">MaterialUI</span>
              <span className="tooltip">60%</span>
            </div>
            <div className="skill-bar">
              <span className="skill-per sixty"></span>
            </div>
          </div>
        </div>
        <div className="skill-box mx-5 my-2 flex">
          <div style={{flex:"1"}}>
            <div className='circle-background hover-effect'>
              <img src={Figma} className="tech-stackIcon" alt='' />
            </div>
          </div>
          <div style={{flex:"8"}}>
            <div className="flex justify-between">
              <span className="title">Figma</span>
              <span className="tooltip">60%</span>
            </div>
            <div className="skill-bar">
              <span className="skill-per sixty"></span>
            </div>
          </div>
        </div>
        <div className="skill-box mx-5 my-2 flex">
          <div style={{flex:"1"}}>
            <div className='circle-background hover-effect'>
              <img src={ReactJS} className="tech-stackIcon" alt='' />
            </div>
          </div>
          <div style={{flex:"8"}}>
            <div className="flex justify-between">
              <span className="title">REACTJS</span>
              <span className="tooltip">70%</span>
            </div>
            <div className="skill-bar">
              <span className="skill-per seventy"></span>
            </div>
          </div>
        </div>
        <div className="skill-box mx-5 my-2 flex">
          <div style={{flex:"1"}}>
            <div className='circle-background hover-effect'>
              <img src={NodeJS} className="tech-stackIcon" alt='' />
            </div>
          </div>
          <div style={{flex:"8"}}>
            <div className="flex justify-between">
              <span className="title">NODEJS</span>
              <span className="tooltip">60%</span>
            </div>
            <div className="skill-bar">
              <span className="skill-per sixty"></span>
            </div>
          </div>
        </div>
        <div className="skill-box mx-5 my-2 flex">
          <div style={{flex:"1"}}>
            <div className='circle-background hover-effect'>
              <img src={Express} className="tech-stackIcon" alt='' />
            </div>
          </div>
          <div style={{flex:"8"}}>
            <div className="flex justify-between">
              <span className="title">EXPRESSJS</span>
              <span className="tooltip">60%</span>
            </div>
            <div className="skill-bar">
              <span className="skill-per sixty"></span>
            </div>
          </div>
        </div>
        <div className="skill-box mx-5 my-2 flex">
          <div style={{flex:"1"}}>
            <div className='circle-background hover-effect'>
              <img src={MongoDB} alt='' />
            </div>
          </div>
          <div style={{flex:"8"}}>
            <div className="flex justify-between">
              <span className="title">MONGODB</span>
              <span className="tooltip">70%</span>
            </div>
            <div className="skill-bar">
              <span className="skill-per seventy"></span>
            </div>
          </div>
        </div>
        <div className="skill-box mx-5 my-2 flex">
          <div style={{flex:"1"}}>
            <div className='circle-background hover-effect'>
              <img src={MySQL} className="tech-stackIcon" alt='' />
            </div>
          </div>
          <div style={{flex:"8"}}>
            <div className="flex justify-between">
              <span className="title">MySQL</span>
              <span className="tooltip">70%</span>
            </div>
            <div className="skill-bar">
              <span className="skill-per seventy"></span>
            </div>
          </div>
        </div>
        <div className="skill-box mx-5 my-2 flex">
          <div style={{flex:"1"}}>
            <div className='circle-background hover-effect'>
              <img src={Git} className="tech-stackIcon" alt='' />
            </div>
          </div>
          <div style={{flex:"8"}}>
            <div className="flex justify-between">
              <span className="title">GIT</span>
              <span className="tooltip">60%</span>
            </div>
            <div className="skill-bar">
              <span className="skill-per sixty"></span>
            </div>
          </div>
        </div>
        <div className="skill-box mx-5 my-2 flex">
          <div style={{flex:"1"}}>
            <div className='circle-background hover-effect'>
              <img src={Github} className="tech-stackIcon" alt='' />
            </div>
          </div>
          <div style={{flex:"8"}}>
            <div className="flex justify-between">
              <span className="title">GITHUB</span>
              <span className="tooltip">70%</span>
            </div>
            <div className="skill-bar">
              <span className="skill-per seventy"></span>
            </div>
          </div>
        </div>
        <div className="skill-box mx-5 my-2 flex">
          <div style={{flex:"1"}}>
            <div className='circle-background hover-effect'>
              <img src={Cpp} className="tech-stackIcon" alt='' />
            </div>
          </div>
          <div style={{flex:"8"}}>
            <div className="flex justify-between">
              <span className="title">C/C++</span>
              <span className="tooltip">90%</span>
            </div>
            <div className="skill-bar">
              <span className="skill-per ninty"></span>
            </div>
          </div>
        </div>
        <div className="skill-box mx-5 my-2 flex">
          <div style={{flex:"1"}}>
            <div className='circle-background hover-effect'>
              <img src={Python} className="tech-stackIcon" alt='' />
            </div>
          </div>
          <div style={{flex:"8"}}>
            <div className="flex justify-between">
              <span className="title">PYTHON</span>
              <span className="tooltip">50%</span>
            </div>
            <div className="skill-bar">
              <span className="skill-per fifty"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
