import React from 'react'
import About from './About/About'
import Contact from './ContactUs/Contact'
import Home from './Home/Home'
import Project from './Project/Project'

const Mains = () => {
  return (
    <div className='bg-[#0a0e27]'>
        <Home/>
        <About/>
        <Project/>
        <Contact/>
    </div>
  )
}

export default Mains