import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItemData {
  id: string | number;
  title: string;
  subtitle?: string;
  badge?: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  defaultOpenIndex?: number;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpenIndex = 0,
  className = ''
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>(
    defaultOpenIndex !== undefined && defaultOpenIndex >= 0 ? [defaultOpenIndex] : []
  );

  const toggle = (index: number) => {
    if (allowMultiple) {
      if (openIndices.includes(index)) {
        setOpenIndices(openIndices.filter(i => i !== index));
      } else {
        setOpenIndices([...openIndices, index]);
      }
    } else {
      setOpenIndices(openIndices.includes(index) ? [] : [index]);
    }
  };

  return (
    <div className={`divide-y divide-slate-200 border-y border-slate-200 ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openIndices.includes(idx);

        return (
          <div key={item.id} className="py-4 transition-colors">
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="flex items-center justify-between w-full text-left font-serif text-lg sm:text-xl text-navy font-medium py-1 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm cursor-pointer"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3 pr-4 flex-wrap">
                {item.badge && (
                  <span className="text-xs uppercase font-sans tracking-widest px-2.5 py-0.5 rounded-full bg-gold/15 text-gold-dark font-semibold">
                    {item.badge}
                  </span>
                )}
                <span className="group-hover:text-gold transition-colors">{item.title}</span>
                {item.subtitle && (
                  <span className="text-xs font-sans text-slate-500 font-normal">
                    {item.subtitle}
                  </span>
                )}
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gold transition-transform duration-300 shrink-0 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {isOpen && (
              <div className="mt-3 text-slate-600 font-sans text-sm sm:text-base leading-relaxed pl-1 animate-fadeIn">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
