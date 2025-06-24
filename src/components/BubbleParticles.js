import React from 'react';

const bubbleConfigs = Array.from({ length: 24 }).map((_, i) => ({
  size: Math.floor(Math.random() * 18) + 8, // 8px to 25px
  top: Math.random() * 90 + '%',
  left: Math.random() * 90 + '%',
  color: i % 2 === 0 ? 'bg-accent-orange' : 'bg-accent-red',
  opacity: Math.random() * 0.4 + 0.2,
  blur: ['blur-sm', 'blur', 'blur-md', 'blur-lg'][i % 4],
  anim: ['animate-pulse-slow', 'animate-wiggle', 'animate-bounce-in', 'animate-fade-in-up'][i % 4],
}));

export default function BubbleParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {bubbleConfigs.map((b, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${b.color} ${b.blur} ${b.anim}`}
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            opacity: b.opacity,
          }}
        />
      ))}
    </div>
  );
} 