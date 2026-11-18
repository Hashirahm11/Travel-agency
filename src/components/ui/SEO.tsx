import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../../data/site';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = 'Wanderlux Travels curates bespoke, luxury international journeys, private villa stays, scenic rail expeditions, and authentic cultural exploration.',
  canonical,
  ogImage = '/images/hero/hero-1.jpg',
  ogType = 'website',
  jsonLd
}) => {
  const fullTitle = title
    ? `${title} | ${siteConfig.brandName}`
    : `${siteConfig.brandName} — ${siteConfig.tagline}`;

  const currentUrl = canonical
    ? `${siteConfig.canonicalUrl}${canonical}`
    : siteConfig.canonicalUrl;

  const fullOgImage = ogImage.startsWith('http')
    ? ogImage
    : `${siteConfig.canonicalUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description.slice(0, 160)} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description.slice(0, 160)} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content={siteConfig.brandName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description.slice(0, 160)} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Structured Data (JSON-LD) */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};
