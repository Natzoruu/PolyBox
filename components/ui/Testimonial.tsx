import React from 'react'
import { InfiniteMovingCards } from './infinite-moving-cards'
import { BackgroundRippleEffect } from './background-ripple-effect';


const Testimonial = () => {
    const itemTestimonial = [
  {
    quote: "The quality of the models really surprised me, they look amazing in my renders.",
    name: "Carlos Perez",
    title: "3D Architect",
  },
  {
    quote: "I was able to integrate the models easily into Unity, saving me a lot of time.",
    name: "Laura Gomez",
    title: "Game Developer",
  },
  {
    quote: "I found exactly what I needed for my 3D printing project.",
    name: "Andres Ramirez",
    title: "Maker & Designer",
  },
  {
    quote: "The subscription is totally worth it, there are always new and optimized models.",
    name: "Mariana Lopez",
    title: "Animation Student",
  },
  {
    quote: "I love the variety, from simple objects to complete scenes.",
    name: "Julian Torres",
    title: "Digital Artist",
  },
];
    return (
    <>
        <div className='relative flex w-full h-125 flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-black/80 via-black/20 to-transparent'>
            <BackgroundRippleEffect rows={9}/>
            <div className='w-full flex flex-col justify-center items-center my-4 gap-4 z-10'>
                <h1 className='text-white text-7xl font-bold text-center'>Voices from the Creative World</h1>
                <span className='text-gray-400 text-lg text-pretty my-2 text-center'>From architects to game developers, our community shares how these 3D models helped them unlock new possibilities and bring projects to life.</span>
                <div className='w-7xl overflow-hidden'>
                    <InfiniteMovingCards
                    direction="right"
                    speed="normal"
                    items={itemTestimonial}
                    ></InfiniteMovingCards>
                </div>
            </div>
        </div>
    </>
  )
}

export default Testimonial