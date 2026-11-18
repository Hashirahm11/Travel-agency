import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { SEO } from '../components/ui/SEO';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SafeImage } from '../components/ui/SafeImage';
import { ShieldAlert } from 'lucide-react';
import { siteConfig } from '../data/site';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory text-slate-800">
      <SEO
        title="Privacy Policy"
        description="Privacy policy and data handling principles for Wanderlux Travels clients and web visitors."
        canonical="/privacy-policy"
      />

      <Header transparentOnHero={false} />

      <section className="pt-32 pb-12 bg-navy text-white text-center relative overflow-hidden">
        <SafeImage
          src="/images/hero/hero-1.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          containerClassName="absolute inset-0"
          loading="eager"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/80 to-navy/65" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} light className="justify-center mb-4" />
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">Privacy Policy</h1>
          <p className="mt-2 text-slate-300 text-sm">Last updated: November 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Legal Template Notice */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 mb-8 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block mb-0.5">Template Notice & Disclaimer:</strong>
              This Privacy Policy serves as an initial operational template reflecting the current demonstration status of the website. It must be reviewed and customized by the legal counsel of {siteConfig.brandName} before deployment with live customer analytics, payment gateways, or third-party marketing integrations.
            </div>
          </div>

          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 space-y-6 text-sm text-slate-700 leading-relaxed">
            <h2 className="font-serif text-xl font-bold text-navy">1. Information We Collect</h2>
            <p>
              When you submit a trip consultation inquiry through our website, we collect only the personal information you voluntarily provide. This includes your full name, email address, telephone/WhatsApp number, destination interest, intended travel dates, group size, and custom journey preferences.
            </p>
            <p>
              In our current demonstration environment, inquiries are processed for display preview purposes only and are not shared with commercial third-party data brokers.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy">2. How We Use Your Information</h2>
            <p>
              The information you provide is used exclusively to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Prepare and deliver customized travel itinerary proposals.</li>
              <li>Communicate regarding flight bookings, hotel reservations, or visa requirements.</li>
              <li>Coordinate with vetted ground transport chauffeurs and local guides upon trip confirmation.</li>
            </ul>

            <h2 className="font-serif text-xl font-bold text-navy">3. Third-Party Tracking & Cookies</h2>
            <p>
              This website does not currently deploy invasive tracking cookies, third-party advertising pixels, or behavioral profiling trackers. Essential technical cookies may be utilized solely for navigational responsiveness and session security.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy">4. Data Security</h2>
            <p>
              We maintain administrative and technical safeguards designed to protect personal data against unauthorized disclosure or loss. When third-party services (such as flight reservation systems or hotel booking channels) are engaged on your behalf, we transmit only information required for regulatory travel compliance.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy">5. Contact Information</h2>
            <p>
              For questions concerning this Privacy Policy or to request deletion of your consultation records, please contact our data coordinator via the communication details specified in our website configuration.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
