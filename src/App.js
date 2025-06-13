import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import AmazonClone from './Components/PrjFolder/AmazonClone'
import Dopefolio from './Components/PrjFolder/Ecommerce'
import Restaurant from './Components/PrjFolder/Restaurant'
import AutomaticQuote from './Components/PrjFolder/AutomaticQuote'
import Weather from './Components/PrjFolder/Weather'
import Mains from './Components/Mains'
import Loader from './Components/Loader'
import AnimCurs from './Components/AnimCurs'
import Ecommerce from './Components/PrjFolder/Ecommerce'
import ComingSoon from './Components/ComingSoon'
import Tourism from './Components/PrjFolder/Tourism'
import { AnimatePresence } from 'framer-motion';

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 8000);
  }, []);
  return (
  isLoading?
  <Loader/>:
    <div className='overflow-hidden bg-gradient-to-r from-[#2D3436] to-black'>
    <AnimCurs/>
    <Navbar/>
    <Routes>
      <Route path='/*' element={<Mains/>}></Route>
      <Route path='/amazonclone' element={<AmazonClone/>}></Route>
      <Route path='/dopefolio' element={<Dopefolio/>}></Route>
      <Route path='/restaurant' element={<Restaurant/>}></Route>
      <Route path='/automaticQuote' element={<AutomaticQuote/>}></Route>
      <Route path='/weather' element={<Weather/>}></Route>

      <Route path='/comingSoon' element={<ComingSoon/>}></Route>

      <Route path='/casestudy/amazonClone' element={<AmazonClone/>}></Route>
      <Route path='/casestudy/Dopefolio' element={<Dopefolio />}></Route>
      <Route path='/casestudy/restaurantWebsite' element={<Restaurant/>}></Route>
      <Route path='/casestudy/automaticQuoteGenerator' element={<AutomaticQuote/>}></Route>
      <Route path='/casestudy/weatherForecastingWebsite' element={<Weather/>}></Route>
      <Route path='/casestudy/Ecommercewebsite' element={<Ecommerce/>}></Route>
      <Route path='/casestudy/tourismwebsite' element={<Tourism/>}></Route>
    </Routes>
    </div>
  )
}

export default Main
