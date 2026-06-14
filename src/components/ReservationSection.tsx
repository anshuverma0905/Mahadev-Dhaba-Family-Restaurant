import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Reservation } from '../types';
import { Calendar, Phone, Users, Clock, FileText, CheckCircle, Ticket, Trash2, CalendarDays, ClipboardCheck } from 'lucide-react';

interface ReservationSectionProps {
  isDarkMode: boolean;
  isOpen: boolean; // can also scroll directly, but we let it be directly embedded as section
}

export default function ReservationSection({ isDarkMode }: ReservationSectionProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('19:00');
  const [specialRequest, setSpecialRequest] = useState('');
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successTicket, setSuccessTicket] = useState<Reservation | null>(null);
  const [myReservations, setMyReservations] = useState<Reservation[]>([]);
  const [showMyBookings, setShowMyBookings] = useState(false);

  // Load existing reservations from localStorage on load
  useEffect(() => {
    const saved = localStorage.getItem('mahadev_reservations');
    if (saved) {
      try {
        setMyReservations(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const validateForm = () => {
    const err: { [key: string]: string } = {};
    if (!name.trim()) err.name = 'Please provide your full name.';
    
    // basic Indian phone format check
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      err.phone = 'Please enter a valid 10-digit mobile number.';
    }
    
    if (!date) {
      err.date = 'Please pick a dining date.';
    } else {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (selectedDate < today) {
        err.date = 'Booking date cannot be in the past.';
      }
    }

    if (!time) {
      err.time = 'Please select your dinner/lunch time.';
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const bookingId = 'MDR-' + Math.floor(10000 + Math.random() * 90000);
    const newReservation: Reservation = {
      id: bookingId,
      name,
      phone,
      guests,
      date,
      time,
      specialRequest,
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };

    const updated = [newReservation, ...myReservations];
    setMyReservations(updated);
    localStorage.setItem('mahadev_reservations', JSON.stringify(updated));
    setSuccessTicket(newReservation);
    
    // Clear Form fields
    setName('');
    setPhone('');
    setGuests(2);
    setDate('');
    setSpecialRequest('');
  };

  const handleCancelBooking = (id: string) => {
    const updated = myReservations.filter(res => res.id !== id);
    setMyReservations(updated);
    localStorage.setItem('mahadev_reservations', JSON.stringify(updated));
  };

  const shareOnWhatsApp = (res: Reservation) => {
    const text = `Hello Mahadev Dhaba! I have reserved a dining table via your website.\n\n` +
      `*Booking ID:* ${res.id}\n` +
      `*Name:* ${res.name}\n` +
      `*WhatsApp/Call:* ${res.phone}\n` +
      `*Guests:* ${res.guests} Persons\n` +
      `*Date:* ${res.date}\n` +
      `*Time:* ${res.time}\n` +
      `*Special Preference:* ${res.specialRequest || 'None'}\n\n` +
      `Please keep the family cabin ready. Thank you!`;
    
    window.open(`https://wa.me/917880879698?text=${encodeURIComponent(text)}`, '_blank');
  };

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <section
      id="reservation"
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode ? 'bg-forest text-cream' : 'bg-cream-dark text-forest-dark'
      }`}
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-saffron/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Reservation heading */}
        <div className="flex flex-col items-center text-center gap-2 mb-12">
          <span className="text-saffron font-semibold text-xs tracking-widest uppercase flex items-center gap-1.5 justify-center">
            <span className="h-[1px] w-5 bg-saffron"></span>
            Private Cabin Dining
            <span className="h-[1px] w-5 bg-saffron"></span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            Reserve Your <span className="text-gold italic font-medium">Family Table</span>
          </h2>
          <span className="text-xs font-serif text-gold font-medium">कैबिन या डाइनिंग टेबल की अग्रिम बुकिंग</span>
          <p className="text-xs sm:text-sm text-gray-400 max-w-lg mt-2">
            Planning a family feast, traveler stopover, or birthday celebration? Pre-book your favorite table cabin to enjoy quick cooking, fresh hygiene and zero wait times.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Reservation Action block / Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!successTicket ? (
                <motion.div
                  key="booking-form"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className={`p-6 sm:p-8 rounded-none border shadow-sm ${
                    isDarkMode ? 'bg-forest-dark/95 border-[#D4AF37]/30' : 'bg-white border-[#D4AF37]/30'
                  }`}
                >
                  <h3 className="font-serif font-bold text-xl mb-6 border-b border-[#D4AF37]/20 pb-3 text-[#1A3C34] dark:text-[#D4AF37] flex items-center gap-2">
                    <ClipboardCheck className="w-5 h-5 text-[#F27D26]" />
                    Enter Booking Details
                  </h3>

                  <form onSubmit={handleBookingSubmit} className="space-y-5" id="booking-web-form">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name input */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold uppercase tracking-widest text-[#1A3C34]/80 dark:text-[#D4AF37] flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-[#F27D26]" />
                          Full Name (पूरा नाम) *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Ramesh Kumar"
                          className={`w-full px-4 py-3 rounded-none border text-sm font-sans focus:outline-none transition-colors ${
                            isDarkMode
                              ? 'bg-forest/40 border-[#D4AF37]/20 text-cream focus:border-[#F27D26]'
                              : 'bg-[#F9F7F2]/60 border-[#D4AF37]/30 text-[#1A3C34] focus:border-[#F27D26]'
                          }`}
                        />
                        {errors.name && <span className="text-[10px] text-red-500 font-bold">{errors.name}</span>}
                      </div>

                      {/* Phone input */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold uppercase tracking-widest text-[#1A3C34]/80 dark:text-[#D4AF37] flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-[#F27D26]" />
                          Mobile Number (मोबाइल) *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 78808 79698"
                          className={`w-full px-4 py-3 rounded-none border text-sm font-sans focus:outline-none transition-colors ${
                            isDarkMode
                              ? 'bg-forest/40 border-[#D4AF37]/20 text-cream focus:border-[#F27D26]'
                              : 'bg-[#F9F7F2]/60 border-[#D4AF37]/30 text-[#1A3C34] focus:border-[#F27D26]'
                          }`}
                        />
                        {errors.phone && <span className="text-[10px] text-red-500 font-bold">{errors.phone}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      {/* Number of guests select */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold uppercase tracking-widest text-[#1A3C34]/80 dark:text-[#D4AF37] flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-[#F27D26]" />
                          Guests count (सदस्य)
                        </label>
                        <select
                          value={guests}
                          onChange={(e) => setGuests(Number(e.target.value))}
                          className={`w-full px-4 py-3 rounded-none border text-sm font-sans focus:outline-none cursor-pointer ${
                            isDarkMode
                              ? 'bg-forest/40 border-[#D4AF37]/20 text-cream focus:border-[#F27D26]'
                              : 'bg-[#F9F7F2]/60 border-[#D4AF37]/30 text-[#1A3C34] focus:border-[#F27D26]'
                          }`}
                        >
                          <option value={1} className={isDarkMode ? 'bg-forest text-cream' : 'bg-white text-forest-dark'}>1 Guest</option>
                          <option value={2} className={isDarkMode ? 'bg-forest text-cream' : 'bg-white text-forest-dark'}>2 Guests</option>
                          <option value={4} className={isDarkMode ? 'bg-forest text-cream' : 'bg-white text-forest-dark'}>3 - 4 Guests</option>
                          <option value={6} className={isDarkMode ? 'bg-forest text-cream' : 'bg-white text-forest-dark'}>5 - 6 Family members</option>
                          <option value={10} className={isDarkMode ? 'bg-forest text-cream' : 'bg-white text-forest-dark'}>8 - 10 Group dining</option>
                          <option value={20} className={isDarkMode ? 'bg-forest text-cream' : 'bg-white text-forest-dark'}>10+ Large Party</option>
                        </select>
                      </div>

                      {/* Date picker */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold uppercase tracking-widest text-[#1A3C34]/80 dark:text-[#D4AF37] flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#F27D26]" />
                          Pick Date (दिनांक) *
                        </label>
                        <input
                          type="date"
                          required
                          min={todayStr}
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className={`w-full px-4 py-2.5 rounded-none border text-sm font-sans focus:outline-none cursor-pointer ${
                            isDarkMode
                              ? 'bg-forest/40 border-[#D4AF37]/20 text-cream focus:border-[#F27D26]'
                              : 'bg-[#F9F7F2]/60 border-[#D4AF37]/30 text-[#1A3C34] focus:border-[#F27D26]'
                          }`}
                        />
                        {errors.date && <span className="text-[10px] text-red-500 font-bold">{errors.date}</span>}
                      </div>

                      {/* Time picker */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold uppercase tracking-widest text-[#1A3C34]/80 dark:text-[#D4AF37] flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#F27D26]" />
                          Time slot (समय) *
                        </label>
                        <select
                          required
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                          className={`w-full px-4 py-3 rounded-none border text-sm font-sans focus:outline-none cursor-pointer ${
                            isDarkMode
                              ? 'bg-forest/40 border-[#D4AF37]/20 text-cream focus:border-[#F27D26]'
                              : 'bg-[#F9F7F2]/60 border-[#D4AF37]/30 text-[#1A3C34] focus:border-[#F27D26]'
                          }`}
                        >
                          <option value="08:00" className={isDarkMode ? 'bg-forest text-cream' : 'bg-white text-forest-dark'}>08:00 AM (Breakfast)</option>
                          <option value="10:00" className={isDarkMode ? 'bg-forest text-cream' : 'bg-white text-forest-dark'}>10:00 AM</option>
                          <option value="12:30" className={isDarkMode ? 'bg-forest text-cream' : 'bg-white text-forest-dark'}>12:30 PM (Lunch)</option>
                          <option value="14:00" className={isDarkMode ? 'bg-forest text-cream' : 'bg-white text-forest-dark'}>02:00 PM</option>
                          <option value="18:00" className={isDarkMode ? 'bg-forest text-cream' : 'bg-white text-forest-dark'}>06:00 PM</option>
                          <option value="19:30" className={isDarkMode ? 'bg-forest text-cream' : 'bg-white text-forest-dark'}>07:30 PM (Early Dinner)</option>
                          <option value="21:00" className={isDarkMode ? 'bg-forest text-cream' : 'bg-white text-forest-dark'}>09:00 PM (Peak Dinner)</option>
                          <option value="22:30" className={isDarkMode ? 'bg-forest text-cream' : 'bg-white text-forest-dark'}>10:30 PM</option>
                          <option value="23:30" className={isDarkMode ? 'bg-forest text-cream' : 'bg-white text-forest-dark'}>11:30 PM (Late-night)</option>
                        </select>
                      </div>
                    </div>

                    {/* Special requests */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#1A3C34]/80 dark:text-[#D4AF37] flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-[#F27D26]" />
                        Special Requests (विशेष मांग - Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={specialRequest}
                        onChange={(e) => setSpecialRequest(e.target.value)}
                        placeholder="e.g. Need cozy private family cabin, child high chair, or simple less spicy dishes."
                        className={`w-full px-4 py-3 rounded-none border text-sm font-sans focus:outline-none transition-colors ${
                          isDarkMode
                            ? 'bg-forest/40 border-[#D4AF37]/20 text-cream focus:border-[#F27D26]'
                            : 'bg-[#F9F7F2]/60 border-[#D4AF37]/30 text-[#1A3C34] focus:border-[#F27D26]'
                        }`}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      id="book-submit-btn"
                      className="w-full py-4 bg-[#1A3C34] hover:bg-[#F27D26] text-white font-sans text-xs uppercase tracking-widest font-extrabold rounded-none border border-[#D4AF37]/30 cursor-pointer flex items-center justify-center gap-2 transition-all"
                    >
                      <CheckCircle className="w-5 h-5 text-[#D4AF37]" />
                      <span>Confirm Cabin Table Reservation</span>
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="booking-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={`p-6 sm:p-8 rounded-none border text-center shadow-lg relative overflow-hidden ${
                    isDarkMode ? 'bg-forest-dark border-[#D4AF37]/30' : 'bg-white border-[#D4AF37]/30'
                  }`}
                >
                  {/* Decorative confetti or radial highlight */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-saffron via-gold to-saffron"></div>

                  <div className="w-16 h-16 bg-[#F27D26]/10 border border-[#F27D26]/30 text-[#F27D26] rounded-none flex items-center justify-center mx-auto mb-5">
                    <Ticket className="w-8 h-8" />
                  </div>

                  <span className="text-xs tracking-widest font-extrabold uppercase text-[#D4AF37]">
                    🎉 Reservation Confirmed 🎉
                  </span>
                  
                  <h3 className="font-serif text-2xl font-bold mt-1 text-[#F27D26]">
                    Your Table is Ready!
                  </h3>
                  
                  <span className="text-xs font-serif text-gray-400 block mt-1">
                    जय श्री महादेव! आपकी टेबल सुरक्षित कर ली गई है।
                  </span>

                  {/* High Quality Styled Ticket receipt */}
                  <div className={`my-6 p-5 rounded-none border text-left space-y-3.5 relative ${
                    isDarkMode ? 'bg-forest/40 border-[#D4AF37]/15' : 'bg-[#F9F7F2] border-[#D4AF37]/30'
                  }`}>
                    {/* Dashed cuts */}
                    <div className="absolute left-0 right-0 top-1/2 h-[1px] border-t border-dashed border-[#D4AF37]/20 -translate-y-1/2"></div>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-gray-400 block text-[9px] uppercase font-bold tracking-widest">Booking ID</span>
                        <strong className="text-[#D4AF37] font-serif text-sm">{successTicket.id}</strong>
                      </div>
                      <div className="text-right">
                        <span className="text-gray-400 block text-[9px] uppercase font-bold tracking-widest">Status</span>
                        <strong className="text-emerald-600 uppercase font-extrabold text-xs flex items-center gap-1 justify-end">
                          <span className="h-2 w-2 rounded-full bg-emerald-600"></span>
                          Confirmed
                        </strong>
                      </div>
                    </div>

                    <div className="pt-4 grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-gray-400 block text-[9px] uppercase font-bold tracking-widest">Reserver Name</span>
                        <span className="font-semibold">{successTicket.name}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-gray-400 block text-[10px] uppercase font-bold tracking-widest">Phone</span>
                        <span className="font-mono">{successTicket.phone}</span>
                      </div>
                      
                      <div>
                        <span className="text-gray-400 block text-[9px] uppercase font-bold tracking-widest">Guests count</span>
                        <span className="font-semibold">{successTicket.guests} Persons</span>
                      </div>
                      <div className="text-right">
                        <span className="text-gray-400 block text-[9px] uppercase font-bold tracking-widest">Date &amp; Time</span>
                        <span className="font-semibold">{successTicket.date} at {successTicket.time}</span>
                      </div>
                    </div>

                    {successTicket.specialRequest && (
                      <div className="pt-2 border-t border-gold/10 text-xs">
                        <span className="text-gray-400 block text-[10px] uppercase font-bold mb-0.5 tracking-widest">Special Directions</span>
                        <p className={`italic ${isDarkMode ? 'text-cream/80' : 'text-forest/80'}`}>&ldquo;{successTicket.specialRequest}&rdquo;</p>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => shareOnWhatsApp(successTicket)}
                      className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-sans text-xs uppercase tracking-widest font-bold py-3.5 px-4 rounded-none shadow transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Share on WhatsApp</span>
                    </button>
                    
                    <button
                      onClick={() => setSuccessTicket(null)}
                      className={`w-full py-3.5 px-4 rounded-none text-xs uppercase tracking-widest font-bold border transition-colors cursor-pointer ${
                        isDarkMode ? 'bg-forest hover:bg-forest-light text-cream border-[#D4AF37]/20' : 'bg-transparent hover:bg-gray-100 text-forest border-gray-300'
                      }`}
                    >
                      <span>Book Another Table</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* "My Bookings" Tracker sidebar widget */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className={`p-6 rounded-none border shadow-sm ${
              isDarkMode ? 'bg-forest-dark/70 border-[#D4AF37]/20' : 'bg-white border-[#D4AF37]/30'
            }`}>
              <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-3 mb-4">
                <h4 className="font-serif font-bold text-base text-[#1A3C34] dark:text-gold flex items-center gap-1.5">
                  <CalendarDays className="w-4 h-4 text-[#F27D26]" />
                  Your Bookings
                </h4>
                <span className="bg-[#F27D26]/10 border border-[#F27D26]/30 text-[#F27D26] text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-none">
                  {myReservations.length} Active
                </span>
              </div>

              {myReservations.length === 0 ? (
                <div className="text-center py-8 text-gray-400 flex flex-col items-center gap-2">
                  <Ticket className="w-10 h-10 opacity-30 stroke-1" />
                  <p className="text-xs">No active reservations found on this browser.</p>
                  <p className="text-[10px] text-gray-500 leading-normal">Your successfully booked tickets will be shown here securely.</p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[300px] overflow-y-auto pr-1">
                  {myReservations.map((res) => (
                    <div 
                      key={res.id} 
                      className={`p-4 rounded-none border flex justify-between items-start gap-2 relative ${
                        isDarkMode ? 'bg-forest/40 border-[#D4AF37]/10' : 'bg-[#F9F7F2] border-[#D4AF37]/20'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-serif font-bold text-xs text-[#D4AF37]">{res.id}</span>
                          <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-[9px] font-bold px-1.5 py-0.2 rounded-none">
                            Confirmed
                          </span>
                        </div>
                        <p className="text-xs font-bold">{res.name}</p>
                        <p className="text-[10px] text-gray-500">
                          {res.guests} Guests • {res.date} at {res.time}
                        </p>
                      </div>

                      <div className="flex flex-col gap-2 items-end">
                        <button
                          onClick={() => handleCancelBooking(res.id)}
                          className="text-red-500 hover:text-red-600 p-1 rounded hover:bg-red-500/10 transition-colors cursor-pointer"
                          title="Cancel Booking"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        
                        <button
                          onClick={() => shareOnWhatsApp(res)}
                          className="bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] hover:bg-[#25D366] hover:text-white px-2 py-0.5 rounded-none text-[9px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
                        >
                          Share
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Policy Widget */}
            <div className="p-5 rounded-none bg-[#F9F7F2] dark:bg-white/5 border border-[#D4AF37]/30 text-xs text-[#1A3C34]/80 dark:text-gray-400 space-y-2.5">
              <h5 className="font-serif font-semibold text-[#D4AF37] uppercase tracking-wider leading-none">Booking Policies:</h5>
              <ul className="list-disc pl-4 space-y-1 font-sans text-[11px] leading-relaxed">
                <li>Please arrive at least 15 minutes before your booked slot.</li>
                <li>Your reserved cabin table will be held for maximum 30 minutes.</li>
                <li>No booking cancellation fees are charged.</li>
                <li>For large groups of 25+ members, please ring +91 78808 79698 directly.</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
