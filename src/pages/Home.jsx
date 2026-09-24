import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Github, Linkedin, Mail, Code, Terminal, Cpu, 
  Sparkles, CheckCircle2, Zap, Layers, Globe, Shield, Star, 
  ChevronRight, ExternalLink, Flame
} from 'lucide-react';
import { Link } from 'react-router-dom';

import About from './About';
import Skills from './Skills';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';

const roles = [
  "Full Stack Developer",
  "React & Node.js Expert",
  "UI/UX Enthusiast",
  "Digital Product Architect"
];

const techMarquee = [
  { name: "React 19", color: "from-cyan-400 to-blue-500" },
  { name: "Node.js", color: "from-emerald-400 to-green-600" },
  { name: "Tailwind CSS v4", color: "from-teal-400 to-cyan-500" },
  { name: "TypeScript", color: "from-blue-500 to-indigo-600" },
  { name: "Next.js", color: "from-gray-700 to-black dark:from-gray-200 dark:to-white" },
  { name: "MongoDB", color: "from-green-500 to-emerald-700" },
  { name: "Firebase", color: "from-amber-400 to-orange-500" },
  { name: "Framer Motion", color: "from-purple-500 to-pink-500" },
  { name: "Express.js", color: "from-gray-600 to-gray-800" },
];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('code');

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden pt-20">
      {/* HERO SECTION */}
      <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center relative py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column - Hero Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 text-center lg:text-left space-y-6"
            >
              {/* Availability Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-semibold shadow-sm"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>Disponible para proyectos & empleo remoto</span>
              </motion.div>
              
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
                Construyendo el <br />
                <span className="text-gradient-primary">
                  Futuro Digital
                </span>
              </h1>
              
              {/* Dynamic Animated Role */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={roleIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="inline-flex items-center gap-2 text-xl sm:text-2xl font-mono font-bold text-blue-600 dark:text-cyan-400"
                  >
                    <Terminal size={22} className="text-purple-500" />
                    <span>&gt; {roles[roleIndex]}</span>
                    <span className="animate-pulse">_</span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bio Paragraph */}
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Hola 👋, soy <strong className="text-gray-900 dark:text-white">Andrés Rojas</strong>. Transformo ideas complejas en experiencias web modernas, ultrarrápidas y visualmente deslumbrantes. Especializado en la pila MERN/PERN y arquitecturas escalables.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <Link 
                  to="/projects"
                  className="relative group overflow-hidden inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-base shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-95 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explorar Proyectos
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </Link>

                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-2xl glass-card font-bold text-base text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800/80 hover:border-blue-500/50 transition-all duration-300"
                >
                  Contactar Ahora
                </Link>
              </div>

              {/* Social Links & Trust Badges */}
              <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 border-t border-gray-200/60 dark:border-white/10 text-gray-500 dark:text-gray-400 text-sm">
                <div className="flex items-center gap-4">
                  <a 
                    href="https://github.com/AndresRA13" 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-3 rounded-xl glass-card text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-cyan-400 hover:scale-110 transition-all duration-300"
                    title="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-3 rounded-xl glass-card text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-cyan-400 hover:scale-110 transition-all duration-300"
                    title="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="mailto:rojasaguileraandres13@gmail.com" 
                    className="p-3 rounded-xl glass-card text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-cyan-400 hover:scale-110 transition-all duration-300"
                    title="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>

                <div className="h-6 w-px bg-gray-300 dark:bg-gray-800 hidden sm:block"></div>

                <div className="flex items-center gap-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                  <Flame className="text-amber-500" size={16} />
                  <span>+7 Proyectos Desplegados</span>
                </div>
              </div>

            </motion.div>

            {/* Right Column - Interactive Glass IDE & Profile Showcase */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              {/* Outer Glow Halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl opacity-25 blur-3xl animate-pulse"></div>

              {/* IDE Card Window */}
              <div className="relative glass-card rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-white/10">
                
                {/* Window Header / Tabs */}
                <div className="px-5 py-3.5 bg-gray-100/80 dark:bg-[#0c101c]/90 border-b border-gray-200/80 dark:border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="ml-2 text-xs font-mono text-gray-500 dark:text-gray-400 font-semibold">
                      Developer.jsx
                    </span>
                  </div>

                  <div className="flex items-center space-x-1 bg-gray-200/50 dark:bg-gray-800/60 p-1 rounded-lg text-xs font-medium">
                    <button 
                      onClick={() => setActiveTab('code')}
                      className={`px-2.5 py-1 rounded-md transition-colors ${activeTab === 'code' ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-cyan-400 shadow-xs' : 'text-gray-500'}`}
                    >
                      Código
                    </button>
                    <button 
                      onClick={() => setActiveTab('stats')}
                      className={`px-2.5 py-1 rounded-md transition-colors ${activeTab === 'stats' ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-cyan-400 shadow-xs' : 'text-gray-500'}`}
                    >
                      Stats
                    </button>
                  </div>
                </div>

                {/* Window Body */}
                <div className="p-6 font-mono text-xs sm:text-sm min-h-[320px] flex flex-col justify-between">
                  {activeTab === 'code' ? (
                    <div className="space-y-3 leading-relaxed">
                      <div>
                        <span className="text-purple-600 dark:text-purple-400">const</span>{' '}
                        <span className="text-blue-600 dark:text-cyan-300 font-bold">developer</span> = &#123;
                      </div>
                      <div className="pl-4 space-y-1">
                        <div>
                          <span className="text-gray-500 dark:text-gray-400">name:</span>{' '}
                          <span className="text-emerald-600 dark:text-emerald-400">'Andrés Rojas'</span>,
                        </div>
                        <div>
                          <span className="text-gray-500 dark:text-gray-400">role:</span>{' '}
                          <span className="text-amber-600 dark:text-amber-300">'Full Stack Engineer'</span>,
                        </div>
                        <div>
                          <span className="text-gray-500 dark:text-gray-400">location:</span>{' '}
                          <span className="text-emerald-600 dark:text-emerald-400">'Colombia 🇨🇴'</span>,
                        </div>
                        <div>
                          <span className="text-gray-500 dark:text-gray-400">coreStack:</span> [
                          <span className="text-cyan-600 dark:text-cyan-300">'React'</span>,{' '}
                          <span className="text-cyan-600 dark:text-cyan-300">'Node'</span>,{' '}
                          <span className="text-cyan-600 dark:text-cyan-300">'Tailwind'</span>],
                        </div>
                        <div>
                          <span className="text-gray-500 dark:text-gray-400">passion:</span>{' '}
                          <span className="text-purple-600 dark:text-purple-300">'Clean code & WOW UI'</span>,
                        </div>
                        <div>
                          <span className="text-gray-500 dark:text-gray-400">status:</span>{' '}
                          <span className="text-emerald-500 font-bold">'Ready to build'</span>
                        </div>
                      </div>
                      <div>&#125;;</div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-4 my-auto">
                      <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">100%</div>
                        <div className="text-[11px] text-gray-500 dark:text-gray-400 uppercase font-semibold">Lighthouse Score</div>
                      </div>
                      <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-center">
                        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">7+</div>
                        <div className="text-[11px] text-gray-500 dark:text-gray-400 uppercase font-semibold">Proyectos Activos</div>
                      </div>
                      <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                        <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">99.9%</div>
                        <div className="text-[11px] text-gray-500 dark:text-gray-400 uppercase font-semibold">Uptime</div>
                      </div>
                      <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-center">
                        <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">1+</div>
                        <div className="text-[11px] text-gray-500 dark:text-gray-400 uppercase font-semibold">Años de Exp.</div>
                      </div>
                    </div>
                  )}

                  {/* Terminal Footer Info */}
                  <div className="pt-4 border-t border-gray-200/60 dark:border-white/10 flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1.5 text-emerald-500">
                      <CheckCircle2 size={14} /> Compiled successfully
                    </span>
                    <span className="font-mono">UTF-8</span>
                  </div>
                </div>

              </div>

              {/* Floating Floating Badges */}
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl glass-card shadow-xl border border-white/20 dark:border-white/10 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white">
                  <Zap size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900 dark:text-white">Alto Rendimiento</div>
                  <div className="text-[10px] text-gray-500 dark:text-gray-400">Optimizado a 60 FPS</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl glass-card shadow-xl border border-white/20 dark:border-white/10 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white">
                  <Sparkles size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900 dark:text-white">Diseño Exclusivo</div>
                  <div className="text-[10px] text-gray-500 dark:text-gray-400">UI/UX Glassmorphism</div>
                </div>
              </motion.div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* TECH STACK MARQUEE SLIDER */}
      <section className="py-10 bg-white/50 dark:bg-[#0c101c]/60 backdrop-blur-md border-y border-gray-200/80 dark:border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
          <p className="text-xs font-mono font-bold tracking-widest text-gray-500 dark:text-gray-400 uppercase">
            // Stack Tecnológico de Alto Nivel
          </p>
        </div>
        
        <div className="relative flex overflow-x-hidden">
          <div className="py-2 animate-marquee whitespace-nowrap flex items-center gap-6">
            {[...techMarquee, ...techMarquee, ...techMarquee].map((tech, idx) => (
              <div 
                key={idx}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-card hover:scale-105 transition-transform duration-300 cursor-default border border-gray-200/60 dark:border-white/10 shadow-xs"
              >
                <span className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${tech.color}`}></span>
                <span className="font-semibold text-sm text-gray-800 dark:text-gray-200">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ME / HIGHLIGHTS */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-cyan-400 text-xs font-bold font-mono tracking-wider uppercase border border-blue-500/20">
              Ventajas Competitivas
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
              ¿Por qué trabajar conmigo?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
              Comprometido con la excelencia técnica, entregas puntuales y un diseño visual que causa impacto desde el primer segundo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl glass-card glass-card-hover border border-gray-200/80 dark:border-white/10 space-y-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                <Code size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Arquitectura Escalable</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                Desarrollo componentes limpios, reutilizables y altamente optimizados. Código estructurado que facilita el crecimiento continuo del software.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl glass-card glass-card-hover border border-gray-200/80 dark:border-white/10 space-y-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/30">
                <Layers size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Diseño WOW UI/UX</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                No me conformo con lo básico. Integro micro-interacciones, neumorfismo/glassmorphism y paletas armónicas para cautivar al usuario final.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl glass-card glass-card-hover border border-gray-200/80 dark:border-white/10 space-y-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                <Zap size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Rendimiento & SEO</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                Carga ultrarrápida, prácticas SEO avanzadas y diseño responsive total para que tu aplicación brille en cualquier pantalla o motor de búsqueda.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EMBED SECTIONS FOR CONTINUOUS FLOW */}
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
