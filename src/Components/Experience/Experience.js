import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Award } from "lucide-react";

// Reusable logo component that tries to fetch the logo from the domain and falls back to styled initials
const CompanyLogo = ({ domain, fallbackText, gradient }) => {
  const [imgError, setImgError] = useState(false);
  const logoUrl = `https://logo.clearbit.com/${domain}`;

  if (imgError || !domain) {
    return (
      <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-xs sm:text-base font-extrabold shadow-md tracking-wider shrink-0`}>
        {fallbackText}
      </div>
    );
  }

  return (
    <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white flex items-center justify-center p-1.5 sm:p-2 shadow-md shrink-0 relative overflow-hidden border border-white/20">
      <img
        src={logoUrl}
        alt={`${fallbackText} Logo`}
        className="w-full h-full object-contain"
        onError={() => setImgError(true)}
      />
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      role: "MERN Stack Developer Intern",
      company: "CashKaro",
      domain: "cashkaro.com",
      location: "Gurgaon, Haryana",
      period: "December 2025 – Present",
      isCurrent: true,
      logoPlaceholder: "CK",
      logoColor: "from-orange-500 to-red-600",
      description: [
        "Developed and maintained responsive web pages for Great.cards and BankKaro using Next.js and Material UI.",
        "Built pixel-perfect UI components from Figma/design specifications.",
        "Ensured cross-browser compatibility and mobile responsiveness.",
        "Worked on frontend projects including Zoff Masala.",
        "Focused on reusable components, performance optimization, and clean architecture."
      ],
      skills: ["Next.js", "React.js", "Material UI", "JavaScript"]
    },
    {
      role: "Full Stack Developer Intern",
      company: "Hexbit",
      domain: "hexbit.io",
      location: "Remote",
      period: "January 2024 – April 2024",
      isCurrent: false,
      logoPlaceholder: "HB",
      logoColor: "from-blue-500 to-indigo-600",
      description: [
        "Built 8–10 end-to-end MERN stack features.",
        "Developed and integrated 10+ REST APIs.",
        "Improved user workflows and reduced manual steps by 20–25%.",
        "Created responsive frontend pages and backend integrations.",
        "Worked on scalable CRUD operations and API integration."
      ],
      skills: ["MongoDB", "Express.js", "React.js", "Node.js"]
    },
    {
      role: "Frontend Developer Intern",
      company: "Gruby",
      domain: "gruby.in",
      location: "Remote",
      period: "January 2023 – April 2023",
      isCurrent: false,
      logoPlaceholder: "GB",
      logoColor: "from-green-500 to-emerald-600",
      description: [
        "Converted 10+ Figma designs into responsive React components.",
        "Reduced unnecessary re-renders and improved performance by 15–20%.",
        "Collaborated with design and development team members.",
        "Built reusable UI architecture with modern React hooks."
      ],
      skills: ["React.js", "JavaScript", "CSS", "Figma"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full py-6 sm:py-12 md:py-20 relative bg-[#0a0e27]" id="experience">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-12 md:mb-16"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            My Journey & <span className="gradient-text">Experience</span>
          </h1>
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-3">
            <div className="h-1 w-8 md:w-16 bg-gradient-to-r from-transparent to-purple-500"></div>
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-purple-500"></div>
            <div className="h-1 w-8 md:w-16 bg-gradient-to-l from-transparent to-purple-500"></div>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-2">
            A track record of shipping production-ready web interfaces, full-stack features, and scalable code.
          </p>
        </motion.div>

        {/* Timeline container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative border-l-2 border-purple-500/30 ml-1.5 sm:ml-6 md:ml-24 space-y-6 sm:space-y-12"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="relative pl-3.5 sm:pl-6 md:pl-10 group"
            >
              {/* Timeline marker node */}
              <div className={`absolute -left-[11px] top-4 w-5 h-5 rounded-full bg-[#0a0e27] border-2 transition-colors duration-300 flex items-center justify-center z-10 ${
                exp.isCurrent ? "border-pink-500 bg-pink-500" : "border-purple-500 group-hover:bg-purple-500"
              }`}>
                <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  exp.isCurrent ? "bg-white" : "bg-purple-500 group-hover:bg-[#0a0e27]"
                }`}></div>
              </div>

              {/* Glowing node shadow effect */}
              <div className={`absolute -left-[15px] top-3 w-7 h-7 rounded-full blur transition-colors duration-300 ${
                exp.isCurrent ? "bg-pink-500/30" : "bg-purple-500/20 group-hover:bg-purple-500/40"
              }`}></div>

              {/* Experience Card */}
              <div className={`glass p-3.5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border backdrop-blur-xl transition-all duration-300 relative ${
                exp.isCurrent
                  ? "border-pink-500/40 bg-purple-500/5 shadow-[0_10px_35px_rgba(236,72,153,0.15)]"
                  : "border-white/10 group-hover:border-purple-500/30 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)]"
              }`}>
                {/* Active/Current indicator badge */}
                {exp.isCurrent && (
                  <span className="absolute -top-2.5 right-4 sm:right-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-[9px] sm:text-xs font-bold px-2 py-0.5 rounded-full shadow-lg border border-pink-400/25 animate-pulse">
                    Current
                  </span>
                )}

                {/* Card header layout */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                  {/* Left Column: Logo placeholder & Job info */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    {/* Visual Brand Logo or Fallback */}
                    <CompanyLogo
                      domain={exp.domain}
                      fallbackText={exp.logoPlaceholder}
                      gradient={exp.logoColor}
                    />
                    <div>
                      <h3 className={`text-sm sm:text-base md:text-lg font-bold text-white transition-colors duration-300 ${
                        exp.isCurrent ? "text-pink-100" : "group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400"
                      }`}>
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-0.5 font-semibold text-purple-400 text-xs sm:text-sm">
                        <span>{exp.company}</span>
                      </div>
                      
                      {/* Compact metadata on mobile */}
                      <div className="flex items-center gap-1.5 text-[10px] text-gray-400 sm:hidden mt-1 font-medium flex-wrap">
                        <Calendar className="w-3 h-3 text-purple-400 shrink-0" />
                        <span>{exp.period}</span>
                        <span>•</span>
                        <MapPin className="w-3 h-3 text-pink-400 shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Metadata (Hidden on Mobile) */}
                  <div className="hidden sm:flex flex-row md:flex-col items-center md:items-end gap-2 text-xs md:text-sm text-gray-400">
                    <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                      <MapPin className="w-3.5 h-3.5 text-pink-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description points list */}
                <ul className="space-y-1.5 sm:space-y-2 mb-3.5 sm:mb-6 text-gray-300 text-xs sm:text-sm pl-0.5 leading-relaxed">
                  {exp.description.map((point, pIdx) => (
                    <li key={pIdx} className="flex gap-2.5 items-start">
                      <Award className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                        exp.isCurrent ? "text-pink-500" : "text-purple-500"
                      }`} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`text-[9px] sm:text-xs font-semibold px-2 py-0.5 rounded-full border transition-colors duration-300 ${
                        exp.isCurrent
                          ? "bg-pink-500/10 text-pink-300 border-pink-500/30"
                          : "bg-purple-500/10 text-purple-300 border-purple-500/20 group-hover:border-purple-500/40"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
