import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/MenuSection';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import GallerySection from './components/GallerySection';
import Facilities from './components/Facilities';
import ReservationSection from './components/ReservationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import { MENU_ITEMS, MenuItem } from './types';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('mahadev_theme');
    return saved ? saved === 'dark' : false;
  });

  const [activeSection, setActiveSection] = useState<string>('home');
  const [cartItems, setCartItems] = useState<{ [id: string]: number }>({});

  useEffect(() => {
    localStorage.setItem('mahadev_theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Track active section on scroll
  useEffect(() => {
    const sections = ['home', 'about', 'menu', 'why-us', 'gallery', 'facilities', 'contact'];
    
    const handleScrollIntersection = () => {
      const scrollPosition = window.scrollY + 120; // adding offset
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollIntersection);
    return () => window.removeEventListener('scroll', handleScrollIntersection);
  }, []);

  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1,
    }));
  };

  const handleRemoveFromCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const currentQty = prev[item.id] || 0;
      if (currentQty <= 1) {
        const copy = { ...prev };
        delete copy[item.id];
        return copy;
      }
      return {
        ...prev,
        [item.id]: currentQty - 1,
      };
    });
  };

  const handleClearCart = () => {
    setCartItems({});
  };

  const scrollSectionWithOffset = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-[#07150E] text-cream' : 'bg-[#FCF9F3] text-forest-dark'
    }`}>
      {/* Dynamic Header */}
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenReservation={() => scrollSectionWithOffset('reservation')}
        onOpenQuickOrder={() => {
          // Triggers opening WhatsApp drawer/modal
          const btn = document.querySelector('[title="Order/Chat via WhatsApp"]');
          if (btn) (btn as HTMLButtonElement).click();
        }}
      />

      {/* Main Sections */}
      <main>
        {/* Hero Area */}
        <Hero
          onReserveClick={() => scrollSectionWithOffset('reservation')}
          onExploreMenuClick={() => scrollSectionWithOffset('menu')}
        />

        {/* About Section */}
        <About
          isDarkMode={isDarkMode}
          onExploreMenu={() => scrollSectionWithOffset('menu')}
        />

        {/* Special Menu section */}
        <MenuSection
          isDarkMode={isDarkMode}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          cartItems={cartItems}
        />

        {/* Why Choose Us */}
        <WhyChooseUs isDarkMode={isDarkMode} />

        {/* Reviews Testimonial Slide */}
        <Reviews isDarkMode={isDarkMode} />

        {/* Lightbox Gallery */}
        <GallerySection isDarkMode={isDarkMode} />

        {/* Facilities amenities */}
        <Facilities isDarkMode={isDarkMode} />

        {/* Reservations bookings */}
        <ReservationSection isDarkMode={isDarkMode} isOpen={false} />

        {/* Contact and Google Maps embed */}
        <ContactSection isDarkMode={isDarkMode} />
      </main>

      {/* Footer copyright and keywords */}
      <Footer
        isDarkMode={isDarkMode}
        onLinkClick={scrollSectionWithOffset}
      />

      {/* Floating utility widgets representing Quick WhatsApp Baskets & back-to-tops */}
      <FloatingWidgets
        isDarkMode={isDarkMode}
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
        menuItems={MENU_ITEMS}
      />
    </div>
  );
}
