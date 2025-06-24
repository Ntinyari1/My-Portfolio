import React from 'react';
import FadeInSection from './FadeInSection';
import BubbleParticles from './BubbleParticles';

const Contact = ({ socialLinks }) => (
  <section id="contact" className="relative py-16 md:py-24 px-4 bg-black text-white overflow-hidden">
    <BubbleParticles />
    <FadeInSection animation="fade-in-up">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-accent-orange animate-bounce-in">Contact</h2>
      <div className="max-w-3xl mx-auto grid gap-8 md:grid-cols-2">
        <FadeInSection animation="fade-in-up" delay={120}>
          <form className="bg-neutral-900 rounded-lg shadow-lg p-8 flex flex-col space-y-4">
            <input type="text" placeholder="Name" className="p-3 rounded-lg bg-black text-white placeholder-gray-400 border border-gray-700 shadow focus:border-accent-orange focus:ring-2 focus:ring-accent-orange focus:scale-105 transition-all duration-200 ease-in-out" />
            <input type="email" placeholder="Email" className="p-3 rounded-lg bg-black text-white placeholder-gray-400 border border-gray-700 shadow focus:border-accent-orange focus:ring-2 focus:ring-accent-orange focus:scale-105 transition-all duration-200 ease-in-out" />
            <textarea placeholder="Message" rows="5" className="p-3 rounded-lg bg-black text-white placeholder-gray-400 border border-gray-700 shadow focus:border-accent-orange focus:ring-2 focus:ring-accent-orange focus:scale-105 transition-all duration-200 ease-in-out" />
            <button type="submit" className="bg-accent-red text-white py-3 rounded hover:bg-accent-orange transition font-semibold focus:outline-none focus:ring-2 focus:ring-accent-orange">Send Message</button>
          </form>
        </FadeInSection>
        <FadeInSection animation="bounce-in" delay={240}>
          <div>
            <div className="mb-4"><span className="font-bold text-accent-orange">Email:</span> <span className="text-gray-300">mungathiayvonne@gmail.com</span></div>
            <div className="mb-4"><span className="font-bold text-accent-orange">Phone:</span> <span className="text-gray-300">+25411500323</span></div>
            <div className="mb-4"><span className="font-bold text-accent-orange">Location:</span> <span className="text-gray-300">Nairobi, Kenya</span></div>
            {socialLinks && (
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="hover:text-accent-red text-accent-orange transition animate-wiggle">
                    {link.icon}
                  </a>
                ))}
              </div>
            )}
          </div>
        </FadeInSection>
      </div>
    </FadeInSection>
  </section>
);

export default Contact; 