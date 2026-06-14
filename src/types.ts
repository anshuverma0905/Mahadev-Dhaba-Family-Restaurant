export interface MenuItem {
  id: string;
  name: string;
  hindiName: string;
  price: number;
  description: string;
  category: 'main' | 'bread' | 'thali' | 'drinks' | 'specials';
  image: string;
  tag?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  role: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Food' | 'Restaurant Interior' | 'Family Cabins' | 'Outdoor Area' | 'Events' | 'Dining Experience';
  image: string;
}

export interface Facility {
  id: string;
  title: string;
  hindiTitle: string;
  description: string;
  icon: string;
}

export interface ChooseCard {
  id: string;
  title: string;
  hindiTitle: string;
  description: string;
  icon: string;
}

export interface Reservation {
  id: string;
  name: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  specialRequest?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Kaju Curry',
    hindiName: 'काजू करी',
    price: 220,
    description: 'Roasted cashew nuts simmered in a rich, creamy, and mildly spicy onion-tomato gravy with Indian spices.',
    category: 'main',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=600&q=80',
    tag: 'Chef Choice'
  },
  {
    id: '2',
    name: 'Paneer Chatpata',
    hindiName: 'पनीर चटपटा',
    price: 180,
    description: 'Fresh cottage cheese cubes cooked in a tangy, spicy master gravy with diced bell peppers, onions and fresh herbs.',
    category: 'main',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80',
    tag: 'Best Seller'
  },
  {
    id: '3',
    name: 'Special Thali',
    hindiName: 'स्पेशल थाली',
    price: 250,
    description: 'A grand platter featuring Paneer Sabji, Dal Fry, Mix Veg, Special Rice, 3 Butter Rotis, Raita, Salad, papad, and a sweet.',
    category: 'thali',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    tag: 'Premium'
  },
  {
    id: '4',
    name: 'Dal Tadka',
    hindiName: 'दाल तड़का',
    price: 130,
    description: 'Classic yellow lentils cooked to perfection and tempered with ghee, dry red chilies, cumin, garlic, and fresh coriander.',
    category: 'main',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '5',
    name: 'Mix Veg',
    hindiName: 'मिक्स वेज',
    price: 140,
    description: 'A colorful assortment of seasonal vegetables like beans, peas, carrots, and potatoes tossed in traditional Indian dry spices.',
    category: 'main',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '6',
    name: 'Butter Roti',
    hindiName: 'बटर रोटी',
    price: 15,
    description: 'Traditional whole wheat flatbread baked cooked in clay tandoor oven, brushed generously with pure butter.',
    category: 'bread',
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '7',
    name: 'Jeera Rice',
    hindiName: 'जीरा राइस',
    price: 110,
    description: 'Aromatic, long-grain basmati rice steamed and tempered with toasted cumin seeds and fresh ghee.',
    category: 'main',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '8',
    name: 'Special Malai Lassi',
    hindiName: 'स्पेशल मलाई लस्सी',
    price: 60,
    description: 'Thick, creamy, and chilled yogurt drink sweetened naturally and garnished with a rich layer of fresh clotted cream (malai) and dry fruits.',
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1571115177098-24ec420951d5?auto=format&fit=crop&w=600&q=80',
    tag: 'Refreshing'
  },
  {
    id: '9',
    name: 'Seasonal Matar Paneer',
    hindiName: 'सीजनल मटर पनीर',
    price: 160,
    description: 'Fresh green peas and soft paneer cubes cooked in a delicious spiced tomato cream sauce. A winter-special favorite.',
    category: 'specials',
    image: 'https://images.unsplash.com/photo-1567818735868-e71b99932e29?auto=format&fit=crop&w=600&q=80',
    tag: 'Seasonal Special'
  }
];

