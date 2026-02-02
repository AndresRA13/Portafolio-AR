import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50 dark:bg-[#0f172a]">
      <div className="relative flex items-center justify-center">
        {/* Outer Ring */}
        <motion.div
          className="absolute h-32 w-32 rounded-full border-4 border-t-blue-500 border-r-transparent border-b-purple-500 border-l-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner Ring */}
        <motion.div
          className="absolute h-24 w-24 rounded-full border-4 border-t-purple-500 border-r-transparent border-b-blue-500 border-l-transparent"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Core */}
        <motion.div
          className="h-16 w-16 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 opacity-80 blur-sm"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        
        <div className="absolute text-xl font-bold tracking-widest text-white z-10">
          AR
        </div>
      </div>
    </div>
  );
};

export default Loader;
