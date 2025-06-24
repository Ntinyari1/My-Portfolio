import React, { useRef, useEffect, useState } from 'react';

const FadeInSection = ({ children, className = '', animation = 'fade-in-up', delay = 0 }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`opacity-0 translate-y-8 ${isVisible ? `animate-${animation}` : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection; 