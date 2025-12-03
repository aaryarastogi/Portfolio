import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { Code, Palette, Zap, Database, Terminal, Globe, Layers, FileJson , CodeXml , Hexagon} from "lucide-react";
import LeftSection from "./LeftSection";

const About = () => {
  const skills = [
    { name: "C++", percentage: 80, icon: Terminal, color: "from-blue-600 to-indigo-600" },
    { name: "HTML", percentage: 90, icon: Code, color: "from-red-500 to-orange-500" },
    { name: "CSS", percentage: 90, icon: Palette, color: "from-blue-500 to-cyan-500" },
    { name: "Tailwind CSS", percentage: 80, icon: Palette, color: "from-teal-400 to-cyan-500" },
    { name: "JavaScript", percentage: 90, icon: FileJson, color: "from-blue-600 to-indigo-600" },
    { name: "React.js", percentage: 90, icon: CodeXml, color: "from-cyan-400 to-blue-500" },
    { name: "Node.js", percentage: 80, icon: Hexagon, color: "from-green-600 to-green-800" },
    { name: "Express.js", percentage: 80, icon: Hexagon, color: "from-gray-600 to-gray-800" },
    { name: "MongoDB", percentage: 80, icon: Database, color: "from-green-500 to-emerald-600" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 py-12 md:py-20 relative" id="about">
      {/* Background decoration */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent'></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4'>
            About <span className='gradient-text'>Me</span>
          </h1>
          <div className='flex items-center justify-center gap-2 md:gap-4 mb-4'>
            <div className='h-1 w-8 md:w-16 bg-gradient-to-r from-transparent to-purple-500'></div>
            <div className='w-2 h-2 md:w-3 md:h-3 rounded-full bg-purple-500'></div>
            <div className='h-1 w-8 md:w-16 bg-gradient-to-l from-transparent to-purple-500'></div>
          </div>
          <p className='text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-4'>
            Get to know more about my skills and expertise
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"
        >
          <LeftSection/>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                custom={index}
              >
                <SkillCard 
                  name={skill.name}
                  percentage={skill.percentage}
                  icon={skill.icon}
                  color={skill.color}
                  delay={index * 0.1}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
