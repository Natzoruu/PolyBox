"use client"
import React, { useEffect, useState } from 'react'
import { Home } from 'lucide-react'
import { FloatingNav } from '@/components/ui/floating-navbar'
import { threshold } from 'three/src/nodes/TSL.js';


const NavbarPage = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const navItems = [
    {name : "Home", icon : <Home/> , link : "#Home"},
    {name : "Perks", icon : <Home/> , link : "#Perkcards"},
    {name : "Categories", icon : <Home/> , link : "#Categories"},
    {name : "Showcase", icon : <Home/> , link : "#Showcase"},
    {name : "Testimonials", icon : <Home/> , link : "#Testimonial"},
    {name : "Cta", icon : <Home/> , link : "#Cta"},
    {name : "Pricing", icon : <Home/> , link : "#Pricing"},
  ]
  useEffect (()=> {
    const section = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) =>{
        entries.forEach((entry)=> {
        if (entry.isIntersecting){
          setActiveSection(entry.target.id)
          }
        }
        )
      },
      {threshold:0.5}
    );
    section.forEach((section) => observer.observe(section))
  })

  return (
    <>
      <div className="relative  w-full">
        <FloatingNav navItems={navItems} activeSection={activeSection} />
      </div>
    </>
  )

}
export default NavbarPage
