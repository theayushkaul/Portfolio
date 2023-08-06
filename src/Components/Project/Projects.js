import React from 'react'
import web1 from '../../assets/projects/web1.png';
import web2 from '../../assets/projects/web2.png';
import web3 from '../../assets/projects/web3.png';
import web4 from '../../assets/projects/web4.png';
import web5 from '../../assets/projects/web5.png';
import web6 from '../../assets/projects/web6.png';
import web7 from '../../assets/projects/web-7.png';
import web8 from '../../assets/projects/web-8.png';
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai'
import "./projects.css"
function Projects({ state }) {
    return (
        <div>
            <div className={state ? "text-center py-12 bg-gray-900" : "hidden"} style={{ width: "100%" }}>
                <div className="glass-box">
                    <h1 className='text-4xl w-40 font-bold'>Projects</h1>
                    <div className="flex flex-col gap-10 py-10 xl:flex-row lg:flex-wrap">
                        <div className="image-container basis-1/3 flex-1">
                            <img src={web1} alt="" className="image rounded-lg object-cover" />
                            <div className="info-overlay rounded-lg ">
                                <h1 className='dai text-2xl text-left'>Me-Tube</h1>
                                <p className="varela text-left mt-2 text-sm hidden sm:block">Metube is a fully responsive frontend project, a clone of YouTube, featuring complete functionality and responsiveness. The project includes API integration, enabling users to play videos and search for videos within the application. It replicates the core features and user interface of YouTube, providing an immersive video viewing experience.</p>
                                <div className="flex gap-6 mt-4">
                                    <a href="https://github.com/theayushkaul/metube" className='px-3 text-4xl'><AiOutlineGithub /></a>
                                    <a href="https://metube-byayushkaul.netlify.app/" target='_blank' rel="noreferrer" className='px-3 text-4xl'><AiOutlineLink /></a>
                                </div>
                            </div>
                        </div>
                        <div className="image-container basis-1/3 flex-1">
                            <img src={web7} alt="" className="image rounded-lg object-cover" />
                            <div className="info-overlay rounded-lg">
                                <h1 className='dai text-2xl text-left'>Inferno-Blog</h1>
                                <p className='text-left varela mt-2 text-sm hidden sm:block'>
                                    A sophisticated CRUD project, to demonstrate my exceptional skills as a MERN stack developer. This comprehensive application comprises a seamless API and a captivating UI, seamlessly integrated to provide a smooth user experience.
                                </p>
                                <div className="flex gap-6 mt-4">
                                    <a href="https://github.com/theayushkaul/inferno-blog" className='px-3 text-4xl'><AiOutlineGithub /></a>
                                </div>
                            </div>
                        </div>
                        <div className="image-container basis-1/3 flex-1">
                            <img src={web8} alt="" className="image rounded-lg object-cover" />
                            <div className="info-overlay rounded-lg ">
                                <h1 className='dai text-2xl text-left'>News-Monk</h1>
                                <p className='text-left varela mt-2 text-sm hidden sm:block'>
                                    News Monk is a React.js website that fetches data from an API and displays it on the webpage. Demonstrating my skills in CSS and React.js, it showcases my ability to create dynamic and visually appealing web applications. The project highlights my proficiency in integrating APIs and presenting real-time information in a user-friendly manner.
                                </p>
                                <div className="flex gap-6 mt-4">
                                    <a href="https://github.com/theayushkaul/newsmonk" className='px-3 text-4xl'><AiOutlineGithub /></a>
                                </div>
                            </div>
                        </div>
                        <div className="image-container basis-1/3 flex-1">
                            <img src={web2} alt="" className="image rounded-lg object-cover" />
                            <div className="info-overlay rounded-lg">
                                <h1 className='dai text-2xl text-left'>Plink-Clone</h1>
                                <p className='text-left varela mt-2 text-sm hidden sm:block'>P-link is a non-responsive website built using HTML and CSS. The project aims to create a clone of a specific website, focusing on replicating its design and layout. While the website is not responsive, it demonstrates my HTML and CSS skills in creating visually appealing web pages.</p>
                                <div className="flex gap-6 mt-4">
                                    <a href="https://github.com/theayushkaul/plink-Clone" className='px-3 text-4xl'><AiOutlineGithub /></a>
                                    <a href="https://amazing-salamander-85d735.netlify.app/" target='_blank' rel="noreferrer" className='px-3 text-4xl'><AiOutlineLink /></a>
                                </div>
                            </div>
                        </div>
                        <div className="image-container basis-1/3 flex-1">
                            <img src={web4} alt="" className="image rounded-lg object-cover" />
                            <div className="info-overlay rounded-lg">
                                <h1 className='dai text-2xl text-left'>Text Utils</h1>
                                <p className='text-left varela mt-2 text-sm hidden sm:block'>TextUtils is a React.js and Bootstrap-powered website that provides text manipulation features like capitalization, space removal, and text case conversions. Users can also customize the background colors to suit their preferences, making it a versatile tool for enhancing text readability and presentation.</p>
                                <div className="mt-4 gap-6 flex">
                                    <a href="https://github.com/theayushkaul/TextUtils" className='px-3 text-4xl'><AiOutlineGithub /></a>
                                    <a href="https://ak-textutils.netlify.app/" target='_blank' rel="noreferrer" className='px-3 text-4xl'><AiOutlineLink /></a>
                                </div>
                            </div>
                        </div>
                        <div className="image-container basis-1/3 flex-1">
                            <img src={web3} alt="" className="image rounded-lg object-cover" />
                            <div className="info-overlay rounded-lg">
                                <h1 className='dai text-2xl text-left'>Sneakerhead</h1>
                                <p className='text-left varela mt-2 text-sm hidden sm:block'>Sneaker Head India is a static website template created using HTML and CSS.</p>
                                <div className="mt-4 gap-6 flex">
                                    <a href="https://github.com/theayushkaul/Sneaker-head" className='px-3 text-4xl'><AiOutlineGithub /></a>
                                    <a href="https://soft-fudge-0692ed.netlify.app/" target='_blank' rel="noreferrer" className='px-3 text-4xl'><AiOutlineLink /></a>
                                </div>
                            </div>
                        </div>
                        <div className="image-container basis-1/3 flex-1">
                            <img src={web5} alt="" className="image rounded-lg object-cover" />
                            <div className="info-overlay rounded-lg">
                                <h1 className='dai text-2xl text-left'>Weather-App</h1>
                                <p className="varela text-left mt-2 text-sm hidden sm:block">
                                    The Weather App is a fully responsive website built using HTML, CSS, and JavaScript. This application allows users to search for and view the weather of different states or locations. It utilizes weather APIs to fetch real-time weather data and presents it in an intuitive and visually appealing manner, providing users with accurate weather information.
                                </p>
                                <div className="mt-4 gap-6 flex">
                                    <a href="https://github.com/theayushkaul/Weather-App" className='px-3 text-4xl'><AiOutlineGithub /></a>
                                    <a href="https://kaleidoscopic-frangollo-a23d42.netlify.app/" target='_blank' rel="noreferrer" className='px-3 text-4xl'><AiOutlineLink /></a>
                                </div>
                            </div>
                        </div>
                        <div className="image-container basis-1/3 flex-1">
                            <img src={web6} alt="" className="image rounded-lg object-cover" />
                            <div className="info-overlay rounded-lg">
                                <h1 className='dai text-2xl text-left'>Amazon-Template</h1>
                                <p className="varela text-left mt-2 text-sm hidden sm:block">
                                    This project is a responsive website clone of Amazon, built using HTML and CSS. The website replicates the layout and design of the Amazon e-commerce platform, featuring a user-friendly interface and adaptability across different devices.
                                </p>
                                <div className="mt-4 flex gap-6">
                                    <a href="https://github.com/theayushkaul/Amazon-Clone" className='px-3 text-4xl'><AiOutlineGithub /></a>
                                    <a href="https://incandescent-starship-939b6f.netlify.app/" target='_blank' rel="noreferrer" className='px-3 text-4xl'><AiOutlineLink /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
