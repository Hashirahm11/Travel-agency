import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Lightbulb } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { SEO } from '../components/ui/SEO';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SafeImage } from '../components/ui/SafeImage';
import { PackageCard } from '../components/cards/PackageCard';
import { blogPosts } from '../data/blog';
import { destinations } from '../data/destinations';
import { tourPackages } from '../data/packages';

export const BlogArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  // Related destination
  const relatedDestination = destinations.find(
    (d) => d.slug === post.relatedDestinationSlug
  );

  // Related packages
  const relatedPackages = tourPackages
    .filter((pkg) => pkg.destinationSlug === post.relatedDestinationSlug)
    .slice(0, 2);

  // Other blog guides
  const otherGuides = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-ivory text-slate-800">
      <SEO
        title={post.title}
        description={post.summary}
        canonical={`/blog/${post.slug}`}
        ogImage={post.heroImage}
        ogType="article"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.summary,
          image: post.heroImage,
          datePublished: '2026-11-01',
          author: {
            '@type': 'Organization',
            name: 'Wanderlux Travels Editorial Team'
          }
        }}
      />

      <Header transparentOnHero={false} />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 bg-navy text-white overflow-hidden">
        <SafeImage
          src={post.heroImage}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          containerClassName="absolute inset-0"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/60" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumbs
            items={[
              { label: 'Travel Guides', path: '/blog' },
              { label: post.title }
            ]}
            light
            className="justify-center mb-6"
          />

          <div className="flex items-center justify-center gap-3 text-xs text-gold-light uppercase tracking-widest font-semibold mb-4">
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

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-[11px] font-medium bg-white/10 text-slate-200 border border-white/20"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Article Content Layout */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-xs">
            {/* Lead Intro */}
            <p className="font-serif italic text-lg sm:text-xl text-navy leading-relaxed border-l-4 border-gold pl-6 py-1 mb-10">
              {post.content.intro}
            </p>

            {/* Article Sections */}
            <div className="space-y-10 text-slate-700 text-base leading-relaxed">
              {post.content.sections.map((sec, idx) => (
                <div key={idx} className="space-y-4">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy pt-4">
                    {sec.heading}
                  </h2>

                  {sec.body.map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}

                  {sec.tip && (
                    <div className="p-4 sm:p-5 rounded-2xl bg-gold/10 border border-gold/30 text-xs sm:text-sm text-navy flex items-start gap-3 mt-4">
                      <Lightbulb className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-gold-dark">Field Specialist Recommendation: </span>
                        <span>{sec.tip}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Conclusion */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <h3 className="font-serif text-xl font-bold text-navy mb-3">
                Final Planning Thoughts
              </h3>
              <p className="text-slate-700 text-base leading-relaxed">
                {post.content.conclusion}
              </p>
            </div>

            {/* Destination Link Card */}
            {relatedDestination && (
              <div className="mt-10 p-6 rounded-2xl bg-ivory border border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gold-dark block mb-1">
                    Related Destination Guide
                  </span>
                  <h4 className="font-serif text-xl font-bold text-navy">
                    {relatedDestination.name}, {relatedDestination.country}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-1">
                    {relatedDestination.shortDescription}
                  </p>
                </div>
                <Link
                  to={`/destinations/${relatedDestination.slug}`}
                  className="shrink-0 px-6 py-2.5 rounded-full bg-navy hover:bg-gold hover:text-navy text-white font-semibold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
                >
                  <span>Explore Destination</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Tour Packages */}
      {relatedPackages.length > 0 && (
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-dark block mb-2">
                Recommended Journeys
              </span>
              <h2 className="font-serif text-3xl font-medium text-navy">
                Featured Itineraries for This Destination
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedPackages.map((pkg) => (
                <PackageCard key={pkg.slug} pkg={pkg} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Read Next Guides */}
      {otherGuides.length > 0 && (
        <section className="py-16 bg-ivory border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="font-serif text-2xl font-bold text-navy mb-8 text-center">
              Continue Reading Travel Intelligence
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherGuides.map((guide) => (
                <Link
                  key={guide.slug}
                  to={`/blog/${guide.slug}`}
                  className="group p-6 bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold-dark block mb-1">
                      {guide.tags[0]}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-navy group-hover:text-gold-dark transition-colors line-clamp-2">
                      {guide.title}
                    </h4>
                    <p className="mt-2 text-xs text-slate-500 line-clamp-2">
                      {guide.summary}
                    </p>
                  </div>
                  <span className="mt-4 text-xs font-semibold text-navy group-hover:text-gold inline-flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};
