import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-[#0f172a] border-t border-gray-200 dark:border-gray-800 pt-12 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white mb-4 block">
              AR<span className="text-blue-500">Portfolio</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm mb-6">
              Creando experiencias digitales excepcionales con tecnologías modernas. 
              Transformando ideas en realidad a través del código y el diseño.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Sobre Mí</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Proyectos</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">Desarrollo Web</li>
              <li className="text-gray-600 dark:text-gray-400">Aplicaciones Móviles</li>
              <li className="text-gray-600 dark:text-gray-400">Diseño UI/UX</li>
              <li className="text-gray-600 dark:text-gray-400">Consultoría Técnica</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} ARPortfolio. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
            Desarrollado con React  <Heart size={16} className="text-red-500 mx-1" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
