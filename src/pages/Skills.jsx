import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, Database, Terminal, Cpu, Globe, Layers, Zap, Users, 
  MessageSquare, Lightbulb, Search, Award, Target, Repeat, 
  Sparkles, CheckCircle2, Shield, Wrench
} from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const techCategories = [
    {
      id: 'frontend',
      title: 'Frontend & UI Architecture',
      icon: <Layers size={24} />,
      color: 'from-blue-500 to-cyan-500',
      description: 'Construyendo interfaces dinámicas, responsivas y con rendimiento optimizado a 60 FPS.',
      skills: [
        { name: 'React 19', level: 'Master', category: 'frontend', color: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30' },
        { name: 'JavaScript (ES6+)', level: 'Master', category: 'frontend', color: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/30' },
        { name: 'Tailwind CSS v4', level: 'Master', category: 'frontend', color: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/30' },
        { name: 'Framer Motion', level: 'Advanced', category: 'frontend', color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30' },
        { name: 'HTML5 & CSS3', level: 'Master', category: 'frontend', color: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30' },
        { name: 'TypeScript', level: 'Advanced', category: 'frontend', color: 'bg-blue-600/10 text-blue-600 dark:text-blue-400 border-blue-600/30' },
        { name: 'Vue.js', level: 'Intermediate', category: 'frontend', color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30' },
      ],
    },
    {
      id: 'backend',
      title: 'Backend & Cloud Infrastructure',
      icon: <Database size={24} />,
      color: 'from-emerald-500 to-teal-600',
      description: 'Diseño de APIs RESTful, gestión de bases de datos y arquitectura de microservicios.',
      skills: [
        { name: 'Node.js', level: 'Advanced', category: 'backend', color: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/30' },
        { name: 'Express.js', level: 'Advanced', category: 'backend', color: 'bg-gray-500/10 text-gray-700 dark:text-gray-300 border-gray-500/30' },
        { name: 'MongoDB', level: 'Advanced', category: 'backend', color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30' },
        { name: 'MySQL / PostgreSQL', level: 'Intermediate', category: 'backend', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30' },
        { name: 'Firebase', level: 'Advanced', category: 'backend', color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30' },
        { name: 'REST APIs', level: 'Master', category: 'backend', color: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30' },
      ],
    },
    {
      id: 'tools',
      title: 'DevOps & UI/UX Tools',
      icon: <Wrench size={24} />,
      color: 'from-purple-500 to-pink-500',
      description: 'Control de versiones, prototipado de alta fidelidad y pruebas automatizadas.',
      skills: [
        { name: 'Git & GitHub', level: 'Master', category: 'tools', color: 'bg-orange-600/10 text-orange-600 dark:text-orange-400 border-orange-600/30' },
        { name: 'Docker', level: 'Intermediate', category: 'tools', color: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30' },
        { name: 'Figma', level: 'Advanced', category: 'tools', color: 'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/30' },
        { name: 'Postman / Insomnia', level: 'Master', category: 'tools', color: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30' },
        { name: 'Vite / Webpack', level: 'Advanced', category: 'tools', color: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/30' },
      ],
    },
  ];

  const softSkills = [
    { name: 'Trabajo en Equipo', icon: <Users size={22} />, desc: 'Colaboración sinérgica en metodologías ágiles (Scrum).' },
    { name: 'Comunicación Asertiva', icon: <MessageSquare size={22} />, desc: 'Claridad en la transmisión de conceptos técnicos.' },
    { name: 'Resolución Analítica', icon: <Lightbulb size={22} />, desc: 'Descomposición metódica de problemas complejos.' },
    { name: 'Pensamiento Crítico', icon: <Search size={22} />, desc: 'Evaluación continua para optimizar código y diseño.' },
    { name: 'Adaptabilidad Rápida', icon: <Repeat size={22} />, desc: 'Adopción veloz de nuevas herramientas y stacks.' },
    { name: 'Entrega Orientada a Resultados', icon: <Target size={22} />, desc: 'Enfoque riguroso en calidad y fechas límite.' },
  ];

  const allSkills = techCategories.flatMap(c => c.skills);

  const filteredSkills = (catId) => {
    let list = catId === 'all' ? allSkills : allSkills.filter(s => s.category === catId);
    if (searchQuery.trim()) {
      list = list.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return list;
  };

  return (
    <section className="min-h-screen py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold font-mono tracking-wider uppercase border border-cyan-500/20">
            Stack Tecnológico
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
            Especialización <span className="text-gradient-cyan">Técnica</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
            Dominio práctico y ejecución orientada a la creación de aplicaciones modernas.
          </p>
        </motion.div>

        {/* Filter & Search Bar */}
        <div className="max-w-4xl mx-auto mb-14 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl glass-card border border-gray-200/80 dark:border-white/10">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'all'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Todas las Tecnologías
              </button>
              {techCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeTab === cat.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {cat.title.split('&')[0]}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Buscar tecnología..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl glass-card text-xs sm:text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 border border-gray-200/80 dark:border-white/10"
              />
            </div>

          </div>
        </div>

        {/* Skills Display Grid */}
        {activeTab === 'all' && !searchQuery ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            {techCategories.map((category, idx) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="glass-card glass-card-hover rounded-3xl p-8 border border-gray-200/80 dark:border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${category.color} flex items-center justify-center text-white shadow-lg`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                      <span className="text-[10px] font-mono font-semibold tracking-wider text-gray-500 dark:text-gray-400 uppercase">
                        Core Competencies
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-6 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.06 }}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border ${skill.color} flex items-center gap-2 shadow-2xs`}
                    >
                      <span>{skill.name}</span>
                      <span className="w-1 h-1 rounded-full bg-current opacity-60"></span>
                      <span className="text-[10px] uppercase font-mono tracking-tighter opacity-80">{skill.level}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-24">
            <AnimatePresence>
              {filteredSkills(activeTab).map((skill) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ scale: 1.08 }}
                  className={`px-4 py-2 rounded-2xl text-sm font-bold border ${skill.color} flex items-center gap-2.5 glass-card shadow-sm`}
                >
                  <Sparkles size={14} />
                  <span>{skill.name}</span>
                  <span className="px-2 py-0.5 rounded-md bg-white/40 dark:bg-black/40 text-[10px] uppercase font-mono tracking-wider">
                    {skill.level}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* SOFT SKILLS SECTION */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              Habilidades <span className="text-gradient-primary">Profesionales</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
              Competencias interpersonales que garantizan un flujo de trabajo armónico y entregas de máxima calidad.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl glass-card border border-gray-200/80 dark:border-white/10 flex items-start gap-4 hover:border-blue-500/40 transition-all"
              >
                <div className="p-3 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 text-white shadow-md shrink-0">
                  {skill.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-base mb-1">
                    {skill.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
