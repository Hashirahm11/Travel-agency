export interface DestinationAttraction {
  name: string;
  image: string;
  description: string;
  location: string;
  visitorTips?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  mealsIncluded?: string;
  highlight?: string;
}

export interface DestinationFAQ {
  question: string;
  answer: string;
}

export interface SeasonInfo {
  season: 'Spring' | 'Summer' | 'Autumn' | 'Winter';
  months: string;
  temperature: string;
  highlights: string;
  suitability: 'High' | 'Good' | 'Fair' | 'Low';
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  country: string;
  region: string;
  heroImage: string;
  cardImage: string;
  shortDescription: string;
  overview: string[];
  indicativePriceUSD: number;
  durationDays: number;
  bestTimeToVisit: string;
  currency: string;
  languages: string[];
  climate: string;
  flightDurationNote?: string;
  visaGuidance: {
    summary: string;
    officialPortalUrl: string;
    portalName: string;
    requirementsNote: string;
    lastVerifiedDate: string;
  };
  attractions: DestinationAttraction[];
  sampleItinerary: ItineraryDay[];
  sampleInclusions: string[];
  sampleExclusions: string[];
  galleryImages: string[];
  seasons: SeasonInfo[];
  faqs: DestinationFAQ[];
  popular?: boolean;
}

export type PackageCategory = 'Honeymoon' | 'Family' | 'Adventure' | 'Luxury' | 'Budget' | 'Group Tours';

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  category: PackageCategory;
  destination: string;
  destinationSlug: string;
  duration: string;
  durationDays: number;
  heroImage: string;
  cardImage: string;
  overview: string;
  locationsCovered: string[];
  indicativePriceUSD: number;
  pricingDetails: {
    basis: string; // e.g. "Per person on twin-share basis"
    assumedTravelers: number;
    accommodationCategory: string; // e.g. "5-Star Luxury Resor & Water Villa"
    departureCity: string; // e.g. "Islamabad / Lahore / Karachi"
    season: string;
    checkedDate: string;
  };
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  suitableFor: string;
  dailyItinerary: ItineraryDay[];
  featured?: boolean;
}

export interface TravelService {
  id: string;
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  image: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  readTime: string;
  date: string;
  heroImage: string;
  summary: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string[];
      tip?: string;
    }[];
    conclusion: string;
  };
  relatedDestinationSlug: string;
  tags: string[];
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  canonicalUrl: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  businessHours: string;
  defaultDepartureCity: string;
  defaultNationality: string;
  currency: {
    code: string;
    symbol: string;
  };
  isContactConfigured: boolean;
  socials: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}
