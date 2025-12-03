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
      className="flex flex-col items-center gap-4 group"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: delay,
        type: "spring",
        stiffness: 100 
      }}
      whileHover={{ y: -8, scale: 1.05 }}
    >
      <div className="relative w-28 h-28 md:w-32 md:h-32">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="6"
            fill="transparent"
            className="text-gray-800"
          />

          {/* Progress circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke={`url(#gradient-${name.replace(/\s+/g, '-')})`}
            strokeWidth="6"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1, 
              delay: delay + 0.5,
              ease: "easeInOut" 
            }}
          />

          <defs>
            <linearGradient id={`gradient-${name.replace(/\s+/g, '-')}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#667eea" stopOpacity="1"/>
              <stop offset="100%" stopColor="#764ba2" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
  
        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className={`p-3 rounded-full bg-gradient-to-br ${color} shadow-lg group-hover:shadow-xl transition-all duration-300`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </motion.div>
        </div>
      </div>
      
      {/* Percentage - positioned below the circle */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 1 }}
        className="text-xs md:text-sm font-bold text-white"
      >
        {Math.round(animatedPercentage)}%
      </motion.div>
      
      {/* Skill name */}
      <motion.h3 
        className="text-sm md:text-base font-semibold text-white text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.3 }}
      >
        {name}
      </motion.h3>
    </motion.div>
  );
};

export default SkillCard;
