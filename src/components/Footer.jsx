import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp, Code, Sparkles, CheckCircle2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 pt-16 pb-8 border-t border-gray-200/80 dark:border-white/10 bg-white/40 dark:bg-[#090d16]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-200/60 dark:border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                AR
              </div>
              <span className="font-extrabold text-xl tracking-tight text-gray-900 dark:text-white">
                Andrés<span className="text-gradient-primary">Rojas</span>
              </span>
            </Link>

            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm max-w-md leading-relaxed">
              Desarrollador Full Stack apasionado por construir experiencias digitales de alto rendimiento, código limpio y diseños excepcionales.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://github.com/AndresRA13" 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 rounded-xl glass-card text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-cyan-400 hover:scale-110 transition-all"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 rounded-xl glass-card text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-cyan-400 hover:scale-110 transition-all"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:rojasaguileraandres13@gmail.com"
                className="p-2.5 rounded-xl glass-card text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-cyan-400 hover:scale-110 transition-all"
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Sobre Mí</Link>
              </li>
              <li>
                <Link to="/skills" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Habilidades</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Proyectos</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Status & Availability */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              Estado
            </h4>
            <div className="p-4 rounded-2xl glass-card border border-gray-200/80 dark:border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-emerald-500 font-bold text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>En línea & Activo</span>
              </div>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-snug">
                Abierto a propuestas de desarrollo freelance y posiciones a tiempo completo.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>
            &copy; {currentYear} Andrés Rojas. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 font-medium">
              Hecho con <Heart size={14} className="text-red-500 fill-red-500" /> en React & Tailwind
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl glass-card hover:bg-gray-200/80 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 transition-all cursor-pointer"
              title="Volver arriba"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
