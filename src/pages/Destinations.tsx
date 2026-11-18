import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, MapPin, SlidersHorizontal, Compass } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { SEO } from '../components/ui/SEO';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SafeImage } from '../components/ui/SafeImage';
import { DestinationCard } from '../components/cards/DestinationCard';
import { destinations } from '../data/destinations';

export const Destinations: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedRegion, setSelectedRegion] = useState('All');

  // Extract unique regions
  const regions = useMemo(() => {
    const list = Array.from(new Set(destinations.map((d) => d.region)));
    return ['All', ...list];
  }, []);

  // Filter destinations based on search query and region
  const filteredDestinations = useMemo(() => {
    return destinations.filter((dest) => {
      const matchesSearch =
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesRegion =
        selectedRegion === 'All' || dest.region === selectedRegion;

      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, selectedRegion]);

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    const newParams = new URLSearchParams(searchParams);
    if (val) {
      newParams.set('q', val);
    } else {
      newParams.delete('q');
    }
    setSearchParams(newParams);
  };

  return (
    <div className="min-h-screen bg-ivory text-slate-800">
      <SEO
        title="Curated Global Destinations"
        description="Explore 13 hand-selected luxury travel destinations researched with verified tourist attractions, climate information, visa guidance, and indicative USD prices."
        canonical="/destinations"
      />

      <Header transparentOnHero={false} />

      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-navy text-white text-center relative overflow-hidden">
        <SafeImage
          src="/images/hero/hero-1.jpg"
          alt="Matterhorn peak at sunrise in the Swiss Alps"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          containerClassName="absolute inset-0"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/75 to-navy/60" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ label: 'Destinations' }]}
            light
            className="justify-center mb-6"
          />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold-light text-xs font-semibold uppercase tracking-widest border border-gold/30 mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Researched World Escapes</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Curated Global Destinations
          </h1>

          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Thirteen distinct sanctuaries researched with accurate meteorological data, authentic attractions, and official immigration guidance.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar Section */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-gold absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search by city or country..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold bg-ivory/50"
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-navy cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Region Filter Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1 mr-1 shrink-0">
                <SlidersHorizontal className="w-3.5 h-3.5 text-gold" />
                <span>Region:</span>
              </span>
              {regions.map((reg) => (
                <button
                  key={reg}
                  onClick={() => setSelectedRegion(reg)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    selectedRegion === reg
                      ? 'bg-navy text-gold font-semibold shadow-xs'
                      : 'bg-ivory hover:bg-slate-200 text-slate-600'
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredDestinations.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8">
              <MapPin className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="font-serif text-2xl font-bold text-navy">No Destinations Found</h3>
              <p className="mt-2 text-slate-500 text-sm max-w-md mx-auto">
                No destinations matched your search for "{searchQuery}". Try adjusting your keywords or clearing the region filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedRegion('All');
                }}
                className="mt-6 px-6 py-2.5 rounded-full bg-gold text-navy font-semibold text-xs uppercase tracking-wider hover:bg-gold-light transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <p className="text-xs uppercase font-semibold tracking-wider text-slate-500">
                  Showing <span className="text-navy font-bold">{filteredDestinations.length}</span> verified destinations
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredDestinations.map((dest) => (
                  <DestinationCard key={dest.slug} destination={dest} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};
