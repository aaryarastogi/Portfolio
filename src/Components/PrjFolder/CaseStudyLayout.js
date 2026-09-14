import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaCheckCircle, FaCode, FaRocket } from 'react-icons/fa';
import Footer from '../Footer.js';

const CaseStudyLayout = ({
  title,
  subtitle,
  image,
  overviewPoints = [],
  tools = [],
  liveUrl,
  githubUrl,
  documentTitle
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (documentTitle) {
      document.title = documentTitle;
    } else {
      document.title = `Case Study | ${title}`;
    }
    window.scrollTo(0, 0);
  }, [documentTitle, title]);

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white overflow-x-hidden pt-24 sm:pt-28">
      {/* Background Gradients */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-[#0a0e27] to-[#0a0e27] pointer-events-none -z-10" />
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* Hero Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-purple-100 to-purple-400 bg-clip-text text-transparent">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
            {subtitle}
          </p>

          {/* Top CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {liveUrl && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 transition-all duration-300 cursor-pointer"
              >
                <span>Live Demo</span>
                <FaExternalLinkAlt className="text-xs text-purple-200" />
              </motion.a>
            )}
            {githubUrl && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/15 text-white font-semibold text-sm hover:bg-white/10 hover:border-purple-400/40 transition-all duration-300 backdrop-blur-md cursor-pointer"
              >
                <FaGithub className="text-base" />
                <span>Source Code</span>
              </motion.a>
            )}
          </div>
        </motion.header>

        {/* Featured Preview Frame */}
        {image && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-16 rounded-2xl p-2 sm:p-4 bg-gradient-to-b from-white/10 to-white/5 border border-white/15 shadow-2xl shadow-purple-950/40 backdrop-blur-xl group"
          >
            <div className="overflow-hidden rounded-xl bg-[#080b1e] border border-white/10">
              <img
                src={image}
                alt={title}
                className="w-full h-auto object-cover max-h-[600px] mx-auto rounded-xl transform group-hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
          </motion.div>
        )}

        {/* Content Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Project Overview (2 Cols) */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 rounded-2xl p-6 sm:p-8 bg-white/[0.03] border border-white/10 backdrop-blur-md"
          >
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                <FaRocket className="text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-white">Project Overview</h2>
            </div>

            <div className="space-y-4">
              {overviewPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 transition-all duration-300">
                  <FaCheckCircle className="text-emerald-400 text-lg mt-1 shrink-0" />
                  <p className="text-gray-200 text-base leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Tools & Meta Sidebar (1 Col) */}
          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Tech Stack Card */}
            <div className="rounded-2xl p-6 bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-5 border-b border-white/10 pb-3">
                <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400">
                  <FaCode className="text-lg" />
                </div>
                <h3 className="text-xl font-bold text-white">Technologies Used</h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3.5 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-mono font-medium hover:bg-purple-500/20 hover:text-white transition-all duration-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-4">Explore Further</h3>
              <div className="flex flex-col gap-3">
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-colors shadow-md cursor-pointer"
                  >
                    <span>Visit Official Product</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                )}
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-colors border border-white/15 cursor-pointer"
                  >
                    <FaGithub className="text-base" />
                    <span>View Repository</span>
                  </a>
                )}
                <button
                  onClick={() => navigate('/')}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-sm font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <FaArrowLeft className="text-xs" />
                  <span>Return to Home</span>
                </button>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CaseStudyLayout;
