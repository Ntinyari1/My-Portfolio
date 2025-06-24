import React from 'react';
import FadeInSection from './FadeInSection';
import BubbleParticles from './BubbleParticles';

const Resume = () => (
  <section id="resume" className="relative py-16 md:py-24 px-4 bg-black text-white overflow-hidden">
    <BubbleParticles />
    <FadeInSection animation="fade-in-up">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-accent-orange animate-bounce-in">Resume</h2>
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        <FadeInSection animation="fade-in-up" delay={120}>
          <div className="bg-neutral-900 rounded-lg shadow-lg p-6 md:p-8 relative">
            <div className="absolute left-0 top-0 h-full w-2 bg-accent-red rounded-tr-lg rounded-br-lg"></div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-accent-orange">Education</h3>
            <ul className="text-gray-300 space-y-2">
              <li><span className="font-bold">BSc in Information Security and Forensics</span> - KCA University (2021-2025)</li>
              <li><span className="font-bold">Web Development Bootcamp</span> - Online (2022)</li>
              <li><span className="font-bold">Cisco Certification</span> - Cisco (Year)</li>
            </ul>
          </div>
        </FadeInSection>
        <FadeInSection animation="bounce-in" delay={240}>
          <div className="bg-neutral-900 rounded-lg shadow-lg p-6 md:p-8 relative">
            <div className="absolute left-0 top-0 h-full w-2 bg-accent-red rounded-tr-lg rounded-br-lg"></div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-accent-orange">Experience</h3>
            <ul className="text-gray-300 space-y-2">
              <li><span className="font-bold">Frontend Developer</span> - Tech Company (2024-Present)</li>
              <li><span className="font-bold">Freelance Web Developer</span> (2024)</li>
            </ul>
          </div>
        </FadeInSection>
      </div>
    </FadeInSection>
    <div className="mt-10 flex justify-center">
      <a href="#projects" className="inline-block bg-accent-orange hover:bg-accent-red text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-orange animate-bounce-in">
        See My Projects
      </a>
    </div>
  </section>
);

export default Resume; 