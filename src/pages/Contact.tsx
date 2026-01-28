import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import BlurFade from '@/components/animations/BlurFade';
import ShinyText from '@/components/animations/ShinyText';
import { useTheme } from '@/components/ThemeProvider';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@debolinapackers.com',
    href: 'mailto:info@debolinapackers.com'
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '123 Industrial Area, Phase 2, Kolkata, West Bengal 700001',
    href: '#'
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon-Sat: 9:00 AM - 8:00 PM',
    href: '#'
  },
];

export default function ContactPage() {
  const { resolvedTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickup: '',
    drop: '',
    date: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Enter a valid 10-digit number';
    }
    if (!formData.pickup.trim()) newErrors.pickup = 'Pickup location is required';
    if (!formData.drop.trim()) newErrors.drop = 'Drop location is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-muted dark:from-primary/10" />
        
        <div className="container-wide relative z-10">
          <BlurFade>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Let's Plan Your <span className="text-gradient">Perfect Move</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Get in touch with our team for a free quote and consultation.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding pt-12">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Contact Info */}
            <BlurFade delay={0.1}>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                  Get in Touch
                </h2>
                
                <div className="space-y-6 mb-12">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        {item.label === 'Phone' ? (
                          <p className="text-lg font-semibold text-foreground glow-text">
                            <ShinyText 
                              text={item.value}
                              speed={4}
                              color={resolvedTheme === 'dark' ? '#e2e8f0' : '#1e3a5f'}
                              shineColor={resolvedTheme === 'dark' ? '#ef4444' : '#dc2626'}
                              spread={90}
                            />
                          </p>
                        ) : (
                          <p className="text-foreground font-medium">{item.value}</p>
                        )}
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Map */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="rounded-2xl overflow-hidden border border-border h-64"
                >
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.1182974786884!2d88.4277445!3d22.982677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89595b377b7b1%3A0x3886c70d877afdef!2sDebolina%20packers%20and%20movers!5e0!3m2!1sen!2sin!4v1769622340045!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }}
                    allowfullscreen 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade" 
                    title="Debolina Packers Location">
                  </iframe>

                </motion.div>
              </div>
            </BlurFade>

            {/* Right - Form */}
            <BlurFade delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-2xl opacity-30" />
                
                <div className="relative glass rounded-3xl p-8 md:p-10">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-16"
                    >
                      <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">Request Submitted!</h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for contacting us. Our team will get back to you within 2 hours.
                      </p>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ name: '', email: '', phone: '', pickup: '', drop: '', date: '', message: '' });
                        }}
                        className="btn-outline"
                      >
                        Submit Another Request
                      </button>
                    </motion.div>
                  ) : (
                    <>
                      <h3 className="text-2xl font-bold text-foreground mb-2">Request a Quote</h3>
                      <p className="text-muted-foreground mb-8">Fill in your details and we'll get back to you shortly.</p>
                      
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <motion.div 
                          className="grid sm:grid-cols-2 gap-5"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                            <motion.input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Doe"
                              className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                              whileFocus={{ scale: 1.01 }}
                            />
                            {errors.name && <p className="text-sm text-secondary mt-1">{errors.name}</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                            <motion.input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="john@example.com"
                              className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                              whileFocus={{ scale: 1.01 }}
                            />
                            {errors.email && <p className="text-sm text-secondary mt-1">{errors.email}</p>}
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15 }}
                        >
                          <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                          <motion.input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="9876543210"
                            className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                            whileFocus={{ scale: 1.01 }}
                          />
                          {errors.phone && <p className="text-sm text-secondary mt-1">{errors.phone}</p>}
                        </motion.div>

                        <motion.div 
                          className="grid sm:grid-cols-2 gap-5"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">Pickup Location *</label>
                            <motion.input
                              type="text"
                              name="pickup"
                              value={formData.pickup}
                              onChange={handleChange}
                              placeholder="City, State"
                              className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                              whileFocus={{ scale: 1.01 }}
                            />
                            {errors.pickup && <p className="text-sm text-secondary mt-1">{errors.pickup}</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">Drop Location *</label>
                            <motion.input
                              type="text"
                              name="drop"
                              value={formData.drop}
                              onChange={handleChange}
                              placeholder="City, State"
                              className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                              whileFocus={{ scale: 1.01 }}
                            />
                            {errors.drop && <p className="text-sm text-secondary mt-1">{errors.drop}</p>}
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.25 }}
                        >
                          <label className="block text-sm font-medium text-foreground mb-2">Preferred Moving Date</label>
                          <motion.input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                            whileFocus={{ scale: 1.01 }}
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <label className="block text-sm font-medium text-foreground mb-2">Additional Details</label>
                          <motion.textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            placeholder="Any specific requirements or questions?"
                            className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all resize-none"
                            whileFocus={{ scale: 1.01 }}
                          />
                        </motion.div>

                        <motion.button 
                          type="submit" 
                          disabled={isLoading}
                          className="w-full btn-primary py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.35 }}
                          whileHover={{ scale: isLoading ? 1 : 1.02 }}
                          whileTap={{ scale: isLoading ? 1 : 0.98 }}
                        >
                          {isLoading ? (
                            <span className="flex items-center justify-center gap-2">
                              <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              Submitting...
                            </span>
                          ) : (
                            <>
                              <Send className="w-5 h-5 mr-2" />
                              Get Free Quote
                            </>
                          )}
                        </motion.button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
