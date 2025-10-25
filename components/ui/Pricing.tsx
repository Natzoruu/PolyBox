import React from 'react'
import { X , Check, SignalZero , } from 'lucide-react'
import  GlareHover  from "@/components/GlareHover"


const Pricing = () => {
    interface PlanDiff {
        available : boolean;
        desc : string;
    }
    interface PricingCards {
        title : string;
        desc : string;
        sub : number;
        greatFor : string;
        features : PlanDiff[];
    }
    
    const CardFeatures : PricingCards[] = [
        {
            title: "Free", 
            desc : "Start your 3D journey with a limited selection of free models and explore what our platform can offer before upgrading.",
            greatFor : "Beginners or hobbyists who want to experiment with 3D models before committing to a paid plan.",
            sub : 0.00,
            features : [
                { available: true, desc: "Up to 2 models per month" },
                { available: true, desc: "Textures & materials included" },
                { available: false, desc: "Access to new collections" },
                { available: false, desc: "Commercial use" },
                { available: false, desc: ".blend format availability" },
                { available: false, desc: "Community access" },
                { available: false, desc: "Priority support" },
            ]
        },{
            title: "Base Plan", 
            desc : "Access a growing library of high-quality 3D models with essential features and steady monthly updates. Perfect for creators who want flexibility without going all-in.",
            greatFor : "Independent artists, students, and designers who use 3D models occasionally and want solid quality at an affordable price.",
            sub : 9.99,
            features : [
                { available: true, desc: "Up to 5 models per month" },
                { available: true, desc: "Textures & materials included" },
                { available: true, desc: "Access to new collections" },
                { available: true, desc: "Commercial use" },
                { available: false, desc: ".blend format availability" },
                { available: false, desc: "Community access" },
                { available: false, desc: "Priority support" },
            ]
        },{
            title: "Pro", 
            desc : "Unlock unlimited downloads, full texture access, and instant updates to every new collection. Get everything you need to create professional-grade 3D projects with ease.",
            greatFor : "Professional 3D artists, studios, or developers who rely on premium assets and want early access to the latest content.",
            sub : 15.99,
            features : [
                { available: true, desc: "Unlimited models" },
                { available: true, desc: "Textures & materials included" },
                { available: true, desc: "Access to new collections" },
                { available: true, desc: "Commercial use" },
                { available: true, desc: ".blend format availability" },
                { available: true, desc: "Community access" },
                { available: true, desc: "Priority support" },
            ]
        },
    ]
  return (
    <div className='h-screen flex flex-col justify-center items-center pt-10'>
        <div className='w-full flex flex-col justify-center items-center gap-4'>
            <h1 className='text-white font-bold text-7xl'>Choose the Right Plan for Your 3D Journey</h1>
            <p className='text-pretty text-gray-400 text-lg'>Whether you’re just exploring or building professional scenes, we’ve got a plan that fits your creative workflow.</p>
        </div>
            <div className='w-7xl grid grid-cols-3 gap-4 my-4'>
                {CardFeatures.map((item, index) => (
                    <GlareHover 
                    key={index}
                    className=''
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={800}
                    playOnce={false}>
                        <div className='flex flex-col justify-between h-full items-start p-6 gap-1 text-white' >
                            <h1 className='font-bold text-xl'>{item.title}</h1>
                            <p className='text-gray-400 text-lg text-pretty'>{item.desc}</p>
                            <p className='font-bold text-xl italic'>{item.sub}$<span className='text-gray-400 text-lg text-pretty'>/month</span></p>
                            <p className='font-bold text-xl'>Great for:</p>
                            <p className='text-gray-400 text-lg text-pretty'>{item.greatFor}</p>
                            <div className='flex w-full justify-center items-center my-4'>
                                <button className="p-[3px] relative cursor-pointer">
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                                    <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                                        Lit up borders
                                    </div>
                                </button>
                            </div>
                            <h2 className='font-bold text-xl'>Features</h2>
                            {item.features.map((item, index)=>(
                                <p className='flex gap-x-4 items-start justify-start w-full' key={index}>
                                {item.available ?
                                    <Check className="self-center" color='green' size={20}/> :
                                    <X className="self-center" color='red' size={20} />
                                }
                                {item.desc}
                                </p>
                            ))}
                        </div>
                            </GlareHover>
                    ))}
                </div>
    </div>
  )
}

export default Pricing