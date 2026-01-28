import { Home, Building2, Car, Package, Boxes, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import PageWrapper from '@/components/PageWrapper';
import SpotlightCard from '@/components/animations/SpotlightCard';
import BlurFade from '@/components/animations/BlurFade';

const services = [
  {
    icon: Home,
    title: 'Household Moving',
    description: 'Complete door-to-door relocation with expert packing, safe transit, and careful unpacking of your belongings.',
    features: ['Expert Packing', 'Safe Transit', 'Insurance Coverage', 'Unpacking Service']
  },
  {
    icon: Building2,
    title: 'Office Relocation',
    description: 'Minimize downtime with our efficient corporate moving solutions. We handle IT equipment with special care.',
    features: ['IT Equipment Care', 'Weekend Moves', 'Asset Tracking', 'Minimal Downtime']
  },
  {
    icon: Car,
    title: 'Car Transportation',
    description: 'Safe car and two-wheeler transportation across India using enclosed carriers and dedicated trailers.',
    features: ['Enclosed Carriers', 'GPS Tracking', 'Full Insurance', 'Door Delivery']
  },
  {
    icon: Package,
    title: 'Warehousing',
    description: 'Secure short-term and long-term storage solutions with climate control and 24/7 surveillance.',
    features: ['Climate Control', '24/7 Security', 'Flexible Terms', 'Easy Access']
  },
  {
    icon: Boxes,
    title: 'Packing Services',
    description: 'Professional packing using premium materials. Special care for fragile, antique, and high-value items.',
    features: ['Premium Materials', 'Fragile Care', 'Labeling System', 'Inventory List']
  },
  {
    icon: ShieldCheck,
    title: 'Insurance Services',
    description: 'Comprehensive transit insurance to protect your valuables. Peace of mind throughout your move.',
    features: ['Full Coverage', 'Quick Claims', 'Transparent Policy', 'Affordable Rates']
  },
];

export default function ServicesPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-muted dark:from-primary/10" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container-wide relative z-10">
          <BlurFade>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Comprehensive Moving <span className="text-gradient">Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                From household items to corporate offices, we handle every move with precision, care, and the technology you'd expect from a modern logistics partner.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Services Grid - Bento Style */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <BlurFade key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="h-full"
                >
                  <SpotlightCard className="h-full">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                      <service.icon className="w-8 h-8 text-secondary" strokeWidth={1.5} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-center gap-3 text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          <span className="text-foreground">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </SpotlightCard>
                </motion.div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/30 dark:bg-muted/10">
        <div className="container-wide">
          <BlurFade>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-muted-foreground mb-8">
                Every move is unique. Contact us to discuss your specific requirements and get a tailored quote.
              </p>
              <motion.a 
                href="/contact" 
                className="btn-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Custom Quote
              </motion.a>
            </div>
          </BlurFade>
        </div>
      </section>
    </PageWrapper>
  );
}
