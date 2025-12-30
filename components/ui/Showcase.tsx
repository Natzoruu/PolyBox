"use client"
import React from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei";
import DarkVeil  from "@/components/DarkVeil";
import { Suspense } from "react";

function Island(){
  const island = useGLTF("/kitchen.glb");
  return(
    <primitive 
      object={island.scene} 
      scale={1} 
      position={[0, 0, 0]} 
      rotation={[0, 0, 0]} 
    />
  )
}

const Showcase = () => {

  return (
  <div className="relative isolate min-h-svh sm:min-h-dvh 2xl:min-h-screen sm:py-4">
  <div className="relative z-10 2xl:w-full 2xl:h-screen flex flex-col justify-center items-center sm:px-8 sm:gap-y-5 2xl:gap-y-8 px-4 2xl:absolute 2xl:left-1/2 2xl:top-1/2 2xl:-translate-x-1/2 2xl:-translate-y-1/2">
    <div className="flex flex-col text-center gap-y-3 my-4">
      {/* Tipografía fluida con clamp para desktop */}
      <h1 className="font-bold text-white text-[clamp(1.75rem,6vw,3.5rem)] sm:text-[clamp(2rem,5vw,4rem)] lg:text-[clamp(2.5rem,4vw,4.5rem)]">
        Create. Render. Inspire.
      </h1>
      <p className="text-pretty text-gray-400 text-[clamp(1rem,2.2vw,1.25rem)]">
        From concept to creation, every model is a bridge between imagination and experience.<br/>
        Build, render, and inspire the world around you.
      </p>
    </div>

    <div className="grid 2xl:grid-cols-2 lg:grid-cols-3 grid-cols-1 sm:grid-cols-1 w-full max-w-7xl sm:px-4 md:w-[80%] gap-4 border border-black rounded-4xl shadow-[0_0px_10px_rgba(255,255,255,0.5)] backdrop-blur-2xl lg:px-0">
      <div className="text-white flex flex-col p-8 justify-center gap-4 lg:col-span-1">
        <h2 className="font-bold text-2xl lg:text-3xl">
          Turn Spaces into Experiences
        </h2>
        <span className="text-gray-400 text-pretty text-base lg:text-lg">
          Imagine bringing your ideas to life with models like this one. From realistic interiors to immersive VR and AR environments, every detail is crafted to spark your creativity and make your projects truly unforgettable.
        </span>
      </div>

      <div className="h-[360px] sm:h-[420px] lg:h-[560px] 2xl:h-[600px] lg:col-span-2 2xl:col-span-1" id="canvas-container">
        <Canvas
          camera={{ position: [16.48, 14.87, -21.69], fov: 50 }}
          className="bg-gradient-to-r from-blue-400/80 to-purple-400/80 rounded-4xl"
        >
          <ambientLight intensity={1}/>
          <directionalLight position={[8, 8, 8]} intensity={1}/>
          <Suspense fallback={null}>
            <Island/>
          </Suspense>
          <OrbitControls
            enableZoom
            enablePan
            enableRotate
            target={[-4.6, 4.37, -1.14]}
          />
        </Canvas>
      </div>
    </div>
  </div>
</div>

  )
}

export default Showcase
