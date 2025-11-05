import React from 'react'
import { MaskContainer } from "@/components/ui/svg-mask-effect"

const Cta = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
        <div className='flex w-full items-center justify-center overflow-hidden relative'>
            <MaskContainer
                revealSize={500}
                size={10}
                revealText = {<div className='flex flex-col'>
                    <p className='min-w-full text-center lg:text-4xl text-2xl lg:p-0 px-6 font-bold text-white'>Ready to bring your vision into the 3D world?</p>
                    <button className="p-[3px] cursor-pointer absolute left-1/2 -translate-x-1/2 bottom-1/3">
                        <a href='#Pricing'>
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                            Suscribe now
                        </div>
                        </a>
                    </button>
                    </div>}
                className='w-full'
            >
                <span className='lg:text-4xl text-2xl leading-none lg:p-0 px-2'>
                    Join today and
                    <span className="text-purple-500"> unlock</span> unlimited 3D models, carefully crafted to spark your
                    <span className="text-purple-500"> creativity</span> and inspire your imagination to new heights.
                </span>

            </MaskContainer>
        </div>
    </div>
  )
}

export default Cta
