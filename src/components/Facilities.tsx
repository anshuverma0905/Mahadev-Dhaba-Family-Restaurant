import React from 'react';
import { motion } from 'motion/react';
import { FACILITIES } from '../types';
import * as Icons from 'lucide-react';

interface FacilitiesProps {
  isDarkMode: boolean;
}

export default function Facilities({ isDarkMode }: FacilitiesProps) {
  const getIcon = (iconName: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const LucideIcon = (Icons as any)[iconName];
    if (LucideIcon) {
      return <LucideIcon className="w-5 h-5 text-gold-light" />;
    }
    return <Icons.Sparkles className="w-5 h-5 text-gold-light" />;
  };

  return (
    <section
      id="facilities"
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode ? 'bg-forest-dark text-cream' : 'bg-cream text-forest-dark'
      }`}
    >
      {/* Decorative left/right borders */}
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-saffron via-gold to-saffron opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="flex flex-col items-center text-center gap-2 mb-16">
          <span className="text-saffron font-semibold text-xs tracking-widest uppercase flex items-center gap-1.5 justify-center">
            <span className="h-[1px] w-5 bg-saffron"></span>
            World Class Amenities
            <span className="h-[1px] w-5 bg-saffron"></span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            Our Premium <span className="text-gold italic font-medium">Guest Facilities</span>
          </h2>
          <span className="text-xs font-serif text-gold font-medium">ग्राहकों की सुविधा और आराम के लिए महादेव ढाबा की सेवाएं</span>
          <p className="text-sm max-w-xl text-gray-400 mt-2">
            We are not just a dining stop, we are a comfortable resting destination crafted with high amenity standards to make travelers and families feel perfectly relaxed.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="facilities-list-grid">
          {FACILITIES.map((fac, idx) => (
            <motion.div
              key={fac.id}
              id={`facility-card-${fac.id}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`p-6 rounded-none border transition-all duration-300 relative group flex flex-col gap-4 ${
                isDarkMode
                  ? 'bg-forest/35 border-[#D4AF37]/20 hover:border-[#D4AF37]/45 hover:bg-forest/50'
                  : 'bg-white border-[#D4AF37]/25 hover:border-[#D4AF37]/45 hover:shadow-sm'
              }`}
            >
              {/* Gold Ornament Top Border Tag */}
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-[#D4AF37]/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Icon Container with custom theme styles */}
              <div className="w-10 h-10 rounded-none bg-[#F27D26]/10 border border-[#F27D26]/30 flex items-center justify-center shrink-0">
                {getIcon(fac.icon)}
              </div>

              {/* Title & Desc */}
              <div className="flex flex-col gap-1.5">
                <div className="flex flex-col">
                  <h3 className="font-serif font-bold text-base tracking-tight">{fac.title}</h3>
                  <span className="text-[10px] text-[#F27D26] font-bold font-serif leading-none mt-0.5">
                    {fac.hindiTitle}
                  </span>
                </div>
                <p className={`text-xs leading-relaxed font-sans mt-1 ${isDarkMode ? 'text-cream/70' : 'text-[#1A3C34]/70'}`}>
                  {fac.description}
                </p>
              </div>

              {/* Aesthetic status indicator */}
              <div className="mt-2 text-[10px] uppercase tracking-widest font-bold text-[#D4AF37] group-hover:text-[#F27D26] transition-colors flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#F27D26]"></span>
                <span>Complementary</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
