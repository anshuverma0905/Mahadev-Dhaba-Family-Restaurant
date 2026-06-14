import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MenuItem, MENU_ITEMS } from '../types';
import { ShoppingBag, Flame, Star, Sparkles, MessageSquare, PhoneCall, Plus, Minus, Trash2 } from 'lucide-react';

interface MenuSectionProps {
  isDarkMode: boolean;
  onAddToCart: (item: MenuItem) => void;
  onRemoveFromCart: (item: MenuItem) => void;
  cartItems: { [id: string]: number };
}

export default function MenuSection({ isDarkMode, onAddToCart, onRemoveFromCart, cartItems }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: 'Full Menu', hindi: 'सभी व्यंजन' },
    { key: 'main', label: 'Main Course', hindi: 'कढ़ाई सब्जियां' },
    { key: 'thali', label: 'Khas Thali', hindi: 'महादेव स्पेशल थाली' },
    { key: 'bread', label: 'Tandoori Roti', hindi: 'रोटी एवं नान' },
    { key: 'drinks', label: 'Drinks & Desserts', hindi: 'पेय और लस्सी' },
    { key: 'specials', label: 'Seasonal', hindi: 'विशेष व्यंजन' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section
      id="menu"
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode ? 'bg-forest-dark text-cream' : 'bg-cream text-forest-dark'
      }`}
    >
      {/* Background Ornament pattern */}
      <div className="absolute inset-0 bg-mandala pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2 mb-12">
          <span className="text-saffron font-semibold text-xs tracking-widest uppercase flex items-center gap-1.5 justify-center">
            <span className="h-[1px] w-5 bg-saffron"></span>
            Sensational Platters
            <span className="h-[1px] w-5 bg-saffron"></span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            Our Traditional <span className="text-gold italic font-medium">Veg Specialties</span>
          </h2>
          <span className="text-xs font-serif text-gold font-medium">महादेव ढाबा का विशेष स्वादिष्ट मेनू कार्ड</span>
          <p className="text-sm max-w-xl text-gray-400 mt-2">
            Every dish is prepared using fresh ingredients, native spices, and purified water under hygienic standards to deliver authentic Punjabi &amp; North Indian flavors.
          </p>
        </div>

        {/* Category Filters */}
        <div id="category-filters" className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              id={`filter-btn-${cat.key}`}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-3 rounded-none text-xs font-bold uppercase tracking-widest transition-all duration-300 flex flex-col items-center gap-0.5 cursor-pointer border ${
                activeCategory === cat.key
                  ? 'bg-[#1A3C34] text-white border-[#D4AF37] shadow-md scale-102 font-extrabold'
                  : isDarkMode 
                  ? 'bg-forest/55 border-[#D4AF37]/20 text-cream/80 hover:bg-[#1A3C34] hover:text-white'
                  : 'bg-white border-[#D4AF37]/20 text-[#1A3C34] hover:bg-[#F9F7F2]'
              }`}
            >
              <span>{cat.label}</span>
              <span className="text-[10px] opacity-75 font-serif font-normal lowercase tracking-wide italic">{cat.hindi}</span>
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="menu-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const qty = cartItems[item.id] || 0;
              return (
                <motion.div
                  key={item.id}
                  id={`menu-card-${item.id}`}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className={`flex flex-col rounded-none overflow-hidden border shadow-sm group relative h-full transition-shadow duration-300 ${
                    isDarkMode 
                      ? 'bg-forest/40 border-[#D4AF37]/15 hover:border-[#D4AF37]/35' 
                      : 'bg-white border-[#D4AF37]/25 hover:border-[#D4AF37]/45'
                  }`}
                >
                  {/* Food Image Container */}
                  <div className="h-48 overflow-hidden relative shrink-0 border-b border-[#D4AF37]/15">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Floating Accent Tag */}
                    {item.tag && (
                      <span className="absolute top-3 left-3 bg-[#F27D26] text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-none shadow-sm flex items-center gap-1 border border-[#D4AF37]/20">
                        <Flame className="w-3 h-3 fill-white text-white" />
                        {item.tag}
                      </span>
                    )}

                    {/* Saffron Price floating card */}
                    <span className="absolute right-3 bottom-0 translate-y-0.5 bg-[#1A3C34] border border-[#D4AF37]/30 text-white font-serif font-bold text-sm px-3.5 py-1 rounded-none">
                      ₹{item.price}
                    </span>
                  </div>

                  {/* Text details content */}
                  <div className="p-5 flex flex-col justify-between flex-grow gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-serif font-bold text-lg text-[#1A3C34] dark:text-cream">{item.name}</h3>
                        <span className="text-xs text-[#F27D26] font-bold font-serif">{item.hindiName}</span>
                      </div>
                      <p className={`text-xs leading-relaxed font-sans ${isDarkMode ? 'text-cream/75' : 'text-[#1A3C34]/75'}`}>
                        {item.description}
                      </p>
                    </div>

                    {/* Action buttons (Add to Order) */}
                    <div className="flex items-center justify-between border-t border-[#D4AF37]/20 pt-4 mt-auto">
                      <div className="flex items-center gap-1 text-[10px] text-gray-500 font-bold uppercase tracking-wider font-sans">
                        <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                        <span>4.8 Rating</span>
                      </div>

                      {qty > 0 ? (
                        <div className="flex items-center gap-3 bg-[#1A3C34] text-white border border-[#D4AF37]/30 rounded-none px-2.5 py-1">
                          <button 
                            onClick={() => onRemoveFromCart(item)}
                            className="p-1 hover:text-[#F27D26] transition-colors cursor-pointer"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="font-bold font-sans text-sm min-w-4 text-center">{qty}</span>
                          <button 
                            onClick={() => onAddToCart(item)}
                            className="p-1 hover:text-[#F27D26] transition-colors cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <button
                          id={`add-to-cart-${item.id}`}
                          onClick={() => onAddToCart(item)}
                          className="bg-transparent hover:bg-[#F27D26] hover:text-white border border-[#F27D26] text-[#F27D26] font-sans text-[10px] uppercase tracking-widest font-bold px-4 py-2 rounded-none transition-all flex items-center gap-1 cursor-pointer"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          Quick Add
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Quick Menu Footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 text-center p-5 rounded-none bg-[#F9F7F2] dark:bg-white/5 border border-[#D4AF37]/30 max-w-2xl mx-auto"
        >
          <p className="text-xs sm:text-sm font-sans tracking-wide leading-relaxed text-[#1A3C34] dark:text-cream">
            📝 <strong>Need a specific dish customization?</strong> (Less oil, extra spicy, child-friendly, no garlic/onion)? Just let our culinary staff know during reservation or call us directly!
          </p>
        </motion.div>

      </div>
    </section>
  );
}
