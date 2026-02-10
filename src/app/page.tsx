import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <TechStack />
      <Services />
      <Projects />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
