import React from 'react'
import {Heart} from 'lucide-react'

const Footer = () => {
    const QuickNavMenu = [
        {menu : "Hero", url : "#"},
        {menu : "Perkcards", url : "#"},
        {menu : "Categories", url : "#"},
        {menu : "Showcase", url : "#"},
        {menu : "Testimonial", url : "#"},
        {menu : "Cta", url : "#"},
        {menu : "Pricing", url : "#"},
    ]
    const FollowUs = [
        {menu : "Instagram", url : "#"},
        {menu : "X (Twitter)", url : "#"},
        {menu : "YouTube", url : "#"},
        {menu : "Discord", url : "#"},
    ]
  return (
    <>
        <div className="w-full flex flex-col text-white justify-center items-center">
            <div className="grid grid-cols-3 p-4">
                <div className='flex flex-col gap-y-2 px-18 py-2 justify-start items-start'>
                    <h1 className='text-2xl font-bold'>3DVerse</h1>
                    <p className='text-pretty text-lg text-gray-400'>A universe built for creators. Discover, design, and share 3D worlds that inspire imagination and push the boundaries of creativity.</p>
                </div>
                <div className='grid grid-cols-2 gap-y-2 gap-x-8 px-18 py-2 justify-start items-start '>
                    <h1 className='text-2xl font-bold col-span-full'>Quick Navigation</h1>
                    {QuickNavMenu.map((item, index)=>(  
                        <a 
                            key={index} 
                            className='text-pretty text-lg text-gray-400' 
                            href={item.url}>{item.menu}
                        </a>
                    ))}
                </div>
                <div className='flex flex-col gap-y-2 px-18 py-2 justify-start items-start '>
                    <h1 className='text-2xl font-bold'>Follow Us</h1>
                    {FollowUs.map((item,index)=>(
                        <a key={index} href={item.url} className='text-pretty text-lg text-gray-400'>{item.menu}</a>
                    ))}
                </div>
            </div>
            <div className="flex flex-col w-3xl items-center justify-center my-6 text-center">
                    <h1 className='text-2xl font-bold'>Legal</h1>
                    <p className='text-pretty text-lg text-gray-400 flex gap-1'>Made with<Heart className='self-center fill-red-500' color='red' size={20} />by creators, for creators.</p>
            </div>
        </div>
    </>
  )
}

export default Footer