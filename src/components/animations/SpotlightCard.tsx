import { useState, useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

export default function SpotlightCard({ children, className = '' }: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-colors duration-300 ${className}`}
    >
      {/* Spotlight gradient overlay */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, hsl(var(--primary) / 0.15), transparent 40%)`,
        }}
      />
      
      {/* Border glow effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500"
        style={{
          opacity: isFocused ? 1 : opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, hsl(var(--primary) / 0.3), transparent 40%)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          padding: '1px',
        }}
      />
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
