"use client"
import React from 'react'
import {Heart} from 'lucide-react'

const Footer = () => {
    const QuickNavMenu = [
        {menu : "Home", url : "Home"},
        {menu : "Perks", url : "Perkcards"},
        {menu : "Categories", url : "Categories"},
        {menu : "Showcase", url : "Showcase"},
        {menu : "Testimonial", url : "Testimonial"},
        {menu : "Cta", url : "Cta"},
        {menu : "Pricing", url : "Pricing"},
    ]
    const FollowUs = [
        {menu : "Instagram", url : "https://www.instagram.com"},
        {menu : "X (Twitter)", url : "https://x.com"},
        {menu : "YouTube", url : "https://youtube.com"},
        {menu : "Discord", url : "https://discord.com"},
    ]
  return (
    <>
        <div className="w-full flex flex-col text-white justify-center items-center">
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:p-4 p-0">
                <div className='flex flex-col gap-y-2 px-18 py-2 justify-start items-start'>
                    <h1 className='lg:text-3xl text-2xl font-bold'>3DVerse</h1>
                    <p className='text-pretty lg:text-lg text-gray-400 text-base'>A universe built for creators. Discover, design, and share 3D worlds that inspire imagination and push the boundaries of creativity.</p>
                </div>
                <div className='grid grid-cols-2 gap-y-2 gap-x-8 px-18 py-2 justify-start items-start '>
                    <h1 className='lg:text-3xl text-2xl font-bold col-span-full'>Quick Navigation</h1>
                    {QuickNavMenu.map((item, index)=>(  
                        <button 
                            key={index} 
                            className='text-pretty lg:text-lg text-base text-left cursor-pointer text-gray-400 hover:text-white transition-all duration-300 ease-in-out' 
                            onClick={()=>{document.getElementById(item.url)?.scrollIntoView({ behavior: "smooth" })}}>{item.menu}
                        </button>
                    ))}
                </div>
                <div className='flex flex-col gap-y-2 px-18 py-2 justify-start items-start '>
                    <h1 className='lg:text-3xl text-2xl font-bold'>Follow Us</h1>
                    {FollowUs.map((item,index)=>(
                        <a key={index} href={item.url} target="_blank" className='text-pretty lg:text-lg text-gray-400 text-base'>{item.menu}</a>
                    ))}
                </div>
            </div>
            <div className="flex flex-col w-3xl items-center justify-center my-6 text-center">
                    <h1 className='lg:text-3xl text-2xl font-bold'>Legal</h1>
                    <p className='text-pretty lg:text-lg text-gray-400 flex gap-1 text-base'>Made with<Heart className='self-center fill-red-500' color='red' size={20} />by creators, for creators.</p>
            </div>
        </div>
    </>
  )
}

export default Footer