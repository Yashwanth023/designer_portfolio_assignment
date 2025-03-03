
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a href="#portfolio" className="text-xs font-mono opacity-60 hover:opacity-100 transition-opacity">
            PORTFOLIO
          </a>
          <a href="#work" className="text-xs font-mono opacity-60 hover:opacity-100 transition-opacity">
            WORK
          </a>
          <a href="#c" className="text-xs font-mono opacity-60 hover:opacity-100 transition-opacity">
            CONTACT
          </a>
        </div>
        
        <div>
          <a href="#contact" className="btn-primary">
            LET'S TALK!
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
