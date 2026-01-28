import { motion, Variants } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

const letterVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    rotateX: -90
  },
  visible: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100
    }
  }
};

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: (custom: { delay: number; stagger: number }) => ({
    opacity: 1,
    transition: {
      delayChildren: custom.delay,
      staggerChildren: custom.stagger
    }
  })
};

export default function SplitText({ 
  text, 
  className = '', 
  delay = 0,
  staggerChildren = 0.03,
  as: Component = 'h1'
}: SplitTextProps) {
  const words = text.split(' ');

  return (
    <Component className={className}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        custom={{ delay, stagger: staggerChildren }}
        style={{ display: 'inline-block', perspective: '1000px' }}
      >
        {words.map((word, wordIndex) => (
          <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {word.split('').map((char, charIndex) => (
              <motion.span
                key={`${wordIndex}-${charIndex}`}
                variants={letterVariants}
                style={{ display: 'inline-block', transformOrigin: 'bottom' }}
              >
                {char}
              </motion.span>
            ))}
            {wordIndex < words.length - 1 && (
              <span style={{ display: 'inline-block' }}>&nbsp;</span>
            )}
          </span>
        ))}
      </motion.span>
    </Component>
  );
}
