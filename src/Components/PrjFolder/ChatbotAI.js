import React, { useEffect } from 'react'
import chatbotai from '../images/chatbotai.jpg'
import Footer from '../Footer.js'
import { Link } from 'react-router-dom'

const ChatbotAI= () => {
  useEffect(() => {
    document.title = "Case Study of Amazon Clone";  
    window.scrollTo(0, 0);
  }, []);
  return (
  <div className='overflow-hidden bg-[#0F1630]'>
    <div className="w-full h-screen/2 overflow-hidden bg-[#0F1630]"> 
    <div className='place-items-center my-72 grid'>
    <h1 className='md:text-6xl text-2xl font-bold text-center bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent italic uppercase mb-4'>Chatbot AI</h1>
    <br/>
    <h3 className='md:text-2xl text-md text-center items-center justify-center text-slate-500 md:ml-20 md:mr-14'>This page contains the case study of Chatbot AI Open-Source Project which includes the Project Overview, Tools Used and Live Links to the official product.</h3>
    <p className='bg-gradient-to-tr from-pink-700 to-blue-800 hover:opacity-75  leading-3 text-center font-normal text-xl my-6  w-40 h-10 py-3 rounded-md cursor-pointer'>
      <a href='https://main.dynaa37iporn7.amplifyapp.com/' target={'_blank'} title='Open only in Desktop Mode'>Project Link</a></p>
    </div>
    </div>
    <img src={chatbotai} className='w-[50rem] items-center justify-center mx-auto'></img>

    <div className='flex flex-col mt-10 gap-10 text-justify max-w-7xl w-[92%] m-auto'>
      <h1 className='text-3xl font-bold text-gray-500 cpitalize'>Project Overview</h1>
      <div>
      <p className='text-xl mb-4 text-slate-500'>Built a full-stack AI chatbot application enabling users to have real-time, conversational interactions with Google's Gemini AI model.</p>
      <p className='text-xl mb-4 text-slate-500'>Implemented secure authentication with both Google OAuth and traditional email/password sign-in for flexible user access.</p>
      <p className='text-xl mb-4 text-slate-500'>Integrated the Gemini API with streaming responses, so replies generate token-by-token for a smoother, more natural chat experience.</p>
      <p className='text-xl mb-4 text-slate-500'>Deployed on AWS Amplify with continuous integration/deployment, enabling seamless updates from the codebase.</p>
      </div>
      <h1 className='text-3xl font-bold text-gray-500 capitalize'>Tools Used</h1>
      <div className='flex flex-row gap-4 mb-4'>
      <div className='bg-gradient-to-tr from-pink-700 to-blue-800 w-auto text-center py-2 px-2 h-auto rounded-md italic'>
        <h1>Next.js</h1>
      </div>
      <div className='bg-gradient-to-tr from-pink-700 to-blue-800 w-auto text-center py-2 px-2 h-auto rounded-md italic'>
        <h1>TailwindCSS</h1>
      </div>
      <div className='bg-gradient-to-tr from-pink-700 to-blue-800 w-auto text-center py-2 px-2 h-auto rounded-md italic'>
        <h1>Typescript</h1>
      </div>
      <div className='bg-gradient-to-tr from-pink-700 to-blue-800 w-auto text-center py-2 px-2 h-auto rounded-md italic'>
        <h1>AWS Amplify</h1>
      </div>
      </div>
      <h1 className='text-3xl font-bold text-gray-500 capitalize'>See Live</h1>
      <div className='flex flex-row gap-4 mb-4'>
      <p className='bg-gradient-to-tr from-pink-700 to-blue-800 hover:opacity-75 capitalize leading-3 text-center font-medium text-base mb-4 w-auto py-3 px-2 rounded-md cursor-pointer'>
        <a href='https://github.com/aaryarastogi/Chatbot-AI' target={'_blank'} title='Open only in Desktop Mode'>Github Link</a></p>
      <Link to='/' className="hover:-translate-y-1 border-2 border-gray-800 transition-all duration-100 ease-in uppercase leading-3 text-center text-transparent bg-clip-text bg-gradient-to-tr from-pink-500 to-blue-700 italic font-medium text-base mb-4 w-auto py-3 px-2 rounded-md cursor-pointer">Go Back</Link>
      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default ChatbotAI;