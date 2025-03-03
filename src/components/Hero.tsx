
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="pt-36 pb-24">
      <div className="container-custom">
        <div 
          className={`flex flex-col items-center text-center max-w-4xl mx-auto transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            I AM A <span className="shimmer-text">UI FREELANCE DESIGNER</span> FROM<br />SAN FRANCISCO
          </h1>
          
          <p className="text-sm text-gray-400 max-w-lg mb-8">
            Welcome to my portfolio, where I share beautiful experiences through design. I specialize in web design, mobile app design, and front-end development, always putting your needs first.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <a 
              href="#contact" 
              className="btn-primary"
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
