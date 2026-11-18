import React, { useState } from 'react';
import { Compass } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  fallbackText?: string;
  containerClassName?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  fallbackText,
  containerClassName = '',
  loading = 'lazy',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imageContainerClassName = containerClassName
    ? `overflow-hidden ${containerClassName}`
    : 'relative overflow-hidden';

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-linear-to-br from-navy to-navy-light text-white p-6 text-center select-none ${className} ${containerClassName}`}
        role="img"
        aria-label={alt || 'Travel destination image'}
      >
        <Compass className="w-10 h-10 text-gold mb-2 animate-spin-slow opacity-80" />
        <span className="font-serif text-sm tracking-wide text-ivory font-medium">
          {fallbackText || alt || 'Wanderlux Curated Collection'}
        </span>
        <span className="text-[10px] text-gold-light/70 uppercase tracking-widest mt-1">
          Authentic Destination Photography
        </span>
      </div>
    );
  }

  return (
    <div className={imageContainerClassName}>
      {/* Subtle skeleton shimmer before load */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onError={() => setHasError(true)}
        onLoad={() => setIsLoaded(true)}
        loading={loading}
        {...props}
      />
    </div>
  );
};
