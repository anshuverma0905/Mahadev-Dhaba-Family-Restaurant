import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS, GalleryItem } from '../types';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import restaurantAmbiance from '../assets/images/restaurant_ambiance_1781456202258.jpg';

interface GallerySectionProps {
  isDarkMode: boolean;
}

export default function GallerySection({ isDarkMode }: GallerySectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Food',
    'Restaurant Interior',
    'Family Cabins',
    'Outdoor Area',
    'Events',
    'Dining Experience',
  ];

  // Adjust g3 layout dynamically using generated high-res ambiance
  const items = GALLERY_ITEMS.map((item) => {
    if (item.id === 'g3') {
      return { ...item, image: restaurantAmbiance };
    }
    return item;
  });

  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter((item) => item.category === selectedCategory);

  const handleOpenLightbox = (indexInFiltered: number) => {
    // We want to open the lightbox with the index from the filtered view
    setLightboxIndex(indexInFiltered);
  };

  const handleLightboxPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev! - 1));
  };

  const handleLightboxNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev! + 1));
  };

  return (
    <section
      id="gallery"
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode ? 'bg-forest-dark text-cream' : 'bg-cream text-forest-dark'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center gap-2 mb-12">
          <span className="text-saffron font-semibold text-xs tracking-widest uppercase flex items-center gap-1.5 justify-center">
            <span className="h-[1px] w-5 bg-saffron"></span>
            Visual Feast
            <span className="h-[1px] w-5 bg-saffron"></span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            Explore Mahadev Dhaba <span className="text-gold italic font-medium font-serif">In Photos</span>
          </h2>
          <span className="text-xs font-serif text-gold font-medium">रेस्टोरेंट इंटीरियर, पारिवारिक केबिन और स्वादिष्ट व्यंजनों का चित्र दीर्घा</span>
        </div>

        {/* Gallery Filters */}
        <div id="gallery-filters" className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`gallery-filter-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-none text-xs font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-[#1A3C34] text-white border-[#D4AF37] font-semibold'
                  : isDarkMode
                  ? 'bg-forest/50 border-[#D4AF37]/20 text-cream/70 hover:bg-[#1A3C34] hover:text-white'
                  : 'bg-white border-[#D4AF37]/30 text-[#1A3C34] hover:bg-[#F9F7F2]'
              }`}
            >
              {cat === 'All' ? 'View All' : cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div
          id="gallery-grid"
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                id={`gallery-card-${item.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                onClick={() => handleOpenLightbox(idx)}
                className="group relative h-64 rounded-none overflow-hidden cursor-pointer shadow-sm hover:shadow-md border border-[#D4AF37]/30"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Hover Glassmorphism overlay */}
                <div className="absolute inset-0 bg-[#1A3C34]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="flex items-center justify-between border-b border-[#D4AF37]/45 pb-2 mb-2">
                    <span className="text-[#D4AF37] text-[10px] uppercase font-bold tracking-widest leading-none">
                      {item.category}
                    </span>
                    <Maximize2 className="w-4 h-4 text-[#D4AF37] leading-none" />
                  </div>
                  <h3 className="font-serif text-cream text-base font-bold leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Corner Label for Static reference */}
                <div className="absolute top-3 right-3 bg-[#1A3C34]/90 border border-[#D4AF37]/30 px-2.5 py-1 rounded-none text-[9px] uppercase font-bold tracking-widest text-[#D4AF37] opacity-90 group-hover:opacity-0 transition-opacity">
                  {item.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal slider */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              id="lightbox-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="fixed inset-0 bg-forest-dark/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-4"
            >
              <button
                id="lightbox-close-btn"
                onClick={() => setLightboxIndex(null)}
                className="absolute top-4 right-4 bg-white/10 hover:bg-[#F27D26] text-cream p-3 rounded-none border border-white/20 transition-all duration-200 z-50 cursor-pointer"
                title="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              <div 
                className="relative max-w-4xl w-full flex items-center justify-center h-[70vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Left navigation arrow of lightbox */}
                <button
                  id="lightbox-prev-btn"
                  onClick={handleLightboxPrev}
                  className="absolute left-2 sm:-left-12 p-3 bg-white/10 hover:bg-[#F27D26] text-cream rounded-none border border-cream/20 pointer-events-auto cursor-pointer"
                  title="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Main image in view */}
                <div className="w-full h-full flex items-center justify-center p-2">
                  <motion.img
                    key={lightboxIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                    src={filteredItems[lightboxIndex].image}
                    alt={filteredItems[lightboxIndex].title}
                    className="max-w-full max-h-full rounded-none object-contain border border-[#D4AF37]/45 shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Right navigation arrow of lightbox */}
                <button
                  id="lightbox-next-btn"
                  onClick={handleLightboxNext}
                  className="absolute right-2 sm:-right-12 p-3 bg-white/10 hover:bg-[#F27D26] text-cream rounded-none border border-cream/20 pointer-events-auto cursor-pointer"
                  title="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Caption and description at the bottom */}
              <div className="text-center max-w-2xl mt-4 px-4 select-none">
                <span className="text-[#D4AF37] tracking-widest uppercase text-xs font-bold">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h3 className="text-cream font-serif text-lg md:text-xl font-bold mt-1">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <span className="text-xs text-cream/50 mt-2 block">
                  Image {lightboxIndex + 1} of {filteredItems.length} inside Category
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
