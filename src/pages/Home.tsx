import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Sliders,
  Headphones,
  Calendar,
  Plane,
  Building2,
  FileCheck,
  Car,
  Heart,
  Users,
  Briefcase,
  UsersRound,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Send,
  Eye
} from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { SEO } from '../components/ui/SEO';
import { SearchBar } from '../components/ui/SearchBar';
import { SafeImage } from '../components/ui/SafeImage';
import { SectionHeading } from '../components/ui/SectionHeading';
import { DestinationCard } from '../components/cards/DestinationCard';
import { PackageCard } from '../components/cards/PackageCard';
import { Lightbox, type LightboxImage } from '../components/ui/Lightbox';
import { destinations } from '../data/destinations';
import { tourPackages } from '../data/packages';
import { blogPosts } from '../data/blog';
import { testimonialsData } from '../data/testimonials';

const HERO_SLIDES = [
  {
    image: '/images/hero/hero-1.jpg',
    location: 'Zermatt, Swiss Alps',
    title: 'Alpine Splendor & Scenic Railways',
    subtitle: 'Charming car-free alpine villages and glacier-carved horizons.'
  },
  {
    image: '/images/hero/hero-2.jpg',
    location: 'Oia, Santorini',
    title: 'Sun-Drenched Aegean Romance',
    subtitle: 'Private cliffside cave villas overlooking volcanic caldera waters.'
  },
  {
    image: '/images/hero/hero-3.jpg',
    location: 'Passu Cones, Hunza Valley',
    title: 'The Crown of the Karakoram',
    subtitle: 'Serrated granite spires, azure glacial lakes, and timeless hospitality.'
  },
  {
    image: '/images/hero/hero-4.jpg',
    location: 'North Malé Atoll, Maldives',
    title: 'Private Overwater Island Sanctuaries',
    subtitle: 'Turquoise lagoons, vibrant reefs, and barefoot barefoot elegance.'
  }
];

const GALLERY_PREVIEWS: LightboxImage[] = [
  { src: '/images/gallery/gallery-paris.jpg', alt: 'Paris rooftops at sunset', caption: 'Sunset over Parisian rooftops and the Eiffel Tower', location: 'Paris, France' },
  { src: '/images/gallery/gallery-santorini.jpg', alt: 'Oia Caldera, Santorini', caption: 'Whitewashed Cycladic architecture and blue domes', location: 'Santorini, Greece' },
  { src: '/images/gallery/gallery-matterhorn.jpg', alt: 'Matterhorn peak, Switzerland', caption: 'The snow-capped pyramid of the Matterhorn', location: 'Zermatt, Switzerland' },
  { src: '/images/gallery/gallery-attabad.jpg', alt: 'Attabad Lake, Hunza Valley', caption: 'Azure glacial waters of Attabad Lake', location: 'Hunza Valley, Pakistan' },
  { src: '/images/gallery/gallery-tokyo.jpg', alt: 'Tokyo skyline at twilight', caption: 'Tokyo metropolis illuminated at dusk', location: 'Tokyo, Japan' },
  { src: '/images/gallery/gallery-rome.jpg', alt: 'Colosseum at dusk, Rome', caption: 'The ancient Colosseum amphitheatre under evening lights', location: 'Rome, Italy' },
  { src: '/images/gallery/gallery-bali.jpg', alt: 'Tegalalang rice terraces, Bali', caption: 'Lush terraced rice paddies in morning mist', location: 'Ubud, Bali' },
  { src: '/images/gallery/gallery-capetown.jpg', alt: 'Table Mountain, Cape Town', caption: 'Dramatic Table Mountain and Atlantic coastline', location: 'Cape Town, South Africa' }
];

