import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { SEO } from '../components/ui/SEO';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SafeImage } from '../components/ui/SafeImage';
import { ShieldAlert } from 'lucide-react';
import { siteConfig } from '../data/site';

export const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory text-slate-800">
      <SEO
        title="Terms and Conditions"
        description="Booking terms, consultation conditions, and service policies for Wanderlux Travels clients."
        canonical="/terms"
      />

      <Header transparentOnHero={false} />

      <section className="pt-32 pb-12 bg-navy text-white text-center relative overflow-hidden">
        <SafeImage
          src="/images/hero/hero-3.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          containerClassName="absolute inset-0"
          loading="eager"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/80 to-navy/65" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} light className="justify-center mb-4" />
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">Terms and Conditions</h1>
          <p className="mt-2 text-slate-300 text-sm">Last updated: November 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Legal Template Notice */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 mb-8 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block mb-0.5">Template Notice:</strong>
              These Terms & Conditions constitute a starter template outlining standard travel agency operations. The final commercial booking contract will be formalized upon mutual agreement and client signature.
            </div>
          </div>

          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 space-y-6 text-sm text-slate-700 leading-relaxed">
            <h2 className="font-serif text-xl font-bold text-navy">1. Inquiries & Indicative Pricing</h2>
            <p>
              Prices published on this website are indicative luxury planning benchmarks denominated in US Dollars (USD), calculated on twin-share occupancy in verified 4-star and 5-star properties. Submitting an inquiry through this website does not obligate the client or confirm a flight or hotel reservation. Binding quotes are issued following one-on-one consultation and verification of live supplier availability.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy">2. Bookings, Deposits & Confirmation</h2>
            <p>
              A formal travel reservation is confirmed only upon receipt of the agreed deposit and issuance of a written booking confirmation voucher. Deposit percentages and payment schedules vary according to airline, cruise, and luxury villa policies and will be clearly specified in your proposal.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy">3. Visa & Immigration Protocols</h2>
            <p>
              Wanderlux Travels provides professional document verification, flight reservations, and lodging vouchers to support tourist visa applications. However, sovereign embassies and immigration authorities make all visa issuance decisions. {siteConfig.brandName} does not issue visas and cannot guarantee visa approvals. Clients are responsible for ensuring that their passports hold at least six (6) months of validity from the date of travel.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy">4. Cancellations & Modifications</h2>
            <p>
              Cancellation and modification charges depend on the policies of participating airlines, hotel properties, and local transport operators. Non-refundable components (such as private charter seaplanes, non-refundable hotel allocations, and peak-season flight tickets) will be identified in advance.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy">5. Travel Insurance Requirement</h2>
            <p>
              We strongly advise all international travelers to obtain comprehensive travel and medical insurance covering emergency hospitalization, medical evacuation, trip cancellation, and baggage loss.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy">6. Limitation of Liability</h2>
            <p>
              {siteConfig.brandName} coordinates services with licensed third-party airlines, hotels, and transport operators. While we exercise diligence in selecting reputable partners, we are not liable for disruptions resulting from sovereign border closures, meteorological events, or unforeseen acts of force majeure.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
