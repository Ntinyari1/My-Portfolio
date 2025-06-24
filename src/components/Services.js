import React from 'react';
import FadeInSection from './FadeInSection';
import BubbleParticles from './BubbleParticles';

const services = [
  {
    icon: (
      <svg className="w-10 h-10 mx-auto mb-4 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20l9-5-9-5-9 5 9 5z" /><path d="M12 12V4l8 4-8 4-8-4 8-4z" /></svg>
    ),
    title: 'Web Development',
    description: 'Building responsive and modern web applications tailored to your needs.'
  },
  {
    icon: (
      <svg className="w-10 h-10 mx-auto mb-4 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12l2 2 4-4" /></svg>
    ),
    title: 'UI/UX Design',
    description: 'Designing intuitive and engaging user interfaces for a seamless experience.'
  },
  {
    icon: (
      <svg className="w-10 h-10 mx-auto mb-4 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 3v4M8 3v4" /></svg>
    ),
    title: 'Consulting',
    description: 'Providing expert advice to help you achieve your digital goals.'
  },
  {
    icon: (
      <svg className="w-10 h-10 mx-auto mb-4 text-accent-red" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
    ),
    title: 'Cybersecurity & Forensics Consulting',
    description: 'Protecting your digital assets and investigating incidents with expertise in information security and forensics.'
  },
  {
    icon: (
      <svg className="w-10 h-10 mx-auto mb-4 text-accent-orange" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17v.01"/><path d="M19.07 4.93a10 10 0 1 1-14.14 0"/><path d="M12 7v5l3 3"/></svg>
    ),
    title: 'Vulnerability Assessment & Penetration Testing',
    description: 'Identifying, testing, and mitigating security risks in your systems and applications to keep your business safe.'
  },
];

const Services = () => (
  <section id="services" className="relative py-16 md:py-24 px-4 bg-black text-white overflow-hidden">
    <BubbleParticles />
    <FadeInSection animation="fade-in-up">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-accent-orange animate-bounce-in">Services</h2>
      <div className="max-w-6xl mx-auto grid gap-y-16 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <FadeInSection key={idx} animation={idx % 2 === 0 ? 'bounce-in' : 'fade-in-up'} delay={idx * 120}>
            <div className={`relative group bg-neutral-900 rounded-3xl shadow-accent-orange p-8 text-center hover:scale-105 hover:shadow-accent transition-transform duration-500 flex flex-col ${idx % 2 === 1 ? 'md:mt-12' : ''}`}>
              <div className="absolute left-0 top-0 h-full w-2 bg-accent-red rounded-tr-3xl rounded-br-3xl"></div>
              <div className="flex justify-center items-center mb-4 animate-wiggle">{service.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-accent-orange drop-shadow-lg animate-pulse-slow">{service.title}</h3>
              <p className="text-gray-300 text-sm md:text-base mb-2">{service.description}</p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </FadeInSection>
    <div className="mt-10 flex justify-center">
      <a href="#contact" className="inline-block bg-accent-orange hover:bg-accent-red text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-orange animate-bounce-in">
        Contact Me
      </a>
    </div>
  </section>
);

export default Services; 