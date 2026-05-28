import React from "react";
import { motion } from "framer-motion";
import { Layout, Server, Database, Code2, Wrench } from "lucide-react";
import LeftSection from "./LeftSection";

const About = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Layout,
      skills: [
        { name: "React.js", highlighted: true },
        { name: "Next.js", highlighted: true },
        { name: "TypeScript", highlighted: true },
        { name: "JavaScript (ES6+)", highlighted: false },
        { name: "Tailwind CSS", highlighted: false },
        { name: "Material UI", highlighted: false },
        { name: "HTML5", highlighted: false },
        { name: "CSS3", highlighted: false },
        { name: "Redux Toolkit", highlighted: false }
      ]
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", highlighted: true },
        { name: "Express.js", highlighted: false },
        { name: "REST APIs", highlighted: false },
        { name: "JWT Authentication", highlighted: false }
      ]
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        { name: "MongoDB", highlighted: true },
        { name: "SQL", highlighted: false },
        { name: "NoSQL", highlighted: false },
        { name: "DBMS", highlighted: false }
      ]
    },
    {
      title: "Languages & CS Fundamentals",
      icon: Code2,
      skills: [
        { name: "Java", highlighted: false },
        { name: "C++", highlighted: false },
        { name: "OOPs", highlighted: false },
        { name: "Operating Systems", highlighted: false },
        { name: "Computer Networks", highlighted: false },
        { name: "SDLC", highlighted: false },
        { name: "Prompt Engineering", highlighted: false }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: [
        { name: "Git", highlighted: false },
        { name: "GitHub", highlighted: false },
        { name: "Postman", highlighted: false },
        { name: "VS Code", highlighted: false },
        { name: "Figma", highlighted: false }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      },
    },
  };

  return (
    <div className="min-h-fit sm:min-h-screen px-4 sm:px-6 py-6 sm:py-12 md:py-20 relative bg-[#0a0e27]" id="about">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Tech Stack & <span className="gradient-text">Skills</span>
          </h1>
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-4">
            <div className="h-1 w-8 md:w-16 bg-gradient-to-r from-transparent to-purple-500"></div>
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-purple-500"></div>
            <div className="h-1 w-8 md:w-16 bg-gradient-to-l from-transparent to-purple-500"></div>
          </div>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-4">
            Technologies and tools I use to build scalable, production-ready applications.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start"
        >
          <LeftSection />

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
          >
            {skillCategories.map((category, catIdx) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  variants={cardVariants}
                  className={`glass p-4 rounded-xl border border-white/10 flex flex-col gap-3.5 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_4px_25px_rgba(168,85,247,0.06)] ${
                    category.title === "Frontend" ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm md:text-base border-b border-white/5 pb-2">
                    <Icon className="w-4 h-4 text-purple-400" />
                    <span className="text-white font-bold">{category.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <motion.span
                        key={sIdx}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`text-xs px-2.5 py-1.5 rounded-lg border transition-all duration-300 cursor-default select-none ${
                          skill.highlighted
                            ? "bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/40 text-purple-200 font-medium shadow-md shadow-purple-500/5 hover:border-purple-500"
                            : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20"
                        }`}
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
