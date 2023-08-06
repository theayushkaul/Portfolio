import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai"
import {FaX} from "react-icons/fa6"
export default function Navbar({changeState}) {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
        changeState(isMobileMenuOpen)
    };
    return (
        <>
            <nav className="flex px-6 py-4 items-center md:px-10" style={{width:"100%",position:"fixed",zIndex:"1"}}>
                <div className="flex items-center justify-between" style={{width:"100%"}}>
                    <div className="text-white font-bold text-2xl mr-4"><Link to="/">Ayush Kaul</Link></div>
                    {/* Mobile Menu Button */}
                    <button className="text-white px-2 py-1 text-xl sm:hidden" onClick={toggleMobileMenu}>
                        <AiOutlineMenu />
                    </button>
                    {/* Desktop Menu */}
                    <div className="hidden sm:flex space-x-4">
                        <Link to="/" className="text-white hover-effect" >Home</Link>
                        <Link to="/about" className="text-white hover-effect">About</Link>
                        <Link to="/resume" className="text-white hover-effect">Resume</Link>
                        <Link to="/projects" className="text-white hover-effect">Projects</Link>
                        <Link to="/contact" className="text-white hover-effect">Contact</Link>
                    </div>
                </div>
                {/* Mobile Menu */}
                {isMobileMenuOpen && (<>
                    <div className="fixed inset-0 flex justify-center flex-col items-center bg-gray-900 ">
                    <button className="text-white px-8 sm:hidden flex justify-end items-center" onClick={toggleMobileMenu} style={{width:"100%",flex:"1"}}><FaX /></button>
                        <div className="flex flex-col space-y-4 text-white justify-center items-center" style={{width:"100%",flex:"9"}}>
                            <Link to="/" onClick={toggleMobileMenu} className='hover-effect'>Home</Link>
                            <Link to="/about" onClick={toggleMobileMenu} className='hover-effect'>About</Link>
                            <Link to="/resume" onClick={toggleMobileMenu} className='hover-effect'>Resume</Link>
                            <Link to="/projects" onClick={toggleMobileMenu} className='hover-effect'>Projects</Link>
                            <Link to="/contact" onClick={toggleMobileMenu} className='hover-effect'>Contact</Link>
                        </div>
                    </div></>
                )}
            </nav>
        </>
    )
}
