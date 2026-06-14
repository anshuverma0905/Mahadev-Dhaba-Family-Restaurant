import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Mail, Navigation, ExternalLink, CalendarRange } from 'lucide-react';

interface ContactSectionProps {
  isDarkMode: boolean;
}

export default function ContactSection({ isDarkMode }: ContactSectionProps) {
  const mapIframeUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.9567822998634!2d84.07727197541604!3d25.755452277358782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992451f2f8af125%3A0xe54e2fe729bf3368!2sMahadev%20Dhaba%20%26%20Family%20Restaurant!5e0!3m2!1sen!2sin!4v1718360000000!5m2!1sen!2sin";

  return (
    <section
      id="contact"
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode ? 'bg-forest-dark text-cream' : 'bg-cream text-forest-dark'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center gap-2 mb-16">
          <span className="text-saffron font-semibold text-xs tracking-widest uppercase flex items-center gap-1.5 justify-center">
            <span className="h-[1px] w-5 bg-saffron"></span>
            Find Culinary Heaven
            <span className="h-[1px] w-5 bg-saffron"></span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            Contact &amp; <span className="text-gold italic font-medium font-serif">Directions</span>
          </h2>
          <span className="text-xs font-serif text-gold font-medium">संपर्क सूत्र और मार्ग दर्शन मार्ग चित्र</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-inner-grid">
          
          {/* Left Column: Contact details card */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`p-6 sm:p-8 rounded-none border shadow-sm flex-grow flex flex-col justify-between ${
                isDarkMode ? 'bg-forest/50 border-[#D4AF37]/30' : 'bg-white border-[#D4AF37]/30'
              }`}
            >
              <div className="space-y-6">
                <div className="flex flex-col border-b border-[#D4AF37]/20 pb-4">
                  <h3 className="font-serif font-bold text-xl text-[#1A3C34] dark:text-gold">Mahadev Dhaba &amp; Family Restaurant</h3>
                  <span className="text-xs text-[#F27D26] font-semibold mt-1">महादेव ढाबा और फैमिली रेस्टोरेंट</span>
                </div>

                {/* Info lists */}
                <div className="space-y-5">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-none bg-[#F27D26]/15 border border-[#F27D26]/30 flex items-center justify-center text-[#F27D26] shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Our Address</span>
                      <p className="text-sm font-semibold max-w-xs leading-relaxed mt-0.5">
                        Tikha, Phephana, Ballia, Uttar Pradesh 277506
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-none bg-[#F27D26]/15 border border-[#F27D26]/30 flex items-center justify-center text-[#F27D26] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Phone / WhatsApp</span>
                      <a href="tel:+917880879698" className="text-base font-bold text-[#F27D26] block hover:underline mt-0.5">
                        +91 78808 79698
                      </a>
                    </div>
                  </div>

                  {/* Opening hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-none bg-[#F27D26]/15 border border-[#F27D26]/30 flex items-center justify-center text-[#F27D26] shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Opening Hours</span>
                      <p className="text-sm font-semibold mt-0.5">
                        Open Daily (7 Days a week)
                      </p>
                      <span className="text-xs text-gold font-bold font-mono">
                        6:00 AM – 1:00 AM (Late Night)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instant Call CTA Inside card */}
              <div className="mt-8 pt-6 border-t border-[#D4AF37]/20 flex flex-wrap gap-3">
                <a
                  href="tel:+917880879698"
                  className="px-5 py-3.5 bg-[#1A3C34] hover:bg-[#F27D26] text-white border border-[#D4AF37]/35 rounded-none text-xs uppercase tracking-widest font-extrabold transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>Call Right Now</span>
                </a>
                
                <a
                  href="https://maps.google.com/?q=Mahadev+Dhaba+Family+Restaurant+Tikha+Phephana+Ballia+Uttar+Pradesh+277506"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-5 py-3.5 rounded-none text-xs uppercase tracking-widest font-extrabold transition-all flex items-center gap-1.5 border border-[#D4AF37]/35 cursor-pointer ${
                    isDarkMode ? 'bg-forest hover:bg-forest-light' : 'bg-transparent hover:bg-gray-100'
                  }`}
                >
                  <Navigation className="w-4 h-4 text-[#D4AF37]" />
                  <span>Get Driving Route</span>
                </a>
              </div>
            </motion.div>

            {/* Minor distance note indicator */}
            <div className="p-4 rounded-none bg-[#F9F7F2] dark:bg-white/5 border border-[#D4AF37]/25 text-[11px] text-gray-400 leading-normal flex items-center gap-2">
              <CalendarRange className="w-4 h-4 text-[#F27D26]" shrink-0="true" />
              <span>Perfect location on the road connecting Ballia and Rasra. Travelers from nearby districts can find us extremely easily!</span>
            </div>

          </div>

          {/* Right Column: Embedded Map Iframe */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-none overflow-hidden border border-[#D4AF37]/35 shadow-sm h-[450px] relative flex-grow"
            >
              <iframe
                title="Mahadev Dhaba & Family Restaurant Google Map Location"
                src={mapIframeUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full"
              ></iframe>
              
              {/* Overlay Badge for maps redirect */}
              <div className="absolute top-4 left-4 bg-forest-dark/95 backdrop-blur-sm px-3 py-1.5 rounded-none border border-[#D4AF37]/35 text-xs font-bold text-cream flex items-center gap-1">
                <span>📍 Tikha, Phephana, Ballia, UP</span>
                <a 
                  href="https://maps.google.com/?q=Mahadev+Dhaba+Family+Restaurant+Tikha+Phephana+Ballia+Uttar+Pradesh+277506"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-[#F27D26] transition-colors cursor-pointer ml-1"
                  title="Open on Google Maps App"
                >
                  <ExternalLink className="w-3.5 h-3.5 inline" />
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
