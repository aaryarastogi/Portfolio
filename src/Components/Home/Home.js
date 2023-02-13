import React from 'react'
import {FaGithub, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
  return (
  <div className="w-full h-screen/2 overflow-hidden" >
    <div className='place-items-center backdrop-blur-md my-72 grid'>
    <motion.h1 
    animate={{opacity: 1, scale: 1 }}
    transition={{
        duration: 5,
        delay: 0.3,
        // ease: [0.5, 0.71, 1, 1.5],
    }}
    initial={{ opacity: 0, scale: 0.5 }}
    whileHover={{ scale: 1.2 }}
    className='md:text-6xl text-2xl font-bold uppercase text-center text-slate-800'>Hey,I'm Aarya Rastogi</motion.h1>
    <br/>
    <h3 className='md:text-2xl text-md text-center items-center justify-center text-gray-800 md:ml-20 md:mr-14'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</h3>
    <Link to='/project' className='bg-slate-400 hover:bg-slate-200 hover:scale-110 transition-all duration-100 ease-in uppercase leading-3 text-center font-medium text-xl my-6 w-32 h-10 pt-3 rounded-md cursor-pointer'>Projects</Link>
    </div>
    {/* Social media */}
    <div className='hidden lg:block absolute md:-mt-[25rem] text-4xl h-56 translate-y-[-50%] bg-white p-0.5'>
      <a  href='https://www.linkedin.com/in/aarya-rastogi-512180223/' target={'_blank'}><FaLinkedin className='my-4 mx-2 cursor-pointer hover:text-[#0077b5]'/></a>
      <a href='https://twitter.com/aarya_rastogi' target={'_blank'}><FaTwitter className='my-4 mx-2 cursor-pointer hover:text-[#1DA1F2]'/></a>
      <a href='https://github.com/aaryarastogi' target={'_blank'}><FaGithub className='my-4 mx-2 cursor-pointer hover:text-gray-500'/></a>
      <a href='https://www.instagram.com/aaryarastogi10/' target={'_blank'}><FaInstagram className='my-4 mx-2 cursor-pointer hover:text-[#e95950]'/></a>
    </div>
  </div>
  )
}

export default Home
