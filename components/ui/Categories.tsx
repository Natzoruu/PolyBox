"use client"
import React, { useState } from 'react'
import {Card} from "@/components/ui/focus-cards"
import { number } from 'framer-motion';

const Categories = () => {
  const categories = [
    {src : "/categories/creatures.jpg", title: "Creatures", desc: "Stylized, realistic, and fantasy characters. Bring your stories to life with unique models."},
    {src : "/categories/city.jpg", title: "City", desc: "Buildings, houses, ruins, temples. Perfect for games, films, and visualization."},
    {src : "/categories/scifi.jpeg", title: "Scifi", desc: "Spaceships, robots, gadgets, environments. Explore futuristic worlds and concepts."},
    {src : "/categories/furniture.jpg", title: "Furniture", desc: "Food, furniture, electronics, decor. Add realistic details to any scene."},
    {src : "/categories/forest.jpg", title: "Nature", desc: "Forest, desert, snow, underwater, city. Create immersive natural and urban spaces."},
    {src : "/categories/cars.jpg", title: "Cars", desc: "Cars, airplanes, robots, and mechanical props. Power up your projects with motion-ready models."},
  ];
  const [hovered , setHovered] = useState <number | null>(null);
  return (
    <div className="flex my-20  lg:h-screen lg:justify-center lg:items-center min-h-screen px-4">
      <div className='flex flex-col w-full text-white px-4 gap-y-4 lg:gap-y-1'>
          <div className='flex flex-col justify-center items-center text-center lg:mt-12'>
              <h1 className='text-4xl lg:text-7xl font-bold'>Explore a World of 3D Assets</h1>
              <span className='text-gray-400 lg:text-lg text-pretty my-2 text-base'>From everyday objects to immersive environments, discover the perfect models for any project.</span>
          </div>
          <div className='w-full flex flex-col lg:justify-center lg:items-center lg:my-4'>
            <div className='w-auto lg:w-6xl grid grid-cols-1 lg:grid-cols-3 lg:gap-4 gap-y-8'>
              {categories.map((card, index) =>
                <Card 
                key={index}
                index={index}
                card={card}
                hovered={hovered}
                setHovered={setHovered}
                >
                </Card>
                )}
            </div>
          </div>
      </div>
    </div>
  )
}

export default Categories