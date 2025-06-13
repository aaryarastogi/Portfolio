import React from 'react';
import Typed from 'react-typed';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
  className="w-full h-screen bg-[#0F1630] grid place-items-center"
>
  <motion.h1
    className="md:text-4xl text-3xl font-bold font-serif md:mb-4 text-white"
    initial={{ opacity: 0, y: 20, scale: 3.5 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, scale: 1.2 }}
    transition={{ duration: 1.2, delay: 0.5, ease: 'easeInOut' }}
  >
    <motion.span
      className="bg-clip-text text-transparent italic bg-gradient-to-r from-cyan-400 via-green-400 to-yellow-300"
      animate={{
        rotate: [0, 2, -2, 0], // gentle rotation
        textShadow: [
          '0 0 8px #00ffff',
          '0 0 16px #39ff14',
          '0 0 8px #00ffff',
          '0 0 2px #ffffff',
        ],
      }}
      transition={{
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 4,
        ease: 'easeInOut',
      }}
    >
      <Typed
        strings={["Hello", "Loading Aarya's Portfolio..."]}
        typeSpeed={100}
        backSpeed={200}
        cursorChar=""
        loop
      />
    </motion.span>
  </motion.h1>
</motion.div>

  );
};

export default Loader;
