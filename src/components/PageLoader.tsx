import { motion } from 'framer-motion';

export default function PageLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        {/* Outer ring */}
        <motion.div
          className="w-20 h-20 rounded-full border-4 border-secondary/20"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-secondary"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>
        
        {/* Inner pulse */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-3 h-3 rounded-full bg-secondary" />
        </motion.div>
      </div>
    </motion.div>
  );
}
