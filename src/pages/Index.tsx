
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Works from "@/components/Works";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { useTheme } from "@/context/ThemeContext";

const Index = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
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
