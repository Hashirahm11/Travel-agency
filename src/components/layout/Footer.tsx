import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Clock, ShieldCheck, Compass, ExternalLink, ArrowRight } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { siteConfig } from '../../data/site';
import { destinations } from '../../data/destinations';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {

  return (
    <footer className="bg-linear-to-b from-navy to-navy-dark text-slate-300 border-t border-gold/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-10 gap-y-12 pb-12 sm:pb-14 border-b border-white/10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-5">
            <Logo variant="light" showTagline />
            <p className="text-sm sm:text-base text-slate-300 font-light leading-7 max-w-md">
              Wanderlux Travels crafts extraordinary, tailor-made journeys for discerning travelers. From pristine Maldivian lagoons and alpine Swiss chalets to the dramatic granite spires of northern Pakistan, we create memories beyond the ordinary.
            </p>

            <div className="inline-flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
              <ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <span className="leading-relaxed">Certified partner accommodations & licensed ground operators</span>
            </div>

            {/* Fact & Credit Docs */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <a
                href="/DATA_SOURCES.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-gold-light flex items-center gap-1.5 transition-colors"
              >
                <span>Fact Verification Registry</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="/images/CREDITS.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-gold-light flex items-center gap-1.5 transition-colors"
              >
                <span>Image Credits Registry</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-white text-lg font-semibold tracking-wide mb-5 flex items-center gap-2">
              <Compass className="w-4 h-4 text-gold" />
              <span>Explore</span>
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-gold-light transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-light transition-colors">About Us & Philosophy</Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-gold-light transition-colors">All 13 Destinations</Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-gold-light transition-colors">Tour Packages</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-light transition-colors">Travel Services</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gold-light transition-colors">Inspiration Gallery</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-gold-light transition-colors">Travel Guides & Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-light transition-colors">Trip Consultation</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Destinations */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-white text-lg font-semibold tracking-wide mb-5">
              Featured Destinations
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              {destinations.slice(0, 7).map((d) => (
                <li key={d.slug}>
                  <Link to={`/destinations/${d.slug}`} className="hover:text-gold-light transition-colors">
                    {d.name}, {d.country}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Services & Contact Consultation */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-white text-lg font-semibold tracking-wide mb-5">
              Consultation Desk
            </h4>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="leading-relaxed">{siteConfig.businessHours}</span>
              </div>

              {siteConfig.isContactConfigured ? (
                <>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <a href={`tel:${siteConfig.phone}`} className="hover:text-gold-light transition-colors">{siteConfig.phone}</a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <a href={`mailto:${siteConfig.email}`} className="break-all hover:text-gold-light transition-colors">{siteConfig.email}</a>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{siteConfig.address}</span>
                  </div>
                </>
              ) : (
                <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-slate-300 text-sm leading-relaxed">
                  <span className="text-gold-light font-medium block mb-1">Direct Contact Placement</span>
                  Official headquarters phone numbers and office addresses can be configured directly in <code className="text-white bg-black/40 px-1 py-0.5 rounded">src/data/site.ts</code>. Online inquiries remain operational.
                </div>
              )}

              <div className="pt-1">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-gold text-navy font-semibold text-sm uppercase tracking-wide hover:bg-gold-light transition-colors"
                >
                  Send Travel Inquiry
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods & Legal Disclaimer */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/4 px-5 py-5 sm:px-6 sm:py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-white">Secure, flexible payments</p>
              <p className="mt-1 text-sm text-slate-300 leading-relaxed">
                Bank transfer, PayPak, Visa, MasterCard, and certified pay order.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
            <Link to="/privacy-policy" className="text-slate-300 hover:text-gold-light transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-300 hover:text-gold-light transition-colors">Terms & Conditions</Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-slate-400">
          <p>© {CURRENT_YEAR} Wanderlux Travels. All rights reserved.</p>
          <p>Prices shown in USD ($); all estimates are indicative.</p>
        </div>
      </div>
    </footer>
  );
};
