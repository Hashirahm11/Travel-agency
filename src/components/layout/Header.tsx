import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { Menu, X, Compass, PhoneCall } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { siteConfig } from '../../data/site';

interface HeaderProps {
  transparentOnHero?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ transparentOnHero = true }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setIsMobileMenuOpen(false);
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Packages', path: '/packages' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Travel Guides', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const useTransparent = isHomePage && transparentOnHero && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        useTransparent
          ? 'bg-gradient-to-b from-navy/90 via-navy/50 to-transparent py-3 sm:py-5'
          : 'bg-navy/95 backdrop-blur-md shadow-lg border-b border-gold/15 py-2.5 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          {/* Logo */}
          <Logo variant="light" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-colors duration-200 ${
                    isActive
                      ? 'text-gold font-semibold bg-white/10'
                      : 'text-slate-200 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-navy font-semibold text-xs tracking-wider uppercase shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-gold"
            >
              Plan My Trip
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            <Link
              to="/contact"
              className="sm:hidden px-3 py-2 rounded-full bg-gold text-navy font-semibold text-[10px] uppercase tracking-wide whitespace-nowrap"
            >
              Inquire
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gold cursor-pointer"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-gold" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain bg-navy/98 border-t border-gold/20 shadow-2xl animate-fadeIn">
          <div className="px-4 sm:px-5 pt-3 sm:pt-4 pb-5 sm:pb-6 space-y-1.5 sm:space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `block min-h-11 px-4 py-3 rounded-xl text-sm font-medium tracking-wide transition-colors ${
                    isActive
                      ? 'text-gold bg-white/10 font-semibold'
                      : 'text-slate-200 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="pt-4 border-t border-white/10 mt-4 space-y-2">
              <Link
                to="/contact"
                className="w-full py-3 px-4 rounded-xl bg-gold hover:bg-gold-light text-navy font-semibold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-md"
              >
                <Compass className="w-4 h-4" />
                <span>Plan My Bespoke Journey</span>
              </Link>
              {siteConfig.isContactConfigured && (
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="w-full py-2.5 px-4 rounded-xl border border-white/20 text-white font-medium text-xs tracking-wider text-center flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-gold" />
                  <span>Call Us: {siteConfig.phone}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
