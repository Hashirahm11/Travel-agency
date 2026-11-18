import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, MapPin } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { SEO } from '../components/ui/SEO';
import { SafeImage } from '../components/ui/SafeImage';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory text-slate-800 flex flex-col justify-between">
      <SEO
        title="404 — Page Not Found"
        description="The travel page or destination you are searching for could not be found."
        canonical="/404"
      />

      <Header transparentOnHero={false} />

      <main className="relative isolate flex-1 flex items-center justify-center pt-32 pb-20 px-4 overflow-hidden bg-navy">
        <SafeImage
          src="/images/hero/hero-3.jpg"
          alt="Mountain peaks along the Karakoram Highway"
          className="absolute inset-0 w-full h-full object-cover"
          containerClassName="absolute inset-0"
          loading="eager"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy/80 via-navy/60 to-navy/70" />

        <div className="relative z-10 max-w-xl mx-auto text-center bg-white/95 backdrop-blur-md p-10 sm:p-14 rounded-3xl border border-slate-200/80 shadow-lg">
          <div className="w-16 h-16 mx-auto rounded-full bg-navy/5 text-gold flex items-center justify-center mb-6">
            <Compass className="w-8 h-8 animate-spin-slow" />
          </div>

          <span className="text-xs uppercase font-bold tracking-[0.3em] text-gold-dark block mb-2">
            Error 404
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy">
            Off the Beaten Path
          </h1>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            The destination or page you are seeking seems to have wandered beyond the map. Let us guide you back to our curated journeys.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-linear-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-navy font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </Link>

            <Link
              to="/destinations"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-navy hover:bg-navy-light text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4 text-gold" />
              <span>Browse Destinations</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
