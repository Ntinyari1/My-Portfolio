import React, { useState } from 'react';
import FadeInSection from './FadeInSection';
import BubbleParticles from './BubbleParticles';

const projects = [
  {
    title: 'Enterprise Network Architecture & Defense',
    description: 'Designed and configured an enterprise topology featuring multi-VLAN segmentation, OSPF routing, NAT, and stateful ACL access policies to isolate and protect critical traffic.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=600',
    icon: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    title: 'Custom Client CRM Systems (Justom)',
    description: 'Engineered specialized business management CRMs tailored for operations, tracking client interactions, pipeline workflows, and centralized data handling.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&w=600',
    icon: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Property Management PWA (Rentoi)',
    description: 'A progressive web application for property management, tenant invoicing, and lease auditing with real-time cloud database synchronization and role-based access.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&w=600',
    icon: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Network Traffic Analysis & IDS Lab',
    description: 'Constructed custom Snort intrusion detection rules to detect malicious reconnaissance scans, suspicious payloads, and network anomalies via packet capture analysis.',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&w=600',
    icon: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Warehouse & Inventory CRM',
    description: 'A multi-store inventory control and distribution CRM engineered to manage stock allocations, threshold alerts, supplier orders, and multi-location tracking.',
    image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&w=600',
    icon: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M16 3v4M8 3v4" />
        <path d="M9 17h6" />
      </svg>
    ),
  },
  {
    title: 'Commercial E-Commerce Platform',
    description: 'An end-to-end online storefront engineered with custom product catalogs, automated stock sync, and localized payment gateway checkout integrations.',
    image: 'https://images.pexels.com/photos/3952236/pexels-photo-3952236.jpeg?auto=compress&w=600',
    icon: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
];

const getSlidesToShow = () => {
  if (typeof window === 'undefined') return 3;
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

  const maxIndex = Math.max(projects.length - slidesToShow, 0);
  const goLeft = () => setCurrent((prev) => Math.max(prev - 1, 0));
  const goRight = () => setCurrent((prev) => Math.min(prev + 1, maxIndex));

  return (
    <section id="projects" className="relative py-16 md:py-24 px-4 bg-black text-white overflow-hidden">
      <BubbleParticles />
      <FadeInSection animation="fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-accent-orange animate-bounce-in">Projects</h2>
        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Controls */}
          <button
            onClick={goLeft}
            disabled={current === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-neutral-900/80 hover:bg-accent-orange text-white rounded-full p-3 shadow-lg transition disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous project"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goRight}
            disabled={current === maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-neutral-900/80 hover:bg-accent-orange text-white rounded-full p-3 shadow-lg transition disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next project"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Slides */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700"
              style={{ transform: `translateX(-${current * (100 / slidesToShow)}%)` }}
            >
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="min-w-0 w-full md:w-1/2 lg:w-1/3 px-2 flex-shrink-0"
                  style={{ maxWidth: `${100 / slidesToShow}%` }}
                >
                  <FadeInSection animation={idx % 2 === 0 ? 'bounce-in' : 'fade-in-up'} delay={idx * 120}>
                    <div
                      className={`relative group bg-neutral-900 rounded-3xl shadow-accent-orange overflow-hidden flex flex-col hover:scale-105 hover:shadow-accent transition-transform duration-500 ${
                        idx % 2 === 1 ? 'md:mt-8' : ''
                      }`}
                    >
                      <div className="absolute left-0 top-0 h-full w-2 bg-accent-orange rounded-tr-3xl rounded-br-3xl"></div>
                      <div className="flex items-center justify-center pt-6 animate-wiggle">{project.icon}</div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 object-cover rounded-xl mt-4 mb-4 shadow-lg"
                      />
                      <div className="px-6 pb-6">
                        <h3 className="text-xl md:text-2xl font-bold mb-2 text-accent-red drop-shadow-lg animate-pulse-slow">
                          {project.title}
                        </h3>
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
          <a
            href="#contact"
            className="inline-block bg-accent-orange hover:bg-accent-red text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-orange animate-bounce-in"
          >
            Contact for Collaboration
          </a>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Projects;
