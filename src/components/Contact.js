import React, { useState } from 'react';
import FadeInSection from './FadeInSection';
import BubbleParticles from './BubbleParticles';

const Contact = ({ socialLinks }) => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    const form = e.target;
    const data = new FormData(form);
    const res = await fetch('https://formspree.io/f/xrbkywdk', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });
    if (res.ok) {
      setStatus('SUCCESS');
      form.reset();
    } else {
      setStatus('ERROR');
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 px-4 bg-black text-white overflow-hidden">
      <BubbleParticles />
      <FadeInSection animation="fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-accent-orange animate-bounce-in">Contact</h2>
        <div className="max-w-3xl mx-auto grid gap-8 md:grid-cols-2">
          <FadeInSection animation="fade-in-up" delay={120}>
            <form className="bg-neutral-900 rounded-lg shadow-lg p-8 flex flex-col space-y-4" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Name" required className="p-3 rounded-lg bg-black text-white placeholder-gray-400 border border-gray-700 shadow focus:border-accent-orange focus:ring-2 focus:ring-accent-orange focus:scale-105 transition-all duration-200 ease-in-out" />
              <input type="email" name="email" placeholder="Email" required className="p-3 rounded-lg bg-black text-white placeholder-gray-400 border border-gray-700 shadow focus:border-accent-orange focus:ring-2 focus:ring-accent-orange focus:scale-105 transition-all duration-200 ease-in-out" />
              <textarea name="message" placeholder="Message" rows="5" required className="p-3 rounded-lg bg-black text-white placeholder-gray-400 border border-gray-700 shadow focus:border-accent-orange focus:ring-2 focus:ring-accent-orange focus:scale-105 transition-all duration-200 ease-in-out" />
              <button type="submit" className="bg-accent-red text-white py-3 rounded hover:bg-accent-orange transition font-semibold focus:outline-none focus:ring-2 focus:ring-accent-orange">Send Message</button>
              {status === 'SUCCESS' && <p className="text-green-400 mt-2">Thank you! Your message has been sent.</p>}
              {status === 'ERROR' && <p className="text-red-400 mt-2">Oops! Something went wrong. Please try again.</p>}
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
};

export default Contact; 