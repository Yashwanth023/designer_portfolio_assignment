
import { useRef, useEffect } from 'react';

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }
    
    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);
  
  return (
    <footer id="contact" className="py-16 border-t border-white/10 bg-black">
      <div className="container-custom">
        <div
          ref={footerRef}
          className="opacity-0 transition-opacity duration-1000"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-4 text-xs tracking-widest mb-6">
              <span>FLOW</span>
              <span className="w-1 h-1 rounded-full bg-white/60"></span>
              <span>FIGMA</span>
              <span className="w-1 h-1 rounded-full bg-white/60"></span>
              <span>DESIGNER</span>
              <span className="w-1 h-1 rounded-full bg-white/60"></span>
              <span>DEVELOPER</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">LET'S TALK!</h2>
            
            <a
              href="mailto:contact@example.com"
              className="text-xl text-highlight hover:opacity-80 transition-opacity"
            >
              contact@example.com
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <div>© 2023 Portfolio • All Rights Reserved</div>
            
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Legal</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
