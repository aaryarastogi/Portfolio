import React from 'react'
import react from '../images/react.png'
import html from '../images/html.png'
import css from '../images/css.png'
import tcss from '../images/tcss.png'
import figma from '../images/figma.png'
import node from '../images/node.png'
import express from '../images/express.png'
import js from '../images/jss.png'
import cpp from '../images/c++.png'
import FrontBack from '../images/piechart.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../Navbar/Navbar'
import { Line } from 'rc-progress'
import './style.css'
import ProgressBar from '@ramonak/react-progress-bar'

const About = () => {
  const handleContact=()=>{
    const element=document.getElementById("contact");
    if(element){
      element.scrollIntoView({behavior:"smooth"})
    }
  }
  return (
    <div className='w-full bg-fixed' id='about'>
      {/* <Navbar/> */}
      <h1 className='flex text-center items-center justify-center uppercase pt-10 text-4xl font-bold text-white transition-all duration-100 md:hover:scale-110 '>About Me</h1>
      <hr className='w-10 absolute flex items-center justify-center my-5 h-2 bg-slate-400 rounded-lg md:ml-[49%] ml-[44%]'/>
      <p className='flex items-center justify-center text-center md:text-2xl text-md md:mx-40 mx-2 my-10 text-white'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
      {/* grid part */}
      <div className='grid md:grid-cols-2 grid-rows-2'>
        <motion.div 
          initial={{
            x:-100,
            y:-10,
            scale:0.5,
            opacity:0
        }}
        whileInView={{ opacity: 1, x:0, y:0, scale:1}}
        exit={{
          x:-100,
            y:-10,
            scale:0.5,
          opacity:0}}
        transition={{
          ease:"easeInOut",
          duration:2,
        }}
        className='flex flex-col justify-start'>
        <h1 className='md:text-4xl text-3xl font-bold font-serif md:ml-24 ml-4 md:my-8 my-4 text-white'>Get to know me!</h1>
        <p className='text-justify md:ml-24 mx-4 max-w-2xl md:text-2xl text-md inherit block text-slate-400'>
          <p className='my-5'>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
          <p className='my-5'>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a className='text-slate-600 underline cursor-pointer font-semibold hover:text-black' href='https://www.linkedin.com/in/aarya-rastogi-512180223/' target={'_blank'}>Linkedin</a> where I post useful content related to Web Development and Programming</p>  
          <p className='my-5'>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
        </p>
        <div className='justify-start md:ml-24 ml-4 my-3 bg-gradient-to-tr from-[#4E9AD5] to-[#482BBE] rounded-md w-28 text-center uppercase h-10 pt-2 font-semibold hover:opacity-70  cursor-pointer transition-all duration-100 ease-in'><Link to='/' onClick={handleContact}>Contact</Link></div>
      </motion.div>
      {/* <motion.div
      initial={{
        x:100,
        y:-10,
        scale:0.5,
        opacity:0
    }}
    whileInView={{ opacity: 1, x:0, y:0, scale:1}}
    exit={{
      x:100,
        y:-10,
        scale:0.5,
        opacity:0
    }}
    transition={{
      ease:"easeInOut",
      duration:2,
    }}
       className='flex flex-col justify-start'>
      <h1 className='md:text-4xl text-3xl font-bold font-serif ml-4 md:my-8 my-4 text-white'>My Skills</h1>
      <div className='grid grid-cols-5 mx-4 leading-8 gap-6'>
        <img src={react} alt='React Js' className='w-20 h-20 rounded-full cursor-pointer hover:scale-110' title='React JS'/>
        <img src={html} alt='HTML' className='w-20 h-20 rounded-full cursor-pointer hover:scale-110'title='HTML'/>
        <img src={css} alt='CSS' title='CSS'className='w-20 bg-black h-20 rounded-full cursor-pointer hover:scale-110'/>
        <img src={js} alt='JavaScript' title='JavaScript' className='w-20 h-20 rounded-full cursor-pointer hover:scale-110'/>
        <img src={node} alt='Node Js' title='Node JS' className='w-20 bg-black h-20 rounded-full cursor-pointer hover:scale-110'/>
        <img src={express} alt='Express Js' title='Express JS' className='w-20 h-20 rounded-full cursor-pointer hover:scale-110'/>
        <img src={tcss} alt='Tailwind CSS' title='Tailwind CSS' className='w-20 bg-black h-20 rounded-full cursor-pointer hover:scale-110'/>
        <img src={figma} alt='Figma' title='Figma' className='w-20 bg-black h-20 rounded-full cursor-pointer hover:scale-110'/>
        <img src={cpp} alt='C++' title='C++' className='w-20 bg-black h-20 rounded-full cursor-pointer hover:scale-110'/>
      </div>
      </motion.div> */}
        <motion.div 
        initial={{
          x:100,
          y:-10,
          scale:0.5,
          opacity:0
      }}
      whileInView={{ opacity: 1, x:0, y:0, scale:1}}
      exit={{
        x:100,
          y:-10,
          scale:0.5,
          opacity:0
      }}
      transition={{
        ease:"easeInOut",
        duration:2,
      }}
        className='flex flex-col justify-start gap-2 md:px-10 md:py-0 pb-10'>
        <h1 className='md:text-4xl text-3xl font-bold font-serif ml-4 md:my-8 my-4 text-white'>My Skills</h1>
        {/* firstskill */}
        
          <div className='flex flex-row'> 
            <h1 className='text-xl font-semibold text-slate-600 ml-4 uppercase'>REACT JS</h1>
            <h1 className='text-xl font-semibold text-slate-600 ml-auto mr-4'>90%</h1>
          </div>
          <div className='relative h-4 bg-gray-200 rounded mx-4'>
            <div className='w-[90%] absolute top-0 h-4 rounded shim-blue'></div>
          </div>

          <div className='flex flex-row'> 
            <h1 className='text-xl font-semibold text-slate-600 ml-4 uppercase'>HTML</h1>
            <h1 className='text-xl font-semibold text-slate-600 ml-auto mr-4'>80%</h1>
          </div>
          <div className='relative h-4 bg-gray-200 rounded mx-4'>
            <div className='w-[80%] absolute top-0 h-4 rounded shim-green'></div>
          </div>

          <div className='flex flex-row'> 
            <h1 className='text-xl font-semibold text-slate-600 ml-4 uppercase'>CSS</h1>
            <h1 className='text-xl font-semibold text-slate-600 ml-auto mr-4'>80%</h1>
          </div>
          <div className='relative h-4 bg-gray-200 rounded mx-4'>
            <div className='w-[80%] absolute top-0 h-4 rounded shim-pink'></div>
          </div>

          <div className='flex flex-row'> 
            <h1 className='text-xl font-semibold text-slate-600 ml-4 uppercase'>Tailwind CSS</h1>
            <h1 className='text-xl font-semibold text-slate-600 ml-auto mr-4'>80%</h1>
          </div>
          <div className='relative h-4 bg-gray-200 rounded mx-4'>
            <div className='w-[80%] absolute top-0 h-4 rounded shim-red'></div>
          </div>

          <div className='flex flex-row'> 
            <h1 className='text-xl font-semibold text-slate-600 ml-4 uppercase'>C++</h1>
            <h1 className='text-xl font-semibold text-slate-600 ml-auto mr-4'>70%</h1>
          </div>
          <div className='relative h-4 bg-gray-200 rounded mx-4'>
            <div className='w-[70%] absolute top-0 h-4 rounded shim-gray'></div>
          </div>
          
          <div className='flex flex-row'> 
            <h1 className='text-xl font-semibold text-slate-600 ml-4 uppercase'>Node JS</h1>
            <h1 className='text-xl font-semibold text-slate-600 ml-auto mr-4'>70%</h1>
          </div>
          <div className='relative h-4 bg-gray-200 rounded mx-4'>
            <div className='w-[70%] absolute top-0 h-4 rounded shim-orange'></div>
          </div>

          <div className='flex flex-row'> 
            <h1 className='text-xl font-semibold text-slate-600 ml-4 uppercase'>EXpress js</h1>
            <h1 className='text-xl font-semibold text-slate-600 ml-auto mr-4'>70%</h1>
          </div>
          <div className='relative h-4 bg-gray-200 rounded mx-4'>
            <div className='w-[70%] absolute top-0 h-4 rounded shim-mergenta'></div>
          </div>

          <div className='flex flex-row'> 
            <h1 className='text-xl font-semibold text-slate-600 ml-4 uppercase'>Mongo db</h1>
            <h1 className='text-xl font-semibold text-slate-600 ml-auto mr-4'>60%</h1>
          </div>
          <div className='relative h-4 bg-gray-200 rounded mx-4'>
            <div className='w-[60%] absolute top-0 h-4 rounded shim-ptani'></div>
          </div>

        </motion.div>
      </div>

      {/* PieChartPart */}
      <div className='grid md:grid-cols-3 md:-mt-56 -mt-0'>
        {/* Frontend */}
        <div className='md:-mt-80 md:ml-16 ml-4 justify-start '>
          <h1 className='text-4xl font-semibold mb-4 md:ml-0 text-slate-600'>Frontend Developer</h1>
          <h2 className='text-xl my-2 text-slate-400'>React Js</h2>
          <h2 className='text-xl my-2 text-slate-400'>Designing(kinda)</h2>
          <h2 className='text-xl my-2 text-slate-400'>Listening Music</h2>
        </div>
        {/* image */}
        <motion.img 
        initial={{
          opacity:0,
          scale: 0.5 }}
        whileInView={{ 
          opacity:1,
          scale: 1 }}
          exit={{
            opacity:0,
            scale:0.5
          }}
        transition={{ 
          x: { type: "spring", stiffness: 300, damping: 30 },
          ease: "easeInOut",
          delay:0.1,
          duration: 2 }}
        src={FrontBack} className='items-center justify-center md:-mt-[30rem] md:w-auto'></motion.img>
        {/* Frontend */}
        <div className='md:-mt-80 md:ml-16 ml-4 justify-start md:mb-0 mb-4'>
          <h1 className='text-4xl font-semibold mb-4 text-slate-600'>Backend Developer</h1>
          <h2 className='text-xl my-2 text-slate-400'>Express JS</h2>
          <h2 className='text-xl my-2 text-slate-400'>NodeJS</h2>
          <h2 className='text-xl my-2 capitalize text-slate-400'>Explore new Technologies</h2>
        </div>
      </div>

    </div>
  )
}

export default About
