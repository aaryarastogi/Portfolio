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
    <div className='w-full py-6 sm:py-12 md:py-20 relative' id='project'>
      {/* Background decoration */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent'></div>
      
      <div className='max-w-7xl mx-auto px-4 sm:px-6 relative z-10'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4'>
            My <span className='gradient-text'>Projects</span>
          </h1>
          <div className='flex items-center justify-center gap-2 md:gap-4 mb-4'>
            <div className='h-1 w-8 md:w-16 bg-gradient-to-r from-transparent to-purple-500'></div>
            <div className='w-2 h-2 md:w-3 md:h-3 rounded-full bg-purple-500'></div>
            <div className='h-1 w-8 md:w-16 bg-gradient-to-l from-transparent to-purple-500'></div>
          </div>
          <p className='text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-4'>
            Here you will find some of the personal and client projects that I created with each project containing its own case study
          </p>
        </motion.div>

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
          className='pt-10'
        >
        {slice.map((item,index)=>{
            return(
              <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease:'easeOut'
              }}
              className='flex justify-center mb-8'
            >
              <motion.div 
                className='glass rounded-2xl overflow-hidden max-w-2xl w-full border border-white/10 backdrop-blur-xl group hover:border-purple-500/50 transition-all duration-300'
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(102, 126, 234, 0.3)" }}
              >
                <div className='relative overflow-hidden'>
                  <img 
                    src={item.img} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    alt={item.title}
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </div>
                <div className='p-4 sm:p-6 md:p-8'>
                  <h5 className='text-lg sm:text-xl md:text-2xl text-center mb-3 md:mb-4 font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300'>{item.title}</h5>
                  <p className='text-xs sm:text-sm md:text-base text-justify text-gray-300 leading-relaxed mb-4 md:mb-6'>{item.desc}</p>
                  <motion.div 
                    className='flex justify-end'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      to={`/casestudy/${item.Name}`}
                      className='px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-sm md:text-base text-white shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 flex items-center gap-2'
                    >
                      <span>Case Study</span>
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
            )
          })}
        </Carousel>
      </div>
    </div>
)
}

export default Project
