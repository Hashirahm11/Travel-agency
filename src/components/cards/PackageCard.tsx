import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Check, ArrowRight } from 'lucide-react';
import type { TourPackage } from '../../types';
import { SafeImage } from '../ui/SafeImage';

interface PackageCardProps {
  pkg: TourPackage;
  className?: string;
}

export const PackageCard: React.FC<PackageCardProps> = ({
  pkg,
  className = ''
}) => {
  return (
    <div
      className={`group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-200/80 hover:border-gold/40 hover:-translate-y-1.5 ${className}`}
    >
      {/* Image with Category Badge */}
      <div className="relative h-60 overflow-hidden">
        <SafeImage
          src={pkg.cardImage}
          alt={`${pkg.title} - Wanderlux Travels`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-trom-navy/80 via-transparent to-transparent" />

        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-gold text-navy shadow-sm">
            {pkg.category}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-gold-light font-medium">
            <MapPin className="w-3.5 h-3.5" />
            <span>{pkg.destination}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-200 bg-navy/60 px-2.5 py-1 rounded-full backdrop-blur-xs">
            <Clock className="w-3.5 h-3.5 text-gold-light" />
            <span>{pkg.duration}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-xl font-bold text-navy group-hover:text-gold-dark transition-colors line-clamp-1">
            {pkg.title}
          </h3>
          <p className="mt-2 text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
            {pkg.overview}
          </p>

          {/* Key Inclusions preview */}
          <div className="mt-4 space-y-1.5">
            {pkg.highlights.slice(0, 2).map((h, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                <Check className="w-3.5 h-3.5 text-teal shrink-0 mt-0.5" />
                <span className="line-clamp-1">{h}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-slate-100 flex items-end justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-medium">
              Indicative Estimate
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-bold text-navy">
                ${pkg.indicativePriceUSD.toLocaleString()}
              </span>
              <span className="text-[10px] text-slate-500">/ person</span>
            </div>
          </div>

          <Link
            to={`/packages/${pkg.slug}`}
            className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-navy hover:bg-gold hover:text-navy text-white text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
