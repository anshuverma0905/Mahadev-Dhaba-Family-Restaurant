import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { REVIEWS } from '../types';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from 'lucide-react';

interface ReviewsProps {
  isDarkMode: boolean;
}

export default function Reviews({ isDarkMode }: ReviewsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Auto scroll testimonials every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    if (diff > 50) {
      handleNext();
      setTouchStart(null);
    } else if (diff < -50) {
      handlePrev();
      setTouchStart(null);
    }
  };

  return (
    <section
      id="reviews"
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode ? 'bg-forest text-cream' : 'bg-cream text-forest-dark'
      }`}
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dark-mandala opacity-5 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2 mb-12">
          <span className="text-saffron font-semibold text-xs tracking-widest uppercase flex items-center gap-1.5 justify-center">
            <span className="h-[1px] w-5 bg-saffron"></span>
            Diner Feedbacks
            <span className="h-[1px] w-5 bg-saffron"></span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            Guest Testimonials &amp; <span className="text-gold italic font-medium font-serif">Reviews</span>
          </h2>
          <span className="text-xs font-serif text-gold font-medium">हमारे सम्मानित ग्राहकों के अनुभव एवं विचार</span>
        </div>

        {/* Big Quote Symbol */}
        <div className="flex justify-center text-saffron/10 absolute top-24 left-1/2 -translate-x-1/2 -z-1 pointer-events-none">
          <Quote className="w-48 h-48 fill-saffron/5" />
        </div>

        {/* Central Slider Core */}
        <div 
          className="relative px-6 sm:px-12 py-10 rounded-none border border-[#D4AF37]/30 bg-[#F27D26]/5 backdrop-blur-md min-h-[250px] flex flex-col justify-between"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {/* Top aesthetic mini quote icon */}
          <div className="text-[#F27D26] mb-4 text-center">
            <Quote className="w-8 h-8 fill-[#F27D26] inline" />
          </div>

          {/* Sliding Content */}
          <div className="overflow-hidden grow flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.35 }}
                className="text-center flex flex-col gap-5 items-center"
              >
                {/* Score Stars */}
                <div className="flex items-center gap-0.5" id="review-stars-row">
                  {[...Array(REVIEWS[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37] animate-pulse-subtle" />
                  ))}
                </div>

                {/* Main feedback quote text */}
                <blockquote className="font-serif text-lg sm:text-xl font-medium italic leading-relaxed max-w-2xl text-balance">
                  &ldquo;{REVIEWS[currentIndex].text}&rdquo;
                </blockquote>

                {/* Reviewer Details */}
                <div className="flex flex-col items-center mt-2">
                  <cite className="not-italic font-bold font-serif text-[#D4AF37] text-base block">
                    {REVIEWS[currentIndex].name}
                  </cite>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-[#F27D26] block">
                      {REVIEWS[currentIndex].role}
                    </span>
                    <span className="h-3 w-[1px] bg-gray-400 opacity-40"></span>
                    <span className="text-[10px] md:text-xs text-gray-400">
                      {REVIEWS[currentIndex].date}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-[#D4AF37]/20">
            {/* Index Dots */}
            <div className="flex items-center gap-1.5" id="slider-dots">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  id={`review-dot-${i}`}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1 cursor-pointer transition-all ${
                    currentIndex === i ? 'w-6 bg-[#F27D26]' : 'w-2 bg-gray-400/40 hover:bg-[#D4AF37]/40'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Stepper Controllers */}
            <div className="flex items-center gap-2" id="slider-arrows">
              <button
                id="review-prev-btn"
                onClick={handlePrev}
                className="p-2 rounded-none border border-[#D4AF37]/30 hover:border-[#F27D26] hover:bg-[#F27D26] hover:text-white transition-all text-xs cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                id="review-next-btn"
                onClick={handleNext}
                className="p-2 rounded-none border border-[#D4AF37]/30 hover:border-[#F27D26] hover:bg-[#F27D26] hover:text-white transition-all text-xs cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA to write a standard review or view on Google Maps */}
        <div className="text-center mt-10">
          <a
            href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-saffron hover:text-saffron-dark underline transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Are you a past guest? Write a review on Google Business</span>
          </a>
        </div>

      </div>
    </section>
  );
}
