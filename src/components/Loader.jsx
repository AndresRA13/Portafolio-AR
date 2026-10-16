import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Partículas de código flotantes ───────────────────────────── */
const CODE_SNIPPETS = [
  'const dev = true;', '<App />', 'npm run dev',
  'React.useState()', 'async/await', '{ ...props }',
  'git commit', 'border-radius:', 'flex items-center',
  '=> {}', 'import React', 'z-index: 999',
];

const Particle = ({ text, delay, x, y }) => (
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: [0, 0.35, 0] }}
    transition={{ duration: 3.5, delay, repeat: Infinity, ease: 'easeInOut' }}
    className="absolute font-mono text-[10px] text-cyan-500/70 dark:text-cyan-400/50 select-none pointer-events-none whitespace-nowrap"
    style={{ left: `${x}%`, top: `${y}%` }}
  >
    {text}
  </motion.span>
);

/* ── Loader principal ─────────────────────────────────────────── */
const Loader = () => {

  /* Partículas aleatorias */
  const particles = CODE_SNIPPETS.map((text, i) => ({
    text,
    delay: i * 0.4,
    x: 5 + (i * 17) % 88,
    y: 8 + (i * 23) % 80,
  }));

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.04 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center
                   bg-gray-50 dark:bg-[#090d16] overflow-hidden"
      >
        {/* ── Fondo radial glow ── */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                          w-[500px] h-[500px] rounded-full
                          bg-gradient-radial from-blue-600/10 via-purple-600/5 to-transparent
                          blur-3xl" />
        </div>

        {/* ── Partículas de código ── */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((p, i) => <Particle key={i} {...p} />)}
        </div>

        {/* ── Logo animado ── */}
        <div className="relative flex items-center justify-center mb-10">

          {/* Anillo exterior punteado */}
          <motion.div
            className="absolute w-40 h-40 rounded-full border border-dashed border-cyan-500/25"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          />

          {/* Anillo medio arco */}
          <motion.svg
            className="absolute w-32 h-32"
            viewBox="0 0 100 100"
            fill="none"
          >
            <motion.circle
              cx="50" cy="50" r="44"
              stroke="url(#arcGrad)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="276"
              animate={{ strokeDashoffset: [276, 0, 276] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <defs>
              <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </motion.svg>

          {/* Centro: iniciales */}
          <motion.div
            className="relative z-10 w-20 h-20 rounded-2xl
                       bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600
                       flex items-center justify-center
                       shadow-2xl shadow-blue-600/40"
            animate={{ scale: [1, 1.06, 1], boxShadow: ['0 0 30px rgba(59,130,246,0.35)', '0 0 50px rgba(139,92,246,0.5)', '0 0 30px rgba(59,130,246,0.35)'] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-white font-extrabold text-2xl tracking-tight select-none">
              AR
            </span>
          </motion.div>

          {/* Orbit dot */}
          <motion.div
            className="absolute w-3 h-3 rounded-full bg-cyan-400 shadow-md shadow-cyan-400/60"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '0 0', x: 60, y: 0 }}
          />
        </div>

        {/* ── Nombre / Marca ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Andrés<span className="text-gradient-primary"> Rojas</span>
          </h1>
          <p className="text-[11px] font-mono text-gray-500 dark:text-gray-400 tracking-widest uppercase mt-1">
            Full Stack Developer
          </p>
        </motion.div>

        {/* ── Zigzag loader ── */}
        <div className="ar-loader" />

        {/* ── Puntos pulsantes ── */}
        <div className="flex items-center gap-1.5 mt-8">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-cyan-500"
              animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
            />
          ))}
        </div>

      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
