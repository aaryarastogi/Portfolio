import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import data from './data'

const Project = () => {
  const loadMore=()=>{
    setnoOfElement(noOfElement+noOfElement);
  }
  const[noOfElement,setnoOfElement]=useState(3);
  const slice=data.cardData.slice(0,noOfElement);
  return (
    <div id='project'>
    <h1 className='flex text-center items-center justify-center uppercase pt-10 text-4xl font-bold transition-all duration-100 text-white md:hover:scale-110'>Projects</h1>
      <hr className='w-10 absolute flex items-center justify-center my-5 h-1 bg-gradient-to-tr  from-[#FD4A59] to-indigo-700 rounded-lg md:ml-[49%] ml-[44%]'/>
      <p className='flex items-center justify-center text-center md:text-xl text-base md:mx-40 mx-2 my-10 text-white'>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
    <div className='py-4 container'>
      <div className='w-auto h-auto row justify-content-center grid md:grid-cols-3 grid-cols-1 gap-6 mx-[10%] overflow-hidden'>
        {slice.map((item,index)=>{
          return(
            <motion.div 
            initial={{
              opacity:0
            }}
            whileInView={{
              opacity:1
            }}
            transition={{
              x: { type:'spring', stiffness: 300, damping: 30 },
              duration:5,
              ease:'easeInOut'
            }}
            className=' col-md-6 col-lg-3 mx-0 mb-4'>
            <div className='card p-0 overflow-hidden h-auto shadow hover:shadow-md hover:shadow-[#4E9AD5] rounded-md w-auto px-4 text-justify border-2 border-x-indigo-500 border-y-[#4E9AD5]'>
              <img src={item.img} className="card-img-top w-56 my-10 items-center justify-center mx-auto rounded-md"/>
              <div className='card-body'>
                <h5 className='text-xl text-center my-4 font-semibold text-white'>{item.title}</h5>
                <p className='card-text text-base text-justify p-4 text-slate-600'>{item.desc}</p>
                <div className='w-24 h-10 bg-gradient-to-tr from-[#00dbde] to-[#fc00ff] hover:opacity-70 rounded-md justify-center items-center p-2 cursor-pointer my-4 ml-[70%] mr-[10%] font-semibold text-sm'><Link to={`/casestudy/${item.Name}`}>Case Study</Link></div>
              </div>
            </div>
          </motion.div>
          )
        })}
        <button className='w-24 h-10 bg-gradient-to-tr from-[#00dbde] to-[#fc00ff] hover:opacity-70 rounded-md justify-center items-center p-2'
        onClick={()=>loadMore()}
        >Load More</button>
      </div>
    </div>
    </div>
  )
}

export default Project
