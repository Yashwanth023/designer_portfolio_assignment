
import { useRef, useEffect } from 'react';

interface Job {
  id: number;
  role: string;
  company: string;
  timeframe: string;
}

const jobs: Job[] = [
  {
    id: 1,
    role: 'Lead Product Designer',
    company: 'Fortknox',
    timeframe: 'MAY 2019 — JUL 2023',
  },
  {
    id: 2,
    role: 'Senior Designer',
    company: 'Omnicube',
    timeframe: 'JAN 2017 — APR 2019',
  },
  {
    id: 3,
    role: 'UI Designer',
    company: 'Dominolab',
    timeframe: 'AUG 2015 — DEC 2016',
  },
  {
    id: 4,
    role: 'Frontend Developer',
    company: 'Openai HotShot',
    timeframe: 'SEP 2013 — JUL 2015',
  },
];

const Experience = () => {
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
    <section id="experience" className="py-16">
      <div className="container-custom">
        <div
          ref={sectionRef}
          className="opacity-0 transition-opacity duration-1000"
        >
          <h2 className="section-title">Experience</h2>
          
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div 
                key={job.id} 
                className="border-b border-white/10 pb-6 flex flex-col md:flex-row justify-between"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-2 md:mb-0">
                  <h3 className="text-lg font-medium">{job.role}</h3>
                </div>
                <div className="text-right">
                  <p className="text-lg text-gray-300">{job.company}</p>
                  <p className="text-xs text-gray-500">{job.timeframe}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
