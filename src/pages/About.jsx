import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User, MapPin, Calendar, Briefcase, Code, Download,
  Sparkles, Award, GraduationCap, Terminal, Rocket, CheckCircle, ExternalLink, X, ZoomIn
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Certificate images from assets
import certOracle from '../assets/Octavio Andres Rojas Aguilera - Programa -_page-0001.jpg';
import certReact from '../assets/Certificado - Curso profesional de React_page-0001.jpg';
import certJS from '../assets/Certificado - Curso profesional de JavaScript_page-0001.jpg';
import certWeb from '../assets/Certificado - Curso Profesional Desarrollo Web_page-0001.jpg';

const About = () => {
  const [modalImg, setModalImg] = useState(null);

  const stats = [
    { label: 'Años de Experiencia', value: '1+', icon: <Briefcase size={20} /> },
    { label: 'Proyectos Completados', value: '7+', icon: <Rocket size={20} /> },
    { label: 'Satisfacción Clientes', value: '100%', icon: <Award size={20} /> },
  ];

  const timeline = [
    {
      period: "2026 - Presente",
      title: "Desarrollador Freelance",
      description: "Creación de aplicaciones web personalizadas, PWAs, sistemas de gestión y soluciones digitales para clientes locales e internacionales.",
      tags: ["React JS & Vite", "Node.js", "Firebase", "tailwind css", "Firebase DB"],
      type: "work"
    },
    {
      period: "Nov 2024 - Presente",
      title: "Tecnólogo en Análisis y Desarrollo de Software",
      institution: "SENA",
      description: "Formación técnica integral en análisis, diseño y desarrollo de software, con enfoque en metodologías ágiles, bases de datos y programación orientada a objetos.",
      tags: ["React JS", "SQL/NoSQL", "POO", "Scrum", "NodeJS"],
      type: "education"
    },
    {
      period: "Dic 2024",
      title: "Oracle Next Education (ONE)",
      institution: "Oracle + Alura LATAM",
      description: "Completé 6 formaciones con una carga de trabajo estimada de 286 horas en el programa Oracle Next Education, enfocado en desarrollo Back-End y Front-End.",
      tags: ["Java", "Spring Boot", "HTML/CSS", "JavaScript"],
      certImg: certOracle,
      type: "certificate"
    },
    {
      period: "Abr 2024",
      title: "Curso Profesional de React",
      institution: "Código Facilito",
      description: "Formación profesional en React: componentes, hooks, estado global, React Router y mejores prácticas en el desarrollo de aplicaciones modernas. (9h 37m)",
      tags: ["React", "Hooks", "JSX", "React Router"],
      certImg: certReact,
      type: "certificate"
    },
    {
      period: "Abr 2023",
      title: "Curso Profesional de JavaScript",
      institution: "Código Facilito",
      description: "Dominio de JavaScript moderno: ES6+, programación asíncrona, manipulación del DOM, closures y patrones de diseño. (8h 51m)",
      tags: ["JavaScript", "ES6+", "Async/Await", "DOM"],
      certImg: certJS,
      type: "certificate"
    },
    {
      period: "Abr 2023",
      title: "Curso Profesional de Desarrollo Web",
      institution: "Código Facilito",
      description: "Fundamentos y prácticas avanzadas de desarrollo web: HTML semántico, CSS moderno, responsive design y despliegue de proyectos web. (7h 36m)",
      tags: ["HTML", "CSS", "Responsive", "Web"],
      certImg: certWeb,
      type: "certificate"
    }
  ];

  return (
    <>
      {/* Certificate Lightbox Modal */}
      <AnimatePresence>
        {modalImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setModalImg(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalImg(null)}
                className="absolute -top-4 -right-4 z-10 w-10 h-10 rounded-full bg-gray-900 border border-white/20 text-white flex items-center justify-center hover:bg-red-600 transition-colors shadow-xl"
              >
                <X size={18} />
              </button>
              <img
                src={modalImg}
                alt="Certificado"
                className="w-full rounded-2xl shadow-2xl border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              Apasionado por la tecnología, el diseño limpio y el aprendizaje constante para crear software seguro y escalable.
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
                    Full Stack Developer & UI Craftsman
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
                      <div className="font-bold text-gray-800 dark:text-gray-200">22 Años</div>
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
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  viewport={{ once: true }}
                  className="relative pl-6 group"
                >
                  {/* Timeline Dot Indicator */}
                  <div className={`absolute -left-[31px] top-1.5 w-5 h-5 rounded-full ring-4 ring-white dark:ring-[#090d16] group-hover:scale-125 transition-all duration-300 ${item.type === 'work' ? 'bg-emerald-500 group-hover:bg-emerald-400' :
                    item.type === 'education' ? 'bg-purple-600 group-hover:bg-purple-400' :
                      'bg-blue-600 group-hover:bg-cyan-400'
                    }`}></div>

                  <div className="p-6 rounded-2xl glass-card border border-gray-200/80 dark:border-white/10 space-y-3 hover:border-blue-500/40 transition-colors">
                    {/* Header row */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className={`px-3 py-1 rounded-full font-mono text-xs font-bold border ${item.type === 'work' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' :
                        item.type === 'education' ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20' :
                          'bg-blue-500/10 text-blue-600 dark:text-cyan-400 border-blue-500/20'
                        }`}>
                        {item.period}
                      </span>
                      <div className="flex items-center gap-2">
                        {item.type === 'work' && (
                          <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold border border-emerald-500/20 uppercase tracking-wide flex items-center gap-1">
                            <Briefcase size={10} /> Trabajo
                          </span>
                        )}
                        {item.type === 'education' && (
                          <span className="px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[10px] font-bold border border-purple-500/20 uppercase tracking-wide flex items-center gap-1">
                            <GraduationCap size={10} /> Educación
                          </span>
                        )}
                        {item.certImg && (
                          <button
                            onClick={() => setModalImg(item.certImg)}
                            className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-bold border border-amber-500/20 uppercase tracking-wide flex items-center gap-1 hover:bg-amber-500/20 transition-colors cursor-pointer"
                          >
                            <Award size={10} /> Ver Certificado <ZoomIn size={9} />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Title & institution */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h4>
                      {item.institution && (
                        <p className="text-xs font-semibold text-blue-500 dark:text-cyan-400 mt-0.5">{item.institution}</p>
                      )}
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    {/* Certificate thumbnail preview */}
                    {item.certImg && (
                      <div
                        className="mt-2 relative rounded-xl overflow-hidden cursor-pointer group/thumb border border-white/10 hover:border-amber-500/40 transition-colors"
                        onClick={() => setModalImg(item.certImg)}
                      >
                        <img
                          src={item.certImg}
                          alt={`Certificado ${item.title}`}
                          className="w-full h-28 object-cover object-top group-hover/thumb:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300">
                          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold">
                            <ZoomIn size={14} /> Ver Certificado
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 pt-1">
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
    </>
  );
};

export default About;
