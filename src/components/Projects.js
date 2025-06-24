import React from 'react';
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
];

const Projects = () => (
  <section id="projects" className="relative py-16 md:py-24 px-4 bg-black text-white overflow-hidden">
    <BubbleParticles />
    <FadeInSection animation="fade-in-up">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-accent-orange animate-bounce-in">Projects</h2>
      <div className="max-w-6xl mx-auto grid gap-y-16 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <FadeInSection key={idx} animation={idx % 2 === 0 ? 'bounce-in' : 'fade-in-up'} delay={idx * 120}>
            <div className={`relative group bg-neutral-900 rounded-3xl shadow-accent-orange overflow-hidden flex flex-col hover:scale-105 hover:shadow-accent transition-transform duration-500 ${idx % 2 === 1 ? 'md:mt-12' : ''}`}>
              <div className="absolute left-0 top-0 h-full w-2 bg-accent-orange rounded-tr-3xl rounded-br-3xl"></div>
              <div className="flex items-center justify-center pt-6 animate-wiggle">{project.icon}</div>
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-xl mt-4 mb-4 shadow-lg" />
              <div className="px-6 pb-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-accent-red drop-shadow-lg animate-pulse-slow">{project.title}</h3>
                <p className="text-gray-300 text-sm md:text-base mb-2">{project.description}</p>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </FadeInSection>
  </section>
);

export default Projects; 