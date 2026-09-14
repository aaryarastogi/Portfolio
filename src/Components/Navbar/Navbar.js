import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaHome, FaUser, FaFolder, FaEnvelope, FaBriefcase, FaPaperPlane, FaCode } from "react-icons/fa";
import logo from '../images/logo.png';
import './Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Scroll detection for navbar background glow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for dynamic active section highlighting
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = ["home", "about", "experience", "project", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const scrollToSection = (id) => {
    setActiveSection(id);
    if (pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const menuItems = [
    { id: "home", name: "Home", icon: FaHome },
    { id: "about", name: "About", icon: FaUser },
    { id: "experience", name: "Experience", icon: FaBriefcase },
    { id: "project", name: "Projects", icon: FaFolder },
    { id: "contact", name: "Contact", icon: FaEnvelope },
  ];

  return (
    <>
      {/* Clean Full-Width Header without Box Containers */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-8 py-3.5 transition-all duration-500 backdrop-blur-xl ${
          scrolled
            ? "bg-black/30 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-purple-950/20"
            : "bg-transparent backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          {/* Brand Logo & Developer Tag */}
          <Link
            to="/"
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2.5 group"
          >
            <motion.div
              whileHover={{ scale: 1.08, rotate: 6 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-0.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-md group-hover:shadow-purple-500/50 transition-shadow duration-300"
            >
              <img
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover bg-[#0a0e27]"
                src={logo}
                alt="Aarya Rastogi Logo"
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-purple-300 transition-colors">
                Aarya<span className="text-purple-400">.dev</span>
              </span>
              <span className="hidden xl:inline-flex items-center gap-1 text-[10px] font-mono text-purple-300/80 uppercase tracking-widest">
                <FaCode className="text-[10px] text-pink-400" /> Software Engineer
              </span>
            </div>
          </Link>

          {/* Center Navigation Menu (Clean, Unboxed Desktop Nav) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id && pathname === "/";
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative py-1 text-sm lg:text-base font-medium transition-colors duration-300 group ${
                    isActive ? "text-white font-semibold" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                  {isActive ? (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-[0_0_10px_rgba(192,132,252,0.8)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Section: Status Badge & CTA Button */}
          <div className="flex items-center gap-4">
            {/* Availability Pill */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to Opportunities</span>
            </div>

            {/* Hire Me CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 transition-all duration-300"
            >
              <span>Let's Talk</span>
              <FaPaperPlane className="text-xs text-purple-200" />
            </motion.button>

            {/* Mobile Hamburger Menu Button */}
            <div className="md:hidden flex items-center">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setOpen(!open)}
                className="p-2.5 rounded-xl bg-white/5 text-white focus:outline-none hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {open ? <MdClose size={22} /> : <FiMenu size={22} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[55] md:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#0c1033] z-[60] md:hidden shadow-2xl border-l border-purple-500/20 flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-purple-500/15">
                <div className="flex items-center gap-2">
                  <div className="p-0.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                    <img className="w-8 h-8 rounded-full" src={logo} alt="Logo" />
                  </div>
                  <span className="text-lg font-bold text-white">
                    Aarya<span className="text-purple-400">.dev</span>
                  </span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-full bg-purple-900/40 border border-purple-500/30 text-white"
                >
                  <MdClose size={20} />
                </motion.button>
              </div>

              {/* Status pill in mobile drawer */}
              <div className="px-6 pt-4">
                <div className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono w-full">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Open to Opportunities</span>
                </div>
              </div>

              {/* Nav Items */}
              <div className="flex flex-col p-6 gap-3 flex-1 overflow-y-auto">
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id && pathname === "/";
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <button
                        onClick={() => {
                          scrollToSection(item.id);
                          setOpen(false);
                        }}
                        className={`w-full flex items-center gap-4 p-3.5 rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/50 text-white shadow-lg"
                            : "bg-[#0f143d]/60 border border-purple-500/10 text-gray-300 hover:bg-purple-900/20 hover:text-white"
                        }`}
                      >
                        <div
                          className={`p-2.5 rounded-lg ${
                            isActive
                              ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                              : "bg-purple-500/10 text-purple-400"
                          }`}
                        >
                          <Icon size={18} />
                        </div>
                        <span className="text-base font-semibold">{item.name}</span>
                      </button>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile Drawer Footer CTA */}
              <div className="p-6 border-t border-purple-500/15 bg-[#070a21]">
                <button
                  onClick={() => {
                    scrollToSection("contact");
                    setOpen(false);
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-sm shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2"
                >
                  <FaPaperPlane className="text-xs" />
                  <span>Let's Build Something Together</span>
                </button>
                <p className="text-center text-xs text-gray-400 mt-4">
                  © Aarya Rastogi • Software Engineer
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;