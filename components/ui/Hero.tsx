import {Button} from "@/components/ui/button"


export default function Hero () {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-black">
        <div className="text-center space-y-5 max-w-3xl z-10">
          <div className="space-y-3">
            <h1 className="text-7xl tracking-tight bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 text-transparent h-20 font-bold  animate-gradient">
              Unlimited 3D Models
            </h1>
            <h1 className="text-6xl tracking-tight bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-pink-500 text-transparent h-20 font-semibold animate-gradient">
              for Your Creative Projects
            </h1>
            <p className="text-gray-400 text-lg text-pretty">
              <span className="bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-pink-500 text-transparent h-20 font-semibold">Explore,</span> download, and bring your ideas to life with our vast library of <span className="bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-pink-500 text-transparent h-20 font-semibold">high-quality</span> 3D models. From characters to environments, unlock endless possibilities — all with one simple subscription. New models added regularly so your creativity never runs out.
            </p>
          </div>
          <div className="space-x-20 mt-10">
            <Button size="lg" variant="secondary" className="cursor-pointer">Get Started</Button>
            <Button size="lg" variant="secondary" className="cursor-pointer">Learn more</Button>
          </div>
        </div>
    </div>
    )
  }