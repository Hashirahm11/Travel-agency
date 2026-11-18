import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Compass } from 'lucide-react';
import type { Destination } from '../../types';
import { SafeImage } from '../ui/SafeImage';

interface DestinationCardProps {
  destination: Destination;
  className?: string;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  className = ''
}) => {
  return (
    <div
      className={`group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-200/80 hover:border-gold/40 hover:-translate-y-1.5 ${className}`}
    >
      {/* Image with zoom effect */}
      <div className="relative h-64 overflow-hidden">
        <SafeImage
          src={destination.cardImage}
          alt={`${destination.name}, ${destination.country} - Wanderlux Travels`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />

        {/* Region Tag */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-navy/80 text-gold-light backdrop-blur-xs border border-gold/30">
            <Compass className="w-3 h-3" />
            {destination.region}
          </span>
        </div>

        {/* Name and Country on Image */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <span className="text-xs font-medium tracking-widest uppercase text-gold-light block">
            {destination.country}
          </span>
          <h3 className="font-serif text-2xl font-bold tracking-tight text-white group-hover:text-gold-light transition-colors">
            {destination.name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">
          {destination.shortDescription}
        </p>

        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1 text-slate-500">
            <Calendar className="w-3.5 h-3.5 text-gold" />
            <span>{destination.durationDays} Days</span>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-wider text-slate-400 block">
              Indicative From
            </span>
            <span className="text-sm font-bold text-navy">
              ${destination.indicativePriceUSD.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="mt-4">
          <Link
            to={`/destinations/${destination.slug}`}
            className="w-full py-2.5 px-4 rounded-xl bg-ivory hover:bg-gold hover:text-navy text-navy font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 border border-slate-200 group-hover:border-gold"
          >
            <span>Explore Destination</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};
