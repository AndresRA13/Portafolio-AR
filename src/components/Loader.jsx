import React from 'react';
import { motion } from 'framer-motion';
import { Code, Sparkles } from 'lucide-react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-50 dark:bg-[#090d16] text-gray-900 dark:text-white">
      <div className="relative flex items-center justify-center mb-6">
        {/* Outer Ring */}
        <motion.div
          className="absolute h-36 w-36 rounded-full border-2 border-dashed border-cyan-500/40"
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Middle Glowing Ring */}
        <motion.div
          className="absolute h-28 w-28 rounded-full border-2 border-t-blue-500 border-r-purple-500 border-b-cyan-500 border-l-transparent shadow-lg shadow-blue-500/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Core Logo */}
        <motion.div
          className="h-20 w-20 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-extrabold text-xl shadow-xl shadow-blue-500/30 z-10"
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Code size={32} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-blue-600 dark:text-cyan-400 uppercase"
      >
        <Sparkles size={14} className="animate-spin-slow" />
        <span>Cargando Experiencia...</span>
      </motion.div>
    </div>
  );
};

export default Loader;
