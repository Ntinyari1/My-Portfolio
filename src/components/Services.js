import React from 'react';
import FadeInSection from './FadeInSection';
import BubbleParticles from './BubbleParticles';

const services = [
  {
    icon: (
      <svg className="w-10 h-10 mx-auto mb-4 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Secure Web Development',
    description: 'Building responsive web applications and PWAs using modern stacks, engineered for performance and secured by design.'
  },
  {
    icon: (
      <svg className="w-10 h-10 mx-auto mb-4 text-accent-red" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Vulnerability Assessment & Pentesting',
    description: 'Proactively identifying and remediating vulnerabilities across web applications, APIs, and server endpoints.'
  },
  {
    icon: (
      <svg className="w-10 h-10 mx-auto mb-4 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    title: 'Network Engineering & Hardening',
    description: 'Designing secure routing and switching topologies, VLAN segmentation, ACL policies, and enterprise network defense.'
  },
  {
    icon: (
      <svg className="w-10 h-10 mx-auto mb-4 text-accent-orange" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'Digital Forensics & Investigation',
    description: 'Analyzing network traffic, log artifacts, and digital evidence to investigate security incidents and maintain data integrity.'
  },
  {
    icon: (
      <svg className="w-10 h-10 mx-auto mb-4 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: 'UI/UX & Product Design',
    description: 'Crafting modern, intuitive, and accessible interfaces that provide frictionless journeys for end users.'
  },
  {
    icon: (
      <svg className="w-10 h-10 mx-auto mb-4 text-accent-red" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: 'Backend & Database Architecture',
    description: 'Architecting scalable RESTful APIs, secure authentication flows, automated payment processing, and resilient data storage.'
  },
];

const Services = () => (
  <section id="services" className="relative py-16 md:py-24 px-4 bg-black text-white overflow-hidden">
    <BubbleParticles />
    <FadeInSection animation="fade-in-up">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-accent-orange animate-bounce-in">Services</h2>
      <div className="max-w-6xl mx-auto grid gap-y-12 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <FadeInSection key={idx} animation={idx % 2 === 0 ? 'bounce-in' : 'fade-in-up'} delay={idx * 100}>
            <div className="relative group bg-neutral-900 rounded-3xl shadow-accent-orange p-8 text-center hover:scale-105 hover:shadow-accent transition-transform duration-500 flex flex-col h-full justify-between">
              <div className="absolute left-0 top-0 h-full w-2 bg-accent-red rounded-tr-3xl rounded-br-3xl"></div>
              <div>
                <div className="flex justify-center items-center mb-4 animate-wiggle">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-accent-orange drop-shadow-lg">{service.title}</h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">{service.description}</p>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </FadeInSection>
    <div className="mt-12 flex justify-center">
      <a href="#contact" className="inline-block bg-accent-orange hover:bg-accent-red text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-orange animate-bounce-in">
        Contact Me
      </a>
    </div>
  </section>
);

export default Services;
