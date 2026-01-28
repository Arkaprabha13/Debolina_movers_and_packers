import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone, CheckCircle2, Shield, Award, Star, Clock, Truck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageWrapper from '@/components/PageWrapper';
import SplitText from '@/components/animations/SplitText';
import CountUp from '@/components/animations/CountUp';
import TiltCard from '@/components/animations/TiltCard';
import InfiniteMarquee from '@/components/animations/InfiniteMarquee';
import BlurFade from '@/components/animations/BlurFade';
import ShinyText from '@/components/animations/ShinyText';
import { useTheme } from '@/components/ThemeProvider';

const trustBadges = [
  { icon: Shield, text: 'ISO Certified Company' },
  { icon: Award, text: 'IBA Approved Packers' },
  { icon: Star, text: '5-Star Google Rating' },
  { icon: Clock, text: '24/7 Customer Support' },
  { icon: CheckCircle2, text: '100% Safe Delivery' },
  { icon: Truck, text: 'All India Coverage' },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Complete insurance coverage for all your belongings during transit.'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We guarantee punctual delivery with real-time GPS tracking.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Trained professionals who handle your items with utmost care.'
  },
];

const stats = [
  { value: 5000, suffix: '+', label: 'Successful Moves' },
  { value: 98, suffix: '%', label: 'Customer Satisfaction' },
  { value: 100, suffix: '+', label: 'Cities Covered' },
  { value: 10, suffix: '+', label: 'Years Experience' },
];

export default function HomePage() {
  const { resolvedTheme } = useTheme();
  const [formData, setFormData] = useState({ pickup: '', drop: '', phone: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.pickup.trim()) newErrors.pickup = 'Pickup city is required';
    if (!formData.drop.trim()) newErrors.drop = 'Drop city is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Enter a valid 10-digit number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-muted dark:from-primary/10 dark:via-background dark:to-background" />
        
        {/* Decorative orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        
        <div className="container-wide relative z-10 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6"
              >
                <CheckCircle2 className="w-4 h-4" />
                Trusted by 5000+ Families Across India
              </motion.div>

              <SplitText
                text="Moving Made Effortless"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
                delay={0.4}
                staggerChildren={0.02}
              />

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg"
              >
                Premium packing, GPS-tracked transit, and on-time delivery across India. 
                Experience hassle-free relocation with our expert team.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-wrap gap-4 items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/services" className="btn-primary group">
                    Explore Services
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/process" className="btn-outline">
                    How It Works
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Content - Quote Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50" />
              
              <div className="relative glass rounded-3xl p-8 md:p-10 glow-card">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Quick Estimate</h3>
                  <p className="text-muted-foreground">Get an instant moving quote</p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">Request Received!</h4>
                    <p className="text-muted-foreground">We'll call you within 30 minutes</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <motion.input
                          type="text"
                          placeholder="Pickup City"
                          value={formData.pickup}
                          onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                          className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                          whileFocus={{ scale: 1.01 }}
                        />
                      </div>
                      {errors.pickup && <p className="text-sm text-secondary mt-1">{errors.pickup}</p>}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <motion.input
                          type="text"
                          placeholder="Drop City"
                          value={formData.drop}
                          onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
                          className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                          whileFocus={{ scale: 1.01 }}
                        />
                      </div>
                      {errors.drop && <p className="text-sm text-secondary mt-1">{errors.drop}</p>}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <motion.input
                          type="tel"
                          placeholder="Mobile Number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                          whileFocus={{ scale: 1.01 }}
                        />
                      </div>
                      {errors.phone && <p className="text-sm text-secondary mt-1">{errors.phone}</p>}
                    </motion.div>

                    <motion.button 
                      type="submit" 
                      className="w-full btn-primary py-4 text-base"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ShinyText 
                        text="Get Free Estimate" 
                        speed={3}
                        color="#ffffff"
                        shineColor="#ffffff"
                        spread={90}
                      />
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Ticker */}
      <section className="py-8 border-y border-border bg-muted/30 dark:bg-muted/10">
        <InfiniteMarquee speed={40} pauseOnHover>
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-background border border-border shrink-0"
            >
              <badge.icon className={`w-5 h-5 ${resolvedTheme === 'dark' ? 'text-secondary' : 'text-primary'}`} />
              <span className="text-sm font-medium text-foreground whitespace-nowrap">
                {badge.text}
              </span>
            </div>
          ))}
        </InfiniteMarquee>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary dark:bg-card text-primary-foreground dark:text-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        
        <div className="container-wide relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <BlurFade key={index} delay={index * 0.1}>
                <div className="text-center p-8 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur border border-white/10">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    <CountUp 
                      to={stat.value} 
                      duration={2.5} 
                      suffix={stat.suffix}
                      separator=","
                    />
                  </div>
                  <div className="text-primary-foreground/70 dark:text-muted-foreground">{stat.label}</div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Tilted Cards */}
      <section className="section-padding">
        <div className="container-wide">
          <BlurFade>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Moving Excellence, Guaranteed
              </h2>
              <p className="text-muted-foreground text-lg">
                We don't just move your belongings—we move your life with care and precision.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
            {whyChooseUs.map((item, index) => (
              <BlurFade key={index} delay={index * 0.15}>
                <TiltCard className="h-full cursor-pointer">
                  <div className="p-8 rounded-2xl border border-border bg-card glow-border transition-all duration-300 h-full">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                      <item.icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </TiltCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary/10 via-background to-primary/10">
        <div className="container-wide">
          <BlurFade>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Make Your Move?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get a free quote today and experience stress-free relocation with India's most trusted packers and movers.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/contact" className="btn-primary">
                    <ShinyText 
                      text="Get Free Quote" 
                      speed={3}
                      color="#ffffff"
                      shineColor="#ffffff"
                      spread={90}
                    />
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </motion.div>
                <motion.a 
                  href="tel:+919876543210" 
                  className="btn-outline"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </motion.a>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </PageWrapper>
  );
}
