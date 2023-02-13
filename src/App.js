import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Project from './Components/Project/Project'
import Contact from './Components/ContactUs/Contact'
import Navbar from './Components/Navbar/Navbar'
import AmazonClone from './Components/AmazonClone'
import Dopefolio from './Components/Dopefolio'
import Restaurant from './Components/Restaurant'
import AutomaticQuote from './Components/AutomaticQuote'
import Weather from './Components/Weather'

const Main = () => {
  return (
    <div className='overflow-hidden 
    style={{backgroundImage: `url("https://media.istockphoto.com/vectors/vector-background-vector-id1168080557?k=20&m=1168080557&s=612x612&w=0&h=VzZIJlFYlys1s40DGdxcZyT6vLWAJgz4qbjHnuHmcTs=")`}}'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='/project' element={<Project/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/project/amazonclone' element={<AmazonClone/>}></Route>
      <Route path='/project/dopefolio' element={<Dopefolio/>}></Route>
      <Route path='/project/restaurant' element={<Restaurant/>}></Route>
      <Route path='/project/automaticQuote' element={<AutomaticQuote/>}></Route>
      <Route path='/project/weather' element={<Weather/>}></Route>
    </Routes>
    </div>
  )
}

export default Main
