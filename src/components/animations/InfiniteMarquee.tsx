import { ReactNode } from 'react';

interface InfiniteMarqueeProps {
  children: ReactNode;
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
  pauseOnHover?: boolean;
}

export default function InfiniteMarquee({
  children,
  speed = 30,
  direction = 'left',
  className = '',
  pauseOnHover = true
}: InfiniteMarqueeProps) {
  const animationClass = direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse';
  
  return (
    <div className={`overflow-hidden ${className}`}>
      <div 
        className={`flex ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
        style={{ 
          animationDuration: `${speed}s`,
        }}
      >
        <div className={`flex shrink-0 gap-8 ${animationClass}`} style={{ animationDuration: `${speed}s` }}>
          {children}
          {children}
        </div>
      </div>
    </div>
  );
}
