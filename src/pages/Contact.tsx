import React from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Compass,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  MessageSquare,
  Info,
  Map
} from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { SEO } from '../components/ui/SEO';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SafeImage } from '../components/ui/SafeImage';
import { EnquiryForm } from '../components/ui/EnquiryForm';
import { Accordion, type AccordionItemData } from '../components/ui/Accordion';
import { siteConfig } from '../data/site';
import { generalFAQs } from '../data/faqs';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const requestedService = searchParams.get('service') || '';
  const initialDest = searchParams.get('dest') || '';

  // Accordion for general FAQs
  const faqItems: AccordionItemData[] = generalFAQs.map((faq, i) => ({
    id: i,
    title: faq.question,
    badge: faq.category,
    content: (
      <p className="text-slate-600 text-sm leading-relaxed">
        {faq.answer}
      </p>
    )
  }));

  return (
    <div className="min-h-screen bg-ivory text-slate-800">
      <SEO
        title="Bespoke Trip Consultation & Contact"
        description="Connect with Wanderlux Travels specialists to design your custom international vacation, luxury honeymoon, or private mountain expedition."
        canonical="/contact"
      />

      <Header transparentOnHero={false} />

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-navy text-white text-center relative overflow-hidden">
        <SafeImage
          src="/images/hero/hero-2.jpg"
          alt="Santorini village overlooking the Aegean Sea"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          containerClassName="absolute inset-0"
          loading="eager"
        />
        <div className="absolute inset-0 bg-linear-to-trom-navy via-navy/75 to-navy/60" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ label: 'Contact & Consultation' }]}
            light
            className="justify-center mb-6"
          />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold-light text-xs font-semibold uppercase tracking-widest border border-gold/30 mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Private Travel Advisory</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Schedule a Consultation
          </h1>

          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Tell us about your envisioned vacation. Our travel advisors craft day-by-day itineraries tailored to your pace and preferences.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Info Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Col: Contact Information & Hours */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-dark block mb-1">
                    Direct Assistance
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-navy">
                    Concierge Desk
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Available during business hours for itinerary planning inquiries.
                  </p>
                </div>

                <div className="space-y-4 text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block text-navy">Working Hours</span>
                      <span className="text-xs text-slate-500">{siteConfig.businessHours}</span>
                    </div>
                  </div>

                  {siteConfig.isContactConfigured ? (
                    <>
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold block text-navy">Telephone</span>
                          <a href={`tel:${siteConfig.phone}`} className="text-xs text-navy hover:text-gold transition-colors">
                            {siteConfig.phone}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MessageSquare className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold block text-navy">WhatsApp</span>
                          <a
                            href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-emerald-700 hover:text-emerald-800 font-medium"
                          >
                            Chat on WhatsApp
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold block text-navy">Email Inquiries</span>
                          <a href={`mailto:${siteConfig.email}`} className="text-xs text-navy hover:text-gold transition-colors">
                            {siteConfig.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold block text-navy">Office Address</span>
                          <span className="text-xs text-slate-500">{siteConfig.address}</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="p-4 bg-navy/5 rounded-2xl border border-navy/10 text-xs text-slate-600 space-y-2">
                      <div className="flex items-center gap-1.5 font-semibold text-navy">
                        <Info className="w-4 h-4 text-gold-dark" />
                        <span>Direct Contact Placeholder</span>
                      </div>
                      <p className="leading-relaxed">
                        Official telephone numbers, physical office location, and verified WhatsApp channels are managed in the central configuration file <code className="bg-white px-1 py-0.5 rounded border border-slate-300">src/data/site.ts</code>.
                      </p>
                      <p className="text-[11px] text-slate-500">
                        Inquiries submitted through this page are active in demonstration mode.
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-2">
                  <div className="flex items-center gap-2 text-navy font-semibold">
                    <ShieldCheck className="w-4 h-4 text-teal" />
                    <span>Planning Guarantee</span>
                  </div>
                  <p className="leading-relaxed text-[11px]">
                    Submitting an inquiry does not constitute a booking or incur any financial commitment. All proposals are provided with itemized costs for your review.
                  </p>
                </div>
              </div>

              {/* Location Placeholder Box */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs text-center">
                <div className="w-12 h-12 rounded-2xl bg-ivory text-gold-dark mx-auto flex items-center justify-center mb-3">
                  <Map className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-navy">Google Maps Integration</h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Interactive Google Maps can be embedded upon configuration of your verified physical office address in <code className="bg-slate-100 px-1 py-0.5 rounded">site.ts</code>.
                </p>
              </div>
            </div>

            {/* Right 2 Cols: Interactive Enquiry Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-md">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-dark block mb-1">
                    Bespoke Journey Consultation
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy">
                    Tell Us About Your Travel Plans
                  </h2>
                  {requestedService && (
                    <p className="text-xs text-teal-dark font-medium mt-1">
                      Inquiring for: <strong>{requestedService}</strong>
                    </p>
                  )}
                </div>

                <EnquiryForm initialDestination={initialDest} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General FAQs Accordion */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-dark block mb-2">
              Common Inquiries
            </span>
            <h2 className="font-serif text-3xl font-medium text-navy">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion items={faqItems} defaultOpenIndex={0} />
        </div>
      </section>

      <Footer />
    </div>
  );
};
