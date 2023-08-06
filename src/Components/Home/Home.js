import React from 'react'
import {AiFillLinkedin, AiFillGithub, AiOutlineInstagram, AiOutlineMail} from 'react-icons/ai';
import deved from '../../assets/dev-ed-wave.png'
function Home({state}) {
  return (
    <div className={state ? 'overflow-hidden' : "hidden"}>
      <div className="text-center pt-12 bg-gray-900 flex items-center justify-center flex-col md:flex-row" style={{height:"100vh",width:"100%"}}>
            <div className="w-full md:w-70p">
            <h2 className="text-5xl py-2 text-teal-400 md:text-6xl font-semibold">
              Ayush Kaul
            </h2>
            <h3 className="text-2xl py-2 text-white md:text-3xl">
            Web Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-200 max-w-xl mx-auto md:text-xl varela">
            Passionate web developer with a flair for creativity, building seamless digital experiences that leave a lasting impact.
            </p>
            <div className="text-4xl flex justify-center gap-12 py-2 text-gray-600 dark:text-gray-400">
              <a href="https://www.linkedin.com/in/ayush-kaul-84a959227/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
              <a href="http://github.com/theayushkaul" target="_blank" rel="noopener noreferrer"><AiFillGithub/></a>
              <a href="http://instagram.com/theayushkaul" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram /></a>
              <a href="mailto:theayushkaul@gmail.com"><AiOutlineMail/></a>
            </div>
            </div>
            <div className="w-full md:w-30p">
            <div className="relative overflow-hidden mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 md:h-96 md:w-96">
              <img alt="" src={deved} className='absolute inset-0 w-full h-full object-cover mt-10 md:h-96 md:w-96'/>
            </div>
            </div>
          </div>
    </div>
  )
}

export default Home
