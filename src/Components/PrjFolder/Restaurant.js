import React, { useEffect } from 'react'
import restaurant from '../images/restaurant.png'
import Footer from '../Footer.js'
import { Link } from 'react-router-dom'

const Restaurant= () => {
  
  useEffect(() => {
    document.title = "Case Study of Restaurant Website";  
    window.scrollTo(0, 0);
  }, []);

  return (
  <div className='overflow-hidden bg-[#0F1630]'>
    <div className="w-full h-screen/2 overflow-hidden"> 
    <div className='place-items-center my-72 grid'>
    <h1 className='md:text-6xl text-2xl font-bold text-center bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent italic uppercase mb-4'>Restaurant Website</h1>
    <br/>
    <h3 className='md:text-2xl text-md text-center items-center justify-center text-slate-500 md:ml-20 md:mr-14'>This page contains the case study of Restaurant website Open-Source Project which includes the Project Overview, Tools Used and Live Links to the official product.</h3>
    <p className='bg-gradient-to-tr from-pink-700 to-blue-800 hover:opacity-75  leading-3 text-center font-normal text-xl my-6  w-40 h-10 py-3 rounded-md cursor-pointer'><a href='https://minerestaurantwebapp.netlify.app' target={'_blank'}>Project Link</a></p>
    </div>
    </div>
    <img src={restaurant} className='w-[50rem] items-center justify-center mx-auto'></img>
    <div className='flex flex-col mt-10 gap-10 text-justify max-w-7xl w-[92%] m-auto'>
      <h1 className='text-3xl font-bold text-gray-500 cpitalize'>Project Overview</h1>
      <div>
      <p className='text-xl mb-4 text-slate-500'>It is an Open-Source project which is a simple and clean multi-page restaurant website template for developers. I created this project for developers to quickly build a good-looking and fast-performing multi-page restaurant website without having to code their restaurant website from scratch.</p>
      <p className='text-xl mb-4 text-slate-500'>A restaurant web application is a platform that allows users to interact with a restaurant, place orders for food and drinks, and manage their dining experience from a web browser or mobile device.</p>
      <p className='text-xl mb-4 text-slate-500'>The goal of a restaurant web application is to provide a convenient and user-friendly platform for customers to engage with a restaurant and order food for delivery or pickup.The use of a restaurant web application can significantly enhance the customer experience and improve the efficiency of the restaurant's operations, making it a valuable tool for restaurants of all sizes.</p>
      <p className='text-xl mb-4 text-slate-500'>It has many other features like you can add items to cart and you can go to different different pages by just clicking on button . Actually It can help you a lot to learn in React JS</p>
      <p className='text-xl mb-4 text-slate-500'>Feel free to check out the Project by visiting the Project Link.</p>
      </div>
      <h1 className='text-3xl font-bold text-gray-500 capitalize'>Tools Used</h1>
      <div className='overflow-x-auto scrollbar-hidden'>
        <div className='flex flex-row gap-4 mb-4'>
          <div className='bg-gradient-to-tr from-pink-700 to-blue-800 w-auto text-center py-2 px-2 h-auto rounded-md italic'>
            <h1>React JS</h1>
          </div>
          <div className=' bg-gradient-to-tr from-pink-700 to-blue-800 w-auto text-center py-2 px-2 h-auto rounded-md italic'>
            <h1>Tailwind CSS</h1>
          </div>
          <div className=' bg-gradient-to-tr from-pink-700 to-blue-800 w-auto text-center py-2 px-2 h-auto rounded-md italic'>
            <h1>JavaScript</h1>
          </div>
          <div className=' bg-gradient-to-tr from-pink-700 to-blue-800 w-auto text-center py-2 px-2 h-auto rounded-md italic'>
            <h1>Firebase</h1>
          </div>
          <div className=' bg-gradient-to-tr from-pink-700 to-blue-800 w-auto text-center py-2 px-2 h-auto rounded-md italic'>
            <h1>Netlify</h1>
          </div>
          <div className=' bg-gradient-to-tr from-pink-700 to-blue-800 w-auto text-center py-2 px-2 h-auto rounded-md italic'>
            <h1>Github</h1>
          </div>
        </div>
      </div>
      <h1 className='text-3xl font-bold text-gray-500 capitalize'>See Live</h1>
      <div className='flex flex-row gap-4 mb-4'>
      <p className='bg-gradient-to-tr from-pink-700 to-blue-800 hover:opacity-75 capitalize leading-3 text-center font-medium text-base mb-4 w-auto py-3 px-2 rounded-md cursor-pointer'><a href='https://minerestaurantwebapp.netlify.app' target={'_blank'}>Project Link</a></p>
      <Link to='/project' className='hover:-translate-y-1 border-2 border-gray-800 transition-all duration-100 ease-in uppercase leading-3 text-center text-transparent bg-clip-text bg-gradient-to-tr from-pink-500 to-blue-700 italic font-medium text-base mb-4 w-auto py-3 px-2 rounded-md cursor-pointer'>Go Back</Link>
      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default Restaurant