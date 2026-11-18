import type { Destination } from '../types';

export const destinations: Destination[] = [
  {
    id: 'paris',
    slug: 'paris',
    name: 'Paris',
    country: 'France',
    region: 'Western Europe',
    heroImage: '/images/destinations/paris.jpg',
    cardImage: '/images/destinations/paris.jpg',
    shortDescription: 'The City of Light captivates with world-class museums, timeless Haussmannian boulevards, and gourmet culinary mastery.',
    overview: [
      'Paris stands as an enduring global epicenter for art, architecture, fashion, and haute cuisine. Spanning the gentle curves of the River Seine, France’s storied capital effortlessly juxtaposes monumental historic landmarks with intimate cobblestone alleyways, tree-shaded café terraces, and leafy riverside promenades.',
      'From the iconic iron lattice of the Eiffel Tower to the peerless antiquities within the Louvre and Musée d\'Orsay, the city provides an inexhaustible cultural journey. Stroll through the artistic quarter of Montmartre, browse haute couture along Avenue Montaigne, or savor artisanal viennoiserie in a quiet Saint-Germain-des-Prés courtyard.',
      'Our bespoke Parisian journeys combine private museum viewings, secluded Seine river cruises on vintage wooden vessels, and stays at hand-selected palace hotels and historic boutique properties across the 1st, 7th, and 8th arrondissements.'
    ],
    indicativePriceUSD: 1850,
    durationDays: 7,
    bestTimeToVisit: 'April to October (Spring blossom & mild autumn weather)',
    currency: 'Euro (EUR / €)',
    languages: ['French (official)', 'English (widely spoken in luxury hospitality)'],
    climate: 'Temperate oceanic with pleasant warm summers (20°C–26°C) and cool, romantic winters (3°C–8°C).',
    flightDurationNote: 'Direct or 1-stop flights from Islamabad/Lahore/Karachi to Paris Charles de Gaulle (CDG) average 8 to 11 hours depending on transit.',
    visaGuidance: {
      summary: 'Requires a standard Schengen Tourist Visa (Short Stay Type C).',
      portalName: 'France-Visas Official Government Portal',
      officialPortalUrl: 'https://france-visas.gouv.fr/',
      requirementsNote: 'Travelers must present valid passport, Schengen-compliant medical insurance (€30,000 min), verified lodging, return flight reservation, and bank statements showing sufficient funds.',
      lastVerifiedDate: 'November 2026'
    },
    attractions: [
      {
        name: 'The Eiffel Tower',
        image: '/images/attractions/attraction-eiffel.jpg',
        location: 'Champ de Mars, 7th arrondissement',
        description: 'Gustave Eiffel’s 1889 wrought-iron masterpiece soaring 330 meters over the Parisian skyline.',
        visitorTips: 'Pre-book summit tickets at least 60 days ahead; evening visits feature hourly 5-minute twinkling light shows.'
      },
      {
        name: 'The Louvre Museum',
        image: '/images/attractions/attraction-louvre.jpg',
        location: 'Rue de Rivoli, 1st arrondissement',
        description: 'The world’s largest art museum, home to the Mona Lisa, Venus de Milo, and over 35,000 masterworks.',
        visitorTips: 'Enter via the Carrousel du Louvre underground concourse to bypass the central pyramid queue.'
      },
      {
        name: 'Arc de Triomphe & Champs-Élysées',
        image: '/images/destinations/paris.jpg',
        location: 'Place Charles de Gaulle, 8th arrondissement',
        description: 'Neoclassical triumphal arch honoring French military victories, providing panoramic rooftop vistas over Paris.',
        visitorTips: 'Rooftop viewing platform requires 284 stairs; sunset offers golden illumination across the 12 radiating avenues.'
      },
      {
        name: 'Seine River Cruise & Pont Alexandre III',
        image: '/images/gallery/gallery-paris.jpg',
        location: 'River Seine central banks',
        description: 'Scenic water passageways offering views of Notre-Dame Cathedral, Musée d’Orsay, and ornate Belle Époque bridges.',
        visitorTips: 'Sunset private boat charters offer champagne aperitifs away from commercial tourist queues.'
      }
    ],
    sampleItinerary: [
      {
        day: 1,
        title: 'Arrival in Paris & Private River Welcome',
        description: 'Chauffeured airport transfer from CDG to your boutique hotel in Saint-Germain. Evening relaxed private Seine river cruise with champagne.',
        mealsIncluded: 'Dinner',
        highlight: 'Sunset viewing of illuminated Eiffel Tower'
      },
      {
        day: 2,
        title: 'Masterpieces of the Louvre & Palais Royal',
        description: 'Morning private guided tour of the Louvre focusing on classical European masters. Afternoon garden stroll through Jardin du Palais Royal and Galerie Vivienne.',
        mealsIncluded: 'Breakfast',
        highlight: 'Curated skip-the-line museum access'
      },
      {
        day: 3,
        title: 'Montmartre Artistic Enclave & Sacré-Cœur',
        description: 'Explore the Bohemian cobblestone alleys of Montmartre, Place du Tertre, and the domed basilica of Sacré-Cœur with panoramic city views.',
        mealsIncluded: 'Breakfast',
        highlight: 'Private pastry tasting tour with local French master baker'
      },
      {
        day: 4,
        title: 'Day Excursion: Royal Palace of Versailles',
        description: 'Private chauffeur excursion to the Château de Versailles. Walk through the Hall of Mirrors, Grand Trianon, and the manicured fountains of André Le Nôtre.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Private golf cart access through royal estate gardens'
      },
      {
        day: 5,
        title: 'Latin Quarter, Marais Boutiques & Musée Picasso',
        description: 'Discover medieval streets in Le Marais, historic private mansions (hôtels particuliers), and independent perfumeries and concept stores.',
        mealsIncluded: 'Breakfast',
        highlight: 'Exclusive bespoke fragrance workshop'
      },
      {
        day: 6,
        title: 'Eiffel Tower Gourmet Lunch & Haute Couture Avenue',
        description: 'Gourmet lunch atop Madame Brasserie or Jules Verne, followed by afternoon personal shopping appointment on Avenue Montaigne.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Fine dining overlooking the Paris skyline'
      },
      {
        day: 7,
        title: 'Farewell Paris & Chauffeured Departure',
        description: 'Morning café breakfast at Café de Flore or Les Deux Magots. Private luxury transfer to Charles de Gaulle Airport for your flight.',
        mealsIncluded: 'Breakfast'
      }
    ],
    sampleInclusions: [
      '6 nights accommodation in 4-Star or 5-Star handpicked boutique Parisian hotels',
      'Daily French breakfast',
      'Private round-trip Mercedes E/S-Class airport transfers',
      'Skip-the-line VIP entries to Louvre Museum and Versailles',
      'Private 2-hour Seine wooden yacht cruise with sommelier',
      'Full-day private Versailles transport and certified English-speaking art historian guide'
    ],
    sampleExclusions: [
      'International round-trip flights',
      'Schengen visa fees and processing charges',
      'Discretionary guide gratuities and porterage',
      'Personal expenses, retail purchases, and city tourism tax (payable at hotel)'
    ],
    galleryImages: [
      '/images/destinations/paris.jpg',
      '/images/attractions/attraction-eiffel.jpg',
      '/images/attractions/attraction-louvre.jpg',
      '/images/gallery/gallery-paris.jpg'
    ],
    seasons: [
      {
        season: 'Spring',
        months: 'April – May',
        temperature: '12°C – 20°C',
        highlights: 'Chestnut trees in bloom, outdoor bistro seating, vibrant parks, moderate crowds.',
        suitability: 'High'
      },
      {
        season: 'Summer',
        months: 'June – August',
        temperature: '18°C – 28°C',
        highlights: 'Long daylight hours, Paris Plages, open-air cinema, lively evening energy.',
        suitability: 'Good'
      },
      {
        season: 'Autumn',
        months: 'September – October',
        temperature: '11°C – 19°C',
        highlights: 'Golden foliage along the Seine, Paris Fashion Week, wine harvest festivals.',
        suitability: 'High'
      },
      {
        season: 'Winter',
        months: 'November – February',
        temperature: '3°C – 8°C',
        highlights: 'Festive holiday window displays, Christmas markets, museum quiet season.',
        suitability: 'Fair'
      }
    ],
    faqs: [
      {
        question: 'What is the best way to travel around central Paris?',
        answer: 'The Paris Metro and RER system is fast, dense, and convenient using the digital Navigo Easy pass or contactless card. For luxury travelers, our packages include private chauffeur transfers for excursions.'
      },
      {
        question: 'Is Paris suitable for families with young children?',
        answer: 'Yes. Paris offers numerous manicured public gardens with antique carousels, puppet theaters (Jardin du Luxembourg), the Seine river boats, and easy day excursions to Disneyland Paris.'
      },
      {
        question: 'Do restaurants in Paris cater to dietary preferences?',
        answer: 'Parisian chefs increasingly accommodate vegetarian, halal, and gluten-sensitive diets. We provide custom dining reservations that respect your dietary requirements.'
      }
    ],
    popular: true
  },

  {
    id: 'santorini',
    slug: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    region: 'Southern Europe',
    heroImage: '/images/destinations/santorini.jpg',
    cardImage: '/images/destinations/santorini.jpg',
    shortDescription: 'Spectacular volcanic caldera cliffs, blue-domed cliffside churches, and world-renowned Aegean sunsets.',
    overview: [
      'Santorini (Thira) is the jewel of the Cyclades, shaped by one of the largest volcanic eruptions in recorded human history. Perched dramatically on 300-meter cliffs plunging into the sapphire waters of a sunken volcanic caldera, the island’s cliff-hugging whitewashed villages form one of the world’s most recognized landscapes.',
      'From the refined cliffside promenade of Oia to the vibrant cobblestones of Fira and Imerovigli, visitors encounter private plunge pools carved into volcanic pumice, sun-drenched vineyards producing crisp Assyrtiko wines, and atmospheric black and red volcanic beaches.',
      'Our itineraries provide seamless luxury with private cliffside villa stays, semi-private sunset catamaran sailing along the volcanic hot springs, and curated access to the prehistoric ruins of Akrotiri.'
    ],
    indicativePriceUSD: 2100,
    durationDays: 6,
    bestTimeToVisit: 'May to October (Warm Aegean sunshine, minimal rainfall)',
    currency: 'Euro (EUR / €)',
    languages: ['Greek', 'English (widely spoken)'],
    climate: 'Dry Mediterranean with warm, breezy summers (25°C–31°C) and mild, quiet winters (11°C–16°C).',
    flightDurationNote: 'Domestic flight from Athens (ATH) to Santorini (JTR) takes 45 minutes; high-speed ferry takes 4.5 hours.',
    visaGuidance: {
      summary: 'Requires a standard Schengen Tourist Visa (Short Stay Type C).',
      portalName: 'Hellenic Republic Ministry of Foreign Affairs',
      officialPortalUrl: 'https://www.mfa.gr/',
      requirementsNote: 'Applicants submit travel insurance, confirmed accommodation vouchers, flight tickets, and sufficient bank maintenance certificates.',
      lastVerifiedDate: 'November 2026'
    },
    attractions: [
      {
        name: 'Oia Village & Sunset Viewpoint',
        image: '/images/attractions/attraction-oia.jpg',
        location: 'Northern tip of Santorini',
        description: 'World-famous cliffside village renowned for blue-domed churches, pastel captain mansions, and dramatic sunset over the caldera.',
        visitorTips: 'Private catamaran or reserved cliffside terrace dining is strongly recommended to avoid crowded public castle walls.'
      },
      {
        name: 'Ancient Akrotiri Archaeological Site',
        image: '/images/destinations/santorini.jpg',
        location: 'Southwestern Santorini',
        description: 'Minoan Bronze Age settlement preserved under volcanic ash from the 16th century BCE eruption, often called the Aegean Pompeii.',
        visitorTips: 'Explore with an official licensed archaeologist guide under the climate-controlled bioclimatic shelter.'
      },
      {
        name: 'Fira to Oia Caldera Hiking Path',
        image: '/images/gallery/gallery-santorini.jpg',
        location: 'Caldera rim, 10 km trail',
        description: 'Spectacular walking trail tracing the natural volcanic rim through Firostefani and Imerovigli with uninterrupted sea views.',
        visitorTips: 'Begin early morning around 07:30 to beat the midday sun and carry ample water and sun protection.'
      },
      {
        name: 'Red Beach & White Beach',
        image: '/images/destinations/santorini.jpg',
        location: 'Near Akrotiri village',
        description: 'Dramatic volcanic red-lava cliffs towering over dark mineral sand and translucent waters.',
        visitorTips: 'Best visited via sea excursion on a catamaran to admire the sheer geological rock formations safely.'
      }
    ],
    sampleItinerary: [
      {
        day: 1,
        title: 'Arrival in Santorini & Caldera Suite Check-in',
        description: 'Private airport or port transfer to your luxury cave suite in Oia or Imerovigli with private infinity plunge pool. Welcome reception.',
        mealsIncluded: 'Dinner',
        highlight: 'First sunset cocktail from your private balcony'
      },
      {
        day: 2,
        title: 'Minoan Akrotiri & Volcanic Wine Estate',
        description: 'Private morning tour of the Ancient Akrotiri excavations. Afternoon visit to an estate winery for volcanic soil wine and local cheese tasting.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Exploring 3,600-year-old preserved multistory stone villas'
      },
      {
        day: 3,
        title: 'Private Catamaran Caldera Sailing',
        description: 'Board a 45ft luxury catamaran from Ammoudi Bay. Cruise past the volcanic crater, swim in Palea Kameni hot springs, and enjoy freshly grilled seafood.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Swimming in mineral-rich geothermal thermal coves'
      },
      {
        day: 4,
        title: 'Imerovigli Clifftop & Skaros Rock',
        description: 'Leisurely morning followed by a guided walking visit to historic Venetian stronghold Skaros Rock. Sunset fine dining in Imerovigli.',
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
    ],
    sampleInclusions: [
      '5 nights luxury caldera-view cave suite with private outdoor plunge pool',
      'Daily champagne breakfast served on your terrace',
      'Private round-trip VIP airport/port Mercedes transfers',
      'Semi-private 5-hour sunset catamaran cruise with open bar and grilled lunch',
      'Private chauffeured island excursion to Akrotiri and Pyrgos with licensed guide'
    ],
    sampleExclusions: [
      'International flights and ferry connections',
      'Schengen Visa fees',
      'Personal boutique shopping expenses and travel insurance'
    ],
    galleryImages: [
      '/images/destinations/santorini.jpg',
      '/images/attractions/attraction-oia.jpg',
      '/images/gallery/gallery-santorini.jpg'
    ],
    seasons: [
      {
        season: 'Spring',
        months: 'April – May',
        temperature: '17°C – 23°C',
        highlights: 'Wildflowers on cliffs, mild sunny weather, peaceful uncrowded footpaths.',
        suitability: 'High'
      },
      {
        season: 'Summer',
        months: 'June – August',
        temperature: '26°C – 33°C',
        highlights: 'Peak beach weather, energetic beach clubs, guaranteed sunshine, vibrant nightlife.',
        suitability: 'High'
      },
      {
        season: 'Autumn',
        months: 'September – October',
        temperature: '21°C – 27°C',
        highlights: 'Warm sea temperatures, golden sunset light, pleasant walking climate.',
        suitability: 'High'
      },
      {
        season: 'Winter',
        months: 'November – March',
        temperature: '10°C – 16°C',
        highlights: 'Peaceful tranquility; many hotels and restaurants close seasonally.',
        suitability: 'Fair'
      }
    ],
    faqs: [
      {
        question: 'Is Santorini accessible for travelers with mobility limitations?',
        answer: 'Due to cliffside topography, many caldera hotels involve steep stone stairs and uneven cobblestones. We carefully select properties in Fira or Imerovigli that offer level road access and minimal stair climbs.'
      },
      {
        question: 'How do you reach Santorini from Athens?',
        answer: 'You can fly directly via Aegean Airlines or Olympic Air in approximately 45 minutes, or take a high-speed passenger ferry (such as Seajets) in 4.5 to 5 hours from Piraeus Port.'
      }
    ],
    popular: true
  },

  {
    id: 'maldives',
    slug: 'maldives',
    name: 'Maldives',
    country: 'Maldives',
    region: 'Indian Ocean',
    heroImage: '/images/destinations/maldives.jpg',
    cardImage: '/images/destinations/maldives.jpg',
    shortDescription: 'Secluded private island resorts, overwater villas over bioluminescent waters, and vibrant coral atolls.',
    overview: [
      'The Republic of Maldives is an archipelago of 1,192 coral islands organized into 26 distinct natural atolls across the equatorial Indian Ocean. Renowned as the quintessential sanctuary of private luxury, the Maldives pioneered the one-island, one-resort concept where intimacy, pristine natural beauty, and barefoot elegance meet.',
      'Guests wake up in overwater pavilions suspended above gin-clear lagoons teeming with reef sharks, sea turtles, and manta rays. Whether indulging in underwater spa therapies, dining on a solitary sandbank under the constellations, or cruising alongside playful spinner dolphins, the Maldives represents escapism at its most refined.',
      'Wanderlux Travels partners exclusively with certified sustainable 5-star private island properties, providing round-trip transfers via scenic Twin Otter seaplane or private luxury speedboats directly from Velana International Airport.'
    ],
    indicativePriceUSD: 2450,
    durationDays: 5,
    bestTimeToVisit: 'November to April (Dry northeast monsoon, calmest seas)',
    currency: 'Maldivian Rufiyaa (MVR), US Dollars ($) universally used in resorts',
    languages: ['Dhivehi (official)', 'English (predominant in all resorts)'],
    climate: 'Tropical warm marine; consistent temperatures between 27°C and 31°C year-round with refreshing sea breezes.',
    flightDurationNote: 'Direct or 1-stop flights from Islamabad/Lahore/Karachi to Malé (MLE) take 5 to 7 hours.',
    visaGuidance: {
      summary: '30-day tourist visa granted free on arrival for all nationalities.',
      portalName: 'Maldives Immigration (IMUGA Portal)',
      officialPortalUrl: 'https://imuga.immigration.gov.mv/',
      requirementsNote: 'Mandatory electronic Traveler Declaration must be submitted online within 96 hours before arrival and departure. Must show confirmed resort booking and return ticket.',
      lastVerifiedDate: 'November 2026'
    },
    attractions: [
      {
        name: 'Private Overwater Villa Living',
        image: '/images/packages/pkg-maldives-honeymoon.jpg',
        location: 'Selected Luxury Atoll Resort',
        description: 'Expansive private wooden villas featuring direct lagoon staircases, private infinity pools, and glass floor viewing panels.',
        visitorTips: 'Sunset-facing villas provide optimal evening vistas and cooler morning shade.'
      },
      {
        name: 'Baa Atoll UNESCO Biosphere Reserve',
        image: '/images/destinations/maldives.jpg',
        location: 'Central Maldives',
        description: 'Globally renowned marine ecosystem supporting hundreds of manta rays and whale sharks, especially at Hanifaru Bay.',
        visitorTips: 'Manta feeding aggregations peak between June and November during southwest monsoon currents.'
      },
      {
        name: 'Secluded Sandbank Private Dining',
        image: '/images/blog/blog-maldives-islands.jpg',
        location: 'Private reef atoll',
        description: 'An ephemeral strip of powder-soft white sand surrounded by 360 degrees of turquoise ocean with personalized private chef service.',
        visitorTips: 'Tides govern access; experience is arranged during low tide with lantern lighting at dusk.'
      },
      {
        name: 'Coral Reef Snorkeling & Marine Safari',
        image: '/images/hero/hero-4.jpg',
        location: 'Resort House Reef',
        description: 'Immediate access to thriving coral gardens inhabited by hawksbill turtles, eagle rays, and vibrant anemone fish.',
        visitorTips: 'Always use reef-safe mineral sunscreen (non-nano zinc oxide) to protect delicate coral polyp health.'
      }
    ],
    sampleItinerary: [
      {
        day: 1,
        title: 'Seaplane Arrival & Overwater Suite Check-in',
        description: 'Arrival at Velana International Airport (MLE). VIP lounge reception and scenic 35-minute seaplane transfer over turquoise atolls. Check in to your private Overwater Villa.',
        mealsIncluded: 'Dinner',
        highlight: 'Aerial seaplane views over circular coral atolls'
      },
      {
        day: 2,
        title: 'Lagoon Snorkeling & House Reef Exploration',
        description: 'Morning guided marine biology snorkeling safari along the outer reef wall. Afternoon leisure at your private infinity pool.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        highlight: 'Close encounters with wild sea turtles and reef fish'
      },
      {
        day: 3,
        title: 'Sunset Dolphin Cruise on Traditional Dhoni',
        description: 'Relaxation day. Late afternoon cruise on a handcrafted wooden Maldivian dhoni into deeper channels where spinner dolphins leap.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        highlight: 'Pods of wild dolphins jumping in golden sunset light'
      },
      {
        day: 4,
        title: 'Underwater Spa & Private Sandbank Dinner',
        description: 'Morning signature wellness massage with glass floor ocean viewing. Evening private boat ride to an uninhabited sandbank for a torchlit 5-course seafood dinner.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        highlight: 'Fine dining under open celestial skies surrounded by ocean'
      },
      {
        day: 5,
        title: 'Farewell Paradise & Scenic Transfer',
        description: 'Floating champagne breakfast delivered to your villa pool. Seaplane transfer back to Malé for your connecting flight home.',
        mealsIncluded: 'Breakfast',
        highlight: 'Floating pool breakfast experience'
      }
    ],
    sampleInclusions: [
      '4 nights in an ultra-luxury Overwater Pool Villa',
      'All-inclusive gourmet dining across resort fine-dining restaurants',
      'Round-trip scenic seaplane transfers between Malé (MLE) and resort',
      'Daily complimentary non-motorized watersports (kayak, paddleboard, snorkel gear)',
      'One 60-minute couples ocean spa ritual',
      'One sunset dolphin cruise'
    ],
    sampleExclusions: [
      'International flights to/from Malé',
      'Motorized water sports (jet ski, flyboard)',
      'Scuba diving certification courses',
      'Premium cellar vintage champagnes'
    ],
    galleryImages: [
      '/images/destinations/maldives.jpg',
      '/images/hero/hero-4.jpg',
      '/images/packages/pkg-maldives-honeymoon.jpg',
      '/images/blog/blog-maldives-islands.jpg'
    ],
    seasons: [
      {
        season: 'Winter',
        months: 'December – April',
        temperature: '28°C – 31°C',
        highlights: 'Dry northeast monsoon, crystal water clarity, calm ocean, ideal for diving.',
        suitability: 'High'
      },
      {
        season: 'Summer',
        months: 'May – October',
        temperature: '27°C – 30°C',
        highlights: 'Southwest monsoon, occasional tropical showers, best for surfing and manta ray encounters.',
        suitability: 'Good'
      }
    ],
    faqs: [
      {
        question: 'Do we need a visa prior to traveling to the Maldives?',
        answer: 'No. The Maldives provides a 30-day tourist visa on arrival free of charge to all nationalities, provided you have a valid passport (minimum 6 months validity), confirmed hotel booking, and return ticket.'
      },
      {
        question: 'What is the luggage allowance on domestic seaplanes?',
        answer: 'Standard seaplane baggage allowance is 20 kg checked luggage plus 5 kg hand luggage per passenger. Excess luggage can be paid directly or stored at the airport lounge.'
      }
    ],
    popular: true
  },

  {
    id: 'dubai',
    slug: 'dubai',
    name: 'Dubai',
    country: 'United Arab Emirates',
    region: 'Middle East',
    heroImage: '/images/destinations/dubai.jpg',
    cardImage: '/images/destinations/dubai.jpg',
    shortDescription: 'Hyper-modern architecture, luxury shopping, pristine desert conservation dunes, and Michelin-starred dining.',
    overview: [
      'Dubai is an astonishing testament to human ambition, rising from Arabian desert sands into one of the globe’s most dynamic metropolises. Defined by architectural marvels, world-class hospitality, and safe family-friendly infrastructure, Dubai seamlessly bridges futuristic innovation with authentic Bedouin heritage.',
      'Visitors can stand atop the world’s tallest structure at the Burj Khalifa, witness dancing fountains against neon-lit skylines, traverse the undulating golden dunes of the Dubai Desert Conservation Reserve in vintage Land Rovers, or unwind on the private beaches of the Palm Jumeirah.',
      'Our Dubai programs cater to discerning couples and multi-generational families, including private desert camp banquets, VIP yacht cruises through Dubai Marina, and priority admission to cultural attractions like the Museum of the Future.'
    ],
    indicativePriceUSD: 1250,
    durationDays: 5,
    bestTimeToVisit: 'November to March (Pleasant outdoor weather 20°C–28°C)',
    currency: 'UAE Dirham (AED / د.إ)',
    languages: ['Arabic (official)', 'English (universally spoken)'],
    climate: 'Subtropical desert; extremely hot summers (38°C–45°C), delightfully warm and sunny winters (18°C–26°C).',
    flightDurationNote: 'Direct flights from Islamabad/Lahore/Karachi to Dubai (DXB) take approximately 2 to 3.5 hours.',
    visaGuidance: {
      summary: 'Tourist eVisa or Visa-on-Arrival depending on passport nationality.',
      portalName: 'Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) / GDRFA Dubai',
      officialPortalUrl: 'https://smartservices.icp.gov.ae/',
      requirementsNote: 'Travelers applying for tourist eVisas need a color passport copy, passport photo, hotel confirmation, and return ticket. Processing typically takes 24–48 hours.',
      lastVerifiedDate: 'November 2026'
    },
    attractions: [
      {
        name: 'Burj Khalifa & The Dubai Fountain',
        image: '/images/attractions/attraction-burj.jpg',
        location: 'Downtown Dubai',
        description: 'The world’s tallest skyscraper (828m) offering 360-degree observation decks on Levels 124, 125, and Level 148 Sky.',
        visitorTips: 'VIP At The Top SKY tickets provide fast-track elevators and luxury lounge hospitality away from general queues.'
      },
      {
        name: 'Dubai Desert Conservation Reserve',
        image: '/images/packages/pkg-dubai-family.jpg',
        location: 'Dubai Desert, 45 mins from Downtown',
        description: 'Pristine 225-sq-km desert sanctuary safeguarding Arabian oryx, gazelles, and indigenous desert ecosystems.',
        visitorTips: 'Heritage safaris using vintage 1950s Land Rovers ensure sustainable wildlife viewing with cultural falconry displays.'
      },
      {
        name: 'Museum of the Future',
        image: '/images/destinations/dubai.jpg',
        location: 'Sheikh Zayed Road, Trade Centre',
        description: 'Toroid architectural masterpiece enveloped in Arabic calligraphy by artist Mattar bin Lahej, showcasing tomorrow’s technology.',
        visitorTips: 'Tickets sell out weeks in advance; early booking is essential.'
      },
      {
        name: 'Palm Jumeirah & The View at The Palm',
        image: '/images/blog/blog-dubai-guide.jpg',
        location: 'Palm Jumeirah archipelago',
        description: 'Engineering marvel of palm-shaped man-made islands featuring luxury resorts, private villas, and panoramic 240m observation deck.',
        visitorTips: 'Visit at golden hour before sunset for views of the Dubai Marina skyline and Arabian Gulf.'
      }
    ],
    sampleItinerary: [
      {
        day: 1,
        title: 'Arrival in Dubai & Marina Yacht Welcome',
        description: 'Private luxury transfer from DXB to your 5-star hotel in Downtown or Palm Jumeirah. Sunset 2-hour private yacht cruise departing Dubai Marina.',
        mealsIncluded: 'Dinner',
        highlight: 'Glittering Dubai Marina skyline viewed from the water'
      },
      {
        day: 2,
        title: 'Futuristic Downtown: Burj Khalifa & Museum of the Future',
        description: 'Morning VIP visit to the Museum of the Future. Afternoon ascent to Burj Khalifa At The Top SKY lounge, followed by evening fountain viewing.',
        mealsIncluded: 'Breakfast',
        highlight: 'Sunset panoramic observation from the 148th floor'
      },
      {
        day: 3,
        title: 'Heritage Desert Safari & Bedouin Dining',
        description: 'Morning at leisure. Mid-afternoon pickup in vintage 4x4 Land Rovers into the Dubai Desert Conservation Reserve for wildlife drives, falconry, and a private royal camp dinner.',
        mealsIncluded: 'Breakfast, Dinner',
        highlight: 'Authentic Emirati culinary feast under starry desert skies'
      },
      {
        day: 4,
        title: 'Old Dubai Heritage, Gold Souk & Al Fahidi',
        description: 'Discover traditional wind-tower architecture in Al Fahidi Historical Neighborhood, cross the Dubai Creek on an authentic abra boat, and explore the Spice and Gold Souks.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Crossing Dubai Creek on a traditional wooden abra'
      },
      {
        day: 5,
        title: 'Palm Jumeirah & Departure',
        description: 'Morning relaxation at hotel beach or retail excursion at Dubai Mall. Private chauffeur transfer to Dubai International Airport.',
        mealsIncluded: 'Breakfast'
      }
    ],
    sampleInclusions: [
      '4 nights in a 5-Star luxury Downtown or Palm Jumeirah hotel',
      'Daily international buffet breakfast',
      'Private round-trip airport transfers in luxury BMW/Mercedes',
      'VIP Burj Khalifa Level 148 SKY fast-track admission',
      'Platinum Heritage private desert safari with 6-course banquet dinner',
      'Private 2-hour luxury yacht charter through Dubai Marina and Palm lagoon'
    ],
    sampleExclusions: [
      'International airfare',
      'UAE tourist visa fees (if required for your passport)',
      'Tourism Dirham fee (payable directly to hotel at checkout)',
      'Personal shopping and optional waterpark admissions'
    ],
    galleryImages: [
      '/images/destinations/dubai.jpg',
      '/images/attractions/attraction-burj.jpg',
      '/images/packages/pkg-dubai-family.jpg',
      '/images/blog/blog-dubai-guide.jpg'
    ],
    seasons: [
      {
        season: 'Winter',
        months: 'November – March',
        temperature: '20°C – 28°C',
        highlights: 'Prime outdoor season, rooftop dining, beach weather, Dubai Shopping Festival.',
        suitability: 'High'
      },
      {
        season: 'Spring',
        months: 'April – May',
        temperature: '27°C – 36°C',
        highlights: 'Warmer days, warm sea temperatures, fewer tourist crowds, pleasant evenings.',
        suitability: 'Good'
      },
      {
        season: 'Summer',
        months: 'June – September',
        temperature: '37°C – 46°C',
        highlights: 'Indoor entertainment, luxury shopping mall discounts, discounted luxury hotel suites.',
        suitability: 'Fair'
      },
      {
        season: 'Autumn',
        months: 'October',
        temperature: '28°C – 35°C',
        highlights: 'Transition into outdoor season, calm waters, opening of outdoor venues.',
        suitability: 'High'
      }
    ],
    faqs: [
      {
        question: 'What is the dress code in Dubai for international visitors?',
        answer: 'Dubai is cosmopolitan and welcoming. While resort wear and swimwear are completely normal at beaches and hotel pools, modest dress covering shoulders and knees is appreciated in shopping malls, public markets, and heritage areas.'
      },
      {
        question: 'Can Pakistani passport holders obtain a UAE tourist visa?',
        answer: 'Yes. Tourist eVisas for 30 or 60 days can be processed through our visa assistance desk or approved airline partners with standard documentation.'
      }
    ],
    popular: true
  },

  {
    id: 'bali',
    slug: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    region: 'Southeast Asia',
    heroImage: '/images/destinations/bali.jpg',
    cardImage: '/images/destinations/bali.jpg',
    shortDescription: 'Spiritual temple sanctuaries, emerald rice terraces in Ubud, volcanic peaks, and idyllic coastal sunsets.',
    overview: [
      'Bali, the "Island of the Gods," radiates a distinct spiritual warmth grounded in ancient Balinese Hindu traditions, ornate stone water temples, and terraced agricultural landscapes. From the misty highland jungles of Ubud to the dramatic coastal sea cliffs of Uluwatu, Bali captivates all the senses.',
      'Immerse yourself in wellness with private yoga pavilions and Balinese spa therapies, discover traditional subak irrigation systems among the Tegalalang rice fields, or witness the sunset Kecak fire dance against crashing Indian Ocean breakers.',
      'Our Bali sanctuaries combine private secluded pool villas in the artistic heart of Ubud with beachfront luxury suites in Seminyak or Nusa Dua, providing dedicated private chauffeurs and knowledgeable Balinese cultural hosts.'
    ],
    indicativePriceUSD: 1150,
    durationDays: 7,
    bestTimeToVisit: 'April to October (Dry season, low humidity, clear sunny skies)',
    currency: 'Indonesian Rupiah (IDR / Rp)',
    languages: ['Indonesian (Bahasa Indonesia)', 'Balinese', 'English (widely spoken in tourism)'],
    climate: 'Tropical warm marine; warm and humid year-round (26°C–31°C) with dry season breezes from May to September.',
    flightDurationNote: 'Connecting flights from Pakistan (via Bangkok, Kuala Lumpur, or Doha) to Denpasar (DPS) take approximately 9 to 12 hours.',
    visaGuidance: {
      summary: '30-day Electronic Visa on Arrival (e-VOA) available online.',
      portalName: 'Directorate General of Immigration of Indonesia (Molina Portal)',
      officialPortalUrl: 'https://molina.imigrasi.go.id/',
      requirementsNote: 'Passport must have at least 6 months validity. Bali Regional Tourism Levy (IDR 150,000) payable online before arrival via the Love Bali official portal.',
      lastVerifiedDate: 'November 2026'
    },
    attractions: [
      {
        name: 'Tegalalang Rice Terraces',
        image: '/images/destinations/bali.jpg',
        location: 'Ubud, Gianyar Regency',
        description: 'Centuries-old tiered green rice paddies using the UNESCO-recognized communal Subak water irrigation system.',
        visitorTips: 'Arrive at sunrise (around 06:30) for soft morning mist and peaceful trails before tourist buses arrive.'
      },
      {
        name: 'Uluwatu Clifftop Temple & Kecak Dance',
        image: '/images/packages/pkg-bali-retreat.jpg',
        location: 'Bukit Peninsula',
        description: 'Ancient sea temple perched on a sheer 70-meter limestone cliff overlooking the Indian Ocean, famous for dusk choral performances.',
        visitorTips: 'Secure personal sunglasses and phones as resident macaques are curious and agile.'
      },
      {
        name: 'Sacred Monkey Forest Sanctuary',
        image: '/images/gallery/gallery-bali.jpg',
        location: 'Padangtegal, Ubud',
        description: 'Lush 12.5-hectare sacred rainforest sanctuary housing over 1,200 Balinese long-tailed macaques and three ancient 14th-century temples.',
        visitorTips: 'Stay on designated paved paths and refrain from touching or feeding the animals.'
      },
      {
        name: 'Tirta Empul Holy Water Temple',
        image: '/images/destinations/bali.jpg',
        location: 'Tampak Siring',
        description: 'Sacred spring water temple founded in 962 CE where pilgrims participate in traditional Melukat purification rituals.',
        visitorTips: 'Sarongs are required and provided at the entrance; respect ritual etiquette in the cleansing pools.'
      }
    ],
    sampleItinerary: [
      {
        day: 1,
        title: 'Arrival in Denpasar & Ubud Jungle Check-in',
        description: 'Private chauffeur transfer from Ngurah Rai Airport (DPS) to your private river-valley pool villa in Ubud. Welcome Balinese massage.',
        mealsIncluded: 'Dinner',
        highlight: 'Sound of jungle river from your private villa deck'
      },
      {
        day: 2,
        title: 'Tegalalang Terraces & Sacred Water Temple',
        description: 'Early morning walk through the Tegalalang rice paddies. Visit to Tirta Empul temple for a respectful cultural purification ceremony.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Private organic garden lunch overlooking rice fields'
      },
      {
        day: 3,
        title: 'Artisan Villages & Traditional Cooking Class',
        description: 'Explore traditional wood-carving in Mas and silver smithing in Celuk. Private culinary workshop preparing traditional spiced dishes.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Market visit and hands-on Balinese feast'
      },
      {
        day: 4,
        title: 'Transfer to Southern Coast & Uluwatu Sunset',
        description: 'Scenic drive to southern Bali. Check into your beachfront luxury resort in Seminyak. Evening sunset visit to Uluwatu Cliff Temple for the Kecak Dance.',
        mealsIncluded: 'Breakfast',
        highlight: 'Dramatic cliffside fire dance against the setting sun'
      },
      {
        day: 5,
        title: 'Private Speedboat Excursion to Nusa Penida',
        description: 'Private boat to Nusa Penida island. Marvel at Kelingking "T-Rex" Beach viewpoint, Broken Beach, and crystal snorkeling lagoons.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Snorkeling with giant manta rays at Manta Point'
      },
      {
        day: 6,
        title: 'Coastal Wellness & Seafood Dining at Jimbaran',
        description: 'Relaxation day by the ocean. Evening candlelit beachfront grilled seafood banquet directly on the sands of Jimbaran Bay.',
        mealsIncluded: 'Breakfast, Dinner',
        highlight: 'Fresh grilled lobster on the beach with sunset view'
      },
      {
        day: 7,
        title: 'Farewell Bali Departure',
        description: 'Morning leisure and shopping in Seminyak. Private transfer to Denpasar Airport for departure flight.',
        mealsIncluded: 'Breakfast'
      }
    ],
    sampleInclusions: [
      '3 nights private pool villa in Ubud & 3 nights 5-star beachfront resort in Seminyak',
      'Daily gourmet breakfast',
      'Private air-conditioned Toyota Alphard/Innova transfers throughout',
      'Private Nusa Penida speedboat tour with snorkeling equipment',
      'All temple entry tickets, sarongs, and professional English-speaking Balinese guide'
    ],
    sampleExclusions: [
      'International flights',
      'Indonesian e-VOA fee and Bali Tourism Tax Levy',
      'Personal laundry, alcoholic beverages, and discretionary tipping'
    ],
    galleryImages: [
      '/images/destinations/bali.jpg',
      '/images/packages/pkg-bali-retreat.jpg',
      '/images/gallery/gallery-bali.jpg'
    ],
    seasons: [
      {
        season: 'Spring',
        months: 'April – May',
        temperature: '25°C – 31°C',
        highlights: 'Start of dry season, green vegetation, low humidity, pleasant ocean breezes.',
        suitability: 'High'
      },
      {
        season: 'Summer',
        months: 'June – August',
        temperature: '24°C – 30°C',
        highlights: 'Peak dry season, coolest evenings, ideal beach conditions, world-class surf.',
        suitability: 'High'
      },
      {
        season: 'Autumn',
        months: 'September – October',
        temperature: '25°C – 32°C',
        highlights: 'Warm sea, low rainfall, tranquil atmosphere across resorts.',
        suitability: 'High'
      },
      {
        season: 'Winter',
        months: 'November – March',
        temperature: '26°C – 31°C',
        highlights: 'Wet tropical season with brief afternoon showers, lush greenery, lower hotel rates.',
        suitability: 'Good'
      }
    ],
    faqs: [
      {
        question: 'Do travelers need any specific vaccines for Bali?',
        answer: 'Standard routine immunizations (Tetanus, Hepatitis A) are recommended. Bali is classified as low risk for malaria in typical tourist areas, but mosquito repellent is advisable.'
      },
      {
        question: 'How do you pay the Bali Tourist Tax?',
        answer: 'The provincial government tourist levy (approx. IDR 150,000) can be paid in advance via the official Love Bali website or app, or upon arrival at the designated counters in the airport.'
      }
    ],
    popular: true
  },

  {
    id: 'tokyo',
    slug: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    region: 'East Asia',
    heroImage: '/images/destinations/tokyo.jpg',
    cardImage: '/images/destinations/tokyo.jpg',
    shortDescription: 'Futuristic neon skyscrapers, serene Shinto shrines, Michelin-starred gastronomy, and effortless train precision.',
    overview: [
      'Tokyo is a mesmerizing metropolis where centuries-old Edo traditions coexist seamlessly with cutting-edge robotics, neon-lit pedestrian crossings, and ultra-refined aesthetics. Every district has its own distinct personality: from the tranquil wooded paths of Meiji Jingu to the bustling energy of Shibuya and Shinjuku.',
      'Indulge in the world’s highest concentration of Michelin-starred dining, savor delicate matcha in Edo-period feudal gardens, ride the bullet train (Shinkansen) at 320 km/h, and browse artisan pottery in Asakusa.',
      'Our Japanese itineraries include private certified English-speaking national guides, first-class Shinkansen ticketing, luxury hotel accommodations near Ginza or Marunouchi, and exclusive tea ceremony and sushi masterclass experiences.'
    ],
    indicativePriceUSD: 2300,
    durationDays: 7,
    bestTimeToVisit: 'March to May (Cherry blossom spring) & September to November (Autumn foliage)',
    currency: 'Japanese Yen (JPY / ¥)',
    languages: ['Japanese (official)', 'English (widespread bilingual signage across rail and transit)'],
    climate: 'Humid subtropical; mild blossoms in spring (12°C–20°C), vibrant autumn leaves (14°C–22°C), crisp clear winters (2°C–10°C).',
    flightDurationNote: 'Flights from Pakistan (via Bangkok, Doha, or Dubai) to Tokyo Haneda (HND) or Narita (NRT) average 10 to 14 hours travel time.',
    visaGuidance: {
      summary: 'Tourist Visa required prior to arrival; eVisa available in selected jurisdictions.',
      portalName: 'Ministry of Foreign Affairs of Japan (MOFA)',
      officialPortalUrl: 'https://www.mofa.go.jp/j_info/visit/visa/index.html',
      requirementsNote: 'Applicants submit passport, visa application form, flight itinerary, bank certificate, tax documents, and daily schedule in Japan.',
      lastVerifiedDate: 'November 2026'
    },
    attractions: [
      {
        name: 'Senso-ji Temple & Asakusa',
        image: '/images/packages/pkg-tokyo-cultural.jpg',
        location: 'Taito, Asakusa',
        description: 'Tokyo’s oldest Buddhist temple founded in 645 CE, entered through the iconic Kaminarimon (Thunder Gate) and Nakamise shopping street.',
        visitorTips: 'Early morning (before 08:30) allows tranquil photography of the Five-Story Pagoda without the afternoon crowds.'
      },
      {
        name: 'Shibuya Crossing & Hachiko Statue',
        image: '/images/gallery/gallery-tokyo.jpg',
        location: 'Shibuya Ward',
        description: 'The world’s busiest pedestrian scramble intersection, where thousands of people cross simultaneously beneath colossal video billboards.',
        visitorTips: 'View the flow from the Shibuya Sky observation deck on the 47th floor for an unparalleled aerial perspective.'
      },
      {
        name: 'Meiji Jingu Shrine & Yoyogi Forest',
        image: '/images/destinations/tokyo.jpg',
        location: 'Shibuya, near Harajuku',
        description: 'Serene Shinto shrine dedicated to Emperor Meiji, set within a 170-acre evergreen forest of 100,000 donated trees.',
        visitorTips: 'Weekend mornings often offer glimpses of traditional Shinto wedding processions led by shrine priests and miko.'
      },
      {
        name: 'Mount Fuji & Hakone Day Excursion',
        image: '/images/destinations/tokyo.jpg',
        location: 'Fuji-Hakone-Izu National Park (Day trip)',
        description: 'Japan’s sacred 3,776-meter volcanic peak, best enjoyed via the Hakone ropeway, Lake Ashi pirate boat cruise, and hot spring onsen.',
        visitorTips: 'Winter and autumn provide the clearest visibility of Mount Fuji’s snow-capped summit.'
      }
    ],
    sampleItinerary: [
      {
        day: 1,
        title: 'Arrival at Haneda/Narita & Ginza Welcome',
        description: 'Private chauffeur transfer to your luxury hotel in Marunouchi or Ginza. Evening relaxation and welcome multi-course kaiseki dinner.',
        mealsIncluded: 'Dinner',
        highlight: 'Traditional kaiseki seasonal gastronomy'
      },
      {
        day: 2,
        title: 'Historic Asakusa, Senso-ji & Sumida River Cruise',
        description: 'Morning exploration of Senso-ji Temple with an art historian guide. Water bus cruise along the Sumida River to the landscape gardens of Hama-rikyu.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Private matcha tea ceremony in an imperial tea house'
      },
      {
        day: 3,
        title: 'Meiji Shrine, Harajuku & Shibuya Scramble',
        description: 'Tranquil walk through the towering cypress gates of Meiji Jingu. Explore the fashion corridors of Omotesando and ascend Shibuya Sky for sunset.',
        mealsIncluded: 'Breakfast',
        highlight: '360-degree sunset view from Shibuya Sky rooftop'
      },
      {
        day: 4,
        title: 'Day Excursion: Mount Fuji & Hakone Onsen',
        description: 'Private excursion to Lake Ashi and the volcanic Owakudani Valley with views of Mount Fuji. Relax in a private mountain mineral onsen bath.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Majestic views of sacred Mount Fuji across Lake Ashi'
      },
      {
        day: 5,
        title: 'Tsukiji Outer Market & Sushi Masterclass',
        description: 'Morning guided culinary discovery through Tsukiji Outer Market sampling tamagoyaki, fresh tuna, and oysters. Private sushi-making masterclass with an Edomae chef.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Rolling authentic sushi alongside a veteran master'
      },
      {
        day: 6,
        title: 'Shinjuku Gyoen & TeamLab Borderless',
        description: 'Morning stroll through the manicured French, English, and Japanese gardens of Shinjuku Gyoen. Afternoon immersive digital art experience at teamLab Borderless.',
        mealsIncluded: 'Breakfast',
        highlight: 'Walking through mesmerizing interactive digital light installations'
      },
      {
        day: 7,
        title: 'Sayonara Tokyo Departure',
        description: 'Morning shopping along Ginza’s iconic department stores. Private transfer to Tokyo Haneda or Narita Airport for your flight.',
        mealsIncluded: 'Breakfast'
      }
    ],
    sampleInclusions: [
      '6 nights accommodation in a 5-Star luxury central Tokyo hotel',
      'Daily breakfast',
      'Private round-trip airport transfers in luxury Toyota Alphard',
      'Private certified English-speaking guide for 3 touring days',
      'Private day tour to Mount Fuji & Hakone with private vehicle',
      'TeamLab Borderless and Shibuya Sky VIP tickets'
    ],
    sampleExclusions: [
      'International flights',
      'Japan visa fees and courier costs',
      'Discretionary tipping and personal electronic shopping'
    ],
    galleryImages: [
      '/images/destinations/tokyo.jpg',
      '/images/packages/pkg-tokyo-cultural.jpg',
      '/images/gallery/gallery-tokyo.jpg'
    ],
    seasons: [
      {
        season: 'Spring',
        months: 'March – May',
        temperature: '10°C – 21°C',
        highlights: 'Sakura cherry blossoms, park hanami picnics, crisp refreshing weather.',
        suitability: 'High'
      },
      {
        season: 'Summer',
        months: 'June – August',
        temperature: '23°C – 32°C',
        highlights: 'Traditional summer matsuri festivals, fireworks over Sumida River, energetic energy.',
        suitability: 'Good'
      },
      {
        season: 'Autumn',
        months: 'September – November',
        temperature: '14°C – 23°C',
        highlights: 'Vibrant koyo red maple foliage, pleasant walking temperatures, clear skies.',
        suitability: 'High'
      },
      {
        season: 'Winter',
        months: 'December – February',
        temperature: '2°C – 11°C',
        highlights: 'Clearest views of Mount Fuji, winter illuminations across Roppongi and Ginza.',
        suitability: 'Good'
      }
    ],
    faqs: [
      {
        question: 'Is it easy to navigate Tokyo if you don’t speak Japanese?',
        answer: 'Yes. Major transit stations, street signs, and restaurants have English signage. IC cards (Suica or Welcome Suica) allow effortless tap-and-go travel on all subways and trains.'
      },
      {
        question: 'When should we book for cherry blossom season?',
        answer: 'Cherry blossom season (late March to early April) experiences peak global demand. We advise reserving hotels and private guides at least 4 to 6 months in advance.'
      }
    ],
    popular: true
  },

  {
    id: 'istanbul',
    slug: 'istanbul',
    name: 'Istanbul',
    country: 'Turkey',
    region: 'Eurasia',
    heroImage: '/images/destinations/istanbul.jpg',
    cardImage: '/images/destinations/istanbul.jpg',
    shortDescription: 'The imperial crossroad of continents, where Byzantine domes and Ottoman minarets meet the scenic Bosphorus Strait.',
    overview: [
      'Istanbul is an incomparable metropolis uniquely straddling two continents—Europe and Asia—across the glittering Bosphorus Strait. As the former capital of Roman, Byzantine, and Ottoman empires, the city holds thousands of years of layered history within its bustling quarters.',
      'Gaze in awe at the monumental 6th-century dome of Hagia Sophia, inhale aromatic spices and roasted coffee in the Grand Bazaar and Egyptian Spice Market, take a sunset cruise on the Bosphorus, or sample Ottoman palace recipes overlooking illuminated minarets.',
      'Our curated journeys feature stays in restored Ottoman seaside mansions along the Bosphorus, private yacht charters between two continents, and exclusive after-hours access to historical landmarks.'
    ],
    indicativePriceUSD: 1350,
    durationDays: 6,
    bestTimeToVisit: 'April to May & September to November (Pleasant temperatures, clear skies)',
    currency: 'Turkish Lira (TRY / ₺)',
    languages: ['Turkish (official)', 'English (widely understood in historic districts)'],
    climate: 'Transitional Mediterranean-oceanic; warm sunny summers (22°C–29°C), mild springs and autumns, cool winters (4°C–10°C).',
    flightDurationNote: 'Direct flights from Islamabad/Lahore/Karachi to Istanbul Airport (IST) take 5.5 to 6.5 hours via Turkish Airlines or Pegasus.',
    visaGuidance: {
      summary: 'Electronic Visa (e-Visa) or Consular Sticker Visa depending on citizenship.',
      portalName: 'Republic of Türkiye Electronic Visa Application System',
      officialPortalUrl: 'https://www.evisa.gov.tr/',
      requirementsNote: 'Eligible passport holders with valid US, UK, Schengen, or Ireland visas can obtain an official Turkish e-Visa online within 5 minutes. Others apply via authorized visa application centers.',
      lastVerifiedDate: 'November 2026'
    },
    attractions: [
      {
        name: 'Hagia Sophia Grand Mosque',
        image: '/images/attractions/attraction-hagiasophia.jpg',
        location: 'Sultanahmet Square',
        description: 'Architectural wonder built by Emperor Justinian in 537 CE, celebrated for its 31-meter dome, golden mosaics, and profound interfaith history.',
        visitorTips: 'Modest dress covering hair, arms, and knees is required; entrance for international visitors is organized on the upper gallery level.'
      },
      {
        name: 'Blue Mosque (Sultan Ahmed Mosque)',
        image: '/images/destinations/istanbul.jpg',
        location: 'Sultanahmet Square',
        description: '17th-century imperial mosque renowned for its six minarets and interior walls adorned with more than 20,000 handmade blue Iznik ceramic tiles.',
        visitorTips: 'Closed to tourists during the five daily prayer times; visit in mid-morning or mid-afternoon.'
      },
      {
        name: 'The Grand Bazaar (Kapalıçarşı)',
        image: '/images/packages/pkg-istanbul-bosphorus.jpg',
        location: 'Beyazıt district',
        description: 'One of the world’s oldest covered markets dating to 1461, featuring over 4,000 shops selling carpets, leather, gold, and Turkish delight.',
        visitorTips: 'Explore the historic hans (caravanserais) hidden inside the inner courtyards for authentic artisan copper and silver craftsmen.'
      },
      {
        name: 'Private Bosphorus Strait Yacht Cruise',
        image: '/images/destinations/istanbul.jpg',
        location: 'Bosphorus waterway',
        description: 'Scenic cruise dividing Europe and Asia, gliding past Dolmabahçe Palace, Rumeli Fortress, and waterfront Ottoman wooden yalı mansions.',
        visitorTips: 'Sunset cruises provide mesmerizing golden light reflecting across the historic skyline and Maiden’s Tower.'
      }
    ],
    sampleItinerary: [
      {
        day: 1,
        title: 'Arrival in Istanbul & Bosphorus Check-in',
        description: 'VIP meet and greet at Istanbul Airport (IST). Private transfer to your luxury waterfront hotel overlooking the Bosphorus. Evening welcome dinner.',
        mealsIncluded: 'Dinner',
        highlight: 'Waterfront view of illuminated Bosphorus Bridge'
      },
      {
        day: 2,
        title: 'Imperial Sultanahmet: Hagia Sophia & Topkapi Palace',
        description: 'Full-day private guided exploration of Sultanahmet. Tour the monumental Hagia Sophia, the Blue Mosque, the Hippodrome, and the imperial courtyards and Harem of Topkapi Palace.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Treasury and Harem private tour inside Topkapi Palace'
      },
      {
        day: 3,
        title: 'Underground Basilica Cistern & Grand Bazaar',
        description: 'Descend into the mystical subterranean Basilica Cistern with its Medusa head pillars. Afternoon guided walk through the aromatic Spice Bazaar and Grand Bazaar.',
        mealsIncluded: 'Breakfast',
        highlight: 'Atmospheric subterranean lighting in Basilica Cistern'
      },
      {
        day: 4,
        title: 'Private Sunset Yacht Cruise Between Continents',
        description: 'Morning leisure in the vibrant Beyoğlu district and Galata Tower. Afternoon private 2-hour luxury motor yacht cruise along the Bosphorus Strait with canapés.',
        mealsIncluded: 'Breakfast',
        highlight: 'Cruising between Europe and Asia on a private yacht'
      },
      {
        day: 5,
        title: 'Dolmabahçe Palace & Traditional Turkish Hamam',
        description: 'Tour the opulent 19th-century crystal chandeliers and gold-leaf ceilings of Dolmabahçe Palace. Afternoon private traditional hamam bath ritual.',
        mealsIncluded: 'Breakfast',
        highlight: 'Authentic Ottoman relaxation ritual in a 500-year-old marble bath'
      },
      {
        day: 6,
        title: 'Depart Istanbul',
        description: 'Morning Turkish breakfast with fresh pastries and çay. Private chauffeur transfer to Istanbul Airport for onward journey.',
        mealsIncluded: 'Breakfast'
      }
    ],
    sampleInclusions: [
      '5 nights luxury 5-star hotel accommodation along the Bosphorus or Sultanahmet',
      'Daily lavish Turkish buffet breakfast',
      'Private Mercedes Sprinter/Vito round-trip airport transfers',
      'Full-day private guided historical tour with licensed art historian',
      'Private 2-hour sunset motor yacht charter along the Bosphorus with refreshments',
      'All museum skip-the-line admissions'
    ],
    sampleExclusions: [
      'International flights',
      'Turkish e-Visa fees',
      'Personal purchases at Grand Bazaar and optional tips'
    ],
    galleryImages: [
      '/images/destinations/istanbul.jpg',
      '/images/attractions/attraction-hagiasophia.jpg',
      '/images/packages/pkg-istanbul-bosphorus.jpg'
    ],
    seasons: [
      {
        season: 'Spring',
        months: 'April – May',
        temperature: '14°C – 22°C',
        highlights: 'Istanbul Tulip Festival in Emirgan Park, crisp pleasant temperatures, vibrant street cafés.',
        suitability: 'High'
      },
      {
        season: 'Summer',
        months: 'June – August',
        temperature: '22°C – 30°C',
        highlights: 'Bosphorus breeze, open-air seaside dining, vibrant rooftop culture.',
        suitability: 'Good'
      },
      {
        season: 'Autumn',
        months: 'September – November',
        temperature: '15°C – 23°C',
        highlights: 'Pleasant sightseeing weather, fewer crowds, prime cultural and art exhibitions.',
        suitability: 'High'
      },
      {
        season: 'Winter',
        months: 'December – March',
        temperature: '4°C – 10°C',
        highlights: 'Atmospheric mist and occasional snow over minarets, warming sahlep and Turkish tea.',
        suitability: 'Good'
      }
    ],
    faqs: [
      {
        question: 'Can Pakistani citizens apply for the Turkish e-Visa online?',
        answer: 'Pakistani passport holders who possess a valid, unexpired visa or residence permit from the United States, United Kingdom, Schengen countries, or Ireland are eligible for an instant 30-day single-entry e-Visa via the official evisa.gov.tr portal.'
      },
      {
        question: 'Is Istanbul suitable for family travel with elderly relatives?',
        answer: 'Yes. While the historic Sultanahmet area contains cobbled inclines, our packages include private door-to-door luxury transport, avoiding arduous walking and providing elevator-accessible hotel suites.'
      }
    ],
    popular: true
  },

  {
    id: 'swiss-alps',
    slug: 'swiss-alps',
    name: 'Swiss Alps',
    country: 'Switzerland',
    region: 'Central Europe',
    heroImage: '/images/destinations/swiss-alps.jpg',
    cardImage: '/images/destinations/swiss-alps.jpg',
    shortDescription: 'Majestic glacier-capped peaks, scenic mountain railways, pristine alpine lakes, and world-class luxury chalets.',
    overview: [
      'The Swiss Alps represent the pinnacle of European mountain majesty, offering postcard-perfect vistas of snow-dusted pyramid peaks, wildflower meadows, emerald alpine lakes, and pristine car-free villages. Home to iconic landmarks such as the Matterhorn in Zermatt and the Jungfraujoch "Top of Europe," Switzerland sets the benchmark for luxury alpine hospitality.',
      'Travel aboard legendary panoramic trains such as the Glacier Express, ascend vertiginous cableways to viewing platforms above 3,800 meters, or unwind in thermal mountain hydrotherapy pools facing jagged granite horizons.',
      'Our Swiss journeys feature first-class Swiss Travel Passes, luxury chalet and 5-star mountain resort reservations, private ski instructors or mountain guides, and helicopter glacier flights.'
    ],
    indicativePriceUSD: 3100,
    durationDays: 7,
    bestTimeToVisit: 'December to April (Winter sports) & June to September (Alpine hiking and clear lakes)',
    currency: 'Swiss Franc (CHF / CHF)',
    languages: ['German', 'French', 'Italian', 'Romansh', 'English (universally spoken)'],
    climate: 'Alpine climate; cool summers (15°C–24°C) with crisp air, and cold snowy winters (-5°C–2°C) ideal for world-class skiing.',
    flightDurationNote: 'Flights from Pakistan to Zurich (ZRH) or Geneva (GVA) take 9 to 12 hours with one connection.',
    visaGuidance: {
      summary: 'Requires a standard Schengen Tourist Visa (Type C).',
      portalName: 'Swiss Federal Department of Foreign Affairs (FDFA)',
      officialPortalUrl: 'https://www.eda.admin.ch/',
      requirementsNote: 'Applicants submit travel insurance covering €30,000, confirmed hotel/chalet bookings, Swiss Travel Pass or itinerary, and strong financial backing.',
      lastVerifiedDate: 'November 2026'
    },
    attractions: [
      {
        name: 'The Matterhorn & Zermatt',
        image: '/images/attractions/attraction-matterhorn.jpg',
        location: 'Zermatt, Valais Canton',
        description: 'The world’s most iconic 4,478-meter pyramid-shaped mountain peak looming majestically over the car-free mountain village of Zermatt.',
        visitorTips: 'Take the Gornergrat cogwheel train up to 3,089 meters for the quintessential reflection view at Riffelsee.'
      },
      {
        name: 'Jungfraujoch — Top of Europe',
        image: '/images/destinations/swiss-alps.jpg',
        location: 'Bernese Oberland',
        description: 'Europe’s highest railway station at 3,454 meters, featuring the Ice Palace carved into the glacier and panoramic views of the Aletsch Glacier.',
        visitorTips: 'Ride the modern Eiger Express tricable gondola from Grindelwald Terminal to save 47 minutes on transit time.'
      },
      {
        name: 'Lauterbrunnen Valley & Trümmelbach Falls',
        image: '/images/packages/pkg-swiss-alps-luxury.jpg',
        location: 'Bernese Oberland',
        description: 'Enchanting glacial trough valley with 72 roaring waterfalls cascading over vertical limestone cliffs, inspiring Tolkien’s Rivendell.',
        visitorTips: 'Visit Trümmelbach Falls inside the mountain where ten glacier-fed waterfalls drain the Eiger, Mönch, and Jungfrau.'
      },
      {
        name: 'Glacier Express Scenic Train',
        image: '/images/gallery/gallery-matterhorn.jpg',
        location: 'Zermatt to St. Moritz route',
        description: 'The "slowest express train in the world," crossing 291 bridges and 91 tunnels with panoramic glass dome ceiling cars.',
        visitorTips: 'Excellence Class reservations include a dedicated concierge, guaranteed window seat, and 5-course gourmet regional lunch with wine pairing.'
      }
    ],
    sampleItinerary: [
      {
        day: 1,
        title: 'Arrival in Zurich & Scenic Train to Lucerne',
        description: 'Arrival at Zurich Airport (ZRH). Board first-class train along Lake Zurich to historic Lucerne. Walk across the 14th-century Chapel Bridge.',
        mealsIncluded: 'Dinner',
        highlight: 'Sunset stroll over Lake Lucerne waterfront'
      },
      {
        day: 2,
        title: 'Mount Pilatus Golden Round Trip',
        description: 'Lake steamer boat cruise to Alpnachstad, ascend via the world’s steepest cogwheel railway (48% gradient) to Pilatus Kulm, descend by aerial cableway.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Ascending on the world’s steepest cogwheel railway'
      },
      {
        day: 3,
        title: 'Interlaken & Lauterbrunnen Waterfalls',
        description: 'First-class panoramic train into the Bernese Highlands. Discover Lauterbrunnen’s 72 waterfalls and the fairytale alpine village of Mürren.',
        mealsIncluded: 'Breakfast',
        highlight: 'Trümmelbach subterranean glacial waterfalls'
      },
      {
        day: 4,
        title: 'Jungfraujoch: Top of Europe & Aletsch Glacier',
        description: 'Ascend via the modern Eiger Express to Jungfraujoch (3,454m). Walk through the subterranean Ice Palace and step out onto the perpetual snow plateau.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Standing on Europe’s largest glacier at 3,454m'
      },
      {
        day: 5,
        title: 'Scenic Transfer to Car-Free Zermatt',
        description: 'Board the scenic mountain train into the Valais canton, arriving in car-free Zermatt with immediate vistas of the Matterhorn. Luxury chalet check-in.',
        mealsIncluded: 'Breakfast, Dinner',
        highlight: 'First sighting of the majestic Matterhorn peak'
      },
      {
        day: 6,
        title: 'Gornergrat Railway & Matterhorn Reflection',
        description: 'Ride the open-air electric cogwheel railway to Gornergrat (3,089m). Walk to Riffelsee to photograph the iconic Matterhorn reflection in mirror-still waters.',
        mealsIncluded: 'Breakfast',
        highlight: 'Matterhorn mirrored reflection on Lake Riffelsee'
      },
      {
        day: 7,
        title: 'Scenic Train to Geneva/Zurich & Departure',
        description: 'Morning alpine breakfast. First-class rail journey to Zurich or Geneva airport for your departure flight.',
        mealsIncluded: 'Breakfast'
      }
    ],
    sampleInclusions: [
      '6 nights in 5-star alpine luxury hotels and boutique chalets (Lucerne, Interlaken, Zermatt)',
      'Daily Swiss gourmet breakfast',
      '8-Day 1st-Class Swiss Travel Pass with unlimited trains, boats, and mountain discounts',
      'Excursion tickets to Jungfraujoch Top of Europe and Gornergrat Zermatt',
      'Mount Pilatus Golden Round Trip excursion pass',
      'Private station baggage porterage'
    ],
    sampleExclusions: [
      'International flights',
      'Schengen visa fees',
      'Ski gear rental and lift passes (optional addition)',
      'City tourist taxes'
    ],
    galleryImages: [
      '/images/destinations/swiss-alps.jpg',
      '/images/attractions/attraction-matterhorn.jpg',
      '/images/packages/pkg-swiss-alps-luxury.jpg',
      '/images/gallery/gallery-matterhorn.jpg'
    ],
    seasons: [
      {
        season: 'Winter',
        months: 'December – March',
        temperature: '-6°C – 3°C',
        highlights: 'Peak ski season, deep powdery snow, festive mountain chalets, fondue dining.',
        suitability: 'High'
      },
      {
        season: 'Spring',
        months: 'April – May',
        temperature: '6°C – 16°C',
        highlights: 'Lakeside spring flowers, peaceful uncrowded trails; high-altitude trails still snowbound.',
        suitability: 'Good'
      },
      {
        season: 'Summer',
        months: 'June – August',
        temperature: '16°C – 25°C',
        highlights: 'All mountain passes and trails open, alpine wildflowers, refreshing lake swimming.',
        suitability: 'High'
      },
      {
        season: 'Autumn',
        months: 'September – October',
        temperature: '9°C – 17°C',
        highlights: 'Golden larch trees in the Engadine, crystal clear crisp mountain visibility.',
        suitability: 'High'
      }
    ],
    faqs: [
      {
        question: 'How does the Swiss Travel Pass work?',
        answer: 'The Swiss Travel Pass gives you unlimited travel on the entire Swiss public transport network (trains, buses, and boats), free admission to over 500 museums, and up to 50% discount on mountain cableways.'
      },
      {
        question: 'Are cars allowed in Zermatt?',
        answer: 'No. Zermatt is completely car-free to protect air quality and views of the Matterhorn. All vehicles park in nearby Täsch, from where frequent shuttle trains connect to Zermatt in 12 minutes.'
      }
    ],
    popular: true
  },

  {
    id: 'rome',
    slug: 'rome',
    name: 'Rome',
    country: 'Italy',
    region: 'Southern Europe',
    heroImage: '/images/destinations/rome.jpg',
    cardImage: '/images/destinations/rome.jpg',
    shortDescription: 'The Eternal City where ancient classical ruins, Vatican grandeur, and vibrant piazzas create an open-air museum.',
    overview: [
      'Rome is a living monument to human civilization, where two and a half millennia of continuous history unfold across every cobblestone alley, sunlit piazza, and baroque fountain. From the colossal travertine arches of the Colosseum to the spiritual majesty of St. Peter’s Basilica, Rome enchants travelers with unmatched historic density.',
      'Toss a coin into the Trevi Fountain, marvel at the 2,000-year-old unreinforced concrete dome of the Pantheon, savor handcrafted cacio e pepe in a Trastevere trattoria, and enjoy sunset views across the Roman Forum from the Capitoline Hill.',
      'Our Italian journeys feature private licensed archaeological guides, exclusive VIP early-morning Vatican Museum access before public opening, and accommodations in historic palazzos near the Spanish Steps.'
    ],
    indicativePriceUSD: 1750,
    durationDays: 6,
    bestTimeToVisit: 'April to June & September to October (Pleasant warmth, avoiding peak August heat)',
    currency: 'Euro (EUR / €)',
    languages: ['Italian (official)', 'English (widely spoken in tourist establishments)'],
    climate: 'Mediterranean; warm dry summers (28°C–33°C), mild winters (8°C–14°C), pleasant springs and autumns.',
    flightDurationNote: 'Flights from Islamabad/Lahore/Karachi to Rome Fiumicino (FCO) take 8 to 11 hours with one connection.',
    visaGuidance: {
      summary: 'Requires standard Schengen Tourist Visa (Type C).',
      portalName: 'Italian Ministry of Foreign Affairs (Il Visto per l\'Italia)',
      officialPortalUrl: 'https://vistoperitalia.esteri.it/',
      requirementsNote: 'Applicants submit travel insurance (€30,000+), hotel reservations, flight booking, financial proof, and proof of socioeconomic ties.',
      lastVerifiedDate: 'November 2026'
    },
    attractions: [
      {
        name: 'The Colosseum & Roman Forum',
        image: '/images/attractions/attraction-colosseum.jpg',
        location: 'Piazza del Colosseo',
        description: 'The iconic Flavian Amphitheatre completed in 80 CE, alongside the civic and religious center of ancient Imperial Rome.',
        visitorTips: 'VIP Arena Floor and Underground access allows you to stand where gladiators and theatrical machinery were positioned.'
      },
      {
        name: 'Vatican Museums & Sistine Chapel',
        image: '/images/destinations/rome.jpg',
        location: 'Vatican City',
        description: 'Vast papal art collections culminating in Michelangelo’s ceiling frescoes and The Last Judgment in the Sistine Chapel.',
        visitorTips: 'Book early-access 07:30 AM tickets to admire the Sistine Chapel in peaceful silence.'
      },
      {
        name: 'The Pantheon',
        image: '/images/packages/pkg-rome-heritage.jpg',
        location: 'Piazza della Rotonda',
        description: 'The world’s best-preserved ancient Roman temple, featuring a soaring 43.3-meter dome with an open central oculus.',
        visitorTips: 'Entry tickets are required; midday sunlight forms a dramatic shaft of light through the central oculus.'
      },
      {
        name: 'Trevi Fountain & Piazza Navona',
        image: '/images/gallery/gallery-rome.jpg',
        location: 'Historic Centre',
        description: 'Nicola Salvi’s monumental Baroque masterpiece depicting Oceanus, set amidst elegant travertine streetscapes.',
        visitorTips: 'Visit at dawn (06:30–07:30) for tranquil photography and to toss your coin without crowds.'
      }
    ],
    sampleItinerary: [
      {
        day: 1,
        title: 'Arrival in Rome & Spanish Steps Walk',
        description: 'Private chauffeur transfer from Fiumicino (FCO) to your luxury palazzo hotel near Piazza del Popolo. Gentle evening walking tour around the Spanish Steps.',
        mealsIncluded: 'Dinner',
        highlight: 'Evening aperitivo overlooking the Spanish Steps'
      },
      {
        day: 2,
        title: 'Imperial Rome: Colosseum Underground & Forum',
        description: 'Private morning tour with an archaeologist covering the Colosseum arena and underground tunnels, followed by the Roman Forum and Palatine Hill.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Walking out onto the restricted Colosseum gladiator arena floor'
      },
      {
        day: 3,
        title: 'VIP Early-Access Vatican & St. Peter’s Basilica',
        description: 'Exclusive 07:30 AM entrance to the Vatican Museums and Sistine Chapel before the general public. Guided tour of St. Peter’s Basilica and Pieta.',
        mealsIncluded: 'Breakfast',
        highlight: 'Michelangelo’s Sistine Chapel ceiling in morning serenity'
      },
      {
        day: 4,
        title: 'Baroque Fountains, Pantheon & Gelato Masterclass',
        description: 'Guided stroll through Piazza Navona, the Pantheon, and the Trevi Fountain. Afternoon private masterclass learning artisanal Italian gelato preparation.',
        mealsIncluded: 'Breakfast',
        highlight: 'Hand-crafting authentic Italian gelato'
      },
      {
        day: 5,
        title: 'Trastevere & Borghese Gallery Masterpieces',
        description: 'Morning private tour of Galleria Borghese viewing Bernini sculptures and Caravaggio canvases. Afternoon across the Tiber in the charming lanes of Trastevere.',
        mealsIncluded: 'Breakfast, Dinner',
        highlight: 'Bernini’s Daphne and Apollo sculptures in Villa Borghese'
      },
      {
        day: 6,
        title: 'Arrivederci Roma Departure',
        description: 'Morning Italian espresso and brioche. Private luxury transfer to Rome Fiumicino Airport for return flight.',
        mealsIncluded: 'Breakfast'
      }
    ],
    sampleInclusions: [
      '5 nights luxury 5-star boutique accommodation in central Rome',
      'Daily Italian breakfast',
      'Private Mercedes E/S-Class round-trip airport transfers',
      'VIP Colosseum underground and arena floor archaeologist tour',
      'Exclusive early-access Vatican and Sistine Chapel private tour',
      'All skip-the-line admissions and reservation fees'
    ],
    sampleExclusions: [
      'International airfare',
      'Schengen visa fees',
      'Rome municipal city tax (payable directly at hotel checkout)',
      'Discretionary tipping'
    ],
    galleryImages: [
      '/images/destinations/rome.jpg',
      '/images/attractions/attraction-colosseum.jpg',
      '/images/packages/pkg-rome-heritage.jpg',
      '/images/gallery/gallery-rome.jpg'
    ],
    seasons: [
      {
        season: 'Spring',
        months: 'April – June',
        temperature: '16°C – 26°C',
        highlights: 'Wisteria on facades, sunny pleasant temperatures, ideal walking weather.',
        suitability: 'High'
      },
      {
        season: 'Summer',
        months: 'July – August',
        temperature: '24°C – 34°C',
        highlights: 'Lively summer nights along the Tiber River, outdoor opera; midday heat can be intense.',
        suitability: 'Fair'
      },
      {
        season: 'Autumn',
        months: 'September – October',
        temperature: '18°C – 27°C',
        highlights: 'Warm golden sunlight (Ottobrata Romana), grape harvest, comfortable sightseeing.',
        suitability: 'High'
      },
      {
        season: 'Winter',
        months: 'November – February',
        temperature: '6°C – 13°C',
        highlights: 'Low museum queues, Christmas illuminations, hearty Roman winter cuisine.',
        suitability: 'Good'
      }
    ],
    faqs: [
      {
        question: 'Are there strict dress codes for religious sites in Rome?',
        answer: 'Yes. When entering churches, including St. Peter’s Basilica and the Sistine Chapel, shoulders and knees must be covered. Tank tops, short skirts, and hats for men are not permitted.'
      },
      {
        question: 'How do we avoid long ticket lines at Rome monuments?',
        answer: 'All Wanderlux itineraries feature guaranteed skip-the-line entries booked months in advance with certified private guides, bypassing public lines entirely.'
      }
    ],
    popular: false
  },

  {
    id: 'new-york',
    slug: 'new-york',
    name: 'New York City',
    country: 'United States',
    region: 'North America',
    heroImage: '/images/destinations/new-york.jpg',
    cardImage: '/images/destinations/new-york.jpg',
    shortDescription: 'The city that never sleeps, radiating world-leading theater, skyline marvels, and cosmopolitan culinary energy.',
    overview: [
      'New York City is a cultural and financial capital defined by its soaring skyline, iconic yellow cabs, dynamic neighborhoods, and unmatched cultural institutions. From the lush 843 acres of Central Park to the neon energy of Broadway and the historic cobblestones of SoHo, Manhattan pulses with creative dynamism.',
      'Take in panoramic views from observation decks like the Empire State Building and SUMMIT One Vanderbilt, cross the Brooklyn Bridge at dawn, immerse yourself in world-renowned art at The Met and MoMA, and dine in celebrated Michelin-starred restaurants.',
      'Our New York experiences include private helicopter skyline tours, VIP Broadway musical seats with backstage introductions, private chauffeured SUV transport, and luxury suites overlooking Central Park.'
    ],
    indicativePriceUSD: 2950,
    durationDays: 7,
    bestTimeToVisit: 'April to June & September to November (Pleasant temperatures & festive holiday energy)',
    currency: 'US Dollar (USD / $)',
    languages: ['English'],
    climate: 'Humid continental; warm humid summers (24°C–31°C), crisp autumns (13°C–21°C), and brisk festive winters (-2°C–6°C).',
    flightDurationNote: 'Flights from Pakistan to New York (JFK/EWR) via Middle Eastern hubs take 15 to 18 hours.',
    visaGuidance: {
      summary: 'Nonimmigrant B1/B2 Tourist Visa required (or ESTA for Visa Waiver Program nationalities).',
      portalName: 'US Department of State — Bureau of Consular Affairs',
      officialPortalUrl: 'https://travel.state.gov/',
      requirementsNote: 'Applicants complete DS-160, schedule in-person consular biometric and interview appointments, and present ties to home country and financial proof.',
      lastVerifiedDate: 'November 2026'
    },
    attractions: [
      {
        name: 'Central Park',
        image: '/images/destinations/new-york.jpg',
        location: 'Manhattan',
        description: 'Frederick Law Olmsted’s 843-acre urban masterpiece featuring Bow Bridge, Bethesda Terrace, and tree-lined pathways surrounded by skyscrapers.',
        visitorTips: 'Rent a private pedicab or stroll around Jacqueline Kennedy Onassis Reservoir for the classic skyline reflection.'
      },
      {
        name: 'The Empire State Building & SUMMIT',
        image: '/images/destinations/new-york.jpg',
        location: 'Midtown Manhattan',
        description: 'The world’s most famous Art Deco skyscraper alongside futuristic mirrored sensory observation decks at SUMMIT One Vanderbilt.',
        visitorTips: 'SUMMIT One Vanderbilt is best visited during afternoon golden hour into sunset for light reflections.'
      },
      {
        name: 'The Brooklyn Bridge',
        image: '/images/destinations/new-york.jpg',
        location: 'Connecting Manhattan and Brooklyn',
        description: 'Neo-Gothic suspension bridge completed in 1883 offering dramatic vistas of the Lower Manhattan financial district skyline.',
        visitorTips: 'Walk from Brooklyn toward Manhattan in the early morning for the most inspiring skyline perspective.'
      },
      {
        name: 'The Metropolitan Museum of Art (The Met)',
        image: '/images/destinations/new-york.jpg',
        location: 'Museum Mile, 5th Avenue',
        description: 'One of the world’s greatest encyclopedic museums spanning 5,000 years of global human art, including the Temple of Dendur.',
        visitorTips: 'Visit the seasonal Cantor Rooftop Garden for contemporary sculpture installations overlooking the Central Park canopy.'
      }
    ],
    sampleItinerary: [
      {
        day: 1,
        title: 'Arrival in Manhattan & Central Park Suite',
        description: 'Private luxury SUV transfer from JFK/EWR to your hotel on Central Park South. Evening relaxation and welcome dinner.',
        mealsIncluded: 'Dinner',
        highlight: 'Central Park views from your suite'
      },
      {
        day: 2,
        title: 'Central Park & Metropolitan Museum of Art',
        description: 'Morning private guided walk through Bethesda Fountain and Strawberry Fields. Afternoon private curator tour through The Met’s European masterworks.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Private viewing inside the Temple of Dendur at The Met'
      },
      {
        day: 3,
        title: 'Statue of Liberty & Financial District',
        description: 'Private charter yacht out to the Statue of Liberty and Ellis Island. Afternoon walk through Wall Street and the 9/11 Memorial & Museum.',
        mealsIncluded: 'Breakfast',
        highlight: 'Private water-level views of Lady Liberty and skyline'
      },
      {
        day: 4,
        title: 'High Line, Hudson Yards & SUMMIT Vanderbilt',
        description: 'Stroll along the elevated landscaped High Line park through Chelsea. Ascend SUMMIT One Vanderbilt for sensory mirrored observation views.',
        mealsIncluded: 'Breakfast',
        highlight: 'Mirrored infinity reflections overlooking Midtown'
      },
      {
        day: 5,
        title: 'SoHo, West Village & VIP Broadway Evening',
        description: 'Explore cast-iron architecture, designer boutiques, and brownstone streets in Greenwich Village. Evening orchestra-row seats at a hit Broadway musical.',
        mealsIncluded: 'Breakfast, Dinner',
        highlight: 'VIP Broadway theater performance'
      },
      {
        day: 6,
        title: 'Brooklyn Bridge & DUMBO Exploration',
        description: 'Morning walk across the iconic Brooklyn Bridge into DUMBO for skyline photography. Afternoon private helicopter tour over Manhattan harbor.',
        mealsIncluded: 'Breakfast',
        highlight: '15-minute doors-off helicopter flight over Manhattan'
      },
      {
        day: 7,
        title: 'Farewell New York Departure',
        description: 'Morning breakfast at the hotel. Fifth Avenue personal shopping before private SUV airport transfer.',
        mealsIncluded: 'Breakfast'
      }
    ],
    sampleInclusions: [
      '6 nights in 5-star luxury hotel on Central Park or Midtown Manhattan',
      'Daily American breakfast',
      'Private luxury Cadillac Escalade/Suburban airport transfers',
      'VIP Orchestra tickets to top Broadway production',
      'Private 15-minute helicopter skyline tour',
      'Skip-the-line admissions to The Met, 9/11 Museum, and SUMMIT'
    ],
    sampleExclusions: [
      'International flights',
      'US visa application fees',
      'Personal dining and shopping expenses'
    ],
    galleryImages: [
      '/images/destinations/new-york.jpg'
    ],
    seasons: [
      {
        season: 'Spring',
        months: 'April – June',
        temperature: '14°C – 25°C',
        highlights: 'Central Park blooms, comfortable outdoor walking, sidewalk cafés.',
        suitability: 'High'
      },
      {
        season: 'Summer',
        months: 'July – August',
        temperature: '23°C – 32°C',
        highlights: 'Outdoor concerts, Shakespeare in the Park, rooftop bars.',
        suitability: 'Good'
      },
      {
        season: 'Autumn',
        months: 'September – November',
        temperature: '12°C – 22°C',
        highlights: 'Golden foliage in Central Park, vibrant theater openings, Thanksgiving energy.',
        suitability: 'High'
      },
      {
        season: 'Winter',
        months: 'December – March',
        temperature: '-2°C – 7°C',
        highlights: 'Rockefeller Center Christmas Tree, ice skating, festive department store windows.',
        suitability: 'Good'
      }
    ],
    faqs: [
      {
        question: 'What is the best way to move around Manhattan?',
        answer: 'While private chauffeurs are ideal for airport transfers and evening events, walking and the OMNY contactless subway system are often fastest for navigating Midtown traffic during peak hours.'
      },
      {
        question: 'How early should we apply for a US tourist visa?',
        answer: 'Consular interview wait times for B1/B2 visas can vary from several weeks to months depending on location. We advise beginning the visa process well in advance of desired travel dates.'
      }
    ],
    popular: false
  },

  {
    id: 'cape-town',
    slug: 'cape-town',
    name: 'Cape Town',
    country: 'South Africa',
    region: 'Southern Africa',
    heroImage: '/images/destinations/cape-town.jpg',
    cardImage: '/images/destinations/cape-town.jpg',
    shortDescription: 'Dramatic Table Mountain backdrop, rugged coastal peninsulas, penguin colonies, and Cape Winelands elegance.',
    overview: [
      'Cape Town is one of the world’s most visually dramatic cities, where the flat-topped sandstone ramparts of Table Mountain meet the collision of two mighty oceans. Blessed with Mediterranean climate, rich biodiversity, vibrant multi-cultural heritage, and award-winning gastronomy, the Mother City is an unforgettable destination.',
      'Ascend the Table Mountain aerial cableway for panoramic coastal vistas, visit the endearing African penguin colony at Boulders Beach, journey to the rugged edge of the continent at the Cape of Good Hope, and stroll through historic Cape Dutch wine estates in Stellenbosch and Franschhoek.',
      'Our South African itineraries feature luxury waterfront hotels in the V&A Waterfront, private coastal peninsula tours in luxury Mercedes vehicles, and seamless combinations with Kruger National Park safari lodges.'
    ],
    indicativePriceUSD: 1680,
    durationDays: 7,
    bestTimeToVisit: 'November to March (Southern hemisphere summer, dry warm climate)',
    currency: 'South African Rand (ZAR / R)',
    languages: ['English', 'Afrikaans', 'isiXhosa'],
    climate: 'Mediterranean; warm dry summers (22°C–28°C) and mild, occasionally rainy winters (13°C–18°C).',
    flightDurationNote: 'Flights from Pakistan via Dubai, Doha, or Addis Ababa to Cape Town (CPT) take 14 to 17 hours.',
    visaGuidance: {
      summary: 'Tourist Visa required prior to arrival through South African representation.',
      portalName: 'Department of Home Affairs, Republic of South Africa',
      officialPortalUrl: 'http://www.dha.gov.za/',
      requirementsNote: 'Applicants submit valid passport, flight itineraries, verified hotel bookings, 3 months certified bank statements, and employment letters.',
      lastVerifiedDate: 'November 2026'
    },
    attractions: [
      {
        name: 'Table Mountain Aerial Cableway',
        image: '/images/destinations/cape-town.jpg',
        location: 'Table Mountain National Park',
        description: 'Rotating cable car ascending 1,067 meters above sea level to the flat summit, offering 360-degree vistas across Cape Town and the Atlantic.',
        visitorTips: 'Operations depend on wind conditions; visit on the first clear, calm morning of your itinerary.'
      },
      {
        name: 'Cape Point & Cape of Good Hope',
        image: '/images/gallery/gallery-capetown.jpg',
        location: 'Cape Peninsula',
        description: 'Rugged coastal nature reserve marking the southwesternmost point of the African continent with soaring maritime sea cliffs.',
        visitorTips: 'Ride the Flying Dutchman Funicular up to the historic lighthouse for panoramic ocean views.'
      },
      {
        name: 'Boulders Beach Penguin Colony',
        image: '/images/destinations/cape-town.jpg',
        location: 'Simon’s Town, False Bay',
        description: 'Protected sheltered cove home to a land-based colony of over 3,000 African penguins waddling amongst granite boulders.',
        visitorTips: 'Wooden boardwalks allow close observation without disturbing penguin nesting burrows.'
      },
      {
        name: 'Kirstenbosch National Botanical Garden',
        image: '/images/destinations/cape-town.jpg',
        location: 'Eastern slopes of Table Mountain',
        description: 'Acclaimed botanical garden dedicated to indigenous South African flora (Fynbos), featuring the elevated Centenary Tree Canopy Walkway.',
        visitorTips: 'The "Boomslang" canopy walkway offers aerial views over the forest canopy and mountain peaks.'
      }
    ],
    sampleItinerary: [
      {
        day: 1,
        title: 'Arrival in Cape Town & V&A Waterfront Check-in',
        description: 'Private chauffeur transfer from Cape Town Airport (CPT) to your luxury hotel on the Victoria & Alfred Waterfront. Evening welcome seafood dinner.',
        mealsIncluded: 'Dinner',
        highlight: 'Waterfront dining overlooking Table Mountain'
      },
      {
        day: 2,
        title: 'Table Mountain Cableway & Historic City Tour',
        description: 'Morning ascent on the revolving Table Mountain Cableway. Afternoon walking tour through the colorful houses of Bo-Kaap and the Company’s Garden.',
        mealsIncluded: 'Breakfast',
        highlight: 'Rotating cable car ride to 1,067m summit'
      },
      {
        day: 3,
        title: 'Full-Day Cape Peninsula: Penguins & Cape Point',
        description: 'Drive along Chapman’s Peak cliffside road. Visit the African penguin colony at Boulders Beach and the dramatic cliffs of Cape Point and Cape of Good Hope.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Close-up penguin viewing and Chapman’s Peak marine drive'
      },
      {
        day: 4,
        title: 'Kirstenbosch Gardens & Constantia Valley',
        description: 'Walk along the elevated Boomslang walkway in Kirstenbosch Botanical Gardens. Afternoon visit to South Africa’s oldest wine farm in Constantia.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Canopy walk amidst unique indigenous fynbos'
      },
      {
        day: 5,
        title: 'Robben Island & Cultural Heritage',
        description: 'Ferry across Table Bay to Robben Island for a guided tour led by a former political prisoner, visiting Nelson Mandela’s prison cell.',
        mealsIncluded: 'Breakfast',
        highlight: 'Moving firsthand historical account at Nelson Mandela’s cell'
      },
      {
        day: 6,
        title: 'Scenic Helicopter Flight & Coastal Relaxation',
        description: 'Morning 20-minute "Two Oceans" helicopter flight around Table Mountain and the Twelve Apostles. Afternoon relaxation on Camps Bay beach.',
        mealsIncluded: 'Breakfast',
        highlight: 'Panoramic helicopter flight over Twelve Apostles cliffs'
      },
      {
        day: 7,
        title: 'Farewell South Africa Departure',
        description: 'Morning leisure on the V&A Waterfront. Private transfer to Cape Town International Airport for your return flight.',
        mealsIncluded: 'Breakfast'
      }
    ],
    sampleInclusions: [
      '6 nights accommodation in 5-star luxury Victoria & Alfred Waterfront hotel',
      'Daily gourmet breakfast',
      'Private Mercedes-Benz chauffeur transfers throughout',
      'Full-day private Cape Peninsula tour with Cape Point & Boulders Beach admissions',
      'Table Mountain Cableway fast-track tickets',
      'Two Oceans 20-minute scenic helicopter flight'
    ],
    sampleExclusions: [
      'International flights',
      'South African visa application fees',
      'Discretionary guide/driver gratuities'
    ],
    galleryImages: [
      '/images/destinations/cape-town.jpg',
      '/images/gallery/gallery-capetown.jpg'
    ],
    seasons: [
      {
        season: 'Summer',
        months: 'December – February',
        temperature: '20°C – 29°C',
        highlights: 'Warm sunny beach days, buzzing outdoor restaurants, long daylight hours.',
        suitability: 'High'
      },
      {
        season: 'Autumn',
        months: 'March – May',
        temperature: '15°C – 24°C',
        highlights: 'Calm windless days, grape harvesting in Winelands, pleasant hiking.',
        suitability: 'High'
      },
      {
        season: 'Winter',
        months: 'June – August',
        temperature: '11°C – 18°C',
        highlights: 'Southern right whale watching along Hermanus coast, green lush vegetation.',
        suitability: 'Good'
      },
      {
        season: 'Spring',
        months: 'September – November',
        temperature: '14°C – 22°C',
        highlights: 'West Coast wildflowers bloom, warm sunny spells, whale breaching.',
        suitability: 'High'
      }
    ],
    faqs: [
      {
        question: 'Is Cape Town safe for luxury international travelers?',
        answer: 'Yes. Major tourist hubs such as the V&A Waterfront, Camps Bay, and the Cape Peninsula are safe and well-monitored. As in any major city, standard situational awareness and private chauffeur services provide peace of mind.'
      },
      {
        question: 'Can this itinerary be combined with a wildlife safari?',
        answer: 'Yes. We frequently arrange seamless 3-to-4 night luxury safari extensions in the Sabi Sand Game Reserve or Kruger National Park with direct flight connections from Cape Town.'
      }
    ],
    popular: false
  },

  {
    id: 'hunza-valley',
    slug: 'hunza-valley',
    name: 'Hunza Valley',
    country: 'Pakistan',
    region: 'Gilgit-Baltistan',
    heroImage: '/images/destinations/hunza-valley.jpg',
    cardImage: '/images/destinations/hunza-valley.jpg',
    shortDescription: 'The Crown of the Karakoram, famed for sharp Passu Cones, turquoise Attabad Lake, ancient forts, and warm hospitality.',
    overview: [
      'Hunza Valley is an extraordinary high-altitude mountain valley nestled in the Karakoram mountain range of Gilgit-Baltistan, northern Pakistan. Surrounded by several iconic 7,000+ meter giants including Rakaposhi (7,788m), Ultar Sar, and the sheer cathedral spires of the Passu Cones, Hunza is legendary for its surreal alpine grandeur and remarkably high literacy and longevity.',
      'Travel along the world-renowned Karakoram Highway (KKH)—often hailed as the Eighth Wonder of the World—boating across the azure glacial waters of Attabad Lake, crossing the adventurous Hussaini Suspension Bridge, and exploring the 700-year-old Baltit Fort and 900-year-old Altit Fort in Karimabad.',
      'Our luxury Hunza expeditions feature private 4x4 Toyota Land Cruiser/Prado transport, luxury mountain stays at Serena Hotel Hunza and Luxus Grand Attabad, certified mountain guides, and curated cultural dinners tasting traditional Hunzai chapshuro and apricot delicacies.'
    ],
    indicativePriceUSD: 695,
    durationDays: 6,
    bestTimeToVisit: 'April to May (Cherry blossom season), June to August (Warm summer), October (Golden autumn foliage)',
    currency: 'Pakistani Rupee (PKR)',
    languages: ['Burushaski', 'Wakhi', 'Shina', 'Urdu (widely spoken)', 'English (fluently spoken across hospitality)'],
    climate: 'High-altitude mountain; pleasant mild summers (18°C–27°C), cool crisp springs, breathtaking autumns (10°C–18°C), snowy freezing winters (-5°C–4°C).',
    flightDurationNote: 'Domestic flight from Islamabad (ISB) to Gilgit (GIL) takes 45 minutes; subsequent scenic highway drive to Hunza takes 2 hours.',
    visaGuidance: {
      summary: 'Electronic Tourist Visa via official Pakistan Online Visa System (POVS).',
      portalName: 'Pakistan Online Visa System (NADRA / Ministry of Interior)',
      officialPortalUrl: 'https://visa.nadra.gov.pk/',
      requirementsNote: 'Foreign travelers apply online for tourist e-Visa within 48–72 hours with passport copy, photograph, and hotel booking voucher or tour invitation letter. No special NOC is required for Hunza Valley.',
      lastVerifiedDate: 'November 2026'
    },
    attractions: [
      {
        name: 'Passu Cones (Passu Cathedral)',
        image: '/images/attractions/attraction-passu.jpg',
        location: 'Upper Hunza (Gojal), KKH km 75',
        description: 'Serrated granite spires soaring to 6,106 meters along the Karakoram Highway, forming one of the most dramatically photographed mountain silhouettes on earth.',
        visitorTips: 'Sunrise paints the jagged spires in warm golden and crimson hues; best captured from Passu village bridge.'
      },
      {
        name: 'Attabad Lake',
        image: '/images/attractions/attraction-attabad.jpg',
        location: 'Upper Hunza, Gojal',
        description: 'Vibrant turquoise-blue lake formed in 2010, stretching 21 kilometers through towering Karakoram mountain clefts.',
        visitorTips: 'Private motorized boating and jet skiing allow you to appreciate the sheer vertical cliff walls rising directly from the water.'
      },
      {
        name: 'Baltit Fort & Karimabad Bazaar',
        image: '/images/packages/pkg-hunza-adventure.jpg',
        location: 'Karimabad, Central Hunza',
        description: '700-year-old UNESCO-restored royal palace fort of the Mir of Hunza, displaying Tibetan-influenced wood joinery and defensive architecture.',
        visitorTips: 'Guided tours inside the fort explain ancient lifestyle, grain storage, and mountain warfare techniques.'
      },
      {
        name: 'Hussaini Suspension Bridge',
        image: '/images/hero/hero-3.jpg',
        location: 'Hussaini Village, Upper Hunza',
        description: 'Adventurous wooden plank suspension bridge spanning the rushing Hunza River with the backdrop of the Passu Cones.',
        visitorTips: 'Wear sturdy walking footwear with good grip; local guides accompany you across the bridge.'
      }
    ],
    sampleItinerary: [
      {
        day: 1,
        title: 'Islamabad to Gilgit Scenic Flight & Drive to Hunza',
        description: 'Morning scenic mountain flight from Islamabad to Gilgit (viewing Nanga Parbat 8,126m). Private 4x4 Prado drive along Karakoram Highway with view of Rakaposhi (7,788m). Check in to luxury hotel in Karimabad.',
        mealsIncluded: 'Dinner',
        highlight: 'Aerial view of Nanga Parbat and first sunset on Rakaposhi'
      },
      {
        day: 2,
        title: 'Karimabad Heritage: Baltit Fort & Altit Fort',
        description: 'Private guided exploration of the 700-year-old Baltit Fort and the 900-year-old Altit Fort. Stroll through Karimabad cobblestone bazaar tasting walnut cake and organic apricot oils.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Panoramic valley views from Baltit Fort watchtowers'
      },
      {
        day: 3,
        title: 'Duikar Sunrise & Turquoise Attabad Lake',
        description: 'Dawn sunrise excursion to Eagle’s Nest viewpoint in Duikar. Drive to Attabad Lake for a private boat charter. Check into lakeside luxury suite at Luxus Grand Attabad.',
        mealsIncluded: 'Breakfast, Dinner',
        highlight: 'Sunrise golden glow over Rakaposhi, Diran, and Golden Peak'
      },
      {
        day: 4,
        title: 'Upper Hunza: Passu Cones & Hussaini Bridge',
        description: 'Drive along the KKH through the newly built tunnels into Gojal. Cross the historic Hussaini Suspension Bridge, walk towards Passu Glacier, and visit Borith Lake.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Standing beneath the dramatic spires of Passu Cones'
      },
      {
        day: 5,
        title: 'Khunjerab Pass (Pak-China Border at 4,693m)',
        description: 'Ascend to the highest paved international border crossing in the world at Khunjerab Pass within Khunjerab National Park, watching for Himalayan ibex and marmots.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Standing at the world’s highest paved international border (4,693m)'
      },
      {
        day: 6,
        title: 'Drive to Gilgit & Return Flight to Islamabad',
        description: 'Morning drive to Gilgit Airport for return flight to Islamabad. (Chauffeured road transfer backup is maintained in case of mountain flight weather cancellations).',
        mealsIncluded: 'Breakfast'
      }
    ],
    sampleInclusions: [
      '5 nights in luxury accommodations (Serena Hotel Hunza / Luxus Grand Attabad)',
      'Dedicated 4x4 Toyota Prado/Land Cruiser with experienced mountain driver and fuel',
      'Certified English/Urdu speaking local heritage guide',
      'Daily breakfast and traditional dinners',
      'Attabad Lake private boat cruise and all fort entry fees',
      'Khunjerab National Park entry permits'
    ],
    sampleExclusions: [
      'Islamabad to Gilgit return domestic flights (can be added on request)',
      'Personal trekking gear or adventure sports activities',
      'Personal shopping and tips'
    ],
    galleryImages: [
      '/images/destinations/hunza-valley.jpg',
      '/images/attractions/attraction-passu.jpg',
      '/images/attractions/attraction-attabad.jpg',
      '/images/hero/hero-3.jpg'
    ],
    seasons: [
      {
        season: 'Spring',
        months: 'April – May',
        temperature: '12°C – 21°C',
        highlights: 'Cherry, apricot, and peach blossom explosion across terraced orchards.',
        suitability: 'High'
      },
      {
        season: 'Summer',
        months: 'June – August',
        temperature: '18°C – 28°C',
        highlights: 'Peak trekking season, Khunjerab Pass completely open, lush green orchards.',
        suitability: 'High'
      },
      {
        season: 'Autumn',
        months: 'October – early November',
        temperature: '9°C – 19°C',
        highlights: 'World-famous golden, amber, and crimson foliage across poplar and fruit trees.',
        suitability: 'High'
      },
      {
        season: 'Winter',
        months: 'December – February',
        temperature: '-6°C – 5°C',
        highlights: 'Snow-capped tranquility, frozen lakes, peaceful winter mountain culture.',
        suitability: 'Fair'
      }
    ],
    faqs: [
      {
        question: 'What happens if the flight between Islamabad and Gilgit is delayed due to weather?',
        answer: 'Northern Pakistan mountain flights are weather-dependent. We maintain dedicated private luxury 4x4 vehicles and reserve overnight boutique hotels in Besham or Chilas as a seamless contingency whenever flights are rescheduled.'
      },
      {
        question: 'Is Hunza Valley safe for solo female and family travelers?',
        answer: 'Hunza Valley is recognized as one of the safest and most hospitable destinations in the world. The local community has near 100% literacy, and international visitors consistently praise the welcoming, respectful atmosphere.'
      }
    ],
    popular: true
  },

  {
    id: 'skardu',
    slug: 'skardu',
    name: 'Skardu',
    country: 'Pakistan',
    region: 'Gilgit-Baltistan',
    heroImage: '/images/destinations/skardu.jpg',
    cardImage: '/images/destinations/skardu.jpg',
    shortDescription: 'The Gateway to K2, featuring magical Shangrila Lake, the high-altitude Deosai Plains, and cold desert dunes.',
    overview: [
      'Skardu is the historic capital of Baltistan and the world-renowned gateway to the greatest concentration of 8,000-meter peaks on Earth, including K2 (8,611m), Broad Peak, and Gasherbrum. Set at the confluence of the Indus and Shigar Rivers at an elevation of 2,228 meters, Skardu offers a stark, dramatic landscape of towering granite walls, turquoise glacial lakes, and sweeping sand dunes.',
      'Explore Shangrila Resort on Lower Kachura Lake with its red-roofed pagodas, hike to the emerald mirror of Upper Kachura Lake, traverse the Katpana Cold Desert where white sand meets snow-dusted cliffs, and embark on a safari across the Deosai National Park—the second-highest alpine plateau in the world at 4,114 meters.',
      'Our Skardu itineraries feature luxury stays at Serena Shigar Fort (a restored 400-year-old royal palace) and Shangrila Resort, private 4x4 off-road safaris, and dedicated professional expedition logistics.'
    ],
    indicativePriceUSD: 775,
    durationDays: 6,
    bestTimeToVisit: 'May to October (Deosai plateau accessible from late June to September)',
    currency: 'Pakistani Rupee (PKR)',
    languages: ['Balti', 'Urdu', 'English'],
    climate: 'High-altitude cold semi-arid; warm sunny summer days (20°C–29°C), cool nights, crisp autumn foliage, freezing winters (-10°C–2°C).',
    flightDurationNote: 'Direct Boeing 737 / Airbus A320 commercial flights from Islamabad to Skardu International Airport (KDU) take approximately 1 hour.',
    visaGuidance: {
      summary: 'Electronic Tourist Visa via official Pakistan Online Visa System (POVS).',
      portalName: 'Pakistan Online Visa System (NADRA / Ministry of Interior)',
      officialPortalUrl: 'https://visa.nadra.gov.pk/',
      requirementsNote: 'Foreign travelers obtain tourist e-Visa online within 48–72 hours. General tourist routes in Skardu (Shangrila, Upper Kachura, Shigar, Deosai) do not require a special Non-Objection Certificate (NOC).',
      lastVerifiedDate: 'November 2026'
    },
    attractions: [
      {
        name: 'Shangrila Lake (Lower Kachura Lake)',
        image: '/images/attractions/attraction-shangrila.jpg',
        location: 'Kachura, 25 mins from Skardu city',
        description: 'Circular mountain lake surrounded by Tibetan-style red pagodas and lush fruit orchards, famously dubbed "Heaven on Earth."',
        visitorTips: 'Paddleboats on the calm waters offer reflections of surrounding granite cliffs.'
      },
      {
        name: 'Deosai National Park & Sheosar Lake',
        image: '/images/destinations/skardu.jpg',
        location: 'Deosai Plateau (4,114m elevation)',
        description: 'The "Land of Giants," the world’s second-highest alpine plateau after the Tibetan Changtang, home to Himalayan brown bears and wild alpine meadows.',
        visitorTips: 'Accessible only between late June and late September when snow melts; bring warm layered windproof clothing.'
      },
      {
        name: 'Katpana Cold Desert',
        image: '/images/packages/pkg-skardu-expedition.jpg',
        location: 'Katpana village, near Skardu',
        description: 'One of the world’s highest cold deserts, where rolling white sand dunes sit framed by snow-capped granite Karakoram mountains.',
        visitorTips: 'Sunset creates stark dramatic shadows across the sand ripples against the fading mountain light.'
      },
      {
        name: 'Serena Shigar Fort (Fong-Khar)',
        image: '/images/destinations/skardu.jpg',
        location: 'Shigar Valley, 45 mins from Skardu',
        description: 'A 400-year-old restored stone and wood palace fort of the Raja of Shigar, converted into an authentic heritage hotel.',
        visitorTips: 'Take the guided historical tour through the Raja’s audience chambers and wooden filigree balconies.'
      }
    ],
    sampleItinerary: [
      {
        day: 1,
        title: 'Flight to Skardu & Shangrila Lake Check-in',
        description: 'Direct morning flight from Islamabad to Skardu International Airport (spectacular views of K2 and Nanga Parbat). Transfer to Shangrila Resort on Lower Kachura Lake.',
        mealsIncluded: 'Dinner',
        highlight: 'Flight landing between sheer mountain gorges and checking into Shangrila'
      },
      {
        day: 2,
        title: 'Upper Kachura Lake & Katpana Cold Desert',
        description: 'Short morning hike through apricot orchards to Upper Kachura Lake for trout lunch and boating. Late afternoon sunset over the Katpana Cold Desert dunes.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Sunset over sand dunes surrounded by snowy Karakoram peaks'
      },
      {
        day: 3,
        title: 'Safari to Deosai National Park & Sheosar Lake',
        description: 'Full-day 4x4 safari ascending to the Deosai Plateau at 4,114 meters. Visit Sheosar Lake, Barapani suspension bridge, and look for Himalayan brown bears.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        highlight: 'Standing at 4,114m on the vast undulating Deosai plateau'
      },
      {
        day: 4,
        title: 'Scenic Shigar Valley & Heritage Palace Stay',
        description: 'Drive along the Shigar River to the green oasis of Shigar Valley. Check into the historic Serena Shigar Fort. Tour the 17th-century Amburiq Mosque.',
        mealsIncluded: 'Breakfast, Dinner',
        highlight: 'Staying in a 400-year-old restored royal palace fort'
      },
      {
        day: 5,
        title: 'Manthokha Waterfall & Khaplu Palace Excursion',
        description: 'Day excursion through the Shyok River gorge to the cascading 180-foot Manthokha Waterfall and the historic Yabgo royal residence at Serena Khaplu Palace.',
        mealsIncluded: 'Breakfast, Lunch',
        highlight: 'Thunderous Manthokha waterfall and Khaplu royal gardens'
      },
      {
        day: 6,
        title: 'Skardu Airport Departure to Islamabad',
        description: 'Morning breakfast in the palace gardens. Private transfer to Skardu International Airport for direct flight back to Islamabad.',
        mealsIncluded: 'Breakfast'
      }
    ],
    sampleInclusions: [
      '5 nights luxury heritage accommodation (Shangrila Resort Kachura / Serena Shigar Fort)',
      'Dedicated 4x4 Toyota Land Cruiser/Prado with experienced high-altitude driver',
      'Full-day guided Deosai National Park 4x4 safari with park conservation permits',
      'Daily breakfast and regional culinary dinners',
      'Private airport transfers from/to Skardu International Airport',
      'All heritage fort entry tickets and licensed local Balti guide'
    ],
    sampleExclusions: [
      'Islamabad to Skardu round-trip domestic flights (can be bundled upon request)',
      'High-altitude camping gear or mountaineering permits',
      'Personal tips and expenses'
    ],
    galleryImages: [
      '/images/destinations/skardu.jpg',
      '/images/attractions/attraction-shangrila.jpg',
      '/images/packages/pkg-skardu-expedition.jpg'
    ],
    seasons: [
      {
        season: 'Spring',
        months: 'April – May',
        temperature: '13°C – 22°C',
        highlights: 'Fruit tree blossoming in Shigar and Khaplu valleys, pleasant sightseeing.',
        suitability: 'High'
      },
      {
        season: 'Summer',
        months: 'June – August',
        temperature: '20°C – 29°C',
        highlights: 'Deosai Plains fully accessible and covered in wildflowers, high-altitude trekking.',
        suitability: 'High'
      },
      {
        season: 'Autumn',
        months: 'September – October',
        temperature: '10°C – 20°C',
        highlights: 'Vibrant yellow poplar trees against stark granite, pleasant daytime temperatures.',
        suitability: 'High'
      },
      {
        season: 'Winter',
        months: 'November – February',
        temperature: '-10°C – 3°C',
        highlights: 'Snow sports, frozen lakes, dramatic winter mountaineering atmosphere.',
        suitability: 'Fair'
      }
    ],
    faqs: [
      {
        question: 'How do flights to Skardu operate?',
        answer: 'Skardu International Airport handles daily jet flights (Airbus A320 and Boeing 737) from Islamabad and Karachi. These modern flights operate with high regularity, providing 1-hour access to the high Karakoram.'
      },
      {
        question: 'When is Deosai National Park open to visitors?',
        answer: 'Because of heavy snow accumulation at 4,114 meters, the Deosai plateau usually opens in late June or early July and remains accessible until late September or early October.'
      }
    ],
    popular: true
  }
];
