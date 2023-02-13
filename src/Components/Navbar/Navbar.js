import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../images/logo.png'
import { motion } from "framer-motion";

function Navbar() {
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
     className={`flex h-auto justify-between sticky top-0 md:flex md:items-center z-20 backdrop-blur-sm bg-slate-100`}>
      <div className="flex items-center m-2">
        <Link to="/">
          <img className="cursor-pointer lg:mx-10 w-24 lg:w-28" src={logo} alt="" />
        </Link>
      </div>
      {open? <MdClose fontSize={"32px"} className="cursor-pointer m-4 md:hidden block transition-all ease-in duration-500" onClick={() => setOpen(!open)}/>:<FiMenu fontSize={"32px"} className="cursor-pointer m-4 md:hidden block transition-all ease-in duration-500" onClick={() => setOpen(!open)}/>}
      <ul className={`md:flex md:items-center bg-slate-100 text-black lg:mx-8 gap-6 md:z-auto md:static absolute w-full left-0 md:justify-end md:mr-10 md:py-0 py-4 md:pl-0 pl-6 md:opacity-100 ${open ?'opacity-100':'opacity-0'} transition-all ${open?'top-14' :'top-[-400px]' } ease-in duration-500 font-semibold`}>
        <li><Link to='/' className='md:text-xl font-semibold text-black text-sm hover:text-slate-600 hover:border-b-2 border-slate-700 transition-all duration-100 ease-in-out'>Home</Link></li>
        <li><Link to='/about' className='md:text-xl font-semibold text-black text-sm hover:text-slate-600 hover:border-b-2 border-slate-700 transition-all duration-100 ease-in-out'>About</Link></li>
        <li><Link to='/project' className='md:text-xl font-semibold text-sm text-black hover:text-slate-600  hover:border-b-2 border-slate-700 transition-all duration-100 ease-in-out'>Projects</Link></li>
        <li><Link to='/contact' className='md:text-xl font-semibold text-sm text-black hover:text-slate-600 hover:border-b-2 border-slate-700 transition-all duration-100 ease-in-out'>Contact Us</Link></li>
      </ul>
    </motion.nav>
  );
}

export default Navbar;
