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
    <div className="min-h-screen px-6" id="about">
      <h1 className='flex text-center items-center justify-center uppercase pt-10 text-4xl font-bold text-white transition-all duration-100 md:hover:scale-110 md:mb-0 mb-4'>About Me</h1>
      <hr className='w-10 absolute flex items-center justify-center my-5 h-2 bg-slate-400 rounded-lg md:ml-[49%] ml-[44%]'/>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <LeftSection/>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 gap-8"
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
