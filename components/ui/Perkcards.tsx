"use client"
import React from 'react'
import { WobbleCard } from "@/components/ui/wobble-card"
import { LayoutTextFlip } from "@/components/ui/layout-text-flip"
import { motion } from "motion/react";

const Perkcards = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>  
        <div className='bg-black p-4 w-full flex flex-col text-white justify-center items-center'>
            <motion.div className="relative flex flex-col items-center justify-center text-center sm:mx-0 sm:mb-0 sm:flex-row fade-in-1">
                <LayoutTextFlip
                    size='text-7xl'
                    fontfam='font-bold'
                    text='Bring to life your '
                    words = {["imagination", "ideas", "creations", "world"]}
                    duration={8000}
                />
            </motion.div>
                <p className='text-gray-400 text-lg text-pretty fade-in-2'>
                    Discover unique models designed for speed, quality, and imagination
                </p>
        </div>
        <div className='bg-black p-4 w-full'>
            <div className='w-7xl mx-auto justify-center space-y-4'>
                <div className='grid grid-cols-2 gap-4 p-2 text-white'>
                    <WobbleCard containerClassName='col-span-2 bg-purple-700 relative'>
                        <h1 className='font-bold text-3xl'>Unlimited Creativity</h1>
                        <p className='text-l'>Access a vast library of unique 3D models for any project.</p>
                        <img src="/character.png" className='fixed position right-15 top-3 w-50 h-50'/>
                    </WobbleCard>
                    <WobbleCard containerClassName='col-span-1 bg-gray-700'>
                        <h1 className='font-bold text-3xl'>High-Quality Assets</h1>
                        <p className='text-l'>Carefully crafted models optimized for performance.</p>
                    </WobbleCard>
                    <WobbleCard containerClassName='col-span-3 bg-blue-700 relative'>
                        <h1 className='font-bold text-3xl'>Fast & Easy Access</h1>
                        <p className='text-l'>Download instantly and bring your ideas to life.</p>
                        <img src="/machine.webp" className='fixed position -right-10 -top-17'/>
                    </WobbleCard>
                </div>
            </div>
        </div>
    </div>
  )
}   

export default Perkcards
