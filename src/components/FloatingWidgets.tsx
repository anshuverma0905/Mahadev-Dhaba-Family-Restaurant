import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MenuItem } from '../types';
import { MessageCircle, Phone, ArrowUp, ShoppingBasket, Send, X, Plus, Minus, CheckCircle, Utensils, MessageSquare } from 'lucide-react';

interface FloatingWidgetsProps {
  isDarkMode: boolean;
  cartItems: { [id: string]: number };
  onAddToCart: (item: MenuItem) => void;
  onRemoveFromCart: (item: MenuItem) => void;
  onClearCart: () => void;
  menuItems: MenuItem[];
}

export default function FloatingWidgets({
  isDarkMode,
  cartItems,
  onAddToCart,
  onRemoveFromCart,
  onClearCart,
  menuItems,
}: FloatingWidgetsProps) {
  const [showCartDrawer, setShowCartDrawer] = useState(false);
  const [isScrollToTopVisible, setIsScrollToTopVisible] = useState(false);

  // Monitor scroll for backing to top
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrollToTopVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalItemCount = Object.values(cartItems).reduce((acc, qty) => acc + qty, 0);

  // Filter items in the cart to render the list
  const selectedItems = menuItems
    .filter((item) => cartItems[item.id] > 0)
    .map((item) => ({
      ...item,
      quantity: cartItems[item.id],
    }));

  const totalPrice = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const submitOrderToWhatsApp = () => {
    if (selectedItems.length === 0) {
      // Empty order, send general enquiry
      const text = `Hello Mahadev Dhaba & Family Restaurant! I am checking your premium website and wanted to make a lunch/dinner general enquiry or book a family cabin. Please contact me back!`;
      window.open(`https://wa.me/917880879698?text=${encodeURIComponent(text)}`, '_blank');
      return;
    }

    // Prefill customized menu order list
    const orderLines = selectedItems.map(
      (item) => `• ${item.quantity}x ${item.name} (${item.hindiName}) - ₹${item.price * item.quantity}`
    );
    
    const text = `Hello Mahadev Dhaba! I want to place a quick food order for pickup/dining:\n\n` +
      `${orderLines.join('\n')}\n\n` +
      `*Total Price:* ₹${totalPrice}\n` +
      `*Order Medium:* Direct Web-Draft Order\n\n` +
      `Please confirm cooking time & availability. Thanks!`;

    window.open(`https://wa.me/917880879698?text=${encodeURIComponent(text)}`, '_blank');
    setShowCartDrawer(false);
    onClearCart();
  };

  return (
    <>
      {/* Floating Action Buttons Left/Right */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end select-none">
        {/* Back to top indicator */}
        <AnimatePresence>
          {isScrollToTopVisible && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={handleScrollToTop}
              className="p-3 bg-gold hover:bg-gold-light text-forest-dark rounded-none border border-[#D4AF37]/35 shadow-md transition-all text-xs cursor-pointer flex items-center justify-center"
              title="Scroll to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Call Now Floating circular button */}
        <a
          href="tel:+917880879698"
          className="p-3 bg-saffron hover:bg-saffron-dark text-white rounded-none border border-[#D4AF37]/35 shadow-md transition-all flex items-center justify-center animate-pulse-subtle"
          title="Call Now"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* WhatsApp Chat & Order Trigger Button */}
        <button
          onClick={() => setShowCartDrawer(!showCartDrawer)}
          className="p-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-none border border-[#D4AF37]/35 shadow-lg transition-all flex items-center justify-center relative cursor-pointer"
          title="Order/Chat via WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
          
          {/* Cart items red counts */}
          {totalItemCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 h-6 min-w-6 px-1 rounded-none bg-red-600 text-[10px] font-extrabold text-white flex items-center justify-center border-2 border-white scale-102">
              {totalItemCount}
            </span>
          )}
        </button>
      </div>

      {/* Floating Sticky Bottom Cart Notification Strip - Displays only when items on cart, helps conversion */}
      <AnimatePresence>
        {totalItemCount > 0 && !showCartDrawer && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className={`fixed bottom-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-96 z-35 p-3 rounded-none border flex items-center justify-between gap-3 shadow-lg backdrop-blur-md ${
              isDarkMode ? 'bg-forest-dark/95 border-[#D4AF37]/30 text-cream' : 'bg-white/95 border-[#D4AF37]/30 text-forest-dark'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-none bg-[#F27D26]/10 border border-[#F27D26]/30 flex items-center justify-center text-saffron">
                <ShoppingBasket className="w-5 h-5 animate-bounce" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold leading-normal block">
                  Quick Tray: {totalItemCount} Items
                </span>
                <span className="text-[10px] text-gold font-bold block leading-none">
                  Total Draft: ₹{totalPrice}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowCartDrawer(true)}
                className="px-3 py-1.5 bg-saffron hover:bg-saffron-dark text-white rounded-none border border-[#D4AF37]/25 text-[10px] sm:text-xs font-bold transition-colors cursor-pointer"
              >
                Draft Order
              </button>
              <button
                onClick={onClearCart}
                className="p-1 hover:bg-red-500/10 text-red-500 rounded"
                title="Discard tray"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Cart Drawer Overlay Panel */}
      <AnimatePresence>
        {showCartDrawer && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCartDrawer(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs z-45"
            ></motion.div>

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`fixed top-0 right-0 w-full max-w-sm h-full z-50 flex flex-col justify-between shadow-2xl border-l border-[#D4AF37]/30 ${
                isDarkMode ? 'bg-forest-dark text-cream' : 'bg-cream text-forest-dark'
              }`}
            >
              {/* Header */}
              <div className="p-5 border-b border-gold/20 flex items-center justify-between">
                <div className="flex items-center gap-2 text-gold">
                  <ShoppingBasket className="w-5 h-5 text-saffron" />
                  <div>
                    <h4 className="font-serif font-bold text-base">Quick Order Tray</h4>
                    <span className="text-[10px] text-gray-400 block leading-none">WhatsApp order configurator</span>
                  </div>
                </div>

                <button
                  onClick={() => setShowCartDrawer(false)}
                  className="p-2 rounded-none border border-gold/15 hover:bg-gold/15 cursor-pointer"
                  title="Close tray"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable list */}
              <div className="grow overflow-y-auto p-5 space-y-4">
                {selectedItems.length === 0 ? (
                  <div className="text-center py-16 text-gray-400 flex flex-col items-center gap-3">
                    <Utensils className="w-12 h-12 stroke-1 text-gold/30 animate-spin-slow" />
                    <p className="text-sm font-semibold">Your culinary tray is empty.</p>
                    <p className="text-xs font-sans leading-relaxed">Go to our Special Menu &amp; select dishes to dynamically draft an order here!</p>
                    
                    {/* General chat CTA */}
                    <button
                      onClick={submitOrderToWhatsApp}
                      className="mt-6 px-4 py-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-[10px] uppercase tracking-widest font-bold rounded-none flex items-center gap-1.5 cursor-pointer border border-[#25D366]/40"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-white" />
                      <span>General WhatsApp Enquire</span>
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between border-b border-gold/5 pb-2">
                      <span className="text-xs font-bold">Drafting Items:</span>
                      <button 
                        onClick={onClearCart}
                        className="text-[10px] uppercase tracking-wider font-extrabold text-red-500 hover:underline cursor-pointer"
                      >
                        Clear Tray
                      </button>
                    </div>

                    <div className="space-y-3.5">
                      {selectedItems.map((item) => (
                        <div 
                          key={item.id} 
                          className={`p-3 rounded-none border flex items-center justify-between gap-3 ${
                            isDarkMode ? 'bg-forest/40 border-gold/10' : 'bg-white border-gold/10'
                          }`}
                        >
                          <div>
                            <span className="text-xs font-bold block">{item.name}</span>
                            <span className="text-[10px] text-saffron font-bold block">{item.hindiName}</span>
                            <span className="text-[10px] text-gray-400 block mt-0.5">₹{item.price} each</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => onRemoveFromCart(item)}
                              className="p-1 hover:bg-red-500/10 text-red-500 rounded"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold font-mono">{item.quantity}</span>
                            <button
                              onClick={() => onAddToCart(item)}
                              className="p-1 hover:bg-saffron/15 text-saffron rounded"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Drawer footer summary */}
              {selectedItems.length > 0 && (
                <div className={`p-5 border-t border-gold/20 space-y-4 ${
                  isDarkMode ? 'bg-forest-dark/95' : 'bg-cream-dark/50'
                }`}>
                  <div className="flex items-center justify-between text-sm animate-pulse-subtle">
                    <span className="font-semibold">Estimated Total:</span>
                    <strong className="text-lg text-saffron font-serif font-bold">₹{totalPrice}</strong>
                  </div>

                  <p className="text-[10px] text-gray-400 leading-normal">
                    This order will be prefilled inside your WhatsApp message to Mahadev Restaurant staff. You can edit or add notes in WhatsApp before sending. Free pickup.
                  </p>

                  <button
                    onClick={submitOrderToWhatsApp}
                    className="w-full py-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-sans text-[10px] uppercase tracking-widest font-bold rounded-none transition-colors flex items-center justify-center gap-2 cursor-pointer border border-[#25D366]/40"
                  >
                    <Send className="w-4 h-4 fill-white" />
                    <span>Send Order to WhatsApp Manager</span>
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
