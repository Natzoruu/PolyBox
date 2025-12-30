"use client"
import {Button as ButtonUI} from "@/components/ui/button"


export default function Hero () {
    return (
      <div className="min-h-screen w-full flex items-center justify-center px-4">
        <div className="text-center space-y- max-w-3xl z-10">
          <h1 className="bg-neutral-800 inline-block itens-center justify-center text-white py-2 px-4 border-transparent rounded-2xl text-sm my-4 italic text-pretty fade-in-1">Join +3000 users</h1>      
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 text-transparent h-auto font-bold  animate-gradient fade-in-2">
                Unlimited 3D Models
              </h1>
              <h1 className="text-3xl tracking-tight bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-pink-500 text-transparent h-auto font-semibold animate-gradient fade-in-3">
                for Your Creative Projects
              </h1>
              <p className="text-gray-400 text-base text-pretty fade-in-4 py-4">
                <span className="bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-pink-500 text-transparent h-20 font-semibold">Explore,</span> download, and bring your ideas to life with our vast library of <span className="bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-pink-500 text-transparent h-20 font-semibold">high-quality</span> 3D models. From characters to environments, unlock endless possibilities — all with one simple subscription. New models added regularly so your creativity never runs out.
              </p>
            </div>
            <div className="space-x-10 lg:space-x-20 mt-5 fade-in-4">
              <ButtonUI onClick={()=>{document.getElementById("Pricing")?.scrollIntoView({ behavior: "smooth" })}} size="lg" variant="secondary" className="cursor-pointer">Get Started</ButtonUI>
              <ButtonUI onClick={()=>{document.getElementById("Perkcards")?.scrollIntoView({ behavior: "smooth" })}} size="lg" variant="secondary" className="cursor-pointer">Learn more</ButtonUI>
            </div>
        </div>
    </div>
    )
  }