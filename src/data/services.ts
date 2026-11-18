import type { TravelService } from '../types';

export const services: TravelService[] = [
  {
    id: 'flight-booking-assistance',
    slug: 'flight-booking-assistance',
    title: 'Flight Booking Assistance',
    icon: 'Plane',
    shortDescription: 'Dedicated flight routing, premium cabin seat assignments, connection protection, and schedule monitoring.',
    fullDescription: 'Our flight concierge team optimizes international and domestic routing across world-leading airlines including Emirates, Qatar Airways, Turkish Airlines, and PIA. We secure competitive business and economy fares, manage seat selection and meal preferences, and provide proactive assistance during schedule adjustments.',
    benefits: [
      'Access to partner airline inventory and private consolidation fares',
      'Strategic connection planning to minimize transit fatigue',
      'Assistance with complex multi-city and round-the-world itineraries',
      'Seat assignments, bassinet requests, and special dietary meal management'
    ],
    image: '/images/hero/hero-1.jpg'
  },
  {
    id: 'hotel-reservations',
    slug: 'hotel-reservations',
    title: 'Hotel Reservations',
    icon: 'Building2',
    shortDescription: 'Handpicked palace hotels, private overwater villas, historic riads, and luxury alpine chalets.',
    fullDescription: 'We bypass impersonal booking engines to curate properties that meet exacting standards of hygiene, comfort, and service. Through direct relationships with world-renowned luxury brands (including Aman, Four Seasons, Serena, and boutique Relais & Châteaux), our clients frequently enjoy VIP recognition, room upgrades when available, and bespoke welcoming amenities.',
    benefits: [
      'Personally vetted luxury hotels, private villas, and heritage properties',
      'Complimentary daily breakfast and potential room upgrade privileges',
      'Direct coordination with property general managers for personalized touches',
      'Flexible cancellation terms negotiated where available'
    ],
    image: '/images/destinations/paris.jpg'
  },
  {
    id: 'visa-assistance',
    slug: 'visa-assistance',
    title: 'Visa Assistance & Document Guidance',
    icon: 'FileCheck',
    shortDescription: 'Meticulous document verification, official appointment booking, and compliant travel itinerary drafting.',
    fullDescription: 'Navigating international visa protocols can be complex. While sovereign embassies and immigration departments make all final visa decisions, our visa specialists assist you with complete document checklists, verified flight reservations, confirmed accommodation vouchers, and step-by-step guidance for Schengen, UK, US, Turkish, and Southeast Asian tourist visas.',
    benefits: [
      'Accurate, updated requirements based on your specific passport nationality',
      'Thorough pre-submission auditing of financial documentation and forms',
      'Compliant hotel reservation vouchers and flight reservation certificates',
      'Direct links and step-by-step guidance through official immigration portals'
    ],
    image: '/images/destinations/dubai.jpg'
  },
  {
    id: 'travel-insurance',
    slug: 'travel-insurance',
    title: 'Travel Insurance Guidance',
    icon: 'ShieldCheck',
    shortDescription: 'Comprehensive global medical coverage, emergency evacuation, baggage protection, and trip delay safeguards.',
    fullDescription: 'Unforeseen medical events, flight disruptions, or baggage losses should never compromise your peace of mind. We connect travelers with internationally accredited insurance providers offering Schengen-compliant policies, medical coverage of up to $50,000 to $100,000, 24/7 emergency multilingual helplines, and adventure sports coverage.',
    benefits: [
      'Meets all mandatory Schengen and international entry visa requirements (€30,000+ coverage)',
      'Emergency inpatient medical and hospitalization coverage',
      'Reimbursement for lost, delayed, or damaged luggage',
      'Coverage for trip cancellation, interruption, or involuntary rerouting'
    ],
    image: '/images/destinations/swiss-alps.jpg'
  },
  {
    id: 'custom-travel-planning',
    slug: 'custom-travel-planning',
    title: 'Tailor-Made Bespoke Itineraries',
    icon: 'Compass',
    shortDescription: 'Bespoke journeys crafted entirely around your personal pace, culinary tastes, and cultural interests.',
    fullDescription: 'No two travelers are identical. Our bespoke itinerary specialists collaborate one-on-one with you to design unique travel experiences. Whether arranging private after-hours museum entries, scenic helicopter transfers, or private cooking masterclasses with regional chefs, we craft every detail to reflect your personal definition of extraordinary.',
    benefits: [
      'One-on-one consultation with a senior destination specialist',
      'Day-by-day customized pace that avoids rushed commercial tour bus routes',
      'Exclusive private access to historical landmarks and cultural leaders',
      'Flexibility to adapt daily plans with your dedicated private driver and guide'
    ],
    image: '/images/destinations/santorini.jpg'
  },
  {
    id: 'airport-transfers',
    slug: 'airport-transfers',
    title: 'Private Chauffeured Airport Transfers',
    icon: 'Car',
    shortDescription: 'Punctual meet-and-greet airport arrivals in premium Mercedes-Benz, BMW, and Toyota Land Cruiser vehicles.',
    fullDescription: 'Step off your flight directly into the care of a professional chauffeur. Our airport transfer services feature flight-tracking technology, personalized terminal meet-and-greet with name boards, luggage assistance, and clean, premium air-conditioned vehicles equipped with bottled water and Wi-Fi.',
    benefits: [
      'Real-time flight tracking ensures drivers adjust for delays or early arrivals',
      'Clear, transparent flat-rate pricing with no hidden toll or parking surcharges',
      'Child safety seats provided upon request for traveling families',
      'High-end fleet including Mercedes E/S-Class, BMW 7-Series, and Toyota Prado'
    ],
    image: '/images/destinations/new-york.jpg'
  },
  {
    id: 'honeymoon-planning',
    slug: 'honeymoon-planning',
    title: 'Romantic Honeymoon Journeys',
    icon: 'Heart',
    shortDescription: 'Intimate private pool villas, candlelit seaside dinners, and special anniversary romantic celebrations.',
    fullDescription: 'Celebrate the beginning of your married life with an unforgettable honeymoon crafted with privacy, luxury, and romance. From overwater pavilions in the Maldives and cliffside cave plunge pools in Santorini to tranquil mountain retreats in the Swiss Alps, our romantic itineraries ensure every moment is memorable.',
    benefits: [
      'Handpicked romantic suites with maximum privacy and dramatic views',
      'Special resort honeymoon amenities (champagne, flower baths, spa credits)',
      'Secluded experiences like private sandbank dinners and sunset sailing',
      'Discreet, seamless logistics handled in advance so you can focus on each other'
    ],
    image: '/images/packages/pkg-maldives-honeymoon.jpg'
  },
  {
    id: 'family-holidays',
    slug: 'family-holidays',
    title: 'Family Vacations & Multi-Gen Travel',
    icon: 'Users',
    shortDescription: 'Interconnecting luxury suites, child-friendly excursions, balanced pacing, and seamless logistics.',
    fullDescription: 'Traveling with children or grandparents requires thoughtful planning, spacious accommodations, and an engaging itinerary that excites all generations. We carefully select resorts with dedicated kids’ clubs, arrange connecting family suites, and plan excursions that blend cultural wonder with family fun.',
    benefits: [
      'Guaranteed connecting family suites and spacious multi-bedroom villas',
      'Child-friendly pacing with built-in downtime and pool afternoons',
      'Private family vehicles with spacious luggage capacity',
      'Curated activities designed to engage both toddlers, teens, and seniors'
    ],
    image: '/images/packages/pkg-dubai-family.jpg'
  },
  {
    id: 'corporate-travel',
    slug: 'corporate-travel',
    title: 'Corporate Travel & Executive Retreats',
    icon: 'Briefcase',
    shortDescription: 'Efficient business travel management, executive hotel suites, and executive leadership retreats.',
    fullDescription: 'We deliver precision corporate travel solutions for executives, delegations, and organizations. From seamless transit and flexible business-class ticketing to private meeting venue coordination and executive team retreats in inspiring destinations, we manage every detail with confidentiality and professionalism.',
    benefits: [
      'Streamlined invoicing, cost reporting, and dedicated account management',
      'Flexible business ticketing with priority change and cancellation terms',
      'Business hotels located adjacent to financial centers and exhibition venues',
      'Full retreat coordination including private boardrooms and team-building outings'
    ],
    image: '/images/destinations/tokyo.jpg'
  },
  {
    id: 'group-tours',
    slug: 'group-tours',
    title: 'Small-Group Curated Expeditions',
    icon: 'UsersRound',
    shortDescription: 'Intimate small-group departures (maximum 12–16 guests) led by certified historian tour leaders.',
    fullDescription: 'Unlike large commercial coach tours, our curated small-group journeys cap group size at 12 to 16 travelers. This allows access to boutique hotels, private dining rooms, and secluded cultural experiences that large tour buses cannot accommodate, all in the company of like-minded travelers.',
    benefits: [
      'Capped group sizes guarantee personal attention and easy group mobility',
      'Accompanied throughout by seasoned bilingual expedition directors',
      'Shared group costs make luxury accommodations and private guides more accessible',
      'Comprehensive itinerary including all major monument admissions'
    ],
    image: '/images/packages/pkg-skardu-expedition.jpg'
  },
  {
    id: 'umrah-hajj-consultation',
    slug: 'umrah-hajj-consultation',
    title: 'Umrah & Hajj Luxury Consultation',
    icon: 'Moon',
    shortDescription: 'Consultative guidance for spiritual pilgrimages, 5-star Haram-view suites, and private ground logistics.',
    fullDescription: 'For clients undertaking the sacred journey of Umrah or Hajj, we provide consultative planning assistance. We connect travelers with licensed, verified partner operators to arrange 5-star accommodations directly facing the Holy Kaaba in Makkah and the Prophet’s Mosque in Madinah, alongside private chauffeured transfers via the Haramain High-Speed Railway.',
    benefits: [
      '5-star luxury hotels situated on the Haram plazas for ease of access',
      'Assistance with Nusuk platform scheduling and permit requirements',
      'First-class Haramain High-Speed Train reservations between Makkah and Madinah',
      'Wheelchair and elderly assistance coordination with hotel concierges'
    ],
    image: '/images/destinations/istanbul.jpg'
  },
  {
    id: 'travel-support',
    slug: 'travel-support',
    title: 'Dedicated Travel Assistance',
    icon: 'Headphones',
    shortDescription: 'Attentive trip coordination, flight rebooking support, and direct contact with local ground operators.',
    fullDescription: 'From the moment your trip begins until your safe return home, our travel assistance team remains accessible to help resolve unexpected changes, assist with restaurant reservations, or coordinate with on-the-ground drivers and tour guides.',
    benefits: [
      'Direct WhatsApp and telephone access to your travel coordinator during business hours',
      'Assistance with flight schedule changes and emergency re-ticketing',
      'Local emergency contacts provided for every destination country',
      'Real-time communication with drivers, hotels, and excursion operators'
    ],
    image: '/images/destinations/cape-town.jpg'
  }
];
