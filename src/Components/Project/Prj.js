import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import data from './data'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Prj = () => {
    const[noOfElement,setnoOfElement]=useState(1);
    const slice=data.cardData.slice(0,noOfElement);
  return (
    <div>
    {slice.map((item,index)=>{
          return(
            <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='items-center justify-center '
    >
            <SwiperSlide >
            {/* <div className=' col-md-6 col-lg-3 mx-0 mb-4'> */}
            <div className='card p-0 w-auto mx-[35%] overflow-hidden h-auto shadow hover:shadow-md hover:shadow-[#4E9AD5] rounded-md px-4 text-justify border-2 border-x-indigo-500 border-y-[#4E9AD5]'>
              <img src={item.img} className="card-img-top w-56 my-10 items-center justify-center mx-auto rounded-md"/>
              <div className='card-body'>
                <h5 className='text-xl text-center my-4 font-semibold text-white'>{item.title}</h5>
                <p className='card-text text-base text-justify p-4 text-slate-600'>{item.desc}</p>
                <div className='w-24 h-10 bg-gradient-to-tr from-[#00dbde] to-[#fc00ff] hover:opacity-70 rounded-md justify-center items-center p-2 cursor-pointer my-4 ml-[70%] mr-[10%] font-semibold'><Link to={`/casestudy/${item.Name}`}>Case Study</Link></div>
              </div>
            </div>
          {/* </div> */}
          </SwiperSlide>
          <SwiperSlide>
          <div className=' col-md-6 col-lg-3 mx-0 mb-4'>
          <div className='card p-0 overflow-hidden mx-[35%] h-auto shadow hover:shadow-md hover:shadow-[#4E9AD5] rounded-md w-auto px-4 text-justify border-2 border-x-indigo-500 border-y-[#4E9AD5]'>
            <img src={item.img} className="card-img-top w-56 my-10 items-center justify-center mx-auto rounded-md"/>
            <div className='card-body'>
              <h5 className='text-xl text-center my-4 font-semibold text-white'>{item.title}</h5>
              <p className='card-text text-base text-justify p-4 text-slate-600'>{item.desc}</p>
              <div className='w-24 h-10 bg-gradient-to-tr from-[#00dbde] to-[#fc00ff] hover:opacity-70 rounded-md justify-center items-center p-2 cursor-pointer my-4 ml-[70%] mr-[10%] font-semibold'><Link to={`/casestudy/${item.Name}`}>Case Study</Link></div>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' col-md-6 col-lg-3 mx-0 mb-4'>
          <div className='card p-0 overflow-hidden mx-[35%] h-auto shadow hover:shadow-md hover:shadow-[#4E9AD5] rounded-md w-auto px-4 text-justify border-2 border-x-indigo-500 border-y-[#4E9AD5]'>
            <img src={item.img} className="card-img-top w-56 my-10 items-center justify-center mx-auto rounded-md"/>
            <div className='card-body'>
              <h5 className='text-xl text-center my-4 font-semibold text-white'>{item.title}</h5>
              <p className='card-text text-base text-justify p-4 text-slate-600'>{item.desc}</p>
              <div className='w-24 h-10 bg-gradient-to-tr from-[#00dbde] to-[#fc00ff] hover:opacity-70 rounded-md justify-center items-center p-2 cursor-pointer my-4 ml-[70%] mr-[10%] font-semibold'><Link to={`/casestudy/${item.Name}`}>Case Study</Link></div>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' col-md-6 col-lg-3 mx-0 mb-4'>
          <div className='card p-0 overflow-hidden mx-[35%] h-auto shadow hover:shadow-md hover:shadow-[#4E9AD5] rounded-md w-auto px-4 text-justify border-2 border-x-indigo-500 border-y-[#4E9AD5]'>
            <img src={item.img} className="card-img-top w-56 my-10 items-center justify-center mx-auto rounded-md"/>
            <div className='card-body'>
              <h5 className='text-xl text-center my-4 font-semibold text-white'>{item.title}</h5>
              <p className='card-text text-base text-justify p-4 text-slate-600'>{item.desc}</p>
              <div className='w-24 h-10 bg-gradient-to-tr from-[#00dbde] to-[#fc00ff] hover:opacity-70 rounded-md justify-center items-center p-2 cursor-pointer my-4 ml-[70%] mr-[10%] font-semibold'><Link to={`/casestudy/${item.Name}`}>Case Study</Link></div>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' col-md-6 col-lg-3 mx-0 mb-4'>
          <div className='card p-0 overflow-hidden h-auto shadow hover:shadow-md hover:shadow-[#4E9AD5] rounded-md w-auto px-4 text-justify border-2 border-x-indigo-500 border-y-[#4E9AD5]'>
            <img src={item.img} className="card-img-top w-56 my-10 items-center justify-center mx-auto rounded-md"/>
            <div className='card-body'>
              <h5 className='text-xl text-center my-4 font-semibold text-white'>{item.title}</h5>
              <p className='card-text text-base text-justify p-4 text-slate-600'>{item.desc}</p>
              <div className='w-24 h-10 bg-gradient-to-tr from-[#00dbde] to-[#fc00ff] hover:opacity-70 rounded-md justify-center items-center p-2 cursor-pointer my-4 ml-[70%] mr-[10%] font-semibold'><Link to={`/casestudy/${item.Name}`}>Case Study</Link></div>
            </div>
          </div>
        </div>
        </SwiperSlide>
        </Swiper>
          )
        })}
    </div>
  )
}

export default Prj