import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../images/logo.png'
import { motion } from "framer-motion";
import './Navbar.css'

function Navbar() {
  const handleHome=()=>{
    const element=document.getElementById("home");
    if(element){
      element.scrollIntoView({behavior:"smooth"})
    }
  }
  const handleAbout=()=>{
    const element=document.getElementById("about");
    if(element){
      element.scrollIntoView({behavior:"smooth"})
    }
  }
  const handleProject=()=>{
    const element=document.getElementById("project");
    if(element){
      element.scrollIntoView({behavior:"smooth"})
    }
  }
  const handleContact=()=>{
    const element=document.getElementById("contact");
    if(element){
      element.scrollIntoView({behavior:"smooth"})
    }
  }
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if(window.scrollY> 100){
      setShow(false);
    }else{
      setShow(true);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll",controlNavbar)
    return () =>{
      window.removeEventListener("scroll",controlNavbar)
    }
  }, [])
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <motion.nav
     className={`flex h-auto justify-between fixed w-full top-0 md:flex md:items-center z-20 backdrop-blur-sm bg-transparent`}>
      <div className="flex items-center m-2">
        <Link to="/">
          <img className="cursor-pointer lg:mx-10 w-24 lg:w-28 backdrop-blur-sm" src={logo} alt="" onClick={handleHome}/>
        </Link>
      </div>
      {open? <MdClose fontSize={"32px"} className="cursor-pointer m-4 md:hidden block transition-all ease-in duration-500" onClick={() => setOpen(!open)}/>:<FiMenu fontSize={"32px"} className="cursor-pointer m-4 md:hidden block transition-all ease-in duration-500" onClick={() => setOpen(!open)}/>}
      <ul className={`md:flex md:items-center bg-transparent backdrop-blur-sm text-black lg:mx-8 gap-6 md:z-auto md:static absolute w-full left-0 md:justify-end md:mr-10 md:py-0 py-4 md:pl-0 pl-6 md:opacity-100 ${open ?'opacity-100':'opacity-0'} transition-all ${open?'top-14' :'top-[-400px]' } ease-in duration-500 font-semibold`}>
        <li><Link to='/' className='md:text-xl font-semibold text-white text-sm hover:text-blue-600 transition-all duration-100 ease-in-out' onClick={handleHome}>Home</Link></li>
        <li><Link to='/' className='md:text-xl font-semibold text-white text-sm hover:text-blue-600 transition-all duration-100 ease-in-out' onClick={handleAbout}>About</Link></li>
        <li><Link to='/' className='md:text-xl font-semibold text-sm text-white hover:text-blue-600  transition-all duration-100 ease-in-out' onClick={handleProject}>Projects</Link></li>
        <li><Link to='/' className='md:text-xl font-semibold text-sm text-white hover:text-blue-600  transition-all duration-100 ease-in-out' onClick={handleContact}>Contact Us</Link></li>
      </ul>
    </motion.nav>
  );
}

export default Navbar;