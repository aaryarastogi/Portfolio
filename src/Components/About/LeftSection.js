import { motion } from "framer-motion";
import developerImg from '../images/developer.png'
import resume from '../images/resume.pdf'
import { Link } from "react-router-dom";

export default function LeftSection() {
  const handleResume=()=>{
    window.open(resume,'_blank')
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8 md:gap-12 px-4 sm:px-8">
      <motion.div
        className="relative rounded-2xl md:rounded-3xl flex items-center justify-center group w-full max-w-xs sm:max-w-sm"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {/* Glowing background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl md:rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
        
        <div className="relative glass rounded-2xl md:rounded-3xl p-4 md:p-8 backdrop-blur-xl border border-white/10 w-full">
          <img
            src={developerImg}
            alt="Developer Avatar"
            className="w-full object-cover rounded-xl md:rounded-2xl relative z-10"
          />
        </div>

        {/* Floating info cards - hidden on small screens */}
        <motion.div 
          className="hidden sm:block absolute md:-top-16 -top-12 md:-left-16 -left-8 glass p-3 md:p-4 rounded-xl border border-white/10 backdrop-blur-xl"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h1 className="text-base md:text-xl lg:text-2xl font-bold text-white leading-tight">
            Hi, I'm<br />
            <span className="gradient-text">Aarya Rastogi</span>
          </h1>
        </motion.div>
        
        <motion.div 
          className="hidden sm:block absolute md:-bottom-16 -bottom-12 md:-right-12 -right-8 glass p-3 md:p-4 rounded-xl border border-white/10 backdrop-blur-xl max-w-[200px] md:max-w-[280px]"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p className="text-xs md:text-sm lg:text-base text-gray-300 font-medium">
            Fullstack Web Developer passionate about building intuitive, high-performing web applications with the MERN stack.
          </p>
        </motion.div>
      </motion.div>
      
      {/* Show name and description on mobile */}
      <div className="sm:hidden text-center mb-4">
        <h1 className="text-xl font-bold text-white mb-2">
          Hi, I'm <span className="gradient-text">Aarya Rastogi</span>
        </h1>
        <p className="text-sm text-gray-300">
          Fullstack Web Developer passionate about building intuitive, high-performing web applications with the MERN stack.
        </p>
      </div>
      
      <motion.div 
        className="flex flex-col items-center gap-4 w-full sm:w-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <motion.button
          className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold text-sm md:text-base shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 w-full sm:w-auto"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(168, 85, 247, 0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to='https://drive.google.com/file/d/19urtKdG_CNkx74iaj-W2i1coc-jvDx0J/view?usp=sharing' target='_blank' className='flex items-center justify-center gap-2'>
            <span>Download CV</span>
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </Link>
        </motion.button>
      </motion.div>
    </div>
  );
}
