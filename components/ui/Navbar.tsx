import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full flex flex-row justify-between'>
      <div className='z-10 top-12 left-15 fixed flex items-center gap-40 py-2 px-4 rounded-full text-white justify-center'>
        <h1 className='text-2xl font-bold'>Meshly</h1>
      </div>
      <div className='z-10 top-14 left-1/2 -translate-x-1/2 fixed flex items-center gap-40 py-2 px-4 rounded-full bg-black/60 backdrop-blur-md border text-white border-zinc-800'>
          <ol className='flex flex-row gap-x-8'>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
          </ol>
      </div>
      <div className='z-10 top-12 right-15 fixed flex items-center gap-15 py-2 px-3 rounded-full text-white justify-center'>
        <button className="p-[3px] relative cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg" />
          <div className="px-5 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Get in contact
          </div>
        </button>
        <img src="/logovctor.svg" alt="" className='size-20'/>
      </div>
    </nav>
  )
}
export default Navbar
