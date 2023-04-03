import React from 'react'
import Typed from 'react-typed'

const Loader = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-r from-[#2D3436] to-black grid place-items-center'>
<h1 className='md:text-4xl text-3xl font-bold font-serif md:mb-4 text-white'><span className='bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent italic'><Typed
          strings={["Hello" ,"Namaskar", "Hola","Halo","God dag"]}
          typeSpeed={50}
          backSpeed={100}
          cursorChar=''
          loop/></span></h1>    
    </div>
  )
}

export default Loader