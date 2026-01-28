import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FileText, Package, Truck, PartyPopper, CheckCircle2 } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import BlurFade from '@/components/animations/BlurFade';

const steps = [
  {
    icon: FileText,
    step: '01',
    title: 'Booking',
    subtitle: 'Get Your Free Quote',
    description: 'Share your moving details online or over phone. Our team will provide a transparent, no-obligation quote within minutes. We survey your items to ensure accurate pricing.',
    details: ['Free survey', 'Instant quote', 'No hidden charges', 'Flexible scheduling']
  },
  {
    icon: Package,
    step: '02',
    title: 'Packing',
    subtitle: 'Premium Materials Only',
    description: 'Our trained professionals arrive with premium packing materials. Each item is carefully wrapped, labeled, and inventoried. Special care for fragile and high-value items.',
    details: ['Multi-layer packing', 'Fragile handling', 'Complete inventory', 'Systematic labeling']
  },
  {
    icon: Truck,
    step: '03',
    title: 'Transit',
    subtitle: 'GPS Tracked Journey',
    description: 'Your belongings travel in our modern, GPS-tracked fleet. Monitor your shipment in real-time and receive updates at every milestone. Fully insured transit.',
    details: ['Real-time tracking', 'Dedicated vehicles', 'Full insurance', 'Regular updates']
  },
  {
    icon: PartyPopper,
    step: '04',
    title: 'Unpacking',
    subtitle: 'Welcome Home',
    description: 'We unpack, arrange, and help you settle into your new home. Our team ensures everything is placed exactly where you want it. We take care of all packaging waste.',
    details: ['Complete unpacking', 'Room arrangement', 'Debris removal', 'Post-move support']
  },
];

function ProcessStep({ step, index, isLast }: { step: typeof steps[0]; index: number; isLast: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center']
  });

  const lineProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative">
      {/* Connection Line */}
      {!isLast && (
        <div className="absolute left-1/2 top-full w-0.5 h-32 bg-border -translate-x-1/2 hidden lg:block">
          <motion.div 
            className="w-full bg-secondary origin-top"
            style={{ height: lineProgress }}
          />
        </div>
      )}

      <motion.div 
        style={{ opacity, scale }}
        className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
      >
        {/* Content */}
        <div className={`${isEven ? 'lg:text-right' : ''} order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className={`flex items-center gap-4 mb-4 ${isEven ? 'lg:justify-end' : ''}`}>
            <span className="text-5xl font-bold text-secondary/20">{step.step}</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{step.title}</h3>
          <p className="text-secondary font-medium mb-4">{step.subtitle}</p>
          <p className="text-muted-foreground mb-6">{step.description}</p>
          <ul className={`space-y-2 ${isEven ? 'lg:text-right' : ''}`}>
            {step.details.map((detail, i) => (
              <li key={i} className={`flex items-center gap-2 text-sm ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                <span className="text-foreground">{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Icon Card */}
        <div className={`order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-2xl opacity-50" />
            <div className="relative glass rounded-3xl p-12 flex items-center justify-center">
              <div className="w-24 h-24 rounded-2xl bg-secondary/10 flex items-center justify-center">
                <step.icon className="w-12 h-12 text-secondary" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProcessPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-muted dark:from-primary/10" />
        
        <div className="container-wide relative z-10">
          <BlurFade>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                Our Process
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Your Move in <span className="text-gradient">4 Simple Steps</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                We've refined our process over a decade to make your relocation as smooth and stress-free as possible.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-32">
            {steps.map((step, index) => (
              <BlurFade key={index} delay={0.1}>
                <ProcessStep 
                  step={step} 
                  index={index} 
                  isLast={index === steps.length - 1} 
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-wide">
          <BlurFade>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Move?
              </h2>
              <p className="text-secondary-foreground/80 mb-8">
                Book your free survey today and experience the Debolina difference.
              </p>
              <motion.a 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-full bg-white text-secondary px-8 py-3 text-sm font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Free Survey
              </motion.a>
            </div>
          </BlurFade>
        </div>
      </section>
    </PageWrapper>
  );
}
