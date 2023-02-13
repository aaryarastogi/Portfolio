import React from 'react'
import dopefolio from '../images/dopefolio.jpeg'
import restaurant from '../images/restaurant.png'
import amazon from '../images/amazon.png'
import quote from '../images/quote.png'
import weather from '../images/weather.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useDocumentTitle } from '../../Hooks/setDocumentTitle'


const Project = () => {
  return (
    <div>
      <h1 className='flex text-center items-center justify-center uppercase pt-10 text-4xl font-bold transition-all duration-100 md:hover:scale-110'>Projects</h1>
      <hr className='w-10 absolute flex items-center justify-center my-5 h-2 bg-slate-400 rounded-lg md:ml-[49%] ml-[44%]'/>
      <p className='flex items-center justify-center text-center md:text-2xl text-md md:mx-40 mx-2 my-10'>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
      {/* First Project */}
      <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
        <motion.img 
      initial={{
        x:-200,
        opacity:0,
    }}
    whileInView={{ opacity: 1, x:0, y:0, scale:1}}
    animate={{
        x:0,
        opacity:1,
    }}
    transition={{
      type:"just",
      duration:1,
    }}
        src={dopefolio} alt='dopefolio' className='w-auto md:mt-0'/>
        <motion.div 
        initial={{
          x:100,
          opacity:0
        }}
        animate={{
          x:0,
          opacity:1
        }}
        transition={{
          duration:1,
          ease:"easeInOut"
        }}
        className='flex flex-col justify-start'>
        <h1 className='md:text-4xl text-3xl font-bold md:ml-24 ml-4 md:my-8 my-4'>Dopefolio</h1>
        <p className='text-justify md:ml-24 mx-4 max-w-2xl md:text-2xl text-md inherit block'>
          <p className='my-5'>Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally</p>
        </p>
        <div className='justify-start md:ml-24 ml-4 my-3 bg-slate-500 rounded-md w-28 text-center uppercase h-10 pt-2 font-semibold hover:border-2 cursor-pointer transition-all duration-100 ease-in'>
        <Link to='/project/dopefolio'>Case Study</Link></div>
      </motion.div>
      </div>
      {/* SecondProject */}
      <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
      <motion.img 
      initial={{
        x:-200,
        opacity:0,
    }}
    animate={{
        x:0,
        opacity:1,
    }}
    transition={{
      type:"just",
      duration:1,
    }}src={restaurant} alt='dopefolio' className='w-auto md:mt-0'/>
        <motion.div
        initial={{
          x:100,
          opacity:0
        }}
        animate={{
          x:0,
          opacity:1
        }}
        transition={{
          duration:1,
          ease:"easeInOut"
        }}
         className='flex flex-col justify-start'>
        <h1 className='md:text-4xl text-3xl font-bold md:ml-24 ml-4 md:my-8 my-4'>Restaurant Website</h1>
        <p className='text-justify md:ml-24 mx-4 max-w-2xl md:text-2xl text-md inherit block'>
          <p className='my-5'>It is a full-stack project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, React JS , etc.</p>
        </p>
        <div className='justify-start md:ml-24 ml-4 my-3 bg-slate-500 rounded-md w-28 text-center uppercase h-10 pt-2 font-semibold hover:border-2 cursor-pointer transition-all duration-100 ease-in'>
        <Link to='/project/restaurant'>Case Study</Link></div>
      </motion.div>
      </div>
      {/* ThirdProject */}
      <div className='grid md:grid-cols-2 grid-cols-1 gap-4 '>
      <motion.img 
      initial={{
        x:-200,
        opacity:0,
    }}
    animate={{
        x:0,
        opacity:1,
    }}
    transition={{
      type:"just",
      duration:1,
    }} src={quote} alt='dopefolio' className='w-auto md:mt-0'/>
        <motion.div className='flex flex-col justify-start'
        initial={{
          x:100,
          opacity:0
        }}
        animate={{
          x:0,
          opacity:1
        }}
        transition={{
          duration:1,
          ease:"easeInOut"
        }}>
        <h1 className='md:text-4xl text-3xl font-bold md:ml-24 ml-4 md:my-8 my-4'>Automatic Quote Generator</h1>
        <p className='text-justify md:ml-24 mx-4 max-w-2xl md:text-2xl text-md inherit block'>
          <p className='my-5'>It is a successful project that I created which have been featured on some of the biggest tech sites like API , Node JS etc & used by people globally</p>
        </p>
        <div className='justify-start md:ml-24 ml-4 my-3 bg-slate-500 rounded-md w-28 text-center uppercase h-10 pt-2 font-semibold hover:border-2 cursor-pointer transition-all duration-100 ease-in'>
        <Link to='/project/automaticQuote'>Case Study</Link></div>
      </motion.div>
      </div>
      {/* FourthProject */}
      <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
      <motion.img 
      initial={{
        x:-200,
        opacity:0,
    }}
    animate={{
        x:0,
        opacity:1,
    }}
    transition={{
      type:"just",
      duration:1,
    }}src={amazon} alt='dopefolio' className='w-auto md:mt-0'/>
        <motion.div className='flex flex-col justify-start'
        initial={{
          x:100,
          opacity:0
        }}
        animate={{
          x:0,
          opacity:1
        }}
        transition={{
          duration:1,
          ease:"easeInOut"
        }}>
        <h1 className='md:text-4xl text-3xl font-bold md:ml-24 ml-4 md:my-8 my-4'>Amazon Clone</h1>
        <p className='text-justify md:ml-24 mx-4 max-w-2xl md:text-2xl text-md inherit block'>
          <p className='my-5'>It is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS , React JS etc.</p>
        </p>
        <div className='justify-start md:ml-24 ml-4 my-3 bg-slate-500 rounded-md w-28 text-center uppercase h-10 pt-2 font-semibold hover:border-2 cursor-pointer transition-all duration-100 ease-in'>
          <Link to='/project/amazonclone'>Case Study</Link></div>
      </motion.div>
      </div>
      {/* FifthProject */}
      <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
      <motion.img 
      initial={{
        x:-200,
        opacity:0,
    }}
    animate={{
        x:0,
        opacity:1,
    }}
    transition={{
      type:"just",
      duration:1,
    }} src={weather} alt='dopefolio' className='w-auto md:mt-0'/>
        <motion.div 
        initial={{
          x:100,
          opacity:0
        }}
        animate={{
          x:0,
          opacity:1
        }}
        transition={{
          duration:1,
          ease:"easeInOut"
        }}
        className='flex flex-col justify-start'>
        <h1 className='md:text-4xl text-3xl font-bold md:ml-24 ml-4 md:my-8 my-4'>Weather Forecasting Web App</h1>
        <p className='text-justify md:ml-24 mx-4 max-w-2xl md:text-2xl text-md inherit block'>
          <p className='my-5'>It is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like HTML, Express JS etc & used by thousands of developers globally</p>
        </p>
        <div className='justify-start md:ml-24 ml-4 my-3 bg-slate-500 rounded-md w-28 text-center uppercase h-10 pt-2 font-semibold hover:border-2 cursor-pointer transition-all duration-100 ease-in'>
          <Link to='/project/weather'>Case Study</Link></div>
      </motion.div>
      </div>
    </div>
  )
}

export default Project
