import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { SEO } from '../components/ui/SEO';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SafeImage } from '../components/ui/SafeImage';
import { blogPosts } from '../data/blog';

export const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory text-slate-800">
      <SEO
        title="Travel Guides & Destination Intelligence"
        description="In-depth travel guides, seasonal planning insights, packing checklists, and local knowledge written by Wanderlux destination specialists."
        canonical="/blog"
      />

      <Header transparentOnHero={false} />

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-navy text-white text-center relative overflow-hidden">
        <SafeImage
          src="/images/blog/blog-hunza-seasons.jpg"
          alt="Karakoram mountains in Hunza Valley"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          containerClassName="absolute inset-0"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/75 to-navy/60" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ label: 'Travel Guides' }]}
            light
            className="justify-center mb-6"
          />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold-light text-xs font-semibold uppercase tracking-widest border border-gold/30 mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Field Intelligence & Guides</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Travel Guides & Insights
          </h1>

          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Researched destination dispatches covering optimal travel seasons, logistical nuances, and authentic cultural experiences.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-200/80 hover:border-gold/40 flex-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <SafeImage
                    src={post.heroImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-navy/85 text-gold-light backdrop-blur-xs border border-gold/30">
                      {post.tags[0]}
                    </span>
                  </div>
                </div>

                <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-gold" />
                        <span>{post.date}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-gold" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-navy group-hover:text-gold-dark transition-colors leading-snug">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="mt-3 text-slate-600 text-sm line-clamp-3 leading-relaxed">
                      {post.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-navy group-hover:text-gold transition-colors"
                    >
                      <span>Read Complete Guide</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
