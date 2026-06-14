import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Phone, Calendar, MapPin, Utensils } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  activeSection: string;
  setActiveSection: (val: string) => void;
  onOpenReservation: () => void;
  onOpenQuickOrder: () => void;
}

export default function Header({
  isDarkMode,
  setIsDarkMode,
  activeSection,
  setActiveSection,
  onOpenReservation,
  onOpenQuickOrder,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Special Menu', href: '#menu', id: 'menu' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Facilities', href: '#facilities', id: 'facilities' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? isDarkMode
              ? 'bg-forest-dark/95 backdrop-blur-md border-b border-gold/20 shadow-lg py-3'
              : 'bg-cream/95 backdrop-blur-md border-b border-gold/20 shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#home"
            id="logo-brand"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home');
            }}
            className="flex flex-col select-none group"
          >
            <h1 className={`font-serif text-2xl font-bold tracking-tight leading-none ${
              isDarkMode ? 'text-cream' : 'text-[#1A3C34]'
            }`}>
              MAHADEV DHABA
            </h1>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mt-1">
              Family Restaurant • Ballia
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" id="desktop-navbar">
            <div className="flex items-center gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  id={`nav-link-${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.id);
                  }}
                  className={`relative font-sans text-[11px] uppercase tracking-widest font-bold transition-all py-1.5 ${
                    activeSection === link.id
                      ? 'text-[#F27D26]'
                      : isDarkMode
                      ? 'text-cream/80 hover:text-[#F27D26]'
                      : 'text-[#1A3C34] hover:text-[#F27D26]'
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-[#F27D26]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Vertical Divider */}
            <div className={`h-6 w-[1px] ${isDarkMode ? 'bg-[#D4AF37]/30' : 'bg-[#D4AF37]/30'}`}></div>

            {/* Right side actions */}
            <div className="flex items-center gap-3">
              {/* Dark Mode toggle Button */}
              <button
                id="theme-toggler"
                onClick={() => setIsDarkMode(!isDarkMode)}
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                className={`p-2 rounded-none border transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                  isDarkMode
                    ? 'border-[#D4AF37]/30 bg-forest text-gold-light hover:bg-forest-light'
                    : 'border-[#D4AF37]/30 bg-cream-dark text-saffron hover:bg-gold/10'
                }`}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Call Now Button */}
              <a
                href="tel:+917880879698"
                id="call-now-desktop"
                className={`p-2 rounded-none border border-[#D4AF37]/30 flex items-center justify-center transition-all duration-300 hover:scale-105 ${
                  isDarkMode
                    ? 'bg-forest text-cream hover:bg-forest-light'
                    : 'bg-cream-dark text-forest-dark hover:bg-gold/10'
                }`}
                title="Call Restaurant"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* Reserve Button */}
              <button
                id="book-table-desktop"
                onClick={onOpenReservation}
                className="bg-[#1A3C34] hover:bg-[#F27D26] text-white px-6 py-2.5 text-[11px] uppercase tracking-widest hover:text-white transition-colors rounded-none font-bold border border-[#D4AF37]/40 cursor-pointer"
              >
                Book a Table
              </button>
            </div>
          </nav>

          {/* Mobile Right Bar Tools */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Quick Dark Mode indicator */}
            <button
              id="theme-toggler-mobile"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full border transition-all duration-300 ${
                isDarkMode
                  ? 'border-gold/20 bg-forest text-gold-light'
                  : 'border-gold/20 bg-cream-dark text-saffron'
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Booking Trigger */}
            <button
              id="mobile-reserve-trigger"
              onClick={onOpenReservation}
              className="bg-saffron text-white p-2.5 rounded-full hover:bg-saffron-dark transition-colors"
              title="Book Table"
            >
              <Calendar className="w-4 h-4" />
            </button>

            {/* Hamburges Menu Button */}
            <button
              id="mobile-menu-trigger"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg border focus:outline-none transition-colors ${
                isDarkMode
                  ? 'border-gold/20 bg-forest text-cream hover:bg-forest-light'
                  : 'border-gold/20 bg-cream-dark text-forest hover:bg-gold/10'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className={`fixed top-[62px] left-0 w-full h-[calc(100vh-62px)] z-30 lg:hidden overflow-y-auto ${
              isDarkMode ? 'bg-forest-dark/98 border-t border-gold/15' : 'bg-cream/98 border-t border-gold/15'
            }`}
          >
            {/* Elegant Mandala Background inside panel */}
            <div className="absolute inset-0 bg-mandala pointer-events-none"></div>

            <div className="relative px-6 py-8 flex flex-col gap-6 h-full justify-between pb-20">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold border-b border-gold/10 pb-2">
                  Navigation Menu
                </span>
                <div className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      id={`nav-link-mobile-${link.id}`}
                      onClick={() => handleLinkClick(link.id)}
                      className={`text-left font-serif text-xl font-medium tracking-wide py-1.5 border-l-2 pl-3 transition-all ${
                        activeSection === link.id
                          ? 'border-saffron text-saffron font-bold'
                          : isDarkMode
                          ? 'border-transparent text-cream/70 hover:text-cream'
                          : 'border-transparent text-forest/70 hover:text-forest-dark'
                      }`}
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Call & Location Info */}
              <div className="flex flex-col gap-4 bg-gold/10 p-5 rounded-xl border border-gold/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-saffron/20 border border-saffron/30 flex items-center justify-center text-saffron">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block">Call and Order Food</span>
                    <a href="tel:+917880879698" className="font-sans font-bold text-base text-saffron hover:underline">
                      +91 78808 79698
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-forest-light/20 border border-forest-light/30 flex items-center justify-center text-forest-light">
                    <MapPin className="w-5 h-5 text-saffron" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block">Our Location</span>
                    <span className={`text-xs font-semibold ${isDarkMode ? 'text-cream/90' : 'text-forest-dark'}`}>
                      Tikha, Phephana, Ballia, UP
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-2">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenReservation();
                    }}
                    className="w-full bg-saffron hover:bg-saffron-dark text-white text-xs font-bold py-3 rounded-lg text-center"
                  >
                    Reserve Table
                  </button>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenQuickOrder();
                    }}
                    className="w-full bg-transparent border border-saffron text-saffron hover:bg-saffron/10 text-xs font-bold py-3 rounded-lg text-center"
                  >
                    Quick Order
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
