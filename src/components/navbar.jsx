import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Code, Linkedin, Github, Mail, Sparkles, Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre Mí', path: '/about' },
    { name: 'Habilidades', path: '/skills' },
    { name: 'Servicios', path: '/services' },
    { name: 'Proyectos', path: '/projects' },
    { name: 'Contacto', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300 pointer-events-none">
      <div className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 pointer-events-auto ${
        scrolled 
          ? 'glass-card py-2.5 px-6 shadow-2xl backdrop-blur-xl border border-white/20 dark:border-white/10' 
          : 'bg-white/40 dark:bg-gray-900/40 backdrop-blur-md py-3.5 px-6 border border-white/10 dark:border-white/5'
      }`}>
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 group-hover:scale-105 group-hover:shadow-blue-500/40 transition-all duration-300">
              <Code size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-gray-900 dark:text-white flex items-center gap-1">
                Andrés<span className="text-gradient-primary">Rojas</span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-gray-500 dark:text-gray-400">
                Full Stack Dev
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 bg-gray-100/60 dark:bg-gray-800/40 p-1.5 rounded-full border border-gray-200/50 dark:border-white/5">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white'
                }`}
              >
                {isActive(link.path) && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-md shadow-blue-500/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
          </nav>

          {/* Actions: Theme Toggle & Contact Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 transition-all duration-300 border border-gray-200/60 dark:border-white/10 cursor-pointer"
              aria-label="Cambiar tema"
            >
              {theme === 'dark' ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-indigo-600" />}
            </button>

            <Link
              to="/contact"
              className="relative group overflow-hidden px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center gap-2"
            >
              <Sparkles size={16} className="animate-spin-slow" />
              <span>Contratar</span>
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
            >
              {theme === 'dark' ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-indigo-600" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden pointer-events-auto"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 h-screen w-full max-w-xs bg-white dark:bg-[#0d121f] z-50 shadow-2xl md:hidden flex flex-col border-l border-gray-200 dark:border-white/10 pointer-events-auto p-6"
            >
              <div className="flex items-center justify-between pb-6 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                    AR
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white">Menú</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 flex flex-col justify-between py-6">
                <div className="flex flex-col space-y-2">
                  {links.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                        isActive(link.path)
                          ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive(link.path) && (
                        <div className="w-2 h-2 rounded-full bg-blue-500 shadow-sm shadow-blue-500"></div>
                      )}
                    </Link>
                  ))}
                </div>

                <div className="space-y-4">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-center shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Contáctame
                  </Link>

                  <div className="flex justify-around pt-4 border-t border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400">
                    <a href="https://github.com/AndresRA13" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors p-2">
                      <Github size={22} />
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors p-2">
                      <Linkedin size={22} />
                    </a>
                    <a href="mailto:rojasaguileraandres13@gmail.com" className="hover:text-blue-500 transition-colors p-2">
                      <Mail size={22} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
