import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-transparent pb-10'>
        <div className='grid md:grid-cols-2 grid-rows-1 md:gap-4 text-white w-full md:h-56 h-auto'>
            <div className='md:p-20 md:pl-32 p-10 md:pb-10 pb-2'>
                <h1 className='mb-2 md:text-2xl text-xl font-bold uppercase'>Aarya Rastogi</h1>
                <p className='md:w-[30rem] md:text-xl text-base'>
                   MERN Stack Developer focused on delivering complete web solutions that solve real-world problems.
                </p>
            </div>
            <div className='md:p-20 md:pl-48'>
                <h1 className='mb-2 md:text-2xl text-xl font-bold uppercase pl-10'>Social</h1>
                <div className='flex flex-row md:text-3xl text-xl pl-8'>
                    <a  href='https://www.linkedin.com/in/aarya-rastogi-512180223/' target={'_blank'}><FaLinkedin className='my-4 mx-2 cursor-pointer hover:text-[#0077b5]'/></a>
                    <a href='https://twitter.com/aarya_rastogi' target={'_blank'}><FaTwitter className='my-4 mx-2 cursor-pointer hover:text-[#1DA1F2]'/></a>
                    <a href='https://github.com/aaryarastogi' target={'_blank'}><FaGithub className='my-4 mx-2 cursor-pointer hover:text-gray-500'/></a>
                    <a href='https://www.instagram.com/aaryarastogi10/' target={'_blank'}><FaInstagram className='my-4 mx-2 cursor-pointer hover:text-[#e95950]'/></a>
                </div>
            </div>
        </div>
        <div className='items-center justify-center md:mx-10 mt-0 h-[0.32px] bg-[#959595]'></div>
        <h1 className='text-center md:mt-20 my-6 md:my-0 md:text-md text-sm text-white'>© Copyright 2024. Made by Aarya Rastogi</h1>
    </div>
  )
}

export default Footer
