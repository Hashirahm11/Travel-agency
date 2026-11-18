import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  light?: boolean;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  className = '',
  light = false
}) => {
  return (
    <nav aria-label="Breadcrumb" className={`text-xs ${className}`}>
      <ol className="flex items-center flex-wrap gap-1.5">
        <li>
          <Link
            to="/"
            className={`inline-flex items-center gap-1 transition-colors hover:text-gold ${
              light ? 'text-slate-300' : 'text-slate-500'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;

          return (
            <li key={idx} className="flex items-center gap-1.5">
              <ChevronRight
                className={`w-3 h-3 ${light ? 'text-slate-400' : 'text-slate-400'}`}
                aria-hidden="true"
              />
              {isLast || !item.path ? (
                <span
                  className={`font-medium ${light ? 'text-gold-light' : 'text-navy font-semibold'}`}
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className={`transition-colors hover:text-gold ${
                    light ? 'text-slate-300' : 'text-slate-500'
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
