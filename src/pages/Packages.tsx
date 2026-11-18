import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowUpDown, Compass, RotateCcw } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { SEO } from '../components/ui/SEO';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SafeImage } from '../components/ui/SafeImage';
import { PackageCard } from '../components/cards/PackageCard';
import { tourPackages } from '../data/packages';
import type { PackageCategory } from '../types';

const CATEGORIES: (PackageCategory | 'All')[] = [
  'All',
  'Honeymoon',
  'Family',
  'Adventure',
  'Luxury',
  'Budget',
  'Group Tours'
];

export const Packages: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get('category') as PackageCategory) || 'All';
  const initialDestination = searchParams.get('destination') || 'All';

  const [selectedCategory, setSelectedCategory] = useState<PackageCategory | 'All'>(initialCategory);
  const [selectedDestination, setSelectedDestination] = useState<string>(initialDestination);
  const [selectedDuration, setSelectedDuration] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'duration'>('price-asc');

  // Extract unique destinations from packages
  const destinationList = useMemo(() => {
    const list = Array.from(new Set(tourPackages.map((p) => p.destination)));
    return ['All', ...list];
  }, []);

  // Filter and sort packages
  const filteredPackages = useMemo(() => {
    return tourPackages
      .filter((pkg) => {
        const matchesCategory =
          selectedCategory === 'All' || pkg.category === selectedCategory;

        const matchesDestination =
          selectedDestination === 'All' || pkg.destination === selectedDestination;

        let matchesDuration = true;
        if (selectedDuration === 'short') matchesDuration = pkg.durationDays <= 5;
        if (selectedDuration === 'medium') matchesDuration = pkg.durationDays >= 6 && pkg.durationDays <= 7;
        if (selectedDuration === 'long') matchesDuration = pkg.durationDays >= 8;

        return matchesCategory && matchesDestination && matchesDuration;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.indicativePriceUSD - b.indicativePriceUSD;
        if (sortBy === 'price-desc') return b.indicativePriceUSD - a.indicativePriceUSD;
        if (sortBy === 'duration') return a.durationDays - b.durationDays;
        return 0;
      });
  }, [selectedCategory, selectedDestination, selectedDuration, sortBy]);

  const handleCategoryClick = (cat: PackageCategory | 'All') => {
    setSelectedCategory(cat);
    const newParams = new URLSearchParams(searchParams);
    if (cat === 'All') {
      newParams.delete('category');
    } else {
      newParams.set('category', cat);
    }
    setSearchParams(newParams);
  };

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSelectedDestination('All');
    setSelectedDuration('All');
    setSortBy('price-asc');
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-ivory text-slate-800">
      <SEO
        title="Signature Tour Packages & Luxury Itineraries"
        description="Browse handcrafted travel packages across Honeymoon, Family, Adventure, and Luxury categories with verified USD pricing benchmarks and daily itineraries."
        canonical="/packages"
      />

      <Header transparentOnHero={false} />

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-navy text-white text-center relative overflow-hidden">
        <SafeImage
          src="/images/hero/hero-4.jpg"
          alt="Overwater villas above a turquoise Maldives lagoon"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          containerClassName="absolute inset-0"
          loading="eager"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/75 to-navy/60" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ label: 'Tour Packages' }]}
            light
            className="justify-center mb-6"
          />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold-light text-xs font-semibold uppercase tracking-widest border border-gold/30 mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Curated Escapes</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Curated Tour Packages
          </h1>

          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Transparently structured itineraries with researched USD planning benchmarks, 4-star and 5-star accommodations, and private ground logistics.
          </p>
        </div>
      </section>

      {/* Filter and Control Bar */}
      <section className="bg-white border-b border-slate-200 py-6 sticky top-17 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-slate-100 mb-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-navy text-gold shadow-md'
                    : 'bg-ivory text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Secondary Filters: Destination, Duration, Sort */}
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex flex-wrap items-center gap-3">
              {/* Destination Filter */}
              <div className="flex items-center gap-2">
                <span className="text-slate-500 font-semibold uppercase tracking-wider">Destination:</span>
                <select
                  value={selectedDestination}
                  onChange={(e) => setSelectedDestination(e.target.value)}
                  className="px-3 py-1.5 rounded-lg border border-slate-300 bg-ivory text-navy font-medium focus:outline-none focus:ring-1 focus:ring-gold cursor-pointer"
                >
                  {destinationList.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              {/* Duration Filter */}
              <div className="flex items-center gap-2">
                <span className="text-slate-500 font-semibold uppercase tracking-wider">Duration:</span>
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="px-3 py-1.5 rounded-lg border border-slate-300 bg-ivory text-navy font-medium focus:outline-none focus:ring-1 focus:ring-gold cursor-pointer"
                >
                  <option value="All">All Durations</option>
                  <option value="short">5 Days or Less</option>
                  <option value="medium">6 to 7 Days</option>
                  <option value="long">8+ Days</option>
                </select>
              </div>

              {(selectedCategory !== 'All' || selectedDestination !== 'All' || selectedDuration !== 'All') && (
                <button
                  onClick={handleResetFilters}
                  className="text-xs text-rose-600 hover:text-rose-800 font-semibold flex items-center gap-1 cursor-pointer ml-2"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>

            {/* Sorting */}
            <div className="flex items-center gap-2">
              <span className="text-slate-500 font-semibold uppercase tracking-wider flex items-center gap-1">
                <ArrowUpDown className="w-3.5 h-3.5 text-gold" />
                <span>Sort By:</span>
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'price-asc' | 'price-desc' | 'duration')}
                className="px-3 py-1.5 rounded-lg border border-slate-300 bg-ivory text-navy font-medium focus:outline-none focus:ring-1 focus:ring-gold cursor-pointer"
              >
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="duration">Duration: Shortest to Longest</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPackages.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8">
              <Compass className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="font-serif text-2xl font-bold text-navy">No Packages Match Your Filter</h3>
              <p className="mt-2 text-slate-500 text-sm max-w-md mx-auto">
                No itineraries currently match your selected filters. Try broadening your criteria or reset the filters.
              </p>
              <button
                onClick={handleResetFilters}
                className="mt-6 px-6 py-2.5 rounded-full bg-gold text-navy font-semibold text-xs uppercase tracking-wider hover:bg-gold-light transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <p className="text-xs uppercase font-semibold tracking-wider text-slate-500">
                  Showing <span className="text-navy font-bold">{filteredPackages.length}</span> structured packages
                </p>
                <span className="text-xs text-slate-500">
                  Default currency: <strong className="text-navy">USD ($)</strong>
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPackages.map((pkg) => (
                  <PackageCard key={pkg.slug} pkg={pkg} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Price Transparency Methodology Note */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-serif text-xl font-bold text-navy mb-2">
            Pricing Estimates & Currency Transparency
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            All prices are realistic, researched planning benchmarks calculated on twin-share occupancy in 4-star boutique and 5-star luxury hotels. Prices exclude international flights unless explicitly specified. Quotes provided upon consultation reflect real-time live supplier availability and seasonal dates.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};
