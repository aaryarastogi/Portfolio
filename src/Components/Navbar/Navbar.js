import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaHome, FaUser, FaFolder, FaEnvelope } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../images/logo.png'
import { motion, AnimatePresence } from "framer-motion";
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
  const menuItems = [
    { name: 'Home', icon: FaHome, handler: handleHome },
    { name: 'About', icon: FaUser, handler: handleAbout },
    { name: 'Projects', icon: FaFolder, handler: handleProject },
    { name: 'Contact', icon: FaEnvelope, handler: handleContact },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex h-16 md:h-20 justify-between items-center fixed w-full top-0 z-50 bg-[#0a0e27]/95 backdrop-blur-lg border-b border-white/20 shadow-lg`}>
        <div className="flex items-center m-2">
          <Link to="/">
            <motion.img 
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer lg:mx-10 mx-2 md:mx-4 w-10 md:w-16 lg:w-20" 
              src={logo} 
              alt="Logo" 
              onClick={handleHome}
            />
          </Link>
        </div>
        <div className="md:hidden flex items-center mr-4 z-[60]">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg glass border border-white/20"
          >
            {open ? (
              <MdClose 
                fontSize={"24px"} 
                className="cursor-pointer text-white" 
              />
            ) : (
              <FiMenu 
                fontSize={"24px"} 
                className="cursor-pointer text-white" 
              />
            )}
          </motion.button>
        </div>
        <ul className="hidden md:flex md:items-center lg:mx-8 gap-4 md:gap-8 md:justify-end md:mr-10">
          {menuItems.map((item, index) => (
            <motion.li key={item.name} whileHover={{ y: -2 }}>
              <Link 
                to='/' 
                className='md:text-lg font-medium text-white/90 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300 ease-in-out relative group' 
                onClick={item.handler}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[55] md:hidden"
              onClick={() => setOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#0a0e27] z-[60] md:hidden shadow-2xl border-l border-white/10"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <h2 className="text-xl font-bold gradient-text">Menu</h2>
                <motion.button
                  whileTap={{ scale: 0.9, rotate: 90 }}
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg glass border border-white/20"
                >
                  <MdClose fontSize={"24px"} className="text-white" />
                </motion.button>
              </div>

              {/* Menu Items */}
              <div className="flex flex-col p-6 gap-2">
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to="/"
                        onClick={() => {
                          item.handler();
                          setOpen(false);
                        }}
                        className="flex items-center gap-4 p-4 rounded-xl glass border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 group"
                      >
                        <div className="p-2 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="text-white text-xl" />
                        </div>
                        <span className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                          {item.name}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Menu Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
                <p className="text-center text-sm text-gray-400">
                  Aarya Rastogi
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;