
import { useEffect, useRef } from 'react';

const ExpertiseItem = ({ title, description }: { title: string; description: string }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);
  
  return (
    <div
      ref={itemRef}
      className="mb-10 opacity-0 translate-y-4 transition-all duration-700"
    >
      <h3 className="text-lg font-medium mb-2">• {title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
};

const Expertise = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="expertise" className="py-16">
      <div className="container-custom">
        <div
          ref={sectionRef}
          className="opacity-0 transition-opacity duration-1000"
        >
          <h2 className="section-title">Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
            <ExpertiseItem
              title="Branding"
              description="I create fully custom digital brand identities for companies and individuals. I understand business objectives + working for brands who turn visual strategy into a long-term asset."
            />
            
            <ExpertiseItem
              title="UI Design"
              description="Creating highly responsive web and mobile interfaces, my expertise lies in producing clean, minimalist designs that prioritize user experience through a strategic + thoughtful planning."
            />
            
            <ExpertiseItem
              title="UX Design"
              description="I create designs that blend aesthetic beauty with optimal functionality. My structured, user-focused design process emphasizes research, testing, and thoughtful implementation for truly compelling interfaces."
            />
            
            <ExpertiseItem
              title="Development"
              description="Proficient in HTML, CSS, JavaScript, ReactJS, and other web development technologies. My expertise lies in transforming designs into fully functional websites and applications with attention to detail."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
