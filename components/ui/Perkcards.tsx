"use client"
import React from 'react'
import { WobbleCard } from "@/components/ui/wobble-card"
import { LayoutTextFlip } from "@/components/ui/layout-text-flip"
import { motion } from "motion/react";
import Image from "next/image";

const Perkcards = () => {
  return (
    <div className='lg:h-screen w-auto flex flex-col justify-center items-center px-2'>
      <div className='w-full flex flex-col text-white gap-y-2'>
        <motion.div className="flex items-center justify-center text-center fade-in-1">
          <LayoutTextFlip
            size='text-2xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl'
            fontfam='font-bold'
            text='Bring to life your '
            words={["imagination", "ideas", "creations", "world"]}
            duration={5000}
          />
        </motion.div>
        <p className='text-gray-400 text-base text-pretty fade-in-2 flex justify-center items-center text-center'>
          Discover unique models designed for speed, quality, and imagination
        </p>
      </div>

      <div className='p-4 w-full px-4'>
        <div className='w-auto 2xl:w-7xl h-auto mx-auto justify-center space-y-4'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-2 text-white sm:px-10'>
            <WobbleCard containerClassName='lg:col-span-2 bg-purple-700 relative'>
              <h1 className='lg:w-full w-2/3 text-left font-bold text-3xl'>Unlimited Creativity</h1>
              <p className='lg:w-full w-2/3 text-left text-base'>Access a vast library of unique 3D models for any project.</p>

              {/* Imagen optimizada */}
              <div className="fixed sm:right-0 sm:top-5 -right-10 top-20 lg:right-15 lg:top-3 w-50 h-50 -z-10">
                <div className="relative w-full h-full">
                  <Image
                    src="/character.png"
                    alt="Character preview"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </WobbleCard>

            <WobbleCard containerClassName='lg:col-span-1 bg-gray-700'>
              <h1 className='lg:w-full w-2/3 text-left font-bold text-3xl'>High-Quality Assets</h1>
              <p className='text-base'>Carefully crafted models optimized for performance.</p>
            </WobbleCard>

            <WobbleCard containerClassName='lg:col-span-3 bg-blue-700 relative'>
              <h1 className='lg:w-full w-2/3 text-left font-bold text-3xl'>Fast & Easy Access</h1>
              <p className='lg:w-full w-2/3 text-left text-base'>Download instantly and bring your ideas to life.</p>

              {/* Imagen optimizada */}
              <div className="fixed sm:-right-40 sm:top-0 md:-top-15 -right-15 -bottom-10 lg:-right-10 lg:-top-17 w-[400px] h-[300px] -z-10">
                <div className="relative w-full h-full">
                  <Image
                    src="/machine.webp"
                    alt="Machine illustration"
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 400px, 60vw"
                  />
                </div>
              </div>
            </WobbleCard>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Perkcards;
