import React from 'react'
import "./Contact.css"
import { FiShare2, FiMail } from "react-icons/fi"
import { MdLocationOn } from "react-icons/md"
import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
function Contact({ state }) {
  return (
    <div className={state ? "text-center py-12 bg-gray-900" : "hidden"} style={{ width: "100%" }}>
      <div className="glass-box">
        <h1 className='text-4xl w-56 font-bold mb-10'>Contact Me</h1>
        <div className="contact-box">
          <div className="flex flex-col lg:flex-row justify-center">
            <div className="smallBox py-5 m-6 md:w-80">
              <div className="flex">
                <MdLocationOn className='text-3xl mx-6' />
                <h1 className='text-2xl font-bold text-left'>My Address</h1>
              </div>
              <p>New Delhi, India</p>
            </div>
            < div className="smallBox py-5 m-6 md:w-80">
              <div className="flex">
                <FiMail className='text-3xl mx-6' />
                <h1 className='text-2xl font-bold text-left'>Email Me</h1>
              </div>
              <p className=' mt-5 px-18'><a href="mailto:theayushkaul@gmail.com" className='varela'>theayushkaul@gmail.com</a></p>
            </div>
            < div className="smallBox py-5 m-6 md:w-80">
              <div className="flex">
                <FiShare2 className='text-3xl mx-6' />
                <h1 className='text-2xl font-bold text-left'>Social Profiles</h1>
              </div>
              <div className='flex gap-3 mt-5 px-20'>
                <AiFillGithub className='hover:text-teal-400 cursor-pointer text-2xl' />
                <AiFillLinkedin className='hover:text-teal-400 cursor-pointer text-2xl' />
                <AiOutlineInstagram className='hover:text-teal-400 cursor-pointer text-2xl' />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-12">
            <p className="headingstyle2 text-3xl">Write me an email !</p>
            <form
              className="flex flex-col w-4/5 mt-8"
              action="https://getform.io/f/11becb57-053f-4c04-8fb6-3ed430fe43bc" method="POST"
            >
              <input
                className="m-1 p-3 darkdarkdark rounded-lg"
                type="text"
                name="name"
                placeholder="Name"
              />
              <input
                className="m-1 p-3 darkdarkdark rounded-lg"
                type="email"
                name="email"
                placeholder="Email"
              />
              <input
                className="m-1 p-3 darkdarkdark rounded-lg"
                type="text"
                name="subject"
                placeholder="Subject"
              />
              <textarea
                className="m-1 p-3 darkdarkdark rounded-lg"
                name="message"
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
              <button
                className="bg-teal p-3 m-5 rounded-lg font-bold"
                type="submit"
              >
                Send Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
