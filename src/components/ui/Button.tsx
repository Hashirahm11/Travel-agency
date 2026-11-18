import React from 'react';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-light' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  to?: string;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  to,
  href,
  icon,
  iconPosition = 'right',
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none cursor-pointer';

  const sizeClasses = {
    sm: 'text-xs px-4 py-2 gap-1.5 min-h-[38px]',
    md: 'text-sm px-6 py-3 gap-2 min-h-[46px]',
    lg: 'text-base px-8 py-4 gap-2.5 min-h-[52px]'
  }[size];

  const variantClasses = {
    primary: 'bg-gold hover:bg-gold-light text-navy font-semibold shadow-md hover:shadow-lg focus-visible:ring-gold border border-gold-light/40',
    secondary: 'bg-teal hover:bg-teal-light text-white shadow-md hover:shadow-lg focus-visible:ring-teal',
    outline: 'border border-navy/40 text-navy hover:bg-navy hover:text-white focus-visible:ring-navy',
    'outline-light': 'border border-white/60 text-white hover:bg-white hover:text-navy focus-visible:ring-white backdrop-blur-xs',
    ghost: 'text-navy hover:bg-navy/5 focus-visible:ring-navy'
  }[variant];

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
          <span>{children}</span>
          {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
        </>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
};
