import React from 'react';
import { motion } from 'motion/react';
import { Utensils, Phone, Mail, MapPin, ArrowUp, Send, Facebook, Twitter, Instagram, Award, Star } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
  onLinkClick: (sectionId: string) => void;
}

export default function Footer({ isDarkMode, onLinkClick }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const handleLink = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onLinkClick(id);
  };

  return (
    <footer
      className={`relative pt-16 pb-8 border-t transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-forest-dark border-gold/15 text-cream/80' 
          : 'bg-forest border-gold/10 text-cream/90'
      }`}
    >
      {/* Decorative background overlay */}
      <div className="absolute inset-0 bg-dark-mandala opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Chef/Restaurant Pitch */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-none border border-[#D4AF37]/45 bg-[#F27D26]/10 text-[#F27D26] flex items-center justify-center">
                <Utensils className="w-4 h-4" />
              </div>
              <span className="font-serif font-bold text-lg text-cream tracking-tight uppercase">Mahadev Dhaba</span>
            </div>
            
            <p className="text-xs font-sans leading-relaxed text-gray-400">
              Famous family-friendly vegetarian restaurant located at Tikha, Phephana, Ballia, UP. Best destination for pure vegetarian platters, private cabins, secure parking and swift tandoor cooking. Serving happiness daily since years.
            </p>

            <div className="flex items-center gap-1.5 bg-white/5 border border-[#D4AF37]/25 p-2.5 rounded-none max-w-xs">
              <Star className="w-4 h-4 fill-gold text-gold" />
              <Star className="w-4 h-4 fill-gold text-gold" />
              <Star className="w-4 h-4 fill-gold text-gold" />
              <Star className="w-4 h-4 fill-gold text-gold" />
              <Star className="w-4 h-4 fill-gold text-gold" />
              <span className="text-[10px] text-gold font-bold font-serif ml-1">4.6/5 stars on Google Reviews</span>
            </div>
          </div>

          {/* Quick links block */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-bold text-gold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <a href="#home" onClick={(e) => handleLink(e, 'home')} className="hover:text-saffron-light transition-colors">
                  Home (मुख्य)
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLink(e, 'about')} className="hover:text-saffron-light transition-colors">
                  About Us (परिचय)
                </a>
              </li>
              <li>
                <a href="#menu" onClick={(e) => handleLink(e, 'menu')} className="hover:text-saffron-light transition-colors">
                  Our Menu (मेनू)
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleLink(e, 'gallery')} className="hover:text-saffron-light transition-colors">
                  Photo Gallery (गैलरी)
                </a>
              </li>
              <li>
                <a href="#facilities" onClick={(e) => handleLink(e, 'facilities')} className="hover:text-saffron-light transition-colors">
                  Facilities (सुविधाएं)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold text-gold uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3 text-xs font-sans">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-saffron shrink-0 mt-0.5" />
                <span className="leading-relaxed text-gray-400">
                  Tikha, Phephana, Ballia, Uttar Pradesh - 277506
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-saffron shrink-0" />
                <a href="tel:+917880879698" className="hover:text-saffron-light hover:underline font-bold">
                  +91 78808 79698
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-gray-400">
                <Utensils className="w-4 h-4 text-saffron shrink-0 mt-0.5" />
                <span>Open Everyday: <br /><strong className="text-cream text-xs">6:00 AM – 1:00 AM</strong></span>
              </li>
            </ul>
          </div>

          {/* Special location target keywords / SEO items (Footer tags) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold text-gold uppercase tracking-wider">Area Attractions</h4>
            <p className="text-[10px] text-gray-400 leading-normal font-sans">
              Serving exceptional vegetarian delicacies around Ballia, Phephana, Tikha, Rasra, and adjacent travelers connecting highways in Uttar Pradesh.
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[9px] bg-white/5 border border-[#D4AF37]/25 px-2.5 py-0.5 rounded-none text-gray-300 font-mono">#BestDhabaBallia</span>
              <span className="text-[9px] bg-white/5 border border-[#D4AF37]/25 px-2.5 py-0.5 rounded-none text-gray-300 font-mono">#PureVegRestaurant</span>
              <span className="text-[9px] bg-white/5 border border-[#D4AF37]/25 px-2.5 py-0.5 rounded-none text-gray-300 font-mono">#PhephanaFamilyDine</span>
            </div>
          </div>

        </div>

        {/* Dynamic Back-to-top & Social Row */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Social icons */}
          <div className="flex items-center gap-3" id="footer-social-row">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-none bg-white/5 border border-[#D4AF37]/30 hover:border-[#F27D26] hover:bg-[#F27D26]/10 flex items-center justify-center text-cream transition-colors cursor-pointer"
              title="Find us on Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-none bg-white/5 border border-[#D4AF37]/30 hover:border-[#F27D26] hover:bg-[#F27D26]/10 flex items-center justify-center text-cream transition-colors cursor-pointer"
              title="Find us on Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="tel:+917880879698" 
              className="w-8 h-8 rounded-none bg-white/5 border border-[#D4AF37]/30 hover:border-[#F27D26] hover:bg-[#F27D26]/10 flex items-center justify-center text-cream transition-colors cursor-pointer"
              title="Call Mahadev Dhaba"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright description */}
          <span className="text-center text-[11px] text-gray-400 font-sans">
            &copy; {currentYear} Mahadev Dhaba &amp; Family Restaurant. All rights reserved. <br />
            <span className="text-[10px] text-gold/60">Designed with absolute premium hospitality standards.</span>
          </span>

          {/* Scroll to top button */}
          <button
            id="back-to-top-footer"
            onClick={handleScrollToTop}
            className="p-3.5 bg-[#1A3C34] hover:bg-[#F27D26] text-white border border-[#D4AF37]/30 rounded-none transition-all transform hover:-translate-y-0.5 shadow-sm flex items-center gap-1 cursor-pointer text-[10px] tracking-widest uppercase font-extrabold"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Go Up</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
