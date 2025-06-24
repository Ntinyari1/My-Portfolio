import React from 'react';
import FadeInSection from './FadeInSection';
import BubbleParticles from './BubbleParticles';

const testimonials = [
  {
    name: 'Jane Doe',
    role: 'Product Manager',
    quote: 'Ntinyari is a talented developer who delivers high-quality work on time. Highly recommended!'
  },
  {
    name: 'John Smith',
    role: 'CEO, Startup Inc.',
    quote: 'Professional, creative, and reliable. My go-to for web projects.'
  },
];

const Testimonials = () => (
  <section id="testimonials" className="relative py-16 md:py-24 px-4 bg-black text-white overflow-hidden">
    <BubbleParticles />
    <FadeInSection animation="fade-in-up">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-accent-orange animate-bounce-in">Testimonials</h2>
      <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {testimonials.map((t, idx) => (
          <FadeInSection key={idx} animation={idx % 2 === 0 ? 'fade-in-up' : 'bounce-in'} delay={idx * 120}>
            <div className="bg-neutral-900 rounded-lg shadow-lg p-8 flex flex-col items-center">
              <svg className="w-8 h-8 text-accent-red mb-2 animate-wiggle" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 17a4 4 0 01-4-4V7a4 4 0 014-4" /><path d="M15 17a4 4 0 004-4V7a4 4 0 00-4-4" /></svg>
              <p className="text-base md:text-lg italic mb-4 text-center text-gray-300">"{t.quote}"</p>
              <div className="font-semibold text-accent-orange">{t.name}</div>
              <div className="text-gray-300 text-sm">{t.role}</div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </FadeInSection>
    <div className="mt-10 flex justify-center">
      <a href="#contact" className="inline-block bg-accent-orange hover:bg-accent-red text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-orange animate-bounce-in">
        Let's Work Together
      </a>
    </div>
  </section>
);

export default Testimonials; 