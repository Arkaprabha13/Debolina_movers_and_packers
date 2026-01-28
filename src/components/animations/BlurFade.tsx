import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode, forwardRef } from 'react';

interface BlurFadeProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  blur?: string;
  yOffset?: number;
}

const BlurFade = forwardRef<HTMLDivElement, BlurFadeProps>(function BlurFade({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  blur = '10px',
  yOffset = 20
}, externalRef) {
  const internalRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(internalRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={internalRef}
      initial={{ 
        opacity: 0, 
        filter: `blur(${blur})`,
        y: yOffset 
      }}
      animate={isInView ? { 
        opacity: 1, 
        filter: 'blur(0px)',
        y: 0 
      } : {}}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

export default BlurFade;
