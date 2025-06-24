import React, { useState } from 'react';
import FadeInSection from './FadeInSection';
import BubbleParticles from './BubbleParticles';

const projects = [
  {
    title: 'Modern Portfolio Website',
    description: 'A sleek, responsive portfolio site built with React and Tailwind CSS.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=600',
    icon: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20l9-5-9-5-9 5 9 5z" /><path d="M12 12V4l8 4-8 4-8-4 8-4z" /></svg>
    ),
  },
  {
    title: 'E-commerce Dashboard',
    description: 'A powerful dashboard for managing e-commerce sales and analytics.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&w=600',
    icon: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12l2 2 4-4" /></svg>
    ),
  },
  {
    title: 'Creative Blog Platform',
    description: 'A modern blog platform for sharing ideas and stories.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&w=600',
    icon: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 3v4M8 3v4" /></svg>
    ),
  },
  {
    title: 'Warehouse Management System (CRM)',
    description: 'A robust CRM and inventory management platform for tracking stock, orders, and customer relationships.',
    image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&w=600',
    icon: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M16 3v4M8 3v4" /><path d="M9 17h6" /></svg>
    ),
  },
  {
    title: 'Medical Supply Warehouse',
    description: 'A multi-store medical supply warehouse site for managing inventory, orders, and distribution across different stores.',
    image: 'https://images.pexels.com/photos/3952236/pexels-photo-3952236.jpeg?auto=compress&w=600',
    icon: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="13" rx="2" /><path d="M16 3v4M8 3v4" /><path d="M6 17h12" /></svg>
    ),
  },
];

const getSlidesToShow = () => {
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 768) return 2;
  return 1;
};

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

  React.useEffect(() => {
    const handleResize = () => setSlidesToShow(getSlidesToShow());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = projects.length - slidesToShow;
  const goLeft = () => setCurrent((prev) => Math.max(prev - 1, 0));
  const goRight = () => setCurrent((prev) => Math.min(prev + 1, maxIndex));

  return (
    <section id="projects" className="relative py-16 md:py-24 px-4 bg-black text-white overflow-hidden">
      <BubbleParticles />
      <FadeInSection animation="fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-accent-orange animate-bounce-in">Projects</h2>
        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Controls */}
          <button onClick={goLeft} disabled={current === 0} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-neutral-900/80 hover:bg-accent-orange text-white rounded-full p-3 shadow-lg transition disabled:opacity-30 disabled:cursor-not-allowed">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={goRight} disabled={current === maxIndex} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-neutral-900/80 hover:bg-accent-orange text-white rounded-full p-3 shadow-lg transition disabled:opacity-30 disabled:cursor-not-allowed">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
          {/* Carousel Slides */}
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${current * (100 / slidesToShow)}%)` }}>
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="min-w-0 w-full md:w-1/2 lg:w-1/3 px-2 flex-shrink-0"
                  style={{ maxWidth: `${100 / slidesToShow}%` }}
                >
                  <FadeInSection animation={idx % 2 === 0 ? 'bounce-in' : 'fade-in-up'} delay={idx * 120}>
                    <div className={`relative group bg-neutral-900 rounded-3xl shadow-accent-orange overflow-hidden flex flex-col hover:scale-105 hover:shadow-accent transition-transform duration-500 ${idx % 2 === 1 ? 'md:mt-8' : ''}`}>
                      <div className="absolute left-0 top-0 h-full w-2 bg-accent-orange rounded-tr-3xl rounded-br-3xl"></div>
                      <div className="flex items-center justify-center pt-6 animate-wiggle">{project.icon}</div>
                      <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-xl mt-4 mb-4 shadow-lg" />
                      <div className="px-6 pb-6">
                        <h3 className="text-xl md:text-2xl font-bold mb-2 text-accent-red drop-shadow-lg animate-pulse-slow">{project.title}</h3>
                        <p className="text-gray-300 text-sm md:text-base mb-2">{project.description}</p>
                      </div>
                    </div>
                  </FadeInSection>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <a href="#contact" className="inline-block bg-accent-orange hover:bg-accent-red text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-orange animate-bounce-in">
            Contact for Collaboration
          </a>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Projects; 