import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../../assets/Resume.pdf"
import { BiSolidDownload } from "react-icons/bi";
import "./resume.css"
function Resume({ state }) {
  return (
    <div className={state ? "text-center py-12 bg-gray-900" : "hidden"} style={{ width: "100%" }}>
      <div className="glass-box">
        <div className="flex justify-between">
          <h1 className='text-4xl w-40 font-bold'>Resume</h1>
          <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white p-2 border-none ml-8 rounded-full sm:rounded-md" target='_blank' rel="noreferrer" href={resume} download="AyushKaul_CV">
            <div className='hidden sm:flex'>Download Resume</div>
            <div className='text-white text-2xl sm:hidden'><BiSolidDownload/></div>
          </a>
        </div>
        <div className="mt-10">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgba(0, 0, 0, 0.500)', color: 'white'}}
              contentArrowStyle={{ borderRight: '7px solid white' }}
              date="2018 - 2019"
              iconStyle={{ background: 'teal', color: 'white' }}
              icon={<FaGraduationCap />}
            >
              <h1 className="vertical-timeline-element-title text-left text-xl font-semibold">SECONDARY EDUCATION (10TH), CBSE</h1>
              <h4 className="text-left pt-2">National Victor Public School, New Delhi</h4>
              <p className='varela text-left'>
                I have completed my 10th from CBSE board with overall 94%.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgba(0, 0, 0, 0.500)', color: 'white'}}
              contentArrowStyle={{ borderRight: '7px solid white' }}
              date="2020 - 2021"
              iconStyle={{ background: 'teal', color: 'white' }}
              icon={<FaGraduationCap />}
            >
              <h1 className="vertical-timeline-element-title text-left text-xl font-semibold">SENIOR EDUCATION (12TH), CBSE</h1>
              <h4 className="text-left pt-2">National Victor Public School, New Delhi</h4>
              <p className='varela text-left'>
                I have completed my 12th from CBSE board with overall 87%.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgba(0, 0, 0, 0.500)', color: 'white'}}
              contentArrowStyle={{ borderRight: '7px solid white' }}
              date="2021-2025"  
              iconStyle={{ background: 'teal', color: 'white' }}
              icon={<FaGraduationCap />}
            >
              <h1 className="vertical-timeline-element-title text-left text-xl font-semibold">BACHELOR OF TECHNOLOGY, COMPUTER SCIENCE</h1>
              <h4 className="text-left pt-2">Maharaja Agrasen Institute of Technology, New Delhi</h4>
              <p className='varela text-left'>
              I am currently in my 3rd year of Graduation degree .
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgba(0, 0, 0, 0.500)', color: 'white'}}
              contentArrowStyle={{ borderRight: '7px solid white' }}
              date="Summary"  
              iconStyle={{ background: 'teal', color: 'white' }}
              icon={<BsFillPersonLinesFill />}
            >
              <h1 className="vertical-timeline-element-title text-left text-xl font-semibold">SUMMARY</h1>
              <p className='varela text-left'>
              An individual who possesses both technical expertise and a strong artistic flair, decent programming skills with a keen eye for design.
              Tries to keeps up with the latest trends and tools in the industry, continuously seek to improve skills, explore new techniques, and stay updated on design and development best practices.
              </p>
            </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
      </div>
    </div>
  )
}

export default Resume
