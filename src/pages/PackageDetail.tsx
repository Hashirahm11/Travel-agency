import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  MapPin,
  Users,
  Check,
  X,
  Compass,
  Sparkles,
  Calendar,
  Building
} from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { SEO } from '../components/ui/SEO';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SafeImage } from '../components/ui/SafeImage';
import { Accordion, type AccordionItemData } from '../components/ui/Accordion';
import { PackageCard } from '../components/cards/PackageCard';
import { EnquiryForm } from '../components/ui/EnquiryForm';
import { tourPackages } from '../data/packages';

export const PackageDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const pkg = tourPackages.find((p) => p.slug === slug);

  if (!pkg) {
    return <Navigate to="/404" replace />;
  }

  // Related packages
  const relatedPackages = tourPackages
    .filter((p) => p.slug !== pkg.slug)
    .slice(0, 3);

  // Accordion items for daily itinerary
  const itineraryAccordionItems: AccordionItemData[] = pkg.dailyItinerary.map((day) => ({
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
            <span className="font-semibold text-gold-dark">Day Highlight: </span>
            {day.highlight}
          </div>
        )}
      </div>
    )
  }));

  return (
    <div className="min-h-screen bg-ivory text-slate-800">
      <SEO
        title={`${pkg.title} | ${pkg.destination}`}
        description={pkg.overview}
        canonical={`/packages/${pkg.slug}`}
        ogImage={pkg.heroImage}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: pkg.title,
          description: pkg.overview,
          image: pkg.heroImage,
          offers: {
            '@type': 'Offer',
            priceCurrency: 'USD',
            price: pkg.indicativePriceUSD,
            availability: 'https://schema.org/InStock',
            priceValidUntil: '2027-12-31'
          }
        }}
      />

      <Header transparentOnHero={false} />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-navy text-white overflow-hidden">
        <SafeImage
          src={pkg.heroImage}
          alt={pkg.title}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          containerClassName="absolute inset-0"
          loading="eager"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/80 to-navy/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Packages', path: '/packages' },
              { label: pkg.title }
            ]}
            light
            className="mb-6"
          />

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold text-navy">
              {pkg.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-white border border-white/20">
              {pkg.duration}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
            {pkg.title}
          </h1>

          <div className="mt-4 flex items-center gap-2 text-gold-light text-base sm:text-lg font-serif">
            <MapPin className="w-5 h-5 text-gold" />
            <span>{pkg.destination}</span>
          </div>

          <p className="mt-6 text-slate-200 text-base sm:text-lg max-w-3xl font-light leading-relaxed">
            {pkg.overview}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#booking-enquiry"
              className="px-8 py-3.5 rounded-full bg-linear-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-navy font-bold text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer"
            >
              Inquire About This Package
            </a>
            <Link
              to={`/destinations/${pkg.destinationSlug}`}
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white hover:text-navy text-white font-semibold text-xs uppercase tracking-wider border border-white/30 backdrop-blur-xs transition-all"
            >
              Explore {pkg.destination} Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Key Pricing & Assumptions Snapshot */}
      <section className="bg-white border-b border-slate-200 py-8 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-slate-200 pb-4 md:pb-0 pr-0 md:pr-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block mb-1">
                Indicative Planning Price
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-bold font-serif text-navy">
                  ${pkg.indicativePriceUSD.toLocaleString()}
                </span>
                <span className="text-xs text-slate-500">/ person</span>
              </div>
              <span className="text-[11px] text-slate-400 mt-0.5 block">
                {pkg.pricingDetails.basis}
              </span>
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1 mb-1">
                <Building className="w-3.5 h-3.5 text-gold" />
                <span>Accommodation Benchmark</span>
              </span>
              <p className="text-xs font-semibold text-navy leading-tight">
                {pkg.pricingDetails.accommodationCategory}
              </p>
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1 mb-1">
                <Calendar className="w-3.5 h-3.5 text-gold" />
                <span>Season & Dates</span>
              </span>
              <p className="text-xs font-semibold text-navy leading-tight">
                {pkg.pricingDetails.season}
              </p>
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1 mb-1">
                <Users className="w-3.5 h-3.5 text-gold" />
                <span>Traveler Profile</span>
              </span>
              <p className="text-xs font-semibold text-navy leading-tight">
                {pkg.suitableFor}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left 2 Cols: Details & Itinerary */}
            <div className="lg:col-span-2 space-y-12">
              {/* Highlights */}
              <div className="p-8 bg-white rounded-3xl border border-slate-200/80 shadow-xs">
                <h3 className="font-serif text-2xl font-bold text-navy mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-gold" />
                  <span>Curated Package Highlights</span>
                </h3>
                <ul className="space-y-3.5">
                  {pkg.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <div className="w-5 h-5 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Locations Covered */}
              <div className="p-8 bg-white rounded-3xl border border-slate-200/80 shadow-xs">
                <h3 className="font-serif text-xl font-bold text-navy mb-4 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-gold" />
                  <span>Locations Covered</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {pkg.locationsCovered.map((loc, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-full bg-ivory border border-slate-200 text-xs font-medium text-navy"
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Daily Itinerary Accordion */}
              <div>
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-dark block mb-1">
                    Daily Schedule
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy">
                    Detailed Day-by-Day Itinerary
                  </h3>
                </div>

                <Accordion items={itineraryAccordionItems} defaultOpenIndex={0} />
              </div>

              {/* Inclusions and Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-2xl border border-emerald-200 shadow-xs">
                  <h4 className="font-serif text-lg font-bold text-emerald-800 mb-4 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Inclusions</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {pkg.inclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-rose-200 shadow-xs">
                  <h4 className="font-serif text-lg font-bold text-rose-800 mb-4 flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-500" />
                    <span>Exclusions</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {pkg.exclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Col: Booking Enquiry Form Sticky */}
            <div className="lg:col-span-1">
              <div id="booking-enquiry" className="sticky top-28 bg-white p-6 sm:p-8 rounded-3xl border border-gold/30 shadow-xl space-y-6">
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-gold-dark block mb-1">
                    Bespoke Consultation
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-navy">
                    Inquire About This Journey
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Benchmark: <strong>${pkg.indicativePriceUSD.toLocaleString()}</strong> per person ({pkg.duration}).
                  </p>
                </div>

                <EnquiryForm
                  initialDestination={pkg.destination}
                  packageTitle={pkg.title}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Packages */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-dark block mb-2">
              Discover More
            </span>
            <h2 className="font-serif text-3xl font-medium text-navy">
              Other Curated Itineraries
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPackages.map((p) => (
              <PackageCard key={p.slug} pkg={p} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
