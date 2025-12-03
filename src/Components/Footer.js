import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'
const Footer = () => {
  return (
    <div className='bg-transparent pb-6 md:pb-10'>
        <div className='grid md:grid-cols-2 gap-8 md:gap-4 text-white w-full'>
            <div className='px-4 sm:px-6 md:px-20 md:pl-32 py-6 md:py-20'>
                <h1 className='mb-2 text-lg sm:text-xl md:text-2xl font-bold uppercase'>Aarya Rastogi</h1>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl max-w-md'>
                   MERN Stack Developer focused on delivering complete web solutions that solve real-world problems.
                </p>
            </div>
            <div className='px-4 sm:px-6 md:px-20 md:pl-48 py-6 md:py-20'>
                <h1 className='mb-4 md:mb-2 text-lg sm:text-xl md:text-2xl font-bold uppercase md:pl-10'>Social</h1>
                <div className='flex flex-row gap-4 md:gap-2 text-2xl md:text-3xl md:pl-8'>
                    <a  href='https://www.linkedin.com/in/aarya-rastogi-512180223/' target={'_blank'} rel='noopener noreferrer'><FaLinkedin className='cursor-pointer hover:text-[#0077b5] transition-colors'/></a>
                    <a href='https://twitter.com/aarya_rastogi' target={'_blank'} rel='noopener noreferrer'><FaTwitter className='cursor-pointer hover:text-[#1DA1F2] transition-colors'/></a>
                    <a href='https://github.com/aaryarastogi' target={'_blank'} rel='noopener noreferrer'><FaGithub className='cursor-pointer hover:text-gray-500 transition-colors'/></a>
                    <a href='https://www.instagram.com/aaryarastogi10/' target={'_blank'} rel='noopener noreferrer'><FaInstagram className='cursor-pointer hover:text-[#e95950] transition-colors'/></a>
                </div>
            </div>
        </div>
        <div className='items-center justify-center mx-4 md:mx-10 mt-4 md:mt-0 h-px bg-[#959595]'></div>
        <h1 className='text-center mt-6 md:mt-20 text-xs sm:text-sm md:text-base text-white px-4'>© Copyright 2024. Made by Aarya Rastogi</h1>
    </div>
  )
}

export default Footer
