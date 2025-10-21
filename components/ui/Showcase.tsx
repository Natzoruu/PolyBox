"use client"
import React, { useRef } from 'react'
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei";
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
    <div className='w-full flex justify-center items-center my-8'>
      <div className='grid grid-cols-2 w-7xl gap-4 border border-black rounded-4xl shadow-[0_0px_10px_rgba(255,255,255,0.5)]'>
        <div className='text-white flex flex-col p-8 justify-center gap-4'>
          <h1 className='font-bold text-3xl'>Turn Spaces into Experiences</h1>
          <span className='text-gray-400 text-pretty'>
            Imagine bringing your ideas to life with models like this one. From realistic interiors to immersive VR and AR environments, every detail is crafted to spark your creativity and make your projects truly unforgettable.
          </span>
        </div>
        <div className='h-[600px]' id='canvas-container'>
          <Canvas 
            camera={{ position: [16.48, 14.87, -21.69], fov: 50 }} 
            className='bg-gradient-to-r from-blue-400/80 to-purple-400/80 border-0 rounded-4xl'
          >
            <ambientLight intensity={1}/>
            <directionalLight position={[8, 8, 8]} intensity={1}/>
            <Suspense fallback={ null }>
              <Island/>
            </Suspense>
            <OrbitControls
              enableZoom={true}
              enablePan={true}
              enableRotate={true}
              target={[-4.6, 4.37, -1.14]}  
            />
          </Canvas>
        </div>
      </div>
    </div>
  )
}

export default Showcase
