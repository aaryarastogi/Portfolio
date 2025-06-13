import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Typed from 'react-typed'
import { motion } from 'framer-motion'
import animationData from '../lotties/coder';
import girl from '../images/Group 10.png'
import resume from '../images/resume.pdf'

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const buttons=document.querySelectorAll('button');
    buttons.forEach(btn=>{
      btn.addEventListener('click',function(e){
        const x=e.clientX - this.offsetLeft;
        const y=e.clientY - this.offsetTop;
        const ripples=document.createElement('span');
        ripples.className=`left-[${x}px] top-[${y}px]`+'absolute bg-white -translate-x-1/2 -translate-y-1/2 rounded-full animate-ripple';
        this.appendChild(ripples);
        setTimeout(()=>ripples.remove(),1000)
      })
    })

  const handleContact=()=>{
    const element=document.getElementById("contact");
    if(element){
      element.scrollIntoView({behavior:"smooth"})
    }
  }

  const handleResume=()=>{
    window.open(resume,'_blank')
  }

  return (
    <div className='w-full h-screen grid md:grid-cols-2 grid-rows-2' id='home'>
      <div className='hidden lg:block absolute my-[30%] text-4xl h-56 translate-y-[-50%] bg-transparent backdrop-blur-sm p-0.5'>
      <a  href='https://www.linkedin.com/in/aarya-rastogi-512180223/' target={'_blank'}><FaLinkedin className='my-4 mx-2 cursor-pointer text-white hover:text-[#0077b5]'/></a>
      <a href='https://twitter.com/aarya_rastogi' target={'_blank'}><FaTwitter className='my-4 mx-2 cursor-pointer text-white hover:text-[#1DA1F2]'/></a>
      <a href='https://github.com/aaryarastogi' target={'_blank'}><FaGithub className='my-4 mx-2 cursor-pointer text-white hover:text-gray-500'/></a>
      <a href='https://www.instagram.com/aaryarastogi10/' target={'_blank'}><FaInstagram className='my-4 mx-2 cursor-pointer text-white hover:text-[#e95950]'/></a>
    </div>
      <motion.div 
      initial={{
        opacity:0,
        z:-10
      }}
      whileInView={{
        opacity:1,
        z:10
      }}
      transition={{
        duration:5,
        type:'spring'
      }}
      className='flex flex-col justify-start items-start my-[40%] md:ml-32 ml-4 md:mr-0 mr-4 md:gap-3 gap-2'>
        <h1 className='md:text-4xl text-2xl font-bold text-gray-500 font-serif md:mb-6 items-center justify'>Hello!</h1>
        <h1 className='md:text-4xl text-3xl font-bold font-serif md:mb-4 text-white'> I'm <span className='bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent'><Typed
          strings={["Aarya Rastogi" , " A Developer"," A Coder"," A Programmer"]}
          typeSpeed={200}
          backSpeed={100}
          cursorChar=''
          loop/></span></h1>
          <h3 className='md:text-xl text-md items-center justify-center text-white text-justify my-4'>
            <span className='italic text-pink-400 font-semibold'>Engineer by background, Full-Stack Developer by choice</span> 
            — I specialize in creating full-stack web applications that are fast, functional, and user-friendly.
          </h3>
          <div className='flex flex-row gap-6'>
            <button className='justify-start p-2 rounded-md w-28 text-center uppercase h-10 pt-2 font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 hover:opacity-60 tracking-wider cursor-pointer transition-all duration-100 ease-in' onClick={handleContact}>Hire Me</button>
            <button className='justify-start p-2 rounded-md w-32 text-center uppercase h-10 pt-2 font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 hover:opacity-60 tracking-wider cursor-pointer transition-all duration-100 ease-in' onClick={handleResume}>My Resume</button>
          </div>
        </motion.div>

      <motion.div 
      initial={{
        opacity:0,
        z:-10
      }}
      whileInView={{
        opacity:1,
        z:10
      }}
      transition={{
        duration:10,
        type:'spring'
      }}className='flex flex-col justify-start'>
          <img src={girl} alt='coder' className='md:w-96 w-60 items-center justify-center my-[30%] md:ml-32 ml-16 md:mr-0 mr-4 bg-transparent'></img>
        </motion.div>
    </div>
  )
}

export default Home;