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
              <li><span className="font-bold">BSc in Computer Science</span> - University Name (2018-2022)</li>
              <li><span className="font-bold">Web Development Bootcamp</span> - Online (2022)</li>
            </ul>
          </div>
        </FadeInSection>
        <FadeInSection animation="bounce-in" delay={240}>
          <div className="bg-neutral-900 rounded-lg shadow-lg p-6 md:p-8 relative">
            <div className="absolute left-0 top-0 h-full w-2 bg-accent-red rounded-tr-lg rounded-br-lg"></div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-accent-orange">Experience</h3>
            <ul className="text-gray-300 space-y-2">
              <li><span className="font-bold">Frontend Developer</span> - Tech Company (2022-Present)</li>
              <li><span className="font-bold">Freelance Web Developer</span> (2020-2022)</li>
            </ul>
          </div>
        </FadeInSection>
      </div>
    </FadeInSection>
  </section>
);

export default Resume; 