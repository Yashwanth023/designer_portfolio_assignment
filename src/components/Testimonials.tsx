
import { useRef, useEffect, useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Royal Mileo',
    avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
    quote: "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic, it helped me create a professional resume that stood out to employers.",
  },
  {
    id: 2,
    name: 'Jasmine Lee',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: "I was struggling with my job applications until I found this service. The tools are intuitive and the design options are professional yet unique.",
  },
  {
    id: 3,
    name: 'Marcus Wright',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    quote: "The attention to detail in the design templates is exceptional. I received multiple interview requests after updating my resume with this platform.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="testimonials" className="py-16">
      <div className="container-custom">
        <div
          ref={sectionRef}
          className="opacity-0 transition-opacity duration-1000"
        >
          <h2 className="section-title">What they say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-3 flex justify-center md:justify-start">
              <div className="relative w-20 h-20 rounded-full overflow-hidden">
                <img 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:col-span-9">
              <blockquote className="text-xl font-light italic mb-4">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              
              <p className="font-medium">{testimonials[activeIndex].name}</p>
              
              <div className="flex items-center mt-4 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex ? 'bg-highlight w-4' : 'bg-gray-500'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
