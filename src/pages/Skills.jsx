import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Terminal, Cpu, Globe, Layers, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Architecture',
      icon: <Layers size={32} />,
      description: 'Construyendo interfaces modernas, rápidas y accesibles.',
      skills: [
        { name: 'React', level: 'Master', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400' },
        { name: 'JavaScript (ES6+)', level: 'Advanced', color: 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400' },
        { name: 'Tailwind CSS', level: 'Master', color: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400' },
        { name: 'Framer Motion', level: 'Advanced', color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400' },
        { name: 'TypeScript', level: 'Intermediate', color: 'bg-blue-600/10 text-blue-700 dark:text-blue-300' },
      ],
    },
    {
      id: 'backend',
      title: 'Backend & Infrastructure',
      icon: <Database size={32} />,
      description: 'Sistemas escalables y gestión eficiente de datos.',
      skills: [
        { name: 'Node.js', level: 'Advanced', color: 'bg-green-500/10 text-green-600 dark:text-green-400' },
        { name: 'Express', level: 'Advanced', color: 'bg-gray-500/10 text-gray-600 dark:text-gray-400' },
        { name: 'MongoDB', level: 'Advanced', color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' },
        { name: 'PostgreSQL', level: 'Intermediate', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400' },
        { name: 'Firebase', level: 'Advanced', color: 'bg-orange-500/10 text-orange-600 dark:text-orange-400' },
      ],
    },
    {
      id: 'tools',
      title: 'Workflow & UI/UX',
      icon: <Terminal size={32} />,
      description: 'Herramientas de productividad y diseño centrado en el usuario.',
      skills: [
        { name: 'Git & GitHub', level: 'Master', color: 'bg-orange-600/10 text-orange-700 dark:text-orange-400' },
        { name: 'Docker', level: 'Intermediate', color: 'bg-blue-400/10 text-blue-500' },
        { name: 'Figma', level: 'Advanced', color: 'bg-pink-500/10 text-pink-600 dark:text-pink-400' },
        { name: 'Postman', level: 'Advanced', color: 'bg-orange-500/10 text-orange-600' },
        { name: 'Unit Testing', level: 'Intermediate', color: 'bg-red-500/10 text-red-600 dark:text-red-400' },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-24 bg-gray-50 dark:bg-[#0f172a] text-gray-900 dark:text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Especialización <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">Técnica</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            En lugar de porcentajes arbitrarios, presento mi stack basado en mi capacidad de ejecución y dominio real de cada herramienta.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800/40 backdrop-blur-md rounded-3xl p-8 border border-gray-100 dark:border-white/5 shadow-xl shadow-gray-200/50 dark:shadow-none"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">Tecnologías Core</p>
                </div>
              </div>
              
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-8 leading-relaxed">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * i }}
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2 rounded-xl text-sm font-medium border border-transparent hover:border-current/20 transition-all cursor-default flex items-center gap-2 ${skill.color}`}
                  >
                    <span>{skill.name}</span>
                    <span className="w-1 h-1 rounded-full bg-current opacity-40"></span>
                    <span className="text-[10px] uppercase opacity-70 tracking-tighter">{skill.level}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
