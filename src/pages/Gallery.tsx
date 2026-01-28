import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import BlurFade from '@/components/animations/BlurFade';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&h=600&fit=crop',
    alt: 'Professional packing service',
    category: 'Packing'
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop',
    alt: 'Moving truck loading',
    category: 'Transit'
  },
  {
    src: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&h=400&fit=crop',
    alt: 'Organized boxes',
    category: 'Packing'
  },
  {
    src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=900&fit=crop',
    alt: 'New home setup',
    category: 'Delivery'
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop',
    alt: 'Happy family moving',
    category: 'Delivery'
  },
  {
    src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop',
    alt: 'Modern living room',
    category: 'Delivery'
  },
  {
    src: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&h=600&fit=crop',
    alt: 'Office relocation',
    category: 'Office'
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    alt: 'Premium home interior',
    category: 'Delivery'
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=800&fit=crop',
    alt: 'Warehouse storage',
    category: 'Storage'
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=700&h=500&fit=crop',
    alt: 'Kitchen setup',
    category: 'Delivery'
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&h=400&fit=crop',
    alt: 'Moving team',
    category: 'Team'
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=600&fit=crop',
    alt: 'Careful handling',
    category: 'Packing'
  },
];

const categories = ['All', 'Packing', 'Transit', 'Delivery', 'Office', 'Storage', 'Team'];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [filter, setFilter] = useState('All');

  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-muted dark:from-primary/10" />
        
        <div className="container-wide relative z-10">
          <BlurFade>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                Our Work
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                See Our <span className="text-gradient">Expertise</span> in Action
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Browse through successful relocations and see the care we put into every move.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category 
                    ? 'bg-secondary text-secondary-foreground shadow-lg' 
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="section-padding pt-8">
        <div className="container-wide">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <BlurFade key={image.src} delay={index * 0.05}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedImage(image)}
                    className="relative overflow-hidden rounded-2xl cursor-pointer group break-inside-avoid"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white font-medium">{image.alt}</p>
                      <p className="text-white/70 text-sm">{image.category}</p>
                    </div>
                  </motion.div>
                </BlurFade>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </motion.button>
            
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
