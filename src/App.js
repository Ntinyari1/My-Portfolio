import React, { useState } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

// Social Media Links Data
const socialLinks = [
  { href: 'https://wa.me/', label: 'WhatsApp', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.09 1.52 5.8L0 24l6.29-1.65A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.25-6.18-3.48-8.52zM12 22c-1.85 0-3.63-.5-5.18-1.44l-.37-.22-3.74.98.99-3.64-.24-.38A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.54-.45-.47-.61-.48-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1.01-1 2.46s1.02 2.85 1.16 3.05c.14.2 2.01 3.08 4.88 4.2.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" /></svg>
  ) },
  { href: 'https://facebook.com/', label: 'Facebook', icon: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.92.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" /></svg>
  ) },
  { href: 'https://x.com/', label: 'X', icon: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.162 0H1.838C.822 0 0 .822 0 1.838v20.324C0 23.178.822 24 1.838 24h20.324C23.178 24 24 23.178 24 22.162V1.838C24 .822 23.178 0 22.162 0zM7.548 20.452H3.548V9.548h4v10.904zm-2-12.452c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2zm15.452 12.452h-4v-5.604c0-1.336-.024-3.056-1.864-3.056-1.864 0-2.15 1.454-2.15 2.956v5.704h-4V9.548h3.844v1.496h.056c.536-1.016 1.844-2.088 3.792-2.088 4.056 0 4.804 2.672 4.804 6.144v5.352z" /></svg>
  ) },
  { href: 'https://github.com/Ntinyari1', label: 'GitHub', icon: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
  ) },
];

// Navigation Links Data
const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#resume', label: 'Resume' },
  { href: '#services', label: 'Services' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

// Nav Component
function Nav({ navLinks, socialLinks }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black shadow-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-widest text-accent-orange animate-bounce-in">Ntinyari</div>
        {/* Nav Links Centered (Desktop) */}
        <ul className="hidden md:flex flex-1 justify-center items-center space-x-8 text-lg font-medium">
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className="inline-block px-2 py-1 rounded transition-colors duration-200 text-gray-100 hover:text-accent-orange border-b-2 border-transparent hover:border-accent-orange focus:outline-none focus:text-accent-orange animate-pulse-slow"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Social Icons Right (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          {socialLinks.map((link, idx) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="hover:text-accent-red text-accent-orange transition animate-wiggle">
              {link.icon}
            </a>
          ))}
        </div>
        {/* Hamburger for mobile */}
        <button className="md:hidden focus:outline-none ml-2" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-8 h-8 text-accent-orange" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black px-4 pb-4 border-b border-neutral-800">
          <ul className="flex flex-col space-y-2 text-lg font-medium">
            {navLinks.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block px-3 py-2 rounded transition-colors duration-200 text-gray-100 hover:text-accent-orange border-b-2 border-transparent hover:border-accent-orange focus:outline-none focus:text-accent-orange animate-pulse-slow"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex space-x-4 mt-4">
            {socialLinks.map((link, idx) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="hover:text-accent-red text-accent-orange transition animate-wiggle">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero Component
function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center py-24 md:py-32 px-4 min-h-[60vh] bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=1200)',
      }}
    >
      {/* Overlay to darken background image for better text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-accent-orange animate-bounce-in">Ntinyari</h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl animate-fade-in-up">I'm a passionate developer crafting modern, professional web experiences.</p>
        <a href="#about" className="mt-4 px-8 py-3 bg-accent-red text-white font-semibold rounded-full shadow-lg hover:bg-accent-orange transition duration-300 ease-in-out transform hover:-translate-y-1 animate-pulse-slow">
          ABOUT ME
        </a>
      </div>
    </section>
  );
}

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-primary text-gray-900 font-sans">
      {/* Navigation Component */}
      <Nav navLinks={navLinks} socialLinks={socialLinks} />
      
      {/* Hero Component */}
      <Hero />

      {/* Other Sections */}
      <About />
      <Projects />
      <Resume />
      <Services />
      <Testimonials />
      <Contact socialLinks={socialLinks} />
    </div>
  );
}
