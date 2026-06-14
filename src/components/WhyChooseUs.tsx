import React from 'react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_US } from '../types';
import * as Icons from 'lucide-react';

interface WhyChooseUsProps {
  isDarkMode: boolean;
}

export default function WhyChooseUs({ isDarkMode }: WhyChooseUsProps) {
  // Safe helper to render dynamic Lucide Icons from text keys
  const renderIcon = (iconName: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const LucideIcon = (Icons as any)[iconName];
    if (LucideIcon) {
      return <LucideIcon className="w-6 h-6 text-saffron" />;
    }
    return <Icons.HelpCircle className="w-6 h-6 text-saffron" />;
  };

  return (
    <section
      id="why-us"
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode ? 'bg-forest-dark text-cream' : 'bg-cream-dark text-forest-dark'
      }`}
    >
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-saffron/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2 mb-16">
          <span className="text-saffron font-semibold text-xs tracking-widest uppercase flex items-center gap-1.5 justify-center">
            <span className="h-[1px] w-5 bg-saffron"></span>
            Our Promise to You
            <span className="h-[1px] w-5 bg-saffron"></span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            Why Dine at <span className="text-gold italic font-medium">Mahadev Dhaba?</span>
          </h2>
          <span className="text-xs font-serif text-gold font-medium">हम क्यों हैं बलिया और फेफना क्षेत्र का सर्वश्रेष्ठ पारिवारिक भोजनालय</span>
        </div>

         {/* Responsive Grid representation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="why-nous-grid">
          {WHY_CHOOSE_US.map((card, idx) => (
            <motion.div
              key={card.id}
              id={`why-card-${card.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`p-6 rounded-none border shadow-sm flex flex-col items-start gap-4 transition-all duration-300 relative ${
                isDarkMode 
                  ? 'bg-forest/35 border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-forest/50' 
                  : 'bg-white border-[#D4AF37]/25 hover:border-[#D4AF37]/45 hover:shadow-md'
              }`}
            >
              {/* Icon sharp enclosure */}
              <div className={`w-12 h-12 rounded-none flex items-center justify-center shrink-0 border ${
                isDarkMode ? 'bg-[#F27D26]/10 border-[#F27D26]/30' : 'bg-[#F27D26]/5 border-[#F27D26]/20'
              }`}>
                {renderIcon(card.icon)}
              </div>

              {/* Title & Descriptions */}
              <div className="flex flex-col gap-1.5">
                <div className="flex flex-col">
                  <h3 className="font-serif font-bold text-base leading-snug">{card.title}</h3>
                  <span className="text-[10px] text-[#F27D26] font-semibold font-serif leading-none mt-0.5">
                    {card.hindiTitle}
                  </span>
                </div>
                <p className={`text-xs leading-relaxed font-sans mt-1 ${isDarkMode ? 'text-cream/70' : 'text-[#1A3C34]/70'}`}>
                  {card.description}
                </p>
              </div>

              {/* Corner mini dots graphic */}
              <div className="absolute bottom-3 right-3 w-1.5 h-1.5 bg-[#D4AF37]/35"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
