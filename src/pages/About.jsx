import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Briefcase, Code } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Años de Experiencia', value: '1+' },
    { label: 'Proyectos Completados', value: '7+' },
    { label: 'Clientes Felices', value: '5+' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50 dark:bg-[#0f172a] text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Sobre Mí</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Conoce más sobre mi trayectoria, mi pasión por el código y cómo puedo ayudarte a construir tu próximo gran proyecto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10 bg-gray-200 dark:bg-gray-800">
               {/* Placeholder for user image if they had one, using a gradient for now */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex flex-col items-center justify-center p-12">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="p-6 rounded-3xl bg-linear-to-tr from-blue-500 to-purple-600 text-white shadow-2xl shadow-blue-500/20 mb-6"
                  >
                    <Code size={80} strokeWidth={1.5} />
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center"
                  >
                    <span className="block text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                      AR<span className="text-blue-500">Portfolio</span>
                    </span>
                    <span className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mt-2 block">
                      Digital Solutions
                    </span>
                  </motion.div>
                </div>
               {/* If user provided an image, we would use an img tag here. 
                   Since no specific image was provided for the profile, I'll keep it abstract/placeholder 
                   but styled nicely. */}
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-2 border-blue-500 rounded-2xl z-0 hidden md:block"></div>
            <div className="absolute -top-6 -left-6 w-2/3 h-2/3 bg-blue-500/10 rounded-2xl z-0 hidden md:block"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">
              Desarrollador Full Stack & UI/UX Enthusiast
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Soy un apasionado desarrollador de software con una sólida base en tecnologías web modernas. Mi enfoque combina un código limpio y eficiente con un diseño intuitivo y atractivo. Me encanta resolver problemas complejos y aprender nuevas tecnologías constantemente.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              He trabajado en una variedad de proyectos, desde pequeñas aplicaciones de negocios hasta grandes plataformas empresariales. Mi objetivo es siempre entregar productos de alta calidad que superen las expectativas del cliente.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <User className="text-blue-500" size={20} />
                <span>Nombre: Andres Rojas</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <MapPin className="text-blue-500" size={20} />
                <span>Ubicación: Colombia</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <Calendar className="text-blue-500" size={20} />
                <span>Edad: 21 Años</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <Briefcase className="text-blue-500" size={20} />
                <span>Freelance: Disponible</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-gray-200 dark:border-gray-800 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
