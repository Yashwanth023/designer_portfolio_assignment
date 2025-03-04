
import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="portfolio" className="pt-36 pb-24">
      <div className="container-custom">
        <div 
          className={`flex flex-col items-center text-center max-w-4xl mx-auto transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h1 className={`text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight ${theme === 'light' ? 'text-black' : 'text-white'}`}>
            I AM A <span className="shimmer-text">UI FREELANCE DESIGNER</span> FROM<br />SAN FRANCISCO
          </h1>
          
          <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} max-w-lg mb-8`}>
            Welcome to my portfolio, where I share beautiful experiences through design. I specialize in web design, mobile app design, and front-end development, always putting your needs first.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <a 
              href="#contact" 
              className={`btn-primary ${theme === 'light' ? 'bg-black/10 text-black hover:bg-black/20' : ''}`}
            >
              LET'S TALK
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
