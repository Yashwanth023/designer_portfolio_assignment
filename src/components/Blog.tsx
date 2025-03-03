
import { useRef, useEffect } from 'react';

interface BlogPost {
  id: number;
  date: string;
  title: string;
  image: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    date: 'APR 5, 2023',
    title: 'How UX works in web',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop',
    tags: ['Design', 'UI/UX'],
  },
  {
    id: 2,
    date: 'MAR 22, 2023',
    title: 'Case study - Analysis Application',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop',
    tags: ['Study', 'Design'],
  },
  {
    id: 3,
    date: 'FEB 15, 2023',
    title: '5 ways to develop your skill',
    image: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?q=80&w=2070&auto=format&fit=crop',
    tags: ['Career', 'Skills'],
  },
];

const BlogPost = ({ post }: { post: BlogPost }) => {
  const postRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );
    
    if (postRef.current) {
      observer.observe(postRef.current);
    }
    
    return () => {
      if (postRef.current) {
        observer.unobserve(postRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={postRef}
      className="flex gap-6 items-center mb-6 opacity-0 translate-y-8 transition-all duration-700 ease-out"
    >
      <div className="w-24 h-24 md:w-28 md:h-28 rounded overflow-hidden flex-shrink-0">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="flex-1">
        <p className="text-xs text-gray-400 mb-1">{post.date}</p>
        <h3 className="text-lg font-medium mb-2">{post.title}</h3>
        <div>
          {post.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
      <div>
        <button className="btn-primary">Read</button>
      </div>
    </div>
  );
};

const Blog = () => {
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
    <section id="blog" className="py-16">
      <div className="container-custom">
        <div
          ref={sectionRef}
          className="opacity-0 transition-opacity duration-1000"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="section-title mb-0">Blog</h2>
            <button className="text-xs text-gray-400 hover:text-white transition-colors">
              VIEW ALL
            </button>
          </div>
          
          <div>
            {blogPosts.map((post) => (
              <BlogPost key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
