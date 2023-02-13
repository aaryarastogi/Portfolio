import React from 'react'
import Footer from '../Footer'

const Contact = () => {
  return (
    <div className='w-full bg-white'>
      <h1 className='flex text-center items-center justify-center capitalize pt-10 md:text-4xl text-2xl font-bold transition-all duration-100 md:hover:scale-110'>Feel Free to contact me</h1>
      <hr className='w-10 absolute flex items-center justify-center my-5 h-2 bg-slate-400 rounded-lg md:ml-[49%] ml-[44%]'/>
      <p className='flex items-center justify-center text-center md:text-2xl text-md md:mx-40 mx-2 my-10'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
      {/* Form */}
      <div className='grid flex-col text-left items-center justify-center md:mt-[5%] mt-[14%] h-auto'>
        <form action='https://formspree.io/f/myyaegkp' method='POST'>
        <p className='font-semibold md:text-2xl text-md md:mx-0 mx-10 my-2'>Name</p>
        <input type='text' name='username' placeholder='Username' autoComplete='off' required 
        className='bg-slate-100 py-4 md:px-2 px-2 md:mx-0 mx-10 md:w-[30rem] w-72 rounded-md'></input>
        <p className='text-left font-semibold md:text-2xl text-md md:mx-0 mx-10 my-2'>Email</p>
        <input type='email' name='Email' placeholder='Email' autoComplete='off' required className='bg-slate-100 py-4 md:px-2 px-2 md:mx-0 mx-10 md:w-[30rem] w-72 rounded-md'></input>
        <p className='text-left font-semibold md:text-2xl text-md md:mx-0 mx-10 my-2'>Message</p>
        <textarea name='message' cols={'50'} rows={'10'} autoComplete='off' required placeholder='Enter your message' className='bg-slate-100 py-4 md:px-2 px-2 md:mx-0 mx-10 md:w-[30rem] w-72 rounded-md'></textarea>
        <div className='text-right'><input type='submit' value='send' className='uppercase rounded-md md:text-xl text-md font-semibold bg-slate-500 md:w-36 md:h-14 w-20 h-10 text-center mt-4 md:mx-0 mx-2 cursor-pointer text-gray-700 hover:bg-slate-200 mb-10'></input></div>
      </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact