"use client"
import React from 'react'
import { WobbleCard } from "@/components/ui/wobble-card"
import { LayoutTextFlip } from "@/components/ui/layout-text-flip"
import { motion } from "motion/react";

const Perkcards = () => {
  return (
    <div className='lg:h-screen w-auto flex flex-col justify-center items-center px-4'>  
        <div className='p-4 w-full flex flex-col text-white gap-y-2'>
            <motion.div className="flex items-center justify-center text-center fade-in-1">
                <LayoutTextFlip
                    size='text-2xl lg:text-7xl'
                    fontfam='font-bold'
                    text='Bring to life your '
                    words = {["imagination", "ideas", "creations", "world"]}
                    duration={5000}
                />
            </motion.div>
                <p className='text-gray-400 text-lg text-pretty fade-in-2 flex justify-center items-center text-center'>
                    Discover unique models designed for speed, quality, and imagination
                </p>
        </div>
        <div className='p-4 w-full px-4'>
            <div className='w-auto h-auto lg:w-7xl mx-auto justify-center space-y-4'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-2 text-white'>
                    <WobbleCard
                    containerClassName='lg:col-span-2 bg-purple-700 relative '>
                        <h1 className='lg:w-full w-2/3 text-left font-bold text-3xl '>Unlimited Creativity</h1>
                        <p className='lg:w-full w-2/3 text-left text-base'>Access a vast library of unique 3D models for any project.</p> 
                        <img src="/character.png" className='fixed position -right-10 top-20 lg:right-15 lg:top-3 w-50 h-50 -z-10'/>
                    </WobbleCard>
                    <WobbleCard containerClassName='lg:col-span-1 bg-gray-700'>
                        <h1 className='lg:w-full w-2/3 text-left font-bold text-3xl'>High-Quality Assets</h1>
                        <p className='text-base'>Carefully crafted models optimized for performance.</p>
                    </WobbleCard>
                    <WobbleCard containerClassName='lg:col-span-3 bg-blue-700 relative'>
                        <h1 className='lg:w-full w-2/3 text-left font-bold text-3xl'>Fast & Easy Access</h1>
                        <p className='lg:w-full w-2/3 text-left text-base'>Download instantly and bring your ideas to life.</p>
                        <img src="/machine.webp" className='fixed position -z-10 -right-15 -bottom-10 lg:-right-10 lg:-top-17'/>
                    </WobbleCard>
                </div>
            </div>
        </div>
    </div>
  )
}   

export default Perkcards
