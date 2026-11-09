"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { personalData } from "@/data/personal";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[200] bg-[#050609] flex flex-col items-center justify-center"
        >
          <div className="relative flex items-center justify-center">
            {/* Spinning glowing ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 rounded-full border-2 border-transparent border-t-blue-500 border-r-purple-500 border-b-pink-500"
            />
            {/* Initials text */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="absolute font-heading text-2xl font-bold text-gradient tracking-widest"
            >
              {personalData.initials}
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xs tracking-widest text-slate-400 uppercase font-mono"
          >
            Initializing Experience...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