export const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  // Autoplay hero slider
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubmitted(true);
    }
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Select 8 top destinations
  const topDestinations = destinations.slice(0, 8);

  // Select 6 featured packages
  const featuredPackages = tourPackages.slice(0, 6);

  return (
    <div className="min-h-screen bg-ivory text-slate-800">
      <SEO
        title="Journeys Crafted Beyond the Ordinary"
        description="Wanderlux Travels crafts bespoke luxury journeys, private island sanctuaries, alpine chalets, and cultural expeditions across the globe."
        canonical="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'TravelAgency',
          name: 'Wanderlux Travels',
          description: 'Luxury bespoke travel agency crafting extraordinary international journeys.',
          url: 'https://wanderluxtravels.com',
          currenciesAccepted: 'USD',
          priceRange: 'USD $695-$3,100'
        }}
      />

      {/* 1. HEADER */}
      <Header transparentOnHero />

      {/* 2. HERO SECTION */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-navy">
        {/* Cross-fade slider images */}
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.location}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <SafeImage
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover transform scale-105 transition-transform duration-10000"
              containerClassName="absolute inset-0"
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
            {/* Elegant dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-navy/70" />
          </div>
        ))}

        {/* Hero Text Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 text-center text-white pt-20 pb-28 sm:pt-16 sm:pb-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/60 border border-gold/30 backdrop-blur-md mb-6 animate-fadeIn">
            <Compass className="w-3.5 h-3.5 text-gold animate-spin-slow" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold-light font-medium">
              {HERO_SLIDES[currentSlide].location}
            </span>
          </div>

          <h1 className="font-serif text-3xl min-[360px]:text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] max-w-4xl mx-auto">
            Discover the World. <br />
            <span className="italic font-normal text-gold-light">Experience the Extraordinary.</span>
          </h1>

          <p className="mt-5 sm:mt-6 text-sm min-[360px]:text-base sm:text-xl font-light text-slate-200 max-w-2xl mx-auto leading-relaxed">
            From breathtaking landscapes to unforgettable city escapes, explore extraordinary journeys crafted around the way you travel.
          </p>

          {/* Two CTA Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/destinations"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-navy font-bold text-sm tracking-wide shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 group"
            >
              <span>Explore Destinations</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white hover:text-navy text-white font-semibold text-sm tracking-wide border border-white/40 backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <span>Plan My Bespoke Journey</span>
            </Link>
          </div>
        </div>

        {/* Slider Navigation & Pause Controls */}
        <div className="absolute bottom-20 sm:bottom-24 z-20 flex items-center gap-4 text-white">
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
            className="p-2 rounded-full bg-black/30 hover:bg-gold hover:text-navy text-white transition-all backdrop-blur-xs cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex gap-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  i === currentSlide ? 'w-8 bg-gold' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-full bg-black/30 hover:bg-gold hover:text-navy text-white transition-all backdrop-blur-xs cursor-pointer"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
            className="p-2 rounded-full bg-black/30 hover:bg-gold hover:text-navy text-white transition-all backdrop-blur-xs cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Floating Travel Search Interface */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SearchBar variant="floating" />
      </div>

      {/* 3. TRUST AND HIGHLIGHTS SECTION */}
      <section className="py-20 lg:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Commitment"
            title="The Art of Bespoke Travel"
            subtitle="We reject cookie-cutter itineraries. Every Wanderlux journey is meticulously shaped around your personal pace, cultural curiosities, and standard of luxury."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 hover:border-gold/40">
              <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center mb-5">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy mb-2">
                Personalized Travel Planning
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                One-on-one consultations to map private museum viewings, secluded villas, and bespoke dining.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 hover:border-gold/40">
              <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy mb-2">
                Carefully Selected Destinations
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Hand-picked properties and licensed regional partners vetted for safety, hygiene, and genuine hospitality.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 hover:border-gold/40">
              <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center mb-5">
                <Sliders className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy mb-2">
                Flexible Travel Experiences
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Pacing tailored to you. Linger over a private vineyard lunch or adjust daily departure hours with your chauffeur.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 hover:border-gold/40">
              <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center mb-5">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy mb-2">
                Dedicated Travel Assistance
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Attentive trip coordination, flight schedule rebooking support, and direct contact with local ground operators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TOP DESTINATIONS */}
      <section className="py-20 lg:py-24 bg-white border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 mb-2 text-xs uppercase tracking-[0.25em] font-semibold text-gold-dark">
                <span className="w-6 h-px bg-current opacity-70" />
                <span>Curated Escapes</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-navy">
                Top Destinations
              </h2>
              <p className="mt-2 text-slate-600 text-base max-w-xl">
                Explore our hand-selected global sanctuaries, from iconic European capitals to serene high-altitude valleys.
              </p>
            </div>
            <Link
              to="/destinations"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 font-semibold text-navy hover:text-gold text-sm tracking-wider uppercase transition-colors"
            >
              <span>View All 13 Destinations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topDestinations.map((dest) => (
              <DestinationCard key={dest.slug} destination={dest} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED TOUR PACKAGES */}
      <section className="py-20 lg:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Signature Itineraries"
            title="Featured Tour Packages"
            subtitle="Thoughtfully structured journeys benchmarked with transparent indicative pricing in USD, verified inclusions, and distinct travel categories."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-navy hover:bg-gold hover:text-navy text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              <span>Explore All Tour Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US? */}
      <section className="py-20 lg:py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Wanderlux Distinction"
            title="Why Discerning Travelers Choose Us"
            subtitle="We combine local knowledge, vetted hospitality partners, and seamless logistics to craft travel that feels effortless."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gold/20 text-gold-light flex items-center justify-center mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Authentic Local Expertise</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We work directly with certified regional guides and native historians who reveal intimate cultural stories beyond commercial tourist hubs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gold/20 text-gold-light flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Personally Vetted Accommodations</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                From cliffside cave suites in Santorini to heritage forts in Baltistan, every property is inspected for luxury, comfort, and service excellence.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gold/20 text-gold-light flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Transparent Planning Benchmarks</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Realistic USD planning estimates with explicit breakdown of traveler assumptions, accommodation categories, and seasonal dates.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gold/20 text-gold-light flex items-center justify-center mb-4">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Private Seamless Transfers</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Dedicated chauffeurs, high-altitude 4x4 vehicles in mountain regions, and scenic seaplane/boat transfers coordinated in advance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gold/20 text-gold-light flex items-center justify-center mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Private Bespoke Flexibility</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Travel on your own schedule. Modify daily start times, include specialty dining, or arrange private museum access without group constraints.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gold/20 text-gold-light flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Comprehensive Travel Assurance</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Complete visa guidance through official immigration portals, medical insurance support, and local emergency ground contacts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. OUR SERVICES */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="End-to-End Excellence"
            title="Our Curated Travel Services"
            subtitle="From international flight logistics and luxury hotel allocations to visa document guidance and private transfers."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { icon: Plane, title: 'Flight Assistance', desc: 'Optimal routing & seat selection' },
              { icon: Building2, title: 'Hotel Reservations', desc: 'Vetted 5-star suites & villas' },
              { icon: FileCheck, title: 'Visa Assistance', desc: 'Official checklist & document audit' },
              { icon: ShieldCheck, title: 'Travel Insurance', desc: 'Comprehensive medical coverage' },
              { icon: Compass, title: 'Custom Itineraries', desc: 'Bespoke daily pacing & tours' },
              { icon: Car, title: 'Airport Transfers', desc: 'Punctual chauffeured vehicles' },
              { icon: Heart, title: 'Honeymoon Planning', desc: 'Private plunge pools & dining' },
              { icon: Users, title: 'Family Holidays', desc: 'Connecting suites & kid pacing' },
              { icon: Briefcase, title: 'Corporate Travel', desc: 'Executive meetings & retreats' },
              { icon: UsersRound, title: 'Group Tours', desc: 'Intimate small-group departures' },
              { icon: Sparkles, title: 'Umrah Consultation', desc: '5-star Haram plaza accommodations' },
              { icon: Headphones, title: 'Travel Support', desc: 'Attentive trip coordination' },
            ].map((srv, idx) => (
              <Link
                key={idx}
                to="/services"
                className="group p-5 rounded-2xl bg-ivory/60 hover:bg-navy border border-slate-200/80 hover:border-navy transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gold/15 group-hover:bg-gold text-gold-dark group-hover:text-navy flex items-center justify-center mb-3 transition-colors">
                    <srv.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-navy group-hover:text-white transition-colors">
                    {srv.title}
                  </h3>
                  <p className="mt-1 text-slate-500 group-hover:text-slate-300 text-xs transition-colors">
                    {srv.desc}
                  </p>
                </div>
                <span className="mt-4 text-[11px] font-semibold text-gold group-hover:text-gold-light inline-flex items-center gap-1">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. HOW IT WORKS */}
      <section className="py-20 lg:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Seamless Planning"
            title="How Your Journey Unfolds"
            subtitle="Four simple steps from your first spark of inspiration to your return home with lifelong memories."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="text-center p-6 bg-white rounded-2xl border border-slate-200/70 shadow-xs relative z-10">
              <div className="w-12 h-12 mx-auto rounded-full bg-gold text-navy font-bold font-serif text-lg flex items-center justify-center mb-4 shadow-sm">
                1
              </div>
              <h3 className="font-serif text-lg font-bold text-navy mb-2">Explore Destinations</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Browse our researched travel destinations, seasonal guides, and authentic photography for inspiration.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl border border-slate-200/70 shadow-xs relative z-10">
              <div className="w-12 h-12 mx-auto rounded-full bg-gold text-navy font-bold font-serif text-lg flex items-center justify-center mb-4 shadow-sm">
                2
              </div>
              <h3 className="font-serif text-lg font-bold text-navy mb-2">Choose Your Package</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Select a signature itinerary that matches your style—whether romantic honeymoon, family escape, or mountain adventure.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl border border-slate-200/70 shadow-xs relative z-10">
              <div className="w-12 h-12 mx-auto rounded-full bg-gold text-navy font-bold font-serif text-lg flex items-center justify-center mb-4 shadow-sm">
                3
              </div>
              <h3 className="font-serif text-lg font-bold text-navy mb-2">Customize Your Journey</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Collaborate with our travel advisors to tailor room categories, private excursions, dates, and special requests.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl border border-slate-200/70 shadow-xs relative z-10">
              <div className="w-12 h-12 mx-auto rounded-full bg-gold text-navy font-bold font-serif text-lg flex items-center justify-center mb-4 shadow-sm">
                4
              </div>
              <h3 className="font-serif text-lg font-bold text-navy mb-2">Travel and Enjoy</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Depart with complete peace of mind, supported by dedicated transfers, confirmed reservations, and ground assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SPECIAL OFFERS */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-navy-dark via-navy to-navy-light text-white p-8 sm:p-12 border border-gold/30 shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase font-semibold tracking-widest text-gold-light bg-gold/15 px-3 py-1 rounded-full border border-gold/30">
                Seasonal Consultation Privilege
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mt-4">
                Complimentary Bespoke Itinerary Design
              </h3>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                Inquire today for journeys departing in 2027. Enjoy complimentary one-on-one consultation with a senior destination specialist, detailed route planning, and customized hotel vouchers without initial design fees.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-navy font-bold text-sm tracking-wide uppercase transition-all shadow-lg flex items-center gap-2"
              >
                <span>Request Custom Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS (With Honest Illustrative Disclaimer) */}
      <section className="py-20 lg:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Guest Impressions"
            title="Designed for Discerning Travelers"
            subtitle="How we structure every journey for discretion, comfort, and authenticity."
          />

          {/* Honest Disclaimer Banner */}
          <div className="max-w-2xl mx-auto mb-10 p-3 bg-amber-50 border border-amber-200 rounded-xl text-center text-xs text-amber-800">
            {testimonialsData.disclaimer}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsData.items.map((item) => (
              <div
                key={item.id}
                className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex gap-1 text-gold">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-base">★</span>
                    ))}
                  </div>
                  <blockquote className="font-serif italic text-navy text-base leading-relaxed">
                    "{item.quote}"
                  </blockquote>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="block text-xs font-semibold text-navy">
                    {item.clientContext}
                  </span>
                  <span className="block text-[11px] text-slate-500 mt-0.5">
                    {item.destination} • {item.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. TRAVEL INSPIRATION GALLERY */}
      <section className="py-20 lg:py-24 bg-white border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 mb-2 text-xs uppercase tracking-[0.25em] font-semibold text-gold-dark">
                <span className="w-6 h-px bg-current opacity-70" />
                <span>Visual Journeys</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-navy">
                Travel Inspiration Gallery
              </h2>
              <p className="mt-2 text-slate-600 text-base max-w-xl">
                Authentic travel photography capturing the character of our handpicked global destinations. Click any photo to expand.
              </p>
            </div>
            <Link
              to="/gallery"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 font-semibold text-navy hover:text-gold text-sm tracking-wider uppercase transition-colors"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {GALLERY_PREVIEWS.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => openLightbox(idx)}
                className="group relative h-52 sm:h-64 rounded-2xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-gold cursor-pointer"
              >
                <SafeImage
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-left">
                  <Eye className="w-6 h-6 text-gold mb-2" />
                  <span className="text-white font-serif text-sm font-semibold">{item.location}</span>
                  <span className="text-slate-200 text-xs line-clamp-1">{item.caption}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 12. LATEST TRAVEL GUIDES */}
      <section className="py-20 lg:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 mb-2 text-xs uppercase tracking-[0.25em] font-semibold text-gold-dark">
                <span className="w-6 h-px bg-current opacity-70" />
                <span>Field Insights</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-navy">
                Latest Travel Guides
              </h2>
              <p className="mt-2 text-slate-600 text-base max-w-xl">
                Practical, research-backed travel intelligence written to help you prepare for extraordinary journeys.
              </p>
            </div>
            <Link
              to="/blog"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 font-semibold text-navy hover:text-gold text-sm tracking-wider uppercase transition-colors"
            >
              <span>Explore All Guides</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.slug}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-200/80 hover:border-gold/30"
              >
                <div className="relative h-52 overflow-hidden">
                  <SafeImage
                    src={post.heroImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-navy/80 text-gold-light backdrop-blur-xs">
                      {post.tags[0]}
                    </span>
                  </div>
                </div>

                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                      <Calendar className="w-3.5 h-3.5 text-gold" />
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-navy group-hover:text-gold-dark transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>

                    <p className="mt-3 text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                      {post.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy hover:text-gold uppercase tracking-wider transition-colors"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. NEWSLETTER SUBSCRIPTION */}
      <section className="py-16 bg-navy text-white border-t border-gold/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 mx-auto rounded-full bg-gold/20 text-gold-light flex items-center justify-center mb-4">
            <Send className="w-5 h-5" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold">
            Subscribe to Wanderlux Intelligence
          </h2>
          <p className="mt-3 text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
            Receive seasonal destination dispatch guides, private aviation notes, and advance notices on luxury villa availability.
          </p>

          {newsletterSubmitted ? (
            <div className="mt-8 p-4 bg-emerald-900/60 border border-emerald-500/50 rounded-2xl max-w-md mx-auto text-sm text-emerald-200">
              <p className="font-semibold">Thank you for subscribing!</p>
              <p className="text-xs text-emerald-300/90 mt-1">
                (Demo Notice: Newsletter subscription recorded in demonstration mode. Integration ready for Mailchimp or Klaviyo in production.)
              </p>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-gold hover:bg-gold-light text-navy font-semibold text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="mt-4 text-[11px] text-slate-400">
            We respect your privacy. No spam. You may unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* 14. FINAL TRIP PLANNING CTA */}
      <section className="relative py-24 sm:py-32 bg-navy flex items-center justify-center overflow-hidden">
        <SafeImage
          src="/images/hero/hero-3.jpg"
          alt="Karakoram mountains landscape"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 text-gold-light text-xs font-semibold uppercase tracking-widest border border-gold/40 mb-6">
            <Compass className="w-3.5 h-3.5" />
            <span>Begin Your Story</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Ready to Craft Your Next Extraordinary Journey?
          </h2>

          <p className="mt-6 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Speak with a Wanderlux destination specialist today to begin designing your tailor-made international travel experience.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-navy font-bold text-sm tracking-wide uppercase transition-all shadow-xl flex items-center gap-2"
            >
              <span>Schedule Trip Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/packages"
              className="px-8 py-4 rounded-full bg-white/10 hover:bg-white hover:text-navy text-white font-semibold text-sm tracking-wide uppercase border border-white/30 backdrop-blur-xs transition-all"
            >
              <span>View All Tour Packages</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 15. FOOTER */}
      <Footer />

      {/* Gallery Lightbox */}
      <Lightbox
        images={GALLERY_PREVIEWS}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
};
