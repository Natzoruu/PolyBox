"use client";
import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";


export const FloatingNav = ({
  navItems,
  activeSection,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
  activeSection: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(true);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div

        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-white/20 rounded-full bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-100 px-2 py-2 items-center justify-center space-x-4 ", 
          
          className
        )}
      >
        <div className="relative flex items-center space-x-1">
          {navItems.map((navItem: any, idx: number) => {
            const isActive = navItem.link.substring(1) === activeSection;
            return(
            <a
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative z-10 px-4 py-2 rounded-2xl transition-colors duration-300 hover:bg-gray-600 ",
                isActive
                  ? "text-black"
                  : "text-white"
      )}
            >{isActive && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 rounded-2xl bg-gray-300 pointer-events-none shadow-[0_0_10px_rgba(255,255,255,0.4)]"
                style={{ zIndex: -1 }}
                transition={{ 
                  layout : {type: "spring", stiffness: 400, damping: 30 }
                }}
                aria-hidden
              />
            )}
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </a>
            )
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
