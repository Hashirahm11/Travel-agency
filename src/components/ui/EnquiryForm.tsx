import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle2, AlertCircle, Send, Info } from 'lucide-react';
import { destinations } from '../../data/destinations';
import { siteConfig } from '../../data/site';

const enquirySchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name (at least 2 characters)'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a valid phone number with country code'),
  destination: z.string().min(1, 'Please select your preferred destination'),
  travelDate: z.string().min(1, 'Please select your approximate travel month or date'),
  travelers: z.string().min(1, 'Please specify the number of travelers'),
  budgetRange: z.string().min(1, 'Please select your approximate budget'),
  tripType: z.string().min(1, 'Please select your trip type'),
  message: z.string().min(10, 'Please share a few details about your journey wishes (min 10 characters)'),
  // Honeypot field (must remain empty)
  websiteUrl: z.string().max(0, 'Spam detected')
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

interface EnquiryFormProps {
  initialDestination?: string;
  packageTitle?: string;
  onSuccess?: () => void;
  className?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialDestination = '',
  packageTitle,
  onSuccess,
  className = ''
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionData, setSubmissionData] = useState<EnquiryFormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      destination: initialDestination,
      travelDate: '',
      travelers: '2',
      budgetRange: '$500–$999',
      tripType: 'Bespoke Luxury Vacation',
      message: packageTitle ? `I am interested in customizing the "${packageTitle}" package.` : '',
      websiteUrl: ''
    }
  });

  const onSubmit = async (data: EnquiryFormData) => {
    // If honeypot is filled, abort silently
    if (data.websiteUrl) return;

    setIsSubmitting(true);

    // Simulate backend submission delay
    await new Promise((r) => setTimeout(r, 1200));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setSubmissionData(data);
    reset();
    if (onSuccess) onSuccess();
  };

  if (isSubmitted && submissionData) {
    return (
      <div className="bg-ivory/80 rounded-2xl p-6 sm:p-8 border border-gold/30 text-center animate-fadeIn">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="font-serif text-2xl text-navy font-semibold">
          Enquiry Received (Demo Preview)
        </h3>
        <p className="mt-2 text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
          Thank you, <strong className="text-navy">{submissionData.fullName}</strong>. Your enquiry for{' '}
          <strong className="text-navy">{submissionData.destination}</strong> has been logged in demonstration mode.
        </p>

        {/* Honest Demo Notification */}
        <div className="mt-4 p-3.5 bg-amber-50 border border-amber-200/80 rounded-xl text-left text-xs text-amber-900 flex items-start gap-2.5 max-w-lg mx-auto">
          <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold">Demo Notice: </span>
            This website is currently in portfolio demonstration mode. No live email dispatch has occurred. To connect a live backend, configure Formspree, EmailJS, or an internal API endpoint in <code className="bg-amber-100 px-1 py-0.5 rounded">src/components/ui/EnquiryForm.tsx</code>. Submitting an enquiry does not constitute a confirmed travel booking.
          </div>
        </div>

        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-6 inline-flex text-xs uppercase tracking-widest text-navy font-semibold hover:text-gold transition-colors cursor-pointer"
        >
          ← Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-4 ${className}`} noValidate>
      {/* Demo status alert badge */}
      <div className="flex items-center gap-2 p-3 bg-navy/5 border border-navy/15 rounded-xl text-xs text-navy/80">
        <Info className="w-4 h-4 text-gold-dark shrink-0" />
        <span>
          <strong>Inquiry Consultation:</strong> Quotes are customized to your travel dates. Submitting an inquiry does not obligate you or confirm a booking.
        </span>
      </div>

      {/* Hidden honeypot field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="websiteUrl">Leave this field blank</label>
        <input
          id="websiteUrl"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register('websiteUrl')}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="e.g. Tariq Mehmood"
            {...register('fullName')}
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-navy bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.fullName ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:ring-gold/30 focus:border-gold'
            }`}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1">
            Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="e.g. tariq@example.com"
            {...register('email')}
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-navy bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.email ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:ring-gold/30 focus:border-gold'
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone with country code */}
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1">
            Phone / WhatsApp <span className="text-rose-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+92 300 1234567"
            {...register('phone')}
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-navy bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.phone ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:ring-gold/30 focus:border-gold'
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.phone.message}
            </p>
          )}
        </div>

        {/* Destination Dropdown */}
        <div>
          <label htmlFor="destination" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1">
            Destination of Interest <span className="text-rose-500">*</span>
          </label>
          <select
            id="destination"
            {...register('destination')}
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-navy bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.destination ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:ring-gold/30 focus:border-gold'
            }`}
          >
            <option value="">Select a destination</option>
            {destinations.map((d) => (
              <option key={d.slug} value={`${d.name}, ${d.country}`}>
                {d.name}, {d.country}
              </option>
            ))}
            <option value="Multi-Country Bespoke Grand Tour">Multi-Country Bespoke Grand Tour</option>
          </select>
          {errors.destination && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.destination.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Travel Date */}
        <div>
          <label htmlFor="travelDate" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1">
            Approximate Travel Date <span className="text-rose-500">*</span>
          </label>
          <input
            id="travelDate"
            type="text"
            placeholder="e.g. May 2027 / Autumn"
            {...register('travelDate')}
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-navy bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.travelDate ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:ring-gold/30 focus:border-gold'
            }`}
          />
          {errors.travelDate && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.travelDate.message}
            </p>
          )}
        </div>

        {/* Travelers */}
        <div>
          <label htmlFor="travelers" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1">
            Number of Travelers <span className="text-rose-500">*</span>
          </label>
          <select
            id="travelers"
            {...register('travelers')}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-navy bg-white focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
          >
            <option value="1">1 Solo Traveler</option>
            <option value="2">2 Travelers (Couple)</option>
            <option value="3">3 Travelers</option>
            <option value="4">4 Travelers (Family)</option>
            <option value="5-8">5 to 8 Travelers (Small Group)</option>
            <option value="9+">9+ Travelers (Large Private Group)</option>
          </select>
        </div>

        {/* Trip Type */}
        <div>
          <label htmlFor="tripType" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1">
            Trip Style <span className="text-rose-500">*</span>
          </label>
          <select
            id="tripType"
            {...register('tripType')}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-navy bg-white focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
          >
            <option value="Honeymoon & Romantic">Honeymoon & Romantic</option>
            <option value="Family Holiday">Family Holiday</option>
            <option value="Bespoke Luxury Vacation">Bespoke Luxury Vacation</option>
            <option value="Adventure & High Altitude">Adventure & High Altitude</option>
            <option value="Cultural Heritage & Gastronomy">Cultural Heritage & Gastronomy</option>
            <option value="Corporate Retreat">Corporate Retreat</option>
          </select>
        </div>
      </div>

      {/* Budget Range */}
      <div>
        <label htmlFor="budgetRange" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1">
          Indicative Budget Preference (Per Person)
        </label>
        <select
          id="budgetRange"
          {...register('budgetRange')}
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-navy bg-white focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
        >
          <option value="$500–$999">$500–$999 per person</option>
          <option value="$1,000–$1,499">$1,000–$1,499 per person</option>
          <option value="$1,500–$2,499">$1,500–$2,499 per person</option>
          <option value="$2,500+ (Ultra Luxury)">$2,500+ (Ultra-Luxury & Suites)</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1">
          Journey Wishes & Specific Requirements <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="message"
          rows={3}
          placeholder="Tell us about special celebrations, dietary preferences, desired pacing, or specific hotel preferences..."
          {...register('message')}
          className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-navy bg-white focus:outline-none focus:ring-2 transition-all ${
            errors.message ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:ring-gold/30 focus:border-gold'
          }`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.message.message}
          </p>
        )}
      </div>

      {/* Passport Nationality Guidance Note */}
      <div className="text-[11px] text-slate-500">
        Default planning passport benchmark: <span className="font-medium text-navy">{siteConfig.defaultNationality}</span>. Passport requirements are confirmed individually for every guest.
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-navy font-semibold text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gold disabled:opacity-60 cursor-pointer"
      >
        {isSubmitting ? (
          <span>Processing Consultation Request...</span>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Submit Travel Inquiry</span>
          </>
        )}
      </button>
    </form>
  );
};
