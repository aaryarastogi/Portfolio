import Footer from '../Footer'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className='w-full py-12 md:py-20 relative' id="contact">
      {/* Background decoration */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-pink-900/5 to-transparent'></div>
      
      <div className='max-w-4xl mx-auto px-4 sm:px-6 relative z-10'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4'>
            Get In <span className='gradient-text'>Touch</span>
          </h1>
          <div className='flex items-center justify-center gap-2 md:gap-4 mb-4'>
            <div className='h-1 w-8 md:w-16 bg-gradient-to-r from-transparent to-purple-500'></div>
            <div className='w-2 h-2 md:w-3 md:h-3 rounded-full bg-purple-500'></div>
            <div className='h-1 w-8 md:w-16 bg-gradient-to-l from-transparent to-purple-500'></div>
          </div>
          <p className='text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-4'>
            Feel free to contact me by submitting the form below and I will get back to you as soon as possible
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='glass rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 border border-white/10 backdrop-blur-xl'
        >
          <form action='https://formspree.io/f/myyaegkp' method='POST' className='space-y-4 md:space-y-6'>
            <div>
              <label htmlFor='name' className='block text-white font-semibold text-base mb-2'>
                Name
              </label>
              <input 
                type='text' 
                id='name'
                name='username' 
                placeholder='Your Name' 
                autoComplete='off' 
                required 
                className='w-full py-3 md:py-4 px-4 rounded-lg glass border border-white/20 text-white text-sm md:text-base placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all duration-300'
              />
            </div>
            
            <div>
              <label htmlFor='email' className='block text-white font-semibold text-sm md:text-base mb-2'>
                Email
              </label>
              <input 
                type='email' 
                id='email'
                name='Email' 
                placeholder='your.email@example.com' 
                autoComplete='off' 
                required 
                className='w-full py-3 md:py-4 px-4 rounded-lg glass border border-white/20 text-white text-sm md:text-base placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all duration-300'
              />
            </div>
            
            <div>
              <label htmlFor='message' className='block text-white font-semibold text-sm md:text-base mb-2'>
                Message
              </label>
              <textarea 
                id='message'
                name='message' 
                rows={6}
                autoComplete='off' 
                required 
                placeholder='Enter your message here...' 
                className='w-full py-3 md:py-4 px-4 rounded-lg glass border border-white/20 text-white text-sm md:text-base placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 resize-none'
              ></textarea>
            </div>
            
            <motion.div 
              className='flex justify-end'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <input 
                type='submit' 
                value='Send Message' 
                className='px-6 md:px-8 py-3 md:py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm md:text-base shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 cursor-pointer uppercase tracking-wide w-full sm:w-auto'
              />
            </motion.div>
          </form>
        </motion.div>
      </div>
      
      <Footer/>
    </div>
  )
}

export default Contact