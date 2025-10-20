import {AuroraBackground} from "@/components/ui/aurora-background"
import Categories from "@/components/ui/Categories";
import Hero from "@/components/ui/Hero"
import Navbar from "@/components/ui/Navbar"
import Perkcards from "@/components/ui/Perkcards";
import Testimonial from "@/components/ui/Testimonial";
import Showcase from "@/components/ui/Showcase";
import Cta from "@/components/ui/Cta";

export default function Home() { 
  return (
    <>
      <AuroraBackground>
        <Navbar/>    
        <Hero/>
      </AuroraBackground>
      <Perkcards/>
      <Categories/>
      <Showcase/>
      <Testimonial/>
      <Cta/>
    </>
  );
}
