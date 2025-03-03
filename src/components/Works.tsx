
import { useState, useRef, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Analysis Application',
    subtitle: 'Web app | Statistics | Analytics',
    description: 'Data metrics application. The ground-breaking resume builder for job seekers. Helps track applications and manage your search.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop',
    tags: ['UX', 'UI'],
  },
  {
    id: 2,
    title: 'Fortknox Application',
    subtitle: 'Web app | Statistics | Analytics',
    description: 'Data metrics application. The ground-breaking resume builder for job seekers. Helps track applications and manage your search.',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop',
    tags: ['Interface', 'Web'],
  },
  {
    id: 3,
    title: 'Zenocide Application',
    subtitle: 'Web app | Statistics | Analytics',
    description: 'Data metrics application. The ground-breaking resume builder for job seekers. Helps track applications and manage your search.',
    image: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?q=80&w=2070&auto=format&fit=crop',
    tags: ['UX', 'UI'],
  },
];

const WorkCard = ({ project }: { project: Project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className="work-card opacity-0 translate-y-10 transition-all duration-700 ease-out"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-60 md:h-auto overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-medium mb-2">{project.title}</h3>
            <p className="text-xs text-gray-400 mb-4">{project.subtitle}</p>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>
            <div className="mb-4">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
          <div>
            <a href="#" className="inline-flex items-center text-sm font-medium text-white hover:text-highlight transition-colors">
              View Case Study
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  const [viewAll, setViewAll] = useState(false);
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
    <section id="works" className="py-16">
      <div className="container-custom">
        <div
          ref={sectionRef}
          className="opacity-0 transition-opacity duration-1000"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="section-title mb-0">Works</h2>
            <button 
              onClick={() => setViewAll(!viewAll)}
              className="text-xs text-gray-400 hover:text-white transition-colors"
            >
              {viewAll ? 'VIEW LESS' : 'VIEW ALL'}
            </button>
          </div>
          
          <div className="space-y-8">
            {projects.slice(0, viewAll ? projects.length : 3).map((project) => (
              <WorkCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
