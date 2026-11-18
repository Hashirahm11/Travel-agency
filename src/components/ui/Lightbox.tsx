import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Compass } from 'lucide-react';
import { SafeImage } from './SafeImage';

export interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
  location?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate
}) => {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') {
      onNavigate((currentIndex + 1) % images.length);
    }
    if (e.key === 'ArrowLeft') {
      onNavigate((currentIndex - 1 + images.length) % images.length);
    }
  }, [isOpen, onClose, onNavigate, currentIndex, images.length]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-dark/95 backdrop-blur-md p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gold cursor-pointer"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation - Prev */}
      {images.length > 1 && (
        <button
          onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-gold hover:text-navy text-white transition-all focus:outline-none focus:ring-2 focus:ring-gold cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Navigation - Next */}
      {images.length > 1 && (
        <button
          onClick={() => onNavigate((currentIndex + 1) % images.length)}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-gold hover:text-navy text-white transition-all focus:outline-none focus:ring-2 focus:ring-gold cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Central Content */}
      <div className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center">
        <SafeImage
          src={current.src}
          alt={current.alt}
          className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
        />

        {/* Caption */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-gold-light mb-1">
            <Compass className="w-3.5 h-3.5" />
            <span>{current.location || 'Wanderlux Gallery'}</span>
            <span className="text-white/40">•</span>
            <span>{currentIndex + 1} / {images.length}</span>
          </div>
          <p className="text-white font-serif text-base sm:text-lg">
            {current.caption || current.alt}
          </p>
        </div>
      </div>
    </div>
  );
};
