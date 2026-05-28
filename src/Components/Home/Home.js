import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Typed from 'react-typed'
import { motion } from 'framer-motion'
import animationData from '../lotties/coder';
import girl from '../images/Group 10.png'
import resume from '../images/resume.pdf'
import { Link } from 'react-router-dom';

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
    <div className='w-full min-h-screen flex items-center justify-center relative overflow-hidden pt-20' id='home'>
      {/* Animated background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20'></div>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]'></div>
      
      {/* Social Links Sidebar */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='hidden lg:flex fixed left-8 top-0 bottom-0 z-10 flex-col items-center justify-center gap-6'
      >
        <motion.a 
          href='https://www.linkedin.com/in/aarya-rastogi-512180223/' 
          target={'_blank'}
          whileHover={{ scale: 1.2, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className='glass p-3 rounded-full cursor-pointer text-white hover:text-[#0077b5] transition-all duration-300'
        >
          <FaLinkedin className='text-2xl'/>
        </motion.a>
        <motion.a 
          href='https://twitter.com/aarya_rastogi' 
          target={'_blank'}
          whileHover={{ scale: 1.2, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className='glass p-3 rounded-full cursor-pointer text-white hover:text-[#1DA1F2] transition-all duration-300'
        >
          <FaTwitter className='text-2xl'/>
        </motion.a>
        <motion.a 
          href='https://github.com/aaryarastogi' 
          target={'_blank'}
          whileHover={{ scale: 1.2, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className='glass p-3 rounded-full cursor-pointer text-white hover:text-gray-300 transition-all duration-300'
        >
          <FaGithub className='text-2xl'/>
        </motion.a>
        <motion.a 
          href='https://www.instagram.com/aaryarastogi10/' 
          target={'_blank'}
          whileHover={{ scale: 1.2, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className='glass p-3 rounded-full cursor-pointer text-white hover:text-[#e95950] transition-all duration-300'
        >
          <FaInstagram className='text-2xl'/>
        </motion.a>
      </motion.div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10 py-12 md:py-0 pb-12 sm:pb-24 lg:pb-12'>
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='flex flex-col justify-center items-start gap-4 md:gap-6 text-center md:text-left'
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className='text-base md:text-lg font-medium text-purple-400 mb-2 block'>Hello,</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight'
          >
            <span className='block'>I'm</span>
            <span className='gradient-text block mt-2'>
              <Typed
                strings={["Aarya Rastogi", "A Frontend Developer", "A Full-Stack Developer", "An UI/UX Enthusiast"]}
                typeSpeed={100}
                backSpeed={50}
                cursorChar='|'
                loop
              />
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='text-base md:text-lg text-gray-300 leading-relaxed max-w-xl'
          >
            <span className='text-purple-400 font-semibold italic'>Engineer by background, Full-Stack Developer by choice</span>
            <br className='hidden md:block'/>
            <span className='block mt-2'>I specialize in creating beautiful, fast, and functional web applications using modern technologies.</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className='flex flex-wrap gap-3 md:gap-4 mt-4 justify-center md:justify-start w-full'
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(102, 126, 234, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className='px-6 md:px-8 py-3 md:py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm md:text-base tracking-wide cursor-pointer transition-all duration-300 shadow-lg shadow-purple-500/50 w-full sm:w-auto' 
              onClick={handleContact}
            >
              Hire Me
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='px-6 md:px-8 py-3 md:py-4 rounded-lg glass border border-white/20 text-white font-semibold text-sm md:text-base tracking-wide cursor-pointer transition-all duration-300 hover:border-purple-400/50 w-full sm:w-auto'
            >
              <a href={process.env.REACT_APP_RESUME_URL} target='_blank' className='flex items-center gap-2'>
                My Resume
              </a>
            </motion.button>
          </motion.div>

          {/* Mobile Social Links - Inline with content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='lg:hidden flex flex-row gap-4 mt-6 justify-center md:justify-start w-full'
          >
            <motion.a 
              href='https://www.linkedin.com/in/aarya-rastogi-512180223/' 
              target={'_blank'}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className='glass p-3 rounded-full cursor-pointer text-white hover:text-[#0077b5] transition-all duration-300'
            >
              <FaLinkedin className='text-xl'/>
            </motion.a>
            <motion.a 
              href='https://twitter.com/aarya_rastogi' 
              target={'_blank'}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className='glass p-3 rounded-full cursor-pointer text-white hover:text-[#1DA1F2] transition-all duration-300'
            >
              <FaTwitter className='text-xl'/>
            </motion.a>
            <motion.a 
              href='https://github.com/aaryarastogi' 
              target={'_blank'}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className='glass p-3 rounded-full cursor-pointer text-white hover:text-gray-300 transition-all duration-300'
            >
              <FaGithub className='text-xl'/>
            </motion.a>
            <motion.a 
              href='https://www.instagram.com/aaryarastogi10/' 
              target={'_blank'}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className='glass p-3 rounded-full cursor-pointer text-white hover:text-[#e95950] transition-all duration-300'
            >
              <FaInstagram className='text-xl'/>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='flex justify-center items-center relative mt-8 md:mt-0 order-first md:order-last'
        >
          <div className='relative'>
            {/* Glowing background effect */}
            <div className='absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-3xl rounded-full animate-pulse'></div>
            <motion.img 
              src={girl} 
              alt='Developer' 
              className='relative z-10 w-48 sm:w-64 md:w-80 lg:w-96 drop-shadow-2xl'
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 2 }}
        className='absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block'
      >
        <div className='w-6 h-10 border-2 border-white/30 rounded-full flex justify-center'>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className='w-1.5 h-1.5 bg-white/50 rounded-full mt-2'
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Home;