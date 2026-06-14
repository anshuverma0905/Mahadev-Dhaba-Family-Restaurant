import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Users, Heart, ShieldCheck, HelpCircle } from 'lucide-react';
import aboutImage from '../assets/images/restaurant_ambiance_1781456202258.jpg';

interface AboutProps {
  isDarkMode: boolean;
  onExploreMenu: () => void;
}

export default function About({ isDarkMode, onExploreMenu }: AboutProps) {
  const highlights = [
    { text: 'Pure Vegetarian Food', hindi: '100% शुद्ध शाकाहारी भोजन' },
    { text: 'Family Dining Cabins', hindi: 'सुरक्षित पारिवारिक केबिन' },
    { text: 'Hygienic Environment', hindi: 'स्वच्छ एवं स्वच्छ वातावरण' },
    { text: 'Quick Service', hindi: 'त्वरित एवं विनीत सेवा' },
    { text: 'Spacious Secure Parking', hindi: 'विशाल सुरक्षित पार्किंग क्षेत्र' },
    { text: 'Affordable Pricing', hindi: 'उचित एवं किफायती मूल्य' },
    { text: 'Friendly Helpful Staff', hindi: 'विनम्र एवं मददगार कर्मचारी' },
    { text: 'Traveler Friendly Location', hindi: 'यात्रियों के लिए अनुकूल स्थान' }
  ];

  return (
    <section
      id="about"
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode ? 'bg-forest-dark text-cream' : 'bg-cream text-forest-dark'
      }`}
    >
      {/* Decorative vectors */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-saffron/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Images & Ambiance */}
          <div className="lg:col-span-12 xl:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="relative rounded-none overflow-hidden border border-[#D4AF37]/30 shadow-xl"
            >
              <img
                src={aboutImage}
                alt="Mahadev Dhaba welcoming family interiors"
                className="w-full h-[380px] object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Bottom tag floating overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#1A3C34]/95 p-4 rounded-none border border-[#D4AF37]/40 flex items-center gap-3">
                <div className="w-10 h-10 rounded-none border border-[#D4AF37]/30 bg-[#F27D26]/10 flex items-center justify-center text-cream shrink-0">
                  <Award className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#D4AF37] leading-tight">Trusted Family Diner</h4>
                  <span className="text-[10px] text-cream/80 leading-normal block">Famous highway-side and local favorite in Ballia since years</span>
                </div>
              </div>
            </motion.div>

            {/* Back offset decorative card */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-dashed border-[#D4AF37]/40 rounded-none -z-10 pointer-events-none"></div>
          </div>

          {/* Right Side: Content & Story */}
          <div className="lg:col-span-12 xl:col-span-7 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-[#F27D26] font-bold text-xs tracking-widest uppercase flex items-center gap-1.5">
                <span className="h-[1px] w-5 bg-[#F27D26]"></span>
                Welcome to Mahadev Dhaba
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight leading-tight text-[#1A3C34] dark:text-cream">
                Traditional Hospitality & <br />
                <span className="text-[#F27D26] italic font-medium">Hygienic Pure Vegetarian Taste</span>
              </h2>
              <span className="text-sm font-serif text-[#D4AF37] font-semibold">महादेव ढाबा और फैमिली रेस्टोरेंट में आपका हार्दिक स्वागत है।</span>
            </div>

            <p className={`font-sans text-sm sm:text-base leading-relaxed ${isDarkMode ? 'text-cream/80' : 'text-[#1A3C34]/80'}`}>
              For years, **Mahadev Dhaba & Family Restaurant** has been serving fresh, flavorful, and affordable pure vegetarian meals to families, travelers, and food enthusiasts at Tikha, Phephana in Ballia. Highly recognized for premium-grade food preparation, strict sanitation guidelines, private family cabins, and comfortable dining spaces, we strive to make every highway break and dinner celebration remarkably delightful.
            </p>

            {/* Core highlights checklist */}
            <div className={`p-5 rounded-none border ${isDarkMode ? 'bg-white/5 border-[#D4AF37]/20' : 'bg-white border-[#D4AF37]/30 shadow-sm'}`}>
              <h3 className="font-serif text-base font-bold text-[#1A3C34] dark:text-[#D4AF37] mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#F27D26]" />
                Why Ballia Families Love Dining With Us:
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {highlights.map((hlt, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#F27D26] shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm font-bold">{hlt.text}</span>
                      <span className="text-[10px] text-gray-400 font-medium leading-none mt-0.5">{hlt.hindi}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <button
                id="about-explore-menu"
                onClick={onExploreMenu}
                className="px-8 py-4 bg-[#1A3C34] hover:bg-[#F27D26] text-white font-sans text-xs uppercase tracking-widest font-bold transition-all border border-[#D4AF37]/30 cursor-pointer rounded-none"
              >
                View Full Menu
              </button>
              <a
                href="tel:+917880879698"
                className={`px-8 py-4 border border-[#D4AF37]/50 text-xs uppercase tracking-widest font-bold flex items-center gap-2 rounded-none transition-all ${
                  isDarkMode ? 'hover:bg-white/5 text-[#D4AF37]' : 'hover:bg-black/5 text-[#1A3C34]'
                }`}
              >
                Call Chef: +91 78808 79698
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
