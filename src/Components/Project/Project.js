import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import data from './data';

const getCategoryBadgeClass = (category) => {
  switch (category) {
    case 'Full Stack':
      return 'bg-purple-950/80 text-purple-300 border-purple-500/40 shadow-[0_0_10px_rgba(168,85,247,0.2)]';
    case 'AI & Web':
      return 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40 shadow-[0_0_10px_rgba(6,182,212,0.2)]';
    case 'Frontend':
      return 'bg-pink-950/80 text-pink-300 border-pink-500/40 shadow-[0_0_10px_rgba(236,72,153,0.2)]';
    default:
      return 'bg-purple-950/80 text-purple-300 border-purple-500/40';
  }
};

const Project = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedTech, setSelectedTech] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const categories = data.categories || ['All', 'Full Stack', 'AI & Web', 'Frontend'];

  // Filter by category and optional selected tech tag
  let filteredProjects = activeCategory === 'All'
    ? data.cardData
    : data.cardData.filter(item => item.category === activeCategory);

  if (selectedTech) {
    filteredProjects = filteredProjects.filter(item => 
      item.techStack && item.techStack.includes(selectedTech)
    );
  }

  // Display limit for "Show More" pattern
  const displayedProjects = (!showAll && activeCategory === 'All' && !selectedTech)
    ? filteredProjects.slice(0, 4)
    : filteredProjects;

  const handleTechClick = (tech) => {
    if (selectedTech === tech) {
      setSelectedTech(null);
    } else {
      setSelectedTech(tech);
    }
  };

  return (
    <div className='w-full py-12 sm:py-16 md:py-20 relative overflow-hidden' id='project'>
      {/* Subtle ambient lighting glows */}
      <div className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none'></div>
      <div className='absolute bottom-10 right-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none'></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 relative z-10'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10"
        >
          <div className='inline-block mb-2.5 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)]'>
            Featured Software Portfolio
          </div>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight'>
            Crafted <span className='gradient-text'>Projects</span>
          </h2>
          <div className='flex items-center justify-center gap-2 md:gap-3 mb-4'>
            <div className='h-1 w-12 md:w-20 bg-gradient-to-r from-transparent to-purple-500 rounded-full'></div>
            <div className='w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_10px_#c084fc]'></div>
            <div className='h-1 w-12 md:w-20 bg-gradient-to-l from-transparent to-purple-500 rounded-full'></div>
          </div>
          <p className='text-gray-300 text-sm sm:text-base max-w-xl mx-auto px-4 leading-relaxed'>
            Explore full-stack web applications, AI-powered systems, and responsive user interfaces engineered with modern frameworks, clean architecture, and interactive case studies.
          </p>
        </motion.div>

        {/* Category Filter Pills & Tech Filter Indicator */}
        <div className='flex flex-col items-center gap-3 mb-8 sm:mb-12'>
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className='flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-2'
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat && !selectedTech;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setSelectedTech(null);
                  }}
                  className={`relative px-4 sm:px-5 py-2 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 cursor-pointer select-none ${
                    isActive
                      ? 'text-white shadow-lg shadow-purple-500/30'
                      : 'text-gray-400 hover:text-white bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryFilterTab"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {cat}
                    {cat === 'All' && <span className="ml-1 text-[10px] px-1.5 py-0.2 rounded-full bg-white/20">{data.cardData.length}</span>}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Active Tech Tag Filter Badge Indicator if selected */}
          {selectedTech && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className='flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-200 text-xs'
            >
              <span>Filtered by tech: <strong>{selectedTech}</strong></span>
              <button 
                onClick={() => setSelectedTech(null)}
                className='ml-1 text-purple-400 hover:text-white font-bold cursor-pointer'
                title="Clear tech filter"
              >
                ✕
              </button>
            </motion.div>
          )}
        </div>

        {/* Straight Compact Glass Cards Grid */}
        <motion.div 
          layout
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7 px-1 sm:px-2'
        >
          <AnimatePresence mode='popLayout'>
            {displayedProjects.map((item, index) => (
              <motion.div
                key={item.id || item.Name}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 15 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className='flex h-full'
              >
                <div 
                  className='w-full flex flex-col justify-between transform transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] group cursor-pointer'
                >
                  <div className='glass rounded-2xl overflow-hidden border border-white/15 backdrop-blur-2xl bg-gradient-to-b from-slate-900/95 via-slate-950/85 to-slate-950/90 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.75)] group-hover:border-white/30 transition-all duration-300 flex flex-col justify-between h-full relative'>
                    
                    {/* Header */}
                    <div className='px-4 py-2.5 flex items-center justify-between border-b border-white/10 bg-white/5'>
                      <span className='text-xs font-mono font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 uppercase flex items-center gap-1.5'>
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
                        #{String(item.id).padStart(2, '0')}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${getCategoryBadgeClass(item.category)}`}>
                        {item.category || 'Project'}
                      </span>
                    </div>

                    {/* Content Body */}
                    <div className='p-4 sm:p-5 flex-1 flex flex-col justify-between'>
                      <div>
                        {/* Title & Featured Indicator */}
                        <div className='flex items-start justify-between gap-2 mb-2'>
                          <h3 className='text-base font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300 line-clamp-1'>
                            {item.title}
                          </h3>
                          {item.featured && (
                            <span 
                              className='inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 shrink-0' 
                              title="Featured Flagship Project"
                            >
                              <span className="text-amber-400 text-[10px]">★</span> Featured
                            </span>
                          )}
                        </div>

                        {/* Fixed Uniform Description Height */}
                        <p className='text-gray-300 text-xs leading-relaxed min-h-[3.75rem] max-h-[3.75rem] overflow-hidden line-clamp-3 mb-4'>
                          {item.desc}
                        </p>
                      </div>

                      {/* Bottom Section: Tech Stack & CTA (Pinned to Bottom Baseline) */}
                      <div className='mt-auto'>
                        {/* Tech Stack Badges (Clickable to Filter) */}
                        {item.techStack && item.techStack.length > 0 && (
                          <div className='flex flex-wrap gap-1.5 mb-4 min-h-[2.2rem] items-center'>
                            {item.techStack.slice(0, 4).map((tech, i) => {
                              const isSelected = selectedTech === tech;
                              return (
                                <button 
                                  key={i} 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleTechClick(tech);
                                  }}
                                  className={`px-2 py-0.5 text-[9px] font-medium rounded-md transition-all duration-200 cursor-pointer ${
                                    isSelected
                                      ? 'bg-purple-600 text-white border border-purple-400 shadow-sm'
                                      : 'bg-white/5 text-purple-200 border border-white/10 hover:border-purple-400/50 hover:bg-purple-900/40'
                                  }`}
                                  title={`Click to filter by ${tech}`}
                                >
                                  {tech}
                                </button>
                              );
                            })}
                            {item.techStack.length > 4 && (
                              <span className='px-1.5 py-0.5 text-[8px] font-medium rounded-md bg-purple-950/40 text-purple-300 border border-purple-500/20'>
                                +{item.techStack.length - 4}
                              </span>
                            )}
                          </div>
                        )}

                        {/* CTA Button Pinned to Horizontal Baseline */}
                        <div className='pt-3 border-t border-white/10'>
                          <Link 
                            to={`/casestudy/${item.Name}`}
                            className='cursor-pointer w-full py-2 px-3.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md shadow-purple-900/40 hover:shadow-purple-500/50 transition-all duration-300 group/btn'
                          >
                            <span>Explore Case Study</span>
                            <svg className="w-3.5 h-3.5 text-white transition-transform duration-300 group-hover/btn:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More / Show All Projects Toggle Button */}
        {activeCategory === 'All' && !selectedTech && data.cardData.length > 4 && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className='flex justify-center mt-10 sm:mt-12'
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className='cursor-pointer px-6 py-2.5 rounded-xl bg-white/5 border border-white/15 hover:border-purple-500/50 text-white font-semibold text-xs sm:text-sm hover:bg-purple-950/40 shadow-lg backdrop-blur-md transition-all duration-300 flex items-center gap-2 group'
            >
              <span>{showAll ? 'Show Fewer Projects' : `Explore All Projects (${data.cardData.length})`}</span>
              <svg 
                className={`w-4 h-4 text-purple-400 transition-transform duration-300 ${showAll ? 'rotate-180' : 'group-hover:translate-y-0.5'}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Project;
