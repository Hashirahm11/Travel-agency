import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ShieldCheck, Heart, Sparkles, Globe, ArrowRight, Info } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { SEO } from '../components/ui/SEO';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SafeImage } from '../components/ui/SafeImage';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory text-slate-800">
      <SEO
        title="About Us & Travel Philosophy"
        description="Learn about Wanderlux Travels — our dedication to handcrafted luxury travel, authentic destination research, and personalized hospitality."
        canonical="/about"
      />

      <Header transparentOnHero={false} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy text-white overflow-hidden">
        <SafeImage
          src="/images/hero/hero-1.jpg"
          alt="Swiss Alps mountain majesty"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          containerClassName="absolute inset-0"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/60" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumbs
            items={[{ label: 'About Us' }]}
            light
            className="justify-center mb-6"
          />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold-light text-xs font-semibold uppercase tracking-widest border border-gold/30 mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Our Heritage & Philosophy</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Crafting Journeys Beyond the Ordinary
          </h1>

          <p className="mt-6 text-slate-300 text-base sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Founded on the belief that true luxury lies in authentic discovery, unhurried pacing, and profound peace of mind.
          </p>
        </div>
      </section>

      {/* Brand Introduction & Travel Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-dark block mb-2">
                Our Travel Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-navy leading-tight">
                Travel is an art form, not an assembly line.
              </h2>

              <p className="mt-6 text-slate-600 text-base leading-relaxed">
                In an era dominated by automated booking algorithms and crowded commercial bus tours, Wanderlux Travels was envisioned as a modern sanctuary for travelers who crave intimacy, depth, and genuine refinement.
              </p>

              <p className="mt-4 text-slate-600 text-base leading-relaxed">
                We believe that the most treasured travel memories rarely happen at crowded selfie spots. They unfold during quiet mornings overlooking the mist rising from Tegalalang rice terraces, in conversations with a local historian over Turkish coffee in Istanbul, or gazing up at the serrated peaks of Passu Cones in northern Pakistan from your private terrace.
              </p>

              <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-2 gap-6 text-left">
                <div>
                  <span className="block font-serif text-2xl font-bold text-navy">100%</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Custom Tailored</span>
                </div>
                <div>
                  <span className="block font-serif text-2xl font-bold text-navy">Verified</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Partner Hotels</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <SafeImage
                  src="/images/destinations/paris.jpg"
                  alt="Parisian balcony view"
                  className="w-full h-[450px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-navy text-white p-6 rounded-2xl shadow-xl max-w-xs hidden sm:block border border-gold/30">
                <p className="font-serif italic text-sm text-gold-light">
                  "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes."
                </p>
                <span className="block text-[11px] text-slate-300 mt-2 uppercase tracking-widest">
                  — Marcel Proust
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-ivory border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-navy text-gold flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy mb-4">Our Mission</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                To design bespoke, culturally respectful, and seamless international travel experiences that free our guests from administrative burdens, allowing them to connect authentically with the natural beauty and heritage of our world.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-gold text-navy flex items-center justify-center mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy mb-4">Our Vision</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                To become the region’s most trusted boutique travel atelier, celebrated for uncompromising honesty, factual precision, cultural sensitivity, and world-class itinerary craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-dark block mb-2">
              Principles We Live By
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-navy">
              Our Core Company Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-ivory/50 border border-slate-200 hover:border-gold/50 transition-colors">
              <ShieldCheck className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-serif text-lg font-bold text-navy mb-2">Unwavering Integrity</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                We never fabricate credentials, exaggerate ratings, or create artificial scarcity. All pricing estimates reflect honest market benchmarks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-ivory/50 border border-slate-200 hover:border-gold/50 transition-colors">
              <Sparkles className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-serif text-lg font-bold text-navy mb-2">Attention to Detail</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                From sunset orientation on your private terrace to dietary accommodations on domestic flights, no nuance is too small for our attention.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-ivory/50 border border-slate-200 hover:border-gold/50 transition-colors">
              <Heart className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-serif text-lg font-bold text-navy mb-2">Cultural Respect</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                We champion responsible tourism that honors local heritage, supports native artisans, and preserves fragile high-altitude ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Information Transparency Note */}
      <section className="py-12 bg-navy text-slate-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
            <Info className="w-6 h-6 text-gold shrink-0 mt-1" />
            <div className="text-xs sm:text-sm leading-relaxed">
              <span className="font-semibold text-white block mb-1">Corporate Profile & Operations Note</span>
              Wanderlux Travels operates on a strict transparency standard. Company registration numbers, physical headquarters addresses, and verified executive contacts are maintained in editable configuration in <code className="bg-black/50 text-gold-light px-1 py-0.5 rounded">src/data/site.ts</code> and will be published upon regulatory certification. Stock photography is never falsely portrayed as agency personnel.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ivory text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy">
            Start Planning Your Bespoke Itinerary
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Our travel advisors are ready to translate your vacation ideas into a refined reality.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-sm tracking-wide uppercase shadow-lg hover:shadow-xl transition-all"
            >
              <span>Schedule Trip Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
