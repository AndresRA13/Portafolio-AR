import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Layout, Smartphone, Database, Globe, Shield, 
  CheckCircle2, ArrowRight, Sparkles, Cpu, Zap 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Layout size={28} />,
      gradient: "from-blue-500 to-cyan-500",
      title: 'Desarrollo Frontend Moderno',
      description: 'Creación de interfaces responsivas, dinámicas y ultra rápidas utilizando React, Tailwind CSS y Framer Motion.',
      features: ['SPA & SSR con Next.js/React', 'Diseño Responsive Mobile-First', 'Animaciones & Micro-interacciones', 'Accesibilidad Web (a11y)'],
    },
    {
      icon: <Database size={28} />,
      gradient: "from-emerald-500 to-teal-600",
      title: 'Desarrollo Backend & APIs',
      description: 'Construcción de APIs RESTful robustas, lógica de negocio segura y gestión eficiente de bases de datos.',
      features: ['APIs RESTful con Node.js & Express', 'Bases de datos MongoDB / MySQL', 'Autenticación JWT & Firebase Auth', 'Integración de Pasarelas de Pago'],
    },
    {
      icon: <Smartphone size={28} />,
      gradient: "from-purple-500 to-pink-500",
      title: 'Aplicaciones Web Progresivas (PWA)',
      description: 'Transformación de aplicaciones web en experiencias instalables en iOS y Android con capacidad offline.',
      features: ['Soporte Offline & Service Workers', 'Instalación nativa en dispositivos', 'Sincronización en segundo plano', 'Notificaciones Push'],
    },
    {
      icon: <Globe size={28} />,
      gradient: "from-amber-500 to-orange-500",
      title: 'Optimización SEO & Rendimiento',
      description: 'Mejora integral de velocidad de carga, puntuación Lighthouse y visibilidad orgánica en motores de búsqueda.',
      features: ['Puntuación 95+ en Google Lighthouse', 'Optimización de assets e imágenes', 'Estructura SEO Meta & OpenGraph', 'Menor tiempo de carga (TTFB)'],
    },
    {
      icon: <Code size={28} />,
      gradient: "from-indigo-500 to-purple-600",
      title: 'Mantenimiento & Refactorización',
      description: 'Modernización de código heredado, corrección de errores, actualizaciones de seguridad y evolución de funciones.',
      features: ['Migración a tecnologías modernas', 'Auditoría de código y refactor', 'Soporte técnico continuo', 'Monitoreo de estabilidad'],
    },
    {
      icon: <Shield size={28} />,
      gradient: "from-rose-500 to-red-600",
      title: 'Consultoría & Auditoría Web',
      description: 'Análisis exhaustivo de seguridad, arquitectura de software y mejores prácticas de experiencia de usuario.',
      features: ['Revisiones de seguridad', 'Recomendaciones UI/UX', 'Estrategia de arquitectura cloud', 'Documentación técnica completa'],
    },
  ];

  return (
    <section className="min-h-screen py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
        >
          <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold font-mono tracking-wider uppercase border border-emerald-500/20">
            Soluciones Digitales
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
            Servicios <span className="text-gradient-cyan">Especializados</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
            Soluciones de ingeniería de software a la medida, adaptadas a los objetivos de tu negocio o producto digital.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group glass-card glass-card-hover rounded-3xl p-8 border border-gray-200/80 dark:border-white/10 flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${service.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="pt-3 space-y-2 border-t border-gray-200/60 dark:border-white/5">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 font-medium">
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-200/60 dark:border-white/10">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-cyan-400 group-hover:translate-x-1 transition-transform"
                >
                  <span>Solicitar este servicio</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl glass-card border border-white/20 dark:border-white/10 p-8 sm:p-12 overflow-hidden shadow-2xl text-center max-w-4xl mx-auto space-y-6"
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>

          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-cyan-400 text-xs font-bold font-mono tracking-wider uppercase border border-blue-500/20">
            <Sparkles size={14} /> ¿Tienes una idea en mente?
          </span>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Hagamos realidad tu próximo proyecto web
          </h3>

          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Hablemos sobre tus requerimientos y diseñemos una solución personalizada que supere tus expectativas.
          </p>

          <div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-95 transition-all gap-2"
            >
              <span>Solicitar Cotización</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
