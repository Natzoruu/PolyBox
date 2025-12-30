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
    <div className="h-screen w-full">
      <Navbar/>
      <section className="min-h-screen" id="Home"><Hero/></section>
      <section className="min-h-screen" id="Perkcards"><Perkcards/></section>
      <section className="min-h-screen" id="Categories"><Categories/></section>
      <section className="min-h-screen" id="Showcase"><Showcase/></section>
      <section className="min-h-screen" id="Testimonial"><Testimonial/></section>
      <section className="min-h-screen" id="Cta"><Cta/></section>
      <section className="min-h-screen" id="Pricing"><Pricing/></section>
      <section className="lg:snap-end"><Footer/></section>
    </div>
  );
}
