import React, { useEffect, useState } from 'react';

const BackgroundEffects = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Interactive Cursor Glow */}
      <div
        className="hidden md:block absolute w-[500px] h-[500px] rounded-full opacity-30 dark:opacity-20 transition-transform duration-75 ease-out blur-[120px] bg-radial from-blue-500 via-purple-500 to-transparent"
        style={{
          transform: `translate(${mousePos.x - 250}px, ${mousePos.y - 250}px)`,
        }}
      />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-25" />

      {/* Animated Color Orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/20 dark:bg-blue-600/15 rounded-full blur-[120px] animate-blob" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-500/20 dark:bg-purple-600/15 rounded-full blur-[120px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-cyan-500/15 dark:bg-cyan-600/10 rounded-full blur-[120px] animate-blob animation-delay-4000" />
    </div>
  );
};

export default BackgroundEffects;
