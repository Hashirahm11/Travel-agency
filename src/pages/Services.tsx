import React from 'react';
import { Link } from 'react-router-dom';
import {
  Plane,
  Building2,
  FileCheck,
  ShieldCheck,
  Compass,
  Car,
  Heart,
  Users,
  Briefcase,
  UsersRound,
  Sparkles,
  Headphones,
  Check,
  ArrowRight
} from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { SEO } from '../components/ui/SEO';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SafeImage } from '../components/ui/SafeImage';
import { services } from '../data/services';

const ICON_MAP: Record<string, React.ElementType> = {
  Plane,
  Building2,
  FileCheck,
  ShieldCheck,
  Compass,
  Car,
  Heart,
  Users,
  Briefcase,
  UsersRound,
  Moon: Sparkles,
  Headphones
};

export const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory text-slate-800">
      <SEO
        title="Comprehensive Travel Concierge Services"
        description="Explore our twelve dedicated travel planning services, from business-class flight routing and vetted luxury hotel suites to visa document guidance and private transfers."
        canonical="/services"
      />

      <Header transparentOnHero={false} />

      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-navy text-white text-center relative overflow-hidden">
        <SafeImage
          src="/images/hero/hero-2.jpg"
          alt="Santorini caldera"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          containerClassName="absolute inset-0"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/60" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: 'Services' }]}
            light
            className="justify-center mb-6"
          />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold-light text-xs font-semibold uppercase tracking-widest border border-gold/30 mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Comprehensive Travel Concierge</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Our Travel Services
          </h1>

          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Every facet of your journey is coordinated with professional care, transparent pricing, and attentive personal communication.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((srv, idx) => {
            const Icon = ICON_MAP[srv.icon] || Compass;
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={srv.id}
                id={srv.slug}
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-14 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-lg transition-all ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Image */}
                <div className="w-full lg:w-1/2 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md">
                  <SafeImage
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 p-3 rounded-2xl bg-navy/80 text-gold-light backdrop-blur-xs border border-gold/30">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-dark">
                    <span>Service 0{idx + 1}</span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy">
                    {srv.title}
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {srv.fullDescription}
                  </p>

                  <div className="pt-2">
                    <h3 className="text-xs uppercase font-bold tracking-wider text-navy mb-3">
                      Key Client Benefits:
                    </h3>
                    <ul className="space-y-2">
                      {srv.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <Check className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Link
                      to={`/contact?service=${encodeURIComponent(srv.title)}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy hover:bg-gold hover:text-navy text-white font-semibold text-xs uppercase tracking-wider transition-all"
                    >
                      <span>Inquire About {srv.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-slate-200 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy">
            Looking for a Combination of Services?
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            All services can be bundled into a bespoke luxury package with dedicated itinerary management.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-sm tracking-wide uppercase shadow-lg hover:shadow-xl transition-all"
            >
              <span>Speak with a Travel Concierge</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
