import React, { useEffect } from 'react'
import tourism from '../images/ecommerce.png'
import Footer from '../Footer.js'
import { Link } from 'react-router-dom'

const Ecommerce = () => {
  
  useEffect(() => {
    document.title = "Case Study of Ecommerce Website";  
    window.scrollTo(0, 0);
  }, []);

  return (
  <div className='overflow-hidden bg-[#0F1630]'>
    
    <div className="w-full h-screen/4 overflow-hidden bg-[#0F1630]"> 
      <div className='place-items-center my-72 grid'>
        <h1 className='md:text-6xl text-2xl font-bold text-center bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent italic uppercase mb-4'>E-commerce Website</h1>
        <br/>
        <h3 className='md:text-2xl text-md text-center items-center justify-center text-slate-500 md:ml-20 md:mr-14'>This page contains the case study of Ecommerce Website Open-Source Project which includes the Project Overview, Tools Used and Live Links to the official product.</h3>
        <p className='bg-gradient-to-tr from-pink-700 to-blue-800 hover:opacity-75  leading-3 text-center font-normal text-xl my-6  w-40 h-10 py-3 rounded-md cursor-pointer'><a href='https://github.com/aaryarastogi/Ecommerce-web-app/tree/master' target={'_blank'}>Project Link</a></p>
      </div>
      <img src={tourism} className='w-[50rem] items-center justify-center mx-auto'></img>
    </div>

    <div className='flex flex-col mt-10 gap-10 text-justify max-w-7xl w-[92%] m-auto'>
      <h1 className='text-3xl font-bold text-gray-500 cpitalize'>Project Overview</h1>
      <div>
      <p className='text-xl mb-4 text-slate-500'>Implements secure user authentication for seamless login and registration functionalities, enhancing user experience and data security.</p>
      <p className='text-xl mb-4 text-slate-500'>Utilizes MongoDB, Express.js, React.js, and Node.js to power the e-commerce platform, ensuring a robust and scalable architecture.</p>
      <p className='text-xl mb-4 text-slate-500'>Enables users to add items to their cart, view cart contents, and modify quantities before proceeding to checkout, streamlining the shopping experience.</p>
      <p className='text-xl mb-4 text-slate-500 '>Integrates a secure payment gateway, such as Stripe or PayPal, to facilitate smooth and secure online transactions, instilling trust and confidence in customers.</p>
      <p className='text-xl mb-4 text-slate-500'>Feel free to check out the Project by visiting the Project Link.</p>
      </div>
      <h1 className='text-3xl font-bold text-gray-500 capitalize overflow-x-auto'>Tools Used</h1>
      <div className='overflow-x-auto scrollbar-hidden'>
        <div className='flex flex-row gap-4 mb-4'>
          <div className=' bg-gradient-to-tr from-pink-700 to-blue-800 w-auto text-center py-2 px-2 h-auto rounded-md italic'>
            <h1>React JS</h1>
          </div>
          <div className=' bg-gradient-to-tr from-pink-700 to-blue-800 w-auto text-center py-2 px-2 h-auto rounded-md italic'>
            <h1>Tailwind CSS</h1>
          </div>
          <div className=' bg-gradient-to-tr from-pink-700 to-blue-800 w-auto text-center py-2 px-2 h-auto rounded-md italic'>
            <h1>Mongo DB</h1>
          </div>
          <div className=' bg-gradient-to-tr from-pink-700 to-blue-800 w-auto text-center py-2 px-2 h-auto rounded-md italic'>
            <h1>Express JS</h1>
          </div>
          <div className=' bg-gradient-to-tr from-pink-700 to-blue-800 w-auto text-center py-2 px-2 h-auto rounded-md italic'>
            <h1>Node JS</h1>
          </div>
          <div className=' bg-gradient-to-tr from-pink-700 to-blue-800 w-auto text-center py-2 px-2 h-auto rounded-md italic'>
            <h1>Figma</h1>
          </div>
          <div className=' bg-gradient-to-tr from-pink-700 to-blue-800 w-auto text-center py-2 px-2 h-auto rounded-md italic'>
            <h1>Material-UI</h1>
          </div>
        </div>
      </div>
      <h1 className='text-3xl font-bold text-gray-500 capitalize'>See Live</h1>
      <div className='flex flex-row gap-4 mb-4'>
      <p className='bg-gradient-to-tr from-pink-700 to-blue-800 hover:opacity-75 capitalize leading-3 text-center font-medium text-base mb-4 w-auto py-3 px-2 rounded-md cursor-pointer'><a href='https://github.com/aaryarastogi/Ecommerce-web-app/tree/master' target={'_blank'}>Project Link</a></p>
      <Link to='/' className='hover:-translate-y-1 border-2 border-gray-800 transition-all duration-100 ease-in uppercase leading-3 text-center text-transparent bg-clip-text bg-gradient-to-tr from-pink-500 to-blue-700 italic font-medium text-base mb-4 w-auto py-3 px-2 rounded-md cursor-pointer'>Go Back</Link>
      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default Ecommerce