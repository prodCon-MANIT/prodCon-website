import React from 'react';
import { motion } from 'framer-motion';

export const LoaderTwo = () => {
  const dotTransition = (i) => ({
    y: [0, -10, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      delay: i * 0.1,
      ease: "easeInOut"
    }
  });

  return (
    <div className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[#090613]">
      <div className="absolute inset-0 bg-purple-600/5 blur-[150px] animate-pulse" />
      
      <div className="relative z-10 space-y-8 flex flex-col items-center">
        <div className="flex gap-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={dotTransition(i)}
              className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]"
            />
          ))}
        </div>
        <p className="text-xs font-black uppercase tracking-[0.4em] text-gray-500 animate-pulse">
          Initializing ProdCon
        </p>
      </div>
    </div>
  );
};