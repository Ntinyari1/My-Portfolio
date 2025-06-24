import React from 'react';
import FadeInSection from './FadeInSection';
import BubbleParticles from './BubbleParticles';

const About = () => (
  <section id="about" className="relative py-16 md:py-24 px-4 bg-black text-white overflow-hidden">
    <BubbleParticles />
    <div className="max-w-4xl mx-auto bg-neutral-900 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start gap-10 relative z-10">
      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-full md:w-80 h-64 md:h-80 object-cover rounded-2xl shadow-2xl shadow-accent mb-8 md:mb-0 animate-bounce-in"
      />
      <div className="flex-1 flex flex-col items-center md:items-start">
        <FadeInSection animation="fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent-orange animate-bounce-in">About Me</h2>
          <FadeInSection animation="fade-in-up" delay={120}>
            <p className="text-base md:text-lg text-gray-300">
              I am a dedicated and creative developer with a passion for building modern, user-friendly web applications. My expertise spans front-end and back-end technologies, and I thrive on turning ideas into impactful digital experiences—where elegant design meets smart, logical architecture.
            </p>
          </FadeInSection>
          <div className="mt-8 flex justify-center md:justify-start">
            <a href="#resume" className="inline-block bg-accent-orange hover:bg-accent-red text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-orange animate-bounce-in">
              View Resume
            </a>
          </div>
        </FadeInSection>
      </div>
    </div>
  </section>
);

export default About; 