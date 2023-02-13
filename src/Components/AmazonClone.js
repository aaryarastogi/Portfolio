import React, { useEffect } from 'react'
import amazon from './images/amazon.png'
import Footer from './Footer.js'
import { Link } from 'react-router-dom'

const AmazonClone= () => {
  useEffect(() => {
    document.title = "Case Study of Amazon Clone";  
  }, []);
  return (
  <div className='overflow-hidden'>
    <div className="w-full h-screen/2 overflow-hidden"
    style={{backgroundImage: `url("https://media.istockphoto.com/vectors/vector-background-vector-id1168080557?k=20&m=1168080557&s=612x612&w=0&h=VzZIJlFYlys1s40DGdxcZyT6vLWAJgz4qbjHnuHmcTs=")`}}> 
    <div className='place-items-center my-72 grid'>
    <h1 className='md:text-6xl text-2xl font-bold text-center text-slate-800 uppercase mb-4'>Amazon Clone</h1>
    <br/>
    <h3 className='md:text-2xl text-md text-center items-center justify-center text-gray-800 md:ml-20 md:mr-14'>This page contains the case study of Amazon Clone Open-Source Project which includes the Project Overview, Tools Used and Live Links to the official product.</h3>
    <p className='bg-slate-400 hover:bg-slate-200 hover:scale-110 transition-all duration-100 ease-in uppercase leading-3 text-center font-medium text-xl my-6  w-44 h-16 pt-6 rounded-md cursor-pointer'><a href='https://mineamazonclonewebapp.netlify.app' target={'_blank'} title='Open only in Desktop Mode'>Project Link</a></p>
    </div>
    </div>

    <div className='flex flex-col mt-10 gap-10 text-justify pl-24 pr-16 max-w-7xl w-[92%] m-auto'>
      <img src={amazon} className='w-[50rem]'></img>
      <h1 className='text-3xl font-bold text-gray-700 capitalize'>Project Overview</h1>
      <div>
      <p className='text-xl mb-4 text-gray-600'>It is an Open-Source project which is a simple and clean multi-page portfolio website template for developers. I created this project for some experience to gain on how react projects work.</p>
      <p className='text-xl mb-4 text-gray-600'>It  is designed to replicate the functionality and features of Amazon.com, the world's largest online retailer. The goal of an Amazon clone is to provide users with a similar shopping experience to Amazon, but with a unique brand, different product offerings, and custom features.</p>
      <p className='text-xl mb-4 text-gray-600'>Dopefolio is now being used by thousands of developers globally and it has helped many people in landing jobs & opportunities which makes me happy that my creation is helping other people in building their careers.</p>
      <p className='text-xl mb-4 text-gray-600'>Feel free to check out the Project by visiting the Project Link.</p>
      </div>
      <h1 className='text-3xl font-bold text-gray-700 capitalize'>Tools Used</h1>
      <div className='flex flex-row gap-4 mb-4'>
      <div className=' bg-gray-500 w-auto text-center py-2 px-2 h-auto rounded-md'>
        <h1>React JS</h1>
      </div>
      <div className=' bg-gray-500 w-auto text-center py-2 px-2 h-auto rounded-md'>
        <h1>CSS</h1>
      </div>
      <div className=' bg-gray-500 w-auto text-center py-2 px-2 h-auto rounded-md'>
        <h1>HTML</h1>
      </div>
      <div className=' bg-gray-500 w-auto text-center py-2 px-2 h-auto rounded-md'>
        <h1>Github</h1>
      </div>
      </div>
      <h1 className='text-3xl font-bold text-gray-700 capitalize'>See Live</h1>
      <div className='flex flex-row gap-4 mb-4'>
      <p className='bg-slate-400 hover:bg-slate-200 transition-all duration-100 ease-in uppercase leading-3 text-center font-medium text-base mb-4 w-auto py-3 px-2 rounded-md cursor-pointer'><a href='https://mineamazonclonewebapp.netlify.app' target={'_blank'} title='Open only in Desktop Mode'>Project Link</a></p>
      <Link to='/project' className='hover:-translate-y-1 border-2 border-gray-500 transition-all duration-100 ease-in uppercase leading-3 text-center font-medium text-base mb-4 w-auto py-3 px-2 rounded-md cursor-pointer'>Go Back</Link>
      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default AmazonClone