import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Search, Sparkles, Filter, Eye, Layers } from 'lucide-react';

const projectsList = [
  {
    id: 1,
    title: 'PSG Shop — E-Commerce',
    category: 'Full Stack',
    image: 'https://i.ibb.co/svBVMJ5y/image.png',
    description: 'Plataforma completa de comercio electrónico con carrito de compras reactivo, gestión de usuarios, pasarela de pagos integrada con PayPal y panel de administración.',
    technologies: ['React JS', 'Firebase', 'Tailwind CSS', 'PayPal API'],
    demoLink: 'https://andresra13.github.io/psg-shop/',
    githubLink: 'https://github.com/AndresRA13/psg-shop',
    featured: true,
  },
  {
    id: 6,
    title: 'ARKGPT — Assistant AI',
    category: 'AI & Tools',
    image: 'https://i.ibb.co/21SrCgKd/image.png',
    description: 'Plataforma impulsada por modelos de inteligencia artificial para generación de contenido, asistencia inteligente en código y chat en tiempo real.',
    technologies: ['Next.js', 'OpenAI API', 'Tailwind CSS', 'Prisma'],
    demoLink: 'https://arkgpt.netlify.app/',
    githubLink: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'CineTV — Streaming Hub',
    category: 'Entertainment',
    image: 'https://i.ibb.co/ZzJJP98d/image.png',
    description: 'Plataforma multimedia para exploración de películas y series de televisión con trailers en vivo, listados por tendencia y buscador en tiempo real.',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS', 'TMDB API'],
    demoLink: 'https://cinemovietv.netlify.app/',
    githubLink: '#',
    featured: false,
  },
  {
    id: 3,
    title: 'MyADM — Interactive Studio',
    category: 'Design & UI',
    image: 'https://i.ibb.co/4nbjSSpz/image.png',
    description: 'Sitio web de portafolio y agencia de diseño visual con efectos tridimensionales, animaciones fluidas y maquetación de alto nivel.',
    technologies: ['React', 'Framer Motion', 'GSAP', 'Tailwind CSS'],
    demoLink: 'https://myadm.netlify.app/',
    githubLink: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'DrawyScanner — PWA',
    category: 'PWA & Mobile',
    image: 'https://i.ibb.co/nqfyy0KS/image.png',
    description: 'Aplicación web progresiva (PWA) para escaneo digital, procesamiento gráfico e interacción táctil optimizada para dispositivos móviles.',
    technologies: ['JavaScript ES6+', 'HTML5 Canvas', 'CSS3', 'PWA ServiceWorker'],
    demoLink: 'https://drawyscanner.netlify.app/',
    githubLink: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Todli — Task Manager',
    category: 'Full Stack',
    image: 'https://i.ibb.co/v5vwP9H/image.png',
    description: 'Gestor dinámico de tareas y metas personales con tableros interactivos, recordatorios y estado persistente en la nube.',
    technologies: ['React', 'Firebase Auth', 'Tailwind CSS', 'Node.js'],
    demoLink: 'https://todli.netlify.app/',
    githubLink: '#',
    featured: false,
  },
  {
    id: 7,
    title: 'Zypno Notes',
    category: 'PWA & Mobile',
    image: 'https://i.ibb.co/VY5RyGKL/image.png',
    description: 'Aplicación ultra rápida para toma de notas con formato rich text, categorización por etiquetas y sincronización instantánea.',
    technologies: ['JavaScript', 'Firebase', 'CSS3', 'LocalStorage'],
    demoLink: 'https://zypno.netlify.app/',
    githubLink: '#',
    featured: false,
  },
  {
    id: 8,
    title: 'Fitness Tracker Dashboard',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=80',
    description: 'Dashboard interactivo para monitoreo de rutinas deportivas, consumo calórico y gráficos estadísticos de progreso semanal.',
    technologies: ['React', 'Chart.js', 'Tailwind CSS', 'Firebase'],
    demoLink: '#',
    githubLink: '#',
    featured: false,
  },
  {
    id: 9,
    title: 'Travel Agency Platform',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8df0?auto=format&fit=crop&w=1000&q=80',
    description: 'Portal de reserva de itinerarios de viajes con integración de mapas interactivos, catálogo de experiencias y testimonios.',
    technologies: ['Astro', 'React', 'Cloudinary', 'Tailwind'],
    demoLink: '#',
    githubLink: '#',
    featured: false,
  },
];

