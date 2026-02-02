import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Compass } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 dark:bg-[#0f172a] px-4">
      <div className="text-center">
        {/* Animated Icon */}
        <motion.div
          initial={{ rotate: -10, opacity: 0 }}
          animate={{ rotate: 10, opacity: 1 }}
          transition={{
            rotate: { duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
            opacity: { duration: 0.5 }
          }}
          className="inline-block mb-8 p-6 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
        >
          <Compass size={64} strokeWidth={1.5} />
        </motion.div>

        {/* 404 Text */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-8xl md:text-9xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500"
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Página no encontrada
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            Parece que te has perdido en el ciberespacio. La página que buscas no existe o ha sido movida.
          </p>

          {/* Home Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:bg-blue-600 dark:hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group"
          >
            <Home size={20} className="group-hover:scale-110 transition-transform" />
            <span>Volver al Inicio</span>
          </Link>
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default NotFound;
