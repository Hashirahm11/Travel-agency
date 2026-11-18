import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = ''
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-[0.25em] font-semibold ${light ? 'text-gold-light' : 'text-gold-dark'}`}>
          <span className="w-6 h-px bg-current opacity-70" />
          <span>{eyebrow}</span>
          <span className="w-6 h-px bg-current opacity-70" />
        </div>
      )}
      <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight ${light ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg font-light leading-relaxed ${light ? 'text-slate-300' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
