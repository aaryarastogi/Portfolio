import React from 'react'
import About from './About/About'
import Contact from './ContactUs/Contact'
import Home from './Home/Home'
import Loader from './Loader'
import Navbar from './Navbar/Navbar'
import Prj from './Project/Prj'
import Project from './Project/Project'

const Mains = () => {
  return (
    <div className='bg-[#0F1630]'>
        <Home/>
        <About/>
        <Project/>
        <Contact/>
    </div>
  )
}

export default Mains