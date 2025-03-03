
import { useState, useRef, useEffect } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "What is your design process?",
    answer: "My design process starts with research and discovery, followed by conceptualization, wireframing, high-fidelity designs, and interactive prototypes. I gather feedback at various stages to ensure the final product meets your goals and users' needs."
  },
  {
    id: 2,
    question: "What tools and software do you use for UX design?",
    answer: "I primarily use Figma for UI/UX design, Adobe Creative Suite for graphics, Sketch for some specific projects, and prototyping tools like Principle and ProtoPie. For development, I work with HTML, CSS, JavaScript, and React."
  },
  {
    id: 3,
    question: "How do you measure the success of your UX designs?",
    answer: "I measure success through a combination of quantitative metrics (conversion rates, engagement statistics, task completion rates) and qualitative feedback (user testing sessions, client feedback, heuristic evaluations)."
  }
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };
  
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
    <section id="faq" className="py-16">
      <div className="container-custom">
        <div
          ref={sectionRef}
          className="opacity-0 transition-opacity duration-1000"
        >
          <h2 className="section-title">Frequently asked questions</h2>
          
          <div className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.id} className="border-b border-white/10 pb-6">
                <button
                  className="w-full text-left flex justify-between items-center"
                  onClick={() => toggleItem(item.id)}
                >
                  <h3 className="text-lg font-medium">{item.question}</h3>
                  <span className="transform transition-transform duration-300">
                    {openItem === item.id ? '−' : '+'}
                  </span>
                </button>
                
                <div
                  className={`mt-2 text-gray-400 overflow-hidden transition-all duration-300 ${
                    openItem === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