export const WHY_CHOOSE_US: ChooseCard[] = [
  {
    id: '1',
    title: 'Fresh Ingredients Daily',
    hindiTitle: 'ताजा सामग्री प्रतिदिन',
    description: 'We source fresh vegetables, premium milk products, and high-quality local spices daily to guarantee absolute taste.',
    icon: 'Leaf'
  },
  {
    id: '2',
    title: 'Family-Friendly Atmosphere',
    hindiTitle: 'पारिवारिक वातावरण',
    description: 'An exceptionally clean, noise-free, and respectful environment tailored for grand dining with your loved ones.',
    icon: 'Heart'
  },
  {
    id: '3',
    title: 'Separate Family Cabins',
    hindiTitle: 'अलग फैमिली केबिन',
    description: 'Enjoy private family cabins which ensure ultimate privacy and peaceful conversation for your family gatherings.',
    icon: 'Home'
  },
  {
    id: '4',
    title: 'Clean Washrooms',
    hindiTitle: 'साफ-सुथरे वाशरूम',
    description: 'Meticulously washed and sanitized toilets and handwashing areas to maintain top-grade hygiene standards of a family diner.',
    icon: 'Sparkles'
  },
  {
    id: '5',
    title: 'Fast & Quick Service',
    hindiTitle: 'त्वरित सेवा',
    description: 'Our experienced cooks and skilled waiters ensure hot and fresh meals are served on your table within minutes of ordering.',
    icon: 'Zap'
  },
  {
    id: '6',
    title: 'Ample & Secure Parking',
    hindiTitle: 'विशाल और सुरक्षित पार्किंग',
    description: 'Spacious road-side and inner parking spaces accommodating multiple cars, SUVs, and tourist buses securely.',
    icon: 'Car'
  },
  {
    id: '7',
    title: 'Value For Money',
    hindiTitle: 'किफायती और बेहतरीन',
    description: 'Rich portions, incredible taste, and standard hygienic food priced extremely fairly to be light on your pocket.',
    icon: 'Coins'
  },
  {
    id: '8',
    title: 'Late Night Dining',
    hindiTitle: 'देर रात भोजन',
    description: 'A secure and safe dining spot welcoming tourists, highway travelers, and families with freshly prepared hot food till 1:00 AM.',
    icon: 'Moon'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Anupam Singh',
    rating: 5,
    text: 'Good food and awesome prices, good people, sufficient space and a wonderful dining experience with family. Paneer chatpata is a must try!',
    date: '3 weeks ago',
    role: 'Local Guide'
  },
  {
    id: '2',
    name: 'Rajeev Mishra',
    rating: 5,
    text: 'This place has ample parking area, neat and clean washrooms despite heavy rush. Visited with parents during our highway trip. Quick service.',
    date: '1 month ago',
    role: 'Verified Customer'
  },
  {
    id: '3',
    name: 'Vikram Pratap',
    rating: 5,
    text: 'Nice owner, tasty food, and affordable rates. Their Special Thali is literally full-stomach meal for one heavy-rich diet person. Highly recommended.',
    date: '2 months ago',
    role: 'Regular Diner'
  },
  {
    id: '4',
    name: 'Shreya Tiwari',
    rating: 5,
    text: 'The absolute best family restaurant near Phephana. The separate dining cabin is very comfortable for female family members. Hygienic and extremely polite staff.',
    date: '2 weeks ago',
    role: 'Local Guide'
  },
  {
    id: '5',
    name: 'Manoj Kumar',
    rating: 5,
    text: 'Awesome lassi and tandoori roti at highly affordable prices. The owner behaves very friendly. Service is lightning fast.',
    date: '3 months ago',
    role: 'Traveler'
  }
];

export const FACILITIES: Facility[] = [
  {
    id: '1',
    title: 'Dine-In Comfort',
    hindiTitle: 'डाइन-इन आराम',
    description: 'Clean air-conditioned and beautifully ventilated tables, designed for an outstanding dining experience.',
    icon: 'Utensils'
  },
  {
    id: '2',
    title: 'Family Seating',
    hindiTitle: 'फैमिली केबिन बैठक',
    description: 'Exclusive private dining sections and cabins tailored for families to enjoy private moments.',
    icon: 'Users'
  },
  {
    id: '3',
    title: 'Online Orders',
    hindiTitle: 'ऑनलाइन ऑर्डर',
    description: 'Direct call/WhatsApp to order fresh pack meals for quick pick-up when passing by Tikha road.',
    icon: 'Smartphone'
  },
  {
    id: '4',
    title: 'Spacious Parking',
    hindiTitle: 'विशाल पार्किंग',
    description: 'Large secure parking area for traveler cars, tour buses, and local dynamic riders.',
    icon: 'Compass'
  },
  {
    id: '5',
    title: 'Clean Washrooms',
    hindiTitle: 'साफ शौचालय',
    description: 'Sanitized, separate men and women toilets maintained strictly to hygiene guidelines.',
    icon: 'Sparkles'
  },
  {
    id: '6',
    title: 'Group Dining',
    hindiTitle: 'सामूहिक भोजन',
    description: 'Special table organization for birthdays, anniversaries, and family reunions accommodating up to 40 guests.',
    icon: 'PartyPopper'
  },
  {
    id: '7',
    title: 'Event Hosting',
    hindiTitle: 'इवेंट होस्टिंग',
    description: 'Full food-catering arrangement and venue decorations for small ring ceremonies, meetings, and parties.',
    icon: 'CalendarDays'
  },
  {
    id: '8',
    title: 'Traveler Friendly',
    hindiTitle: 'सैलानियों के अनुकूल',
    description: 'Conveniently located on the highway at Tikha, Phephana, making it perfect for quick healthy highway breaks.',
    icon: 'Briefcase'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Special Indian Veg Thali',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g2',
    title: 'Delicious Paneer Curry cooked with roasted spices',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g3',
    title: 'Cozy and spacious Dining Area',
    category: 'Restaurant Interior',
    image: 'placeholder_replaced_on_load' // we can assign the generated image
  },
  {
    id: 'g4',
    title: 'Private Family Cabin Seating',
    category: 'Family Cabins',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g5',
    title: 'Outer view and parking area',
    category: 'Outdoor Area',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g6',
    title: 'Traditional Lassi serving with saffron garnishing',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1571115177098-24ec420951d5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g7',
    title: 'Tandoori Butter Naan and Dal Tadka plating',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g8',
    title: 'Family gathering event decoration',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g9',
    title: 'Pleasurable moments of client groups celebrating',
    category: 'Dining Experience',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
  }
];
