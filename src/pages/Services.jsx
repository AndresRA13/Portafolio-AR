import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Smartphone, Database, Globe, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Layout size={32} />,
      title: 'Desarrollo Frontend',
      description: 'Interfaces de usuario modernas, responsivas y accesibles utilizando React, Tailwind CSS y las últimas tecnologías web.',
    },
    {
      icon: <Database size={32} />,
      title: 'Desarrollo Backend',
      description: 'APIs robustas y escalables, gestión de bases de datos y lógica de servidor segura con Node.js y bases de datos SQL/NoSQL.',
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Desarrollo Móvil',
      description: 'Aplicaciones móviles nativas o híbridas que ofrecen una experiencia de usuario fluida en iOS y Android.',
    },
    {
      icon: <Globe size={32} />,
      title: 'SEO & Optimización',
      description: 'Mejora de la visibilidad en motores de búsqueda y optimización del rendimiento para tiempos de carga ultrarrápidos.',
    },
    {
      icon: <Code size={32} />,
      title: 'Mantenimiento Web',
      description: 'Soporte continuo, actualizaciones de seguridad y mejoras de funcionalidad para mantener tu sitio web funcionando sin problemas.',
    },
    {
      icon: <Shield size={32} />,
      title: 'Auditoría de Seguridad',
      description: 'Análisis de vulnerabilidades y buenas prácticas de seguridad para proteger tus aplicaciones y datos de usuarios.',
    },
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Mis Servicios</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Soluciones integrales adaptadas a tus necesidades específicas. Desde el diseño hasta el despliegue.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-6 inline-block p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
