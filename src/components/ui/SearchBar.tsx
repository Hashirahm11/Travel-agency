import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { destinations } from '../../data/destinations';

interface SearchBarProps {
  className?: string;
  variant?: 'floating' | 'inline';
}

export const SearchBar: React.FC<SearchBarProps> = ({
  className = '',
  variant = 'floating'
}) => {
  const navigate = useNavigate();
  const [selectedDestination, setSelectedDestination] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [travelers, setTravelers] = useState('2');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (selectedDestination) params.set('q', selectedDestination);
    if (travelDate) params.set('date', travelDate);
    if (travelers) params.set('travelers', travelers);

    // If destination selected, search destinations or packages
    navigate(`/destinations?${params.toString()}`);
  };

  const isFloating = variant === 'floating';

  return (
    <form
      onSubmit={handleSearch}
      className={`bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-2xl border border-gold/20 ${
        isFloating ? 'max-w-4xl mx-auto -mt-12 sm:-mt-14 relative z-30' : ''
      } ${className}`}
      role="search"
      aria-label="Trip Search"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 items-center">
        {/* Destination Field */}
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-ivory/60 border border-slate-200/80 hover:border-gold/60 transition-colors">
          <MapPin className="w-5 h-5 text-gold shrink-0" />
          <div className="flex-1 min-w-0">
            <label htmlFor="search-destination" className="block text-[10px] uppercase font-bold tracking-wider text-slate-500">
              Destination
            </label>
            <select
              id="search-destination"
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-navy focus:outline-none cursor-pointer truncate"
            >
              <option value="">All Destinations (13)</option>
              {destinations.map((d) => (
                <option key={d.slug} value={d.name}>
                  {d.name}, {d.country}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Travel Date Field */}
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-ivory/60 border border-slate-200/80 hover:border-gold/60 transition-colors">
          <Calendar className="w-5 h-5 text-gold shrink-0" />
          <div className="flex-1 min-w-0">
            <label htmlFor="search-date" className="block text-[10px] uppercase font-bold tracking-wider text-slate-500">
              Approximate Date
            </label>
            <input
              type="month"
              id="search-date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-navy focus:outline-none cursor-pointer"
            />
          </div>
        </div>

        {/* Number of Travelers Field */}
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-ivory/60 border border-slate-200/80 hover:border-gold/60 transition-colors">
          <Users className="w-5 h-5 text-gold shrink-0" />
          <div className="flex-1 min-w-0">
            <label htmlFor="search-travelers" className="block text-[10px] uppercase font-bold tracking-wider text-slate-500">
              Travelers
            </label>
            <select
              id="search-travelers"
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-navy focus:outline-none cursor-pointer"
            >
              <option value="1">1 Solo Traveler</option>
              <option value="2">2 Travelers (Couple / Twin)</option>
              <option value="3">3 Travelers</option>
              <option value="4">4 Travelers (Family / Group)</option>
              <option value="5+">5+ Travelers (Private Group)</option>
            </select>
          </div>
        </div>

        {/* Search Submit Button */}
        <div className="sm:col-span-3 lg:col-span-1">
          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-navy font-semibold text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gold cursor-pointer"
          >
            <Search className="w-4 h-4 text-navy" />
            <span>Search Journeys</span>
          </button>
        </div>
      </div>
    </form>
  );
};
