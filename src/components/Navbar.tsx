import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import ShinyText from './animations/ShinyText';
import logo from '@/assets/logo.jpg';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Process', href: '/process' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-navbar shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Debolina Packers & Movers" 
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <Link
                    to={link.href}
                    className={`text-sm font-medium transition-colors relative group ${
                      location.pathname === link.href 
                        ? 'text-secondary' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block"
                    >
                      {link.name}
                    </motion.span>
                    <motion.span 
                      className="absolute -bottom-1 left-0 h-0.5 bg-secondary"
                      initial={false}
                      animate={{ width: location.pathname === link.href ? '100%' : '0%' }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <a 
                href="tel:+919876543210" 
                className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">+91 98765 43210</span>
              </a>
              
              <ThemeToggle />
              
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center justify-center rounded-full bg-secondary px-6 py-2.5 text-sm font-semibold text-secondary-foreground shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                <ShinyText 
                  text="Get Quote" 
                  speed={3}
                  color="#ffffff"
                  shineColor="#ffffff"
                  spread={90}
                />
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-foreground"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Full Screen */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="absolute inset-0 bg-background pt-24 px-6"
            >
              <div className="flex flex-col gap-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      className={`text-3xl font-bold transition-colors ${
                        location.pathname === link.href 
                          ? 'text-secondary' 
                          : 'text-foreground hover:text-secondary'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-8 border-t border-border"
                >
                  <a 
                    href="tel:+919876543210" 
                    className="flex items-center gap-3 text-xl text-muted-foreground"
                  >
                    <Phone className="w-6 h-6 text-secondary" />
                    <span className="font-medium">+91 98765 43210</span>
                  </a>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link to="/contact" className="btn-primary text-center w-full py-4">
                    Get Free Quote
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
