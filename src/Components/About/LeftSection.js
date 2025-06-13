import { motion } from "framer-motion";
import developerImg from '../images/developer.png'
import resume from '../images/resume.pdf'

export default function LeftSection() {
  const handleResume=()=>{
    window.open(resume,'_blank')
  }

  return (
    <div className="flex flex-col items-center justify-center md:gap-20 gap-32 px-8">
      <motion.div
        className="relative rounded-3xl flex items-center justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <img
          src={developerImg}
          alt="Developer Avatar"
          className="w-[60%] object-cover rounded-2xl"
        />

        <div className="absolute md:-top-12 top-[1rem] md:-left-12 -left-8 text-left">
          <h1 className="md:text-4xl text-xl font-bold text-gray-500 leading-tight">
            My Self,<br />
            <span className="text-pink-400">Aarya Rastogi</span>
          </h1>
        </div>
        
        <div className="absolute md:-bottom-24 -bottom-28 -right-10 text-right max-w-[240px]">
          <p className="text-md text-gray-700 font-medium">
            I am a Fullstack Web Developer passionate about building intuitive, high-performing web applications with the MERN stack.
          </p>
        </div>
      </motion.div>
      
      <div className="flex flex-col items-start">
        <motion.button
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleResume}
        >
          Download CV
        </motion.button>
      </div>

    </div>
  );
}
