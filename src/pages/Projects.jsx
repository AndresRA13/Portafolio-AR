import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Full Stack',
      image: 'https://i.ibb.co/svBVMJ5y/image.png',
      description: 'Una plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos, gestión de usuarios y panel de administración.',
      technologies: ['React JS', 'firebase JS', 'Tailwind CSS', 'PaypalPayment'],
      demoLink: 'https://andresra13.github.io/psg-shop/',
      githubLink: 'https://github.com/AndresRA13/psg-shop',
    },
    {
      id: 2,
      title: 'CineTV',
      category: 'Entertaiment',
      image: 'https://i.ibb.co/ZzJJP98d/image.png',
      description: 'Aplicación para la gestión de tareas y proyectos en equipo, con funcionalidades de tiempo real, asignación de roles y seguimiento de progreso.',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS', 'Vuex'],
      demoLink: 'https://cinemovietv.netlify.app/',
      githubLink: '#',
    },
    {
      id: 3,
      title: 'MyADM',
      category: 'Design',
      image: 'https://i.ibb.co/4nbjSSpz/image.png',
      description: 'Un sitio web de portafolio para un diseñador gráfico, enfocado en la presentación visual de trabajos con animaciones fluidas.',
      technologies: ['React', 'Framer Motion', 'GSAP', 'Styled Components'],
      demoLink: 'https://myadm.netlify.app/',
      githubLink: '#',
    },
    {
      id: 4,
      title: 'DrawyScanner',
      category: 'Fintech',
      image: 'https://i.ibb.co/nqfyy0KS/image.png',
      description: 'Panel de control para visualización de datos financieros, con gráficos interactivos, reportes y análisis de tendencias.',
      technologies: ['Angular', 'D3.js', 'Express', 'PostgreSQL'],
      demoLink: 'https://drawyscanner.netlify.app/',
      githubLink: '#',
    },
    {
      id: 5,
      title: 'Task Manager',
      category: 'Social',
      image: 'https://i.ibb.co/v5vwP9H/image.png',
      description: 'Red social enfocada en compartir contenido multimedia, con chat en tiempo real, notificaciones y sistema de seguidores.',
      technologies: ['React Native', 'GraphQL', 'AWS Amplify', 'Node.js'],
      demoLink: 'https://todli.netlify.app/',
      githubLink: '#',
    },
    {
      id: 6,
      title: 'ARKGPT',
      category: 'AI / Chatbot',
      image: 'https://i.ibb.co/21SrCgKd/image.png',
      description: 'Herramienta impulsada por IA para generar contenido de marketing, blogs y copys publicitarios de alta calidad.',
      technologies: ['Next.js', 'OpenAI API', 'Tailwind CSS', 'Prisma'],
      demoLink: 'https://arkgpt.netlify.app/',
      githubLink: '#',
    },
     {
      id: 7,
      title: 'E-Commerce Platform',
      category: 'Full Stack',
      image: 'https://i.ibb.co/ZzJJP98d/image.png',
      description: 'Una plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos, gestión de usuarios y panel de administración.',
      technologies: ['React JS', 'firebase JS', 'Tailwind CSS', 'Paypal'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      id: 8,
      title: 'Fitness Tracker',
      category: 'Health',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Plataforma para el seguimiento de rutinas de ejercicio, nutrición y objetivos de salud con visualización de progreso.',
      technologies: ['React', 'Chart.js', 'Firebase Auth', 'Tailwind'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      id: 9,
      title: 'Travel Agency Site',
      category: 'Business',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8df0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Sitio web para una agencia de viajes con catálogo de destinos, reserva de tours y reseñas de clientes.',
      technologies: ['Astro', 'React', 'Cloudinary', 'Tailwind'],
      demoLink: '#',
      githubLink: '#',
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Pagination Logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Smooth scroll to projects section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50 dark:bg-[#0f172a] text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Mis Proyectos</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes, demostrando mis capacidades en desarrollo frontend, backend y diseño.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentProjects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`project-card-${project.id}`}
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer group rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium">Ver Detalles</span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold tracking-wide text-blue-600 dark:text-blue-400 uppercase mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8 mb-12">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-sm"
            >
              <span className="sr-only">Anterior</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${
                  currentPage === i + 1
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-gray-900'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-sm"
            >
              <span className="sr-only">Siguiente</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              layoutId={`project-card-${selectedProject.id}`}
              className="bg-white dark:bg-gray-900 w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors z-10"
              >
                <X size={24} />
              </button>
              
              <div className="relative h-64 sm:h-80">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="text-sm font-semibold tracking-wide text-blue-400 uppercase mb-2">
                    {selectedProject.category}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Descripción</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Tecnologías</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                  <a
                    href={selectedProject.demoLink}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={20} />
                    Ver Demo
                  </a>
                  <a
                    href={selectedProject.githubLink}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <Github size={20} />
                    Código
                  </a>
                </div>
              </div>
            </motion.div>
            <div 
              className="absolute inset-0 -z-10" 
              onClick={() => setSelectedProject(null)}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
