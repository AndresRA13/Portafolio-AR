import React from 'react';
import { motion } from 'framer-motion';
import {
  Layers, Database, Wrench,
  Users, MessageSquare, Lightbulb, Search, Target, Repeat
} from 'lucide-react';

/* ─── Tech stacks ─────────────────────────────────────────────── */
const categories = [
  {
    id: 'frontend',
    title: 'Frontend & UI',
    icon: <Layers size={20} />,
    gradient: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Base de Datos',
    icon: <Database size={20} />,
    gradient: 'from-emerald-500 to-teal-600',
    skills: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    ],
  },
  {
    id: 'tools',
    title: 'Herramientas & DevOps',
    icon: <Wrench size={20} />,
    gradient: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    ],
  },
];

/* ─── Soft skills ─────────────────────────────────────────────── */
const softSkills = [
  { name: 'Trabajo en Equipo', icon: <Users size={22} />, desc: 'Colaboración sinérgica en metodologías ágiles (Scrum).' },
  { name: 'Comunicación Asertiva', icon: <MessageSquare size={22} />, desc: 'Claridad en la transmisión de conceptos técnicos.' },
  { name: 'Resolución Analítica', icon: <Lightbulb size={22} />, desc: 'Descomposición metódica de problemas complejos.' },
  { name: 'Pensamiento Crítico', icon: <Search size={22} />, desc: 'Evaluación continua para optimizar código y diseño.' },
  { name: 'Adaptabilidad Rápida', icon: <Repeat size={22} />, desc: 'Adopción veloz de nuevas herramientas y stacks.' },
  { name: 'Orientado a Resultados', icon: <Target size={22} />, desc: 'Enfoque riguroso en calidad y fechas límite.' },
];

/* ─── Skill icon card ─────────────────────────────────────────── */
const SkillCard = ({ skill, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay }}
    viewport={{ once: true }}
    whileHover={{ y: -6, scale: 1.06 }}
    className="flex flex-col items-center gap-2.5 p-4 rounded-2xl
               glass-card border border-gray-200/60 dark:border-white/8
               hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10
               transition-all duration-300 cursor-default group"
  >
    <div className="w-12 h-12 flex items-center justify-center">
      <img
        src={skill.icon}
        alt={skill.name}
        className="w-10 h-10 object-contain drop-shadow-sm
                   group-hover:scale-110 transition-transform duration-300
                   dark:brightness-90"
        loading="lazy"
        onError={(e) => { e.target.style.display = 'none'; }}
      />
    </div>
    <span className="text-[11px] font-semibold text-gray-700 dark:text-gray-300 text-center leading-tight">
      {skill.name}
    </span>
  </motion.div>
);

/* ─── Main component ──────────────────────────────────────────── */
const Skills = () => (
  <section className="min-h-screen py-24 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-20 space-y-4"
      >
        <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400
                         text-xs font-bold font-mono tracking-wider uppercase border border-cyan-500/20">
          Stack Tecnológico
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
          Mis <span className="text-gradient-cyan">Habilidades</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
          Tecnologías y herramientas que uso para construir aplicaciones modernas, escalables y de alto rendimiento.
        </p>
      </motion.div>

      {/* ── Tech categories ── */}
      <div className="space-y-14 mb-24">
        {categories.map((cat, catIdx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Category label */}
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${cat.gradient}
                              flex items-center justify-center text-white shadow-md`}>
                {cat.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {cat.title}
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-200/80 dark:from-white/10 to-transparent ml-2" />
            </div>

            {/* Icon grid */}
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
              {cat.skills.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} delay={i * 0.05} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Soft Skills ── */}
      <div className="mt-4">
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
              className="p-6 rounded-2xl glass-card border border-gray-200/80 dark:border-white/10
                         flex items-start gap-4 hover:border-blue-500/40 transition-all"
            >
              <div className="p-3 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 text-white shadow-md shrink-0">
                {skill.icon}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-base mb-1">{skill.name}</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{skill.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default Skills;
