import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";

const SkillCard = ({ name, percentage, icon: Icon, color, delay = 0 }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const circumference = 2 * Math.PI * 45; 
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, delay * 1000 + 500);

    return () => clearTimeout(timer);
  }, [percentage, delay]);

  return (
    <motion.div
      className="flex flex-col items-center p-8 rounded-[100%] transition-all duration-300"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: delay,
        type: "spring",
        stiffness: 100 
      }}
      whileHover={{ y: -5 }}
    >
      <div className="relative w-32 h-32">
        <svg className="w-auto transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-gray-200"
          />

          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            transition={{ 
              duration: 0.5, 
              delay: delay + 0.5,
              ease: "easeInOut" 
            }}
          />

          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" className={`${color.split(' ')[1]} stop-opacity-100`} stopColor="#A770EF"/>
              <stop offset="100%" className={`${color.split(' ')[3]} stop-opacity-100`} stopColor="#FDB99B" />
            </linearGradient>
          </defs>
        </svg>
  
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`p-2 rounded-full bg-gradient-to-br ${color}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span 
            className="text-sm font-bold text-gray-300 mt-[50%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 1 }}
          >
            {Math.round(animatedPercentage)}%
          </motion.span>
        </div>
        <motion.h3 
        className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 italic text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay + 0.3 }}
      >
        {name}
      </motion.h3>
      </div>
    </motion.div>
  );
};

export default SkillCard;
