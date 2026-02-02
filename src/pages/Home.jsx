import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

import About from './About';
import Skills from './Skills';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="bg-gray-50 dark:bg-[#0f172a] overflow-hidden relative">
      <div className="min-h-screen pt-16 flex items-center justify-center relative">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 min-h-[calc(100vh-4rem)]">
            
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 text-center md:text-left pt-10 md:pt-0"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium"
              >
                Full Stack Developer
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                Construyendo el <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  Futuro Digital
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                Transformo ideas complejas en experiencias web elegantes, funcionales y escalables. Especializado en React, Node.js y arquitecturas modernas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link 
                  to="/projects"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
                >
                  Ver Proyectos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Contactar
                </Link>
              </div>

              <div className="mt-12 flex items-center justify-center md:justify-start gap-6 text-gray-500 dark:text-gray-400">
                <a href="#" className="hover:text-blue-500 transition-colors"><Github size={24} /></a>
                <a href="#" className="hover:text-blue-500 transition-colors"><Linkedin size={24} /></a>
                <a href="#" className="hover:text-blue-500 transition-colors"><Mail size={24} /></a>
              </div>
            </motion.div>

            {/* Hero Image / Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-white/5 backdrop-blur-sm p-6 flex items-center justify-center">
                  {/* Abstract Tech Representation */}
                  <div className="grid grid-cols-2 gap-4 w-full h-full">
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 flex flex-col justify-between transform hover:scale-105 transition-transform duration-300">
                      <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                        <Code size={18} />
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
                        <div className="h-2 w-12 bg-gray-300 dark:bg-gray-700 rounded"></div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 flex flex-col justify-between transform translate-y-8 hover:translate-y-6 transition-transform duration-300">
                      <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                        <Github size={18} />
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 w-16 bg-gray-300 dark:bg-gray-700 rounded"></div>
                        <div className="h-2 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 flex flex-col justify-between transform -translate-y-4 hover:-translate-y-6 transition-transform duration-300">
                      <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                        <div className="w-4 h-4 rounded-full border-2 border-current"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
                        <div className="h-2 w-10 bg-gray-300 dark:bg-gray-700 rounded"></div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 flex flex-col justify-between transform hover:scale-105 transition-transform duration-300">
                      <div className="h-8 w-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                        <div className="w-4 h-4 bg-current rounded-sm"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 w-14 bg-gray-300 dark:bg-gray-700 rounded"></div>
                        <div className="h-2 w-18 bg-gray-300 dark:bg-gray-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="py-20 bg-white dark:bg-gray-900/50 backdrop-blur-sm border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-10">
            Tecnologías que utilizo
          </p>
          <div className="flex flex-wrap justify-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Tech Icons - Using text for simplicity, but could be SVGs */}
             <span className="text-2xl font-bold text-gray-400 hover:text-[#61DAFB] transition-colors">React</span>
             <span className="text-2xl font-bold text-gray-400 hover:text-[#339933] transition-colors">Node.js</span>
             <span className="text-2xl font-bold text-gray-400 hover:text-[#38B2AC] transition-colors">Tailwind</span>
             <span className="text-2xl font-bold text-gray-400 hover:text-[#3178C6] transition-colors">TypeScript</span>
             <span className="text-2xl font-bold text-gray-400 hover:text-[#000000] dark:hover:text-white transition-colors">Next.js</span>
             <span className="text-2xl font-bold text-gray-400 hover:text-[#47A248] transition-colors">MongoDB</span>
          </div>
        </div>
      </div>

      {/* Why Choose Me Section */}
      <div className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">¿Por qué trabajar conmigo?</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Código Limpio</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Escribo código mantenible, escalable y fácil de entender, siguiendo las mejores prácticas de la industria.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                <div className="w-6 h-6 border-2 border-current rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Diseño Moderno</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Creo interfaces atractivas y responsivas que ofrecen una experiencia de usuario excepcional en cualquier dispositivo.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
                <div className="w-6 h-6 bg-current rounded-sm"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Entrega Rápida</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Comprometido con los plazos de entrega, asegurando que tu proyecto esté listo cuando lo necesites.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
