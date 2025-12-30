"use client"
import React, { useState } from 'react'
import {Card} from "@/components/ui/focus-cards"

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
    <div className="relative h-auto min-h-screen 2xl:h-screen overflow-hidden">
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 text-white text-center my-10">
        <div className="max-w-6xl flex flex-col gap-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold">
            Explore a World of 3D Assets
          </h1>

          <span className="text-gray-400 text-base">
            From everyday objects to immersive environments, discover the perfect models for any project.
          </span>

          <div className="w-full sm:w-[70%] sm:mx-auto md:w-[80%] md:mx-auto xl:w-5xl 2xl:w-[99%] grid grid-cols-1 lg:grid-cols-3 gap-6 mt-2 text-left">
            {categories.map((card, index) => (
              <Card
                key={index}
                index={index}
                card={card}
                hovered={hovered}
                setHovered={setHovered}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories