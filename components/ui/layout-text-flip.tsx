"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const LayoutTextFlip = ({
  text = "Build Amazing",
  words = ["Landing Pages", "Component Blocks", "Page Sections", "3D Shaders"],
  duration = 3000,
  size = "text-2xl",
  fontfam = "font-bold",
}: {
  text: string;
  words: string[];
  duration?: number;
  size: string;
  fontfam: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // ✅ Incluimos `duration` y `words.length` como dependencias,
    // para eliminar el warning de dependencias faltantes.
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [duration, words.length]); // <-- cambios aquí

  return (
    <>
      <motion.span
        layoutId="subtext"
        className={`${size} ${fontfam} drop-shadow-lg tracking-tight flex px-2`}
      >
        {text}
      </motion.span>

      <motion.span
        layout
        className={`relative w-fit overflow-hidden rounded-md border border-transparent bg-white p-1 sm:p-2 lg:p-4 font-sans ${size} ${fontfam} tracking-tight text-black shadow-sm ring shadow-black/10 ring-black/10 drop-shadow-lg dark:shadow-sm dark:ring-1 dark:shadow-white/10 dark:ring-white/10`}
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -40, filter: "blur(10px)" }}
            animate={{ y: 0, filter: "blur(0px)" }}
            exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={cn("inline-block whitespace-nowrap")}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  );
};
