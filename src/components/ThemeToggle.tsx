import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full bg-muted flex items-center justify-center overflow-hidden"
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: resolvedTheme === 'dark' ? 0 : 180,
          scale: 1,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {resolvedTheme === 'dark' ? (
          <Moon className="w-5 h-5 text-accent" />
        ) : (
          <Sun className="w-5 h-5 text-accent" />
        )}
      </motion.div>
    </motion.button>
  );
}
