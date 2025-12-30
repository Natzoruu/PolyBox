"use client"
import React, { useEffect, useState } from 'react'
import { Home , Gift , Folder , Image as ImageIcon , User , Bell , CreditCard } from 'lucide-react'
import { FloatingNav } from '@/components/ui/floating-navbar'


const NavbarPage = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const navItems = [
    {name : "Home", icon : <Home/> , link : "#Home"},
    {name : "Perks", icon : <Gift/> , link : "#Perkcards"},
    {name : "Categories", icon : <Folder/> , link : "#Categories"},
    {name : "Showcase", icon : <ImageIcon/> , link : "#Showcase"},
    {name : "Testimonials", icon : <User/> , link : "#Testimonial"},
    {name : "Cta", icon : <Bell/> , link : "#Cta"},
    {name : "Pricing", icon : <CreditCard/> , link : "#Pricing"},
  ]
  useEffect(() => {
  const sections = Array.from(document.querySelectorAll("section[id]"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "-30% 0px -60% 0px",
    }
  );

  sections.forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}, []);


  return (
    <>
      <div className="relative  w-full">
        <FloatingNav navItems={navItems} activeSection={activeSection} />
      </div>
    </>
  )

}
export default NavbarPage
