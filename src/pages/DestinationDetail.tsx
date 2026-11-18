import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import {
  Compass,
  Calendar,
  Coins,
  Globe2,
  CloudSun,
  Plane,
  FileCheck,
  Check,
  X,
  ExternalLink,
  Eye,
  Info
} from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { SEO } from '../components/ui/SEO';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SafeImage } from '../components/ui/SafeImage';
import { Accordion, type AccordionItemData } from '../components/ui/Accordion';
import { Lightbox, type LightboxImage } from '../components/ui/Lightbox';
import { PackageCard } from '../components/cards/PackageCard';
import { DestinationCard } from '../components/cards/DestinationCard';
import { EnquiryForm } from '../components/ui/EnquiryForm';
import { destinations } from '../data/destinations';
import { tourPackages } from '../data/packages';

export const DestinationDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const destination = destinations.find((d) => d.slug === slug);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!destination) {
    return <Navigate to="/404" replace />;
  }

  // Related tour packages
  const relatedPackages = tourPackages.filter(
    (p) => p.destinationSlug === destination.slug
  );

  // Similar destinations (other destinations in same region or popular ones)
  const similarDestinations = destinations
    .filter((d) => d.slug !== destination.slug)
    .slice(0, 3);

  // Lightbox images from gallery and attractions
  const galleryLightboxImages: LightboxImage[] = destination.galleryImages.map((img, i) => ({
    src: img,
    alt: `${destination.name} travel photography ${i + 1}`,
    caption: `${destination.name}, ${destination.country} — Wanderlux Curated Collection`,
    location: `${destination.name}, ${destination.country}`
  }));

  // Accordion items for sample itinerary
  const itineraryAccordionItems: AccordionItemData[] = destination.sampleItinerary.map((day) => ({
    id: day.day,
    title: `Day ${day.day}: ${day.title}`,
    badge: day.mealsIncluded ? `Meals: ${day.mealsIncluded}` : undefined,
    content: (
      <div className="space-y-2">
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {day.description}
        </p>
        {day.highlight && (
          <div className="p-3 bg-gold/10 border-l-2 border-gold rounded-r-lg text-xs sm:text-sm text-navy font-medium">
            <span className="font-semibold text-gold-dark">Curated Highlight: </span>
            {day.highlight}
          </div>
        )}
      </div>
    )
  }));

  // Accordion items for FAQs
  const faqAccordionItems: AccordionItemData[] = destination.faqs.map((faq, i) => ({
    id: i,
    title: faq.question,
    content: (
      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
        {faq.answer}
      </p>
    )
  }));

  return (
    <div className="min-h-screen bg-ivory text-slate-800">
      <SEO
        title={`${destination.name}, ${destination.country} Travel Guide & Packages`}
        description={destination.shortDescription}
        canonical={`/destinations/${destination.slug}`}
        ogImage={destination.heroImage}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'TouristDestination',
          name: destination.name,
          description: destination.shortDescription,
          address: {
            '@type': 'PostalAddress',
            addressCountry: destination.country
          },
          image: destination.heroImage
        }}
      />

      <Header transparentOnHero={false} />

      {/* 1. DESTINATION HERO */}
      <section className="relative pt-32 pb-24 lg:pb-32 bg-navy text-white overflow-hidden">
        <SafeImage
          src={destination.heroImage}
          alt={`${destination.name}, ${destination.country}`}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
          containerClassName="absolute inset-0"
          loading="eager"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/70 to-navy/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Destinations', path: '/destinations' },
              { label: `${destination.name}, ${destination.country}` }
            ]}
            light
            className="mb-6"
          />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 text-gold-light text-xs font-semibold uppercase tracking-widest border border-gold/40 mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>{destination.region}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            {destination.name}
          </h1>

          <p className="text-xl sm:text-2xl text-gold-light font-serif italic mt-2">
            {destination.country}
          </p>

          <p className="mt-6 text-slate-200 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            {destination.shortDescription}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#enquiry-section"
              className="px-8 py-3.5 rounded-full bg-linear-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-navy font-bold text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer"
            >
              Plan Your Trip to {destination.name}
            </a>
            <a
              href="#itinerary-section"
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white hover:text-navy text-white font-semibold text-xs uppercase tracking-wider border border-white/30 backdrop-blur-xs transition-all cursor-pointer"
            >
              View Sample Itinerary
            </a>
          </div>
        </div>
      </section>

      {/* 2. QUICK FACTS BAR */}
      <section className="bg-white border-b border-slate-200 py-8 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1 mb-1">
                <Calendar className="w-3.5 h-3.5 text-gold" />
                <span>Best Months</span>
              </span>
              <p className="text-xs sm:text-sm font-semibold text-navy leading-tight">
                {destination.bestTimeToVisit.split('(')[0]}
              </p>
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1 mb-1">
                <Coins className="w-3.5 h-3.5 text-gold" />
                <span>Currency</span>
              </span>
              <p className="text-xs sm:text-sm font-semibold text-navy leading-tight">
                {destination.currency}
              </p>
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1 mb-1">
                <Globe2 className="w-3.5 h-3.5 text-gold" />
                <span>Languages</span>
              </span>
              <p className="text-xs sm:text-sm font-semibold text-navy leading-tight">
                {destination.languages[0]}
              </p>
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1 mb-1">
                <CloudSun className="w-3.5 h-3.5 text-gold" />
                <span>Climate</span>
              </span>
              <p className="text-xs sm:text-sm font-semibold text-navy leading-tight">
                {destination.climate.split(';')[0]}
              </p>
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1 mb-1">
                <Plane className="w-3.5 h-3.5 text-gold" />
                <span>Duration Note</span>
              </span>
              <p className="text-xs sm:text-sm font-semibold text-navy leading-tight">
                {destination.durationDays} Days / 6 Nights
              </p>
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1 mb-1">
                <FileCheck className="w-3.5 h-3.5 text-gold" />
                <span>Visa Type</span>
              </span>
              <p className="text-xs sm:text-sm font-semibold text-navy leading-tight">
                {destination.visaGuidance.summary.split('.')[0]}
              </p>
            </div>
          </div>

          {/* Official Visa Source Box */}
          <div className="mt-6 p-4 rounded-2xl bg-ivory border border-gold/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-start gap-2.5">
              <Info className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-navy">Official Visa Portal: </span>
                <span className="text-slate-600">{destination.visaGuidance.requirementsNote}</span>
                <span className="text-slate-400 text-[11px] block mt-0.5">
                  Verified with {destination.visaGuidance.portalName} • Last checked: {destination.visaGuidance.lastVerifiedDate}
                </span>
              </div>
            </div>
            <a
              href={destination.visaGuidance.officialPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-3 py-1.5 rounded-lg bg-navy hover:bg-gold hover:text-navy text-white font-medium text-xs flex items-center gap-1.5 transition-colors"
            >
              <span>Official Government Portal</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. DESTINATION OVERVIEW */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-dark block mb-2">
              Destination Profile
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-navy">
              About {destination.name}
            </h2>
          </div>

          <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed font-light">
            {destination.overview.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {destination.flightDurationNote && (
            <div className="mt-8 p-4 rounded-xl bg-navy/5 border border-navy/10 flex items-center gap-3 text-xs sm:text-sm text-slate-700">
              <Plane className="w-5 h-5 text-gold shrink-0" />
              <span>{destination.flightDurationNote}</span>
            </div>
          )}
        </div>
      </section>

      {/* 4. TOP ATTRACTIONS */}
      <section className="py-16 bg-ivory border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-dark block mb-2">
              Landmarks & Culture
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-navy">
              Top Attractions in {destination.name}
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Authentic landmarks, historical sites, and geographical wonders with practical visiting notes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destination.attractions.map((attraction, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all"
              >
                <div className="relative h-60 overflow-hidden">
                  <SafeImage
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-navy/80 text-gold-light text-[11px] font-semibold uppercase px-3 py-1 rounded-full backdrop-blur-xs">
                    {attraction.location}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-navy mb-2">
                    {attraction.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {attraction.description}
                  </p>
                  {attraction.visitorTips && (
                    <div className="p-3 bg-ivory rounded-xl border border-slate-200 text-xs text-slate-700 flex items-start gap-2">
                      <span className="font-semibold text-gold-dark shrink-0">Visitor Tip:</span>
                      <span>{attraction.visitorTips}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SAMPLE ITINERARY */}
      <section id="itinerary-section" className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-dark block mb-2">
              Day-by-Day Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-navy">
              Sample {destination.durationDays}-Day Itinerary
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              A geographically realistic sequence designed for balanced pacing and seamless transitions.
            </p>
          </div>

          <Accordion items={itineraryAccordionItems} defaultOpenIndex={0} />
        </div>
      </section>

      {/* 6. INCLUDED AND EXCLUDED SERVICES */}
      <section className="py-16 bg-ivory border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-dark block mb-2">
              Planning Inclusions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-navy">
              What Is Typically Included
            </h2>
            <p className="mt-2 text-slate-600 text-xs">
              (Illustrative planning breakdown based on benchmark packages; final contracts specify exact confirmed provisions.)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 sm:p-8 bg-white rounded-2xl border border-emerald-200/60 shadow-xs">
              <h3 className="font-serif text-xl font-bold text-navy mb-4 flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-600" />
                <span>Indicative Package Inclusions</span>
              </h3>
              <ul className="space-y-3">
                {destination.sampleInclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 sm:p-8 bg-white rounded-2xl border border-rose-200/60 shadow-xs">
              <h3 className="font-serif text-xl font-bold mb-4 flex items-center gap-2 text-rose-800">
                <X className="w-5 h-5 text-rose-500" />
                <span>Important Exclusions</span>
              </h3>
              <ul className="space-y-3">
                {destination.sampleExclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DESTINATION GALLERY */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-dark block mb-1">
                Visual Impressions
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-navy">
                {destination.name} Photography
              </h2>
            </div>
            <button
              onClick={() => {
                setLightboxIndex(0);
                setLightboxOpen(true);
              }}
              className="px-4 py-2 rounded-full border border-slate-300 hover:border-gold text-navy text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5 text-gold" />
              <span>Open Lightbox</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {destination.galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setLightboxIndex(idx);
                  setLightboxOpen(true);
                }}
                className="group relative h-48 rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-gold cursor-pointer"
              >
                <SafeImage
                  src={img}
                  alt={`${destination.name} preview ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 8. RELATED PACKAGES */}
      {relatedPackages.length > 0 && (
        <section className="py-16 bg-ivory border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-dark block mb-2">
                Curated Packages
              </span>
              <h2 className="font-serif text-3xl font-medium text-navy">
                Packages Featuring {destination.name}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPackages.map((pkg) => (
                <PackageCard key={pkg.slug} pkg={pkg} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. BEST TRAVEL SEASON CHART */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-dark block mb-2">
              Climate & Seasonality
            </span>
            <h2 className="font-serif text-3xl font-medium text-navy">
              Seasonal Travel Guide for {destination.name}
            </h2>
            <p className="mt-2 text-slate-600 text-xs">
              Researched meteorological records and seasonal considerations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {destination.seasons.map((season, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-slate-200 bg-ivory/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-serif text-lg font-bold text-navy">
                      {season.season}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      season.suitability === 'High'
                        ? 'bg-emerald-100 text-emerald-800'
                        : season.suitability === 'Good'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {season.suitability} Suitability
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                    <span>{season.months}</span>
                    <span>•</span>
                    <span className="font-semibold text-navy">{season.temperature}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {season.highlights}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQS */}
      <section className="py-16 bg-ivory border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-dark block mb-2">
              Helpful Intelligence
            </span>
            <h2 className="font-serif text-3xl font-medium text-navy">
              Frequently Asked Questions: {destination.name}
            </h2>
          </div>

          <Accordion items={faqAccordionItems} defaultOpenIndex={0} />
        </div>
      </section>

      {/* 11. TRAVEL ENQUIRY CARD */}
      <section id="enquiry-section" className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-dark block mb-2">
              Tailor-Made Inquiry
            </span>
            <h2 className="font-serif text-3xl font-medium text-navy">
              Begin Planning Your {destination.name} Journey
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Indicative luxury benchmark: <strong className="text-navy">${destination.indicativePriceUSD.toLocaleString()} per person</strong> ({destination.durationDays} Days / 6 Nights).
            </p>
          </div>

          <div className="bg-ivory/60 p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-md">
            <EnquiryForm initialDestination={`${destination.name}, ${destination.country}`} />
          </div>
        </div>
      </section>

      {/* 12. SIMILAR DESTINATIONS */}
      <section className="py-16 bg-ivory border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-dark block mb-2">
              Alternative Inspiration
            </span>
            <h2 className="font-serif text-3xl font-medium text-navy">
              Similar Destinations You May Love
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarDestinations.map((dest) => (
              <DestinationCard key={dest.slug} destination={dest} />
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox for Gallery */}
      <Lightbox
        images={galleryLightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
};
