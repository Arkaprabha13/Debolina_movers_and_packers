import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '@/assets/logo.jpg';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Process', href: '/process' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

const services = [
  'Household Moving',
  'Office Relocation',
  'Car Transportation',
  'Warehousing',
  'Packing Services',
  'Insurance Services',
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-primary dark:bg-card text-primary-foreground dark:text-foreground">
      <div className="container-wide section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* About */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img 
                src={logo} 
                alt="Debolina Packers & Movers" 
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-primary-foreground/70 dark:text-muted-foreground mb-6">
              Your trusted partner for safe, reliable, and stress-free relocations across India. 
              Serving families and businesses since 2014.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 dark:text-muted-foreground hover:text-primary-foreground dark:hover:text-foreground transition-all inline-block hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li 
                  key={index} 
                  className="text-primary-foreground/70 dark:text-muted-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary-foreground/70 dark:text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <p>+91 98765 43210</p>
                  <p className="text-primary-foreground/70 dark:text-muted-foreground text-sm">Mon-Sat 9am-8pm</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary-foreground/70 dark:text-muted-foreground shrink-0 mt-0.5" />
                <a href="mailto:info@debolinapackers.com" className="hover:underline">
                  info@debolinapackers.com
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary-foreground/70 dark:text-muted-foreground shrink-0 mt-0.5" />
                <p className="text-primary-foreground/70 dark:text-muted-foreground">
                  123 Industrial Area, Phase 2<br />
                  Kolkata, West Bengal 700001
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70 dark:text-muted-foreground">
          <p>© 2026 Debolina Packers & Movers. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground dark:hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground dark:hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
