import {AuroraBackground} from "@/components/ui/aurora-background"
import Categories from "@/components/ui/Categories";
import Hero from "@/components/ui/Hero"
import Navbar from "@/components/ui/NavbarPage"
import Perkcards from "@/components/ui/Perkcards";
import Testimonial from "@/components/ui/Testimonial";
import Showcase from "@/components/ui/Showcase";
import Cta from "@/components/ui/Cta";
import Pricing from "@/components/ui/Pricing";
import Footer from "@/components/ui/Footer";

export default function Home() { 
  return (
    <div className="h-screen w-full lg:overflow-y-scroll lg:snap-y lg:snap-mandatory">
      <Navbar/>
      <section className="h-screen snap-start" id="Home">
        <AuroraBackground>
          <Hero/>
        </AuroraBackground>
      </section>
      <section className="min-h-screen lg:snap-start lg:scroll-container" id="Perkcards"><Perkcards/></section>
      <section className="min-h-screen lg:snap-start lg:scroll-container" id="Categories"><Categories/></section>
      <section className="min-h-screen lg:snap-start lg:scroll-container" id="Showcase"><Showcase/></section>
      <section className="min-h-screen lg:snap-start lg:scroll-container" id="Testimonial"><Testimonial/></section>
      <section className="min-h-screen lg:snap-start lg:scroll-container" id="Cta"><Cta/></section>
      <section className="min-h-screen lg:snap-start lg:scroll-container" id="Pricing"><Pricing/></section>
      <section className="lg:snap-end"><Footer/></section>
    </div>
  );
}