const categories = ['Todos', 'Full Stack', 'AI & Tools', 'Entertainment', 'PWA & Mobile', 'Design & UI'];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsRef = useRef(null);

  const projectsPerPage = 6;

  // Filter logic
  const filteredProjects = projectsList.filter((proj) => {
    const matchesCategory = activeCategory === 'Todos' || proj.category === activeCategory;
    const matchesSearch = proj.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          proj.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <section ref={projectsRef} className="min-h-screen py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-cyan-400 text-xs font-bold font-mono tracking-wider uppercase border border-blue-500/20">
            Portafolio Seleccionado
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
            Proyectos <span className="text-gradient-primary">Destacados</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
            Una vitrina de mis trabajos en desarrollo de software, desde aplicaciones de comercio electrónico hasta inteligencia artificial y PWAs.
          </p>
        </motion.div>

        {/* Filter and Search Bar */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl glass-card border border-gray-200/80 dark:border-white/10 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Buscar por nombre o tecnología..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-card text-xs sm:text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 border border-gray-200/80 dark:border-white/10"
              />
            </div>

          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          <AnimatePresence mode="popLayout">
            {currentProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group glass-card glass-card-hover rounded-3xl overflow-hidden border border-gray-200/80 dark:border-white/10 flex flex-col justify-between"
              >
                {/* Image & Overlay */}
                <div className="relative aspect-video overflow-hidden bg-gray-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  
                  {/* Category & Featured Badge */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-mono text-[10px] font-bold uppercase tracking-wider border border-white/20">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-xs">
                        <Sparkles size={10} /> Top
                      </span>
                    )}
                  </div>

                  {/* View Details Hover Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-600/30 backdrop-blur-xs cursor-pointer"
                  >
                    <span className="px-5 py-2.5 rounded-full bg-white text-gray-900 font-bold text-xs shadow-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <Eye size={16} /> Ver Detalles
                    </span>
                  </button>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 text-[11px] font-medium border border-gray-200/60 dark:border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-200/60 dark:border-white/10 text-xs font-bold">
                      {project.demoLink !== '#' ? (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-blue-600 dark:text-cyan-400 hover:underline"
                        >
                          <span>Demo En Vivo</span>
                          <ExternalLink size={14} />
                        </a>
                      ) : (
                        <span className="text-gray-400 font-normal">Demo bajo solicitud</span>
                      )}

                      {project.githubLink !== '#' && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400"
                        >
                          <Github size={14} />
                          <span>Código</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {currentProjects.length === 0 && (
          <div className="text-center py-16 glass-card rounded-3xl max-w-lg mx-auto">
            <Layers className="mx-auto text-gray-400 mb-4" size={48} />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">No se encontraron proyectos</h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
              Prueba con otro término de búsqueda o categoría.
            </p>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => {
                  setCurrentPage(i + 1);
                  projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-10 h-10 rounded-xl text-xs font-bold transition-all ${
                  currentPage === i + 1
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                    : 'glass-card text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}

        {/* PROJECT MODAL DIALOG */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white dark:bg-[#0c101c] w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 relative max-h-[90vh] flex flex-col"
              >
                {/* Modal Header Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-gray-900 shrink-0">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
                  
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors z-20 cursor-pointer"
                  >
                    <X size={20} />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6 space-y-1">
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-cyan-400 text-xs font-mono font-bold uppercase border border-cyan-500/30 inline-block mb-2">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
                  <div>
                    <h4 className="text-sm font-mono font-bold uppercase text-gray-500 dark:text-gray-400 tracking-wider mb-2">
                      Descripción del Proyecto
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-mono font-bold uppercase text-gray-500 dark:text-gray-400 tracking-wider mb-3">
                      Tecnologías Empleadas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-cyan-400 text-xs font-bold border border-blue-500/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-gray-200 dark:border-white/10 flex flex-col sm:flex-row gap-4">
                    {selectedProject.demoLink !== '#' && (
                      <a
                        href={selectedProject.demoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm text-center shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={18} />
                        Visitar Sitio Web
                      </a>
                    )}

                    {selectedProject.githubLink !== '#' && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 py-3.5 rounded-xl glass-card font-bold text-sm text-gray-800 dark:text-gray-200 text-center flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        <Github size={18} />
                        Ver en GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Projects;
