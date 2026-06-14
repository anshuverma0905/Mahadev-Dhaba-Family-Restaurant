import React from 'react';
import { motion } from 'motion/react';
import { Utensils, Calendar, MapPin, Sparkles, Star, ShieldCheck } from 'lucide-react';
import heroImage from '../assets/images/hero_indian_dining_1781456184408.jpg';

interface HeroProps {
  onReserveClick: () => void;
  onExploreMenuClick: () => void;
}

export default function Hero({ onReserveClick, onExploreMenuClick }: HeroProps) {
  const getDirections = () => {
    window.open('https://maps.google.com/?q=Mahadev+Dhaba+Family+Restaurant+Tikha+Phephana+Ballia+Uttar+Pradesh+277506', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Graphic Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/95 via-forest/90 to-transparent z-10 lg:w-3/5" />
        <div className="absolute inset-0 bg-forest-dark/70 z-10 lg:hidden" />
        <img
          src={heroImage}
          alt="Premium North Indian Vegetarian Platter"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Subtle dynamic background lighting */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-saffron/10 rounded-full blur-3xl animate-pulse-subtle"></div>
      </div>

      {/* Elegant Mandalas Pattern overlay */}
      <div className="absolute inset-0 bg-dark-mandala opacity-10 pointer-events-none z-10"></div>

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 text-cream">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Message block */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            
            {/* Top Tagline Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#F27D26]/10 border border-[#D4AF37]/30 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest text-[#F27D26] uppercase backdrop-blur-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Ballia&apos;s Famous Vegetarian Haven • Since 1998</span>
            </motion.div>

            {/* Typography Heading titles */}
            <div className="flex flex-col gap-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white"
                id="hero-heading"
              >
                Authentic <span className="text-[#F27D26] italic font-medium">Taste</span>,<br />
                Family Comfort.
              </motion.h1>

              {/* Hindi script element */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-serif italic text-[#D4AF37] text-lg md:text-xl font-medium tracking-wide mt-1 block"
              >
                &ldquo;स्वाद जो परिवार को पास लाए, सुकून जो दिल को भाए&rdquo;
              </motion.span>
            </div>

            {/* Subheadline description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-[#FCF9F3]/90 text-sm sm:text-base font-sans max-w-lg leading-relaxed"
              id="hero-subheadline"
            >
              Experience delicious vegetarian cuisine, family-friendly dining, separate private cabins, and exceptional hospitality at Mahadev Dhaba & Family Restaurant — Uttar Pradesh&apos;s favorite resting stop.
            </motion.p>

            {/* Quick Metrics Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="grid grid-cols-3 gap-4 w-full max-w-md bg-[#1A3C34]/40 border border-[#D4AF37]/30 p-4 rounded-none backdrop-blur-md"
            >
              <div className="flex flex-col border-r border-[#D4AF37]/20 pr-2">
                <span className="text-[#D4AF37] font-serif font-bold text-xl md:text-2xl leading-none">100%</span>
                <span className="text-[9px] text-[#FCF9F3]/80 mt-1 uppercase tracking-widest font-bold">Pure Veg</span>
              </div>
              <div className="flex flex-col border-r border-[#D4AF37]/20 px-3">
                <span className="text-[#D4AF37] font-serif font-bold text-xl md:text-2xl leading-none">Private</span>
                <span className="text-[9px] text-[#FCF9F3]/80 mt-1 uppercase tracking-widest font-bold">Cabins</span>
              </div>
              <div className="flex flex-col pl-3">
                <span className="text-[#D4AF37] font-serif font-bold text-xl md:text-2xl leading-none flex items-center gap-1">
                  4.6 <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                </span>
                <span className="text-[9px] text-[#FCF9F3]/80 mt-1 uppercase tracking-widest font-bold">Google</span>
              </div>
            </motion.div>

            {/* CTA Interaction Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4 items-center w-full mt-2"
              id="hero-ctas"
            >
              <button
                id="cta-view-menu"
                onClick={onExploreMenuClick}
                className="px-8 py-4 bg-[#1A3C34] hover:bg-[#F27D26] text-white font-sans text-xs uppercase tracking-widest font-bold transition-all duration-300 focus:outline-none cursor-pointer border border-[#D4AF37]/40"
              >
                <span>Explore Special Menu</span>
              </button>

              <button
                id="cta-reserve-table"
                onClick={onReserveClick}
                className="px-8 py-4 bg-transparent border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1A3C34] text-[#D4AF37] font-sans text-xs uppercase tracking-widest font-bold transition-all duration-300 focus:outline-none cursor-pointer"
              >
                <span>Reserve Cabin Table</span>
              </button>

              <button
                id="cta-get-directions"
                onClick={getDirections}
                className="px-6 py-4 bg-white/10 hover:bg-white/25 text-[#FCF9F3] font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center gap-2 border border-white/15 focus:outline-none cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#F27D26]" />
                <span>Directions</span>
              </button>
            </motion.div>

            {/* Traveler / Location Info Footer badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 mt-2 text-xs text-[#FCF9F3]/80 border-t border-[#D4AF37]/20 pt-4 w-full"
            >
              <ShieldCheck className="w-4 h-4 text-[#F27D26]" />
              <span>Conveniently located at Tikha, Phephana, on the main connecting highway of Ballia. Ample secure parking.</span>
            </motion.div>
          </div>

          {/* Right Side Visual Graphic Floating Card - Tablet & Desktop Only */}
          <div className="hidden lg:col-span-5 relative lg:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative p-6 bg-[#1A3C34]/95 rounded-none border border-[#D4AF37]/30 shadow-2xl backdrop-blur-sm max-w-sm"
            >
              {/* Decorative borders with exact Editorial feel */}
              <div className="absolute top-2 left-2 right-2 bottom-2 border border-[#D4AF37]/20 pointer-events-none"></div>

              <div className="flex flex-col gap-4 text-center relative z-10">
                <span className="font-serif text-[10px] font-bold text-[#D4AF37] tracking-[0.2em] uppercase">
                  Featured Choice
                </span>
                
                <div className="h-44 overflow-hidden border border-[#D4AF37]/30">
                  <img
                    src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80"
                    alt="Authentic Thali Plate"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex flex-col">
                  <h3 className="font-serif text-xl font-bold text-white leading-tight">Mahadev Special Thali</h3>
                  <span className="text-[10px] text-[#D4AF37] font-semibold mt-1 tracking-widest uppercase">महादेव स्पेशल थाली</span>
                  <p className="text-xs text-[#FCF9F3]/80 mt-2 leading-relaxed font-sans">
                    A grand complete feast with Paneer, Dal, fresh seasonal Veggies, Raita, Butter Roti, Basmati Rice, and Dessert.
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-[#D4AF37]/20 pt-3 mt-1">
                  <span className="text-white font-serif font-bold text-2xl">₹250</span>
                  <button
                    onClick={onExploreMenuClick}
                    className="border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1A3C34] text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold px-4 py-2 transition-all cursor-pointer"
                  >
                    View Menu
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
