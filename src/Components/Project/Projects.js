import React from 'react'
import web1 from '../../assets/projects/web1.png';
import web2 from '../../assets/projects/web2.png';
import web3 from '../../assets/projects/web3.png';
import web4 from '../../assets/projects/web4.png';
import web5 from '../../assets/projects/web5.png';
import web6 from '../../assets/projects/web6.png';
import {AiOutlineGithub, AiOutlineLink} from 'react-icons/ai'
import "./projects.css"
function Projects({ state }) {
  return (
    <div>
      <div className={state ? "text-center py-12 bg-gray-900" : "hidden"} style={{ width: "100%"}}>
        <div className="glass-box">
        <h1 className='text-4xl w-40 font-bold'>Projects</h1>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="image-container basis-1/3 flex-1">
                <img src={web1} alt="" className="image rounded-lg object-cover" />
                <div className="info-overlay rounded-lg ">
                    <a href="https://github.com/theayushkaul/metube" className='px-3 text-4xl'><AiOutlineGithub/></a>
                    <a href="https://metube-byayushkaul.netlify.app/" target='_blank'  rel="noreferrer" className='px-3 text-4xl'><AiOutlineLink/></a>
                </div>
            </div>
            <div className="image-container basis-1/3 flex-1">
                <img src={web2} alt="" className="image rounded-lg object-cover" />
                <div className="info-overlay rounded-lg">
                <a href="https://github.com/theayushkaul/plink-Clone" className='px-3 text-4xl'><AiOutlineGithub/></a>
                    <a href="https://amazing-salamander-85d735.netlify.app/" target='_blank'  rel="noreferrer" className='px-3 text-4xl'><AiOutlineLink/></a>
                </div>
            </div>
            <div className="image-container basis-1/3 flex-1">
                <img src={web3} alt="" className="image rounded-lg object-cover" />
                <div className="info-overlay rounded-lg">
                    <a href="https://github.com/theayushkaul/Sneaker-head" className='px-3 text-4xl'><AiOutlineGithub/></a>
                    <a href="https://soft-fudge-0692ed.netlify.app/" target='_blank'  rel="noreferrer" className='px-3 text-4xl'><AiOutlineLink/></a>
                </div>
            </div>
            <div className="image-container basis-1/3 flex-1">
                <img src={web4} alt="" className="image rounded-lg object-cover" />
                <div className="info-overlay rounded-lg">
                    <a href="https://github.com/theayushkaul/tnmwebd" className='px-3 text-4xl'><AiOutlineGithub/></a>
                    <a href="https://cozy-semolina-cef94a.netlify.app/" target='_blank'  rel="noreferrer" className='px-3 text-4xl'><AiOutlineLink/></a>
                </div>
            </div>
            <div className="image-container basis-1/3 flex-1">
                <img src={web5} alt="" className="image rounded-lg object-cover" />
                <div className="info-overlay rounded-lg">
                    <a href="https://github.com/theayushkaul/Weather-App" className='px-3 text-4xl'><AiOutlineGithub/></a>
                    <a href="https://kaleidoscopic-frangollo-a23d42.netlify.app/" target='_blank'  rel="noreferrer" className='px-3 text-4xl'><AiOutlineLink/></a>
                </div>
            </div>
            <div className="image-container basis-1/3 flex-1">
                <img src={web6} alt="" className="image rounded-lg object-cover" />
                <div className="info-overlay rounded-lg">
                    <a href="https://github.com/theayushkaul/Amazon-Clone" className='px-3 text-4xl'><AiOutlineGithub/></a>
                    <a href="https://incandescent-starship-939b6f.netlify.app/" target='_blank'  rel="noreferrer" className='px-3 text-4xl'><AiOutlineLink/></a>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
