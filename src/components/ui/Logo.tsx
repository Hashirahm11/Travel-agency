import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  className = '',
  showTagline = false
}) => {
  const isLight = variant === 'light';
  const textColor = isLight ? 'text-white' : 'text-navy';
  const subTextColor = isLight ? 'text-gold-light' : 'text-gold-dark';

  return (
    <Link to="/" className={`inline-flex items-center gap-2 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${className}`} aria-label="Wanderlux Travels - Home">
      {/* Original Luxury Compass-Astrolabe Emblem */}
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 transition-transform duration-500 group-hover:rotate-45"
        aria-hidden="true"
      >
        {/* Outer Ring */}
        <circle cx="24" cy="24" r="22" stroke="#C9A24B" strokeWidth="1.5" strokeDasharray="1 3" opacity="0.7" />
        {/* Inner Solid Ring */}
        <circle cx="24" cy="24" r="18" stroke="#C9A24B" strokeWidth="1.2" />
        {/* Compass Cardinal Points */}
        <path d="M24 6L26.5 21.5L42 24L26.5 26.5L24 42L21.5 26.5L6 24L21.5 21.5L24 6Z" fill="#C9A24B" />
        {/* Center Diamond Core */}
        <path d="M24 19L27.5 24L24 29L20.5 24L24 19Z" fill={isLight ? '#0B1F3A' : '#FAF7F2'} />
        {/* Subtle Orbital Flight Arc */}
        <path d="M10 38C15 44 33 44 38 38" stroke="#C9A24B" strokeWidth="1" strokeLinecap="round" />
        <circle cx="38" cy="38" r="1.5" fill="#E0C075" />
      </svg>

      <div className="flex flex-col text-left">
        <span className={`font-serif tracking-[0.14em] sm:tracking-[0.22em] text-lg sm:text-xl font-bold uppercase transition-colors ${textColor}`}>
          Wanderlux
        </span>
        <span className={`text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.32em] font-medium uppercase font-sans -mt-0.5 ${subTextColor}`}>
          Travels
        </span>
        {showTagline && (
          <span className="text-[9px] tracking-wider text-slate-400 italic mt-0.5">
            Journeys Crafted Beyond the Ordinary
          </span>
        )}
      </div>
    </Link>
  );
};
