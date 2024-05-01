import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import data from './data'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import './Carousel.css'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  
const Project = () => {
  const carouselRef = useRef(null);

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const handleNextClick = () => {
  if (carouselRef.current) {
    carouselRef.current.next();
  }
  };
  const[noOfElement,setnoOfElement]=useState(6);
  const slice=data.cardData.slice(0,noOfElement);

return (
    <div className='bg-backgroundcolor my-10 w-full' id='project'>
      <h1 className='flex text-center items-center justify-center uppercase pt-10 text-4xl font-bold transition-all duration-100 text-white md:hover:scale-110'>Projects</h1>
        <hr className='w-10 absolute flex items-center justify-center my-5 h-1 bg-gradient-to-tr  from-[#FD4A59] to-indigo-700 rounded-lg md:ml-[49%] ml-[44%]'/>
        <p className='flex items-center justify-center text-center md:text-xl text-base md:mx-40 mx-2 my-10 text-white'>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
      <Carousel responsive={responsive}
        ref={carouselRef}
        arrows={true}
        swipeable={true}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        slidesToSlide={1}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className='pt-20'
      >
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
            <div className='card lg:mx-80 md:mx-32 mx-2 p-0 overflow-hidden h-auto shadow hover:shadow-md hover:shadow-[#4E9AD5] rounded-md w-auto px-4 text-justify border-2 border-x-indigo-500 border-y-[#4E9AD5]'>
              <img src={item.img} className="card-img-top w-64 my-10 items-center justify-center mx-auto rounded-md"/>
              <div className='card-body'>
                <h5 className='text-xl text-center my-4 font-semibold text-white'>{item.title}</h5>
                <p className='card-text text-base text-justify p-4 text-slate-600'>{item.desc}</p>
                <div className='w-24 h-10 bg-gradient-to-tr from-[#00dbde] to-[#fc00ff] hover:opacity-70 rounded-md justify-center items-center p-2 cursor-pointer my-4 ml-auto font-semibold text-sm'><Link to={`/casestudy/${item.Name}`}>Case Study</Link></div>
              </div>
            </div>
          </motion.div>
          )
        })}
      </Carousel>
    </div>
)
}

export default Project
