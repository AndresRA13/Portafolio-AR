import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, MapPin, Calendar, Briefcase, Code, Download, 
  Sparkles, Award, GraduationCap, Terminal, Rocket, CheckCircle 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { label: 'Años de Experiencia', value: '1+', icon: <Briefcase size={20} /> },
    { label: 'Proyectos Completados', value: '7+', icon: <Rocket size={20} /> },
    { label: 'Satisfacción Clientes', value: '100%', icon: <Award size={20} /> },
  ];

  const timeline = [
    {
      period: "2024 - Presente",
      title: "Desarrollador Full Stack Freelance",
      description: "Creación de aplicaciones web personalizadas, PWAs, sistemas de gestión y e-commerce para clientes internacionales y locales.",
      tags: ["React", "Node.js", "Tailwind", "Firebase"]
    },
    {
      period: "2023 - 2024",
      title: "Especialización en Desarrollo Web Frontend",
      description: "Dominio de React 19, estado global, animaciones con Framer Motion y arquitecturas modernas basadas en componentes.",
      tags: ["JavaScript ES6+", "React JS", "UI/UX"]
    },
    {
      period: "2022 - 2023",
      title: "Fundamentos de Ingeniería de Software",
      description: "Estudio profundo de estructuras de datos, lógica de programación, bases de datos SQL/NoSQL y metodologías ágiles.",
      tags: ["HTML/CSS", "SQL", "Git & GitHub"]
    }
  ];

  return (
    <section className="min-h-screen py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
        >
          <span className="px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold font-mono tracking-wider uppercase border border-purple-500/20">
            Conoce mi historia
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
            Sobre <span className="text-gradient-primary">Mí</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
            Apasionado por la tecnología, el diseño limpio y el aprendizaje constante para crear software extraordinario.
          </p>
        </motion.div>

        {/* Profile Card & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
          
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-card p-8 border border-white/20 dark:border-white/10 shadow-2xl space-y-6">
              
              {/* Profile Avatar Glow Box */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600/20 via-indigo-600/30 to-purple-600/30 border border-white/10 flex flex-col items-center justify-center p-6 text-center">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/30 mb-4"
                >
                  <Code size={48} strokeWidth={1.8} />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Andrés Rojas
                </h3>
                <span className="text-xs font-mono tracking-widest text-cyan-600 dark:text-cyan-400 uppercase mt-1">
                  Full Stack Engineer & UI Craftsman
                </span>

                <div className="mt-4 flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                  <CheckCircle size={14} />
                  <span>Disponible Inmediatamente</span>
                </div>
              </div>

              {/* Personal Meta Grid */}
              <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-gray-100/60 dark:bg-gray-800/40 border border-gray-200/50 dark:border-white/5 flex items-center gap-3">
                  <User className="text-blue-500 shrink-0" size={18} />
                  <div>
                    <div className="text-[10px] text-gray-500 dark:text-gray-400 uppercase font-semibold">Nombre</div>
                    <div className="font-bold text-gray-800 dark:text-gray-200">Andres Rojas</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-gray-100/60 dark:bg-gray-800/40 border border-gray-200/50 dark:border-white/5 flex items-center gap-3">
                  <MapPin className="text-purple-500 shrink-0" size={18} />
                  <div>
                    <div className="text-[10px] text-gray-500 dark:text-gray-400 uppercase font-semibold">Ubicación</div>
                    <div className="font-bold text-gray-800 dark:text-gray-200">Colombia</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-gray-100/60 dark:bg-gray-800/40 border border-gray-200/50 dark:border-white/5 flex items-center gap-3">
                  <Calendar className="text-cyan-500 shrink-0" size={18} />
                  <div>
                    <div className="text-[10px] text-gray-500 dark:text-gray-400 uppercase font-semibold">Edad</div>
                    <div className="font-bold text-gray-800 dark:text-gray-200">21 Años</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-gray-100/60 dark:bg-gray-800/40 border border-gray-200/50 dark:border-white/5 flex items-center gap-3">
                  <Briefcase className="text-emerald-500 shrink-0" size={18} />
                  <div>
                    <div className="text-[10px] text-gray-500 dark:text-gray-400 uppercase font-semibold">Modalidad</div>
                    <div className="font-bold text-gray-800 dark:text-gray-200">Remoto / Híbrido</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-center text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles size={16} />
                  <span>Iniciar un Proyecto</span>
                </Link>
              </div>

            </div>
          </motion.div>

          {/* Right Column - Bio & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white leading-snug">
              Transformando requerimientos en aplicaciones web <span className="text-gradient-cyan">excepcionales</span>.
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
              Mi misión es construir plataformas digitales de alto impacto que no solo funcionen de forma impecable, sino que también enamoren a los usuarios a través de un diseño cuidado al detalle.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
              Desde aplicaciones progresivas (PWA) hasta sistemas de comercio electrónico completos y soluciones basadas en inteligencia artificial, combino arquitecturas modernas como React, Node.js y Tailwind CSS con buenas prácticas de optimización y seguridad.
            </p>

            {/* Stats Highlight Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="p-5 rounded-2xl glass-card border border-gray-200/80 dark:border-white/10 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="inline-flex p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-cyan-400 mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-extrabold text-gradient-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

        {/* EXPERIENCE TIMELINE ROADMAP */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              Trayectoria y <span className="text-gradient-primary">Evolución</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
              Mi camino continuo en el desarrollo de software y construcción de valor digital.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-blue-500/30 space-y-12">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="relative pl-6 group"
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[31px] top-1.5 w-5 h-5 rounded-full bg-blue-600 ring-4 ring-white dark:ring-[#090d16] group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-300"></div>

                <div className="p-6 rounded-2xl glass-card border border-gray-200/80 dark:border-white/10 space-y-3 hover:border-blue-500/40 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-cyan-400 font-mono text-xs font-bold border border-blue-500/20">
                      {item.period}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
