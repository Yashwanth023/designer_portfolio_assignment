
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Works from "@/components/Works";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.body.classList.add('bg-black');
    
    return () => {
      document.body.classList.remove('bg-black');
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Expertise />
      <Works />
      <Experience />
      <Blog />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
