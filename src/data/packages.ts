import type { TourPackage } from '../types';

export const tourPackages: TourPackage[] = [
  {
    id: 'pkg-maldives-luxury-water-villa',
    slug: 'maldives-luxury-overwater-retreat',
    title: 'Maldives Luxury Overwater Villa Sanctuary',
    category: 'Honeymoon',
    destination: 'Maldives',
    destinationSlug: 'maldives',
    duration: '5 Days / 4 Nights',
    durationDays: 5,
    heroImage: '/images/packages/pkg-maldives-honeymoon.jpg',
    cardImage: '/images/packages/pkg-maldives-honeymoon.jpg',
    overview: 'An unforgettable romantic escape suspended above bioluminescent lagoons in a private overwater pool villa, complete with seaplane arrival and candlelit sandbank dining.',
    locationsCovered: ['Velana International Airport (Malé)', 'North Malé Atoll / Baa Atoll', 'Private Deserted Sandbank'],
    indicativePriceUSD: 2450,
    pricingDetails: {
      basis: 'Per person on twin-share basis',
      assumedTravelers: 2,
      accommodationCategory: '5-Star Ultra-Luxury Overwater Pool Villa',
      departureCity: 'Islamabad / Lahore / Karachi',
      season: 'Dry Season (November – April)',
      checkedDate: 'November 2026'
    },
    highlights: [
      'Private overwater villa with direct lagoon staircase and private infinity pool',
      'Scenic round-trip seaplane transfer over turquoise atolls',
      'Private 5-course romantic sandbank dinner under the stars',
      'Guided marine biologist snorkeling safari with sea turtles',
      'Complimentary 60-minute couples ocean spa ritual'
    ],
    inclusions: [
      '4 nights in an ultra-luxury Overwater Pool Villa',
      'All-inclusive gourmet breakfast, lunch, and multi-course dinners',
      'Round-trip seaplane or private luxury speedboat airport transfers',
      'Private sandbank dining experience with personal butler and chef',
      '60-minute couples restorative spa treatment',
      'Complimentary use of non-motorized watersports and snorkeling gear'
    ],
    exclusions: [
      'International flights to/from Malé',
      'Motorized water activities (jet skiing, Seabob)',
      'Scuba diving certification dives',
      'Personal travel insurance and discretionary tipping'
    ],
    suitableFor: 'Honeymooners, couples celebrating anniversaries, and luxury romantics.',
    featured: true,
    dailyItinerary: [
      {
        day: 1,
        title: 'Arrival in Paradise & Overwater Villa Check-in',
        description: 'VIP airport reception at Malé (MLE) and breathtaking 35-minute seaplane flight to your private island resort. Champagne welcome in your overwater villa.',
        mealsIncluded: 'Dinner',
        highlight: 'Seaplane views of turquoise atoll rings'
      },
      {
        day: 2,
        title: 'Lagoon Snorkeling & Spa Wellness',
        description: 'Morning guided snorkeling along the resort’s outer reef edge with sea turtles. Afternoon signature restorative massage in the overwater spa pavilion.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        highlight: 'Swimming alongside hawksbill sea turtles'
      },
      {
        day: 3,
        title: 'Sunset Dolphin Cruise on Handcrafted Dhoni',
        description: 'Relaxation on your private sun deck. Late afternoon cruise on a traditional wooden dhoni into deeper channels to watch playful wild spinner dolphins.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        highlight: 'Dolphin pods jumping in sunset glow'
      },
      {
        day: 4,
        title: 'Private Sandbank Dining Feast',
        description: 'Day at leisure enjoying water activities. At dusk, a private boat takes you to an isolated sandbank for a torchlit 5-course seafood barbecue dinner.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        highlight: 'Isolated candlelit dining surrounded by open sea'
      },
      {
        day: 5,
        title: 'Floating Pool Breakfast & Departure',
        description: 'Lavish floating breakfast delivered to your private villa pool. Seaplane transfer back to Malé International Airport for your connecting flight.',
        mealsIncluded: 'Breakfast',
        highlight: 'Floating breakfast on your private pool'
      }
    ]
  },

  {
    id: 'pkg-swiss-alps-chalet-luxury',
    slug: 'swiss-alps-chalets-and-panoramic-rail',
    title: 'Swiss Alps Luxury Chalets & Panoramic Rail',
    category: 'Luxury',
    destination: 'Swiss Alps',
    destinationSlug: 'swiss-alps',
    duration: '7 Days / 6 Nights',
    durationDays: 7,
    heroImage: '/images/packages/pkg-swiss-alps-luxury.jpg',
    cardImage: '/images/packages/pkg-swiss-alps-luxury.jpg',
    overview: 'Experience alpine grandeur across Lucerne, Jungfraujoch, and car-free Zermatt with first-class scenic train passes and 5-star mountain chalet hospitality.',
    locationsCovered: ['Zurich', 'Lucerne', 'Interlaken', 'Jungfraujoch', 'Lauterbrunnen', 'Zermatt (Matterhorn)'],
    indicativePriceUSD: 3100,
    pricingDetails: {
      basis: 'Per person on twin-share basis',
      assumedTravelers: 2,
      accommodationCategory: '5-Star Alpine Palace Hotels & Boutique Chalets',
      departureCity: 'Islamabad / Lahore / Karachi',
      season: 'Summer (June – Sept) or Winter Ski (Dec – March)',
      checkedDate: 'November 2026'
    },
    highlights: [
      '8-Day 1st-Class Swiss Travel Pass with unlimited scenic train travel',
      'VIP excursion to Jungfraujoch Top of Europe (3,454m)',
      'Gornergrat Cogwheel train with Matterhorn mirror reflection at Riffelsee',
      'Steepest cogwheel railway in the world to Mount Pilatus summit',
      'Charming car-free village stay in Zermatt'
    ],
    inclusions: [
      '6 nights in 5-star luxury hotels (2 nights Lucerne, 2 nights Interlaken, 2 nights Zermatt)',
      'Daily Swiss alpine breakfast',
      '8-Day 1st Class Swiss Travel Pass',
      'Mountain railway tickets to Jungfraujoch Top of Europe',
      'Gornergrat cogwheel train tickets in Zermatt',
      'Station luggage transfers between hotels'
    ],
    exclusions: [
      'International flights',
      'Schengen visa fees',
      'Ski gear rental and lift passes (optional add-on)',
      'Personal dining and city taxes'
    ],
    suitableFor: 'Discerning couples, luxury connoisseurs, and scenic landscape lovers.',
    featured: true,
    dailyItinerary: [
      {
        day: 1,
        title: 'Arrival Zurich & First-Class Train to Lucerne',
        description: 'First-class train from Zurich Airport along Lake Zurich to Lucerne. Walk across Chapel Bridge and check into your 5-star lakeside hotel.',
        mealsIncluded: 'Dinner',
        highlight: 'Historic Chapel Bridge and lakefront promenade'
      },
      {
        day: 2,
        title: 'Mount Pilatus Golden Round Trip',
        description: 'Historic paddle steamer on Lake Lucerne, cogwheel train up Mount Pilatus, aerial cableway descent.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: '48% incline on the world’s steepest cogwheel railway'
      },
      {
        day: 3,
        title: 'Panoramic Train to Interlaken & Lauterbrunnen',
        description: 'Luzern-Interlaken Express across Brünig Pass. Explore Lauterbrunnen’s 72 waterfalls and Trümmelbach glacial cascades.',
        mealsIncluded: 'Breakfast',
        highlight: 'Lauterbrunnen valley waterfalls'
      },
      {
        day: 4,
        title: 'Jungfraujoch: Top of Europe (3,454m)',
        description: 'Eiger Express gondola to Jungfraujoch. Walk through the Ice Palace and out onto the Aletsch Glacier plateau.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Perpetual snow and panoramic glacier vistas at 3,454m'
      },
      {
        day: 5,
        title: 'First-Class Train into Car-Free Zermatt',
        description: 'Scenic journey into the Valais canton, arriving in car-free Zermatt. Check into your luxury chalet facing the Matterhorn.',
        mealsIncluded: 'Breakfast, Dinner',
        highlight: 'First sighting of the towering Matterhorn'
      },
      {
        day: 6,
        title: 'Gornergrat Railway & Matterhorn Reflection',
        description: 'Ascend to 3,089m on the Gornergrat Railway. Walk to Riffelsee to witness the Matterhorn reflected in crystal water.',
        mealsIncluded: 'Breakfast',
        highlight: 'Matterhorn mirrored reflection on Lake Riffelsee'
      },
      {
        day: 7,
        title: 'Scenic Rail to Zurich / Geneva Airport Departure',
        description: 'Morning breakfast before smooth 1st-class train journey to Zurich or Geneva for your departure flight.',
        mealsIncluded: 'Breakfast'
      }
    ]
  },

  {
    id: 'pkg-hunza-karakoram-adventure',
    slug: 'hunza-valley-karakoram-grand-expedition',
    title: 'Hunza Valley: Karakoram Grand Expedition',
    category: 'Adventure',
    destination: 'Hunza Valley',
    destinationSlug: 'hunza-valley',
    duration: '6 Days / 5 Nights',
    durationDays: 6,
    heroImage: '/images/packages/pkg-hunza-adventure.jpg',
    cardImage: '/images/packages/pkg-hunza-adventure.jpg',
    overview: 'An awe-inspiring expedition along the Karakoram Highway to the heart of Hunza Valley, featuring Passu Cones, Attabad Lake boating, ancient royal forts, and the China border.',
    locationsCovered: ['Gilgit', 'Rakaposhi Viewpoint', 'Karimabad', 'Duikar (Eagle’s Nest)', 'Attabad Lake', 'Passu Cones', 'Khunjerab Pass (4,693m)'],
    indicativePriceUSD: 695,
    pricingDetails: {
      basis: 'Per person on twin-share basis (minimum 2 travelers)',
      assumedTravelers: 2,
      accommodationCategory: '4-Star / 5-Star Luxury Mountain Hotels (Serena / Luxus)',
      departureCity: 'Islamabad (domestic flight or KKH road backup)',
      season: 'April – October (Cherry Blossom, Summer, or Autumn)',
      checkedDate: 'November 2026'
    },
    highlights: [
      'Dedicated 4x4 Toyota Prado/Land Cruiser throughout the expedition',
      'Stay at Serena Hotel Hunza and lakeside suites at Luxus Grand Attabad',
      'Boat cruise on the turquoise glacial waters of Attabad Lake',
      'Close-up views of the Passu Cones and crossing Hussaini Suspension Bridge',
      'Excursion to Khunjerab Pass, the world’s highest paved international border'
    ],
    inclusions: [
      '5 nights in luxury hotels (Serena Hotel Hunza and Luxus Grand Attabad)',
      'Dedicated 4x4 Toyota Land Cruiser/Prado with professional mountain driver and fuel',
      'Certified English/Urdu-speaking local heritage guide',
      'Daily breakfast and traditional Hunza dinners',
      'Attabad Lake private boat cruise and fort admissions (Baltit and Altit)',
      'Khunjerab National Park entry permits'
    ],
    exclusions: [
      'Islamabad to Gilgit domestic flights (can be bundled upon request)',
      'Personal trekking gear or adventure sports activities',
      'Discretionary guide/driver tipping and personal souvenirs'
    ],
    suitableFor: 'Adventure lovers, mountain enthusiasts, photographers, and curious families.',
    featured: true,
    dailyItinerary: [
      {
        day: 1,
        title: 'Scenic Mountain Flight to Gilgit & Drive to Hunza',
        description: 'Morning flight from Islamabad to Gilgit with aerial views of Nanga Parbat. 4x4 drive along KKH stopping at Rakaposhi viewpoint (7,788m). Arrive in Karimabad.',
        mealsIncluded: 'Dinner',
        highlight: 'Sunset glow on the snows of Rakaposhi'
      },
      {
        day: 2,
        title: 'Karimabad Heritage: Baltit & Altit Forts',
        description: 'Guided tour of the 700-year-old Baltit Fort and 900-year-old Altit Fort. Explore Karimabad’s handicraft and organic apricot oil bazaar.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Historic Tibetan-influenced royal chambers in Baltit Fort'
      },
      {
        day: 3,
        title: 'Duikar Sunrise & Turquoise Attabad Lake',
        description: 'Dawn views from Eagle’s Nest Duikar over 8 mountain peaks. Drive through KKH tunnels to Attabad Lake for a boat charter. Check into Luxus Grand Attabad.',
        mealsIncluded: 'Breakfast, Dinner',
        highlight: 'Private boat cruise through sheer rock gorges on Attabad Lake'
      },
      {
        day: 4,
        title: 'Passu Cones & Hussaini Suspension Bridge',
        description: 'Explore Upper Hunza. Walk across the thrilling wooden Hussaini Suspension Bridge and gaze up at the Passu Cones cathedral spires. Visit Borith Lake.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Standing beneath the sheer spires of Passu Cones'
      },
      {
        day: 5,
        title: 'Khunjerab Pass (Pak-China Border at 4,693m)',
        description: 'Drive through Khunjerab National Park to the highest paved border crossing in the world. Spot Himalayan marmots and grazing yak herds.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Reaching the Pak-China border at 4,693m'
      },
      {
        day: 6,
        title: 'Return Drive to Gilgit & Flight to Islamabad',
        description: 'Morning drive to Gilgit Airport for return flight to Islamabad. (Chauffeured vehicle standby maintained for weather contingencies).',
        mealsIncluded: 'Breakfast'
      }
    ]
  },

  {
    id: 'pkg-dubai-family-grand-vacation',
    slug: 'dubai-family-wonders-and-desert-luxury',
    title: 'Dubai Family Wonders & Desert Luxury',
    category: 'Family',
    destination: 'Dubai',
    destinationSlug: 'dubai',
    duration: '5 Days / 4 Nights',
    durationDays: 5,
    heroImage: '/images/packages/pkg-dubai-family.jpg',
    cardImage: '/images/packages/pkg-dubai-family.jpg',
    overview: 'A premium, multi-generational family journey through Dubai featuring VIP Burj Khalifa admission, a private heritage desert safari, and luxury beachfront leisure on the Palm.',
    locationsCovered: ['Downtown Dubai', 'Dubai Mall & Fountains', 'Dubai Desert Conservation Reserve', 'Palm Jumeirah', 'Dubai Marina'],
    indicativePriceUSD: 1150,
    pricingDetails: {
      basis: 'Per person on family quad-share or twin-share basis',
      assumedTravelers: 4,
      accommodationCategory: '5-Star Luxury Family Suites (Downtown or Palm Jumeirah)',
      departureCity: 'Islamabad / Lahore / Karachi',
      season: 'Winter & Spring (November – April)',
      checkedDate: 'November 2026'
    },
    highlights: [
      'VIP fast-track Burj Khalifa Level 148 SKY lounge tickets',
      'Private Platinum Heritage desert safari in vintage Land Rovers with royal camp dinner',
      'Private 2-hour luxury motor yacht charter from Dubai Marina',
      'Admission to the Museum of the Future',
      'Dedicated luxury Mercedes Sprinter or V-Class private family chauffeur'
    ],
    inclusions: [
      '4 nights in 5-star luxury family suites',
      'Daily international buffet breakfast',
      'Private round-trip VIP airport transfers in luxury vehicle',
      'Burj Khalifa Level 148 SKY fast-track tickets',
      'Platinum Heritage desert safari with 6-course banquet dinner',
      'Private 2-hour yacht cruise along Dubai Marina and Palm Jumeirah'
    ],
    exclusions: [
      'International flights',
      'UAE tourist visas (if required)',
      'Tourism Dirham fee (payable to hotel)',
      'Theme park admissions and personal shopping'
    ],
    suitableFor: 'Families with children, multi-generational groups, and first-time Dubai visitors.',
    featured: true,
    dailyItinerary: [
      {
        day: 1,
        title: 'Arrival in Dubai & Private Yacht Welcome',
        description: 'VIP airport meet and assist at DXB. Private transfer to 5-star hotel. Evening sunset cruise through Dubai Marina.',
        mealsIncluded: 'Dinner',
        highlight: 'Illuminated skyscrapers from Dubai Marina waters'
      },
      {
        day: 2,
        title: 'Burj Khalifa VIP SKY & Museum of the Future',
        description: 'Fast-track ascent to Burj Khalifa Level 148. Afternoon interactive family exploration inside the Museum of the Future.',
        mealsIncluded: 'Breakfast',
        highlight: 'Standing 555 meters high on Level 148 SKY observation deck'
      },
      {
        day: 3,
        title: 'Heritage Desert Safari & Bedouin Feast',
        description: 'Vintage 1950s Land Rover drive through the Dubai Desert Conservation Reserve. Falconry display, camel rides, and 6-course dinner.',
        mealsIncluded: 'Breakfast, Dinner',
        highlight: 'Arabian oryx wildlife sightings and starlit desert dining'
      },
      {
        day: 4,
        title: 'Old Dubai Cultural Walk & Gold Souk',
        description: 'Traditional abra boat across Dubai Creek. Explore Al Fahidi Historical Quarter and the aromatic Spice and Gold Souks.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Crossing Dubai Creek on an authentic wooden abra'
      },
      {
        day: 5,
        title: 'Palm Jumeirah Leisure & Airport Departure',
        description: 'Morning beach relaxation or luxury shopping. Private chauffeur transfer to Dubai International Airport.',
        mealsIncluded: 'Breakfast'
      }
    ]
  },

  {
    id: 'pkg-bali-tropical-sanctuary',
    slug: 'bali-ubud-jungle-villas-and-seminyak-beaches',
    title: 'Bali Ubud Jungle Sanctuary & Seminyak Coast',
    category: 'Budget',
    destination: 'Bali',
    destinationSlug: 'bali',
    duration: '7 Days / 6 Nights',
    durationDays: 7,
    heroImage: '/images/packages/pkg-bali-retreat.jpg',
    cardImage: '/images/packages/pkg-bali-retreat.jpg',
    overview: 'The perfect high-value tropical retreat combining private river-valley pool villas in Ubud with chic coastal relaxation in Seminyak, private drivers, and cultural immersion.',
    locationsCovered: ['Denpasar', 'Ubud', 'Tegalalang', 'Tirta Empul', 'Seminyak', 'Uluwatu', 'Nusa Penida'],
    indicativePriceUSD: 1050,
    pricingDetails: {
      basis: 'Per person on twin-share basis',
      assumedTravelers: 2,
      accommodationCategory: 'Boutique Private Pool Villas (Ubud) & 4-Star Superior Resort (Seminyak)',
      departureCity: 'Islamabad / Lahore / Karachi',
      season: 'Year-Round (Best April – October)',
      checkedDate: 'November 2026'
    },
    highlights: [
      '3 nights private pool villa in Ubud jungle + 3 nights beachfront Seminyak resort',
      'Private air-conditioned chauffeur for all touring days',
      'Sunrise walking tour of Tegalalang Rice Terraces',
      'Traditional Melukat cleansing ritual at Tirta Empul Holy Water Temple',
      'Sunset Kecak fire dance on the sea cliffs of Uluwatu Temple'
    ],
    inclusions: [
      '6 nights accommodation (3 nights Ubud villa, 3 nights Seminyak resort)',
      'Daily cooked tropical breakfast',
      'Private round-trip airport and inter-resort vehicle transfers',
      'Full-day Ubud and highland cultural tour with English-speaking driver',
      'Uluwatu Temple and Kecak dance admission tickets'
    ],
    exclusions: [
      'International flights to/from Denpasar',
      'Indonesian e-VOA visa fee and Bali regional tourist tax levy',
      'Personal water sports and discretionary tips'
    ],
    suitableFor: 'Couples, wellness seekers, solo travelers, and value-conscious luxury travelers.',
    featured: true,
    dailyItinerary: [
      {
        day: 1,
        title: 'Arrival in Bali & Ubud Pool Villa Check-in',
        description: 'Private chauffeur transfer from Denpasar Airport to your private pool villa nestled in Ubud’s Ayung River valley.',
        mealsIncluded: 'Dinner',
        highlight: 'Private pool surrounded by tropical jungle'
      },
      {
        day: 2,
        title: 'Tegalalang Terraces & Sacred Water Temple',
        description: 'Early morning stroll through the emerald Tegalalang rice terraces. Visit Tirta Empul spring temple for a traditional blessing.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Tranquil early-morning rice terrace photography'
      },
      {
        day: 3,
        title: 'Artisan Villages & Balinese Herbal Spa',
        description: 'Explore the artisan workshops of Mas and Celuk. Indulge in a 90-minute traditional Balinese Boreh herbal body massage.',
        mealsIncluded: 'Breakfast',
        highlight: 'Authentic 90-minute Balinese herbal massage'
      },
      {
        day: 4,
        title: 'Transfer to Seminyak & Uluwatu Cliff Sunset',
        description: 'Scenic transfer south to Seminyak beach. Late afternoon visit to the 70m cliffs of Uluwatu Temple for the Kecak fire dance.',
        mealsIncluded: 'Breakfast',
        highlight: 'Hypnotic Kecak choir chanting as the sun sets over the Indian Ocean'
      },
      {
        day: 5,
        title: 'Day Trip to Nusa Penida Island',
        description: 'Speedboat to Nusa Penida to witness Kelingking T-Rex Beach, Angel’s Billabong, and crystal snorkeling waters.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Iconic panoramic cliff view of Kelingking Beach'
      },
      {
        day: 6,
        title: 'Beachside Leisure & Jimbaran Seafood Dinner',
        description: 'Relaxation on Seminyak Beach. Evening candlelit barbecue dinner with grilled fish and lobster on Jimbaran Bay sands.',
        mealsIncluded: 'Breakfast, Dinner',
        highlight: 'Fresh grilled seafood feast on the sand'
      },
      {
        day: 7,
        title: 'Farewell Bali & Airport Transfer',
        description: 'Morning breakfast by the sea. Private transfer to Denpasar Airport for your return flight.',
        mealsIncluded: 'Breakfast'
      }
    ]
  },

  {
    id: 'pkg-skardu-deosai-expedition',
    slug: 'skardu-deosai-plains-and-heritage-palaces',
    title: 'Skardu, Deosai Plains & Heritage Forts',
    category: 'Group Tours',
    destination: 'Skardu',
    destinationSlug: 'skardu',
    duration: '6 Days / 5 Nights',
    durationDays: 6,
    heroImage: '/images/packages/pkg-skardu-expedition.jpg',
    cardImage: '/images/packages/pkg-skardu-expedition.jpg',
    overview: 'A high-altitude journey to the gateway of K2, featuring Shangrila Lake, the 4,114-meter Deosai Plains safari, Katpana cold desert dunes, and a stay in a 400-year-old royal palace fort.',
    locationsCovered: ['Skardu', 'Shangrila Lake (Lower Kachura)', 'Upper Kachura Lake', 'Deosai National Park (4,114m)', 'Sheosar Lake', 'Katpana Cold Desert', 'Shigar Valley & Serena Fort'],
    indicativePriceUSD: 775,
    pricingDetails: {
      basis: 'Per person on small group / twin-share basis',
      assumedTravelers: 4,
      accommodationCategory: 'Heritage Palaces & Luxury Resorts (Serena Shigar Fort / Shangrila)',
      departureCity: 'Islamabad (Direct commercial flight to Skardu)',
      season: 'May – October (Deosai plateau open late June – September)',
      checkedDate: 'November 2026'
    },
    highlights: [
      'Direct jet flights between Islamabad and Skardu International Airport',
      'Full-day 4x4 safari across Deosai National Park (second-highest plateau in the world)',
      'Stay at Serena Shigar Fort, a 400-year-old restored royal palace',
      'Relaxation at the iconic pagoda chalets of Shangrila Resort',
      'Sunset photography across Katpana Cold Desert dunes framed by snow peaks'
    ],
    inclusions: [
      '5 nights luxury heritage accommodation (Shangrila Resort Kachura & Serena Shigar Fort)',
      'Dedicated 4x4 Toyota Land Cruiser/Prado throughout Baltistan with fuel and driver',
      'Full-day guided Deosai National Park safari with conservation entry permits',
      'Daily breakfast and traditional regional Balti dinners',
      'Airport transfers from/to Skardu International Airport',
      'Guided historical tours of Shigar Fort and Amburiq Mosque'
    ],
    exclusions: [
      'Islamabad to Skardu domestic jet flights (can be bundled upon request)',
      'High-altitude camping gear or mountaineering equipment',
      'Personal tips and expenses'
    ],
    suitableFor: 'Small groups, adventure families, cultural heritage enthusiasts, and photographers.',
    featured: true,
    dailyItinerary: [
      {
        day: 1,
        title: 'Flight to Skardu & Shangrila Lake Check-in',
        description: 'Direct jet flight from Islamabad to Skardu with aerial vistas of K2 and Nanga Parbat. Transfer to Shangrila Resort on Lower Kachura Lake.',
        mealsIncluded: 'Dinner',
        highlight: 'Spectacular mountain landing into Skardu gorge'
      },
      {
        day: 2,
        title: 'Upper Kachura Lake & Katpana Cold Desert',
        description: 'Hike through apricot orchards to Upper Kachura Lake for trout fish lunch. Sunset over the rippling dunes of the Katpana Cold Desert.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Sunset shadows on cold desert dunes framed by snow-capped peaks'
      },
      {
        day: 3,
        title: 'Safari to Deosai National Park (4,114m)',
        description: 'Ascend via 4x4 to the vast Deosai plateau. Explore Sheosar Lake reflecting the Karakoram range and cross the Barapani suspension bridge.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        highlight: 'Standing at 4,114 meters on the Land of Giants'
      },
      {
        day: 4,
        title: 'Shigar Valley & 400-Year-Old Palace Stay',
        description: 'Drive along the Shigar River into the lush Shigar Valley. Check into the historic Serena Shigar Fort (Fong-Khar) and tour the royal audience chambers.',
        mealsIncluded: 'Breakfast, Dinner',
        highlight: 'Sleeping in a 400-year-old restored royal palace'
      },
      {
        day: 5,
        title: 'Manthokha Waterfall & Khaplu Palace',
        description: 'Scenic drive to the 180ft cascading Manthokha Waterfall and the historic Serena Khaplu Palace gardens.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Roaring glacial waterfall into lush orchards'
      },
      {
        day: 6,
        title: 'Skardu Airport Departure to Islamabad',
        description: 'Morning breakfast in Shigar palace courtyard. Private transfer to Skardu International Airport for direct return flight.',
        mealsIncluded: 'Breakfast'
      }
    ]
  },

  {
    id: 'pkg-santorini-aegean-romance',
    slug: 'santorini-cliffside-villas-and-caldera-sailing',
    title: 'Santorini Cliffside Cave Villas & Caldera Sailing',
    category: 'Honeymoon',
    destination: 'Santorini',
    destinationSlug: 'santorini',
    duration: '6 Days / 5 Nights',
    durationDays: 6,
    heroImage: '/images/packages/pkg-santorini-honeymoon.jpg',
    cardImage: '/images/packages/pkg-santorini-honeymoon.jpg',
    overview: 'An Aegean dream journey in Santorini featuring private cliffside cave suites with outdoor heated plunge pools, semi-private catamaran sailing, and wine tasting.',
    locationsCovered: ['Oia', 'Imerovigli', 'Fira', 'Akrotiri Archaeological Site', 'Palea Kameni Hot Springs'],
    indicativePriceUSD: 2000,
    pricingDetails: {
      basis: 'Per person on twin-share basis',
      assumedTravelers: 2,
      accommodationCategory: '5-Star Luxury Caldera-View Cave Suite with Private Plunge Pool',
      departureCity: 'Islamabad / Lahore / Karachi',
      season: 'May – October (Peak June – August)',
      checkedDate: 'November 2026'
    },
    highlights: [
      '5 nights in a luxury cliffside cave suite in Oia or Imerovigli with private plunge pool',
      'Semi-private 5-hour sunset catamaran cruise with freshly grilled seafood and drinks',
      'Private guided archaeologist tour through the 3,600-year-old ruins of Akrotiri',
      'Private wine tasting at a clifftop volcanic vineyard',
      'Private VIP round-trip Mercedes airport/port transfers'
    ],
    inclusions: [
      '5 nights luxury caldera-view cave suite with private outdoor plunge pool',
      'Daily champagne breakfast served on your terrace',
      'Private round-trip VIP airport/port Mercedes transfers',
      'Semi-private sunset catamaran cruise with open bar and dinner',
      'Private chauffeured island excursion to Akrotiri and Pyrgos with licensed guide'
    ],
    exclusions: [
      'International and domestic flights/ferries',
      'Schengen visa fees',
      'Personal boutique shopping expenses and travel insurance'
    ],
    suitableFor: 'Honeymooners, couples celebrating milestone anniversaries.',
    featured: false,
    dailyItinerary: [
      {
        day: 1,
        title: 'Arrival in Santorini & Caldera Suite Check-in',
        description: 'Private transfer from Santorini Airport to your luxury cave suite in Oia. Evening sunset drink overlooking the caldera.',
        mealsIncluded: 'Dinner',
        highlight: 'First sunset cocktail from your private caldera plunge pool'
      },
      {
        day: 2,
        title: 'Ancient Akrotiri & Volcanic Wine Estate',
        description: 'Morning private tour of Ancient Akrotiri excavations. Afternoon visit to an estate winery for volcanic soil wine tasting.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Exploring 3,600-year-old preserved multistory stone villas'
      },
      {
        day: 3,
        title: 'Private Catamaran Caldera Sailing',
        description: 'Board a 45ft luxury catamaran from Ammoudi Bay. Cruise past the volcanic crater and swim in Palea Kameni hot springs.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Swimming in mineral-rich geothermal thermal coves'
      },
      {
        day: 4,
        title: 'Imerovigli Clifftop & Skaros Rock',
        description: 'Guided walking visit to historic Venetian stronghold Skaros Rock. Sunset fine dining in Imerovigli.',
        mealsIncluded: 'Breakfast, Dinner',
        highlight: 'Unobstructed panoramic sunset dining'
      },
      {
        day: 5,
        title: 'Pyrgos Medieval Village & Black Sand Beach',
        description: 'Explore the preserved inland fortified settlement of Pyrgos. Afternoon relaxation on the volcanic black sands of Perivolos.',
        mealsIncluded: 'Breakfast',
        highlight: 'Authentic Cycladic atmosphere far from tour buses'
      },
      {
        day: 6,
        title: 'Depart Santorini',
        description: 'Morning breakfast overlooking the sea. Private transfer to Santorini Airport (JTR) for onward flight.',
        mealsIncluded: 'Breakfast'
      }
    ]
  },

  {
    id: 'pkg-tokyo-cultural-immersion',
    slug: 'tokyo-cultural-heritage-and-modern-wonders',
    title: 'Tokyo Heritage & Futuristic Wonders',
    category: 'Group Tours',
    destination: 'Tokyo',
    destinationSlug: 'tokyo',
    duration: '7 Days / 6 Nights',
    durationDays: 7,
    heroImage: '/images/packages/pkg-tokyo-cultural.jpg',
    cardImage: '/images/packages/pkg-tokyo-cultural.jpg',
    overview: 'A deep cultural journey through Tokyo featuring ancient temples, private tea ceremonies, sushi masterclasses, Mount Fuji, and teamLab digital art.',
    locationsCovered: ['Shibuya', 'Asakusa (Senso-ji)', 'Ginza', 'Meiji Shrine', 'Hakone / Mount Fuji', 'Tsukiji'],
    indicativePriceUSD: 2300,
    pricingDetails: {
      basis: 'Per person on small group / twin-share basis',
      assumedTravelers: 4,
      accommodationCategory: '5-Star Luxury Central Tokyo Hotel (Marunouchi / Ginza)',
      departureCity: 'Islamabad / Lahore / Karachi',
      season: 'Spring (Cherry Blossom) or Autumn (Foliage)',
      checkedDate: 'November 2026'
    },
    highlights: [
      'Private certified English-speaking national guide for 3 touring days',
      'Full-day private excursion to Mount Fuji and Hakone hot springs',
      'Private sushi-making masterclass with an Edomae master chef',
      'VIP entrance to teamLab Borderless digital art museum',
      'Traditional tea ceremony in an authentic Edo-period imperial garden'
    ],
    inclusions: [
      '6 nights in a 5-Star luxury central Tokyo hotel',
      'Daily gourmet breakfast',
      'Private round-trip airport transfers in luxury Toyota Alphard',
      'Private certified English-speaking guide for 3 touring days',
      'Private day tour to Mount Fuji & Hakone with private vehicle',
      'teamLab Borderless and Shibuya Sky VIP tickets'
    ],
    exclusions: [
      'International flights',
      'Japan visa fees and courier costs',
      'Discretionary tipping and personal electronic shopping'
    ],
    suitableFor: 'Culture seekers, culinary connoisseurs, and small traveling groups.',
    featured: false,
    dailyItinerary: [
      {
        day: 1,
        title: 'Arrival in Tokyo & Ginza Welcome',
        description: 'Private transfer from Haneda/Narita to your luxury hotel. Welcome multi-course kaiseki dinner.',
        mealsIncluded: 'Dinner',
        highlight: 'Traditional kaiseki seasonal gastronomy'
      },
      {
        day: 2,
        title: 'Historic Asakusa & Tea Ceremony',
        description: 'Morning at Senso-ji Temple. Water bus cruise to Hama-rikyu gardens for an authentic matcha tea ceremony.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Private tea ceremony in imperial tea pavilion'
      },
      {
        day: 3,
        title: 'Meiji Shrine & Shibuya Sky Sunset',
        description: 'Tranquil walk through Meiji Jingu forest. Walk the Shibuya scramble and view the city from Shibuya Sky.',
        mealsIncluded: 'Breakfast',
        highlight: 'Sunset view from Shibuya Sky rooftop'
      },
      {
        day: 4,
        title: 'Mount Fuji & Hakone Onsen Day Trip',
        description: 'Private excursion to Lake Ashi with views of Mount Fuji. Relax in a mineral onsen bath.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Majestic views of Mount Fuji across Lake Ashi'
      },
      {
        day: 5,
        title: 'Tsukiji Market & Sushi Masterclass',
        description: 'Guided tour of Tsukiji Outer Market and hands-on sushi making class with a master chef.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Rolling authentic sushi alongside a veteran master'
      },
      {
        day: 6,
        title: 'Shinjuku Gyoen & teamLab Borderless',
        description: 'Morning walk through Shinjuku Gyoen gardens. Afternoon immersion in teamLab Borderless digital lights.',
        mealsIncluded: 'Breakfast',
        highlight: 'Interactive digital light art installations'
      },
      {
        day: 7,
        title: 'Tokyo Departure',
        description: 'Morning leisure in Ginza before private luxury transfer to airport for departure flight.',
        mealsIncluded: 'Breakfast'
      }
    ]
  },

  {
    id: 'pkg-rome-imperial-grandeur',
    slug: 'rome-imperial-heritage-and-vatican-treasures',
    title: 'Rome Imperial Heritage & Vatican Treasures',
    category: 'Luxury',
    destination: 'Rome',
    destinationSlug: 'rome',
    duration: '6 Days / 5 Nights',
    durationDays: 6,
    heroImage: '/images/packages/pkg-rome-heritage.jpg',
    cardImage: '/images/packages/pkg-rome-heritage.jpg',
    overview: 'An exclusive classical exploration of Rome with private underground Colosseum access, early-morning Vatican Sistine Chapel entry, and historic boutique palazzo living.',
    locationsCovered: ['Colosseum & Roman Forum', 'Vatican City (Sistine Chapel)', 'Pantheon', 'Trevi Fountain', 'Trastevere', 'Villa Borghese'],
    indicativePriceUSD: 1750,
    pricingDetails: {
      basis: 'Per person on twin-share basis',
      assumedTravelers: 2,
      accommodationCategory: '5-Star Historic Palazzo Hotel in Central Rome',
      departureCity: 'Islamabad / Lahore / Karachi',
      season: 'Spring (April – June) or Autumn (Sept – Oct)',
      checkedDate: 'November 2026'
    },
    highlights: [
      'VIP Colosseum underground and arena floor tour with an archaeologist',
      'Exclusive 07:30 AM early-access entry to Vatican Museums and Sistine Chapel',
      'Private hands-on artisanal Italian gelato and pasta masterclass',
      'Private Mercedes-Benz airport transfers and city excursions',
      '5 nights in a luxury restored historic palazzo near the Spanish Steps'
    ],
    inclusions: [
      '5 nights luxury 5-star boutique accommodation in central Rome',
      'Daily Italian breakfast',
      'Private Mercedes E/S-Class round-trip airport transfers',
      'VIP Colosseum underground and arena floor archaeologist tour',
      'Exclusive early-access Vatican and Sistine Chapel private tour',
      'All skip-the-line admissions and reservation fees'
    ],
    exclusions: [
      'International airfare',
      'Schengen visa fees',
      'Rome municipal city tax (payable directly at hotel checkout)',
      'Discretionary tipping'
    ],
    suitableFor: 'History and art lovers, discerning couples, and luxury cultural travelers.',
    featured: false,
    dailyItinerary: [
      {
        day: 1,
        title: 'Arrival in Rome & Spanish Steps Welcome',
        description: 'Private transfer from Fiumicino to your hotel near Piazza del Popolo. Gentle evening walking tour around Spanish Steps.',
        mealsIncluded: 'Dinner',
        highlight: 'Evening aperitivo overlooking the Spanish Steps'
      },
      {
        day: 2,
        title: 'Imperial Rome: Colosseum Underground & Forum',
        description: 'Private tour covering Colosseum arena and underground tunnels, followed by the Roman Forum and Palatine Hill.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Standing on the restricted Colosseum gladiator arena floor'
      },
      {
        day: 3,
        title: 'Early-Access Vatican & Sistine Chapel',
        description: 'Exclusive 07:30 AM entrance to the Vatican Museums and Sistine Chapel before the public. Tour of St. Peter’s Basilica.',
        mealsIncluded: 'Breakfast',
        highlight: 'Michelangelo’s Sistine Chapel ceiling in morning serenity'
      },
      {
        day: 4,
        title: 'Baroque Fountains & Gelato Masterclass',
        description: 'Guided stroll through Piazza Navona, Pantheon, and Trevi Fountain. Afternoon private masterclass learning authentic gelato making.',
        mealsIncluded: 'Breakfast',
        highlight: 'Handcrafting authentic Italian gelato'
      },
      {
        day: 5,
        title: 'Trastevere & Borghese Gallery',
        description: 'Morning private tour of Galleria Borghese viewing Bernini sculptures. Afternoon in the lanes of Trastevere.',
        mealsIncluded: 'Breakfast, Dinner',
        highlight: 'Bernini sculptures in Villa Borghese'
      },
      {
        day: 6,
        title: 'Departure from Rome',
        description: 'Morning Italian espresso before private luxury transfer to Rome Fiumicino Airport for return flight.',
        mealsIncluded: 'Breakfast'
      }
    ]
  },

  {
    id: 'pkg-istanbul-bosphorus-crossroads',
    slug: 'istanbul-crossroads-of-empires-and-bosphorus',
    title: 'Istanbul: Crossroads of Empires & Bosphorus Yachting',
    category: 'Adventure',
    destination: 'Istanbul',
    destinationSlug: 'istanbul',
    duration: '6 Days / 5 Nights',
    durationDays: 6,
    heroImage: '/images/packages/pkg-istanbul-bosphorus.jpg',
    cardImage: '/images/packages/pkg-istanbul-bosphorus.jpg',
    overview: 'Traverse continents across Istanbul with private Bosphorus yacht charters, imperial palaces, the subterranean Basilica Cistern, and centuries of Ottoman splendor.',
    locationsCovered: ['Sultanahmet (Hagia Sophia)', 'Blue Mosque', 'Topkapi Palace', 'Grand Bazaar', 'Bosphorus Strait', 'Dolmabahçe Palace'],
    indicativePriceUSD: 1350,
    pricingDetails: {
      basis: 'Per person on twin-share basis',
      assumedTravelers: 2,
      accommodationCategory: '5-Star Waterfront Hotel along the Bosphorus',
      departureCity: 'Islamabad / Lahore / Karachi',
      season: 'April – May or September – November',
      checkedDate: 'November 2026'
    },
    highlights: [
      'Private 2-hour sunset motor yacht charter cruising between Europe and Asia',
      'VIP guided tour of Hagia Sophia, Blue Mosque, and Topkapi Palace Harem',
      'Walk through the subterranean Basilica Cistern',
      'Atmospheric shopping inside the 4,000-stall Grand Bazaar',
      'Authentic Turkish hamam marble cleansing ritual'
    ],
    inclusions: [
      '5 nights luxury 5-star hotel accommodation along the Bosphorus',
      'Lavish daily Turkish buffet breakfast',
      'Private Mercedes Sprinter/Vito round-trip airport transfers',
      'Full-day private guided historical tour with licensed art historian',
      'Private 2-hour sunset motor yacht charter along the Bosphorus with refreshments',
      'All museum skip-the-line admissions'
    ],
    exclusions: [
      'International flights',
      'Turkish e-Visa fees',
      'Personal purchases at Grand Bazaar and optional tips'
    ],
    suitableFor: 'Couples, history enthusiasts, architecture lovers, and families.',
    featured: false,
    dailyItinerary: [
      {
        day: 1,
        title: 'Arrival in Istanbul & Bosphorus Welcome',
        description: 'VIP meet and greet at Istanbul Airport (IST). Private transfer to luxury waterfront hotel overlooking the Bosphorus.',
        mealsIncluded: 'Dinner',
        highlight: 'Waterfront view of illuminated Bosphorus Bridge'
      },
      {
        day: 2,
        title: 'Imperial Sultanahmet & Topkapi Palace',
        description: 'Private tour of Hagia Sophia, Blue Mosque, Hippodrome, and the royal Harem of Topkapi Palace.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Treasury and Harem private tour inside Topkapi Palace'
      },
      {
        day: 3,
        title: 'Basilica Cistern & Grand Bazaar',
        description: 'Descend into the mystical Basilica Cistern. Walk through the aromatic Spice Bazaar and historic Grand Bazaar.',
        mealsIncluded: 'Breakfast',
        highlight: 'Atmospheric subterranean lighting in Basilica Cistern'
      },
      {
        day: 4,
        title: 'Private Sunset Yacht Cruise Between Continents',
        description: 'Morning leisure in Beyoğlu and Galata Tower. Afternoon private 2-hour luxury motor yacht cruise along the Bosphorus.',
        mealsIncluded: 'Breakfast',
        highlight: 'Cruising between Europe and Asia on a private yacht'
      },
      {
        day: 5,
        title: 'Dolmabahçe Palace & Turkish Hamam',
        description: 'Tour the crystal chandeliers of Dolmabahçe Palace. Afternoon private traditional hamam bath ritual.',
        mealsIncluded: 'Breakfast',
        highlight: 'Authentic Ottoman relaxation in a 500-year-old marble bath'
      },
      {
        day: 6,
        title: 'Depart Istanbul',
        description: 'Morning Turkish breakfast before private chauffeur transfer to Istanbul Airport for onward journey.',
        mealsIncluded: 'Breakfast'
      }
    ]
  }
];
