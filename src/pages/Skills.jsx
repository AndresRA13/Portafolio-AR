import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Terminal, Cpu, Globe, Layers, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Universe',
      icon: <Layers size={32} />,
      description: 'Creando experiencias visuales cautivadoras.',
      skills: [
        { name: 'React', level: 95, color: 'from-blue-400 to-blue-600' },
        { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Tailwind CSS', level: 95, color: 'from-cyan-400 to-cyan-600' },
        { name: 'Framer Motion', level: 85, color: 'from-purple-400 to-purple-600' },
        { name: 'Next.js', level: 80, color: 'from-gray-600 to-gray-900' },
      ],
    },
    {
      id: 'backend',
      title: 'Backend Core',
      icon: <Database size={32} />,
      description: 'Arquitecturas robustas y escalables.',
      skills: [
        { name: 'Node.js', level: 85, color: 'from-green-400 to-green-600' },
        { name: 'Express', level: 85, color: 'from-gray-400 to-gray-600' },
        { name: 'MongoDB', level: 80, color: 'from-green-500 to-green-700' },
        { name: 'PostgreSQL', level: 75, color: 'from-blue-500 to-blue-700' },
        { name: 'GraphQL', level: 70, color: 'from-pink-400 to-pink-600' },
      ],
    },
    {
      id: 'tools',
      title: 'DevOps & Tools',
      icon: <Terminal size={32} />,
      description: 'Herramientas que potencian el flujo de trabajo.',
      skills: [
        { name: 'Git & GitHub', level: 90, color: 'from-orange-400 to-orange-600' },
        { name: 'Docker', level: 70, color: 'from-blue-400 to-blue-600' },
        { name: 'AWS', level: 60, color: 'from-yellow-500 to-yellow-700' },
        { name: 'Figma', level: 80, color: 'from-purple-400 to-purple-600' },
        { name: 'Testing', level: 75, color: 'from-red-400 to-red-600' },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-24 bg-gray-50 dark:bg-[#0f172a] text-gray-900 dark:text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
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
            Arsenal <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Tecnológico</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Domino un stack moderno diseñado para construir aplicaciones web rápidas, seguras y escalables.
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
              className="group relative bg-white dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-100 dark:border-gray-700 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent dark:from-white/5 dark:to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  {category.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">
                  {category.description}
                </p>

                <div className="space-y-6">
                  {category.skills.map((skill, i) => (
                    <div key={skill.name} className="relative">
                      <div className="flex justify-between items-end mb-2">
                        <span className="font-semibold text-gray-700 dark:text-gray-200">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + (i * 0.1), ease: "easeOut" }}
                          viewport={{ once: true }}
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
